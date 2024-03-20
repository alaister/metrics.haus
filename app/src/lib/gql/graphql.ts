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
  createdAt?: InputMaybe<Scalars['Datetime']['input']>
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

export type MetricsOwnersUpdateInput = {
  createdAt?: InputMaybe<Scalars['Datetime']['input']>
  metricId?: InputMaybe<Scalars['UUID']['input']>
  profileId?: InputMaybe<Scalars['UUID']['input']>
}

export type MetricsOwnersUpdateResponse = {
  __typename?: 'MetricsOwnersUpdateResponse'
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output']
  /** Array of records impacted by the mutation */
  records: Array<MetricsOwners>
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
  addCompressionPolicy?: Maybe<Scalars['Int']['output']>
  addContinuousAggregatePolicy?: Maybe<Scalars['Int']['output']>
  addJob?: Maybe<Scalars['Int']['output']>
  addReorderPolicy?: Maybe<Scalars['Int']['output']>
  addRetentionPolicy?: Maybe<Scalars['Int']['output']>
  approximateRowCount?: Maybe<Scalars['BigInt']['output']>
  attachTablespace?: Maybe<Scalars['Opaque']['output']>
  caggMigrate?: Maybe<Scalars['Opaque']['output']>
  compressChunk?: Maybe<Scalars['Opaque']['output']>
  decompressChunk?: Maybe<Scalars['Opaque']['output']>
  deleteDataNode?: Maybe<Scalars['Boolean']['output']>
  /** Deletes zero or more records from the `Metrics` collection */
  deleteFromMetricsCollection: MetricsDeleteResponse
  /** Deletes zero or more records from the `MetricsDataPoints` collection */
  deleteFromMetricsDataPointsCollection: MetricsDataPointsDeleteResponse
  /** Deletes zero or more records from the `MetricsOwners` collection */
  deleteFromMetricsOwnersCollection: MetricsOwnersDeleteResponse
  /** Deletes zero or more records from the `Notifications` collection */
  deleteFromNotificationsCollection: NotificationsDeleteResponse
  /** Deletes zero or more records from the `TeamMembers` collection */
  deleteFromTeamMembersCollection: TeamMembersDeleteResponse
  /** Deletes zero or more records from the `Teams` collection */
  deleteFromTeamsCollection: TeamsDeleteResponse
  deleteJob?: Maybe<Scalars['Opaque']['output']>
  detachDataNode?: Maybe<Scalars['Int']['output']>
  detachTablespace?: Maybe<Scalars['Int']['output']>
  detachTablespaces?: Maybe<Scalars['Int']['output']>
  hypertableIndexSize?: Maybe<Scalars['BigInt']['output']>
  hypertableSize?: Maybe<Scalars['BigInt']['output']>
  /** Adds one or more `Metrics` records to the collection */
  insertIntoMetricsCollection?: Maybe<MetricsInsertResponse>
  /** Adds one or more `MetricsDataPoints` records to the collection */
  insertIntoMetricsDataPointsCollection?: Maybe<MetricsDataPointsInsertResponse>
  /** Adds one or more `MetricsOwners` records to the collection */
  insertIntoMetricsOwnersCollection?: Maybe<MetricsOwnersInsertResponse>
  /** Adds one or more `Notifications` records to the collection */
  insertIntoNotificationsCollection?: Maybe<NotificationsInsertResponse>
  /** Adds one or more `Teams` records to the collection */
  insertIntoTeamsCollection?: Maybe<TeamsInsertResponse>
  locf?: Maybe<Scalars['Opaque']['output']>
  moveChunk?: Maybe<Scalars['Opaque']['output']>
  recompressChunk?: Maybe<Scalars['Opaque']['output']>
  refreshContinuousAggregate?: Maybe<Scalars['Opaque']['output']>
  removeCompressionPolicy?: Maybe<Scalars['Boolean']['output']>
  removeContinuousAggregatePolicy?: Maybe<Scalars['Opaque']['output']>
  removeReorderPolicy?: Maybe<Scalars['Opaque']['output']>
  removeRetentionPolicy?: Maybe<Scalars['Opaque']['output']>
  reorderChunk?: Maybe<Scalars['Opaque']['output']>
  runJob?: Maybe<Scalars['Opaque']['output']>
  setChunkTimeInterval?: Maybe<Scalars['Opaque']['output']>
  setIntegerNowFunc?: Maybe<Scalars['Opaque']['output']>
  setNumberPartitions?: Maybe<Scalars['Opaque']['output']>
  setReplicationFactor?: Maybe<Scalars['Opaque']['output']>
  timescaledbFdwHandler?: Maybe<Scalars['Opaque']['output']>
  timescaledbPostRestore?: Maybe<Scalars['Boolean']['output']>
  timescaledbPreRestore?: Maybe<Scalars['Boolean']['output']>
  /** Updates zero or more records in the `Metrics` collection */
  updateMetricsCollection: MetricsUpdateResponse
  /** Updates zero or more records in the `MetricsOwners` collection */
  updateMetricsOwnersCollection: MetricsOwnersUpdateResponse
  /** Updates zero or more records in the `Notifications` collection */
  updateNotificationsCollection: NotificationsUpdateResponse
  /** Updates zero or more records in the `Profiles` collection */
  updateProfilesCollection: ProfilesUpdateResponse
  /** Updates zero or more records in the `Teams` collection */
  updateTeamsCollection: TeamsUpdateResponse
}

/** The root type for creating and mutating data */
export type MutationAddCompressionPolicyArgs = {
  compressAfter?: InputMaybe<Scalars['Opaque']['input']>
  hypertable?: InputMaybe<Scalars['Opaque']['input']>
  ifNotExists?: InputMaybe<Scalars['Boolean']['input']>
  initialStart?: InputMaybe<Scalars['Datetime']['input']>
  scheduleInterval?: InputMaybe<Scalars['Opaque']['input']>
  timezone?: InputMaybe<Scalars['String']['input']>
}

/** The root type for creating and mutating data */
export type MutationAddContinuousAggregatePolicyArgs = {
  continuousAggregate?: InputMaybe<Scalars['Opaque']['input']>
  endOffset?: InputMaybe<Scalars['Opaque']['input']>
  ifNotExists?: InputMaybe<Scalars['Boolean']['input']>
  initialStart?: InputMaybe<Scalars['Datetime']['input']>
  scheduleInterval?: InputMaybe<Scalars['Opaque']['input']>
  startOffset?: InputMaybe<Scalars['Opaque']['input']>
  timezone?: InputMaybe<Scalars['String']['input']>
}

/** The root type for creating and mutating data */
export type MutationAddJobArgs = {
  checkConfig?: InputMaybe<Scalars['Opaque']['input']>
  config?: InputMaybe<Scalars['JSON']['input']>
  fixedSchedule?: InputMaybe<Scalars['Boolean']['input']>
  initialStart?: InputMaybe<Scalars['Datetime']['input']>
  proc?: InputMaybe<Scalars['Opaque']['input']>
  scheduleInterval?: InputMaybe<Scalars['Opaque']['input']>
  scheduled?: InputMaybe<Scalars['Boolean']['input']>
  timezone?: InputMaybe<Scalars['String']['input']>
}

/** The root type for creating and mutating data */
export type MutationAddReorderPolicyArgs = {
  hypertable?: InputMaybe<Scalars['Opaque']['input']>
  ifNotExists?: InputMaybe<Scalars['Boolean']['input']>
  indexName?: InputMaybe<Scalars['Opaque']['input']>
  initialStart?: InputMaybe<Scalars['Datetime']['input']>
  timezone?: InputMaybe<Scalars['String']['input']>
}

/** The root type for creating and mutating data */
export type MutationAddRetentionPolicyArgs = {
  dropAfter?: InputMaybe<Scalars['Opaque']['input']>
  ifNotExists?: InputMaybe<Scalars['Boolean']['input']>
  initialStart?: InputMaybe<Scalars['Datetime']['input']>
  relation?: InputMaybe<Scalars['Opaque']['input']>
  scheduleInterval?: InputMaybe<Scalars['Opaque']['input']>
  timezone?: InputMaybe<Scalars['String']['input']>
}

/** The root type for creating and mutating data */
export type MutationApproximateRowCountArgs = {
  relation?: InputMaybe<Scalars['Opaque']['input']>
}

/** The root type for creating and mutating data */
export type MutationAttachTablespaceArgs = {
  hypertable?: InputMaybe<Scalars['Opaque']['input']>
  ifNotAttached?: InputMaybe<Scalars['Boolean']['input']>
  tablespace?: InputMaybe<Scalars['Opaque']['input']>
}

/** The root type for creating and mutating data */
export type MutationCaggMigrateArgs = {
  cagg?: InputMaybe<Scalars['Opaque']['input']>
  dropOld?: InputMaybe<Scalars['Boolean']['input']>
  override?: InputMaybe<Scalars['Boolean']['input']>
}

/** The root type for creating and mutating data */
export type MutationCompressChunkArgs = {
  ifNotCompressed?: InputMaybe<Scalars['Boolean']['input']>
  uncompressedChunk?: InputMaybe<Scalars['Opaque']['input']>
}

/** The root type for creating and mutating data */
export type MutationDecompressChunkArgs = {
  ifCompressed?: InputMaybe<Scalars['Boolean']['input']>
  uncompressedChunk?: InputMaybe<Scalars['Opaque']['input']>
}

/** The root type for creating and mutating data */
export type MutationDeleteDataNodeArgs = {
  dropDatabase?: InputMaybe<Scalars['Boolean']['input']>
  force?: InputMaybe<Scalars['Boolean']['input']>
  ifExists?: InputMaybe<Scalars['Boolean']['input']>
  nodeName?: InputMaybe<Scalars['Opaque']['input']>
  repartition?: InputMaybe<Scalars['Boolean']['input']>
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
export type MutationDeleteFromNotificationsCollectionArgs = {
  atMost?: Scalars['Int']['input']
  filter?: InputMaybe<NotificationsFilter>
}

/** The root type for creating and mutating data */
export type MutationDeleteFromTeamMembersCollectionArgs = {
  atMost?: Scalars['Int']['input']
  filter?: InputMaybe<TeamMembersFilter>
}

/** The root type for creating and mutating data */
export type MutationDeleteFromTeamsCollectionArgs = {
  atMost?: Scalars['Int']['input']
  filter?: InputMaybe<TeamsFilter>
}

/** The root type for creating and mutating data */
export type MutationDeleteJobArgs = {
  jobId?: InputMaybe<Scalars['Int']['input']>
}

/** The root type for creating and mutating data */
export type MutationDetachDataNodeArgs = {
  dropRemoteData?: InputMaybe<Scalars['Boolean']['input']>
  force?: InputMaybe<Scalars['Boolean']['input']>
  hypertable?: InputMaybe<Scalars['Opaque']['input']>
  ifAttached?: InputMaybe<Scalars['Boolean']['input']>
  nodeName?: InputMaybe<Scalars['Opaque']['input']>
  repartition?: InputMaybe<Scalars['Boolean']['input']>
}

/** The root type for creating and mutating data */
export type MutationDetachTablespaceArgs = {
  hypertable?: InputMaybe<Scalars['Opaque']['input']>
  ifAttached?: InputMaybe<Scalars['Boolean']['input']>
  tablespace?: InputMaybe<Scalars['Opaque']['input']>
}

/** The root type for creating and mutating data */
export type MutationDetachTablespacesArgs = {
  hypertable?: InputMaybe<Scalars['Opaque']['input']>
}

/** The root type for creating and mutating data */
export type MutationHypertableIndexSizeArgs = {
  indexName?: InputMaybe<Scalars['Opaque']['input']>
}

/** The root type for creating and mutating data */
export type MutationHypertableSizeArgs = {
  hypertable?: InputMaybe<Scalars['Opaque']['input']>
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
export type MutationInsertIntoNotificationsCollectionArgs = {
  objects: Array<NotificationsInsertInput>
}

/** The root type for creating and mutating data */
export type MutationInsertIntoTeamsCollectionArgs = {
  objects: Array<TeamsInsertInput>
}

/** The root type for creating and mutating data */
export type MutationLocfArgs = {
  prev?: InputMaybe<Scalars['Opaque']['input']>
  treatNullAsMissing?: InputMaybe<Scalars['Boolean']['input']>
  value?: InputMaybe<Scalars['Opaque']['input']>
}

/** The root type for creating and mutating data */
export type MutationMoveChunkArgs = {
  chunk?: InputMaybe<Scalars['Opaque']['input']>
  destinationTablespace?: InputMaybe<Scalars['Opaque']['input']>
  indexDestinationTablespace?: InputMaybe<Scalars['Opaque']['input']>
  reorderIndex?: InputMaybe<Scalars['Opaque']['input']>
  verbose?: InputMaybe<Scalars['Boolean']['input']>
}

/** The root type for creating and mutating data */
export type MutationRecompressChunkArgs = {
  chunk?: InputMaybe<Scalars['Opaque']['input']>
  ifNotCompressed?: InputMaybe<Scalars['Boolean']['input']>
}

/** The root type for creating and mutating data */
export type MutationRefreshContinuousAggregateArgs = {
  continuousAggregate?: InputMaybe<Scalars['Opaque']['input']>
  windowEnd?: InputMaybe<Scalars['Opaque']['input']>
  windowStart?: InputMaybe<Scalars['Opaque']['input']>
}

/** The root type for creating and mutating data */
export type MutationRemoveCompressionPolicyArgs = {
  hypertable?: InputMaybe<Scalars['Opaque']['input']>
  ifExists?: InputMaybe<Scalars['Boolean']['input']>
}

/** The root type for creating and mutating data */
export type MutationRemoveContinuousAggregatePolicyArgs = {
  continuousAggregate?: InputMaybe<Scalars['Opaque']['input']>
  ifExists?: InputMaybe<Scalars['Boolean']['input']>
  ifNotExists?: InputMaybe<Scalars['Boolean']['input']>
}

/** The root type for creating and mutating data */
export type MutationRemoveReorderPolicyArgs = {
  hypertable?: InputMaybe<Scalars['Opaque']['input']>
  ifExists?: InputMaybe<Scalars['Boolean']['input']>
}

/** The root type for creating and mutating data */
export type MutationRemoveRetentionPolicyArgs = {
  ifExists?: InputMaybe<Scalars['Boolean']['input']>
  relation?: InputMaybe<Scalars['Opaque']['input']>
}

/** The root type for creating and mutating data */
export type MutationReorderChunkArgs = {
  chunk?: InputMaybe<Scalars['Opaque']['input']>
  index?: InputMaybe<Scalars['Opaque']['input']>
  verbose?: InputMaybe<Scalars['Boolean']['input']>
}

/** The root type for creating and mutating data */
export type MutationRunJobArgs = {
  jobId?: InputMaybe<Scalars['Int']['input']>
}

/** The root type for creating and mutating data */
export type MutationSetChunkTimeIntervalArgs = {
  chunkTimeInterval?: InputMaybe<Scalars['Opaque']['input']>
  dimensionName?: InputMaybe<Scalars['Opaque']['input']>
  hypertable?: InputMaybe<Scalars['Opaque']['input']>
}

/** The root type for creating and mutating data */
export type MutationSetIntegerNowFuncArgs = {
  hypertable?: InputMaybe<Scalars['Opaque']['input']>
  integerNowFunc?: InputMaybe<Scalars['Opaque']['input']>
  replaceIfExists?: InputMaybe<Scalars['Boolean']['input']>
}

/** The root type for creating and mutating data */
export type MutationSetNumberPartitionsArgs = {
  dimensionName?: InputMaybe<Scalars['Opaque']['input']>
  hypertable?: InputMaybe<Scalars['Opaque']['input']>
  numberPartitions?: InputMaybe<Scalars['Int']['input']>
}

/** The root type for creating and mutating data */
export type MutationSetReplicationFactorArgs = {
  hypertable?: InputMaybe<Scalars['Opaque']['input']>
  replicationFactor?: InputMaybe<Scalars['Int']['input']>
}

/** The root type for creating and mutating data */
export type MutationUpdateMetricsCollectionArgs = {
  atMost?: Scalars['Int']['input']
  filter?: InputMaybe<MetricsFilter>
  set: MetricsUpdateInput
}

/** The root type for creating and mutating data */
export type MutationUpdateMetricsOwnersCollectionArgs = {
  atMost?: Scalars['Int']['input']
  filter?: InputMaybe<MetricsOwnersFilter>
  set: MetricsOwnersUpdateInput
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

export type Node = {
  /** Retrieves a record by `ID` */
  nodeId: Scalars['ID']['output']
}

export type Notifications = Node & {
  __typename?: 'Notifications'
  createdAt?: Maybe<Scalars['Datetime']['output']>
  id: Scalars['UUID']['output']
  metadata?: Maybe<Scalars['JSON']['output']>
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']['output']
  profile: Profiles
  profileId: Scalars['UUID']['output']
  text?: Maybe<Scalars['String']['output']>
}

export type NotificationsConnection = {
  __typename?: 'NotificationsConnection'
  edges: Array<NotificationsEdge>
  pageInfo: PageInfo
}

export type NotificationsDeleteResponse = {
  __typename?: 'NotificationsDeleteResponse'
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output']
  /** Array of records impacted by the mutation */
  records: Array<Notifications>
}

export type NotificationsEdge = {
  __typename?: 'NotificationsEdge'
  cursor: Scalars['String']['output']
  node: Notifications
}

export type NotificationsFilter = {
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<NotificationsFilter>>
  createdAt?: InputMaybe<DatetimeFilter>
  id?: InputMaybe<UuidFilter>
  nodeId?: InputMaybe<IdFilter>
  /** Negates a filter */
  not?: InputMaybe<NotificationsFilter>
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<NotificationsFilter>>
  profileId?: InputMaybe<UuidFilter>
  text?: InputMaybe<StringFilter>
}

export type NotificationsInsertInput = {
  createdAt?: InputMaybe<Scalars['Datetime']['input']>
  id?: InputMaybe<Scalars['UUID']['input']>
  metadata?: InputMaybe<Scalars['JSON']['input']>
  profileId?: InputMaybe<Scalars['UUID']['input']>
  text?: InputMaybe<Scalars['String']['input']>
}

export type NotificationsInsertResponse = {
  __typename?: 'NotificationsInsertResponse'
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output']
  /** Array of records impacted by the mutation */
  records: Array<Notifications>
}

export type NotificationsOrderBy = {
  createdAt?: InputMaybe<OrderByDirection>
  id?: InputMaybe<OrderByDirection>
  profileId?: InputMaybe<OrderByDirection>
  text?: InputMaybe<OrderByDirection>
}

export type NotificationsUpdateInput = {
  createdAt?: InputMaybe<Scalars['Datetime']['input']>
  id?: InputMaybe<Scalars['UUID']['input']>
  metadata?: InputMaybe<Scalars['JSON']['input']>
  profileId?: InputMaybe<Scalars['UUID']['input']>
  text?: InputMaybe<Scalars['String']['input']>
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
  createdAt: Scalars['Datetime']['output']
  id: Scalars['UUID']['output']
  metricsDataPointsCollection?: Maybe<MetricsDataPointsConnection>
  metricsOwnersCollection?: Maybe<MetricsOwnersConnection>
  name: Scalars['String']['output']
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']['output']
  notificationsCollection?: Maybe<NotificationsConnection>
  teamMembersCollection?: Maybe<TeamMembersConnection>
  updatedAt: Scalars['Datetime']['output']
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
  getTelemetryReport?: Maybe<Scalars['JSON']['output']>
  isCurrentUserInTeam?: Maybe<Scalars['Boolean']['output']>
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
}

/** The root type for querying data */
export type QueryIsCurrentUserInTeamArgs = {
  teamId?: InputMaybe<Scalars['UUID']['input']>
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

export type TeamMembersDeleteResponse = {
  __typename?: 'TeamMembersDeleteResponse'
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output']
  /** Array of records impacted by the mutation */
  records: Array<TeamMembers>
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
  createdAt: Scalars['Datetime']['output']
  id: Scalars['UUID']['output']
  metricsCollection?: Maybe<MetricsConnection>
  name: Scalars['String']['output']
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']['output']
  ssoProviderId?: Maybe<Scalars['String']['output']>
  teamMembersCollection?: Maybe<TeamMembersConnection>
  updatedAt: Scalars['Datetime']['output']
}

export type TeamsMetricsCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>
  before?: InputMaybe<Scalars['Cursor']['input']>
  filter?: InputMaybe<MetricsFilter>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<Array<MetricsOrderBy>>
}

export type TeamsTeamMembersCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>
  before?: InputMaybe<Scalars['Cursor']['input']>
  filter?: InputMaybe<TeamMembersFilter>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<Array<TeamMembersOrderBy>>
}

export type TeamsConnection = {
  __typename?: 'TeamsConnection'
  edges: Array<TeamsEdge>
  pageInfo: PageInfo
}

export type TeamsDeleteResponse = {
  __typename?: 'TeamsDeleteResponse'
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output']
  /** Array of records impacted by the mutation */
  records: Array<Teams>
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

export type TeamsInsertInput = {
  createdAt?: InputMaybe<Scalars['Datetime']['input']>
  id?: InputMaybe<Scalars['UUID']['input']>
  name?: InputMaybe<Scalars['String']['input']>
  ssoProviderId?: InputMaybe<Scalars['String']['input']>
  updatedAt?: InputMaybe<Scalars['Datetime']['input']>
}

export type TeamsInsertResponse = {
  __typename?: 'TeamsInsertResponse'
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output']
  /** Array of records impacted by the mutation */
  records: Array<Teams>
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
