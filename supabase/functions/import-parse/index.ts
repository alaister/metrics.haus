/**
 * Function for initially parsing a file uploaded for an import
 *
 * Responsible for
 * - Verifying that the data is actually readable
 * - Parse structure, i.e. columns of a CSV in order to suggest a mapping for a user
 *  - Persisted to the database
 *
 * NOT responsible for
 * - Actually importing any data
 */
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

serve(async (req) => {
  const { importId } = await req.json();

  const supabaseClient = createClient(
    // Supabase API URL - env var exported by default.
    Deno.env.get("SUPABASE_URL") ?? "",
    // Supabase API ANON KEY - env var exported by default.
    Deno.env.get("SUPABASE_ANON_KEY") ?? "",
    // Create client with Auth context of the user that called the function.
    // This way your row-level-security (RLS) policies are applied.
    {
      global: { headers: { Authorization: req.headers.get("Authorization")! } },
    }
  );

  const { data, error } = await supabaseClient
    .from("imports")
    .select("*")
    .eq("id", importId)
    .single();
  if (error) throw error;

  const { data: file } = await supabaseClient.storage
    .from("imports")
    .download(data.file_path);

  // file contents are returned as a blob, we can convert it to utf-8 text by calling text() method.
  const contents = await file.text();
  const lines = contents.split("\r\n");

  const firstLine = lines[0];

  const columnNames = firstLine.split(",").filter((it) => it.trim().length > 0);
  const lineCount = lines.length;

  const metadata = {
    columnNames,
    lineCount,
  };

  await supabaseClient
    .from("imports")
    .update({
      metadata,
    })
    .eq("id", importId);

  return new Response(JSON.stringify({ metadata }), {
    headers: { "Content-Type": "application/json" },
  });
});

// To invoke:
// curl -i --location --request POST 'http://localhost:54321/functions/v1/import-parse' \
//   --header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZS1kZW1vIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImV4cCI6MTk4MzgxMjk5Nn0.EGIM96RAZx35lJzdJsyH-qQwv8Hdp7fsn3W0YpN81IU' \
//   --header 'Content-Type: application/json' \
//   --data '{"importId":"24e532da-2a08-436c-8851-faf54741db47"}'
