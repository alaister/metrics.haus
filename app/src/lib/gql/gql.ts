/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\n  fragment CommentFragment on Comments {\n    nodeId\n    id\n    createdAt\n    updatedAt\n    body\n    profile {\n      nodeId\n      id\n      name\n      avatarPath\n    }\n  }\n": types.CommentFragmentFragmentDoc,
    "\n  mutation CommentsFormInsertMutation($input: CommentsInsertInput!) {\n    insertIntoCommentsCollection(objects: [$input]) {\n      affectedCount\n      records {\n        nodeId\n        ...CommentFragment\n      }\n    }\n  }\n": types.CommentsFormInsertMutationDocument,
    "\n  fragment ThreadFragment on Threads {\n    nodeId\n    id\n    createdAt\n    title\n    fromTimestamp\n    toTimestamp\n  }\n": types.ThreadFragmentFragmentDoc,
    "\n  query ImportsListQuery {\n    importsCollection(orderBy: [{ createdAt: DescNullsLast }]) {\n      pageInfo {\n        hasNextPage\n        endCursor\n      }\n      edges {\n        cursor\n        node {\n          id\n          nodeId\n          status\n          createdAt\n          fileName\n        }\n      }\n    }\n  }\n": types.ImportsListQueryDocument,
    "\n  query TeamMembersSelector_Query($teamId: UUID!) {\n    teamMembersCollection(filter: { teamId: { eq: $teamId } }) {\n      edges {\n        node {\n          nodeId\n          profile {\n            id\n            name\n          }\n        }\n      }\n    }\n  }\n": types.TeamMembersSelector_QueryDocument,
    "\n  mutation DataPointsTable_Delete_Mutation($filter: MetricsDataPointsFilter!) {\n    deleteFromMetricsDataPointsCollection(filter: $filter) {\n      affectedCount\n      records {\n        nodeId\n      }\n    }\n  }\n": types.DataPointsTable_Delete_MutationDocument,
    "\n  fragment MetricCardItem on Metrics {\n    id\n    name\n    icon\n    unitShort\n    createdAt\n    metricsDataPointsCollection(orderBy: [{ time: AscNullsLast }]) {\n      totalCount\n      edges {\n        node {\n          nodeId\n          time\n          value\n        }\n      }\n    }\n  }\n": types.MetricCardItemFragmentDoc,
    "\n  mutation MetricDataPointFormMutation($input: MetricsDataPointsInsertInput!) {\n    insertIntoMetricsDataPointsCollection(objects: [$input]) {\n      affectedCount\n      records {\n        nodeId\n        time\n        value\n      }\n    }\n  }\n": types.MetricDataPointFormMutationDocument,
    "\n  fragment MetricDetailsSectionItem on Metrics {\n    id\n    unitShort\n    metricsDataPointsCollection(orderBy: [{ time: AscNullsLast }]) {\n      totalCount\n      edges {\n        node {\n          nodeId\n          time\n          value\n        }\n      }\n    }\n  }\n": types.MetricDetailsSectionItemFragmentDoc,
    "\n  mutation MetricDetailsSectionArchiveMutation($filter: MetricsFilter) {\n    updateMetricsCollection(set: { archived: true }, filter: $filter) {\n      affectedCount\n      records {\n        nodeId\n      }\n    }\n  }\n": types.MetricDetailsSectionArchiveMutationDocument,
    "\n  mutation MetricFormMutation($input: MetricsInsertInput!) {\n    insertIntoMetricsCollection(objects: [$input]) {\n      affectedCount\n      records {\n        id\n        nodeId\n        ...MetricCardItem\n      }\n    }\n  }\n": types.MetricFormMutationDocument,
    "\n  mutation MetricFormOwnersMutation($input: [MetricsOwnersInsertInput!]!) {\n    insertIntoMetricsOwnersCollection(objects: $input) {\n      affectedCount\n    }\n  }\n": types.MetricFormOwnersMutationDocument,
    "\n  query MetricsListQuery {\n    metricsCollection(\n      orderBy: [{ createdAt: DescNullsLast }]\n      filter: { archived: { eq: false } }\n    ) {\n      pageInfo {\n        hasNextPage\n        endCursor\n      }\n      edges {\n        cursor\n        node {\n          nodeId\n          ...MetricCardItem @nonreactive\n        }\n      }\n    }\n  }\n": types.MetricsListQueryDocument,
    "\n  query TeamSelectorQuery {\n    teamsCollection {\n      edges {\n        node {\n          nodeId\n          id\n          name\n        }\n      }\n    }\n  }\n": types.TeamSelectorQueryDocument,
    "\n  query MetricDetailsQuery($nodeId: ID!) {\n    node(nodeId: $nodeId) {\n      nodeId\n      ... on Metrics {\n        id\n        name\n        icon\n        unitShort\n        description\n        threadsCollection {\n          pageInfo {\n            hasNextPage\n            endCursor\n          }\n          edges {\n            cursor\n            node {\n              nodeId\n              ...ThreadFragment\n            }\n          }\n        }\n        ...MetricDetailsSectionItem\n      }\n    }\n  }\n": types.MetricDetailsQueryDocument,
    "\n  query ThreadQuery($nodeId: ID!) {\n    node(nodeId: $nodeId) {\n      nodeId\n      ... on Threads {\n        nodeId\n        id\n        createdAt\n        title\n        fromTimestamp\n        toTimestamp\n        commentsCollection(orderBy: { createdAt: AscNullsLast }) {\n          pageInfo {\n            hasNextPage\n            endCursor\n          }\n          edges {\n            cursor\n            node {\n              nodeId\n              ...CommentFragment\n            }\n          }\n        }\n      }\n    }\n  }\n": types.ThreadQueryDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment CommentFragment on Comments {\n    nodeId\n    id\n    createdAt\n    updatedAt\n    body\n    profile {\n      nodeId\n      id\n      name\n      avatarPath\n    }\n  }\n"): (typeof documents)["\n  fragment CommentFragment on Comments {\n    nodeId\n    id\n    createdAt\n    updatedAt\n    body\n    profile {\n      nodeId\n      id\n      name\n      avatarPath\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation CommentsFormInsertMutation($input: CommentsInsertInput!) {\n    insertIntoCommentsCollection(objects: [$input]) {\n      affectedCount\n      records {\n        nodeId\n        ...CommentFragment\n      }\n    }\n  }\n"): (typeof documents)["\n  mutation CommentsFormInsertMutation($input: CommentsInsertInput!) {\n    insertIntoCommentsCollection(objects: [$input]) {\n      affectedCount\n      records {\n        nodeId\n        ...CommentFragment\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment ThreadFragment on Threads {\n    nodeId\n    id\n    createdAt\n    title\n    fromTimestamp\n    toTimestamp\n  }\n"): (typeof documents)["\n  fragment ThreadFragment on Threads {\n    nodeId\n    id\n    createdAt\n    title\n    fromTimestamp\n    toTimestamp\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query ImportsListQuery {\n    importsCollection(orderBy: [{ createdAt: DescNullsLast }]) {\n      pageInfo {\n        hasNextPage\n        endCursor\n      }\n      edges {\n        cursor\n        node {\n          id\n          nodeId\n          status\n          createdAt\n          fileName\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query ImportsListQuery {\n    importsCollection(orderBy: [{ createdAt: DescNullsLast }]) {\n      pageInfo {\n        hasNextPage\n        endCursor\n      }\n      edges {\n        cursor\n        node {\n          id\n          nodeId\n          status\n          createdAt\n          fileName\n        }\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query TeamMembersSelector_Query($teamId: UUID!) {\n    teamMembersCollection(filter: { teamId: { eq: $teamId } }) {\n      edges {\n        node {\n          nodeId\n          profile {\n            id\n            name\n          }\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query TeamMembersSelector_Query($teamId: UUID!) {\n    teamMembersCollection(filter: { teamId: { eq: $teamId } }) {\n      edges {\n        node {\n          nodeId\n          profile {\n            id\n            name\n          }\n        }\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation DataPointsTable_Delete_Mutation($filter: MetricsDataPointsFilter!) {\n    deleteFromMetricsDataPointsCollection(filter: $filter) {\n      affectedCount\n      records {\n        nodeId\n      }\n    }\n  }\n"): (typeof documents)["\n  mutation DataPointsTable_Delete_Mutation($filter: MetricsDataPointsFilter!) {\n    deleteFromMetricsDataPointsCollection(filter: $filter) {\n      affectedCount\n      records {\n        nodeId\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment MetricCardItem on Metrics {\n    id\n    name\n    icon\n    unitShort\n    createdAt\n    metricsDataPointsCollection(orderBy: [{ time: AscNullsLast }]) {\n      totalCount\n      edges {\n        node {\n          nodeId\n          time\n          value\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  fragment MetricCardItem on Metrics {\n    id\n    name\n    icon\n    unitShort\n    createdAt\n    metricsDataPointsCollection(orderBy: [{ time: AscNullsLast }]) {\n      totalCount\n      edges {\n        node {\n          nodeId\n          time\n          value\n        }\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation MetricDataPointFormMutation($input: MetricsDataPointsInsertInput!) {\n    insertIntoMetricsDataPointsCollection(objects: [$input]) {\n      affectedCount\n      records {\n        nodeId\n        time\n        value\n      }\n    }\n  }\n"): (typeof documents)["\n  mutation MetricDataPointFormMutation($input: MetricsDataPointsInsertInput!) {\n    insertIntoMetricsDataPointsCollection(objects: [$input]) {\n      affectedCount\n      records {\n        nodeId\n        time\n        value\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment MetricDetailsSectionItem on Metrics {\n    id\n    unitShort\n    metricsDataPointsCollection(orderBy: [{ time: AscNullsLast }]) {\n      totalCount\n      edges {\n        node {\n          nodeId\n          time\n          value\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  fragment MetricDetailsSectionItem on Metrics {\n    id\n    unitShort\n    metricsDataPointsCollection(orderBy: [{ time: AscNullsLast }]) {\n      totalCount\n      edges {\n        node {\n          nodeId\n          time\n          value\n        }\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation MetricDetailsSectionArchiveMutation($filter: MetricsFilter) {\n    updateMetricsCollection(set: { archived: true }, filter: $filter) {\n      affectedCount\n      records {\n        nodeId\n      }\n    }\n  }\n"): (typeof documents)["\n  mutation MetricDetailsSectionArchiveMutation($filter: MetricsFilter) {\n    updateMetricsCollection(set: { archived: true }, filter: $filter) {\n      affectedCount\n      records {\n        nodeId\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation MetricFormMutation($input: MetricsInsertInput!) {\n    insertIntoMetricsCollection(objects: [$input]) {\n      affectedCount\n      records {\n        id\n        nodeId\n        ...MetricCardItem\n      }\n    }\n  }\n"): (typeof documents)["\n  mutation MetricFormMutation($input: MetricsInsertInput!) {\n    insertIntoMetricsCollection(objects: [$input]) {\n      affectedCount\n      records {\n        id\n        nodeId\n        ...MetricCardItem\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation MetricFormOwnersMutation($input: [MetricsOwnersInsertInput!]!) {\n    insertIntoMetricsOwnersCollection(objects: $input) {\n      affectedCount\n    }\n  }\n"): (typeof documents)["\n  mutation MetricFormOwnersMutation($input: [MetricsOwnersInsertInput!]!) {\n    insertIntoMetricsOwnersCollection(objects: $input) {\n      affectedCount\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query MetricsListQuery {\n    metricsCollection(\n      orderBy: [{ createdAt: DescNullsLast }]\n      filter: { archived: { eq: false } }\n    ) {\n      pageInfo {\n        hasNextPage\n        endCursor\n      }\n      edges {\n        cursor\n        node {\n          nodeId\n          ...MetricCardItem @nonreactive\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query MetricsListQuery {\n    metricsCollection(\n      orderBy: [{ createdAt: DescNullsLast }]\n      filter: { archived: { eq: false } }\n    ) {\n      pageInfo {\n        hasNextPage\n        endCursor\n      }\n      edges {\n        cursor\n        node {\n          nodeId\n          ...MetricCardItem @nonreactive\n        }\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query TeamSelectorQuery {\n    teamsCollection {\n      edges {\n        node {\n          nodeId\n          id\n          name\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query TeamSelectorQuery {\n    teamsCollection {\n      edges {\n        node {\n          nodeId\n          id\n          name\n        }\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query MetricDetailsQuery($nodeId: ID!) {\n    node(nodeId: $nodeId) {\n      nodeId\n      ... on Metrics {\n        id\n        name\n        icon\n        unitShort\n        description\n        threadsCollection {\n          pageInfo {\n            hasNextPage\n            endCursor\n          }\n          edges {\n            cursor\n            node {\n              nodeId\n              ...ThreadFragment\n            }\n          }\n        }\n        ...MetricDetailsSectionItem\n      }\n    }\n  }\n"): (typeof documents)["\n  query MetricDetailsQuery($nodeId: ID!) {\n    node(nodeId: $nodeId) {\n      nodeId\n      ... on Metrics {\n        id\n        name\n        icon\n        unitShort\n        description\n        threadsCollection {\n          pageInfo {\n            hasNextPage\n            endCursor\n          }\n          edges {\n            cursor\n            node {\n              nodeId\n              ...ThreadFragment\n            }\n          }\n        }\n        ...MetricDetailsSectionItem\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query ThreadQuery($nodeId: ID!) {\n    node(nodeId: $nodeId) {\n      nodeId\n      ... on Threads {\n        nodeId\n        id\n        createdAt\n        title\n        fromTimestamp\n        toTimestamp\n        commentsCollection(orderBy: { createdAt: AscNullsLast }) {\n          pageInfo {\n            hasNextPage\n            endCursor\n          }\n          edges {\n            cursor\n            node {\n              nodeId\n              ...CommentFragment\n            }\n          }\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query ThreadQuery($nodeId: ID!) {\n    node(nodeId: $nodeId) {\n      nodeId\n      ... on Threads {\n        nodeId\n        id\n        createdAt\n        title\n        fromTimestamp\n        toTimestamp\n        commentsCollection(orderBy: { createdAt: AscNullsLast }) {\n          pageInfo {\n            hasNextPage\n            endCursor\n          }\n          edges {\n            cursor\n            node {\n              nodeId\n              ...CommentFragment\n            }\n          }\n        }\n      }\n    }\n  }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;