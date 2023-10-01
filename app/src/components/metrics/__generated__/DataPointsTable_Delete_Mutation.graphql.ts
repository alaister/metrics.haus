/**
 * @generated SignedSource<<ad8f38b59f85b197b1f9668cf65cc197>>
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
  filter: MetricsDataPointsFilter;
};
export type DataPointsTable_Delete_Mutation$data = {
  readonly deleteFromMetricsDataPointsCollection: {
    readonly affectedCount: number;
  };
};
export type DataPointsTable_Delete_Mutation = {
  response: DataPointsTable_Delete_Mutation$data;
  variables: DataPointsTable_Delete_Mutation$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "filter"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "filter",
        "variableName": "filter"
      }
    ],
    "concreteType": "MetricsDataPointsDeleteResponse",
    "kind": "LinkedField",
    "name": "deleteFromMetricsDataPointsCollection",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "affectedCount",
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "DataPointsTable_Delete_Mutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "DataPointsTable_Delete_Mutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "112e42a51213813cebeb9c683df8474e",
    "id": null,
    "metadata": {},
    "name": "DataPointsTable_Delete_Mutation",
    "operationKind": "mutation",
    "text": "mutation DataPointsTable_Delete_Mutation(\n  $filter: MetricsDataPointsFilter!\n) {\n  deleteFromMetricsDataPointsCollection(filter: $filter) {\n    affectedCount\n  }\n}\n"
  }
};
})();

(node as any).hash = "54c4847fbfc2e71f5dd30b2c91e8adac";

export default node;
