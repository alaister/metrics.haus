/**
 * @generated SignedSource<<61f7f98a927e21ac340bb2d1e4b0a2e8>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type MetricDetailsSection_metrics$data = {
  readonly commentsCollection: {
    readonly edges: ReadonlyArray<{
      readonly node: {
        readonly message: string;
        readonly profileId: string;
        readonly replyTo: string | null;
      };
    }>;
  } | null;
  readonly dataPoints: {
    readonly totalCount: number;
  } | null;
  readonly id: string;
  readonly " $fragmentSpreads": FragmentRefs<"Comments_metrics" | "LineChart_metrics">;
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
      "name": "id",
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
        }
      ],
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "CommentsConnection",
      "kind": "LinkedField",
      "name": "commentsCollection",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "concreteType": "CommentsEdge",
          "kind": "LinkedField",
          "name": "edges",
          "plural": true,
          "selections": [
            {
              "alias": null,
              "args": null,
              "concreteType": "Comments",
              "kind": "LinkedField",
              "name": "node",
              "plural": false,
              "selections": [
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "profileId",
                  "storageKey": null
                },
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "message",
                  "storageKey": null
                },
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "replyTo",
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
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "Comments_metrics"
    }
  ],
  "type": "Metrics",
  "abstractKey": null
};

(node as any).hash = "5331ef436d7265d6b8f258116b7b87d0";

export default node;
