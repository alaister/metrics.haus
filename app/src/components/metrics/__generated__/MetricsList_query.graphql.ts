/**
 * @generated SignedSource<<3d265ed24838765a920493c48bb5ed49>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment, RefetchableFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type MetricsList_query$data = {
  readonly metricsCollection: {
    readonly edges: ReadonlyArray<{
      readonly cursor: string;
      readonly node: {
        readonly nodeId: string;
        readonly " $fragmentSpreads": FragmentRefs<"MetricCard_metrics">;
      };
    }>;
    readonly pageInfo: {
      readonly endCursor: string | null;
      readonly hasNextPage: boolean;
    };
  } | null;
  readonly " $fragmentType": "MetricsList_query";
};
export type MetricsList_query$key = {
  readonly " $data"?: MetricsList_query$data;
  readonly " $fragmentSpreads": FragmentRefs<"MetricsList_query">;
};

import MetricsPagination_Query_graphql from './MetricsPagination_Query.graphql';

const node: ReaderFragment = (function(){
var v0 = [
  "metricsCollection"
];
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
      "fragmentPathInResult": [],
      "operation": MetricsPagination_Query_graphql
    }
  },
  "name": "MetricsList_query",
  "selections": [
    {
      "alias": "metricsCollection",
      "args": null,
      "concreteType": "MetricsConnection",
      "kind": "LinkedField",
      "name": "__Metrics_query_metricsCollection_connection",
      "plural": false,
      "selections": [
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
              "name": "hasNextPage",
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "endCursor",
              "storageKey": null
            }
          ],
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "concreteType": "MetricsEdge",
          "kind": "LinkedField",
          "name": "edges",
          "plural": true,
          "selections": [
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "cursor",
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "concreteType": "Metrics",
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
                  "args": null,
                  "kind": "FragmentSpread",
                  "name": "MetricCard_metrics"
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
            }
          ],
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Query",
  "abstractKey": null
};
})();

(node as any).hash = "253a9f8da9cf8a089bfefecd8d330d3c";

export default node;
