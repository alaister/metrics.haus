/**
 * @generated SignedSource<<36622dc52a9e902a812e79195a9aedde>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type MetricsOwnersInsertInput = {
  createdAt?: string | null;
  metricId?: string | null;
  profileId?: string | null;
};
export type MetricForm_Owners_Mutation$variables = {
  input: ReadonlyArray<MetricsOwnersInsertInput>;
};
export type MetricForm_Owners_Mutation$data = {
  readonly insertIntoMetricsOwnersCollection: {
    readonly affectedCount: number;
  } | null;
};
export type MetricForm_Owners_Mutation = {
  response: MetricForm_Owners_Mutation$data;
  variables: MetricForm_Owners_Mutation$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "input"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "objects",
        "variableName": "input"
      }
    ],
    "concreteType": "MetricsOwnersInsertResponse",
    "kind": "LinkedField",
    "name": "insertIntoMetricsOwnersCollection",
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
    "name": "MetricForm_Owners_Mutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "MetricForm_Owners_Mutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "b15a8c8049cd087ce1096b95d05f366b",
    "id": null,
    "metadata": {},
    "name": "MetricForm_Owners_Mutation",
    "operationKind": "mutation",
    "text": "mutation MetricForm_Owners_Mutation(\n  $input: [MetricsOwnersInsertInput!]!\n) {\n  insertIntoMetricsOwnersCollection(objects: $input) {\n    affectedCount\n  }\n}\n"
  }
};
})();

(node as any).hash = "4c4485fa2d1c872bf0482c123413bd2c";

export default node;
