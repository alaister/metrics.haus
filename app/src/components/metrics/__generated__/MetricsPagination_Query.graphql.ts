/**
 * @generated SignedSource<<7bb8582e3c91ef78ce8ae77cbd48ba52>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type MetricsPagination_Query$variables = {
  count?: number | null;
  cursor?: any | null;
};
export type MetricsPagination_Query$data = {
  readonly " $fragmentSpreads": FragmentRefs<"MetricsList_query">;
};
export type MetricsPagination_Query = {
  response: MetricsPagination_Query$data;
  variables: MetricsPagination_Query$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
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
v1 = [
  {
    "kind": "Variable",
    "name": "after",
    "variableName": "cursor"
  },
  {
    "kind": "Literal",
    "name": "filter",
    "value": {
      "archived": {
        "eq": false
      }
    }
  },
  {
    "kind": "Variable",
    "name": "first",
    "variableName": "count"
  },
  {
    "kind": "Literal",
    "name": "orderBy",
    "value": [
      {
        "createdAt": "DescNullsLast"
      }
    ]
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "hasNextPage",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "endCursor",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "cursor",
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "nodeId",
  "storageKey": null
},
v6 = [
  {
    "kind": "Literal",
    "name": "first",
    "value": 100
  },
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
v7 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "__typename",
  "storageKey": null
},
v8 = {
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
        (v5/*: any*/),
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
        (v7/*: any*/)
      ],
      "storageKey": null
    },
    (v4/*: any*/)
  ],
  "storageKey": null
},
v9 = {
  "alias": null,
  "args": null,
  "concreteType": "PageInfo",
  "kind": "LinkedField",
  "name": "pageInfo",
  "plural": false,
  "selections": [
    (v3/*: any*/),
    (v2/*: any*/)
  ],
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "MetricsPagination_Query",
    "selections": [
      {
        "args": [
          {
            "kind": "Variable",
            "name": "count",
            "variableName": "count"
          },
          {
            "kind": "Variable",
            "name": "cursor",
            "variableName": "cursor"
          }
        ],
        "kind": "FragmentSpread",
        "name": "MetricsList_query"
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "MetricsPagination_Query",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "MetricsConnection",
        "kind": "LinkedField",
        "name": "metricsCollection",
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
              (v2/*: any*/),
              (v3/*: any*/)
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
              (v4/*: any*/),
              {
                "alias": null,
                "args": null,
                "concreteType": "Metrics",
                "kind": "LinkedField",
                "name": "node",
                "plural": false,
                "selections": [
                  (v5/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "id",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "name",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "icon",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "unitShort",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "createdAt",
                    "storageKey": null
                  },
                  {
                    "alias": "dataPoints",
                    "args": (v6/*: any*/),
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
                      (v8/*: any*/),
                      (v9/*: any*/)
                    ],
                    "storageKey": "metricsDataPointsCollection(first:100,orderBy:[{\"time\":\"AscNullsLast\"}])"
                  },
                  {
                    "alias": "dataPoints",
                    "args": (v6/*: any*/),
                    "filters": [],
                    "handle": "connection",
                    "key": "MetricCard_metrics_dataPoints",
                    "kind": "LinkedHandle",
                    "name": "metricsDataPointsCollection"
                  },
                  {
                    "alias": null,
                    "args": (v6/*: any*/),
                    "concreteType": "MetricsDataPointsConnection",
                    "kind": "LinkedField",
                    "name": "metricsDataPointsCollection",
                    "plural": false,
                    "selections": [
                      (v8/*: any*/),
                      (v9/*: any*/)
                    ],
                    "storageKey": "metricsDataPointsCollection(first:100,orderBy:[{\"time\":\"AscNullsLast\"}])"
                  },
                  {
                    "alias": null,
                    "args": (v6/*: any*/),
                    "filters": [],
                    "handle": "connection",
                    "key": "MetricDataPoints_metrics_metricsDataPointsCollection",
                    "kind": "LinkedHandle",
                    "name": "metricsDataPointsCollection"
                  },
                  (v7/*: any*/)
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
        "alias": null,
        "args": (v1/*: any*/),
        "filters": [],
        "handle": "connection",
        "key": "Metrics_query_metricsCollection",
        "kind": "LinkedHandle",
        "name": "metricsCollection"
      }
    ]
  },
  "params": {
    "cacheID": "78b9c5d66a0b92730164fadb1e560134",
    "id": null,
    "metadata": {},
    "name": "MetricsPagination_Query",
    "operationKind": "query",
    "text": "query MetricsPagination_Query(\n  $count: Int = 100\n  $cursor: Cursor\n) {\n  ...MetricsList_query_1G22uz\n}\n\nfragment LineChart_metrics on Metrics {\n  metricsDataPointsCollection(first: 100, orderBy: [{time: AscNullsLast}]) {\n    edges {\n      node {\n        nodeId\n        time\n        value\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n  nodeId\n}\n\nfragment MetricCard_metrics on Metrics {\n  id\n  name\n  icon\n  unitShort\n  createdAt\n  dataPoints: metricsDataPointsCollection(first: 100, orderBy: [{time: AscNullsLast}]) {\n    totalCount\n    edges {\n      node {\n        nodeId\n        time\n        value\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n  ...LineChart_metrics\n  nodeId\n}\n\nfragment MetricsList_query_1G22uz on Query {\n  metricsCollection(after: $cursor, first: $count, orderBy: [{createdAt: DescNullsLast}], filter: {archived: {eq: false}}) {\n    pageInfo {\n      hasNextPage\n      endCursor\n    }\n    edges {\n      cursor\n      node {\n        nodeId\n        ...MetricCard_metrics\n        __typename\n      }\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "93302070e2475a4cf34d14a0e38cb9b7";

export default node;
