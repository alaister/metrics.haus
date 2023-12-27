/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core'
export type Maybe<T> = T | null
export type InputMaybe<T> = Maybe<T>
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K]
}
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>
}
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>
}
export type MakeEmpty<
  T extends { [key: string]: unknown },
  K extends keyof T,
> = { [_ in K]?: never }
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never
    }
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string }
  String: { input: string; output: string }
  Boolean: { input: boolean; output: boolean }
  Int: { input: number; output: number }
  Float: { input: number; output: number }
  /** A high precision floating point value represented as a string */
  BigFloat: { input: string; output: string }
  /** An arbitrary size integer represented as a string */
  BigInt: { input: string; output: string }
  /** An opaque string using for tracking a position in results during pagination */
  Cursor: { input: any; output: any }
  /** A date wihout time information */
  Date: { input: string; output: string }
  /** A date and time */
  Datetime: { input: string; output: string }
  /** A Javascript Object Notation value serialized as a string */
  JSON: { input: string; output: string }
  /** Any type not handled by the type system */
  Opaque: { input: any; output: any }
  /** A time without date information */
  Time: { input: string; output: string }
  /** A universally unique identifier */
  UUID: { input: string; output: string }
}

/** Boolean expression comparing fields on type "BigFloat" */
export type BigFloatFilter = {
  eq?: InputMaybe<Scalars['BigFloat']['input']>
  gt?: InputMaybe<Scalars['BigFloat']['input']>
  gte?: InputMaybe<Scalars['BigFloat']['input']>
  in?: InputMaybe<Array<Scalars['BigFloat']['input']>>
  is?: InputMaybe<FilterIs>
  lt?: InputMaybe<Scalars['BigFloat']['input']>
  lte?: InputMaybe<Scalars['BigFloat']['input']>
  neq?: InputMaybe<Scalars['BigFloat']['input']>
}

/** Boolean expression comparing fields on type "BigInt" */
export type BigIntFilter = {
  eq?: InputMaybe<Scalars['BigInt']['input']>
  gt?: InputMaybe<Scalars['BigInt']['input']>
  gte?: InputMaybe<Scalars['BigInt']['input']>
  in?: InputMaybe<Array<Scalars['BigInt']['input']>>
  is?: InputMaybe<FilterIs>
  lt?: InputMaybe<Scalars['BigInt']['input']>
  lte?: InputMaybe<Scalars['BigInt']['input']>
  neq?: InputMaybe<Scalars['BigInt']['input']>
}

/** Boolean expression comparing fields on type "Boolean" */
export type BooleanFilter = {
  eq?: InputMaybe<Scalars['Boolean']['input']>
  is?: InputMaybe<FilterIs>
}

export type CommentableEntities = Node & {
  __typename?: 'CommentableEntities'
  id: Scalars['UUID']['output']
  metricsCollection?: Maybe<MetricsConnection>
  metricsDataPointsCollection?: Maybe<MetricsDataPointsConnection>
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']['output']
  team: Teams
  teamId: Scalars['UUID']['output']
  threadsCollection?: Maybe<ThreadsConnection>
  type: CommentableEntityType
}

export type CommentableEntitiesMetricsCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>
  before?: InputMaybe<Scalars['Cursor']['input']>
  filter?: InputMaybe<MetricsFilter>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<Array<MetricsOrderBy>>
}

export type CommentableEntitiesMetricsDataPointsCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>
  before?: InputMaybe<Scalars['Cursor']['input']>
  filter?: InputMaybe<MetricsDataPointsFilter>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<Array<MetricsDataPointsOrderBy>>
}

export type CommentableEntitiesThreadsCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>
  before?: InputMaybe<Scalars['Cursor']['input']>
  filter?: InputMaybe<ThreadsFilter>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<Array<ThreadsOrderBy>>
}

export type CommentableEntitiesConnection = {
  __typename?: 'CommentableEntitiesConnection'
  edges: Array<CommentableEntitiesEdge>
  pageInfo: PageInfo
}

export type CommentableEntitiesEdge = {
  __typename?: 'CommentableEntitiesEdge'
  cursor: Scalars['String']['output']
  node: CommentableEntities
}

export type CommentableEntitiesFilter = {
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<CommentableEntitiesFilter>>
  id?: InputMaybe<UuidFilter>
  nodeId?: InputMaybe<IdFilter>
  /** Negates a filter */
  not?: InputMaybe<CommentableEntitiesFilter>
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<CommentableEntitiesFilter>>
  teamId?: InputMaybe<UuidFilter>
  type?: InputMaybe<CommentableEntityTypeFilter>
}

export type CommentableEntitiesOrderBy = {
  id?: InputMaybe<OrderByDirection>
  teamId?: InputMaybe<OrderByDirection>
  type?: InputMaybe<OrderByDirection>
}

export enum CommentableEntityType {
  Metric = 'METRIC',
  MetricDataPoint = 'METRIC_DATA_POINT',
}

/** Boolean expression comparing fields on type "CommentableEntityType" */
export type CommentableEntityTypeFilter = {
  eq?: InputMaybe<CommentableEntityType>
  in?: InputMaybe<Array<CommentableEntityType>>
  is?: InputMaybe<FilterIs>
  neq?: InputMaybe<CommentableEntityType>
}

export type Comments = Node & {
  __typename?: 'Comments'
  body: Scalars['String']['output']
  commentsCollection?: Maybe<CommentsConnection>
  createdAt?: Maybe<Scalars['Datetime']['output']>
  id: Scalars['UUID']['output']
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']['output']
  profile: Profiles
  profileId: Scalars['UUID']['output']
  replyToComment?: Maybe<Comments>
  replyToCommentId?: Maybe<Scalars['UUID']['output']>
  thread: Threads
  threadId: Scalars['UUID']['output']
  updatedAt?: Maybe<Scalars['Datetime']['output']>
}

export type CommentsCommentsCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>
  before?: InputMaybe<Scalars['Cursor']['input']>
  filter?: InputMaybe<CommentsFilter>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<Array<CommentsOrderBy>>
}

export type CommentsConnection = {
  __typename?: 'CommentsConnection'
  edges: Array<CommentsEdge>
  pageInfo: PageInfo
}

export type CommentsDeleteResponse = {
  __typename?: 'CommentsDeleteResponse'
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output']
  /** Array of records impacted by the mutation */
  records: Array<Comments>
}

export type CommentsEdge = {
  __typename?: 'CommentsEdge'
  cursor: Scalars['String']['output']
  node: Comments
}

export type CommentsFilter = {
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<CommentsFilter>>
  body?: InputMaybe<StringFilter>
  createdAt?: InputMaybe<DatetimeFilter>
  id?: InputMaybe<UuidFilter>
  nodeId?: InputMaybe<IdFilter>
  /** Negates a filter */
  not?: InputMaybe<CommentsFilter>
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<CommentsFilter>>
  profileId?: InputMaybe<UuidFilter>
  replyToCommentId?: InputMaybe<UuidFilter>
  threadId?: InputMaybe<UuidFilter>
  updatedAt?: InputMaybe<DatetimeFilter>
}

export type CommentsInsertInput = {
  body?: InputMaybe<Scalars['String']['input']>
  replyToCommentId?: InputMaybe<Scalars['UUID']['input']>
  threadId?: InputMaybe<Scalars['UUID']['input']>
}

export type CommentsInsertResponse = {
  __typename?: 'CommentsInsertResponse'
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output']
  /** Array of records impacted by the mutation */
  records: Array<Comments>
}

export type CommentsOrderBy = {
  body?: InputMaybe<OrderByDirection>
  createdAt?: InputMaybe<OrderByDirection>
  id?: InputMaybe<OrderByDirection>
  profileId?: InputMaybe<OrderByDirection>
  replyToCommentId?: InputMaybe<OrderByDirection>
  threadId?: InputMaybe<OrderByDirection>
  updatedAt?: InputMaybe<OrderByDirection>
}

export type CommentsUpdateInput = {
  body?: InputMaybe<Scalars['String']['input']>
}

export type CommentsUpdateResponse = {
  __typename?: 'CommentsUpdateResponse'
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output']
  /** Array of records impacted by the mutation */
  records: Array<Comments>
}

/** Boolean expression comparing fields on type "Date" */
export type DateFilter = {
  eq?: InputMaybe<Scalars['Date']['input']>
  gt?: InputMaybe<Scalars['Date']['input']>
  gte?: InputMaybe<Scalars['Date']['input']>
  in?: InputMaybe<Array<Scalars['Date']['input']>>
  is?: InputMaybe<FilterIs>
  lt?: InputMaybe<Scalars['Date']['input']>
  lte?: InputMaybe<Scalars['Date']['input']>
  neq?: InputMaybe<Scalars['Date']['input']>
}

/** Boolean expression comparing fields on type "Datetime" */
export type DatetimeFilter = {
  eq?: InputMaybe<Scalars['Datetime']['input']>
  gt?: InputMaybe<Scalars['Datetime']['input']>
  gte?: InputMaybe<Scalars['Datetime']['input']>
  in?: InputMaybe<Array<Scalars['Datetime']['input']>>
  is?: InputMaybe<FilterIs>
  lt?: InputMaybe<Scalars['Datetime']['input']>
  lte?: InputMaybe<Scalars['Datetime']['input']>
  neq?: InputMaybe<Scalars['Datetime']['input']>
}

export enum FilterIs {
  NotNull = 'NOT_NULL',
  Null = 'NULL',
}

/** Boolean expression comparing fields on type "Float" */
export type FloatFilter = {
  eq?: InputMaybe<Scalars['Float']['input']>
  gt?: InputMaybe<Scalars['Float']['input']>
  gte?: InputMaybe<Scalars['Float']['input']>
  in?: InputMaybe<Array<Scalars['Float']['input']>>
  is?: InputMaybe<FilterIs>
  lt?: InputMaybe<Scalars['Float']['input']>
  lte?: InputMaybe<Scalars['Float']['input']>
  neq?: InputMaybe<Scalars['Float']['input']>
}

/** Boolean expression comparing fields on type "ID" */
export type IdFilter = {
  eq?: InputMaybe<Scalars['ID']['input']>
}

/** Boolean expression comparing fields on type "Int" */
export type IntFilter = {
  eq?: InputMaybe<Scalars['Int']['input']>
  gt?: InputMaybe<Scalars['Int']['input']>
  gte?: InputMaybe<Scalars['Int']['input']>
  in?: InputMaybe<Array<Scalars['Int']['input']>>
  is?: InputMaybe<FilterIs>
  lt?: InputMaybe<Scalars['Int']['input']>
  lte?: InputMaybe<Scalars['Int']['input']>
  neq?: InputMaybe<Scalars['Int']['input']>
}

export enum MetricInterval {
  Day = 'day',
  Hour = 'hour',
  Minute = 'minute',
  Month = 'month',
  Week = 'week',
}

/** Boolean expression comparing fields on type "MetricInterval" */
export type MetricIntervalFilter = {
  eq?: InputMaybe<MetricInterval>
  in?: InputMaybe<Array<MetricInterval>>
  is?: InputMaybe<FilterIs>
  neq?: InputMaybe<MetricInterval>
}

export type Metrics = Node & {
  __typename?: 'Metrics'
  archived?: Maybe<Scalars['Boolean']['output']>
  commentableEntity?: Maybe<CommentableEntities>
  commentableEntityId?: Maybe<Scalars['UUID']['output']>
  createdAt: Scalars['Datetime']['output']
  description?: Maybe<Scalars['String']['output']>
  icon?: Maybe<Scalars['String']['output']>
  id: Scalars['UUID']['output']
  interval: MetricInterval
  metricsDataPointsCollection?: Maybe<MetricsDataPointsConnection>
  metricsOwnersCollection?: Maybe<MetricsOwnersConnection>
  name: Scalars['String']['output']
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']['output']
  team: Teams
  teamId: Scalars['UUID']['output']
  unitShort?: Maybe<Scalars['String']['output']>
  updatedAt: Scalars['Datetime']['output']
}

export type MetricsMetricsDataPointsCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>
  before?: InputMaybe<Scalars['Cursor']['input']>
  filter?: InputMaybe<MetricsDataPointsFilter>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<Array<MetricsDataPointsOrderBy>>
}

export type MetricsMetricsOwnersCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>
  before?: InputMaybe<Scalars['Cursor']['input']>
  filter?: InputMaybe<MetricsOwnersFilter>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<Array<MetricsOwnersOrderBy>>
}

export type MetricsConnection = {
  __typename?: 'MetricsConnection'
  edges: Array<MetricsEdge>
  pageInfo: PageInfo
}

export type MetricsDataPoints = Node & {
  __typename?: 'MetricsDataPoints'
  commentableEntity?: Maybe<CommentableEntities>
  commentableEntityId?: Maybe<Scalars['UUID']['output']>
  metric: Metrics
  metricId: Scalars['UUID']['output']
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']['output']
  profiles: Profiles
  reportedBy: Scalars['UUID']['output']
  time: Scalars['Datetime']['output']
  value: Scalars['Float']['output']
}

export type MetricsDataPointsConnection = {
  __typename?: 'MetricsDataPointsConnection'
  edges: Array<MetricsDataPointsEdge>
  pageInfo: PageInfo
  /** The total number of records matching the `filter` criteria */
  totalCount: Scalars['Int']['output']
}

export type MetricsDataPointsDeleteResponse = {
  __typename?: 'MetricsDataPointsDeleteResponse'
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output']
  /** Array of records impacted by the mutation */
  records: Array<MetricsDataPoints>
}

export type MetricsDataPointsEdge = {
  __typename?: 'MetricsDataPointsEdge'
  cursor: Scalars['String']['output']
  node: MetricsDataPoints
}

export type MetricsDataPointsFilter = {
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<MetricsDataPointsFilter>>
  commentableEntityId?: InputMaybe<UuidFilter>
  metricId?: InputMaybe<UuidFilter>
  nodeId?: InputMaybe<IdFilter>
  /** Negates a filter */
  not?: InputMaybe<MetricsDataPointsFilter>
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<MetricsDataPointsFilter>>
  reportedBy?: InputMaybe<UuidFilter>
  time?: InputMaybe<DatetimeFilter>
  value?: InputMaybe<FloatFilter>
}

export type MetricsDataPointsInsertInput = {
  metricId?: InputMaybe<Scalars['UUID']['input']>
  time?: InputMaybe<Scalars['Datetime']['input']>
  value?: InputMaybe<Scalars['Float']['input']>
}

export type MetricsDataPointsInsertResponse = {
  __typename?: 'MetricsDataPointsInsertResponse'
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output']
  /** Array of records impacted by the mutation */
  records: Array<MetricsDataPoints>
}

export type MetricsDataPointsOrderBy = {
  commentableEntityId?: InputMaybe<OrderByDirection>
  metricId?: InputMaybe<OrderByDirection>
  reportedBy?: InputMaybe<OrderByDirection>
  time?: InputMaybe<OrderByDirection>
  value?: InputMaybe<OrderByDirection>
}

export type MetricsDeleteResponse = {
  __typename?: 'MetricsDeleteResponse'
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output']
  /** Array of records impacted by the mutation */
  records: Array<Metrics>
}

export type MetricsEdge = {
  __typename?: 'MetricsEdge'
  cursor: Scalars['String']['output']
  node: Metrics
}

export type MetricsFilter = {
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<MetricsFilter>>
  archived?: InputMaybe<BooleanFilter>
  commentableEntityId?: InputMaybe<UuidFilter>
  createdAt?: InputMaybe<DatetimeFilter>
  description?: InputMaybe<StringFilter>
  icon?: InputMaybe<StringFilter>
  id?: InputMaybe<UuidFilter>
  interval?: InputMaybe<MetricIntervalFilter>
  name?: InputMaybe<StringFilter>
  nodeId?: InputMaybe<IdFilter>
  /** Negates a filter */
  not?: InputMaybe<MetricsFilter>
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<MetricsFilter>>
  teamId?: InputMaybe<UuidFilter>
  unitShort?: InputMaybe<StringFilter>
  updatedAt?: InputMaybe<DatetimeFilter>
}

export type MetricsInsertInput = {
  description?: InputMaybe<Scalars['String']['input']>
  icon?: InputMaybe<Scalars['String']['input']>
  interval?: InputMaybe<MetricInterval>
  name?: InputMaybe<Scalars['String']['input']>
  teamId?: InputMaybe<Scalars['UUID']['input']>
  unitShort?: InputMaybe<Scalars['String']['input']>
}

export type MetricsInsertResponse = {
  __typename?: 'MetricsInsertResponse'
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output']
  /** Array of records impacted by the mutation */
  records: Array<Metrics>
}

export type MetricsOrderBy = {
  archived?: InputMaybe<OrderByDirection>
  commentableEntityId?: InputMaybe<OrderByDirection>
  createdAt?: InputMaybe<OrderByDirection>
  description?: InputMaybe<OrderByDirection>
  icon?: InputMaybe<OrderByDirection>
  id?: InputMaybe<OrderByDirection>
  interval?: InputMaybe<OrderByDirection>
  name?: InputMaybe<OrderByDirection>
  teamId?: InputMaybe<OrderByDirection>
  unitShort?: InputMaybe<OrderByDirection>
  updatedAt?: InputMaybe<OrderByDirection>
}

export type MetricsOwners = Node & {
  __typename?: 'MetricsOwners'
  createdAt: Scalars['Datetime']['output']
  metric: Metrics
  metricId: Scalars['UUID']['output']
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']['output']
  profile: Profiles
  profileId: Scalars['UUID']['output']
}

export type MetricsOwnersConnection = {
  __typename?: 'MetricsOwnersConnection'
  edges: Array<MetricsOwnersEdge>
  pageInfo: PageInfo
}

export type MetricsOwnersDeleteResponse = {
  __typename?: 'MetricsOwnersDeleteResponse'
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output']
  /** Array of records impacted by the mutation */
  records: Array<MetricsOwners>
}

export type MetricsOwnersEdge = {
  __typename?: 'MetricsOwnersEdge'
  cursor: Scalars['String']['output']
  node: MetricsOwners
}

export type MetricsOwnersFilter = {
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<MetricsOwnersFilter>>
  createdAt?: InputMaybe<DatetimeFilter>
  metricId?: InputMaybe<UuidFilter>
  nodeId?: InputMaybe<IdFilter>
  /** Negates a filter */
  not?: InputMaybe<MetricsOwnersFilter>
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<MetricsOwnersFilter>>
  profileId?: InputMaybe<UuidFilter>
}

export type MetricsOwnersInsertInput = {
  metricId?: InputMaybe<Scalars['UUID']['input']>
  profileId?: InputMaybe<Scalars['UUID']['input']>
}

export type MetricsOwnersInsertResponse = {
  __typename?: 'MetricsOwnersInsertResponse'
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output']
  /** Array of records impacted by the mutation */
  records: Array<MetricsOwners>
}

export type MetricsOwnersOrderBy = {
  createdAt?: InputMaybe<OrderByDirection>
  metricId?: InputMaybe<OrderByDirection>
  profileId?: InputMaybe<OrderByDirection>
}

export type MetricsUpdateInput = {
  archived?: InputMaybe<Scalars['Boolean']['input']>
  description?: InputMaybe<Scalars['String']['input']>
  icon?: InputMaybe<Scalars['String']['input']>
  interval?: InputMaybe<MetricInterval>
  name?: InputMaybe<Scalars['String']['input']>
  unitShort?: InputMaybe<Scalars['String']['input']>
}

export type MetricsUpdateResponse = {
  __typename?: 'MetricsUpdateResponse'
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output']
  /** Array of records impacted by the mutation */
  records: Array<Metrics>
}

/** The root type for creating and mutating data */
export type Mutation = {
  __typename?: 'Mutation'
  /** Deletes zero or more records from the `Comments` collection */
  deleteFromCommentsCollection: CommentsDeleteResponse
  /** Deletes zero or more records from the `Metrics` collection */
  deleteFromMetricsCollection: MetricsDeleteResponse
  /** Deletes zero or more records from the `MetricsDataPoints` collection */
  deleteFromMetricsDataPointsCollection: MetricsDataPointsDeleteResponse
  /** Deletes zero or more records from the `MetricsOwners` collection */
  deleteFromMetricsOwnersCollection: MetricsOwnersDeleteResponse
  /** Deletes zero or more records from the `Threads` collection */
  deleteFromThreadsCollection: ThreadsDeleteResponse
  /** Adds one or more `Comments` records to the collection */
  insertIntoCommentsCollection?: Maybe<CommentsInsertResponse>
  /** Adds one or more `Metrics` records to the collection */
  insertIntoMetricsCollection?: Maybe<MetricsInsertResponse>
  /** Adds one or more `MetricsDataPoints` records to the collection */
  insertIntoMetricsDataPointsCollection?: Maybe<MetricsDataPointsInsertResponse>
  /** Adds one or more `MetricsOwners` records to the collection */
  insertIntoMetricsOwnersCollection?: Maybe<MetricsOwnersInsertResponse>
  /** Adds one or more `Threads` records to the collection */
  insertIntoThreadsCollection?: Maybe<ThreadsInsertResponse>
  /** Adds one or more `UserEvents` records to the collection */
  insertIntoUserEventsCollection?: Maybe<UserEventsInsertResponse>
  /** Updates zero or more records in the `Comments` collection */
  updateCommentsCollection: CommentsUpdateResponse
  /** Updates zero or more records in the `Metrics` collection */
  updateMetricsCollection: MetricsUpdateResponse
  /** Updates zero or more records in the `Notifications` collection */
  updateNotificationsCollection: NotificationsUpdateResponse
  /** Updates zero or more records in the `Profiles` collection */
  updateProfilesCollection: ProfilesUpdateResponse
  /** Updates zero or more records in the `Teams` collection */
  updateTeamsCollection: TeamsUpdateResponse
  /** Updates zero or more records in the `Threads` collection */
  updateThreadsCollection: ThreadsUpdateResponse
}

/** The root type for creating and mutating data */
export type MutationDeleteFromCommentsCollectionArgs = {
  atMost?: Scalars['Int']['input']
  filter?: InputMaybe<CommentsFilter>
}

/** The root type for creating and mutating data */
export type MutationDeleteFromMetricsCollectionArgs = {
  atMost?: Scalars['Int']['input']
  filter?: InputMaybe<MetricsFilter>
}

/** The root type for creating and mutating data */
export type MutationDeleteFromMetricsDataPointsCollectionArgs = {
  atMost?: Scalars['Int']['input']
  filter?: InputMaybe<MetricsDataPointsFilter>
}

/** The root type for creating and mutating data */
export type MutationDeleteFromMetricsOwnersCollectionArgs = {
  atMost?: Scalars['Int']['input']
  filter?: InputMaybe<MetricsOwnersFilter>
}

/** The root type for creating and mutating data */
export type MutationDeleteFromThreadsCollectionArgs = {
  atMost?: Scalars['Int']['input']
  filter?: InputMaybe<ThreadsFilter>
}

/** The root type for creating and mutating data */
export type MutationInsertIntoCommentsCollectionArgs = {
  objects: Array<CommentsInsertInput>
}

/** The root type for creating and mutating data */
export type MutationInsertIntoMetricsCollectionArgs = {
  objects: Array<MetricsInsertInput>
}

/** The root type for creating and mutating data */
export type MutationInsertIntoMetricsDataPointsCollectionArgs = {
  objects: Array<MetricsDataPointsInsertInput>
}

/** The root type for creating and mutating data */
export type MutationInsertIntoMetricsOwnersCollectionArgs = {
  objects: Array<MetricsOwnersInsertInput>
}

/** The root type for creating and mutating data */
export type MutationInsertIntoThreadsCollectionArgs = {
  objects: Array<ThreadsInsertInput>
}

/** The root type for creating and mutating data */
export type MutationInsertIntoUserEventsCollectionArgs = {
  objects: Array<UserEventsInsertInput>
}

/** The root type for creating and mutating data */
export type MutationUpdateCommentsCollectionArgs = {
  atMost?: Scalars['Int']['input']
  filter?: InputMaybe<CommentsFilter>
  set: CommentsUpdateInput
}

/** The root type for creating and mutating data */
export type MutationUpdateMetricsCollectionArgs = {
  atMost?: Scalars['Int']['input']
  filter?: InputMaybe<MetricsFilter>
  set: MetricsUpdateInput
}

/** The root type for creating and mutating data */
export type MutationUpdateNotificationsCollectionArgs = {
  atMost?: Scalars['Int']['input']
  filter?: InputMaybe<NotificationsFilter>
  set: NotificationsUpdateInput
}

/** The root type for creating and mutating data */
export type MutationUpdateProfilesCollectionArgs = {
  atMost?: Scalars['Int']['input']
  filter?: InputMaybe<ProfilesFilter>
  set: ProfilesUpdateInput
}

/** The root type for creating and mutating data */
export type MutationUpdateTeamsCollectionArgs = {
  atMost?: Scalars['Int']['input']
  filter?: InputMaybe<TeamsFilter>
  set: TeamsUpdateInput
}

/** The root type for creating and mutating data */
export type MutationUpdateThreadsCollectionArgs = {
  atMost?: Scalars['Int']['input']
  filter?: InputMaybe<ThreadsFilter>
  set: ThreadsUpdateInput
}

export type Node = {
  /** Retrieves a record by `ID` */
  nodeId: Scalars['ID']['output']
}

export type Notifications = Node & {
  __typename?: 'Notifications'
  body?: Maybe<Scalars['String']['output']>
  createdAt?: Maybe<Scalars['Datetime']['output']>
  id: Scalars['UUID']['output']
  metadata?: Maybe<Scalars['JSON']['output']>
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']['output']
  profile: Profiles
  profileId: Scalars['UUID']['output']
  seenAt?: Maybe<Scalars['Datetime']['output']>
  team: Teams
  teamId: Scalars['UUID']['output']
}

export type NotificationsConnection = {
  __typename?: 'NotificationsConnection'
  edges: Array<NotificationsEdge>
  pageInfo: PageInfo
}

export type NotificationsEdge = {
  __typename?: 'NotificationsEdge'
  cursor: Scalars['String']['output']
  node: Notifications
}

export type NotificationsFilter = {
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<NotificationsFilter>>
  body?: InputMaybe<StringFilter>
  createdAt?: InputMaybe<DatetimeFilter>
  id?: InputMaybe<UuidFilter>
  nodeId?: InputMaybe<IdFilter>
  /** Negates a filter */
  not?: InputMaybe<NotificationsFilter>
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<NotificationsFilter>>
  profileId?: InputMaybe<UuidFilter>
  seenAt?: InputMaybe<DatetimeFilter>
  teamId?: InputMaybe<UuidFilter>
}

export type NotificationsOrderBy = {
  body?: InputMaybe<OrderByDirection>
  createdAt?: InputMaybe<OrderByDirection>
  id?: InputMaybe<OrderByDirection>
  profileId?: InputMaybe<OrderByDirection>
  seenAt?: InputMaybe<OrderByDirection>
  teamId?: InputMaybe<OrderByDirection>
}

export type NotificationsUpdateInput = {
  seenAt?: InputMaybe<Scalars['Datetime']['input']>
}

export type NotificationsUpdateResponse = {
  __typename?: 'NotificationsUpdateResponse'
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output']
  /** Array of records impacted by the mutation */
  records: Array<Notifications>
}

/** Boolean expression comparing fields on type "Opaque" */
export type OpaqueFilter = {
  eq?: InputMaybe<Scalars['Opaque']['input']>
  is?: InputMaybe<FilterIs>
}

/** Defines a per-field sorting order */
export enum OrderByDirection {
  /** Ascending order, nulls first */
  AscNullsFirst = 'AscNullsFirst',
  /** Ascending order, nulls last */
  AscNullsLast = 'AscNullsLast',
  /** Descending order, nulls first */
  DescNullsFirst = 'DescNullsFirst',
  /** Descending order, nulls last */
  DescNullsLast = 'DescNullsLast',
}

export type PageInfo = {
  __typename?: 'PageInfo'
  endCursor?: Maybe<Scalars['String']['output']>
  hasNextPage: Scalars['Boolean']['output']
  hasPreviousPage: Scalars['Boolean']['output']
  startCursor?: Maybe<Scalars['String']['output']>
}

export type Profiles = Node & {
  __typename?: 'Profiles'
  avatarPath?: Maybe<Scalars['String']['output']>
  commentsCollection?: Maybe<CommentsConnection>
  createdAt: Scalars['Datetime']['output']
  id: Scalars['UUID']['output']
  metricsDataPointsCollection?: Maybe<MetricsDataPointsConnection>
  metricsOwnersCollection?: Maybe<MetricsOwnersConnection>
  name: Scalars['String']['output']
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']['output']
  notificationsCollection?: Maybe<NotificationsConnection>
  teamMembersCollection?: Maybe<TeamMembersConnection>
  threadsCollection?: Maybe<ThreadsConnection>
  updatedAt: Scalars['Datetime']['output']
  userEventsCollection?: Maybe<UserEventsConnection>
}

export type ProfilesCommentsCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>
  before?: InputMaybe<Scalars['Cursor']['input']>
  filter?: InputMaybe<CommentsFilter>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<Array<CommentsOrderBy>>
}

export type ProfilesMetricsDataPointsCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>
  before?: InputMaybe<Scalars['Cursor']['input']>
  filter?: InputMaybe<MetricsDataPointsFilter>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<Array<MetricsDataPointsOrderBy>>
}

export type ProfilesMetricsOwnersCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>
  before?: InputMaybe<Scalars['Cursor']['input']>
  filter?: InputMaybe<MetricsOwnersFilter>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<Array<MetricsOwnersOrderBy>>
}

export type ProfilesNotificationsCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>
  before?: InputMaybe<Scalars['Cursor']['input']>
  filter?: InputMaybe<NotificationsFilter>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<Array<NotificationsOrderBy>>
}

export type ProfilesTeamMembersCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>
  before?: InputMaybe<Scalars['Cursor']['input']>
  filter?: InputMaybe<TeamMembersFilter>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<Array<TeamMembersOrderBy>>
}

export type ProfilesThreadsCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>
  before?: InputMaybe<Scalars['Cursor']['input']>
  filter?: InputMaybe<ThreadsFilter>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<Array<ThreadsOrderBy>>
}

export type ProfilesUserEventsCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>
  before?: InputMaybe<Scalars['Cursor']['input']>
  filter?: InputMaybe<UserEventsFilter>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<Array<UserEventsOrderBy>>
}

export type ProfilesConnection = {
  __typename?: 'ProfilesConnection'
  edges: Array<ProfilesEdge>
  pageInfo: PageInfo
}

export type ProfilesEdge = {
  __typename?: 'ProfilesEdge'
  cursor: Scalars['String']['output']
  node: Profiles
}

export type ProfilesFilter = {
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<ProfilesFilter>>
  avatarPath?: InputMaybe<StringFilter>
  createdAt?: InputMaybe<DatetimeFilter>
  id?: InputMaybe<UuidFilter>
  name?: InputMaybe<StringFilter>
  nodeId?: InputMaybe<IdFilter>
  /** Negates a filter */
  not?: InputMaybe<ProfilesFilter>
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<ProfilesFilter>>
  updatedAt?: InputMaybe<DatetimeFilter>
}

export type ProfilesOrderBy = {
  avatarPath?: InputMaybe<OrderByDirection>
  createdAt?: InputMaybe<OrderByDirection>
  id?: InputMaybe<OrderByDirection>
  name?: InputMaybe<OrderByDirection>
  updatedAt?: InputMaybe<OrderByDirection>
}

export type ProfilesUpdateInput = {
  name?: InputMaybe<Scalars['String']['input']>
}

export type ProfilesUpdateResponse = {
  __typename?: 'ProfilesUpdateResponse'
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output']
  /** Array of records impacted by the mutation */
  records: Array<Profiles>
}

/** The root type for querying data */
export type Query = {
  __typename?: 'Query'
  /** A pagable collection of type `CommentableEntities` */
  commentableEntitiesCollection?: Maybe<CommentableEntitiesConnection>
  /** A pagable collection of type `Comments` */
  commentsCollection?: Maybe<CommentsConnection>
  /** A pagable collection of type `Metrics` */
  metricsCollection?: Maybe<MetricsConnection>
  /** A pagable collection of type `MetricsDataPoints` */
  metricsDataPointsCollection?: Maybe<MetricsDataPointsConnection>
  /** A pagable collection of type `MetricsOwners` */
  metricsOwnersCollection?: Maybe<MetricsOwnersConnection>
  /** Retrieve a record by its `ID` */
  node?: Maybe<Node>
  /** A pagable collection of type `Notifications` */
  notificationsCollection?: Maybe<NotificationsConnection>
  /** A pagable collection of type `Profiles` */
  profilesCollection?: Maybe<ProfilesConnection>
  /** A pagable collection of type `TeamMembers` */
  teamMembersCollection?: Maybe<TeamMembersConnection>
  /** A pagable collection of type `Teams` */
  teamsCollection?: Maybe<TeamsConnection>
  /** A pagable collection of type `Threads` */
  threadsCollection?: Maybe<ThreadsConnection>
  /** A pagable collection of type `UserEvents` */
  userEventsCollection?: Maybe<UserEventsConnection>
}

/** The root type for querying data */
export type QueryCommentableEntitiesCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>
  before?: InputMaybe<Scalars['Cursor']['input']>
  filter?: InputMaybe<CommentableEntitiesFilter>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<Array<CommentableEntitiesOrderBy>>
}

/** The root type for querying data */
export type QueryCommentsCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>
  before?: InputMaybe<Scalars['Cursor']['input']>
  filter?: InputMaybe<CommentsFilter>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<Array<CommentsOrderBy>>
}

/** The root type for querying data */
export type QueryMetricsCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>
  before?: InputMaybe<Scalars['Cursor']['input']>
  filter?: InputMaybe<MetricsFilter>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<Array<MetricsOrderBy>>
}

/** The root type for querying data */
export type QueryMetricsDataPointsCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>
  before?: InputMaybe<Scalars['Cursor']['input']>
  filter?: InputMaybe<MetricsDataPointsFilter>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<Array<MetricsDataPointsOrderBy>>
}

/** The root type for querying data */
export type QueryMetricsOwnersCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>
  before?: InputMaybe<Scalars['Cursor']['input']>
  filter?: InputMaybe<MetricsOwnersFilter>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<Array<MetricsOwnersOrderBy>>
}

/** The root type for querying data */
export type QueryNodeArgs = {
  nodeId: Scalars['ID']['input']
}

/** The root type for querying data */
export type QueryNotificationsCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>
  before?: InputMaybe<Scalars['Cursor']['input']>
  filter?: InputMaybe<NotificationsFilter>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<Array<NotificationsOrderBy>>
}

/** The root type for querying data */
export type QueryProfilesCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>
  before?: InputMaybe<Scalars['Cursor']['input']>
  filter?: InputMaybe<ProfilesFilter>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<Array<ProfilesOrderBy>>
}

/** The root type for querying data */
export type QueryTeamMembersCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>
  before?: InputMaybe<Scalars['Cursor']['input']>
  filter?: InputMaybe<TeamMembersFilter>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<Array<TeamMembersOrderBy>>
}

/** The root type for querying data */
export type QueryTeamsCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>
  before?: InputMaybe<Scalars['Cursor']['input']>
  filter?: InputMaybe<TeamsFilter>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<Array<TeamsOrderBy>>
}

/** The root type for querying data */
export type QueryThreadsCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>
  before?: InputMaybe<Scalars['Cursor']['input']>
  filter?: InputMaybe<ThreadsFilter>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<Array<ThreadsOrderBy>>
}

/** The root type for querying data */
export type QueryUserEventsCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>
  before?: InputMaybe<Scalars['Cursor']['input']>
  filter?: InputMaybe<UserEventsFilter>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<Array<UserEventsOrderBy>>
}

/** Boolean expression comparing fields on type "String" */
export type StringFilter = {
  eq?: InputMaybe<Scalars['String']['input']>
  gt?: InputMaybe<Scalars['String']['input']>
  gte?: InputMaybe<Scalars['String']['input']>
  ilike?: InputMaybe<Scalars['String']['input']>
  in?: InputMaybe<Array<Scalars['String']['input']>>
  iregex?: InputMaybe<Scalars['String']['input']>
  is?: InputMaybe<FilterIs>
  like?: InputMaybe<Scalars['String']['input']>
  lt?: InputMaybe<Scalars['String']['input']>
  lte?: InputMaybe<Scalars['String']['input']>
  neq?: InputMaybe<Scalars['String']['input']>
  regex?: InputMaybe<Scalars['String']['input']>
  startsWith?: InputMaybe<Scalars['String']['input']>
}

export type TeamMembers = Node & {
  __typename?: 'TeamMembers'
  createdAt: Scalars['Datetime']['output']
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']['output']
  profile: Profiles
  profileId: Scalars['UUID']['output']
  team: Teams
  teamId: Scalars['UUID']['output']
  updatedAt: Scalars['Datetime']['output']
}

export type TeamMembersConnection = {
  __typename?: 'TeamMembersConnection'
  edges: Array<TeamMembersEdge>
  pageInfo: PageInfo
}

export type TeamMembersEdge = {
  __typename?: 'TeamMembersEdge'
  cursor: Scalars['String']['output']
  node: TeamMembers
}

export type TeamMembersFilter = {
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<TeamMembersFilter>>
  createdAt?: InputMaybe<DatetimeFilter>
  nodeId?: InputMaybe<IdFilter>
  /** Negates a filter */
  not?: InputMaybe<TeamMembersFilter>
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<TeamMembersFilter>>
  profileId?: InputMaybe<UuidFilter>
  teamId?: InputMaybe<UuidFilter>
  updatedAt?: InputMaybe<DatetimeFilter>
}

export type TeamMembersOrderBy = {
  createdAt?: InputMaybe<OrderByDirection>
  profileId?: InputMaybe<OrderByDirection>
  teamId?: InputMaybe<OrderByDirection>
  updatedAt?: InputMaybe<OrderByDirection>
}

export type Teams = Node & {
  __typename?: 'Teams'
  commentableEntitiesCollection?: Maybe<CommentableEntitiesConnection>
  createdAt: Scalars['Datetime']['output']
  id: Scalars['UUID']['output']
  metricsCollection?: Maybe<MetricsConnection>
  name: Scalars['String']['output']
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']['output']
  notificationsCollection?: Maybe<NotificationsConnection>
  ssoProviderId?: Maybe<Scalars['String']['output']>
  teamMembersCollection?: Maybe<TeamMembersConnection>
  threadsCollection?: Maybe<ThreadsConnection>
  updatedAt: Scalars['Datetime']['output']
}

export type TeamsCommentableEntitiesCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>
  before?: InputMaybe<Scalars['Cursor']['input']>
  filter?: InputMaybe<CommentableEntitiesFilter>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<Array<CommentableEntitiesOrderBy>>
}

export type TeamsMetricsCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>
  before?: InputMaybe<Scalars['Cursor']['input']>
  filter?: InputMaybe<MetricsFilter>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<Array<MetricsOrderBy>>
}

export type TeamsNotificationsCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>
  before?: InputMaybe<Scalars['Cursor']['input']>
  filter?: InputMaybe<NotificationsFilter>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<Array<NotificationsOrderBy>>
}

export type TeamsTeamMembersCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>
  before?: InputMaybe<Scalars['Cursor']['input']>
  filter?: InputMaybe<TeamMembersFilter>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<Array<TeamMembersOrderBy>>
}

export type TeamsThreadsCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>
  before?: InputMaybe<Scalars['Cursor']['input']>
  filter?: InputMaybe<ThreadsFilter>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<Array<ThreadsOrderBy>>
}

export type TeamsConnection = {
  __typename?: 'TeamsConnection'
  edges: Array<TeamsEdge>
  pageInfo: PageInfo
}

export type TeamsEdge = {
  __typename?: 'TeamsEdge'
  cursor: Scalars['String']['output']
  node: Teams
}

export type TeamsFilter = {
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<TeamsFilter>>
  createdAt?: InputMaybe<DatetimeFilter>
  id?: InputMaybe<UuidFilter>
  name?: InputMaybe<StringFilter>
  nodeId?: InputMaybe<IdFilter>
  /** Negates a filter */
  not?: InputMaybe<TeamsFilter>
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<TeamsFilter>>
  ssoProviderId?: InputMaybe<StringFilter>
  updatedAt?: InputMaybe<DatetimeFilter>
}

export type TeamsOrderBy = {
  createdAt?: InputMaybe<OrderByDirection>
  id?: InputMaybe<OrderByDirection>
  name?: InputMaybe<OrderByDirection>
  ssoProviderId?: InputMaybe<OrderByDirection>
  updatedAt?: InputMaybe<OrderByDirection>
}

export type TeamsUpdateInput = {
  name?: InputMaybe<Scalars['String']['input']>
}

export type TeamsUpdateResponse = {
  __typename?: 'TeamsUpdateResponse'
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output']
  /** Array of records impacted by the mutation */
  records: Array<Teams>
}

export type Threads = Node & {
  __typename?: 'Threads'
  commentableEntity: CommentableEntities
  commentableEntityId: Scalars['UUID']['output']
  commentsCollection?: Maybe<CommentsConnection>
  createdAt?: Maybe<Scalars['Datetime']['output']>
  createdBy: Scalars['UUID']['output']
  id: Scalars['UUID']['output']
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']['output']
  profiles: Profiles
  team: Teams
  teamId: Scalars['UUID']['output']
  title: Scalars['String']['output']
  updatedAt?: Maybe<Scalars['Datetime']['output']>
}

export type ThreadsCommentsCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>
  before?: InputMaybe<Scalars['Cursor']['input']>
  filter?: InputMaybe<CommentsFilter>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<Array<CommentsOrderBy>>
}

export type ThreadsConnection = {
  __typename?: 'ThreadsConnection'
  edges: Array<ThreadsEdge>
  pageInfo: PageInfo
}

export type ThreadsDeleteResponse = {
  __typename?: 'ThreadsDeleteResponse'
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output']
  /** Array of records impacted by the mutation */
  records: Array<Threads>
}

export type ThreadsEdge = {
  __typename?: 'ThreadsEdge'
  cursor: Scalars['String']['output']
  node: Threads
}

export type ThreadsFilter = {
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<ThreadsFilter>>
  commentableEntityId?: InputMaybe<UuidFilter>
  createdAt?: InputMaybe<DatetimeFilter>
  createdBy?: InputMaybe<UuidFilter>
  id?: InputMaybe<UuidFilter>
  nodeId?: InputMaybe<IdFilter>
  /** Negates a filter */
  not?: InputMaybe<ThreadsFilter>
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<ThreadsFilter>>
  teamId?: InputMaybe<UuidFilter>
  title?: InputMaybe<StringFilter>
  updatedAt?: InputMaybe<DatetimeFilter>
}

export type ThreadsInsertInput = {
  teamId?: InputMaybe<Scalars['UUID']['input']>
  title?: InputMaybe<Scalars['String']['input']>
}

export type ThreadsInsertResponse = {
  __typename?: 'ThreadsInsertResponse'
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output']
  /** Array of records impacted by the mutation */
  records: Array<Threads>
}

export type ThreadsOrderBy = {
  commentableEntityId?: InputMaybe<OrderByDirection>
  createdAt?: InputMaybe<OrderByDirection>
  createdBy?: InputMaybe<OrderByDirection>
  id?: InputMaybe<OrderByDirection>
  teamId?: InputMaybe<OrderByDirection>
  title?: InputMaybe<OrderByDirection>
  updatedAt?: InputMaybe<OrderByDirection>
}

export type ThreadsUpdateInput = {
  title?: InputMaybe<Scalars['String']['input']>
}

export type ThreadsUpdateResponse = {
  __typename?: 'ThreadsUpdateResponse'
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output']
  /** Array of records impacted by the mutation */
  records: Array<Threads>
}

/** Boolean expression comparing fields on type "Time" */
export type TimeFilter = {
  eq?: InputMaybe<Scalars['Time']['input']>
  gt?: InputMaybe<Scalars['Time']['input']>
  gte?: InputMaybe<Scalars['Time']['input']>
  in?: InputMaybe<Array<Scalars['Time']['input']>>
  is?: InputMaybe<FilterIs>
  lt?: InputMaybe<Scalars['Time']['input']>
  lte?: InputMaybe<Scalars['Time']['input']>
  neq?: InputMaybe<Scalars['Time']['input']>
}

/** Boolean expression comparing fields on type "UUID" */
export type UuidFilter = {
  eq?: InputMaybe<Scalars['UUID']['input']>
  in?: InputMaybe<Array<Scalars['UUID']['input']>>
  is?: InputMaybe<FilterIs>
  neq?: InputMaybe<Scalars['UUID']['input']>
}

export enum UserEvent {
  AddDataPoint = 'add_data_point',
  AddMetric = 'add_metric',
  UpdateAvatar = 'update_avatar',
  ViewPage = 'view_page',
}

/** Boolean expression comparing fields on type "UserEvent" */
export type UserEventFilter = {
  eq?: InputMaybe<UserEvent>
  in?: InputMaybe<Array<UserEvent>>
  is?: InputMaybe<FilterIs>
  neq?: InputMaybe<UserEvent>
}

export type UserEvents = Node & {
  __typename?: 'UserEvents'
  event: UserEvent
  id: Scalars['UUID']['output']
  meta?: Maybe<Scalars['JSON']['output']>
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']['output']
  ts: Scalars['Datetime']['output']
  user: Profiles
  userId: Scalars['UUID']['output']
  value?: Maybe<Scalars['String']['output']>
}

export type UserEventsConnection = {
  __typename?: 'UserEventsConnection'
  edges: Array<UserEventsEdge>
  pageInfo: PageInfo
}

export type UserEventsEdge = {
  __typename?: 'UserEventsEdge'
  cursor: Scalars['String']['output']
  node: UserEvents
}

export type UserEventsFilter = {
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<UserEventsFilter>>
  event?: InputMaybe<UserEventFilter>
  id?: InputMaybe<UuidFilter>
  nodeId?: InputMaybe<IdFilter>
  /** Negates a filter */
  not?: InputMaybe<UserEventsFilter>
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<UserEventsFilter>>
  ts?: InputMaybe<DatetimeFilter>
  userId?: InputMaybe<UuidFilter>
  value?: InputMaybe<StringFilter>
}

export type UserEventsInsertInput = {
  event?: InputMaybe<UserEvent>
  meta?: InputMaybe<Scalars['JSON']['input']>
  value?: InputMaybe<Scalars['String']['input']>
}

export type UserEventsInsertResponse = {
  __typename?: 'UserEventsInsertResponse'
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output']
  /** Array of records impacted by the mutation */
  records: Array<UserEvents>
}

export type UserEventsOrderBy = {
  event?: InputMaybe<OrderByDirection>
  id?: InputMaybe<OrderByDirection>
  ts?: InputMaybe<OrderByDirection>
  userId?: InputMaybe<OrderByDirection>
  value?: InputMaybe<OrderByDirection>
}

export type TeamMembersSelector_QueryQueryVariables = Exact<{
  teamId: Scalars['UUID']['input']
}>

export type TeamMembersSelector_QueryQuery = {
  __typename: 'Query'
  teamMembersCollection?: {
    __typename: 'TeamMembersConnection'
    edges: Array<{
      __typename: 'TeamMembersEdge'
      node: {
        __typename: 'TeamMembers'
        nodeId: string
        profile: { __typename: 'Profiles'; id: string; name: string }
      }
    }>
  } | null
}

export type CommentsFormInsertMutationMutationVariables = Exact<{
  input: CommentsInsertInput
}>

export type CommentsFormInsertMutationMutation = {
  __typename: 'Mutation'
  insertIntoCommentsCollection?: {
    __typename: 'CommentsInsertResponse'
    affectedCount: number
    records: Array<{
      __typename: 'Comments'
      nodeId: string
      id: string
      body: string
      createdAt?: string | null
      profileId: string
      replyToComment?: {
        __typename: 'Comments'
        nodeId: string
        id: string
      } | null
    }>
  } | null
}

export type DataPointsTable_Delete_MutationMutationVariables = Exact<{
  filter: MetricsDataPointsFilter
}>

export type DataPointsTable_Delete_MutationMutation = {
  __typename: 'Mutation'
  deleteFromMetricsDataPointsCollection: {
    __typename: 'MetricsDataPointsDeleteResponse'
    affectedCount: number
    records: Array<{ __typename: 'MetricsDataPoints'; nodeId: string }>
  }
}

export type MetricCardItemFragment = {
  __typename: 'Metrics'
  id: string
  name: string
  icon?: string | null
  unitShort?: string | null
  createdAt: string
  metricsDataPointsCollection?: {
    __typename: 'MetricsDataPointsConnection'
    totalCount: number
    edges: Array<{
      __typename: 'MetricsDataPointsEdge'
      node: {
        __typename: 'MetricsDataPoints'
        nodeId: string
        time: string
        value: number
      }
    }>
  } | null
}

export type MetricDataPointFormMutationMutationVariables = Exact<{
  input: MetricsDataPointsInsertInput
}>

export type MetricDataPointFormMutationMutation = {
  __typename: 'Mutation'
  insertIntoMetricsDataPointsCollection?: {
    __typename: 'MetricsDataPointsInsertResponse'
    affectedCount: number
    records: Array<{
      __typename: 'MetricsDataPoints'
      nodeId: string
      time: string
      value: number
    }>
  } | null
}

export type MetricDetailsSectionItemFragment = {
  __typename: 'Metrics'
  id: string
  unitShort?: string | null
  metricsDataPointsCollection?: {
    __typename: 'MetricsDataPointsConnection'
    totalCount: number
    edges: Array<{
      __typename: 'MetricsDataPointsEdge'
      node: {
        __typename: 'MetricsDataPoints'
        nodeId: string
        time: string
        value: number
      }
    }>
  } | null
}

export type MetricDetailsSectionArchiveMutationMutationVariables = Exact<{
  filter?: InputMaybe<MetricsFilter>
}>

export type MetricDetailsSectionArchiveMutationMutation = {
  __typename: 'Mutation'
  updateMetricsCollection: {
    __typename: 'MetricsUpdateResponse'
    affectedCount: number
    records: Array<{ __typename: 'Metrics'; nodeId: string }>
  }
}

export type MetricFormMutationMutationVariables = Exact<{
  input: MetricsInsertInput
}>

export type MetricFormMutationMutation = {
  __typename: 'Mutation'
  insertIntoMetricsCollection?: {
    __typename: 'MetricsInsertResponse'
    affectedCount: number
    records: Array<{
      __typename: 'Metrics'
      id: string
      nodeId: string
      name: string
      icon?: string | null
      unitShort?: string | null
      createdAt: string
      metricsDataPointsCollection?: {
        __typename: 'MetricsDataPointsConnection'
        totalCount: number
        edges: Array<{
          __typename: 'MetricsDataPointsEdge'
          node: {
            __typename: 'MetricsDataPoints'
            nodeId: string
            time: string
            value: number
          }
        }>
      } | null
    }>
  } | null
}

export type MetricFormOwnersMutationMutationVariables = Exact<{
  input: Array<MetricsOwnersInsertInput> | MetricsOwnersInsertInput
}>

export type MetricFormOwnersMutationMutation = {
  __typename: 'Mutation'
  insertIntoMetricsOwnersCollection?: {
    __typename: 'MetricsOwnersInsertResponse'
    affectedCount: number
  } | null
}

export type MetricsListQueryQueryVariables = Exact<{ [key: string]: never }>

export type MetricsListQueryQuery = {
  __typename: 'Query'
  metricsCollection?: {
    __typename: 'MetricsConnection'
    pageInfo: {
      __typename: 'PageInfo'
      hasNextPage: boolean
      endCursor?: string | null
    }
    edges: Array<{
      __typename: 'MetricsEdge'
      cursor: string
      node: {
        __typename: 'Metrics'
        nodeId: string
        id: string
        name: string
        icon?: string | null
        unitShort?: string | null
        createdAt: string
        metricsDataPointsCollection?: {
          __typename: 'MetricsDataPointsConnection'
          totalCount: number
          edges: Array<{
            __typename: 'MetricsDataPointsEdge'
            node: {
              __typename: 'MetricsDataPoints'
              nodeId: string
              time: string
              value: number
            }
          }>
        } | null
      }
    }>
  } | null
}

export type TeamSelectorQueryQueryVariables = Exact<{ [key: string]: never }>

export type TeamSelectorQueryQuery = {
  __typename: 'Query'
  teamsCollection?: {
    __typename: 'TeamsConnection'
    edges: Array<{
      __typename: 'TeamsEdge'
      node: { __typename: 'Teams'; nodeId: string; id: string; name: string }
    }>
  } | null
}

export type MetricDetailsQueryQueryVariables = Exact<{
  nodeId: Scalars['ID']['input']
}>

export type MetricDetailsQueryQuery = {
  __typename: 'Query'
  node?:
    | { __typename: 'CommentableEntities'; nodeId: string }
    | { __typename: 'Comments'; nodeId: string }
    | {
        __typename: 'Metrics'
        id: string
        name: string
        icon?: string | null
        unitShort?: string | null
        description?: string | null
        nodeId: string
        metricsDataPointsCollection?: {
          __typename: 'MetricsDataPointsConnection'
          totalCount: number
          edges: Array<{
            __typename: 'MetricsDataPointsEdge'
            node: {
              __typename: 'MetricsDataPoints'
              nodeId: string
              time: string
              value: number
            }
          }>
        } | null
      }
    | { __typename: 'MetricsDataPoints'; nodeId: string }
    | { __typename: 'MetricsOwners'; nodeId: string }
    | { __typename: 'Notifications'; nodeId: string }
    | { __typename: 'Profiles'; nodeId: string }
    | { __typename: 'TeamMembers'; nodeId: string }
    | { __typename: 'Teams'; nodeId: string }
    | { __typename: 'Threads'; nodeId: string }
    | { __typename: 'UserEvents'; nodeId: string }
    | null
}

export const MetricCardItemFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'MetricCardItem' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'Metrics' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
          { kind: 'Field', name: { kind: 'Name', value: 'icon' } },
          { kind: 'Field', name: { kind: 'Name', value: 'unitShort' } },
          { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'metricsDataPointsCollection' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'orderBy' },
                value: {
                  kind: 'ListValue',
                  values: [
                    {
                      kind: 'ObjectValue',
                      fields: [
                        {
                          kind: 'ObjectField',
                          name: { kind: 'Name', value: 'time' },
                          value: { kind: 'EnumValue', value: 'AscNullsLast' },
                        },
                      ],
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
                { kind: 'Field', name: { kind: 'Name', value: 'totalCount' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'edges' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: '__typename' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'node' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: '__typename' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'nodeId' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'time' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'value' },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<MetricCardItemFragment, unknown>
export const MetricDetailsSectionItemFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'MetricDetailsSectionItem' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'Metrics' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'unitShort' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'metricsDataPointsCollection' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'orderBy' },
                value: {
                  kind: 'ListValue',
                  values: [
                    {
                      kind: 'ObjectValue',
                      fields: [
                        {
                          kind: 'ObjectField',
                          name: { kind: 'Name', value: 'time' },
                          value: { kind: 'EnumValue', value: 'AscNullsLast' },
                        },
                      ],
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
                { kind: 'Field', name: { kind: 'Name', value: 'totalCount' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'edges' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: '__typename' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'node' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: '__typename' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'nodeId' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'time' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'value' },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<MetricDetailsSectionItemFragment, unknown>
export const TeamMembersSelector_QueryDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'TeamMembersSelector_Query' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'teamId' },
          },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'UUID' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'teamMembersCollection' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'filter' },
                value: {
                  kind: 'ObjectValue',
                  fields: [
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'teamId' },
                      value: {
                        kind: 'ObjectValue',
                        fields: [
                          {
                            kind: 'ObjectField',
                            name: { kind: 'Name', value: 'eq' },
                            value: {
                              kind: 'Variable',
                              name: { kind: 'Name', value: 'teamId' },
                            },
                          },
                        ],
                      },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'edges' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: '__typename' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'node' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: '__typename' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'nodeId' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'profile' },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: '__typename' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'id' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'name' },
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  TeamMembersSelector_QueryQuery,
  TeamMembersSelector_QueryQueryVariables
>
export const CommentsFormInsertMutationDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'CommentsFormInsertMutation' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'input' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'CommentsInsertInput' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'insertIntoCommentsCollection' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'objects' },
                value: {
                  kind: 'ListValue',
                  values: [
                    {
                      kind: 'Variable',
                      name: { kind: 'Name', value: 'input' },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'affectedCount' },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'records' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: '__typename' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'nodeId' },
                      },
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'body' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'replyToComment' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: '__typename' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'nodeId' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'id' },
                            },
                          ],
                        },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'createdAt' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'profileId' },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  CommentsFormInsertMutationMutation,
  CommentsFormInsertMutationMutationVariables
>
export const DataPointsTable_Delete_MutationDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'DataPointsTable_Delete_Mutation' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'filter' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'MetricsDataPointsFilter' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
          {
            kind: 'Field',
            name: {
              kind: 'Name',
              value: 'deleteFromMetricsDataPointsCollection',
            },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'filter' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'filter' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'affectedCount' },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'records' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: '__typename' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'nodeId' },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  DataPointsTable_Delete_MutationMutation,
  DataPointsTable_Delete_MutationMutationVariables
>
export const MetricDataPointFormMutationDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'MetricDataPointFormMutation' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'input' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'MetricsDataPointsInsertInput' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
          {
            kind: 'Field',
            name: {
              kind: 'Name',
              value: 'insertIntoMetricsDataPointsCollection',
            },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'objects' },
                value: {
                  kind: 'ListValue',
                  values: [
                    {
                      kind: 'Variable',
                      name: { kind: 'Name', value: 'input' },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'affectedCount' },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'records' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: '__typename' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'nodeId' },
                      },
                      { kind: 'Field', name: { kind: 'Name', value: 'time' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'value' } },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  MetricDataPointFormMutationMutation,
  MetricDataPointFormMutationMutationVariables
>
export const MetricDetailsSectionArchiveMutationDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'MetricDetailsSectionArchiveMutation' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'filter' },
          },
          type: {
            kind: 'NamedType',
            name: { kind: 'Name', value: 'MetricsFilter' },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'updateMetricsCollection' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'set' },
                value: {
                  kind: 'ObjectValue',
                  fields: [
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'archived' },
                      value: { kind: 'BooleanValue', value: true },
                    },
                  ],
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'filter' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'filter' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'affectedCount' },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'records' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: '__typename' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'nodeId' },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  MetricDetailsSectionArchiveMutationMutation,
  MetricDetailsSectionArchiveMutationMutationVariables
>
export const MetricFormMutationDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'MetricFormMutation' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'input' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'MetricsInsertInput' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'insertIntoMetricsCollection' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'objects' },
                value: {
                  kind: 'ListValue',
                  values: [
                    {
                      kind: 'Variable',
                      name: { kind: 'Name', value: 'input' },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'affectedCount' },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'records' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: '__typename' },
                      },
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'nodeId' },
                      },
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'MetricCardItem' },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'MetricCardItem' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'Metrics' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
          { kind: 'Field', name: { kind: 'Name', value: 'icon' } },
          { kind: 'Field', name: { kind: 'Name', value: 'unitShort' } },
          { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'metricsDataPointsCollection' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'orderBy' },
                value: {
                  kind: 'ListValue',
                  values: [
                    {
                      kind: 'ObjectValue',
                      fields: [
                        {
                          kind: 'ObjectField',
                          name: { kind: 'Name', value: 'time' },
                          value: { kind: 'EnumValue', value: 'AscNullsLast' },
                        },
                      ],
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
                { kind: 'Field', name: { kind: 'Name', value: 'totalCount' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'edges' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: '__typename' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'node' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: '__typename' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'nodeId' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'time' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'value' },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  MetricFormMutationMutation,
  MetricFormMutationMutationVariables
>
export const MetricFormOwnersMutationDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'MetricFormOwnersMutation' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'input' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'ListType',
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: { kind: 'Name', value: 'MetricsOwnersInsertInput' },
                },
              },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'insertIntoMetricsOwnersCollection' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'objects' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'input' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'affectedCount' },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  MetricFormOwnersMutationMutation,
  MetricFormOwnersMutationMutationVariables
>
export const MetricsListQueryDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'MetricsListQuery' },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'metricsCollection' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'orderBy' },
                value: {
                  kind: 'ListValue',
                  values: [
                    {
                      kind: 'ObjectValue',
                      fields: [
                        {
                          kind: 'ObjectField',
                          name: { kind: 'Name', value: 'createdAt' },
                          value: { kind: 'EnumValue', value: 'DescNullsLast' },
                        },
                      ],
                    },
                  ],
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'filter' },
                value: {
                  kind: 'ObjectValue',
                  fields: [
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'archived' },
                      value: {
                        kind: 'ObjectValue',
                        fields: [
                          {
                            kind: 'ObjectField',
                            name: { kind: 'Name', value: 'eq' },
                            value: { kind: 'BooleanValue', value: false },
                          },
                        ],
                      },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'pageInfo' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: '__typename' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'hasNextPage' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'endCursor' },
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'edges' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: '__typename' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'cursor' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'node' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: '__typename' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'nodeId' },
                            },
                            {
                              kind: 'FragmentSpread',
                              name: { kind: 'Name', value: 'MetricCardItem' },
                              directives: [
                                {
                                  kind: 'Directive',
                                  name: { kind: 'Name', value: 'nonreactive' },
                                },
                              ],
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'MetricCardItem' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'Metrics' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
          { kind: 'Field', name: { kind: 'Name', value: 'icon' } },
          { kind: 'Field', name: { kind: 'Name', value: 'unitShort' } },
          { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'metricsDataPointsCollection' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'orderBy' },
                value: {
                  kind: 'ListValue',
                  values: [
                    {
                      kind: 'ObjectValue',
                      fields: [
                        {
                          kind: 'ObjectField',
                          name: { kind: 'Name', value: 'time' },
                          value: { kind: 'EnumValue', value: 'AscNullsLast' },
                        },
                      ],
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
                { kind: 'Field', name: { kind: 'Name', value: 'totalCount' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'edges' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: '__typename' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'node' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: '__typename' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'nodeId' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'time' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'value' },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  MetricsListQueryQuery,
  MetricsListQueryQueryVariables
>
export const TeamSelectorQueryDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'TeamSelectorQuery' },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'teamsCollection' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'edges' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: '__typename' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'node' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: '__typename' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'nodeId' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'id' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'name' },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  TeamSelectorQueryQuery,
  TeamSelectorQueryQueryVariables
>
export const MetricDetailsQueryDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'MetricDetailsQuery' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'nodeId' },
          },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'ID' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'node' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'nodeId' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'nodeId' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
                { kind: 'Field', name: { kind: 'Name', value: 'nodeId' } },
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'Metrics' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: '__typename' },
                      },
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'icon' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'unitShort' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'description' },
                      },
                      {
                        kind: 'FragmentSpread',
                        name: {
                          kind: 'Name',
                          value: 'MetricDetailsSectionItem',
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'MetricDetailsSectionItem' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'Metrics' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'unitShort' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'metricsDataPointsCollection' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'orderBy' },
                value: {
                  kind: 'ListValue',
                  values: [
                    {
                      kind: 'ObjectValue',
                      fields: [
                        {
                          kind: 'ObjectField',
                          name: { kind: 'Name', value: 'time' },
                          value: { kind: 'EnumValue', value: 'AscNullsLast' },
                        },
                      ],
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
                { kind: 'Field', name: { kind: 'Name', value: 'totalCount' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'edges' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: '__typename' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'node' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: '__typename' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'nodeId' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'time' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'value' },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  MetricDetailsQueryQuery,
  MetricDetailsQueryQueryVariables
>
