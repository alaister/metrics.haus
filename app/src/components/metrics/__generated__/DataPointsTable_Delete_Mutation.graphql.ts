/**
 * @generated SignedSource<<43ed82ee7a6ba2a33c4626967bf611f1>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type FilterIs = "NOT_NULL" | "NULL" | "%future added value";
export type MetricsDataPointsFilter = {
  metricId?: UUIDFilter | null;
  nodeId?: IDFilter | null;
  reportedBy?: UUIDFilter | null;
  time?: DatetimeFilter | null;
  value?: FloatFilter | null;
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
export type UUIDFilter = {
  eq?: string | null;
  in?: ReadonlyArray<string> | null;
  is?: FilterIs | null;
  neq?: string | null;
};
export type FloatFilter = {
  eq?: number | null;
  gt?: number | null;
  gte?: number | null;
  in?: ReadonlyArray<number> | null;
  is?: FilterIs | null;
  lt?: number | null;
  lte?: number | null;
  neq?: number | null;
};
export type IDFilter = {
  eq?: string | null;
};
export type DataPointsTable_Delete_Mutation$variables = {
  connections: ReadonlyArray<string>;
  filter: MetricsDataPointsFilter;
};
export type DataPointsTable_Delete_Mutation$data = {
  readonly deleteFromMetricsDataPointsCollection: {
    readonly affectedCount: number;
    readonly records: ReadonlyArray<{
      readonly nodeId: string;
    }>;
  };
};
export type DataPointsTable_Delete_Mutation = {
  response: DataPointsTable_Delete_Mutation$data;
  variables: DataPointsTable_Delete_Mutation$variables;
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
    "name": "DataPointsTable_Delete_Mutation",
    "selections": [
      {
        "alias": null,
        "args": (v2/*: any*/),
        "concreteType": "MetricsDataPointsDeleteResponse",
        "kind": "LinkedField",
        "name": "deleteFromMetricsDataPointsCollection",
        "plural": false,
        "selections": [
          (v3/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "MetricsDataPoints",
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
    "name": "DataPointsTable_Delete_Mutation",
    "selections": [
      {
        "alias": null,
        "args": (v2/*: any*/),
        "concreteType": "MetricsDataPointsDeleteResponse",
        "kind": "LinkedField",
        "name": "deleteFromMetricsDataPointsCollection",
        "plural": false,
        "selections": [
          (v3/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "MetricsDataPoints",
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
    "cacheID": "b1308dd3adaf41b34f3befb21a5de701",
    "id": null,
    "metadata": {},
    "name": "DataPointsTable_Delete_Mutation",
    "operationKind": "mutation",
    "text": "mutation DataPointsTable_Delete_Mutation(\n  $filter: MetricsDataPointsFilter!\n) {\n  deleteFromMetricsDataPointsCollection(filter: $filter) {\n    affectedCount\n    records {\n      nodeId\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "0954b6f7c82ed27a4b94d945de70dbf8";

export default node;
