/**
 * @generated SignedSource<<4b67d24bc0e0efbbea097bb97d8ee64b>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment, RefetchableFragment } from 'relay-runtime';
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
  readonly nodeId: string;
  readonly " $fragmentType": "LineChart_metrics";
};
export type LineChart_metrics$key = {
  readonly " $data"?: LineChart_metrics$data;
  readonly " $fragmentSpreads": FragmentRefs<"LineChart_metrics">;
};

import MetricsDataPointsPagination_Query_graphql from './MetricsDataPointsPagination_Query.graphql';

const node: ReaderFragment = (function(){
var v0 = [
  "metricsDataPointsCollection"
],
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "nodeId",
  "storageKey": null
};
return {
  "argumentDefinitions": [
    {
      "defaultValue": 100,
      "kind": "LocalArgument",
      "name": "count"
    },
    {
      "defaultValue": null,
      "kind": "LocalArgument",
      "name": "cursor"
    }
  ],
  "kind": "Fragment",
  "metadata": {
    "connection": [
      {
        "count": "count",
        "cursor": "cursor",
        "direction": "forward",
        "path": (v0/*: any*/)
      }
    ],
    "refetch": {
      "connection": {
        "forward": {
          "count": "count",
          "cursor": "cursor"
        },
        "backward": null,
        "path": (v0/*: any*/)
      },
      "fragmentPathInResult": [
        "node"
      ],
      "operation": MetricsDataPointsPagination_Query_graphql,
      "identifierField": "nodeId"
    }
  },
  "name": "LineChart_metrics",
  "selections": [
    {
      "alias": "metricsDataPointsCollection",
      "args": [
        {
          "kind": "Literal",
          "name": "orderBy",
          "value": [
            {
              "time": "AscNullsLast"
            }
          ]
        }
      ],
      "concreteType": "MetricsDataPointsConnection",
      "kind": "LinkedField",
      "name": "__MetricDataPoints_metrics_metricsDataPointsCollection_connection",
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
                (v1/*: any*/),
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
                },
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "__typename",
                  "storageKey": null
                }
              ],
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "cursor",
              "storageKey": null
            }
          ],
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "concreteType": "PageInfo",
          "kind": "LinkedField",
          "name": "pageInfo",
          "plural": false,
          "selections": [
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "endCursor",
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "hasNextPage",
              "storageKey": null
            }
          ],
          "storageKey": null
        }
      ],
      "storageKey": "__MetricDataPoints_metrics_metricsDataPointsCollection_connection(orderBy:[{\"time\":\"AscNullsLast\"}])"
    },
    (v1/*: any*/)
  ],
  "type": "Metrics",
  "abstractKey": null
};
})();

(node as any).hash = "f881f5bab64603c760afb7005479c781";

export default node;
