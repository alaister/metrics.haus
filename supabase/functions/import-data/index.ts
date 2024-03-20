// Follow this setup guide to integrate the Deno language server with your editor:
// https://deno.land/manual/getting_started/setup_your_environment
// This enables autocomplete, go to definition, etc.

import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { parse as parseCsv } from "https://deno.land/std@0.168.0/encoding/csv.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

export const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface ImportUserMappings {
  csvOptions: CsvOptions;
  timestamp: CsvTimestampMapping;
  metricMappings: MetricMapping[];
}

type CsvTimestampMapping = {
  columnMapping: CsvColumnMappingIndex | CsvColumnMappingName;
  timezone?: string;
};

type CsvOptions = {
  columnSeparator: string;
};

type MetricMapping = {
  metricId: string;
  columnMapping: CsvColumnMappingIndex | CsvColumnMappingName;
};

type CsvColumnMapping = {
  type: "index" | "name";
};

type CsvColumnMappingIndex = CsvColumnMapping & {
  index: number;
};

type CsvColumnMappingName = CsvColumnMapping & {
  name: string;
};

serve(async (req) => {
  // This is needed if you're planning to invoke your function from a browser.
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  const { importId } = await req.json();

  const supabaseClient = createClient(
    Deno.env.get("SUPABASE_URL") ?? "",
    Deno.env.get("SUPABASE_ANON_KEY") ?? "",
    {
      global: { headers: { Authorization: req.headers.get("Authorization")! } },
    }
  );

  const { data: importData, error } = await supabaseClient
    .from("imports")
    .select("*")
    .eq("id", importId)
    .single();
  if (error) {
    console.error(error);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
    });
  }

  if (importData.status === "finished") {
    console.log("Already finished");
    return new Response(JSON.stringify({ error: "Import already finished" }), {
      status: 400,
    });
  }

  const userMappings = importData.mapping as ImportUserMappings;

  if (!userMappings) {
    console.log("No mappings found");
    return new Response(JSON.stringify({ error: "No mappings found" }), {
      status: 400,
    });
  }

  await supabaseClient
    .from("imports")
    .update({
      status: "data_importing",
    })
    .eq("id", importId);

  const { data: file } = await supabaseClient.storage
    .from("imports")
    .download(importData.file_path);

  const text = await file.text();

  const content = await parseCsv(text, {
    skipFirstRow: true,
    separator: userMappings.csvOptions.columnSeparator,
    lazyQuotes: true,
  });

  const dataRows = (content as Record<string, string>[]).flatMap((row) =>
    parseDataRow(row, userMappings)
  );

  const { error: errorInsertingMetrics } = await supabaseClient
    .from("metrics_data_points")
    .upsert(
      dataRows.map((dataRow) => ({
        time: dataRow.timestamp.toISOString(),
        metric_id: dataRow.metricId,
        value: dataRow.value,
        reported_by: importData.uploaded_by,
      })),
      { ignoreDuplicates: true }
    );

  if (errorInsertingMetrics) {
    await supabaseClient
      .from("imports")
      .update({
        status: "failed",
      })
      .eq("id", importId);

    console.error(errorInsertingMetrics);

    return new Response(
      JSON.stringify({ error: errorInsertingMetrics.message }),
      {
        status: 500,
      }
    );
  }

  await supabaseClient
    .from("imports")
    .update({
      status: "finished",
    })
    .eq("id", importId);

  return new Response(JSON.stringify({ dataRows }), {
    headers: { "Content-Type": "application/json" },
  });
});

type DataRow = {
  metricId: string;
  timestamp: Date;
  value: number;
};

function parseDataRow(
  row: Record<string, string>,
  userMappings: ImportUserMappings
): DataRow[] {
  const keys = Object.keys(row);

  const timestamp = parseTimestamp(row, keys, userMappings.timestamp);

  if (isNaN(+timestamp)) return [];

  return userMappings.metricMappings.flatMap((metricMapping) => {
    const valueAsString = parseValueAsString(
      row,
      keys,
      metricMapping.columnMapping
    )
      .trim()
      .replace("%", "")
      .replace(",", "");

    if (!valueAsString) return [];

    const cleanNumber = Number(valueAsString);

    if (isNaN(Number(cleanNumber))) return [];

    return {
      timestamp,
      metricId: metricMapping.metricId,
      value: cleanNumber,
    };
  });
}

function parseTimestamp(
  row: Record<string, string>,
  keys: string[],
  timestampMapping: CsvTimestampMapping
) {
  const stringValue = parseValueAsString(
    row,
    keys,
    timestampMapping.columnMapping
  );

  // TODO respect timezone setting
  // TOOD more sophisticated parsing

  return new Date(stringValue);
}

function parseValueAsString(
  row: Record<string, string>,
  keys: string[],
  columnMapping: CsvColumnMappingIndex | CsvColumnMappingName
): string {
  switch (columnMapping.type) {
    case "index":
      return row[keys[(columnMapping as CsvColumnMappingIndex).index]] || "";
    case "name":
      return row[(columnMapping as CsvColumnMappingName).name] || "";
  }
}

/* To invoke:
 curl -i --location --request POST 'http://localhost:54321/functions/v1/import-data' \
   --header 'Authorization: Bearer ...' \
   --header 'Content-Type: application/json' \
   --data '{"importId":"9e96cb04-b06b-41bd-8293-2fce98f71d3c"}'
*/
