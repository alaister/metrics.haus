/**
 * @generated SignedSource<<1a815c3a895a169273b9ddc0b451bc0f>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type LineChart_metrics$data = {
  readonly metricsDataPointsCollection: {
    readonly edges: ReadonlyArray<{
      readonly node: {
        readonly nodeId: string;
        readonly time: string;
        readonly value: number;
      };
    }>;
  } | null;
  readonly " $fragmentType": "LineChart_metrics";
};
export type LineChart_metrics$key = {
  readonly " $data"?: LineChart_metrics$data;
  readonly " $fragmentSpreads": FragmentRefs<"LineChart_metrics">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "LineChart_metrics",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "MetricsDataPointsConnection",
      "kind": "LinkedField",
      "name": "metricsDataPointsCollection",
      "plural": false,
      "selections": [
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
                  "name": "nodeId",
                  "storageKey": null
                },
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
    }
  ],
  "type": "Metrics",
  "abstractKey": null
};

(node as any).hash = "2f0eb60802aa1c70ac1407985451fb01";

export default node;
