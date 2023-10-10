/**
 * @generated SignedSource<<cb4e50e8cae21932ce7388855f71f23a>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type MetricDetailsSectionPagination_Query$variables = {
  count?: number | null;
  cursor?: any | null;
  nodeId: string;
};
export type MetricDetailsSectionPagination_Query$data = {
  readonly node: {
    readonly " $fragmentSpreads": FragmentRefs<"MetricDetailsSection_metrics">;
  } | null;
};
export type MetricDetailsSectionPagination_Query = {
  response: MetricDetailsSectionPagination_Query$data;
  variables: MetricDetailsSectionPagination_Query$variables;
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
  },
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "nodeId"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "nodeId",
    "variableName": "nodeId"
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "__typename",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "nodeId",
  "storageKey": null
},
v4 = {
  "kind": "Literal",
  "name": "orderBy",
  "value": [
    {
      "time": "AscNullsLast"
    }
  ]
},
v5 = [
  {
    "kind": "Variable",
    "name": "after",
    "variableName": "cursor"
  },
  {
    "kind": "Variable",
    "name": "first",
    "variableName": "count"
  },
  (v4/*: any*/)
],
v6 = {
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
        (v3/*: any*/),
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
        (v2/*: any*/)
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
v7 = {
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
},
v8 = [
  {
    "kind": "Literal",
    "name": "first",
    "value": 100
  },
  (v4/*: any*/)
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "MetricDetailsSectionPagination_Query",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": null,
        "kind": "LinkedField",
        "name": "node",
        "plural": false,
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
            "name": "MetricDetailsSection_metrics"
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "MetricDetailsSectionPagination_Query",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": null,
        "kind": "LinkedField",
        "name": "node",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/),
          {
            "kind": "InlineFragment",
            "selections": [
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
                "name": "unitShort",
                "storageKey": null
              },
              {
                "alias": "dataPoints",
                "args": (v5/*: any*/),
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
                  (v6/*: any*/),
                  (v7/*: any*/)
                ],
                "storageKey": null
              },
              {
                "alias": "dataPoints",
                "args": (v5/*: any*/),
                "filters": [],
                "handle": "connection",
                "key": "MetricDetailsSection_metrics_dataPoints",
                "kind": "LinkedHandle",
                "name": "metricsDataPointsCollection"
              },
              {
                "alias": null,
                "args": (v8/*: any*/),
                "concreteType": "MetricsDataPointsConnection",
                "kind": "LinkedField",
                "name": "metricsDataPointsCollection",
                "plural": false,
                "selections": [
                  (v6/*: any*/),
                  (v7/*: any*/)
                ],
                "storageKey": "metricsDataPointsCollection(first:100,orderBy:[{\"time\":\"AscNullsLast\"}])"
              },
              {
                "alias": null,
                "args": (v8/*: any*/),
                "filters": [],
                "handle": "connection",
                "key": "MetricDataPoints_metrics_metricsDataPointsCollection",
                "kind": "LinkedHandle",
                "name": "metricsDataPointsCollection"
              }
            ],
            "type": "Metrics",
            "abstractKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "7a952560efb5d59f1fcec93a0cbff166",
    "id": null,
    "metadata": {},
    "name": "MetricDetailsSectionPagination_Query",
    "operationKind": "query",
    "text": "query MetricDetailsSectionPagination_Query(\n  $count: Int = 100\n  $cursor: Cursor\n  $nodeId: ID!\n) {\n  node(nodeId: $nodeId) {\n    __typename\n    ...MetricDetailsSection_metrics_1G22uz\n    nodeId\n  }\n}\n\nfragment LineChart_metrics on Metrics {\n  metricsDataPointsCollection(first: 100, orderBy: [{time: AscNullsLast}]) {\n    edges {\n      node {\n        nodeId\n        time\n        value\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n  nodeId\n}\n\nfragment MetricDetailsSection_metrics_1G22uz on Metrics {\n  id\n  unitShort\n  dataPoints: metricsDataPointsCollection(after: $cursor, first: $count, orderBy: [{time: AscNullsLast}]) {\n    totalCount\n    edges {\n      node {\n        nodeId\n        time\n        value\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n  ...LineChart_metrics\n  nodeId\n}\n"
  }
};
})();

(node as any).hash = "b739723b9ed944359f5920a23049832e";

export default node;
