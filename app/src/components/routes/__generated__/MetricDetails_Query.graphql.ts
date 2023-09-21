/**
 * @generated SignedSource<<afccc54c92ecfe8c07fde16fdf394898>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type MetricDetails_Query$variables = {
  nodeId: string;
};
export type MetricDetails_Query$data = {
  readonly node: {
    readonly id?: string;
    readonly name?: string;
    readonly nodeId: string;
    readonly " $fragmentSpreads": FragmentRefs<"MetricDetailsSection_metrics">;
  } | null;
};
export type MetricDetails_Query = {
  response: MetricDetails_Query$data;
  variables: MetricDetails_Query$variables;
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
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "MetricDetails_Query",
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
    "name": "MetricDetails_Query",
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
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "__typename",
            "storageKey": null
          },
          (v2/*: any*/),
          {
            "kind": "InlineFragment",
            "selections": [
              (v3/*: any*/),
              (v4/*: any*/),
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
                          (v2/*: any*/),
                          (v3/*: any*/),
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "timestamp",
                            "storageKey": null
                          },
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "createdAt",
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
                          (v2/*: any*/),
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
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "50750953117dc17e55ca0f2b5c2d95e1",
    "id": null,
    "metadata": {},
    "name": "MetricDetails_Query",
    "operationKind": "query",
    "text": "query MetricDetails_Query(\n  $nodeId: ID!\n) {\n  node(nodeId: $nodeId) {\n    __typename\n    nodeId\n    ... on Metrics {\n      id\n      name\n      ...MetricDetailsSection_metrics\n    }\n  }\n}\n\nfragment Comments_metrics on Metrics {\n  id\n  dataPoints: metricsDataPointsCollection {\n    totalCount\n  }\n  commentsCollection {\n    edges {\n      node {\n        id\n        profileId\n        message\n        replyTo\n        timestamp\n        createdAt\n        nodeId\n      }\n    }\n  }\n  ...LineChart_metrics\n}\n\nfragment LineChart_metrics on Metrics {\n  metricsDataPointsCollection {\n    edges {\n      node {\n        nodeId\n        time\n        value\n      }\n    }\n  }\n  commentsCollection {\n    edges {\n      node {\n        id\n        timestamp\n        nodeId\n      }\n    }\n  }\n}\n\nfragment MetricDetailsSection_metrics on Metrics {\n  id\n  dataPoints: metricsDataPointsCollection {\n    totalCount\n  }\n  commentsCollection {\n    edges {\n      node {\n        profileId\n        message\n        replyTo\n        nodeId\n      }\n    }\n  }\n  ...LineChart_metrics\n  ...Comments_metrics\n}\n"
  }
};
})();

(node as any).hash = "062f71841c42cbb183a8ddeadac36c6f";

export default node;
