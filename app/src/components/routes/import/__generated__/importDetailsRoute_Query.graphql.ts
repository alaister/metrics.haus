/**
 * @generated SignedSource<<56e303e8cce0b74644c874d38425787a>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type importDetailsRoute_Query$variables = {
  nodeId: string;
};
export type importDetailsRoute_Query$data = {
  readonly node: {
    readonly description?: string | null;
    readonly icon?: string | null;
    readonly id?: string;
    readonly name?: string;
    readonly nodeId: string;
    readonly unitShort?: string | null;
    readonly " $fragmentSpreads": FragmentRefs<"MetricDetailsSection_metrics">;
  } | null;
};
export type importDetailsRoute_Query = {
  response: importDetailsRoute_Query$data;
  variables: importDetailsRoute_Query$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
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
  "name": "nodeId",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "icon",
  "storageKey": null
},
v6 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "unitShort",
  "storageKey": null
},
v7 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "description",
  "storageKey": null
},
v8 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "__typename",
  "storageKey": null
},
v9 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "time",
  "storageKey": null
},
v10 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "value",
  "storageKey": null
},
v11 = [
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
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "importDetailsRoute_Query",
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
          {
            "kind": "InlineFragment",
            "selections": [
              (v3/*: any*/),
              (v4/*: any*/),
              (v5/*: any*/),
              (v6/*: any*/),
              (v7/*: any*/),
              {
                "args": null,
                "kind": "FragmentSpread",
                "name": "MetricDetailsSection_metrics"
              }
            ],
            "type": "Metrics",
            "abstractKey": null
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
    "name": "importDetailsRoute_Query",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": null,
        "kind": "LinkedField",
        "name": "node",
        "plural": false,
        "selections": [
          (v8/*: any*/),
          (v2/*: any*/),
          {
            "kind": "InlineFragment",
            "selections": [
              (v3/*: any*/),
              (v4/*: any*/),
              (v5/*: any*/),
              (v6/*: any*/),
              (v7/*: any*/),
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
                          (v9/*: any*/),
                          (v10/*: any*/),
                          (v2/*: any*/)
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
                "args": (v11/*: any*/),
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
                          (v2/*: any*/),
                          (v9/*: any*/),
                          (v10/*: any*/),
                          (v8/*: any*/)
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
                "storageKey": "metricsDataPointsCollection(first:100,orderBy:[{\"time\":\"AscNullsLast\"}])"
              },
              {
                "alias": null,
                "args": (v11/*: any*/),
                "filters": [
                  "orderBy"
                ],
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
    "cacheID": "4d625d1bb74240f7d48268b8b3863393",
    "id": null,
    "metadata": {},
    "name": "importDetailsRoute_Query",
    "operationKind": "query",
    "text": "query importDetailsRoute_Query(\n  $nodeId: ID!\n) {\n  node(nodeId: $nodeId) {\n    __typename\n    nodeId\n    ... on Metrics {\n      id\n      name\n      icon\n      unitShort\n      description\n      ...MetricDetailsSection_metrics\n    }\n  }\n}\n\nfragment LineChart_metrics on Metrics {\n  metricsDataPointsCollection(first: 100, orderBy: [{time: AscNullsLast}]) {\n    edges {\n      node {\n        nodeId\n        time\n        value\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n  nodeId\n}\n\nfragment MetricDetailsSection_metrics on Metrics {\n  unitShort\n  dataPoints: metricsDataPointsCollection {\n    totalCount\n    edges {\n      node {\n        time\n        value\n        nodeId\n      }\n    }\n  }\n  ...LineChart_metrics\n}\n"
  }
};
})();

(node as any).hash = "161fb83f9fc91964ef46612cda4bd068";

export default node;
