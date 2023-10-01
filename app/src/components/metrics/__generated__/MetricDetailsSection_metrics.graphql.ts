/**
 * @generated SignedSource<<3f93779e12b7323d21dae93521fc6bea>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type MetricDetailsSection_metrics$data = {
  readonly dataPoints: {
    readonly edges: ReadonlyArray<{
      readonly node: {
        readonly time: string;
        readonly value: number;
      };
    }>;
    readonly totalCount: number;
  } | null;
  readonly unitShort: string | null;
  readonly " $fragmentSpreads": FragmentRefs<"LineChart_metrics">;
  readonly " $fragmentType": "MetricDetailsSection_metrics";
};
export type MetricDetailsSection_metrics$key = {
  readonly " $data"?: MetricDetailsSection_metrics$data;
  readonly " $fragmentSpreads": FragmentRefs<"MetricDetailsSection_metrics">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "MetricDetailsSection_metrics",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "unitShort",
      "storageKey": null
    },
    {
      "alias": "dataPoints",
      "args": null,
      "concreteType": "MetricsDataPointsConnection",
      "kind": "LinkedField",
      "name": "metricsDataPointsCollection",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "totalCount",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "concreteType": "MetricsDataPointsEdge",
          "kind": "LinkedField",
          "name": "edges",
          "plural": true,
          "selections": [
            {
              "alias": null,
              "args": null,
              "concreteType": "MetricsDataPoints",
              "kind": "LinkedField",
              "name": "node",
              "plural": false,
              "selections": [
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "time",
                  "storageKey": null
                },
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "value",
                  "storageKey": null
                }
              ],
              "storageKey": null
            }
          ],
          "storageKey": null
        }
      ],
      "storageKey": null
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "LineChart_metrics"
    }
  ],
  "type": "Metrics",
  "abstractKey": null
};

(node as any).hash = "1a237da51ece1cc288cce3622840cce4";

export default node;
