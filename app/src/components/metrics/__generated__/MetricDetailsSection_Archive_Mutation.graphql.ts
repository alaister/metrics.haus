/**
 * @generated SignedSource<<0454dbaa3faf91f958806f861d7b03a5>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type FilterIs = "NOT_NULL" | "NULL" | "%future added value";
export type MetricInterval = "day" | "hour" | "minute" | "month" | "week" | "%future added value";
export type MetricsFilter = {
  archived?: BooleanFilter | null;
  createdAt?: DatetimeFilter | null;
  description?: StringFilter | null;
  icon?: StringFilter | null;
  id?: UUIDFilter | null;
  interval?: MetricIntervalFilter | null;
  name?: StringFilter | null;
  nodeId?: IDFilter | null;
  teamId?: UUIDFilter | null;
  unitShort?: StringFilter | null;
  updatedAt?: DatetimeFilter | null;
};
export type UUIDFilter = {
  eq?: string | null;
  in?: ReadonlyArray<string> | null;
  is?: FilterIs | null;
  neq?: string | null;
};
export type DatetimeFilter = {
  eq?: string | null;
  gt?: string | null;
  gte?: string | null;
  in?: ReadonlyArray<string> | null;
  is?: FilterIs | null;
  lt?: string | null;
  lte?: string | null;
  neq?: string | null;
};
export type MetricIntervalFilter = {
  eq?: MetricInterval | null;
  in?: ReadonlyArray<MetricInterval> | null;
  is?: FilterIs | null;
  neq?: MetricInterval | null;
};
export type StringFilter = {
  eq?: string | null;
  gt?: string | null;
  gte?: string | null;
  ilike?: string | null;
  in?: ReadonlyArray<string> | null;
  iregex?: string | null;
  is?: FilterIs | null;
  like?: string | null;
  lt?: string | null;
  lte?: string | null;
  neq?: string | null;
  regex?: string | null;
  startsWith?: string | null;
};
export type BooleanFilter = {
  eq?: boolean | null;
  is?: FilterIs | null;
};
export type IDFilter = {
  eq?: string | null;
};
export type MetricDetailsSection_Archive_Mutation$variables = {
  connections: ReadonlyArray<string>;
  filter?: MetricsFilter | null;
};
export type MetricDetailsSection_Archive_Mutation$data = {
  readonly updateMetricsCollection: {
    readonly affectedCount: number;
    readonly records: ReadonlyArray<{
      readonly nodeId: string;
    }>;
  };
};
export type MetricDetailsSection_Archive_Mutation = {
  response: MetricDetailsSection_Archive_Mutation$data;
  variables: MetricDetailsSection_Archive_Mutation$variables;
};

const node: ConcreteRequest = (function(){
var v0 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "connections"
},
v1 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "filter"
},
v2 = [
  {
    "kind": "Variable",
    "name": "filter",
    "variableName": "filter"
  },
  {
    "kind": "Literal",
    "name": "set",
    "value": {
      "archived": true
    }
  }
],
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "affectedCount",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "nodeId",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "MetricDetailsSection_Archive_Mutation",
    "selections": [
      {
        "alias": null,
        "args": (v2/*: any*/),
        "concreteType": "MetricsUpdateResponse",
        "kind": "LinkedField",
        "name": "updateMetricsCollection",
        "plural": false,
        "selections": [
          (v3/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "Metrics",
            "kind": "LinkedField",
            "name": "records",
            "plural": true,
            "selections": [
              (v4/*: any*/)
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [
      (v1/*: any*/),
      (v0/*: any*/)
    ],
    "kind": "Operation",
    "name": "MetricDetailsSection_Archive_Mutation",
    "selections": [
      {
        "alias": null,
        "args": (v2/*: any*/),
        "concreteType": "MetricsUpdateResponse",
        "kind": "LinkedField",
        "name": "updateMetricsCollection",
        "plural": false,
        "selections": [
          (v3/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "Metrics",
            "kind": "LinkedField",
            "name": "records",
            "plural": true,
            "selections": [
              (v4/*: any*/),
              {
                "alias": null,
                "args": null,
                "filters": null,
                "handle": "deleteEdge",
                "key": "",
                "kind": "ScalarHandle",
                "name": "nodeId",
                "handleArgs": [
                  {
                    "kind": "Variable",
                    "name": "connections",
                    "variableName": "connections"
                  }
                ]
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "a9b61ed2dab6220bc644094edb78cc5a",
    "id": null,
    "metadata": {},
    "name": "MetricDetailsSection_Archive_Mutation",
    "operationKind": "mutation",
    "text": "mutation MetricDetailsSection_Archive_Mutation(\n  $filter: MetricsFilter\n) {\n  updateMetricsCollection(set: {archived: true}, filter: $filter) {\n    affectedCount\n    records {\n      nodeId\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "3aa7711f9394b4db987c8b6253c37d9e";

export default node;
