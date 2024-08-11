import { GraphQLClient, RequestOptions } from 'graphql-request';
import gql from 'graphql-tag';
export type Maybe<T> = T;
export type InputMaybe<T> = T;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
type GraphQLClientRequestHeaders = RequestOptions['requestHeaders'];
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  Date: { input: any; output: any; }
  GraphQLBigInt: { input: any; output: any; }
  GraphQLStringOrFloat: { input: any; output: any; }
  Hash: { input: any; output: any; }
  JSON: { input: any; output: any; }
};

export enum EventEnum {
  Create = 'create',
  Delete = 'delete',
  Update = 'update'
}

export type Query = {
  readonly __typename?: 'Query';
  readonly accordionBlock: ReadonlyArray<AccordionBlock>;
  readonly accordionBlock_accordionItems: ReadonlyArray<AccordionBlock_AccordionItems>;
  readonly accordionBlock_accordionItems_aggregated: ReadonlyArray<AccordionBlock_AccordionItems_Aggregated>;
  readonly accordionBlock_accordionItems_by_id: Maybe<AccordionBlock_AccordionItems>;
  readonly accordionBlock_accordionItems_by_version: Maybe<Version_AccordionBlock_AccordionItems>;
  readonly accordionBlock_aggregated: ReadonlyArray<AccordionBlock_Aggregated>;
  readonly accordionBlock_by_id: Maybe<AccordionBlock>;
  readonly accordionBlock_by_version: Maybe<Version_AccordionBlock>;
  readonly accordionItems: ReadonlyArray<AccordionItems>;
  readonly accordionItems_aggregated: ReadonlyArray<AccordionItems_Aggregated>;
  readonly accordionItems_by_id: Maybe<AccordionItems>;
  readonly accordionItems_by_version: Maybe<Version_AccordionItems>;
  readonly accordionsSection: ReadonlyArray<AccordionsSection>;
  readonly accordionsSection_accordionBlock: ReadonlyArray<AccordionsSection_AccordionBlock>;
  readonly accordionsSection_accordionBlock_aggregated: ReadonlyArray<AccordionsSection_AccordionBlock_Aggregated>;
  readonly accordionsSection_accordionBlock_by_id: Maybe<AccordionsSection_AccordionBlock>;
  readonly accordionsSection_accordionBlock_by_version: Maybe<Version_AccordionsSection_AccordionBlock>;
  readonly accordionsSection_aggregated: ReadonlyArray<AccordionsSection_Aggregated>;
  readonly accordionsSection_by_id: Maybe<AccordionsSection>;
  readonly accordionsSection_by_version: Maybe<Version_AccordionsSection>;
  readonly directionItem: ReadonlyArray<DirectionItem>;
  readonly directionItem_aggregated: ReadonlyArray<DirectionItem_Aggregated>;
  readonly directionItem_by_id: Maybe<DirectionItem>;
  readonly directionItem_by_version: Maybe<Version_DirectionItem>;
  readonly directions: ReadonlyArray<Directions>;
  readonly directions_aggregated: ReadonlyArray<Directions_Aggregated>;
  readonly directions_by_id: Maybe<Directions>;
  readonly directions_by_version: Maybe<Version_Directions>;
  readonly directions_directionItem: ReadonlyArray<Directions_DirectionItem>;
  readonly directions_directionItem_aggregated: ReadonlyArray<Directions_DirectionItem_Aggregated>;
  readonly directions_directionItem_by_id: Maybe<Directions_DirectionItem>;
  readonly directions_directionItem_by_version: Maybe<Version_Directions_DirectionItem>;
  readonly directions_subDirections: ReadonlyArray<Directions_SubDirections>;
  readonly directions_subDirections_aggregated: ReadonlyArray<Directions_SubDirections_Aggregated>;
  readonly directions_subDirections_by_id: Maybe<Directions_SubDirections>;
  readonly directions_subDirections_by_version: Maybe<Version_Directions_SubDirections>;
  readonly services: ReadonlyArray<Services>;
  readonly services_aggregated: ReadonlyArray<Services_Aggregated>;
  readonly services_by_id: Maybe<Services>;
  readonly services_by_version: Maybe<Version_Services>;
  readonly services_files: ReadonlyArray<Services_Files>;
  readonly services_files_aggregated: ReadonlyArray<Services_Files_Aggregated>;
  readonly services_files_by_id: Maybe<Services_Files>;
  readonly services_files_by_version: Maybe<Version_Services_Files>;
  readonly services_serviceItemDirections: ReadonlyArray<Services_ServiceItemDirections>;
  readonly services_serviceItemDirections_aggregated: ReadonlyArray<Services_ServiceItemDirections_Aggregated>;
  readonly services_serviceItemDirections_by_id: Maybe<Services_ServiceItemDirections>;
  readonly services_serviceItemDirections_by_version: Maybe<Version_Services_ServiceItemDirections>;
  readonly subDirections: ReadonlyArray<SubDirections>;
  readonly subDirections_aggregated: ReadonlyArray<SubDirections_Aggregated>;
  readonly subDirections_by_id: Maybe<SubDirections>;
  readonly subDirections_by_version: Maybe<Version_SubDirections>;
  readonly subDirections_directionItem: ReadonlyArray<SubDirections_DirectionItem>;
  readonly subDirections_directionItem_aggregated: ReadonlyArray<SubDirections_DirectionItem_Aggregated>;
  readonly subDirections_directionItem_by_id: Maybe<SubDirections_DirectionItem>;
  readonly subDirections_directionItem_by_version: Maybe<Version_SubDirections_DirectionItem>;
};


export type QueryAccordionBlockArgs = {
  filter: InputMaybe<AccordionBlock_Filter>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryAccordionBlock_AccordionItemsArgs = {
  filter: InputMaybe<AccordionBlock_AccordionItems_Filter>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryAccordionBlock_AccordionItems_AggregatedArgs = {
  filter: InputMaybe<AccordionBlock_AccordionItems_Filter>;
  groupBy: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryAccordionBlock_AccordionItems_By_IdArgs = {
  id: Scalars['ID']['input'];
  version: InputMaybe<Scalars['String']['input']>;
};


export type QueryAccordionBlock_AccordionItems_By_VersionArgs = {
  id: Scalars['ID']['input'];
  version: Scalars['String']['input'];
};


export type QueryAccordionBlock_AggregatedArgs = {
  filter: InputMaybe<AccordionBlock_Filter>;
  groupBy: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryAccordionBlock_By_IdArgs = {
  id: Scalars['ID']['input'];
  version: InputMaybe<Scalars['String']['input']>;
};


export type QueryAccordionBlock_By_VersionArgs = {
  id: Scalars['ID']['input'];
  version: Scalars['String']['input'];
};


export type QueryAccordionItemsArgs = {
  filter: InputMaybe<AccordionItems_Filter>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryAccordionItems_AggregatedArgs = {
  filter: InputMaybe<AccordionItems_Filter>;
  groupBy: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryAccordionItems_By_IdArgs = {
  id: Scalars['ID']['input'];
  version: InputMaybe<Scalars['String']['input']>;
};


export type QueryAccordionItems_By_VersionArgs = {
  id: Scalars['ID']['input'];
  version: Scalars['String']['input'];
};


export type QueryAccordionsSectionArgs = {
  filter: InputMaybe<AccordionsSection_Filter>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryAccordionsSection_AccordionBlockArgs = {
  filter: InputMaybe<AccordionsSection_AccordionBlock_Filter>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryAccordionsSection_AccordionBlock_AggregatedArgs = {
  filter: InputMaybe<AccordionsSection_AccordionBlock_Filter>;
  groupBy: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryAccordionsSection_AccordionBlock_By_IdArgs = {
  id: Scalars['ID']['input'];
  version: InputMaybe<Scalars['String']['input']>;
};


export type QueryAccordionsSection_AccordionBlock_By_VersionArgs = {
  id: Scalars['ID']['input'];
  version: Scalars['String']['input'];
};


export type QueryAccordionsSection_AggregatedArgs = {
  filter: InputMaybe<AccordionsSection_Filter>;
  groupBy: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryAccordionsSection_By_IdArgs = {
  id: Scalars['ID']['input'];
  version: InputMaybe<Scalars['String']['input']>;
};


export type QueryAccordionsSection_By_VersionArgs = {
  id: Scalars['ID']['input'];
  version: Scalars['String']['input'];
};


export type QueryDirectionItemArgs = {
  filter: InputMaybe<DirectionItem_Filter>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryDirectionItem_AggregatedArgs = {
  filter: InputMaybe<DirectionItem_Filter>;
  groupBy: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryDirectionItem_By_IdArgs = {
  id: Scalars['ID']['input'];
  version: InputMaybe<Scalars['String']['input']>;
};


export type QueryDirectionItem_By_VersionArgs = {
  id: Scalars['ID']['input'];
  version: Scalars['String']['input'];
};


export type QueryDirectionsArgs = {
  filter: InputMaybe<Directions_Filter>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryDirections_AggregatedArgs = {
  filter: InputMaybe<Directions_Filter>;
  groupBy: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryDirections_By_IdArgs = {
  id: Scalars['ID']['input'];
  version: InputMaybe<Scalars['String']['input']>;
};


export type QueryDirections_By_VersionArgs = {
  id: Scalars['ID']['input'];
  version: Scalars['String']['input'];
};


export type QueryDirections_DirectionItemArgs = {
  filter: InputMaybe<Directions_DirectionItem_Filter>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryDirections_DirectionItem_AggregatedArgs = {
  filter: InputMaybe<Directions_DirectionItem_Filter>;
  groupBy: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryDirections_DirectionItem_By_IdArgs = {
  id: Scalars['ID']['input'];
  version: InputMaybe<Scalars['String']['input']>;
};


export type QueryDirections_DirectionItem_By_VersionArgs = {
  id: Scalars['ID']['input'];
  version: Scalars['String']['input'];
};


export type QueryDirections_SubDirectionsArgs = {
  filter: InputMaybe<Directions_SubDirections_Filter>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryDirections_SubDirections_AggregatedArgs = {
  filter: InputMaybe<Directions_SubDirections_Filter>;
  groupBy: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryDirections_SubDirections_By_IdArgs = {
  id: Scalars['ID']['input'];
  version: InputMaybe<Scalars['String']['input']>;
};


export type QueryDirections_SubDirections_By_VersionArgs = {
  id: Scalars['ID']['input'];
  version: Scalars['String']['input'];
};


export type QueryServicesArgs = {
  filter: InputMaybe<Services_Filter>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryServices_AggregatedArgs = {
  filter: InputMaybe<Services_Filter>;
  groupBy: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryServices_By_IdArgs = {
  id: Scalars['ID']['input'];
  version: InputMaybe<Scalars['String']['input']>;
};


export type QueryServices_By_VersionArgs = {
  id: Scalars['ID']['input'];
  version: Scalars['String']['input'];
};


export type QueryServices_FilesArgs = {
  filter: InputMaybe<Services_Files_Filter>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryServices_Files_AggregatedArgs = {
  filter: InputMaybe<Services_Files_Filter>;
  groupBy: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryServices_Files_By_IdArgs = {
  id: Scalars['ID']['input'];
  version: InputMaybe<Scalars['String']['input']>;
};


export type QueryServices_Files_By_VersionArgs = {
  id: Scalars['ID']['input'];
  version: Scalars['String']['input'];
};


export type QueryServices_ServiceItemDirectionsArgs = {
  filter: InputMaybe<Services_ServiceItemDirections_Filter>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryServices_ServiceItemDirections_AggregatedArgs = {
  filter: InputMaybe<Services_ServiceItemDirections_Filter>;
  groupBy: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryServices_ServiceItemDirections_By_IdArgs = {
  id: Scalars['ID']['input'];
  version: InputMaybe<Scalars['String']['input']>;
};


export type QueryServices_ServiceItemDirections_By_VersionArgs = {
  id: Scalars['ID']['input'];
  version: Scalars['String']['input'];
};


export type QuerySubDirectionsArgs = {
  filter: InputMaybe<SubDirections_Filter>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};


export type QuerySubDirections_AggregatedArgs = {
  filter: InputMaybe<SubDirections_Filter>;
  groupBy: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};


export type QuerySubDirections_By_IdArgs = {
  id: Scalars['ID']['input'];
  version: InputMaybe<Scalars['String']['input']>;
};


export type QuerySubDirections_By_VersionArgs = {
  id: Scalars['ID']['input'];
  version: Scalars['String']['input'];
};


export type QuerySubDirections_DirectionItemArgs = {
  filter: InputMaybe<SubDirections_DirectionItem_Filter>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};


export type QuerySubDirections_DirectionItem_AggregatedArgs = {
  filter: InputMaybe<SubDirections_DirectionItem_Filter>;
  groupBy: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};


export type QuerySubDirections_DirectionItem_By_IdArgs = {
  id: Scalars['ID']['input'];
  version: InputMaybe<Scalars['String']['input']>;
};


export type QuerySubDirections_DirectionItem_By_VersionArgs = {
  id: Scalars['ID']['input'];
  version: Scalars['String']['input'];
};

export type Subscription = {
  readonly __typename?: 'Subscription';
  readonly accordionBlock_accordionItems_mutated: Maybe<AccordionBlock_AccordionItems_Mutated>;
  readonly accordionBlock_mutated: Maybe<AccordionBlock_Mutated>;
  readonly accordionItems_mutated: Maybe<AccordionItems_Mutated>;
  readonly accordionsSection_accordionBlock_mutated: Maybe<AccordionsSection_AccordionBlock_Mutated>;
  readonly accordionsSection_mutated: Maybe<AccordionsSection_Mutated>;
  readonly directionItem_mutated: Maybe<DirectionItem_Mutated>;
  readonly directions_directionItem_mutated: Maybe<Directions_DirectionItem_Mutated>;
  readonly directions_mutated: Maybe<Directions_Mutated>;
  readonly directions_subDirections_mutated: Maybe<Directions_SubDirections_Mutated>;
  readonly directus_activity_mutated: Maybe<Directus_Activity_Mutated>;
  readonly directus_files_mutated: Maybe<Directus_Files_Mutated>;
  readonly directus_notifications_mutated: Maybe<Directus_Notifications_Mutated>;
  readonly directus_permissions_mutated: Maybe<Directus_Permissions_Mutated>;
  readonly directus_presets_mutated: Maybe<Directus_Presets_Mutated>;
  readonly directus_roles_mutated: Maybe<Directus_Roles_Mutated>;
  readonly directus_shares_mutated: Maybe<Directus_Shares_Mutated>;
  readonly directus_users_mutated: Maybe<Directus_Users_Mutated>;
  readonly services_files_mutated: Maybe<Services_Files_Mutated>;
  readonly services_mutated: Maybe<Services_Mutated>;
  readonly services_serviceItemDirections_mutated: Maybe<Services_ServiceItemDirections_Mutated>;
  readonly subDirections_directionItem_mutated: Maybe<SubDirections_DirectionItem_Mutated>;
  readonly subDirections_mutated: Maybe<SubDirections_Mutated>;
};


export type SubscriptionAccordionBlock_AccordionItems_MutatedArgs = {
  event: InputMaybe<EventEnum>;
};


export type SubscriptionAccordionBlock_MutatedArgs = {
  event: InputMaybe<EventEnum>;
};


export type SubscriptionAccordionItems_MutatedArgs = {
  event: InputMaybe<EventEnum>;
};


export type SubscriptionAccordionsSection_AccordionBlock_MutatedArgs = {
  event: InputMaybe<EventEnum>;
};


export type SubscriptionAccordionsSection_MutatedArgs = {
  event: InputMaybe<EventEnum>;
};


export type SubscriptionDirectionItem_MutatedArgs = {
  event: InputMaybe<EventEnum>;
};


export type SubscriptionDirections_DirectionItem_MutatedArgs = {
  event: InputMaybe<EventEnum>;
};


export type SubscriptionDirections_MutatedArgs = {
  event: InputMaybe<EventEnum>;
};


export type SubscriptionDirections_SubDirections_MutatedArgs = {
  event: InputMaybe<EventEnum>;
};


export type SubscriptionDirectus_Activity_MutatedArgs = {
  event: InputMaybe<EventEnum>;
};


export type SubscriptionDirectus_Files_MutatedArgs = {
  event: InputMaybe<EventEnum>;
};


export type SubscriptionDirectus_Notifications_MutatedArgs = {
  event: InputMaybe<EventEnum>;
};


export type SubscriptionDirectus_Permissions_MutatedArgs = {
  event: InputMaybe<EventEnum>;
};


export type SubscriptionDirectus_Presets_MutatedArgs = {
  event: InputMaybe<EventEnum>;
};


export type SubscriptionDirectus_Roles_MutatedArgs = {
  event: InputMaybe<EventEnum>;
};


export type SubscriptionDirectus_Shares_MutatedArgs = {
  event: InputMaybe<EventEnum>;
};


export type SubscriptionDirectus_Users_MutatedArgs = {
  event: InputMaybe<EventEnum>;
};


export type SubscriptionServices_Files_MutatedArgs = {
  event: InputMaybe<EventEnum>;
};


export type SubscriptionServices_MutatedArgs = {
  event: InputMaybe<EventEnum>;
};


export type SubscriptionServices_ServiceItemDirections_MutatedArgs = {
  event: InputMaybe<EventEnum>;
};


export type SubscriptionSubDirections_DirectionItem_MutatedArgs = {
  event: InputMaybe<EventEnum>;
};


export type SubscriptionSubDirections_MutatedArgs = {
  event: InputMaybe<EventEnum>;
};

export type AccordionBlock = {
  readonly __typename?: 'accordionBlock';
  readonly id: Scalars['ID']['output'];
  readonly items: Maybe<ReadonlyArray<Maybe<AccordionBlock_AccordionItems>>>;
  readonly items_func: Maybe<Count_Functions>;
  readonly title: Maybe<Scalars['String']['output']>;
};


export type AccordionBlockItemsArgs = {
  filter: InputMaybe<AccordionBlock_AccordionItems_Filter>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};

export type AccordionBlock_AccordionItems = {
  readonly __typename?: 'accordionBlock_accordionItems';
  readonly accordionBlock_id: Maybe<AccordionBlock>;
  readonly accordionItems_id: Maybe<AccordionItems>;
  readonly id: Scalars['ID']['output'];
};


export type AccordionBlock_AccordionItemsAccordionBlock_IdArgs = {
  filter: InputMaybe<AccordionBlock_Filter>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};


export type AccordionBlock_AccordionItemsAccordionItems_IdArgs = {
  filter: InputMaybe<AccordionItems_Filter>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};

export type AccordionBlock_AccordionItems_Aggregated = {
  readonly __typename?: 'accordionBlock_accordionItems_aggregated';
  readonly avg: Maybe<AccordionBlock_AccordionItems_Aggregated_Fields>;
  readonly avgDistinct: Maybe<AccordionBlock_AccordionItems_Aggregated_Fields>;
  readonly count: Maybe<AccordionBlock_AccordionItems_Aggregated_Count>;
  readonly countAll: Maybe<Scalars['Int']['output']>;
  readonly countDistinct: Maybe<AccordionBlock_AccordionItems_Aggregated_Count>;
  readonly group: Maybe<Scalars['JSON']['output']>;
  readonly max: Maybe<AccordionBlock_AccordionItems_Aggregated_Fields>;
  readonly min: Maybe<AccordionBlock_AccordionItems_Aggregated_Fields>;
  readonly sum: Maybe<AccordionBlock_AccordionItems_Aggregated_Fields>;
  readonly sumDistinct: Maybe<AccordionBlock_AccordionItems_Aggregated_Fields>;
};

export type AccordionBlock_AccordionItems_Aggregated_Count = {
  readonly __typename?: 'accordionBlock_accordionItems_aggregated_count';
  readonly accordionBlock_id: Maybe<Scalars['Int']['output']>;
  readonly accordionItems_id: Maybe<Scalars['Int']['output']>;
  readonly id: Maybe<Scalars['Int']['output']>;
};

export type AccordionBlock_AccordionItems_Aggregated_Fields = {
  readonly __typename?: 'accordionBlock_accordionItems_aggregated_fields';
  readonly accordionBlock_id: Maybe<Scalars['Float']['output']>;
  readonly accordionItems_id: Maybe<Scalars['Float']['output']>;
  readonly id: Maybe<Scalars['Float']['output']>;
};

export type AccordionBlock_AccordionItems_Filter = {
  readonly _and: InputMaybe<ReadonlyArray<InputMaybe<AccordionBlock_AccordionItems_Filter>>>;
  readonly _or: InputMaybe<ReadonlyArray<InputMaybe<AccordionBlock_AccordionItems_Filter>>>;
  readonly accordionBlock_id: InputMaybe<AccordionBlock_Filter>;
  readonly accordionItems_id: InputMaybe<AccordionItems_Filter>;
  readonly id: InputMaybe<Number_Filter_Operators>;
};

export type AccordionBlock_AccordionItems_Mutated = {
  readonly __typename?: 'accordionBlock_accordionItems_mutated';
  readonly data: Maybe<AccordionBlock_AccordionItems>;
  readonly event: Maybe<EventEnum>;
  readonly key: Scalars['ID']['output'];
};

export type AccordionBlock_Aggregated = {
  readonly __typename?: 'accordionBlock_aggregated';
  readonly avg: Maybe<AccordionBlock_Aggregated_Fields>;
  readonly avgDistinct: Maybe<AccordionBlock_Aggregated_Fields>;
  readonly count: Maybe<AccordionBlock_Aggregated_Count>;
  readonly countAll: Maybe<Scalars['Int']['output']>;
  readonly countDistinct: Maybe<AccordionBlock_Aggregated_Count>;
  readonly group: Maybe<Scalars['JSON']['output']>;
  readonly max: Maybe<AccordionBlock_Aggregated_Fields>;
  readonly min: Maybe<AccordionBlock_Aggregated_Fields>;
  readonly sum: Maybe<AccordionBlock_Aggregated_Fields>;
  readonly sumDistinct: Maybe<AccordionBlock_Aggregated_Fields>;
};

export type AccordionBlock_Aggregated_Count = {
  readonly __typename?: 'accordionBlock_aggregated_count';
  readonly id: Maybe<Scalars['Int']['output']>;
  readonly items: Maybe<Scalars['Int']['output']>;
  readonly title: Maybe<Scalars['Int']['output']>;
};

export type AccordionBlock_Aggregated_Fields = {
  readonly __typename?: 'accordionBlock_aggregated_fields';
  readonly id: Maybe<Scalars['Float']['output']>;
};

export type AccordionBlock_Filter = {
  readonly _and: InputMaybe<ReadonlyArray<InputMaybe<AccordionBlock_Filter>>>;
  readonly _or: InputMaybe<ReadonlyArray<InputMaybe<AccordionBlock_Filter>>>;
  readonly id: InputMaybe<Number_Filter_Operators>;
  readonly items: InputMaybe<AccordionBlock_AccordionItems_Filter>;
  readonly items_func: InputMaybe<Count_Function_Filter_Operators>;
  readonly title: InputMaybe<String_Filter_Operators>;
};

export type AccordionBlock_Mutated = {
  readonly __typename?: 'accordionBlock_mutated';
  readonly data: Maybe<AccordionBlock>;
  readonly event: Maybe<EventEnum>;
  readonly key: Scalars['ID']['output'];
};

export type AccordionItems = {
  readonly __typename?: 'accordionItems';
  readonly directionItem: Maybe<DirectionItem>;
  readonly id: Scalars['ID']['output'];
  /** Введите доп. инф-цию появляющуюся при нажатии на продукт */
  readonly value: Maybe<Scalars['String']['output']>;
};


export type AccordionItemsDirectionItemArgs = {
  filter: InputMaybe<DirectionItem_Filter>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};

export type AccordionItems_Aggregated = {
  readonly __typename?: 'accordionItems_aggregated';
  readonly avg: Maybe<AccordionItems_Aggregated_Fields>;
  readonly avgDistinct: Maybe<AccordionItems_Aggregated_Fields>;
  readonly count: Maybe<AccordionItems_Aggregated_Count>;
  readonly countAll: Maybe<Scalars['Int']['output']>;
  readonly countDistinct: Maybe<AccordionItems_Aggregated_Count>;
  readonly group: Maybe<Scalars['JSON']['output']>;
  readonly max: Maybe<AccordionItems_Aggregated_Fields>;
  readonly min: Maybe<AccordionItems_Aggregated_Fields>;
  readonly sum: Maybe<AccordionItems_Aggregated_Fields>;
  readonly sumDistinct: Maybe<AccordionItems_Aggregated_Fields>;
};

export type AccordionItems_Aggregated_Count = {
  readonly __typename?: 'accordionItems_aggregated_count';
  readonly directionItem: Maybe<Scalars['Int']['output']>;
  readonly id: Maybe<Scalars['Int']['output']>;
  /** Введите доп. инф-цию появляющуюся при нажатии на продукт */
  readonly value: Maybe<Scalars['Int']['output']>;
};

export type AccordionItems_Aggregated_Fields = {
  readonly __typename?: 'accordionItems_aggregated_fields';
  readonly directionItem: Maybe<Scalars['Float']['output']>;
  readonly id: Maybe<Scalars['Float']['output']>;
};

export type AccordionItems_Filter = {
  readonly _and: InputMaybe<ReadonlyArray<InputMaybe<AccordionItems_Filter>>>;
  readonly _or: InputMaybe<ReadonlyArray<InputMaybe<AccordionItems_Filter>>>;
  readonly directionItem: InputMaybe<DirectionItem_Filter>;
  readonly id: InputMaybe<Number_Filter_Operators>;
  readonly value: InputMaybe<String_Filter_Operators>;
};

export type AccordionItems_Mutated = {
  readonly __typename?: 'accordionItems_mutated';
  readonly data: Maybe<AccordionItems>;
  readonly event: Maybe<EventEnum>;
  readonly key: Scalars['ID']['output'];
};

export type AccordionsSection = {
  readonly __typename?: 'accordionsSection';
  readonly id: Scalars['ID']['output'];
  readonly items: Maybe<ReadonlyArray<Maybe<AccordionsSection_AccordionBlock>>>;
  readonly items_func: Maybe<Count_Functions>;
  readonly title: Maybe<Scalars['String']['output']>;
};


export type AccordionsSectionItemsArgs = {
  filter: InputMaybe<AccordionsSection_AccordionBlock_Filter>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};

export type AccordionsSection_AccordionBlock = {
  readonly __typename?: 'accordionsSection_accordionBlock';
  readonly accordionBlock_id: Maybe<AccordionBlock>;
  readonly accordionsSection_id: Maybe<AccordionsSection>;
  readonly id: Scalars['ID']['output'];
};


export type AccordionsSection_AccordionBlockAccordionBlock_IdArgs = {
  filter: InputMaybe<AccordionBlock_Filter>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};


export type AccordionsSection_AccordionBlockAccordionsSection_IdArgs = {
  filter: InputMaybe<AccordionsSection_Filter>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};

export type AccordionsSection_AccordionBlock_Aggregated = {
  readonly __typename?: 'accordionsSection_accordionBlock_aggregated';
  readonly avg: Maybe<AccordionsSection_AccordionBlock_Aggregated_Fields>;
  readonly avgDistinct: Maybe<AccordionsSection_AccordionBlock_Aggregated_Fields>;
  readonly count: Maybe<AccordionsSection_AccordionBlock_Aggregated_Count>;
  readonly countAll: Maybe<Scalars['Int']['output']>;
  readonly countDistinct: Maybe<AccordionsSection_AccordionBlock_Aggregated_Count>;
  readonly group: Maybe<Scalars['JSON']['output']>;
  readonly max: Maybe<AccordionsSection_AccordionBlock_Aggregated_Fields>;
  readonly min: Maybe<AccordionsSection_AccordionBlock_Aggregated_Fields>;
  readonly sum: Maybe<AccordionsSection_AccordionBlock_Aggregated_Fields>;
  readonly sumDistinct: Maybe<AccordionsSection_AccordionBlock_Aggregated_Fields>;
};

export type AccordionsSection_AccordionBlock_Aggregated_Count = {
  readonly __typename?: 'accordionsSection_accordionBlock_aggregated_count';
  readonly accordionBlock_id: Maybe<Scalars['Int']['output']>;
  readonly accordionsSection_id: Maybe<Scalars['Int']['output']>;
  readonly id: Maybe<Scalars['Int']['output']>;
};

export type AccordionsSection_AccordionBlock_Aggregated_Fields = {
  readonly __typename?: 'accordionsSection_accordionBlock_aggregated_fields';
  readonly accordionBlock_id: Maybe<Scalars['Float']['output']>;
  readonly accordionsSection_id: Maybe<Scalars['Float']['output']>;
  readonly id: Maybe<Scalars['Float']['output']>;
};

export type AccordionsSection_AccordionBlock_Filter = {
  readonly _and: InputMaybe<ReadonlyArray<InputMaybe<AccordionsSection_AccordionBlock_Filter>>>;
  readonly _or: InputMaybe<ReadonlyArray<InputMaybe<AccordionsSection_AccordionBlock_Filter>>>;
  readonly accordionBlock_id: InputMaybe<AccordionBlock_Filter>;
  readonly accordionsSection_id: InputMaybe<AccordionsSection_Filter>;
  readonly id: InputMaybe<Number_Filter_Operators>;
};

export type AccordionsSection_AccordionBlock_Mutated = {
  readonly __typename?: 'accordionsSection_accordionBlock_mutated';
  readonly data: Maybe<AccordionsSection_AccordionBlock>;
  readonly event: Maybe<EventEnum>;
  readonly key: Scalars['ID']['output'];
};

export type AccordionsSection_Aggregated = {
  readonly __typename?: 'accordionsSection_aggregated';
  readonly avg: Maybe<AccordionsSection_Aggregated_Fields>;
  readonly avgDistinct: Maybe<AccordionsSection_Aggregated_Fields>;
  readonly count: Maybe<AccordionsSection_Aggregated_Count>;
  readonly countAll: Maybe<Scalars['Int']['output']>;
  readonly countDistinct: Maybe<AccordionsSection_Aggregated_Count>;
  readonly group: Maybe<Scalars['JSON']['output']>;
  readonly max: Maybe<AccordionsSection_Aggregated_Fields>;
  readonly min: Maybe<AccordionsSection_Aggregated_Fields>;
  readonly sum: Maybe<AccordionsSection_Aggregated_Fields>;
  readonly sumDistinct: Maybe<AccordionsSection_Aggregated_Fields>;
};

export type AccordionsSection_Aggregated_Count = {
  readonly __typename?: 'accordionsSection_aggregated_count';
  readonly id: Maybe<Scalars['Int']['output']>;
  readonly items: Maybe<Scalars['Int']['output']>;
  readonly title: Maybe<Scalars['Int']['output']>;
};

export type AccordionsSection_Aggregated_Fields = {
  readonly __typename?: 'accordionsSection_aggregated_fields';
  readonly id: Maybe<Scalars['Float']['output']>;
};

export type AccordionsSection_Filter = {
  readonly _and: InputMaybe<ReadonlyArray<InputMaybe<AccordionsSection_Filter>>>;
  readonly _or: InputMaybe<ReadonlyArray<InputMaybe<AccordionsSection_Filter>>>;
  readonly id: InputMaybe<Number_Filter_Operators>;
  readonly items: InputMaybe<AccordionsSection_AccordionBlock_Filter>;
  readonly items_func: InputMaybe<Count_Function_Filter_Operators>;
  readonly title: InputMaybe<String_Filter_Operators>;
};

export type AccordionsSection_Mutated = {
  readonly __typename?: 'accordionsSection_mutated';
  readonly data: Maybe<AccordionsSection>;
  readonly event: Maybe<EventEnum>;
  readonly key: Scalars['ID']['output'];
};

export type Big_Int_Filter_Operators = {
  readonly _between: InputMaybe<ReadonlyArray<InputMaybe<Scalars['GraphQLBigInt']['input']>>>;
  readonly _eq: InputMaybe<Scalars['GraphQLBigInt']['input']>;
  readonly _gt: InputMaybe<Scalars['GraphQLBigInt']['input']>;
  readonly _gte: InputMaybe<Scalars['GraphQLBigInt']['input']>;
  readonly _in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['GraphQLBigInt']['input']>>>;
  readonly _lt: InputMaybe<Scalars['GraphQLBigInt']['input']>;
  readonly _lte: InputMaybe<Scalars['GraphQLBigInt']['input']>;
  readonly _nbetween: InputMaybe<ReadonlyArray<InputMaybe<Scalars['GraphQLBigInt']['input']>>>;
  readonly _neq: InputMaybe<Scalars['GraphQLBigInt']['input']>;
  readonly _nin: InputMaybe<ReadonlyArray<InputMaybe<Scalars['GraphQLBigInt']['input']>>>;
  readonly _nnull: InputMaybe<Scalars['Boolean']['input']>;
  readonly _null: InputMaybe<Scalars['Boolean']['input']>;
};

export type Boolean_Filter_Operators = {
  readonly _eq: InputMaybe<Scalars['Boolean']['input']>;
  readonly _neq: InputMaybe<Scalars['Boolean']['input']>;
  readonly _nnull: InputMaybe<Scalars['Boolean']['input']>;
  readonly _null: InputMaybe<Scalars['Boolean']['input']>;
};

export type Count_Function_Filter_Operators = {
  readonly count: InputMaybe<Number_Filter_Operators>;
};

export type Count_Functions = {
  readonly __typename?: 'count_functions';
  readonly count: Maybe<Scalars['Int']['output']>;
};

export type Date_Filter_Operators = {
  readonly _between: InputMaybe<ReadonlyArray<InputMaybe<Scalars['GraphQLStringOrFloat']['input']>>>;
  readonly _eq: InputMaybe<Scalars['String']['input']>;
  readonly _gt: InputMaybe<Scalars['String']['input']>;
  readonly _gte: InputMaybe<Scalars['String']['input']>;
  readonly _in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  readonly _lt: InputMaybe<Scalars['String']['input']>;
  readonly _lte: InputMaybe<Scalars['String']['input']>;
  readonly _nbetween: InputMaybe<ReadonlyArray<InputMaybe<Scalars['GraphQLStringOrFloat']['input']>>>;
  readonly _neq: InputMaybe<Scalars['String']['input']>;
  readonly _nin: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  readonly _nnull: InputMaybe<Scalars['Boolean']['input']>;
  readonly _null: InputMaybe<Scalars['Boolean']['input']>;
};

export type Datetime_Function_Filter_Operators = {
  readonly day: InputMaybe<Number_Filter_Operators>;
  readonly hour: InputMaybe<Number_Filter_Operators>;
  readonly minute: InputMaybe<Number_Filter_Operators>;
  readonly month: InputMaybe<Number_Filter_Operators>;
  readonly second: InputMaybe<Number_Filter_Operators>;
  readonly week: InputMaybe<Number_Filter_Operators>;
  readonly weekday: InputMaybe<Number_Filter_Operators>;
  readonly year: InputMaybe<Number_Filter_Operators>;
};

export type Datetime_Functions = {
  readonly __typename?: 'datetime_functions';
  readonly day: Maybe<Scalars['Int']['output']>;
  readonly hour: Maybe<Scalars['Int']['output']>;
  readonly minute: Maybe<Scalars['Int']['output']>;
  readonly month: Maybe<Scalars['Int']['output']>;
  readonly second: Maybe<Scalars['Int']['output']>;
  readonly week: Maybe<Scalars['Int']['output']>;
  readonly weekday: Maybe<Scalars['Int']['output']>;
  readonly year: Maybe<Scalars['Int']['output']>;
};

export type DirectionItem = {
  readonly __typename?: 'directionItem';
  readonly desc: Maybe<Scalars['String']['output']>;
  readonly id: Scalars['ID']['output'];
  readonly is_new: Maybe<Scalars['Boolean']['output']>;
  readonly price: Maybe<Scalars['Int']['output']>;
  readonly sale: Maybe<Scalars['Int']['output']>;
  readonly title: Maybe<Scalars['String']['output']>;
};

export type DirectionItem_Aggregated = {
  readonly __typename?: 'directionItem_aggregated';
  readonly avg: Maybe<DirectionItem_Aggregated_Fields>;
  readonly avgDistinct: Maybe<DirectionItem_Aggregated_Fields>;
  readonly count: Maybe<DirectionItem_Aggregated_Count>;
  readonly countAll: Maybe<Scalars['Int']['output']>;
  readonly countDistinct: Maybe<DirectionItem_Aggregated_Count>;
  readonly group: Maybe<Scalars['JSON']['output']>;
  readonly max: Maybe<DirectionItem_Aggregated_Fields>;
  readonly min: Maybe<DirectionItem_Aggregated_Fields>;
  readonly sum: Maybe<DirectionItem_Aggregated_Fields>;
  readonly sumDistinct: Maybe<DirectionItem_Aggregated_Fields>;
};

export type DirectionItem_Aggregated_Count = {
  readonly __typename?: 'directionItem_aggregated_count';
  readonly desc: Maybe<Scalars['Int']['output']>;
  readonly id: Maybe<Scalars['Int']['output']>;
  readonly is_new: Maybe<Scalars['Int']['output']>;
  readonly price: Maybe<Scalars['Int']['output']>;
  readonly sale: Maybe<Scalars['Int']['output']>;
  readonly title: Maybe<Scalars['Int']['output']>;
};

export type DirectionItem_Aggregated_Fields = {
  readonly __typename?: 'directionItem_aggregated_fields';
  readonly id: Maybe<Scalars['Float']['output']>;
  readonly price: Maybe<Scalars['Float']['output']>;
  readonly sale: Maybe<Scalars['Float']['output']>;
};

export type DirectionItem_Filter = {
  readonly _and: InputMaybe<ReadonlyArray<InputMaybe<DirectionItem_Filter>>>;
  readonly _or: InputMaybe<ReadonlyArray<InputMaybe<DirectionItem_Filter>>>;
  readonly desc: InputMaybe<String_Filter_Operators>;
  readonly id: InputMaybe<Number_Filter_Operators>;
  readonly is_new: InputMaybe<Boolean_Filter_Operators>;
  readonly price: InputMaybe<Number_Filter_Operators>;
  readonly sale: InputMaybe<Number_Filter_Operators>;
  readonly title: InputMaybe<String_Filter_Operators>;
};

export type DirectionItem_Mutated = {
  readonly __typename?: 'directionItem_mutated';
  readonly data: Maybe<DirectionItem>;
  readonly event: Maybe<EventEnum>;
  readonly key: Scalars['ID']['output'];
};

export type Directions = {
  readonly __typename?: 'directions';
  readonly id: Scalars['ID']['output'];
  readonly items: Maybe<ReadonlyArray<Maybe<Directions_DirectionItem>>>;
  readonly items_func: Maybe<Count_Functions>;
  readonly moreDetails: Maybe<Scalars['String']['output']>;
  readonly subDirections: Maybe<ReadonlyArray<Maybe<Directions_SubDirections>>>;
  readonly subDirections_func: Maybe<Count_Functions>;
  readonly title: Maybe<Scalars['String']['output']>;
};


export type DirectionsItemsArgs = {
  filter: InputMaybe<Directions_DirectionItem_Filter>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};


export type DirectionsSubDirectionsArgs = {
  filter: InputMaybe<Directions_SubDirections_Filter>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};

export type Directions_Aggregated = {
  readonly __typename?: 'directions_aggregated';
  readonly avg: Maybe<Directions_Aggregated_Fields>;
  readonly avgDistinct: Maybe<Directions_Aggregated_Fields>;
  readonly count: Maybe<Directions_Aggregated_Count>;
  readonly countAll: Maybe<Scalars['Int']['output']>;
  readonly countDistinct: Maybe<Directions_Aggregated_Count>;
  readonly group: Maybe<Scalars['JSON']['output']>;
  readonly max: Maybe<Directions_Aggregated_Fields>;
  readonly min: Maybe<Directions_Aggregated_Fields>;
  readonly sum: Maybe<Directions_Aggregated_Fields>;
  readonly sumDistinct: Maybe<Directions_Aggregated_Fields>;
};

export type Directions_Aggregated_Count = {
  readonly __typename?: 'directions_aggregated_count';
  readonly id: Maybe<Scalars['Int']['output']>;
  readonly items: Maybe<Scalars['Int']['output']>;
  readonly moreDetails: Maybe<Scalars['Int']['output']>;
  readonly subDirections: Maybe<Scalars['Int']['output']>;
  readonly title: Maybe<Scalars['Int']['output']>;
};

export type Directions_Aggregated_Fields = {
  readonly __typename?: 'directions_aggregated_fields';
  readonly id: Maybe<Scalars['Float']['output']>;
};

export type Directions_DirectionItem = {
  readonly __typename?: 'directions_directionItem';
  readonly directionItem_id: Maybe<DirectionItem>;
  readonly directions_id: Maybe<Directions>;
  readonly id: Scalars['ID']['output'];
};


export type Directions_DirectionItemDirectionItem_IdArgs = {
  filter: InputMaybe<DirectionItem_Filter>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};


export type Directions_DirectionItemDirections_IdArgs = {
  filter: InputMaybe<Directions_Filter>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};

export type Directions_DirectionItem_Aggregated = {
  readonly __typename?: 'directions_directionItem_aggregated';
  readonly avg: Maybe<Directions_DirectionItem_Aggregated_Fields>;
  readonly avgDistinct: Maybe<Directions_DirectionItem_Aggregated_Fields>;
  readonly count: Maybe<Directions_DirectionItem_Aggregated_Count>;
  readonly countAll: Maybe<Scalars['Int']['output']>;
  readonly countDistinct: Maybe<Directions_DirectionItem_Aggregated_Count>;
  readonly group: Maybe<Scalars['JSON']['output']>;
  readonly max: Maybe<Directions_DirectionItem_Aggregated_Fields>;
  readonly min: Maybe<Directions_DirectionItem_Aggregated_Fields>;
  readonly sum: Maybe<Directions_DirectionItem_Aggregated_Fields>;
  readonly sumDistinct: Maybe<Directions_DirectionItem_Aggregated_Fields>;
};

export type Directions_DirectionItem_Aggregated_Count = {
  readonly __typename?: 'directions_directionItem_aggregated_count';
  readonly directionItem_id: Maybe<Scalars['Int']['output']>;
  readonly directions_id: Maybe<Scalars['Int']['output']>;
  readonly id: Maybe<Scalars['Int']['output']>;
};

export type Directions_DirectionItem_Aggregated_Fields = {
  readonly __typename?: 'directions_directionItem_aggregated_fields';
  readonly directionItem_id: Maybe<Scalars['Float']['output']>;
  readonly directions_id: Maybe<Scalars['Float']['output']>;
  readonly id: Maybe<Scalars['Float']['output']>;
};

export type Directions_DirectionItem_Filter = {
  readonly _and: InputMaybe<ReadonlyArray<InputMaybe<Directions_DirectionItem_Filter>>>;
  readonly _or: InputMaybe<ReadonlyArray<InputMaybe<Directions_DirectionItem_Filter>>>;
  readonly directionItem_id: InputMaybe<DirectionItem_Filter>;
  readonly directions_id: InputMaybe<Directions_Filter>;
  readonly id: InputMaybe<Number_Filter_Operators>;
};

export type Directions_DirectionItem_Mutated = {
  readonly __typename?: 'directions_directionItem_mutated';
  readonly data: Maybe<Directions_DirectionItem>;
  readonly event: Maybe<EventEnum>;
  readonly key: Scalars['ID']['output'];
};

export type Directions_Filter = {
  readonly _and: InputMaybe<ReadonlyArray<InputMaybe<Directions_Filter>>>;
  readonly _or: InputMaybe<ReadonlyArray<InputMaybe<Directions_Filter>>>;
  readonly id: InputMaybe<Number_Filter_Operators>;
  readonly items: InputMaybe<Directions_DirectionItem_Filter>;
  readonly items_func: InputMaybe<Count_Function_Filter_Operators>;
  readonly moreDetails: InputMaybe<String_Filter_Operators>;
  readonly subDirections: InputMaybe<Directions_SubDirections_Filter>;
  readonly subDirections_func: InputMaybe<Count_Function_Filter_Operators>;
  readonly title: InputMaybe<String_Filter_Operators>;
};

export type Directions_Mutated = {
  readonly __typename?: 'directions_mutated';
  readonly data: Maybe<Directions>;
  readonly event: Maybe<EventEnum>;
  readonly key: Scalars['ID']['output'];
};

export type Directions_SubDirections = {
  readonly __typename?: 'directions_subDirections';
  readonly directions_id: Maybe<Directions>;
  readonly id: Scalars['ID']['output'];
  readonly subDirections_id: Maybe<SubDirections>;
};


export type Directions_SubDirectionsDirections_IdArgs = {
  filter: InputMaybe<Directions_Filter>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};


export type Directions_SubDirectionsSubDirections_IdArgs = {
  filter: InputMaybe<SubDirections_Filter>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};

export type Directions_SubDirections_Aggregated = {
  readonly __typename?: 'directions_subDirections_aggregated';
  readonly avg: Maybe<Directions_SubDirections_Aggregated_Fields>;
  readonly avgDistinct: Maybe<Directions_SubDirections_Aggregated_Fields>;
  readonly count: Maybe<Directions_SubDirections_Aggregated_Count>;
  readonly countAll: Maybe<Scalars['Int']['output']>;
  readonly countDistinct: Maybe<Directions_SubDirections_Aggregated_Count>;
  readonly group: Maybe<Scalars['JSON']['output']>;
  readonly max: Maybe<Directions_SubDirections_Aggregated_Fields>;
  readonly min: Maybe<Directions_SubDirections_Aggregated_Fields>;
  readonly sum: Maybe<Directions_SubDirections_Aggregated_Fields>;
  readonly sumDistinct: Maybe<Directions_SubDirections_Aggregated_Fields>;
};

export type Directions_SubDirections_Aggregated_Count = {
  readonly __typename?: 'directions_subDirections_aggregated_count';
  readonly directions_id: Maybe<Scalars['Int']['output']>;
  readonly id: Maybe<Scalars['Int']['output']>;
  readonly subDirections_id: Maybe<Scalars['Int']['output']>;
};

export type Directions_SubDirections_Aggregated_Fields = {
  readonly __typename?: 'directions_subDirections_aggregated_fields';
  readonly directions_id: Maybe<Scalars['Float']['output']>;
  readonly id: Maybe<Scalars['Float']['output']>;
  readonly subDirections_id: Maybe<Scalars['Float']['output']>;
};

export type Directions_SubDirections_Filter = {
  readonly _and: InputMaybe<ReadonlyArray<InputMaybe<Directions_SubDirections_Filter>>>;
  readonly _or: InputMaybe<ReadonlyArray<InputMaybe<Directions_SubDirections_Filter>>>;
  readonly directions_id: InputMaybe<Directions_Filter>;
  readonly id: InputMaybe<Number_Filter_Operators>;
  readonly subDirections_id: InputMaybe<SubDirections_Filter>;
};

export type Directions_SubDirections_Mutated = {
  readonly __typename?: 'directions_subDirections_mutated';
  readonly data: Maybe<Directions_SubDirections>;
  readonly event: Maybe<EventEnum>;
  readonly key: Scalars['ID']['output'];
};

export type Directus_Activity = {
  readonly __typename?: 'directus_activity';
  readonly action: Scalars['String']['output'];
  readonly collection: Scalars['String']['output'];
  readonly comment: Maybe<Scalars['String']['output']>;
  readonly id: Scalars['ID']['output'];
  readonly ip: Maybe<Scalars['String']['output']>;
  readonly item: Scalars['String']['output'];
  readonly origin: Maybe<Scalars['String']['output']>;
  readonly revisions: Maybe<Scalars['String']['output']>;
  readonly revisions_func: Maybe<Count_Functions>;
  readonly timestamp: Maybe<Scalars['Date']['output']>;
  readonly timestamp_func: Maybe<Datetime_Functions>;
  readonly user: Maybe<Directus_Users>;
  readonly user_agent: Maybe<Scalars['String']['output']>;
};


export type Directus_ActivityUserArgs = {
  filter: InputMaybe<Directus_Users_Filter>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};

export type Directus_Activity_Mutated = {
  readonly __typename?: 'directus_activity_mutated';
  readonly data: Maybe<Directus_Activity>;
  readonly event: Maybe<EventEnum>;
  readonly key: Scalars['ID']['output'];
};

export type Directus_Files = {
  readonly __typename?: 'directus_files';
  readonly charset: Maybe<Scalars['String']['output']>;
  readonly created_on: Maybe<Scalars['Date']['output']>;
  readonly created_on_func: Maybe<Datetime_Functions>;
  readonly description: Maybe<Scalars['String']['output']>;
  readonly duration: Maybe<Scalars['Int']['output']>;
  readonly embed: Maybe<Scalars['String']['output']>;
  readonly filename_disk: Maybe<Scalars['String']['output']>;
  readonly filename_download: Scalars['String']['output'];
  readonly filesize: Maybe<Scalars['GraphQLBigInt']['output']>;
  readonly focal_point_x: Maybe<Scalars['Int']['output']>;
  readonly focal_point_y: Maybe<Scalars['Int']['output']>;
  readonly folder: Maybe<Scalars['String']['output']>;
  readonly height: Maybe<Scalars['Int']['output']>;
  readonly id: Scalars['ID']['output'];
  readonly location: Maybe<Scalars['String']['output']>;
  readonly metadata: Maybe<Scalars['JSON']['output']>;
  readonly metadata_func: Maybe<Count_Functions>;
  readonly modified_by: Maybe<Directus_Users>;
  readonly modified_on: Maybe<Scalars['Date']['output']>;
  readonly modified_on_func: Maybe<Datetime_Functions>;
  readonly storage: Scalars['String']['output'];
  readonly tags: Maybe<Scalars['JSON']['output']>;
  readonly tags_func: Maybe<Count_Functions>;
  readonly title: Maybe<Scalars['String']['output']>;
  readonly tus_data: Maybe<Scalars['JSON']['output']>;
  readonly tus_data_func: Maybe<Count_Functions>;
  readonly tus_id: Maybe<Scalars['String']['output']>;
  readonly type: Maybe<Scalars['String']['output']>;
  readonly uploaded_by: Maybe<Directus_Users>;
  readonly uploaded_on: Maybe<Scalars['Date']['output']>;
  readonly uploaded_on_func: Maybe<Datetime_Functions>;
  readonly width: Maybe<Scalars['Int']['output']>;
};


export type Directus_FilesModified_ByArgs = {
  filter: InputMaybe<Directus_Users_Filter>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};


export type Directus_FilesUploaded_ByArgs = {
  filter: InputMaybe<Directus_Users_Filter>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};

export type Directus_Files_Filter = {
  readonly _and: InputMaybe<ReadonlyArray<InputMaybe<Directus_Files_Filter>>>;
  readonly _or: InputMaybe<ReadonlyArray<InputMaybe<Directus_Files_Filter>>>;
  readonly charset: InputMaybe<String_Filter_Operators>;
  readonly created_on: InputMaybe<Date_Filter_Operators>;
  readonly created_on_func: InputMaybe<Datetime_Function_Filter_Operators>;
  readonly description: InputMaybe<String_Filter_Operators>;
  readonly duration: InputMaybe<Number_Filter_Operators>;
  readonly embed: InputMaybe<String_Filter_Operators>;
  readonly filename_disk: InputMaybe<String_Filter_Operators>;
  readonly filename_download: InputMaybe<String_Filter_Operators>;
  readonly filesize: InputMaybe<Big_Int_Filter_Operators>;
  readonly focal_point_x: InputMaybe<Number_Filter_Operators>;
  readonly focal_point_y: InputMaybe<Number_Filter_Operators>;
  readonly folder: InputMaybe<String_Filter_Operators>;
  readonly height: InputMaybe<Number_Filter_Operators>;
  readonly id: InputMaybe<String_Filter_Operators>;
  readonly location: InputMaybe<String_Filter_Operators>;
  readonly metadata: InputMaybe<String_Filter_Operators>;
  readonly metadata_func: InputMaybe<Count_Function_Filter_Operators>;
  readonly modified_by: InputMaybe<Directus_Users_Filter>;
  readonly modified_on: InputMaybe<Date_Filter_Operators>;
  readonly modified_on_func: InputMaybe<Datetime_Function_Filter_Operators>;
  readonly storage: InputMaybe<String_Filter_Operators>;
  readonly tags: InputMaybe<String_Filter_Operators>;
  readonly tags_func: InputMaybe<Count_Function_Filter_Operators>;
  readonly title: InputMaybe<String_Filter_Operators>;
  readonly tus_data: InputMaybe<String_Filter_Operators>;
  readonly tus_data_func: InputMaybe<Count_Function_Filter_Operators>;
  readonly tus_id: InputMaybe<String_Filter_Operators>;
  readonly type: InputMaybe<String_Filter_Operators>;
  readonly uploaded_by: InputMaybe<Directus_Users_Filter>;
  readonly uploaded_on: InputMaybe<Date_Filter_Operators>;
  readonly uploaded_on_func: InputMaybe<Datetime_Function_Filter_Operators>;
  readonly width: InputMaybe<Number_Filter_Operators>;
};

export type Directus_Files_Mutated = {
  readonly __typename?: 'directus_files_mutated';
  readonly data: Maybe<Directus_Files>;
  readonly event: Maybe<EventEnum>;
  readonly key: Scalars['ID']['output'];
};

export type Directus_Notifications = {
  readonly __typename?: 'directus_notifications';
  readonly collection: Maybe<Scalars['String']['output']>;
  readonly id: Scalars['ID']['output'];
  readonly item: Maybe<Scalars['String']['output']>;
  readonly message: Maybe<Scalars['String']['output']>;
  readonly recipient: Maybe<Directus_Users>;
  readonly sender: Maybe<Directus_Users>;
  readonly status: Maybe<Scalars['String']['output']>;
  readonly subject: Scalars['String']['output'];
  readonly timestamp: Maybe<Scalars['Date']['output']>;
  readonly timestamp_func: Maybe<Datetime_Functions>;
};


export type Directus_NotificationsRecipientArgs = {
  filter: InputMaybe<Directus_Users_Filter>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};


export type Directus_NotificationsSenderArgs = {
  filter: InputMaybe<Directus_Users_Filter>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};

export type Directus_Notifications_Mutated = {
  readonly __typename?: 'directus_notifications_mutated';
  readonly data: Maybe<Directus_Notifications>;
  readonly event: Maybe<EventEnum>;
  readonly key: Scalars['ID']['output'];
};

export type Directus_Permissions = {
  readonly __typename?: 'directus_permissions';
  readonly action: Scalars['String']['output'];
  readonly collection: Scalars['String']['output'];
  readonly fields: Maybe<ReadonlyArray<Maybe<Scalars['String']['output']>>>;
  readonly id: Maybe<Scalars['ID']['output']>;
  readonly permissions: Maybe<Scalars['JSON']['output']>;
  readonly permissions_func: Maybe<Count_Functions>;
  readonly policy: Scalars['String']['output'];
  readonly presets: Maybe<Scalars['JSON']['output']>;
  readonly presets_func: Maybe<Count_Functions>;
  readonly validation: Maybe<Scalars['JSON']['output']>;
  readonly validation_func: Maybe<Count_Functions>;
};

export type Directus_Permissions_Mutated = {
  readonly __typename?: 'directus_permissions_mutated';
  readonly data: Maybe<Directus_Permissions>;
  readonly event: Maybe<EventEnum>;
  readonly key: Scalars['ID']['output'];
};

export type Directus_Presets = {
  readonly __typename?: 'directus_presets';
  readonly bookmark: Maybe<Scalars['String']['output']>;
  readonly collection: Maybe<Scalars['String']['output']>;
  readonly color: Maybe<Scalars['String']['output']>;
  readonly filter: Maybe<Scalars['JSON']['output']>;
  readonly filter_func: Maybe<Count_Functions>;
  readonly icon: Maybe<Scalars['String']['output']>;
  readonly id: Scalars['ID']['output'];
  readonly layout: Maybe<Scalars['String']['output']>;
  readonly layout_options: Maybe<Scalars['JSON']['output']>;
  readonly layout_options_func: Maybe<Count_Functions>;
  readonly layout_query: Maybe<Scalars['JSON']['output']>;
  readonly layout_query_func: Maybe<Count_Functions>;
  readonly refresh_interval: Maybe<Scalars['Int']['output']>;
  readonly role: Maybe<Directus_Roles>;
  readonly search: Maybe<Scalars['String']['output']>;
  readonly user: Maybe<Directus_Users>;
};


export type Directus_PresetsRoleArgs = {
  filter: InputMaybe<Directus_Roles_Filter>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};


export type Directus_PresetsUserArgs = {
  filter: InputMaybe<Directus_Users_Filter>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};

export type Directus_Presets_Mutated = {
  readonly __typename?: 'directus_presets_mutated';
  readonly data: Maybe<Directus_Presets>;
  readonly event: Maybe<EventEnum>;
  readonly key: Scalars['ID']['output'];
};

export type Directus_Roles = {
  readonly __typename?: 'directus_roles';
  readonly children: Maybe<ReadonlyArray<Maybe<Directus_Roles>>>;
  readonly children_func: Maybe<Count_Functions>;
  readonly description: Maybe<Scalars['String']['output']>;
  readonly icon: Maybe<Scalars['String']['output']>;
  readonly id: Scalars['ID']['output'];
  readonly name: Scalars['String']['output'];
  readonly parent: Maybe<Directus_Roles>;
  readonly policies: Maybe<Scalars['String']['output']>;
  readonly policies_func: Maybe<Count_Functions>;
  readonly users: Maybe<ReadonlyArray<Maybe<Directus_Users>>>;
  readonly users_func: Maybe<Count_Functions>;
};


export type Directus_RolesChildrenArgs = {
  filter: InputMaybe<Directus_Roles_Filter>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};


export type Directus_RolesParentArgs = {
  filter: InputMaybe<Directus_Roles_Filter>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};


export type Directus_RolesUsersArgs = {
  filter: InputMaybe<Directus_Users_Filter>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};

export type Directus_Roles_Filter = {
  readonly _and: InputMaybe<ReadonlyArray<InputMaybe<Directus_Roles_Filter>>>;
  readonly _or: InputMaybe<ReadonlyArray<InputMaybe<Directus_Roles_Filter>>>;
  readonly children: InputMaybe<Directus_Roles_Filter>;
  readonly children_func: InputMaybe<Count_Function_Filter_Operators>;
  readonly description: InputMaybe<String_Filter_Operators>;
  readonly icon: InputMaybe<String_Filter_Operators>;
  readonly id: InputMaybe<String_Filter_Operators>;
  readonly name: InputMaybe<String_Filter_Operators>;
  readonly parent: InputMaybe<Directus_Roles_Filter>;
  readonly policies: InputMaybe<String_Filter_Operators>;
  readonly policies_func: InputMaybe<Count_Function_Filter_Operators>;
  readonly users: InputMaybe<Directus_Users_Filter>;
  readonly users_func: InputMaybe<Count_Function_Filter_Operators>;
};

export type Directus_Roles_Mutated = {
  readonly __typename?: 'directus_roles_mutated';
  readonly data: Maybe<Directus_Roles>;
  readonly event: Maybe<EventEnum>;
  readonly key: Scalars['ID']['output'];
};

export type Directus_Shares = {
  readonly __typename?: 'directus_shares';
  readonly collection: Scalars['String']['output'];
  readonly date_created: Maybe<Scalars['Date']['output']>;
  readonly date_created_func: Maybe<Datetime_Functions>;
  /** $t:shared_leave_blank_for_unlimited */
  readonly date_end: Maybe<Scalars['Date']['output']>;
  readonly date_end_func: Maybe<Datetime_Functions>;
  /** $t:shared_leave_blank_for_unlimited */
  readonly date_start: Maybe<Scalars['Date']['output']>;
  readonly date_start_func: Maybe<Datetime_Functions>;
  readonly id: Scalars['ID']['output'];
  readonly item: Scalars['String']['output'];
  /** $t:shared_leave_blank_for_unlimited */
  readonly max_uses: Maybe<Scalars['Int']['output']>;
  readonly name: Maybe<Scalars['String']['output']>;
  /** $t:shared_leave_blank_for_passwordless_access */
  readonly password: Maybe<Scalars['Hash']['output']>;
  readonly role: Maybe<Directus_Roles>;
  readonly times_used: Maybe<Scalars['Int']['output']>;
  readonly user_created: Maybe<Directus_Users>;
};


export type Directus_SharesRoleArgs = {
  filter: InputMaybe<Directus_Roles_Filter>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};


export type Directus_SharesUser_CreatedArgs = {
  filter: InputMaybe<Directus_Users_Filter>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};

export type Directus_Shares_Mutated = {
  readonly __typename?: 'directus_shares_mutated';
  readonly data: Maybe<Directus_Shares>;
  readonly event: Maybe<EventEnum>;
  readonly key: Scalars['ID']['output'];
};

export type Directus_Users = {
  readonly __typename?: 'directus_users';
  readonly appearance: Maybe<Scalars['String']['output']>;
  readonly auth_data: Maybe<Scalars['JSON']['output']>;
  readonly auth_data_func: Maybe<Count_Functions>;
  readonly avatar: Maybe<Directus_Files>;
  readonly description: Maybe<Scalars['String']['output']>;
  readonly email: Maybe<Scalars['String']['output']>;
  readonly email_notifications: Maybe<Scalars['Boolean']['output']>;
  readonly external_identifier: Maybe<Scalars['String']['output']>;
  readonly first_name: Maybe<Scalars['String']['output']>;
  readonly id: Scalars['ID']['output'];
  readonly language: Maybe<Scalars['String']['output']>;
  readonly last_access: Maybe<Scalars['Date']['output']>;
  readonly last_access_func: Maybe<Datetime_Functions>;
  readonly last_name: Maybe<Scalars['String']['output']>;
  readonly last_page: Maybe<Scalars['String']['output']>;
  readonly location: Maybe<Scalars['String']['output']>;
  readonly password: Maybe<Scalars['Hash']['output']>;
  readonly policies: Maybe<Scalars['String']['output']>;
  readonly policies_func: Maybe<Count_Functions>;
  readonly provider: Maybe<Scalars['String']['output']>;
  readonly role: Maybe<Directus_Roles>;
  readonly status: Maybe<Scalars['String']['output']>;
  readonly tags: Maybe<Scalars['JSON']['output']>;
  readonly tags_func: Maybe<Count_Functions>;
  readonly tfa_secret: Maybe<Scalars['Hash']['output']>;
  readonly theme_dark: Maybe<Scalars['String']['output']>;
  readonly theme_dark_overrides: Maybe<Scalars['JSON']['output']>;
  readonly theme_dark_overrides_func: Maybe<Count_Functions>;
  readonly theme_light: Maybe<Scalars['String']['output']>;
  readonly theme_light_overrides: Maybe<Scalars['JSON']['output']>;
  readonly theme_light_overrides_func: Maybe<Count_Functions>;
  readonly title: Maybe<Scalars['String']['output']>;
  readonly token: Maybe<Scalars['Hash']['output']>;
};


export type Directus_UsersAvatarArgs = {
  filter: InputMaybe<Directus_Files_Filter>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};


export type Directus_UsersRoleArgs = {
  filter: InputMaybe<Directus_Roles_Filter>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};

export type Directus_Users_Filter = {
  readonly _and: InputMaybe<ReadonlyArray<InputMaybe<Directus_Users_Filter>>>;
  readonly _or: InputMaybe<ReadonlyArray<InputMaybe<Directus_Users_Filter>>>;
  readonly appearance: InputMaybe<String_Filter_Operators>;
  readonly auth_data: InputMaybe<String_Filter_Operators>;
  readonly auth_data_func: InputMaybe<Count_Function_Filter_Operators>;
  readonly avatar: InputMaybe<Directus_Files_Filter>;
  readonly description: InputMaybe<String_Filter_Operators>;
  readonly email: InputMaybe<String_Filter_Operators>;
  readonly email_notifications: InputMaybe<Boolean_Filter_Operators>;
  readonly external_identifier: InputMaybe<String_Filter_Operators>;
  readonly first_name: InputMaybe<String_Filter_Operators>;
  readonly id: InputMaybe<String_Filter_Operators>;
  readonly language: InputMaybe<String_Filter_Operators>;
  readonly last_access: InputMaybe<Date_Filter_Operators>;
  readonly last_access_func: InputMaybe<Datetime_Function_Filter_Operators>;
  readonly last_name: InputMaybe<String_Filter_Operators>;
  readonly last_page: InputMaybe<String_Filter_Operators>;
  readonly location: InputMaybe<String_Filter_Operators>;
  readonly password: InputMaybe<Hash_Filter_Operators>;
  readonly policies: InputMaybe<String_Filter_Operators>;
  readonly policies_func: InputMaybe<Count_Function_Filter_Operators>;
  readonly provider: InputMaybe<String_Filter_Operators>;
  readonly role: InputMaybe<Directus_Roles_Filter>;
  readonly status: InputMaybe<String_Filter_Operators>;
  readonly tags: InputMaybe<String_Filter_Operators>;
  readonly tags_func: InputMaybe<Count_Function_Filter_Operators>;
  readonly tfa_secret: InputMaybe<Hash_Filter_Operators>;
  readonly theme_dark: InputMaybe<String_Filter_Operators>;
  readonly theme_dark_overrides: InputMaybe<String_Filter_Operators>;
  readonly theme_dark_overrides_func: InputMaybe<Count_Function_Filter_Operators>;
  readonly theme_light: InputMaybe<String_Filter_Operators>;
  readonly theme_light_overrides: InputMaybe<String_Filter_Operators>;
  readonly theme_light_overrides_func: InputMaybe<Count_Function_Filter_Operators>;
  readonly title: InputMaybe<String_Filter_Operators>;
  readonly token: InputMaybe<Hash_Filter_Operators>;
};

export type Directus_Users_Mutated = {
  readonly __typename?: 'directus_users_mutated';
  readonly data: Maybe<Directus_Users>;
  readonly event: Maybe<EventEnum>;
  readonly key: Scalars['ID']['output'];
};

export type Hash_Filter_Operators = {
  readonly _empty: InputMaybe<Scalars['Boolean']['input']>;
  readonly _nempty: InputMaybe<Scalars['Boolean']['input']>;
  readonly _nnull: InputMaybe<Scalars['Boolean']['input']>;
  readonly _null: InputMaybe<Scalars['Boolean']['input']>;
};

export type Number_Filter_Operators = {
  readonly _between: InputMaybe<ReadonlyArray<InputMaybe<Scalars['GraphQLStringOrFloat']['input']>>>;
  readonly _eq: InputMaybe<Scalars['GraphQLStringOrFloat']['input']>;
  readonly _gt: InputMaybe<Scalars['GraphQLStringOrFloat']['input']>;
  readonly _gte: InputMaybe<Scalars['GraphQLStringOrFloat']['input']>;
  readonly _in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['GraphQLStringOrFloat']['input']>>>;
  readonly _lt: InputMaybe<Scalars['GraphQLStringOrFloat']['input']>;
  readonly _lte: InputMaybe<Scalars['GraphQLStringOrFloat']['input']>;
  readonly _nbetween: InputMaybe<ReadonlyArray<InputMaybe<Scalars['GraphQLStringOrFloat']['input']>>>;
  readonly _neq: InputMaybe<Scalars['GraphQLStringOrFloat']['input']>;
  readonly _nin: InputMaybe<ReadonlyArray<InputMaybe<Scalars['GraphQLStringOrFloat']['input']>>>;
  readonly _nnull: InputMaybe<Scalars['Boolean']['input']>;
  readonly _null: InputMaybe<Scalars['Boolean']['input']>;
};

export type Services = {
  readonly __typename?: 'services';
  readonly id: Scalars['ID']['output'];
  readonly img: Maybe<Directus_Files>;
  readonly serviceItemDirections: Maybe<ReadonlyArray<Maybe<Services_ServiceItemDirections>>>;
  readonly serviceItemDirections_func: Maybe<Count_Functions>;
  readonly slider: Maybe<ReadonlyArray<Maybe<Services_Files>>>;
  readonly slider_func: Maybe<Count_Functions>;
  readonly tags: Maybe<Scalars['JSON']['output']>;
  readonly tags_func: Maybe<Count_Functions>;
  readonly title: Maybe<Scalars['String']['output']>;
};


export type ServicesImgArgs = {
  filter: InputMaybe<Directus_Files_Filter>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};


export type ServicesServiceItemDirectionsArgs = {
  filter: InputMaybe<Services_ServiceItemDirections_Filter>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};


export type ServicesSliderArgs = {
  filter: InputMaybe<Services_Files_Filter>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};

export type Services_Aggregated = {
  readonly __typename?: 'services_aggregated';
  readonly avg: Maybe<Services_Aggregated_Fields>;
  readonly avgDistinct: Maybe<Services_Aggregated_Fields>;
  readonly count: Maybe<Services_Aggregated_Count>;
  readonly countAll: Maybe<Scalars['Int']['output']>;
  readonly countDistinct: Maybe<Services_Aggregated_Count>;
  readonly group: Maybe<Scalars['JSON']['output']>;
  readonly max: Maybe<Services_Aggregated_Fields>;
  readonly min: Maybe<Services_Aggregated_Fields>;
  readonly sum: Maybe<Services_Aggregated_Fields>;
  readonly sumDistinct: Maybe<Services_Aggregated_Fields>;
};

export type Services_Aggregated_Count = {
  readonly __typename?: 'services_aggregated_count';
  readonly id: Maybe<Scalars['Int']['output']>;
  readonly img: Maybe<Scalars['Int']['output']>;
  readonly serviceItemDirections: Maybe<Scalars['Int']['output']>;
  readonly slider: Maybe<Scalars['Int']['output']>;
  readonly tags: Maybe<Scalars['Int']['output']>;
  readonly title: Maybe<Scalars['Int']['output']>;
};

export type Services_Aggregated_Fields = {
  readonly __typename?: 'services_aggregated_fields';
  readonly id: Maybe<Scalars['Float']['output']>;
};

export type Services_Files = {
  readonly __typename?: 'services_files';
  readonly directus_files_id: Maybe<Directus_Files>;
  readonly id: Scalars['ID']['output'];
  readonly services_id: Maybe<Services>;
};


export type Services_FilesDirectus_Files_IdArgs = {
  filter: InputMaybe<Directus_Files_Filter>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};


export type Services_FilesServices_IdArgs = {
  filter: InputMaybe<Services_Filter>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};

export type Services_Files_Aggregated = {
  readonly __typename?: 'services_files_aggregated';
  readonly avg: Maybe<Services_Files_Aggregated_Fields>;
  readonly avgDistinct: Maybe<Services_Files_Aggregated_Fields>;
  readonly count: Maybe<Services_Files_Aggregated_Count>;
  readonly countAll: Maybe<Scalars['Int']['output']>;
  readonly countDistinct: Maybe<Services_Files_Aggregated_Count>;
  readonly group: Maybe<Scalars['JSON']['output']>;
  readonly max: Maybe<Services_Files_Aggregated_Fields>;
  readonly min: Maybe<Services_Files_Aggregated_Fields>;
  readonly sum: Maybe<Services_Files_Aggregated_Fields>;
  readonly sumDistinct: Maybe<Services_Files_Aggregated_Fields>;
};

export type Services_Files_Aggregated_Count = {
  readonly __typename?: 'services_files_aggregated_count';
  readonly directus_files_id: Maybe<Scalars['Int']['output']>;
  readonly id: Maybe<Scalars['Int']['output']>;
  readonly services_id: Maybe<Scalars['Int']['output']>;
};

export type Services_Files_Aggregated_Fields = {
  readonly __typename?: 'services_files_aggregated_fields';
  readonly id: Maybe<Scalars['Float']['output']>;
  readonly services_id: Maybe<Scalars['Float']['output']>;
};

export type Services_Files_Filter = {
  readonly _and: InputMaybe<ReadonlyArray<InputMaybe<Services_Files_Filter>>>;
  readonly _or: InputMaybe<ReadonlyArray<InputMaybe<Services_Files_Filter>>>;
  readonly directus_files_id: InputMaybe<Directus_Files_Filter>;
  readonly id: InputMaybe<Number_Filter_Operators>;
  readonly services_id: InputMaybe<Services_Filter>;
};

export type Services_Files_Mutated = {
  readonly __typename?: 'services_files_mutated';
  readonly data: Maybe<Services_Files>;
  readonly event: Maybe<EventEnum>;
  readonly key: Scalars['ID']['output'];
};

export type Services_Filter = {
  readonly _and: InputMaybe<ReadonlyArray<InputMaybe<Services_Filter>>>;
  readonly _or: InputMaybe<ReadonlyArray<InputMaybe<Services_Filter>>>;
  readonly id: InputMaybe<Number_Filter_Operators>;
  readonly img: InputMaybe<Directus_Files_Filter>;
  readonly serviceItemDirections: InputMaybe<Services_ServiceItemDirections_Filter>;
  readonly serviceItemDirections_func: InputMaybe<Count_Function_Filter_Operators>;
  readonly slider: InputMaybe<Services_Files_Filter>;
  readonly slider_func: InputMaybe<Count_Function_Filter_Operators>;
  readonly tags: InputMaybe<String_Filter_Operators>;
  readonly tags_func: InputMaybe<Count_Function_Filter_Operators>;
  readonly title: InputMaybe<String_Filter_Operators>;
};

export type Services_Mutated = {
  readonly __typename?: 'services_mutated';
  readonly data: Maybe<Services>;
  readonly event: Maybe<EventEnum>;
  readonly key: Scalars['ID']['output'];
};

export type Services_ServiceItemDirections = {
  readonly __typename?: 'services_serviceItemDirections';
  readonly collection: Maybe<Scalars['String']['output']>;
  readonly id: Scalars['ID']['output'];
  readonly item: Maybe<Services_ServiceItemDirections_Item_Union>;
  readonly services_id: Maybe<Services>;
};


export type Services_ServiceItemDirectionsServices_IdArgs = {
  filter: InputMaybe<Services_Filter>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};

export type Services_ServiceItemDirections_Aggregated = {
  readonly __typename?: 'services_serviceItemDirections_aggregated';
  readonly avg: Maybe<Services_ServiceItemDirections_Aggregated_Fields>;
  readonly avgDistinct: Maybe<Services_ServiceItemDirections_Aggregated_Fields>;
  readonly count: Maybe<Services_ServiceItemDirections_Aggregated_Count>;
  readonly countAll: Maybe<Scalars['Int']['output']>;
  readonly countDistinct: Maybe<Services_ServiceItemDirections_Aggregated_Count>;
  readonly group: Maybe<Scalars['JSON']['output']>;
  readonly max: Maybe<Services_ServiceItemDirections_Aggregated_Fields>;
  readonly min: Maybe<Services_ServiceItemDirections_Aggregated_Fields>;
  readonly sum: Maybe<Services_ServiceItemDirections_Aggregated_Fields>;
  readonly sumDistinct: Maybe<Services_ServiceItemDirections_Aggregated_Fields>;
};

export type Services_ServiceItemDirections_Aggregated_Count = {
  readonly __typename?: 'services_serviceItemDirections_aggregated_count';
  readonly collection: Maybe<Scalars['Int']['output']>;
  readonly id: Maybe<Scalars['Int']['output']>;
  readonly item: Maybe<Scalars['Int']['output']>;
  readonly services_id: Maybe<Scalars['Int']['output']>;
};

export type Services_ServiceItemDirections_Aggregated_Fields = {
  readonly __typename?: 'services_serviceItemDirections_aggregated_fields';
  readonly id: Maybe<Scalars['Float']['output']>;
  readonly services_id: Maybe<Scalars['Float']['output']>;
};

export type Services_ServiceItemDirections_Filter = {
  readonly _and: InputMaybe<ReadonlyArray<InputMaybe<Services_ServiceItemDirections_Filter>>>;
  readonly _or: InputMaybe<ReadonlyArray<InputMaybe<Services_ServiceItemDirections_Filter>>>;
  readonly collection: InputMaybe<String_Filter_Operators>;
  readonly id: InputMaybe<Number_Filter_Operators>;
  readonly item__accordionsSection: InputMaybe<AccordionsSection_Filter>;
  readonly item__directions: InputMaybe<Directions_Filter>;
  readonly services_id: InputMaybe<Services_Filter>;
};

export type Services_ServiceItemDirections_Item_Union = AccordionsSection | Directions;

export type Services_ServiceItemDirections_Mutated = {
  readonly __typename?: 'services_serviceItemDirections_mutated';
  readonly data: Maybe<Services_ServiceItemDirections>;
  readonly event: Maybe<EventEnum>;
  readonly key: Scalars['ID']['output'];
};

export type String_Filter_Operators = {
  readonly _contains: InputMaybe<Scalars['String']['input']>;
  readonly _empty: InputMaybe<Scalars['Boolean']['input']>;
  readonly _ends_with: InputMaybe<Scalars['String']['input']>;
  readonly _eq: InputMaybe<Scalars['String']['input']>;
  readonly _icontains: InputMaybe<Scalars['String']['input']>;
  readonly _iends_with: InputMaybe<Scalars['String']['input']>;
  readonly _in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  readonly _istarts_with: InputMaybe<Scalars['String']['input']>;
  readonly _ncontains: InputMaybe<Scalars['String']['input']>;
  readonly _nempty: InputMaybe<Scalars['Boolean']['input']>;
  readonly _nends_with: InputMaybe<Scalars['String']['input']>;
  readonly _neq: InputMaybe<Scalars['String']['input']>;
  readonly _niends_with: InputMaybe<Scalars['String']['input']>;
  readonly _nin: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  readonly _nistarts_with: InputMaybe<Scalars['String']['input']>;
  readonly _nnull: InputMaybe<Scalars['Boolean']['input']>;
  readonly _nstarts_with: InputMaybe<Scalars['String']['input']>;
  readonly _null: InputMaybe<Scalars['Boolean']['input']>;
  readonly _starts_with: InputMaybe<Scalars['String']['input']>;
};

export type SubDirections = {
  readonly __typename?: 'subDirections';
  readonly id: Scalars['ID']['output'];
  readonly items: Maybe<ReadonlyArray<Maybe<SubDirections_DirectionItem>>>;
  readonly items_func: Maybe<Count_Functions>;
  readonly moreDetails: Maybe<Scalars['String']['output']>;
  readonly title: Maybe<Scalars['String']['output']>;
};


export type SubDirectionsItemsArgs = {
  filter: InputMaybe<SubDirections_DirectionItem_Filter>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};

export type SubDirections_Aggregated = {
  readonly __typename?: 'subDirections_aggregated';
  readonly avg: Maybe<SubDirections_Aggregated_Fields>;
  readonly avgDistinct: Maybe<SubDirections_Aggregated_Fields>;
  readonly count: Maybe<SubDirections_Aggregated_Count>;
  readonly countAll: Maybe<Scalars['Int']['output']>;
  readonly countDistinct: Maybe<SubDirections_Aggregated_Count>;
  readonly group: Maybe<Scalars['JSON']['output']>;
  readonly max: Maybe<SubDirections_Aggregated_Fields>;
  readonly min: Maybe<SubDirections_Aggregated_Fields>;
  readonly sum: Maybe<SubDirections_Aggregated_Fields>;
  readonly sumDistinct: Maybe<SubDirections_Aggregated_Fields>;
};

export type SubDirections_Aggregated_Count = {
  readonly __typename?: 'subDirections_aggregated_count';
  readonly id: Maybe<Scalars['Int']['output']>;
  readonly items: Maybe<Scalars['Int']['output']>;
  readonly moreDetails: Maybe<Scalars['Int']['output']>;
  readonly title: Maybe<Scalars['Int']['output']>;
};

export type SubDirections_Aggregated_Fields = {
  readonly __typename?: 'subDirections_aggregated_fields';
  readonly id: Maybe<Scalars['Float']['output']>;
};

export type SubDirections_DirectionItem = {
  readonly __typename?: 'subDirections_directionItem';
  readonly directionItem_id: Maybe<DirectionItem>;
  readonly id: Scalars['ID']['output'];
  readonly subDirections_id: Maybe<SubDirections>;
};


export type SubDirections_DirectionItemDirectionItem_IdArgs = {
  filter: InputMaybe<DirectionItem_Filter>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};


export type SubDirections_DirectionItemSubDirections_IdArgs = {
  filter: InputMaybe<SubDirections_Filter>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};

export type SubDirections_DirectionItem_Aggregated = {
  readonly __typename?: 'subDirections_directionItem_aggregated';
  readonly avg: Maybe<SubDirections_DirectionItem_Aggregated_Fields>;
  readonly avgDistinct: Maybe<SubDirections_DirectionItem_Aggregated_Fields>;
  readonly count: Maybe<SubDirections_DirectionItem_Aggregated_Count>;
  readonly countAll: Maybe<Scalars['Int']['output']>;
  readonly countDistinct: Maybe<SubDirections_DirectionItem_Aggregated_Count>;
  readonly group: Maybe<Scalars['JSON']['output']>;
  readonly max: Maybe<SubDirections_DirectionItem_Aggregated_Fields>;
  readonly min: Maybe<SubDirections_DirectionItem_Aggregated_Fields>;
  readonly sum: Maybe<SubDirections_DirectionItem_Aggregated_Fields>;
  readonly sumDistinct: Maybe<SubDirections_DirectionItem_Aggregated_Fields>;
};

export type SubDirections_DirectionItem_Aggregated_Count = {
  readonly __typename?: 'subDirections_directionItem_aggregated_count';
  readonly directionItem_id: Maybe<Scalars['Int']['output']>;
  readonly id: Maybe<Scalars['Int']['output']>;
  readonly subDirections_id: Maybe<Scalars['Int']['output']>;
};

export type SubDirections_DirectionItem_Aggregated_Fields = {
  readonly __typename?: 'subDirections_directionItem_aggregated_fields';
  readonly directionItem_id: Maybe<Scalars['Float']['output']>;
  readonly id: Maybe<Scalars['Float']['output']>;
  readonly subDirections_id: Maybe<Scalars['Float']['output']>;
};

export type SubDirections_DirectionItem_Filter = {
  readonly _and: InputMaybe<ReadonlyArray<InputMaybe<SubDirections_DirectionItem_Filter>>>;
  readonly _or: InputMaybe<ReadonlyArray<InputMaybe<SubDirections_DirectionItem_Filter>>>;
  readonly directionItem_id: InputMaybe<DirectionItem_Filter>;
  readonly id: InputMaybe<Number_Filter_Operators>;
  readonly subDirections_id: InputMaybe<SubDirections_Filter>;
};

export type SubDirections_DirectionItem_Mutated = {
  readonly __typename?: 'subDirections_directionItem_mutated';
  readonly data: Maybe<SubDirections_DirectionItem>;
  readonly event: Maybe<EventEnum>;
  readonly key: Scalars['ID']['output'];
};

export type SubDirections_Filter = {
  readonly _and: InputMaybe<ReadonlyArray<InputMaybe<SubDirections_Filter>>>;
  readonly _or: InputMaybe<ReadonlyArray<InputMaybe<SubDirections_Filter>>>;
  readonly id: InputMaybe<Number_Filter_Operators>;
  readonly items: InputMaybe<SubDirections_DirectionItem_Filter>;
  readonly items_func: InputMaybe<Count_Function_Filter_Operators>;
  readonly moreDetails: InputMaybe<String_Filter_Operators>;
  readonly title: InputMaybe<String_Filter_Operators>;
};

export type SubDirections_Mutated = {
  readonly __typename?: 'subDirections_mutated';
  readonly data: Maybe<SubDirections>;
  readonly event: Maybe<EventEnum>;
  readonly key: Scalars['ID']['output'];
};

export type Version_AccordionBlock = {
  readonly __typename?: 'version_accordionBlock';
  readonly id: Scalars['ID']['output'];
  readonly items: Maybe<Scalars['JSON']['output']>;
  readonly items_func: Maybe<Count_Functions>;
  readonly title: Maybe<Scalars['String']['output']>;
};

export type Version_AccordionBlock_AccordionItems = {
  readonly __typename?: 'version_accordionBlock_accordionItems';
  readonly accordionBlock_id: Maybe<Scalars['JSON']['output']>;
  readonly accordionItems_id: Maybe<Scalars['JSON']['output']>;
  readonly id: Scalars['ID']['output'];
};

export type Version_AccordionItems = {
  readonly __typename?: 'version_accordionItems';
  readonly directionItem: Maybe<Scalars['JSON']['output']>;
  readonly id: Scalars['ID']['output'];
  /** Введите доп. инф-цию появляющуюся при нажатии на продукт */
  readonly value: Maybe<Scalars['String']['output']>;
};

export type Version_AccordionsSection = {
  readonly __typename?: 'version_accordionsSection';
  readonly id: Scalars['ID']['output'];
  readonly items: Maybe<Scalars['JSON']['output']>;
  readonly items_func: Maybe<Count_Functions>;
  readonly title: Maybe<Scalars['String']['output']>;
};

export type Version_AccordionsSection_AccordionBlock = {
  readonly __typename?: 'version_accordionsSection_accordionBlock';
  readonly accordionBlock_id: Maybe<Scalars['JSON']['output']>;
  readonly accordionsSection_id: Maybe<Scalars['JSON']['output']>;
  readonly id: Scalars['ID']['output'];
};

export type Version_DirectionItem = {
  readonly __typename?: 'version_directionItem';
  readonly desc: Maybe<Scalars['String']['output']>;
  readonly id: Scalars['ID']['output'];
  readonly is_new: Maybe<Scalars['Boolean']['output']>;
  readonly price: Maybe<Scalars['Int']['output']>;
  readonly sale: Maybe<Scalars['Int']['output']>;
  readonly title: Maybe<Scalars['String']['output']>;
};

export type Version_Directions = {
  readonly __typename?: 'version_directions';
  readonly id: Scalars['ID']['output'];
  readonly items: Maybe<Scalars['JSON']['output']>;
  readonly items_func: Maybe<Count_Functions>;
  readonly moreDetails: Maybe<Scalars['String']['output']>;
  readonly subDirections: Maybe<Scalars['JSON']['output']>;
  readonly subDirections_func: Maybe<Count_Functions>;
  readonly title: Maybe<Scalars['String']['output']>;
};

export type Version_Directions_DirectionItem = {
  readonly __typename?: 'version_directions_directionItem';
  readonly directionItem_id: Maybe<Scalars['JSON']['output']>;
  readonly directions_id: Maybe<Scalars['JSON']['output']>;
  readonly id: Scalars['ID']['output'];
};

export type Version_Directions_SubDirections = {
  readonly __typename?: 'version_directions_subDirections';
  readonly directions_id: Maybe<Scalars['JSON']['output']>;
  readonly id: Scalars['ID']['output'];
  readonly subDirections_id: Maybe<Scalars['JSON']['output']>;
};

export type Version_Services = {
  readonly __typename?: 'version_services';
  readonly id: Scalars['ID']['output'];
  readonly img: Maybe<Scalars['JSON']['output']>;
  readonly serviceItemDirections: Maybe<Scalars['JSON']['output']>;
  readonly serviceItemDirections_func: Maybe<Count_Functions>;
  readonly slider: Maybe<Scalars['JSON']['output']>;
  readonly slider_func: Maybe<Count_Functions>;
  readonly tags: Maybe<Scalars['JSON']['output']>;
  readonly tags_func: Maybe<Count_Functions>;
  readonly title: Maybe<Scalars['String']['output']>;
};

export type Version_Services_Files = {
  readonly __typename?: 'version_services_files';
  readonly directus_files_id: Maybe<Scalars['JSON']['output']>;
  readonly id: Scalars['ID']['output'];
  readonly services_id: Maybe<Scalars['JSON']['output']>;
};

export type Version_Services_ServiceItemDirections = {
  readonly __typename?: 'version_services_serviceItemDirections';
  readonly collection: Maybe<Scalars['String']['output']>;
  readonly id: Scalars['ID']['output'];
  readonly item: Maybe<Scalars['String']['output']>;
  readonly services_id: Maybe<Scalars['JSON']['output']>;
};

export type Version_SubDirections = {
  readonly __typename?: 'version_subDirections';
  readonly id: Scalars['ID']['output'];
  readonly items: Maybe<Scalars['JSON']['output']>;
  readonly items_func: Maybe<Count_Functions>;
  readonly moreDetails: Maybe<Scalars['String']['output']>;
  readonly title: Maybe<Scalars['String']['output']>;
};

export type Version_SubDirections_DirectionItem = {
  readonly __typename?: 'version_subDirections_directionItem';
  readonly directionItem_id: Maybe<Scalars['JSON']['output']>;
  readonly id: Scalars['ID']['output'];
  readonly subDirections_id: Maybe<Scalars['JSON']['output']>;
};

export type AccordionBlockFragment = { readonly __typename?: 'accordionBlock_accordionItems', readonly id: string, readonly accordionItems_id: { readonly __typename?: 'accordionItems', readonly id: string, readonly value: string, readonly directionItem: { readonly __typename?: 'directionItem', readonly id: string, readonly title: string, readonly desc: string, readonly price: number, readonly sale: number, readonly is_new: boolean } } };

export type AccordionsFragmentFragment = { readonly __typename?: 'accordionsSection', readonly id: string, readonly title: string, readonly items: ReadonlyArray<{ readonly __typename?: 'accordionsSection_accordionBlock', readonly id: string, readonly accordionBlock_id: { readonly __typename?: 'accordionBlock', readonly id: string, readonly title: string, readonly items: ReadonlyArray<{ readonly __typename?: 'accordionBlock_accordionItems', readonly id: string, readonly accordionItems_id: { readonly __typename?: 'accordionItems', readonly id: string, readonly value: string, readonly directionItem: { readonly __typename?: 'directionItem', readonly id: string, readonly title: string, readonly desc: string, readonly price: number, readonly sale: number, readonly is_new: boolean } } }> } }> };

export type DirectionsFragmentFragment = { readonly __typename?: 'directions', readonly id: string, readonly title: string, readonly moreDetails: string, readonly items: ReadonlyArray<{ readonly __typename?: 'directions_directionItem', readonly id: string, readonly directionItem_id: { readonly __typename?: 'directionItem', readonly id: string, readonly title: string, readonly desc: string, readonly price: number, readonly sale: number, readonly is_new: boolean } }>, readonly subDirections: ReadonlyArray<{ readonly __typename?: 'directions_subDirections', readonly id: string, readonly subDirections_id: { readonly __typename?: 'subDirections', readonly id: string, readonly title: string, readonly moreDetails: string, readonly items: ReadonlyArray<{ readonly __typename?: 'subDirections_directionItem', readonly id: string, readonly directionItem_id: { readonly __typename?: 'directionItem', readonly id: string, readonly title: string, readonly desc: string, readonly price: number, readonly sale: number, readonly is_new: boolean } }> } }> };

export type ServiceFragmentFragment = { readonly __typename?: 'directionItem', readonly id: string, readonly title: string, readonly desc: string, readonly price: number, readonly sale: number, readonly is_new: boolean };

export type SliderFragmentFragment = { readonly __typename?: 'services_files', readonly id: string, readonly directus_files_id: { readonly __typename?: 'directus_files', readonly id: string, readonly width: number, readonly height: number } };

export type GetServicesItemQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type GetServicesItemQuery = { readonly __typename?: 'Query', readonly services_by_id: { readonly __typename?: 'services', readonly title: string, readonly slider: ReadonlyArray<{ readonly __typename?: 'services_files', readonly id: string, readonly directus_files_id: { readonly __typename?: 'directus_files', readonly id: string, readonly width: number, readonly height: number } }>, readonly serviceItemDirections: ReadonlyArray<{ readonly __typename?: 'services_serviceItemDirections', readonly id: string, readonly item: { readonly __typename?: 'accordionsSection', readonly id: string, readonly title: string, readonly items: ReadonlyArray<{ readonly __typename?: 'accordionsSection_accordionBlock', readonly id: string, readonly accordionBlock_id: { readonly __typename?: 'accordionBlock', readonly id: string, readonly title: string, readonly items: ReadonlyArray<{ readonly __typename?: 'accordionBlock_accordionItems', readonly id: string, readonly accordionItems_id: { readonly __typename?: 'accordionItems', readonly id: string, readonly value: string, readonly directionItem: { readonly __typename?: 'directionItem', readonly id: string, readonly title: string, readonly desc: string, readonly price: number, readonly sale: number, readonly is_new: boolean } } }> } }> } | { readonly __typename?: 'directions', readonly id: string, readonly title: string, readonly moreDetails: string, readonly items: ReadonlyArray<{ readonly __typename?: 'directions_directionItem', readonly id: string, readonly directionItem_id: { readonly __typename?: 'directionItem', readonly id: string, readonly title: string, readonly desc: string, readonly price: number, readonly sale: number, readonly is_new: boolean } }>, readonly subDirections: ReadonlyArray<{ readonly __typename?: 'directions_subDirections', readonly id: string, readonly subDirections_id: { readonly __typename?: 'subDirections', readonly id: string, readonly title: string, readonly moreDetails: string, readonly items: ReadonlyArray<{ readonly __typename?: 'subDirections_directionItem', readonly id: string, readonly directionItem_id: { readonly __typename?: 'directionItem', readonly id: string, readonly title: string, readonly desc: string, readonly price: number, readonly sale: number, readonly is_new: boolean } }> } }> } }> } };

export type GetServicesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetServicesQuery = { readonly __typename?: 'Query', readonly services: ReadonlyArray<{ readonly __typename?: 'services', readonly id: string, readonly title: string, readonly tags: any, readonly img: { readonly __typename?: 'directus_files', readonly id: string, readonly width: number, readonly height: number } }> };

export const ServiceFragmentFragmentDoc = gql`
    fragment ServiceFragment on directionItem {
  id
  title
  desc
  price
  sale
  is_new
}
    `;
export const AccordionBlockFragmentDoc = gql`
    fragment AccordionBlock on accordionBlock_accordionItems {
  id
  accordionItems_id {
    id
    directionItem {
      ...ServiceFragment
    }
    value
  }
}
    ${ServiceFragmentFragmentDoc}`;
export const AccordionsFragmentFragmentDoc = gql`
    fragment AccordionsFragment on accordionsSection {
  id
  title
  items {
    id
    accordionBlock_id {
      id
      title
      items {
        ...AccordionBlock
      }
    }
  }
}
    ${AccordionBlockFragmentDoc}`;
export const DirectionsFragmentFragmentDoc = gql`
    fragment DirectionsFragment on directions {
  id
  title
  moreDetails
  items {
    id
    directionItem_id {
      ...ServiceFragment
    }
  }
  subDirections {
    id
    subDirections_id {
      id
      title
      moreDetails
      items {
        id
        directionItem_id {
          ...ServiceFragment
        }
      }
    }
  }
}
    ${ServiceFragmentFragmentDoc}`;
export const SliderFragmentFragmentDoc = gql`
    fragment SliderFragment on services_files {
  id
  directus_files_id {
    id
    width
    height
  }
}
    `;
export const GetServicesItemDocument = gql`
    query GetServicesItem($id: ID!) {
  services_by_id(id: $id) {
    title
    slider {
      ...SliderFragment
    }
    serviceItemDirections {
      id
      item {
        ... on directions {
          ...DirectionsFragment
        }
        ... on accordionsSection {
          ...AccordionsFragment
        }
      }
    }
  }
}
    ${SliderFragmentFragmentDoc}
${DirectionsFragmentFragmentDoc}
${AccordionsFragmentFragmentDoc}`;
export const GetServicesDocument = gql`
    query GetServices {
  services {
    id
    title
    tags
    img {
      id
      width
      height
    }
  }
}
    `;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string, variables?: any) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType, _variables) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    GetServicesItem(variables: GetServicesItemQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<GetServicesItemQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetServicesItemQuery>(GetServicesItemDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'GetServicesItem', 'query', variables);
    },
    GetServices(variables?: GetServicesQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<GetServicesQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetServicesQuery>(GetServicesDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'GetServices', 'query', variables);
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;