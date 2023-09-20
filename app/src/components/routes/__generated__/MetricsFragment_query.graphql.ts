/**
 * @generated SignedSource<<4e9be104f69a2735e736d4b101c0cdcb>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment, RefetchableFragment } from 'relay-runtime'
import { FragmentRefs } from 'relay-runtime'
export type MetricsFragment_query$data = {
  readonly metricsCollection: {
    readonly edges: ReadonlyArray<{
      readonly cursor: string
      readonly node: {
        readonly nodeId: string
        readonly ' $fragmentSpreads': FragmentRefs<'MetricCard_metrics'>
      }
    }>
    readonly pageInfo: {
      readonly endCursor: string | null
      readonly hasNextPage: boolean
    }
  } | null
  readonly ' $fragmentType': 'MetricsFragment_query'
}
export type MetricsFragment_query$key = {
  readonly ' $data'?: MetricsFragment_query$data
  readonly ' $fragmentSpreads': FragmentRefs<'MetricsFragment_query'>
}

import MetricsPagination_Query_graphql from './MetricsPagination_Query.graphql'

const node: ReaderFragment = (function () {
  var v0 = ['metricsCollection']
  return {
    argumentDefinitions: [
      {
        defaultValue: 100,
        kind: 'LocalArgument',
        name: 'count',
      },
      {
        defaultValue: null,
        kind: 'LocalArgument',
        name: 'cursor',
      },
    ],
    kind: 'Fragment',
    metadata: {
      connection: [
        {
          count: 'count',
          cursor: 'cursor',
          direction: 'forward',
          path: v0 /*: any*/,
        },
      ],
      refetch: {
        connection: {
          forward: {
            count: 'count',
            cursor: 'cursor',
          },
          backward: null,
          path: v0 /*: any*/,
        },
        fragmentPathInResult: [],
        operation: MetricsPagination_Query_graphql,
      },
    },
    name: 'MetricsFragment_query',
    selections: [
      {
        alias: 'metricsCollection',
        args: [
          {
            kind: 'Literal',
            name: 'orderBy',
            value: [
              {
                createdAt: 'DescNullsLast',
              },
            ],
          },
        ],
        concreteType: 'MetricsConnection',
        kind: 'LinkedField',
        name: '__Metrics_query_metricsCollection_connection',
        plural: false,
        selections: [
          {
            alias: null,
            args: null,
            concreteType: 'PageInfo',
            kind: 'LinkedField',
            name: 'pageInfo',
            plural: false,
            selections: [
              {
                alias: null,
                args: null,
                kind: 'ScalarField',
                name: 'hasNextPage',
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                kind: 'ScalarField',
                name: 'endCursor',
                storageKey: null,
              },
            ],
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            concreteType: 'MetricsEdge',
            kind: 'LinkedField',
            name: 'edges',
            plural: true,
            selections: [
              {
                alias: null,
                args: null,
                kind: 'ScalarField',
                name: 'cursor',
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                concreteType: 'Metrics',
                kind: 'LinkedField',
                name: 'node',
                plural: false,
                selections: [
                  {
                    alias: null,
                    args: null,
                    kind: 'ScalarField',
                    name: 'nodeId',
                    storageKey: null,
                  },
                  {
                    args: null,
                    kind: 'FragmentSpread',
                    name: 'MetricCard_metrics',
                  },
                  {
                    alias: null,
                    args: null,
                    kind: 'ScalarField',
                    name: '__typename',
                    storageKey: null,
                  },
                ],
                storageKey: null,
              },
            ],
            storageKey: null,
          },
        ],
        storageKey:
          '__Metrics_query_metricsCollection_connection(orderBy:[{"createdAt":"DescNullsLast"}])',
      },
    ],
    type: 'Query',
    abstractKey: null,
  }
})()

;(node as any).hash = '124ae18990665cc728be28d769b203a0'

export default node
