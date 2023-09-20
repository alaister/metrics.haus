/**
 * @generated SignedSource<<46cd0319b260a1f18b5077fc5a2bbc61>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type MetricDetailsSection_metrics$data = {
  readonly dataPoints: {
    readonly totalCount: number;
  } | null;
  readonly " $fragmentSpreads": FragmentRefs<"LineChart_metrics">;
  readonly " $fragmentType": "MetricDetailsSection_metrics";
};
export type MetricDetailsSection_metrics$key = {
  readonly " $data"?: MetricDetailsSection_metrics$data;
  readonly " $fragmentSpreads": FragmentRefs<"MetricDetailsSection_metrics">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "MetricDetailsSection_metrics",
  "selections": [
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
      "args": null,
      "kind": "FragmentSpread",
      "name": "LineChart_metrics"
    }
  ],
  "type": "Metrics",
  "abstractKey": null
};

(node as any).hash = "3a55fc22e838eee0c3c183465cc5f8a7";

export default node;
