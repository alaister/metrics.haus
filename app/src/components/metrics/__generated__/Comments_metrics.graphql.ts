/**
 * @generated SignedSource<<5086238476b390e4022b5d18369f525c>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type Comments_metrics$data = {
  readonly commentsCollection: {
    readonly edges: ReadonlyArray<{
      readonly node: {
        readonly message: string;
        readonly profileId: string;
        readonly replyTo: string | null;
        readonly timestamp: string;
      };
    }>;
  } | null;
  readonly dataPoints: {
    readonly totalCount: number;
  } | null;
  readonly id: string;
  readonly " $fragmentSpreads": FragmentRefs<"LineChart_metrics">;
  readonly " $fragmentType": "Comments_metrics";
};
export type Comments_metrics$key = {
  readonly " $data"?: Comments_metrics$data;
  readonly " $fragmentSpreads": FragmentRefs<"Comments_metrics">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "Comments_metrics",
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
                },
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "timestamp",
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

(node as any).hash = "4e090a3431fc8f0014bb6c3f7e0ba848";

export default node;
