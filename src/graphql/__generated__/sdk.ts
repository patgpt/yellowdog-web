import { GraphQLClient, RequestOptions } from 'graphql-request';
import { GraphQLError, print } from 'graphql'
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
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
  DateTime: { input: string; output: string; }
  Dimension: { input: number; output: number; }
  HexColor: { input: string; output: string; }
  JSON: { input: Record<string, unknown>; output: Record<string, unknown>; }
  Quality: { input: number; output: number; }
};

/** Represents a binary file in a space. An asset can be any file type. */
export type Asset = {
  __typename?: 'Asset';
  contentType: Maybe<Scalars['String']['output']>;
  contentfulMetadata: ContentfulMetadata;
  description: Maybe<Scalars['String']['output']>;
  fileName: Maybe<Scalars['String']['output']>;
  height: Maybe<Scalars['Int']['output']>;
  linkedFrom: Maybe<AssetLinkingCollections>;
  size: Maybe<Scalars['Int']['output']>;
  sys: Sys;
  title: Maybe<Scalars['String']['output']>;
  url: Maybe<Scalars['String']['output']>;
  width: Maybe<Scalars['Int']['output']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetContentTypeArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetDescriptionArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetFileNameArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetHeightArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetLinkedFromArgs = {
  allowedLocales: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetSizeArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetTitleArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetUrlArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
  transform: InputMaybe<ImageTransformOptions>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetWidthArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
};

export type AssetCollection = {
  __typename?: 'AssetCollection';
  items: Array<Maybe<Asset>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type AssetFilter = {
  AND: InputMaybe<Array<InputMaybe<AssetFilter>>>;
  OR: InputMaybe<Array<InputMaybe<AssetFilter>>>;
  contentType: InputMaybe<Scalars['String']['input']>;
  contentType_contains: InputMaybe<Scalars['String']['input']>;
  contentType_exists: InputMaybe<Scalars['Boolean']['input']>;
  contentType_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contentType_not: InputMaybe<Scalars['String']['input']>;
  contentType_not_contains: InputMaybe<Scalars['String']['input']>;
  contentType_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contentfulMetadata: InputMaybe<ContentfulMetadataFilter>;
  description: InputMaybe<Scalars['String']['input']>;
  description_contains: InputMaybe<Scalars['String']['input']>;
  description_exists: InputMaybe<Scalars['Boolean']['input']>;
  description_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  description_not: InputMaybe<Scalars['String']['input']>;
  description_not_contains: InputMaybe<Scalars['String']['input']>;
  description_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fileName: InputMaybe<Scalars['String']['input']>;
  fileName_contains: InputMaybe<Scalars['String']['input']>;
  fileName_exists: InputMaybe<Scalars['Boolean']['input']>;
  fileName_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fileName_not: InputMaybe<Scalars['String']['input']>;
  fileName_not_contains: InputMaybe<Scalars['String']['input']>;
  fileName_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  height: InputMaybe<Scalars['Int']['input']>;
  height_exists: InputMaybe<Scalars['Boolean']['input']>;
  height_gt: InputMaybe<Scalars['Int']['input']>;
  height_gte: InputMaybe<Scalars['Int']['input']>;
  height_in: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  height_lt: InputMaybe<Scalars['Int']['input']>;
  height_lte: InputMaybe<Scalars['Int']['input']>;
  height_not: InputMaybe<Scalars['Int']['input']>;
  height_not_in: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  size: InputMaybe<Scalars['Int']['input']>;
  size_exists: InputMaybe<Scalars['Boolean']['input']>;
  size_gt: InputMaybe<Scalars['Int']['input']>;
  size_gte: InputMaybe<Scalars['Int']['input']>;
  size_in: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  size_lt: InputMaybe<Scalars['Int']['input']>;
  size_lte: InputMaybe<Scalars['Int']['input']>;
  size_not: InputMaybe<Scalars['Int']['input']>;
  size_not_in: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  sys: InputMaybe<SysFilter>;
  title: InputMaybe<Scalars['String']['input']>;
  title_contains: InputMaybe<Scalars['String']['input']>;
  title_exists: InputMaybe<Scalars['Boolean']['input']>;
  title_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_not: InputMaybe<Scalars['String']['input']>;
  title_not_contains: InputMaybe<Scalars['String']['input']>;
  title_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  url: InputMaybe<Scalars['String']['input']>;
  url_contains: InputMaybe<Scalars['String']['input']>;
  url_exists: InputMaybe<Scalars['Boolean']['input']>;
  url_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  url_not: InputMaybe<Scalars['String']['input']>;
  url_not_contains: InputMaybe<Scalars['String']['input']>;
  url_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  width: InputMaybe<Scalars['Int']['input']>;
  width_exists: InputMaybe<Scalars['Boolean']['input']>;
  width_gt: InputMaybe<Scalars['Int']['input']>;
  width_gte: InputMaybe<Scalars['Int']['input']>;
  width_in: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  width_lt: InputMaybe<Scalars['Int']['input']>;
  width_lte: InputMaybe<Scalars['Int']['input']>;
  width_not: InputMaybe<Scalars['Int']['input']>;
  width_not_in: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
};

export type AssetLinkingCollections = {
  __typename?: 'AssetLinkingCollections';
  componentAuthorCollection: Maybe<ComponentAuthorCollection>;
  componentCtaCollection: Maybe<ComponentCtaCollection>;
  componentFeatureCollection: Maybe<ComponentFeatureCollection>;
  componentHeroCollection: Maybe<ComponentHeroCollection>;
  componentRichImageCollection: Maybe<ComponentRichImageCollection>;
  componentSeoCollection: Maybe<ComponentSeoCollection>;
  entryCollection: Maybe<EntryCollection>;
  navigationLinkCollection: Maybe<NavigationLinkCollection>;
  pageBlogPostCollection: Maybe<PageBlogPostCollection>;
  pageExperienceCollection: Maybe<PageExperienceCollection>;
  settingsCollection: Maybe<SettingsCollection>;
  vq5Hs6VZcdFFqcGewQDi5Collection: Maybe<Vq5Hs6VZcdFFqcGewQDi5Collection>;
};


export type AssetLinkingCollectionsComponentAuthorCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type AssetLinkingCollectionsComponentCtaCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type AssetLinkingCollectionsComponentFeatureCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type AssetLinkingCollectionsComponentHeroCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type AssetLinkingCollectionsComponentRichImageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type AssetLinkingCollectionsComponentSeoCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type AssetLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type AssetLinkingCollectionsNavigationLinkCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type AssetLinkingCollectionsPageBlogPostCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type AssetLinkingCollectionsPageExperienceCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type AssetLinkingCollectionsSettingsCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type AssetLinkingCollectionsVq5Hs6VZcdFFqcGewQDi5CollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum AssetOrder {
  ContentTypeAsc = 'contentType_ASC',
  ContentTypeDesc = 'contentType_DESC',
  FileNameAsc = 'fileName_ASC',
  FileNameDesc = 'fileName_DESC',
  HeightAsc = 'height_ASC',
  HeightDesc = 'height_DESC',
  SizeAsc = 'size_ASC',
  SizeDesc = 'size_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  UrlAsc = 'url_ASC',
  UrlDesc = 'url_DESC',
  WidthAsc = 'width_ASC',
  WidthDesc = 'width_DESC'
}

/** To have author-related properties [See type definition](https://app.contentful.com/spaces/z7u9lztnactc/content_types/componentAuthor) */
export type ComponentAuthor = Entry & _Node & {
  __typename?: 'ComponentAuthor';
  _id: Scalars['ID']['output'];
  avatar: Maybe<Asset>;
  contentfulMetadata: ContentfulMetadata;
  internalName: Maybe<Scalars['String']['output']>;
  linkedFrom: Maybe<ComponentAuthorLinkingCollections>;
  name: Maybe<Scalars['String']['output']>;
  sys: Sys;
};


/** To have author-related properties [See type definition](https://app.contentful.com/spaces/z7u9lztnactc/content_types/componentAuthor) */
export type ComponentAuthorAvatarArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
};


/** To have author-related properties [See type definition](https://app.contentful.com/spaces/z7u9lztnactc/content_types/componentAuthor) */
export type ComponentAuthorInternalNameArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
};


/** To have author-related properties [See type definition](https://app.contentful.com/spaces/z7u9lztnactc/content_types/componentAuthor) */
export type ComponentAuthorLinkedFromArgs = {
  allowedLocales: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** To have author-related properties [See type definition](https://app.contentful.com/spaces/z7u9lztnactc/content_types/componentAuthor) */
export type ComponentAuthorNameArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
};

export type ComponentAuthorCollection = {
  __typename?: 'ComponentAuthorCollection';
  items: Array<Maybe<ComponentAuthor>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type ComponentAuthorFilter = {
  AND: InputMaybe<Array<InputMaybe<ComponentAuthorFilter>>>;
  OR: InputMaybe<Array<InputMaybe<ComponentAuthorFilter>>>;
  avatar_exists: InputMaybe<Scalars['Boolean']['input']>;
  contentfulMetadata: InputMaybe<ContentfulMetadataFilter>;
  internalName: InputMaybe<Scalars['String']['input']>;
  internalName_contains: InputMaybe<Scalars['String']['input']>;
  internalName_exists: InputMaybe<Scalars['Boolean']['input']>;
  internalName_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalName_not: InputMaybe<Scalars['String']['input']>;
  internalName_not_contains: InputMaybe<Scalars['String']['input']>;
  internalName_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  name: InputMaybe<Scalars['String']['input']>;
  name_contains: InputMaybe<Scalars['String']['input']>;
  name_exists: InputMaybe<Scalars['Boolean']['input']>;
  name_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  name_not: InputMaybe<Scalars['String']['input']>;
  name_not_contains: InputMaybe<Scalars['String']['input']>;
  name_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys: InputMaybe<SysFilter>;
};

export type ComponentAuthorLinkingCollections = {
  __typename?: 'ComponentAuthorLinkingCollections';
  entryCollection: Maybe<EntryCollection>;
  pageBlogPostCollection: Maybe<PageBlogPostCollection>;
};


export type ComponentAuthorLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type ComponentAuthorLinkingCollectionsPageBlogPostCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  order: InputMaybe<Array<InputMaybe<ComponentAuthorLinkingCollectionsPageBlogPostCollectionOrder>>>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum ComponentAuthorLinkingCollectionsPageBlogPostCollectionOrder {
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  PublishedDateAsc = 'publishedDate_ASC',
  PublishedDateDesc = 'publishedDate_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export enum ComponentAuthorOrder {
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

/** [See type definition](https://app.contentful.com/spaces/z7u9lztnactc/content_types/componentCta) */
export type ComponentCta = Entry & _Node & {
  __typename?: 'ComponentCta';
  _id: Scalars['ID']['output'];
  contentfulMetadata: ContentfulMetadata;
  ctaLink: Maybe<Scalars['String']['output']>;
  ctaText: Maybe<Scalars['String']['output']>;
  icon: Maybe<Asset>;
  internalName: Maybe<Scalars['String']['output']>;
  linkedFrom: Maybe<ComponentCtaLinkingCollections>;
  sys: Sys;
};


/** [See type definition](https://app.contentful.com/spaces/z7u9lztnactc/content_types/componentCta) */
export type ComponentCtaCtaLinkArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/z7u9lztnactc/content_types/componentCta) */
export type ComponentCtaCtaTextArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/z7u9lztnactc/content_types/componentCta) */
export type ComponentCtaIconArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/z7u9lztnactc/content_types/componentCta) */
export type ComponentCtaInternalNameArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/z7u9lztnactc/content_types/componentCta) */
export type ComponentCtaLinkedFromArgs = {
  allowedLocales: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ComponentCtaCollection = {
  __typename?: 'ComponentCtaCollection';
  items: Array<Maybe<ComponentCta>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type ComponentCtaFilter = {
  AND: InputMaybe<Array<InputMaybe<ComponentCtaFilter>>>;
  OR: InputMaybe<Array<InputMaybe<ComponentCtaFilter>>>;
  contentfulMetadata: InputMaybe<ContentfulMetadataFilter>;
  ctaLink: InputMaybe<Scalars['String']['input']>;
  ctaLink_contains: InputMaybe<Scalars['String']['input']>;
  ctaLink_exists: InputMaybe<Scalars['Boolean']['input']>;
  ctaLink_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  ctaLink_not: InputMaybe<Scalars['String']['input']>;
  ctaLink_not_contains: InputMaybe<Scalars['String']['input']>;
  ctaLink_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  ctaText: InputMaybe<Scalars['String']['input']>;
  ctaText_contains: InputMaybe<Scalars['String']['input']>;
  ctaText_exists: InputMaybe<Scalars['Boolean']['input']>;
  ctaText_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  ctaText_not: InputMaybe<Scalars['String']['input']>;
  ctaText_not_contains: InputMaybe<Scalars['String']['input']>;
  ctaText_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  icon_exists: InputMaybe<Scalars['Boolean']['input']>;
  internalName: InputMaybe<Scalars['String']['input']>;
  internalName_contains: InputMaybe<Scalars['String']['input']>;
  internalName_exists: InputMaybe<Scalars['Boolean']['input']>;
  internalName_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalName_not: InputMaybe<Scalars['String']['input']>;
  internalName_not_contains: InputMaybe<Scalars['String']['input']>;
  internalName_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys: InputMaybe<SysFilter>;
};

export type ComponentCtaLinkingCollections = {
  __typename?: 'ComponentCtaLinkingCollections';
  componentHeroCollection: Maybe<ComponentHeroCollection>;
  entryCollection: Maybe<EntryCollection>;
};


export type ComponentCtaLinkingCollectionsComponentHeroCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  order: InputMaybe<Array<InputMaybe<ComponentCtaLinkingCollectionsComponentHeroCollectionOrder>>>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type ComponentCtaLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum ComponentCtaLinkingCollectionsComponentHeroCollectionOrder {
  HeadingAsc = 'heading_ASC',
  HeadingDesc = 'heading_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  SubHeadingAsc = 'subHeading_ASC',
  SubHeadingDesc = 'subHeading_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum ComponentCtaOrder {
  CtaLinkAsc = 'ctaLink_ASC',
  CtaLinkDesc = 'ctaLink_DESC',
  CtaTextAsc = 'ctaText_ASC',
  CtaTextDesc = 'ctaText_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

/** [See type definition](https://app.contentful.com/spaces/z7u9lztnactc/content_types/componentFeature) */
export type ComponentFeature = Entry & _Node & {
  __typename?: 'ComponentFeature';
  _id: Scalars['ID']['output'];
  contentfulMetadata: ContentfulMetadata;
  description: Maybe<Scalars['String']['output']>;
  heading: Maybe<Scalars['String']['output']>;
  image: Maybe<Asset>;
  internalId: Maybe<Scalars['String']['output']>;
  link: Maybe<NavigationLink>;
  linkedFrom: Maybe<ComponentFeatureLinkingCollections>;
  sys: Sys;
};


/** [See type definition](https://app.contentful.com/spaces/z7u9lztnactc/content_types/componentFeature) */
export type ComponentFeatureDescriptionArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/z7u9lztnactc/content_types/componentFeature) */
export type ComponentFeatureHeadingArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/z7u9lztnactc/content_types/componentFeature) */
export type ComponentFeatureImageArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/z7u9lztnactc/content_types/componentFeature) */
export type ComponentFeatureInternalIdArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/z7u9lztnactc/content_types/componentFeature) */
export type ComponentFeatureLinkArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  where: InputMaybe<NavigationLinkFilter>;
};


/** [See type definition](https://app.contentful.com/spaces/z7u9lztnactc/content_types/componentFeature) */
export type ComponentFeatureLinkedFromArgs = {
  allowedLocales: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ComponentFeatureCollection = {
  __typename?: 'ComponentFeatureCollection';
  items: Array<Maybe<ComponentFeature>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type ComponentFeatureFilter = {
  AND: InputMaybe<Array<InputMaybe<ComponentFeatureFilter>>>;
  OR: InputMaybe<Array<InputMaybe<ComponentFeatureFilter>>>;
  contentfulMetadata: InputMaybe<ContentfulMetadataFilter>;
  description: InputMaybe<Scalars['String']['input']>;
  description_contains: InputMaybe<Scalars['String']['input']>;
  description_exists: InputMaybe<Scalars['Boolean']['input']>;
  description_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  description_not: InputMaybe<Scalars['String']['input']>;
  description_not_contains: InputMaybe<Scalars['String']['input']>;
  description_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  heading: InputMaybe<Scalars['String']['input']>;
  heading_contains: InputMaybe<Scalars['String']['input']>;
  heading_exists: InputMaybe<Scalars['Boolean']['input']>;
  heading_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  heading_not: InputMaybe<Scalars['String']['input']>;
  heading_not_contains: InputMaybe<Scalars['String']['input']>;
  heading_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  image_exists: InputMaybe<Scalars['Boolean']['input']>;
  internalId: InputMaybe<Scalars['String']['input']>;
  internalId_contains: InputMaybe<Scalars['String']['input']>;
  internalId_exists: InputMaybe<Scalars['Boolean']['input']>;
  internalId_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalId_not: InputMaybe<Scalars['String']['input']>;
  internalId_not_contains: InputMaybe<Scalars['String']['input']>;
  internalId_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  link: InputMaybe<CfNavigationLinkNestedFilter>;
  link_exists: InputMaybe<Scalars['Boolean']['input']>;
  sys: InputMaybe<SysFilter>;
};

export type ComponentFeatureLinkingCollections = {
  __typename?: 'ComponentFeatureLinkingCollections';
  entryCollection: Maybe<EntryCollection>;
  pageLandingCollection: Maybe<PageLandingCollection>;
};


export type ComponentFeatureLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type ComponentFeatureLinkingCollectionsPageLandingCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  order: InputMaybe<Array<InputMaybe<ComponentFeatureLinkingCollectionsPageLandingCollectionOrder>>>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum ComponentFeatureLinkingCollectionsPageLandingCollectionOrder {
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum ComponentFeatureOrder {
  HeadingAsc = 'heading_ASC',
  HeadingDesc = 'heading_DESC',
  InternalIdAsc = 'internalId_ASC',
  InternalIdDesc = 'internalId_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

/** [See type definition](https://app.contentful.com/spaces/z7u9lztnactc/content_types/componentHero) */
export type ComponentHero = Entry & _Node & {
  __typename?: 'ComponentHero';
  _id: Scalars['ID']['output'];
  contentfulMetadata: ContentfulMetadata;
  ctaFieldsCollection: Maybe<ComponentHeroCtaFieldsCollection>;
  heading: Maybe<Scalars['String']['output']>;
  heroImage: Maybe<Asset>;
  internalName: Maybe<Scalars['String']['output']>;
  linkedFrom: Maybe<ComponentHeroLinkingCollections>;
  subHeading: Maybe<Scalars['String']['output']>;
  sys: Sys;
};


/** [See type definition](https://app.contentful.com/spaces/z7u9lztnactc/content_types/componentHero) */
export type ComponentHeroCtaFieldsCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  order: InputMaybe<Array<InputMaybe<ComponentHeroCtaFieldsCollectionOrder>>>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where: InputMaybe<ComponentCtaFilter>;
};


/** [See type definition](https://app.contentful.com/spaces/z7u9lztnactc/content_types/componentHero) */
export type ComponentHeroHeadingArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/z7u9lztnactc/content_types/componentHero) */
export type ComponentHeroHeroImageArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/z7u9lztnactc/content_types/componentHero) */
export type ComponentHeroInternalNameArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/z7u9lztnactc/content_types/componentHero) */
export type ComponentHeroLinkedFromArgs = {
  allowedLocales: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/z7u9lztnactc/content_types/componentHero) */
export type ComponentHeroSubHeadingArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
};

export type ComponentHeroCollection = {
  __typename?: 'ComponentHeroCollection';
  items: Array<Maybe<ComponentHero>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type ComponentHeroCtaFieldsCollection = {
  __typename?: 'ComponentHeroCtaFieldsCollection';
  items: Array<Maybe<ComponentCta>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export enum ComponentHeroCtaFieldsCollectionOrder {
  CtaLinkAsc = 'ctaLink_ASC',
  CtaLinkDesc = 'ctaLink_DESC',
  CtaTextAsc = 'ctaText_ASC',
  CtaTextDesc = 'ctaText_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export type ComponentHeroFilter = {
  AND: InputMaybe<Array<InputMaybe<ComponentHeroFilter>>>;
  OR: InputMaybe<Array<InputMaybe<ComponentHeroFilter>>>;
  contentfulMetadata: InputMaybe<ContentfulMetadataFilter>;
  ctaFields: InputMaybe<CfComponentCtaNestedFilter>;
  ctaFieldsCollection_exists: InputMaybe<Scalars['Boolean']['input']>;
  heading: InputMaybe<Scalars['String']['input']>;
  heading_contains: InputMaybe<Scalars['String']['input']>;
  heading_exists: InputMaybe<Scalars['Boolean']['input']>;
  heading_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  heading_not: InputMaybe<Scalars['String']['input']>;
  heading_not_contains: InputMaybe<Scalars['String']['input']>;
  heading_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  heroImage_exists: InputMaybe<Scalars['Boolean']['input']>;
  internalName: InputMaybe<Scalars['String']['input']>;
  internalName_contains: InputMaybe<Scalars['String']['input']>;
  internalName_exists: InputMaybe<Scalars['Boolean']['input']>;
  internalName_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalName_not: InputMaybe<Scalars['String']['input']>;
  internalName_not_contains: InputMaybe<Scalars['String']['input']>;
  internalName_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  subHeading: InputMaybe<Scalars['String']['input']>;
  subHeading_contains: InputMaybe<Scalars['String']['input']>;
  subHeading_exists: InputMaybe<Scalars['Boolean']['input']>;
  subHeading_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  subHeading_not: InputMaybe<Scalars['String']['input']>;
  subHeading_not_contains: InputMaybe<Scalars['String']['input']>;
  subHeading_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys: InputMaybe<SysFilter>;
};

export type ComponentHeroLinkingCollections = {
  __typename?: 'ComponentHeroLinkingCollections';
  entryCollection: Maybe<EntryCollection>;
  pageLandingCollection: Maybe<PageLandingCollection>;
};


export type ComponentHeroLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type ComponentHeroLinkingCollectionsPageLandingCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  order: InputMaybe<Array<InputMaybe<ComponentHeroLinkingCollectionsPageLandingCollectionOrder>>>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum ComponentHeroLinkingCollectionsPageLandingCollectionOrder {
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum ComponentHeroOrder {
  HeadingAsc = 'heading_ASC',
  HeadingDesc = 'heading_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  SubHeadingAsc = 'subHeading_ASC',
  SubHeadingDesc = 'subHeading_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

/** To describe an image used in rich text fields [See type definition](https://app.contentful.com/spaces/z7u9lztnactc/content_types/componentRichImage) */
export type ComponentRichImage = Entry & _Node & {
  __typename?: 'ComponentRichImage';
  _id: Scalars['ID']['output'];
  caption: Maybe<Scalars['String']['output']>;
  contentfulMetadata: ContentfulMetadata;
  fullWidth: Maybe<Scalars['Boolean']['output']>;
  image: Maybe<Asset>;
  internalName: Maybe<Scalars['String']['output']>;
  linkedFrom: Maybe<ComponentRichImageLinkingCollections>;
  sys: Sys;
};


/** To describe an image used in rich text fields [See type definition](https://app.contentful.com/spaces/z7u9lztnactc/content_types/componentRichImage) */
export type ComponentRichImageCaptionArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
};


/** To describe an image used in rich text fields [See type definition](https://app.contentful.com/spaces/z7u9lztnactc/content_types/componentRichImage) */
export type ComponentRichImageFullWidthArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
};


/** To describe an image used in rich text fields [See type definition](https://app.contentful.com/spaces/z7u9lztnactc/content_types/componentRichImage) */
export type ComponentRichImageImageArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
};


/** To describe an image used in rich text fields [See type definition](https://app.contentful.com/spaces/z7u9lztnactc/content_types/componentRichImage) */
export type ComponentRichImageInternalNameArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
};


/** To describe an image used in rich text fields [See type definition](https://app.contentful.com/spaces/z7u9lztnactc/content_types/componentRichImage) */
export type ComponentRichImageLinkedFromArgs = {
  allowedLocales: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ComponentRichImageCollection = {
  __typename?: 'ComponentRichImageCollection';
  items: Array<Maybe<ComponentRichImage>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type ComponentRichImageFilter = {
  AND: InputMaybe<Array<InputMaybe<ComponentRichImageFilter>>>;
  OR: InputMaybe<Array<InputMaybe<ComponentRichImageFilter>>>;
  caption: InputMaybe<Scalars['String']['input']>;
  caption_contains: InputMaybe<Scalars['String']['input']>;
  caption_exists: InputMaybe<Scalars['Boolean']['input']>;
  caption_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  caption_not: InputMaybe<Scalars['String']['input']>;
  caption_not_contains: InputMaybe<Scalars['String']['input']>;
  caption_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contentfulMetadata: InputMaybe<ContentfulMetadataFilter>;
  fullWidth: InputMaybe<Scalars['Boolean']['input']>;
  fullWidth_exists: InputMaybe<Scalars['Boolean']['input']>;
  fullWidth_not: InputMaybe<Scalars['Boolean']['input']>;
  image_exists: InputMaybe<Scalars['Boolean']['input']>;
  internalName: InputMaybe<Scalars['String']['input']>;
  internalName_contains: InputMaybe<Scalars['String']['input']>;
  internalName_exists: InputMaybe<Scalars['Boolean']['input']>;
  internalName_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalName_not: InputMaybe<Scalars['String']['input']>;
  internalName_not_contains: InputMaybe<Scalars['String']['input']>;
  internalName_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys: InputMaybe<SysFilter>;
};

export type ComponentRichImageLinkingCollections = {
  __typename?: 'ComponentRichImageLinkingCollections';
  entryCollection: Maybe<EntryCollection>;
};


export type ComponentRichImageLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum ComponentRichImageOrder {
  CaptionAsc = 'caption_ASC',
  CaptionDesc = 'caption_DESC',
  FullWidthAsc = 'fullWidth_ASC',
  FullWidthDesc = 'fullWidth_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

/** To have SEO-related properties to the pages we render [See type definition](https://app.contentful.com/spaces/z7u9lztnactc/content_types/componentSeo) */
export type ComponentSeo = Entry & _Node & {
  __typename?: 'ComponentSeo';
  _id: Scalars['ID']['output'];
  canonicalUrl: Maybe<Scalars['String']['output']>;
  contentfulMetadata: ContentfulMetadata;
  internalName: Maybe<Scalars['String']['output']>;
  linkedFrom: Maybe<ComponentSeoLinkingCollections>;
  nofollow: Maybe<Scalars['Boolean']['output']>;
  noindex: Maybe<Scalars['Boolean']['output']>;
  pageDescription: Maybe<Scalars['String']['output']>;
  pageTitle: Maybe<Scalars['String']['output']>;
  shareImagesCollection: Maybe<AssetCollection>;
  sys: Sys;
};


/** To have SEO-related properties to the pages we render [See type definition](https://app.contentful.com/spaces/z7u9lztnactc/content_types/componentSeo) */
export type ComponentSeoCanonicalUrlArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
};


/** To have SEO-related properties to the pages we render [See type definition](https://app.contentful.com/spaces/z7u9lztnactc/content_types/componentSeo) */
export type ComponentSeoInternalNameArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
};


/** To have SEO-related properties to the pages we render [See type definition](https://app.contentful.com/spaces/z7u9lztnactc/content_types/componentSeo) */
export type ComponentSeoLinkedFromArgs = {
  allowedLocales: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** To have SEO-related properties to the pages we render [See type definition](https://app.contentful.com/spaces/z7u9lztnactc/content_types/componentSeo) */
export type ComponentSeoNofollowArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
};


/** To have SEO-related properties to the pages we render [See type definition](https://app.contentful.com/spaces/z7u9lztnactc/content_types/componentSeo) */
export type ComponentSeoNoindexArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
};


/** To have SEO-related properties to the pages we render [See type definition](https://app.contentful.com/spaces/z7u9lztnactc/content_types/componentSeo) */
export type ComponentSeoPageDescriptionArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
};


/** To have SEO-related properties to the pages we render [See type definition](https://app.contentful.com/spaces/z7u9lztnactc/content_types/componentSeo) */
export type ComponentSeoPageTitleArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
};


/** To have SEO-related properties to the pages we render [See type definition](https://app.contentful.com/spaces/z7u9lztnactc/content_types/componentSeo) */
export type ComponentSeoShareImagesCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export type ComponentSeoCollection = {
  __typename?: 'ComponentSeoCollection';
  items: Array<Maybe<ComponentSeo>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type ComponentSeoFilter = {
  AND: InputMaybe<Array<InputMaybe<ComponentSeoFilter>>>;
  OR: InputMaybe<Array<InputMaybe<ComponentSeoFilter>>>;
  canonicalUrl: InputMaybe<Scalars['String']['input']>;
  canonicalUrl_contains: InputMaybe<Scalars['String']['input']>;
  canonicalUrl_exists: InputMaybe<Scalars['Boolean']['input']>;
  canonicalUrl_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  canonicalUrl_not: InputMaybe<Scalars['String']['input']>;
  canonicalUrl_not_contains: InputMaybe<Scalars['String']['input']>;
  canonicalUrl_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contentfulMetadata: InputMaybe<ContentfulMetadataFilter>;
  internalName: InputMaybe<Scalars['String']['input']>;
  internalName_contains: InputMaybe<Scalars['String']['input']>;
  internalName_exists: InputMaybe<Scalars['Boolean']['input']>;
  internalName_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalName_not: InputMaybe<Scalars['String']['input']>;
  internalName_not_contains: InputMaybe<Scalars['String']['input']>;
  internalName_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  nofollow: InputMaybe<Scalars['Boolean']['input']>;
  nofollow_exists: InputMaybe<Scalars['Boolean']['input']>;
  nofollow_not: InputMaybe<Scalars['Boolean']['input']>;
  noindex: InputMaybe<Scalars['Boolean']['input']>;
  noindex_exists: InputMaybe<Scalars['Boolean']['input']>;
  noindex_not: InputMaybe<Scalars['Boolean']['input']>;
  pageDescription: InputMaybe<Scalars['String']['input']>;
  pageDescription_contains: InputMaybe<Scalars['String']['input']>;
  pageDescription_exists: InputMaybe<Scalars['Boolean']['input']>;
  pageDescription_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  pageDescription_not: InputMaybe<Scalars['String']['input']>;
  pageDescription_not_contains: InputMaybe<Scalars['String']['input']>;
  pageDescription_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  pageTitle: InputMaybe<Scalars['String']['input']>;
  pageTitle_contains: InputMaybe<Scalars['String']['input']>;
  pageTitle_exists: InputMaybe<Scalars['Boolean']['input']>;
  pageTitle_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  pageTitle_not: InputMaybe<Scalars['String']['input']>;
  pageTitle_not_contains: InputMaybe<Scalars['String']['input']>;
  pageTitle_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  shareImagesCollection_exists: InputMaybe<Scalars['Boolean']['input']>;
  sys: InputMaybe<SysFilter>;
};

export type ComponentSeoLinkingCollections = {
  __typename?: 'ComponentSeoLinkingCollections';
  entryCollection: Maybe<EntryCollection>;
  pageBlogPostCollection: Maybe<PageBlogPostCollection>;
  pageDefaultCollection: Maybe<PageDefaultCollection>;
  pageLandingCollection: Maybe<PageLandingCollection>;
  pageServiceCollection: Maybe<PageServiceCollection>;
  settingsCollection: Maybe<SettingsCollection>;
};


export type ComponentSeoLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type ComponentSeoLinkingCollectionsPageBlogPostCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  order: InputMaybe<Array<InputMaybe<ComponentSeoLinkingCollectionsPageBlogPostCollectionOrder>>>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type ComponentSeoLinkingCollectionsPageDefaultCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  order: InputMaybe<Array<InputMaybe<ComponentSeoLinkingCollectionsPageDefaultCollectionOrder>>>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type ComponentSeoLinkingCollectionsPageLandingCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  order: InputMaybe<Array<InputMaybe<ComponentSeoLinkingCollectionsPageLandingCollectionOrder>>>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type ComponentSeoLinkingCollectionsPageServiceCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  order: InputMaybe<Array<InputMaybe<ComponentSeoLinkingCollectionsPageServiceCollectionOrder>>>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type ComponentSeoLinkingCollectionsSettingsCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  order: InputMaybe<Array<InputMaybe<ComponentSeoLinkingCollectionsSettingsCollectionOrder>>>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum ComponentSeoLinkingCollectionsPageBlogPostCollectionOrder {
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  PublishedDateAsc = 'publishedDate_ASC',
  PublishedDateDesc = 'publishedDate_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export enum ComponentSeoLinkingCollectionsPageDefaultCollectionOrder {
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  PageTitleAsc = 'pageTitle_ASC',
  PageTitleDesc = 'pageTitle_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum ComponentSeoLinkingCollectionsPageLandingCollectionOrder {
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum ComponentSeoLinkingCollectionsPageServiceCollectionOrder {
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  PageTitleAsc = 'pageTitle_ASC',
  PageTitleDesc = 'pageTitle_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum ComponentSeoLinkingCollectionsSettingsCollectionOrder {
  FooterCopyrightTextAsc = 'footerCopyrightText_ASC',
  FooterCopyrightTextDesc = 'footerCopyrightText_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  SiteDescriptionAsc = 'siteDescription_ASC',
  SiteDescriptionDesc = 'siteDescription_DESC',
  SiteTitleAsc = 'siteTitle_ASC',
  SiteTitleDesc = 'siteTitle_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum ComponentSeoOrder {
  CanonicalUrlAsc = 'canonicalUrl_ASC',
  CanonicalUrlDesc = 'canonicalUrl_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  NofollowAsc = 'nofollow_ASC',
  NofollowDesc = 'nofollow_DESC',
  NoindexAsc = 'noindex_ASC',
  NoindexDesc = 'noindex_DESC',
  PageTitleAsc = 'pageTitle_ASC',
  PageTitleDesc = 'pageTitle_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export type ContentfulMetadata = {
  __typename?: 'ContentfulMetadata';
  concepts: Array<Maybe<TaxonomyConcept>>;
  tags: Array<Maybe<ContentfulTag>>;
};

export type ContentfulMetadataConceptsDescendantsFilter = {
  id_contains_all: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id_contains_none: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id_contains_some: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ContentfulMetadataConceptsFilter = {
  descendants: InputMaybe<ContentfulMetadataConceptsDescendantsFilter>;
  id_contains_all: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id_contains_none: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id_contains_some: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ContentfulMetadataFilter = {
  concepts: InputMaybe<ContentfulMetadataConceptsFilter>;
  concepts_exists: InputMaybe<Scalars['Boolean']['input']>;
  tags: InputMaybe<ContentfulMetadataTagsFilter>;
  tags_exists: InputMaybe<Scalars['Boolean']['input']>;
};

export type ContentfulMetadataTagsFilter = {
  id_contains_all: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id_contains_none: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id_contains_some: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

/**
 * Represents a tag entity for finding and organizing content easily.
 *       Find out more here: https://www.contentful.com/developers/docs/references/content-delivery-api/#/reference/content-tags
 */
export type ContentfulTag = {
  __typename?: 'ContentfulTag';
  id: Maybe<Scalars['String']['output']>;
  name: Maybe<Scalars['String']['output']>;
};

export type Entry = {
  contentfulMetadata: ContentfulMetadata;
  sys: Sys;
};

export type EntryCollection = {
  __typename?: 'EntryCollection';
  items: Array<Maybe<Entry>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type EntryFilter = {
  AND: InputMaybe<Array<InputMaybe<EntryFilter>>>;
  OR: InputMaybe<Array<InputMaybe<EntryFilter>>>;
  contentfulMetadata: InputMaybe<ContentfulMetadataFilter>;
  sys: InputMaybe<SysFilter>;
};

export enum EntryOrder {
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum ImageFormat {
  Avif = 'AVIF',
  /** JPG image format. */
  Jpg = 'JPG',
  /**
   * Progressive JPG format stores multiple passes of an image in progressively higher detail.
   *         When a progressive image is loading, the viewer will first see a lower quality pixelated version which
   *         will gradually improve in detail, until the image is fully downloaded. This is to display an image as
   *         early as possible to make the layout look as designed.
   */
  JpgProgressive = 'JPG_PROGRESSIVE',
  /** PNG image format */
  Png = 'PNG',
  /**
   * 8-bit PNG images support up to 256 colors and weigh less than the standard 24-bit PNG equivalent.
   *         The 8-bit PNG format is mostly used for simple images, such as icons or logos.
   */
  Png8 = 'PNG8',
  /** WebP image format. */
  Webp = 'WEBP'
}

export enum ImageResizeFocus {
  /** Focus the resizing on the bottom. */
  Bottom = 'BOTTOM',
  /** Focus the resizing on the bottom left. */
  BottomLeft = 'BOTTOM_LEFT',
  /** Focus the resizing on the bottom right. */
  BottomRight = 'BOTTOM_RIGHT',
  /** Focus the resizing on the center. */
  Center = 'CENTER',
  /** Focus the resizing on the largest face. */
  Face = 'FACE',
  /** Focus the resizing on the area containing all the faces. */
  Faces = 'FACES',
  /** Focus the resizing on the left. */
  Left = 'LEFT',
  /** Focus the resizing on the right. */
  Right = 'RIGHT',
  /** Focus the resizing on the top. */
  Top = 'TOP',
  /** Focus the resizing on the top left. */
  TopLeft = 'TOP_LEFT',
  /** Focus the resizing on the top right. */
  TopRight = 'TOP_RIGHT'
}

export enum ImageResizeStrategy {
  /** Crops a part of the original image to fit into the specified dimensions. */
  Crop = 'CROP',
  /** Resizes the image to the specified dimensions, cropping the image if needed. */
  Fill = 'FILL',
  /** Resizes the image to fit into the specified dimensions. */
  Fit = 'FIT',
  /**
   * Resizes the image to the specified dimensions, padding the image if needed.
   *         Uses desired background color as padding color.
   */
  Pad = 'PAD',
  /** Resizes the image to the specified dimensions, changing the original aspect ratio if needed. */
  Scale = 'SCALE',
  /** Creates a thumbnail from the image. */
  Thumb = 'THUMB'
}

export type ImageTransformOptions = {
  /**
   * Desired background color, used with corner radius or `PAD` resize strategy.
   *         Defaults to transparent (for `PNG`, `PNG8` and `WEBP`) or white (for `JPG` and `JPG_PROGRESSIVE`).
   */
  backgroundColor: InputMaybe<Scalars['HexColor']['input']>;
  /**
   * Desired corner radius in pixels.
   *         Results in an image with rounded corners (pass `-1` for a full circle/ellipse).
   *         Defaults to `0`. Uses desired background color as padding color,
   *         unless the format is `JPG` or `JPG_PROGRESSIVE` and resize strategy is `PAD`, then defaults to white.
   */
  cornerRadius: InputMaybe<Scalars['Int']['input']>;
  /** Desired image format. Defaults to the original image format. */
  format: InputMaybe<ImageFormat>;
  /** Desired height in pixels. Defaults to the original image height. */
  height: InputMaybe<Scalars['Dimension']['input']>;
  /**
   * Desired quality of the image in percents.
   *         Used for `PNG8`, `JPG`, `JPG_PROGRESSIVE` and `WEBP` formats.
   */
  quality: InputMaybe<Scalars['Quality']['input']>;
  /** Desired resize focus area. Defaults to `CENTER`. */
  resizeFocus: InputMaybe<ImageResizeFocus>;
  /** Desired resize strategy. Defaults to `FIT`. */
  resizeStrategy: InputMaybe<ImageResizeStrategy>;
  /** Desired width in pixels. Defaults to the original image width. */
  width: InputMaybe<Scalars['Dimension']['input']>;
};

/** [See type definition](https://app.contentful.com/spaces/z7u9lztnactc/content_types/navigationLink) */
export type NavigationLink = Entry & _Node & {
  __typename?: 'NavigationLink';
  _id: Scalars['ID']['output'];
  contentfulMetadata: ContentfulMetadata;
  href: Maybe<Scalars['String']['output']>;
  icon: Maybe<Asset>;
  image: Maybe<Asset>;
  internalName: Maybe<Scalars['String']['output']>;
  linkedFrom: Maybe<NavigationLinkLinkingCollections>;
  subnavigationCollection: Maybe<NavigationLinkSubnavigationCollection>;
  sys: Sys;
  title: Maybe<Scalars['String']['output']>;
};


/** [See type definition](https://app.contentful.com/spaces/z7u9lztnactc/content_types/navigationLink) */
export type NavigationLinkHrefArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/z7u9lztnactc/content_types/navigationLink) */
export type NavigationLinkIconArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/z7u9lztnactc/content_types/navigationLink) */
export type NavigationLinkImageArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/z7u9lztnactc/content_types/navigationLink) */
export type NavigationLinkInternalNameArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/z7u9lztnactc/content_types/navigationLink) */
export type NavigationLinkLinkedFromArgs = {
  allowedLocales: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/z7u9lztnactc/content_types/navigationLink) */
export type NavigationLinkSubnavigationCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  order: InputMaybe<Array<InputMaybe<NavigationLinkSubnavigationCollectionOrder>>>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where: InputMaybe<NavigationLinkFilter>;
};


/** [See type definition](https://app.contentful.com/spaces/z7u9lztnactc/content_types/navigationLink) */
export type NavigationLinkTitleArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
};

export type NavigationLinkCollection = {
  __typename?: 'NavigationLinkCollection';
  items: Array<Maybe<NavigationLink>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type NavigationLinkFilter = {
  AND: InputMaybe<Array<InputMaybe<NavigationLinkFilter>>>;
  OR: InputMaybe<Array<InputMaybe<NavigationLinkFilter>>>;
  contentfulMetadata: InputMaybe<ContentfulMetadataFilter>;
  href: InputMaybe<Scalars['String']['input']>;
  href_contains: InputMaybe<Scalars['String']['input']>;
  href_exists: InputMaybe<Scalars['Boolean']['input']>;
  href_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  href_not: InputMaybe<Scalars['String']['input']>;
  href_not_contains: InputMaybe<Scalars['String']['input']>;
  href_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  icon_exists: InputMaybe<Scalars['Boolean']['input']>;
  image_exists: InputMaybe<Scalars['Boolean']['input']>;
  internalName: InputMaybe<Scalars['String']['input']>;
  internalName_contains: InputMaybe<Scalars['String']['input']>;
  internalName_exists: InputMaybe<Scalars['Boolean']['input']>;
  internalName_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalName_not: InputMaybe<Scalars['String']['input']>;
  internalName_not_contains: InputMaybe<Scalars['String']['input']>;
  internalName_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  subnavigation: InputMaybe<CfNavigationLinkNestedFilter>;
  subnavigationCollection_exists: InputMaybe<Scalars['Boolean']['input']>;
  sys: InputMaybe<SysFilter>;
  title: InputMaybe<Scalars['String']['input']>;
  title_contains: InputMaybe<Scalars['String']['input']>;
  title_exists: InputMaybe<Scalars['Boolean']['input']>;
  title_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_not: InputMaybe<Scalars['String']['input']>;
  title_not_contains: InputMaybe<Scalars['String']['input']>;
  title_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type NavigationLinkLinkingCollections = {
  __typename?: 'NavigationLinkLinkingCollections';
  componentFeatureCollection: Maybe<ComponentFeatureCollection>;
  entryCollection: Maybe<EntryCollection>;
  navigationLinkCollection: Maybe<NavigationLinkCollection>;
  navigationMenuCollection: Maybe<NavigationMenuCollection>;
  settingsCollection: Maybe<SettingsCollection>;
};


export type NavigationLinkLinkingCollectionsComponentFeatureCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  order: InputMaybe<Array<InputMaybe<NavigationLinkLinkingCollectionsComponentFeatureCollectionOrder>>>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type NavigationLinkLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type NavigationLinkLinkingCollectionsNavigationLinkCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  order: InputMaybe<Array<InputMaybe<NavigationLinkLinkingCollectionsNavigationLinkCollectionOrder>>>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type NavigationLinkLinkingCollectionsNavigationMenuCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  order: InputMaybe<Array<InputMaybe<NavigationLinkLinkingCollectionsNavigationMenuCollectionOrder>>>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type NavigationLinkLinkingCollectionsSettingsCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  order: InputMaybe<Array<InputMaybe<NavigationLinkLinkingCollectionsSettingsCollectionOrder>>>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum NavigationLinkLinkingCollectionsComponentFeatureCollectionOrder {
  HeadingAsc = 'heading_ASC',
  HeadingDesc = 'heading_DESC',
  InternalIdAsc = 'internalId_ASC',
  InternalIdDesc = 'internalId_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum NavigationLinkLinkingCollectionsNavigationLinkCollectionOrder {
  HrefAsc = 'href_ASC',
  HrefDesc = 'href_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export enum NavigationLinkLinkingCollectionsNavigationMenuCollectionOrder {
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  PositionAsc = 'position_ASC',
  PositionDesc = 'position_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum NavigationLinkLinkingCollectionsSettingsCollectionOrder {
  FooterCopyrightTextAsc = 'footerCopyrightText_ASC',
  FooterCopyrightTextDesc = 'footerCopyrightText_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  SiteDescriptionAsc = 'siteDescription_ASC',
  SiteDescriptionDesc = 'siteDescription_DESC',
  SiteTitleAsc = 'siteTitle_ASC',
  SiteTitleDesc = 'siteTitle_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum NavigationLinkOrder {
  HrefAsc = 'href_ASC',
  HrefDesc = 'href_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export type NavigationLinkSubnavigationCollection = {
  __typename?: 'NavigationLinkSubnavigationCollection';
  items: Array<Maybe<NavigationLink>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export enum NavigationLinkSubnavigationCollectionOrder {
  HrefAsc = 'href_ASC',
  HrefDesc = 'href_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

/** [See type definition](https://app.contentful.com/spaces/z7u9lztnactc/content_types/navigationMenu) */
export type NavigationMenu = Entry & _Node & {
  __typename?: 'NavigationMenu';
  _id: Scalars['ID']['output'];
  contentfulMetadata: ContentfulMetadata;
  internalName: Maybe<Scalars['String']['output']>;
  linkedFrom: Maybe<NavigationMenuLinkingCollections>;
  navigationMenuCollection: Maybe<NavigationMenuNavigationMenuCollection>;
  position: Maybe<Scalars['String']['output']>;
  sys: Sys;
};


/** [See type definition](https://app.contentful.com/spaces/z7u9lztnactc/content_types/navigationMenu) */
export type NavigationMenuInternalNameArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/z7u9lztnactc/content_types/navigationMenu) */
export type NavigationMenuLinkedFromArgs = {
  allowedLocales: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/z7u9lztnactc/content_types/navigationMenu) */
export type NavigationMenuNavigationMenuCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  order: InputMaybe<Array<InputMaybe<NavigationMenuNavigationMenuCollectionOrder>>>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where: InputMaybe<NavigationLinkFilter>;
};


/** [See type definition](https://app.contentful.com/spaces/z7u9lztnactc/content_types/navigationMenu) */
export type NavigationMenuPositionArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
};

export type NavigationMenuCollection = {
  __typename?: 'NavigationMenuCollection';
  items: Array<Maybe<NavigationMenu>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type NavigationMenuFilter = {
  AND: InputMaybe<Array<InputMaybe<NavigationMenuFilter>>>;
  OR: InputMaybe<Array<InputMaybe<NavigationMenuFilter>>>;
  contentfulMetadata: InputMaybe<ContentfulMetadataFilter>;
  internalName: InputMaybe<Scalars['String']['input']>;
  internalName_contains: InputMaybe<Scalars['String']['input']>;
  internalName_exists: InputMaybe<Scalars['Boolean']['input']>;
  internalName_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalName_not: InputMaybe<Scalars['String']['input']>;
  internalName_not_contains: InputMaybe<Scalars['String']['input']>;
  internalName_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  navigationMenu: InputMaybe<CfNavigationLinkNestedFilter>;
  navigationMenuCollection_exists: InputMaybe<Scalars['Boolean']['input']>;
  position: InputMaybe<Scalars['String']['input']>;
  position_contains: InputMaybe<Scalars['String']['input']>;
  position_exists: InputMaybe<Scalars['Boolean']['input']>;
  position_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  position_not: InputMaybe<Scalars['String']['input']>;
  position_not_contains: InputMaybe<Scalars['String']['input']>;
  position_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys: InputMaybe<SysFilter>;
};

export type NavigationMenuLinkingCollections = {
  __typename?: 'NavigationMenuLinkingCollections';
  entryCollection: Maybe<EntryCollection>;
};


export type NavigationMenuLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export type NavigationMenuNavigationMenuCollection = {
  __typename?: 'NavigationMenuNavigationMenuCollection';
  items: Array<Maybe<NavigationLink>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export enum NavigationMenuNavigationMenuCollectionOrder {
  HrefAsc = 'href_ASC',
  HrefDesc = 'href_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export enum NavigationMenuOrder {
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  PositionAsc = 'position_ASC',
  PositionDesc = 'position_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

/** To create individual blog posts [See type definition](https://app.contentful.com/spaces/z7u9lztnactc/content_types/pageBlogPost) */
export type PageBlogPost = Entry & _Node & {
  __typename?: 'PageBlogPost';
  _id: Scalars['ID']['output'];
  author: Maybe<ComponentAuthor>;
  content: Maybe<PageBlogPostContent>;
  contentfulMetadata: ContentfulMetadata;
  featuredImage: Maybe<Asset>;
  internalName: Maybe<Scalars['String']['output']>;
  linkedFrom: Maybe<PageBlogPostLinkingCollections>;
  publishedDate: Maybe<Scalars['DateTime']['output']>;
  relatedBlogPostsCollection: Maybe<PageBlogPostRelatedBlogPostsCollection>;
  seoFields: Maybe<ComponentSeo>;
  shortDescription: Maybe<Scalars['String']['output']>;
  slug: Maybe<Scalars['String']['output']>;
  sys: Sys;
  title: Maybe<Scalars['String']['output']>;
};


/** To create individual blog posts [See type definition](https://app.contentful.com/spaces/z7u9lztnactc/content_types/pageBlogPost) */
export type PageBlogPostAuthorArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  where: InputMaybe<ComponentAuthorFilter>;
};


/** To create individual blog posts [See type definition](https://app.contentful.com/spaces/z7u9lztnactc/content_types/pageBlogPost) */
export type PageBlogPostContentArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
};


/** To create individual blog posts [See type definition](https://app.contentful.com/spaces/z7u9lztnactc/content_types/pageBlogPost) */
export type PageBlogPostFeaturedImageArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
};


/** To create individual blog posts [See type definition](https://app.contentful.com/spaces/z7u9lztnactc/content_types/pageBlogPost) */
export type PageBlogPostInternalNameArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
};


/** To create individual blog posts [See type definition](https://app.contentful.com/spaces/z7u9lztnactc/content_types/pageBlogPost) */
export type PageBlogPostLinkedFromArgs = {
  allowedLocales: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** To create individual blog posts [See type definition](https://app.contentful.com/spaces/z7u9lztnactc/content_types/pageBlogPost) */
export type PageBlogPostPublishedDateArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
};


/** To create individual blog posts [See type definition](https://app.contentful.com/spaces/z7u9lztnactc/content_types/pageBlogPost) */
export type PageBlogPostRelatedBlogPostsCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  order: InputMaybe<Array<InputMaybe<PageBlogPostRelatedBlogPostsCollectionOrder>>>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where: InputMaybe<PageBlogPostFilter>;
};


/** To create individual blog posts [See type definition](https://app.contentful.com/spaces/z7u9lztnactc/content_types/pageBlogPost) */
export type PageBlogPostSeoFieldsArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  where: InputMaybe<ComponentSeoFilter>;
};


/** To create individual blog posts [See type definition](https://app.contentful.com/spaces/z7u9lztnactc/content_types/pageBlogPost) */
export type PageBlogPostShortDescriptionArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
};


/** To create individual blog posts [See type definition](https://app.contentful.com/spaces/z7u9lztnactc/content_types/pageBlogPost) */
export type PageBlogPostSlugArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
};


/** To create individual blog posts [See type definition](https://app.contentful.com/spaces/z7u9lztnactc/content_types/pageBlogPost) */
export type PageBlogPostTitleArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
};

export type PageBlogPostCollection = {
  __typename?: 'PageBlogPostCollection';
  items: Array<Maybe<PageBlogPost>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type PageBlogPostContent = {
  __typename?: 'PageBlogPostContent';
  json: Scalars['JSON']['output'];
  links: PageBlogPostContentLinks;
};

export type PageBlogPostContentAssets = {
  __typename?: 'PageBlogPostContentAssets';
  block: Array<Maybe<Asset>>;
  hyperlink: Array<Maybe<Asset>>;
};

export type PageBlogPostContentEntries = {
  __typename?: 'PageBlogPostContentEntries';
  block: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  inline: Array<Maybe<Entry>>;
};

export type PageBlogPostContentLinks = {
  __typename?: 'PageBlogPostContentLinks';
  assets: PageBlogPostContentAssets;
  entries: PageBlogPostContentEntries;
  resources: PageBlogPostContentResources;
};

export type PageBlogPostContentResources = {
  __typename?: 'PageBlogPostContentResources';
  block: Array<PageBlogPostContentResourcesBlock>;
  hyperlink: Array<PageBlogPostContentResourcesHyperlink>;
  inline: Array<PageBlogPostContentResourcesInline>;
};

export type PageBlogPostContentResourcesBlock = ResourceLink & {
  __typename?: 'PageBlogPostContentResourcesBlock';
  sys: ResourceSys;
};

export type PageBlogPostContentResourcesHyperlink = ResourceLink & {
  __typename?: 'PageBlogPostContentResourcesHyperlink';
  sys: ResourceSys;
};

export type PageBlogPostContentResourcesInline = ResourceLink & {
  __typename?: 'PageBlogPostContentResourcesInline';
  sys: ResourceSys;
};

export type PageBlogPostFilter = {
  AND: InputMaybe<Array<InputMaybe<PageBlogPostFilter>>>;
  OR: InputMaybe<Array<InputMaybe<PageBlogPostFilter>>>;
  author: InputMaybe<CfComponentAuthorNestedFilter>;
  author_exists: InputMaybe<Scalars['Boolean']['input']>;
  content_contains: InputMaybe<Scalars['String']['input']>;
  content_exists: InputMaybe<Scalars['Boolean']['input']>;
  content_not_contains: InputMaybe<Scalars['String']['input']>;
  contentfulMetadata: InputMaybe<ContentfulMetadataFilter>;
  featuredImage_exists: InputMaybe<Scalars['Boolean']['input']>;
  internalName: InputMaybe<Scalars['String']['input']>;
  internalName_contains: InputMaybe<Scalars['String']['input']>;
  internalName_exists: InputMaybe<Scalars['Boolean']['input']>;
  internalName_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalName_not: InputMaybe<Scalars['String']['input']>;
  internalName_not_contains: InputMaybe<Scalars['String']['input']>;
  internalName_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  publishedDate: InputMaybe<Scalars['DateTime']['input']>;
  publishedDate_exists: InputMaybe<Scalars['Boolean']['input']>;
  publishedDate_gt: InputMaybe<Scalars['DateTime']['input']>;
  publishedDate_gte: InputMaybe<Scalars['DateTime']['input']>;
  publishedDate_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedDate_lt: InputMaybe<Scalars['DateTime']['input']>;
  publishedDate_lte: InputMaybe<Scalars['DateTime']['input']>;
  publishedDate_not: InputMaybe<Scalars['DateTime']['input']>;
  publishedDate_not_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  relatedBlogPosts: InputMaybe<CfPageBlogPostNestedFilter>;
  relatedBlogPostsCollection_exists: InputMaybe<Scalars['Boolean']['input']>;
  seoFields: InputMaybe<CfComponentSeoNestedFilter>;
  seoFields_exists: InputMaybe<Scalars['Boolean']['input']>;
  shortDescription: InputMaybe<Scalars['String']['input']>;
  shortDescription_contains: InputMaybe<Scalars['String']['input']>;
  shortDescription_exists: InputMaybe<Scalars['Boolean']['input']>;
  shortDescription_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  shortDescription_not: InputMaybe<Scalars['String']['input']>;
  shortDescription_not_contains: InputMaybe<Scalars['String']['input']>;
  shortDescription_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  slug: InputMaybe<Scalars['String']['input']>;
  slug_contains: InputMaybe<Scalars['String']['input']>;
  slug_exists: InputMaybe<Scalars['Boolean']['input']>;
  slug_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  slug_not: InputMaybe<Scalars['String']['input']>;
  slug_not_contains: InputMaybe<Scalars['String']['input']>;
  slug_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys: InputMaybe<SysFilter>;
  title: InputMaybe<Scalars['String']['input']>;
  title_contains: InputMaybe<Scalars['String']['input']>;
  title_exists: InputMaybe<Scalars['Boolean']['input']>;
  title_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_not: InputMaybe<Scalars['String']['input']>;
  title_not_contains: InputMaybe<Scalars['String']['input']>;
  title_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type PageBlogPostLinkingCollections = {
  __typename?: 'PageBlogPostLinkingCollections';
  entryCollection: Maybe<EntryCollection>;
  pageBlogPostCollection: Maybe<PageBlogPostCollection>;
  pageLandingCollection: Maybe<PageLandingCollection>;
};


export type PageBlogPostLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type PageBlogPostLinkingCollectionsPageBlogPostCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  order: InputMaybe<Array<InputMaybe<PageBlogPostLinkingCollectionsPageBlogPostCollectionOrder>>>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type PageBlogPostLinkingCollectionsPageLandingCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  order: InputMaybe<Array<InputMaybe<PageBlogPostLinkingCollectionsPageLandingCollectionOrder>>>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum PageBlogPostLinkingCollectionsPageBlogPostCollectionOrder {
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  PublishedDateAsc = 'publishedDate_ASC',
  PublishedDateDesc = 'publishedDate_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export enum PageBlogPostLinkingCollectionsPageLandingCollectionOrder {
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum PageBlogPostOrder {
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  PublishedDateAsc = 'publishedDate_ASC',
  PublishedDateDesc = 'publishedDate_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export type PageBlogPostRelatedBlogPostsCollection = {
  __typename?: 'PageBlogPostRelatedBlogPostsCollection';
  items: Array<Maybe<PageBlogPost>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export enum PageBlogPostRelatedBlogPostsCollectionOrder {
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  PublishedDateAsc = 'publishedDate_ASC',
  PublishedDateDesc = 'publishedDate_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

/** [See type definition](https://app.contentful.com/spaces/z7u9lztnactc/content_types/pageDefault) */
export type PageDefault = Entry & _Node & {
  __typename?: 'PageDefault';
  _id: Scalars['ID']['output'];
  contentfulMetadata: ContentfulMetadata;
  internalName: Maybe<Scalars['String']['output']>;
  linkedFrom: Maybe<PageDefaultLinkingCollections>;
  pageContent: Maybe<PageDefaultPageContent>;
  pageSeo: Maybe<ComponentSeo>;
  pageTitle: Maybe<Scalars['String']['output']>;
  slug: Maybe<Scalars['String']['output']>;
  sys: Sys;
};


/** [See type definition](https://app.contentful.com/spaces/z7u9lztnactc/content_types/pageDefault) */
export type PageDefaultInternalNameArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/z7u9lztnactc/content_types/pageDefault) */
export type PageDefaultLinkedFromArgs = {
  allowedLocales: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/z7u9lztnactc/content_types/pageDefault) */
export type PageDefaultPageContentArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/z7u9lztnactc/content_types/pageDefault) */
export type PageDefaultPageSeoArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  where: InputMaybe<ComponentSeoFilter>;
};


/** [See type definition](https://app.contentful.com/spaces/z7u9lztnactc/content_types/pageDefault) */
export type PageDefaultPageTitleArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/z7u9lztnactc/content_types/pageDefault) */
export type PageDefaultSlugArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
};

export type PageDefaultCollection = {
  __typename?: 'PageDefaultCollection';
  items: Array<Maybe<PageDefault>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type PageDefaultFilter = {
  AND: InputMaybe<Array<InputMaybe<PageDefaultFilter>>>;
  OR: InputMaybe<Array<InputMaybe<PageDefaultFilter>>>;
  contentfulMetadata: InputMaybe<ContentfulMetadataFilter>;
  internalName: InputMaybe<Scalars['String']['input']>;
  internalName_contains: InputMaybe<Scalars['String']['input']>;
  internalName_exists: InputMaybe<Scalars['Boolean']['input']>;
  internalName_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalName_not: InputMaybe<Scalars['String']['input']>;
  internalName_not_contains: InputMaybe<Scalars['String']['input']>;
  internalName_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  pageContent_contains: InputMaybe<Scalars['String']['input']>;
  pageContent_exists: InputMaybe<Scalars['Boolean']['input']>;
  pageContent_not_contains: InputMaybe<Scalars['String']['input']>;
  pageSeo: InputMaybe<CfComponentSeoNestedFilter>;
  pageSeo_exists: InputMaybe<Scalars['Boolean']['input']>;
  pageTitle: InputMaybe<Scalars['String']['input']>;
  pageTitle_contains: InputMaybe<Scalars['String']['input']>;
  pageTitle_exists: InputMaybe<Scalars['Boolean']['input']>;
  pageTitle_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  pageTitle_not: InputMaybe<Scalars['String']['input']>;
  pageTitle_not_contains: InputMaybe<Scalars['String']['input']>;
  pageTitle_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  slug: InputMaybe<Scalars['String']['input']>;
  slug_contains: InputMaybe<Scalars['String']['input']>;
  slug_exists: InputMaybe<Scalars['Boolean']['input']>;
  slug_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  slug_not: InputMaybe<Scalars['String']['input']>;
  slug_not_contains: InputMaybe<Scalars['String']['input']>;
  slug_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys: InputMaybe<SysFilter>;
};

export type PageDefaultLinkingCollections = {
  __typename?: 'PageDefaultLinkingCollections';
  entryCollection: Maybe<EntryCollection>;
};


export type PageDefaultLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum PageDefaultOrder {
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  PageTitleAsc = 'pageTitle_ASC',
  PageTitleDesc = 'pageTitle_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export type PageDefaultPageContent = {
  __typename?: 'PageDefaultPageContent';
  json: Scalars['JSON']['output'];
  links: PageDefaultPageContentLinks;
};

export type PageDefaultPageContentAssets = {
  __typename?: 'PageDefaultPageContentAssets';
  block: Array<Maybe<Asset>>;
  hyperlink: Array<Maybe<Asset>>;
};

export type PageDefaultPageContentEntries = {
  __typename?: 'PageDefaultPageContentEntries';
  block: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  inline: Array<Maybe<Entry>>;
};

export type PageDefaultPageContentLinks = {
  __typename?: 'PageDefaultPageContentLinks';
  assets: PageDefaultPageContentAssets;
  entries: PageDefaultPageContentEntries;
  resources: PageDefaultPageContentResources;
};

export type PageDefaultPageContentResources = {
  __typename?: 'PageDefaultPageContentResources';
  block: Array<PageDefaultPageContentResourcesBlock>;
  hyperlink: Array<PageDefaultPageContentResourcesHyperlink>;
  inline: Array<PageDefaultPageContentResourcesInline>;
};

export type PageDefaultPageContentResourcesBlock = ResourceLink & {
  __typename?: 'PageDefaultPageContentResourcesBlock';
  sys: ResourceSys;
};

export type PageDefaultPageContentResourcesHyperlink = ResourceLink & {
  __typename?: 'PageDefaultPageContentResourcesHyperlink';
  sys: ResourceSys;
};

export type PageDefaultPageContentResourcesInline = ResourceLink & {
  __typename?: 'PageDefaultPageContentResourcesInline';
  sys: ResourceSys;
};

/** Job Description [See type definition](https://app.contentful.com/spaces/z7u9lztnactc/content_types/pageExperience) */
export type PageExperience = Entry & _Node & {
  __typename?: 'PageExperience';
  _id: Scalars['ID']['output'];
  bannerImage: Maybe<Asset>;
  companyLogo: Maybe<Asset>;
  companyName: Maybe<Scalars['String']['output']>;
  contentfulMetadata: ContentfulMetadata;
  endDate: Maybe<Scalars['DateTime']['output']>;
  internalTitle: Maybe<Scalars['String']['output']>;
  jobDescription: Maybe<PageExperienceJobDescription>;
  linkedFrom: Maybe<PageExperienceLinkingCollections>;
  positionTitle: Maybe<Scalars['String']['output']>;
  skillsUsed: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  slug: Maybe<Scalars['String']['output']>;
  startDate: Maybe<Scalars['DateTime']['output']>;
  sys: Sys;
  website: Maybe<Scalars['String']['output']>;
};


/** Job Description [See type definition](https://app.contentful.com/spaces/z7u9lztnactc/content_types/pageExperience) */
export type PageExperienceBannerImageArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
};


/** Job Description [See type definition](https://app.contentful.com/spaces/z7u9lztnactc/content_types/pageExperience) */
export type PageExperienceCompanyLogoArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
};


/** Job Description [See type definition](https://app.contentful.com/spaces/z7u9lztnactc/content_types/pageExperience) */
export type PageExperienceCompanyNameArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
};


/** Job Description [See type definition](https://app.contentful.com/spaces/z7u9lztnactc/content_types/pageExperience) */
export type PageExperienceEndDateArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
};


/** Job Description [See type definition](https://app.contentful.com/spaces/z7u9lztnactc/content_types/pageExperience) */
export type PageExperienceInternalTitleArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
};


/** Job Description [See type definition](https://app.contentful.com/spaces/z7u9lztnactc/content_types/pageExperience) */
export type PageExperienceJobDescriptionArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
};


/** Job Description [See type definition](https://app.contentful.com/spaces/z7u9lztnactc/content_types/pageExperience) */
export type PageExperienceLinkedFromArgs = {
  allowedLocales: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** Job Description [See type definition](https://app.contentful.com/spaces/z7u9lztnactc/content_types/pageExperience) */
export type PageExperiencePositionTitleArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
};


/** Job Description [See type definition](https://app.contentful.com/spaces/z7u9lztnactc/content_types/pageExperience) */
export type PageExperienceSkillsUsedArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
};


/** Job Description [See type definition](https://app.contentful.com/spaces/z7u9lztnactc/content_types/pageExperience) */
export type PageExperienceSlugArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
};


/** Job Description [See type definition](https://app.contentful.com/spaces/z7u9lztnactc/content_types/pageExperience) */
export type PageExperienceStartDateArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
};


/** Job Description [See type definition](https://app.contentful.com/spaces/z7u9lztnactc/content_types/pageExperience) */
export type PageExperienceWebsiteArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
};

export type PageExperienceCollection = {
  __typename?: 'PageExperienceCollection';
  items: Array<Maybe<PageExperience>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type PageExperienceFilter = {
  AND: InputMaybe<Array<InputMaybe<PageExperienceFilter>>>;
  OR: InputMaybe<Array<InputMaybe<PageExperienceFilter>>>;
  bannerImage_exists: InputMaybe<Scalars['Boolean']['input']>;
  companyLogo_exists: InputMaybe<Scalars['Boolean']['input']>;
  companyName: InputMaybe<Scalars['String']['input']>;
  companyName_contains: InputMaybe<Scalars['String']['input']>;
  companyName_exists: InputMaybe<Scalars['Boolean']['input']>;
  companyName_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  companyName_not: InputMaybe<Scalars['String']['input']>;
  companyName_not_contains: InputMaybe<Scalars['String']['input']>;
  companyName_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contentfulMetadata: InputMaybe<ContentfulMetadataFilter>;
  endDate: InputMaybe<Scalars['DateTime']['input']>;
  endDate_exists: InputMaybe<Scalars['Boolean']['input']>;
  endDate_gt: InputMaybe<Scalars['DateTime']['input']>;
  endDate_gte: InputMaybe<Scalars['DateTime']['input']>;
  endDate_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  endDate_lt: InputMaybe<Scalars['DateTime']['input']>;
  endDate_lte: InputMaybe<Scalars['DateTime']['input']>;
  endDate_not: InputMaybe<Scalars['DateTime']['input']>;
  endDate_not_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  internalTitle: InputMaybe<Scalars['String']['input']>;
  internalTitle_contains: InputMaybe<Scalars['String']['input']>;
  internalTitle_exists: InputMaybe<Scalars['Boolean']['input']>;
  internalTitle_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalTitle_not: InputMaybe<Scalars['String']['input']>;
  internalTitle_not_contains: InputMaybe<Scalars['String']['input']>;
  internalTitle_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  jobDescription_contains: InputMaybe<Scalars['String']['input']>;
  jobDescription_exists: InputMaybe<Scalars['Boolean']['input']>;
  jobDescription_not_contains: InputMaybe<Scalars['String']['input']>;
  positionTitle: InputMaybe<Scalars['String']['input']>;
  positionTitle_contains: InputMaybe<Scalars['String']['input']>;
  positionTitle_exists: InputMaybe<Scalars['Boolean']['input']>;
  positionTitle_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  positionTitle_not: InputMaybe<Scalars['String']['input']>;
  positionTitle_not_contains: InputMaybe<Scalars['String']['input']>;
  positionTitle_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  skillsUsed_contains_all: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  skillsUsed_contains_none: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  skillsUsed_contains_some: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  skillsUsed_exists: InputMaybe<Scalars['Boolean']['input']>;
  slug: InputMaybe<Scalars['String']['input']>;
  slug_contains: InputMaybe<Scalars['String']['input']>;
  slug_exists: InputMaybe<Scalars['Boolean']['input']>;
  slug_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  slug_not: InputMaybe<Scalars['String']['input']>;
  slug_not_contains: InputMaybe<Scalars['String']['input']>;
  slug_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  startDate: InputMaybe<Scalars['DateTime']['input']>;
  startDate_exists: InputMaybe<Scalars['Boolean']['input']>;
  startDate_gt: InputMaybe<Scalars['DateTime']['input']>;
  startDate_gte: InputMaybe<Scalars['DateTime']['input']>;
  startDate_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  startDate_lt: InputMaybe<Scalars['DateTime']['input']>;
  startDate_lte: InputMaybe<Scalars['DateTime']['input']>;
  startDate_not: InputMaybe<Scalars['DateTime']['input']>;
  startDate_not_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  sys: InputMaybe<SysFilter>;
  website: InputMaybe<Scalars['String']['input']>;
  website_contains: InputMaybe<Scalars['String']['input']>;
  website_exists: InputMaybe<Scalars['Boolean']['input']>;
  website_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  website_not: InputMaybe<Scalars['String']['input']>;
  website_not_contains: InputMaybe<Scalars['String']['input']>;
  website_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type PageExperienceJobDescription = {
  __typename?: 'PageExperienceJobDescription';
  json: Scalars['JSON']['output'];
  links: PageExperienceJobDescriptionLinks;
};

export type PageExperienceJobDescriptionAssets = {
  __typename?: 'PageExperienceJobDescriptionAssets';
  block: Array<Maybe<Asset>>;
  hyperlink: Array<Maybe<Asset>>;
};

export type PageExperienceJobDescriptionEntries = {
  __typename?: 'PageExperienceJobDescriptionEntries';
  block: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  inline: Array<Maybe<Entry>>;
};

export type PageExperienceJobDescriptionLinks = {
  __typename?: 'PageExperienceJobDescriptionLinks';
  assets: PageExperienceJobDescriptionAssets;
  entries: PageExperienceJobDescriptionEntries;
  resources: PageExperienceJobDescriptionResources;
};

export type PageExperienceJobDescriptionResources = {
  __typename?: 'PageExperienceJobDescriptionResources';
  block: Array<PageExperienceJobDescriptionResourcesBlock>;
  hyperlink: Array<PageExperienceJobDescriptionResourcesHyperlink>;
  inline: Array<PageExperienceJobDescriptionResourcesInline>;
};

export type PageExperienceJobDescriptionResourcesBlock = ResourceLink & {
  __typename?: 'PageExperienceJobDescriptionResourcesBlock';
  sys: ResourceSys;
};

export type PageExperienceJobDescriptionResourcesHyperlink = ResourceLink & {
  __typename?: 'PageExperienceJobDescriptionResourcesHyperlink';
  sys: ResourceSys;
};

export type PageExperienceJobDescriptionResourcesInline = ResourceLink & {
  __typename?: 'PageExperienceJobDescriptionResourcesInline';
  sys: ResourceSys;
};

export type PageExperienceLinkingCollections = {
  __typename?: 'PageExperienceLinkingCollections';
  entryCollection: Maybe<EntryCollection>;
};


export type PageExperienceLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum PageExperienceOrder {
  CompanyNameAsc = 'companyName_ASC',
  CompanyNameDesc = 'companyName_DESC',
  EndDateAsc = 'endDate_ASC',
  EndDateDesc = 'endDate_DESC',
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  PositionTitleAsc = 'positionTitle_ASC',
  PositionTitleDesc = 'positionTitle_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  StartDateAsc = 'startDate_ASC',
  StartDateDesc = 'startDate_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  WebsiteAsc = 'website_ASC',
  WebsiteDesc = 'website_DESC'
}

/** To have an entry point for the app (e.g. Homepage) [See type definition](https://app.contentful.com/spaces/z7u9lztnactc/content_types/pageLanding) */
export type PageLanding = Entry & _Node & {
  __typename?: 'PageLanding';
  _id: Scalars['ID']['output'];
  contentfulMetadata: ContentfulMetadata;
  featureCardsCollection: Maybe<PageLandingFeatureCardsCollection>;
  featuredBlogPost: Maybe<PageBlogPost>;
  hero: Maybe<ComponentHero>;
  internalName: Maybe<Scalars['String']['output']>;
  linkedFrom: Maybe<PageLandingLinkingCollections>;
  seoFields: Maybe<ComponentSeo>;
  sys: Sys;
};


/** To have an entry point for the app (e.g. Homepage) [See type definition](https://app.contentful.com/spaces/z7u9lztnactc/content_types/pageLanding) */
export type PageLandingFeatureCardsCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  order: InputMaybe<Array<InputMaybe<PageLandingFeatureCardsCollectionOrder>>>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where: InputMaybe<ComponentFeatureFilter>;
};


/** To have an entry point for the app (e.g. Homepage) [See type definition](https://app.contentful.com/spaces/z7u9lztnactc/content_types/pageLanding) */
export type PageLandingFeaturedBlogPostArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  where: InputMaybe<PageBlogPostFilter>;
};


/** To have an entry point for the app (e.g. Homepage) [See type definition](https://app.contentful.com/spaces/z7u9lztnactc/content_types/pageLanding) */
export type PageLandingHeroArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  where: InputMaybe<ComponentHeroFilter>;
};


/** To have an entry point for the app (e.g. Homepage) [See type definition](https://app.contentful.com/spaces/z7u9lztnactc/content_types/pageLanding) */
export type PageLandingInternalNameArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
};


/** To have an entry point for the app (e.g. Homepage) [See type definition](https://app.contentful.com/spaces/z7u9lztnactc/content_types/pageLanding) */
export type PageLandingLinkedFromArgs = {
  allowedLocales: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** To have an entry point for the app (e.g. Homepage) [See type definition](https://app.contentful.com/spaces/z7u9lztnactc/content_types/pageLanding) */
export type PageLandingSeoFieldsArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  where: InputMaybe<ComponentSeoFilter>;
};

export type PageLandingCollection = {
  __typename?: 'PageLandingCollection';
  items: Array<Maybe<PageLanding>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type PageLandingFeatureCardsCollection = {
  __typename?: 'PageLandingFeatureCardsCollection';
  items: Array<Maybe<ComponentFeature>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export enum PageLandingFeatureCardsCollectionOrder {
  HeadingAsc = 'heading_ASC',
  HeadingDesc = 'heading_DESC',
  InternalIdAsc = 'internalId_ASC',
  InternalIdDesc = 'internalId_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export type PageLandingFilter = {
  AND: InputMaybe<Array<InputMaybe<PageLandingFilter>>>;
  OR: InputMaybe<Array<InputMaybe<PageLandingFilter>>>;
  contentfulMetadata: InputMaybe<ContentfulMetadataFilter>;
  featureCards: InputMaybe<CfComponentFeatureNestedFilter>;
  featureCardsCollection_exists: InputMaybe<Scalars['Boolean']['input']>;
  featuredBlogPost: InputMaybe<CfPageBlogPostNestedFilter>;
  featuredBlogPost_exists: InputMaybe<Scalars['Boolean']['input']>;
  hero: InputMaybe<CfComponentHeroNestedFilter>;
  hero_exists: InputMaybe<Scalars['Boolean']['input']>;
  internalName: InputMaybe<Scalars['String']['input']>;
  internalName_contains: InputMaybe<Scalars['String']['input']>;
  internalName_exists: InputMaybe<Scalars['Boolean']['input']>;
  internalName_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalName_not: InputMaybe<Scalars['String']['input']>;
  internalName_not_contains: InputMaybe<Scalars['String']['input']>;
  internalName_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  seoFields: InputMaybe<CfComponentSeoNestedFilter>;
  seoFields_exists: InputMaybe<Scalars['Boolean']['input']>;
  sys: InputMaybe<SysFilter>;
};

export type PageLandingLinkingCollections = {
  __typename?: 'PageLandingLinkingCollections';
  entryCollection: Maybe<EntryCollection>;
};


export type PageLandingLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum PageLandingOrder {
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

/** [See type definition](https://app.contentful.com/spaces/z7u9lztnactc/content_types/pageService) */
export type PageService = Entry & _Node & {
  __typename?: 'PageService';
  _id: Scalars['ID']['output'];
  contentfulMetadata: ContentfulMetadata;
  internalName: Maybe<Scalars['String']['output']>;
  linkedFrom: Maybe<PageServiceLinkingCollections>;
  pageContent: Maybe<PageServicePageContent>;
  pageSeo: Maybe<ComponentSeo>;
  pageTitle: Maybe<Scalars['String']['output']>;
  slug: Maybe<Scalars['String']['output']>;
  sys: Sys;
};


/** [See type definition](https://app.contentful.com/spaces/z7u9lztnactc/content_types/pageService) */
export type PageServiceInternalNameArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/z7u9lztnactc/content_types/pageService) */
export type PageServiceLinkedFromArgs = {
  allowedLocales: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/z7u9lztnactc/content_types/pageService) */
export type PageServicePageContentArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/z7u9lztnactc/content_types/pageService) */
export type PageServicePageSeoArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  where: InputMaybe<ComponentSeoFilter>;
};


/** [See type definition](https://app.contentful.com/spaces/z7u9lztnactc/content_types/pageService) */
export type PageServicePageTitleArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/z7u9lztnactc/content_types/pageService) */
export type PageServiceSlugArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
};

export type PageServiceCollection = {
  __typename?: 'PageServiceCollection';
  items: Array<Maybe<PageService>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type PageServiceFilter = {
  AND: InputMaybe<Array<InputMaybe<PageServiceFilter>>>;
  OR: InputMaybe<Array<InputMaybe<PageServiceFilter>>>;
  contentfulMetadata: InputMaybe<ContentfulMetadataFilter>;
  internalName: InputMaybe<Scalars['String']['input']>;
  internalName_contains: InputMaybe<Scalars['String']['input']>;
  internalName_exists: InputMaybe<Scalars['Boolean']['input']>;
  internalName_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalName_not: InputMaybe<Scalars['String']['input']>;
  internalName_not_contains: InputMaybe<Scalars['String']['input']>;
  internalName_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  pageContent_contains: InputMaybe<Scalars['String']['input']>;
  pageContent_exists: InputMaybe<Scalars['Boolean']['input']>;
  pageContent_not_contains: InputMaybe<Scalars['String']['input']>;
  pageSeo: InputMaybe<CfComponentSeoNestedFilter>;
  pageSeo_exists: InputMaybe<Scalars['Boolean']['input']>;
  pageTitle: InputMaybe<Scalars['String']['input']>;
  pageTitle_contains: InputMaybe<Scalars['String']['input']>;
  pageTitle_exists: InputMaybe<Scalars['Boolean']['input']>;
  pageTitle_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  pageTitle_not: InputMaybe<Scalars['String']['input']>;
  pageTitle_not_contains: InputMaybe<Scalars['String']['input']>;
  pageTitle_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  slug: InputMaybe<Scalars['String']['input']>;
  slug_contains: InputMaybe<Scalars['String']['input']>;
  slug_exists: InputMaybe<Scalars['Boolean']['input']>;
  slug_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  slug_not: InputMaybe<Scalars['String']['input']>;
  slug_not_contains: InputMaybe<Scalars['String']['input']>;
  slug_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys: InputMaybe<SysFilter>;
};

export type PageServiceLinkingCollections = {
  __typename?: 'PageServiceLinkingCollections';
  entryCollection: Maybe<EntryCollection>;
};


export type PageServiceLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum PageServiceOrder {
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  PageTitleAsc = 'pageTitle_ASC',
  PageTitleDesc = 'pageTitle_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export type PageServicePageContent = {
  __typename?: 'PageServicePageContent';
  json: Scalars['JSON']['output'];
  links: PageServicePageContentLinks;
};

export type PageServicePageContentAssets = {
  __typename?: 'PageServicePageContentAssets';
  block: Array<Maybe<Asset>>;
  hyperlink: Array<Maybe<Asset>>;
};

export type PageServicePageContentEntries = {
  __typename?: 'PageServicePageContentEntries';
  block: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  inline: Array<Maybe<Entry>>;
};

export type PageServicePageContentLinks = {
  __typename?: 'PageServicePageContentLinks';
  assets: PageServicePageContentAssets;
  entries: PageServicePageContentEntries;
  resources: PageServicePageContentResources;
};

export type PageServicePageContentResources = {
  __typename?: 'PageServicePageContentResources';
  block: Array<PageServicePageContentResourcesBlock>;
  hyperlink: Array<PageServicePageContentResourcesHyperlink>;
  inline: Array<PageServicePageContentResourcesInline>;
};

export type PageServicePageContentResourcesBlock = ResourceLink & {
  __typename?: 'PageServicePageContentResourcesBlock';
  sys: ResourceSys;
};

export type PageServicePageContentResourcesHyperlink = ResourceLink & {
  __typename?: 'PageServicePageContentResourcesHyperlink';
  sys: ResourceSys;
};

export type PageServicePageContentResourcesInline = ResourceLink & {
  __typename?: 'PageServicePageContentResourcesInline';
  sys: ResourceSys;
};

export type Query = {
  __typename?: 'Query';
  _node: Maybe<_Node>;
  _nodes: Array<Maybe<_Node>>;
  asset: Maybe<Asset>;
  assetCollection: Maybe<AssetCollection>;
  componentAuthor: Maybe<ComponentAuthor>;
  componentAuthorCollection: Maybe<ComponentAuthorCollection>;
  componentCta: Maybe<ComponentCta>;
  componentCtaCollection: Maybe<ComponentCtaCollection>;
  componentFeature: Maybe<ComponentFeature>;
  componentFeatureCollection: Maybe<ComponentFeatureCollection>;
  componentHero: Maybe<ComponentHero>;
  componentHeroCollection: Maybe<ComponentHeroCollection>;
  componentRichImage: Maybe<ComponentRichImage>;
  componentRichImageCollection: Maybe<ComponentRichImageCollection>;
  componentSeo: Maybe<ComponentSeo>;
  componentSeoCollection: Maybe<ComponentSeoCollection>;
  entryCollection: Maybe<EntryCollection>;
  navigationLink: Maybe<NavigationLink>;
  navigationLinkCollection: Maybe<NavigationLinkCollection>;
  navigationMenu: Maybe<NavigationMenu>;
  navigationMenuCollection: Maybe<NavigationMenuCollection>;
  pageBlogPost: Maybe<PageBlogPost>;
  pageBlogPostCollection: Maybe<PageBlogPostCollection>;
  pageDefault: Maybe<PageDefault>;
  pageDefaultCollection: Maybe<PageDefaultCollection>;
  pageExperience: Maybe<PageExperience>;
  pageExperienceCollection: Maybe<PageExperienceCollection>;
  pageLanding: Maybe<PageLanding>;
  pageLandingCollection: Maybe<PageLandingCollection>;
  pageService: Maybe<PageService>;
  pageServiceCollection: Maybe<PageServiceCollection>;
  settings: Maybe<Settings>;
  settingsCollection: Maybe<SettingsCollection>;
  vq5Hs6VZcdFFqcGewQDi5: Maybe<Vq5Hs6VZcdFFqcGewQDi5>;
  vq5Hs6VZcdFFqcGewQDi5Collection: Maybe<Vq5Hs6VZcdFFqcGewQDi5Collection>;
};


export type Query_NodeArgs = {
  id: Scalars['ID']['input'];
  locale: InputMaybe<Scalars['String']['input']>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
};


export type Query_NodesArgs = {
  ids: Array<Scalars['ID']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryAssetArgs = {
  id: Scalars['String']['input'];
  locale: InputMaybe<Scalars['String']['input']>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryAssetCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  order: InputMaybe<Array<InputMaybe<AssetOrder>>>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where: InputMaybe<AssetFilter>;
};


export type QueryComponentAuthorArgs = {
  id: Scalars['String']['input'];
  locale: InputMaybe<Scalars['String']['input']>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryComponentAuthorCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  order: InputMaybe<Array<InputMaybe<ComponentAuthorOrder>>>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where: InputMaybe<ComponentAuthorFilter>;
};


export type QueryComponentCtaArgs = {
  id: Scalars['String']['input'];
  locale: InputMaybe<Scalars['String']['input']>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryComponentCtaCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  order: InputMaybe<Array<InputMaybe<ComponentCtaOrder>>>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where: InputMaybe<ComponentCtaFilter>;
};


export type QueryComponentFeatureArgs = {
  id: Scalars['String']['input'];
  locale: InputMaybe<Scalars['String']['input']>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryComponentFeatureCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  order: InputMaybe<Array<InputMaybe<ComponentFeatureOrder>>>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where: InputMaybe<ComponentFeatureFilter>;
};


export type QueryComponentHeroArgs = {
  id: Scalars['String']['input'];
  locale: InputMaybe<Scalars['String']['input']>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryComponentHeroCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  order: InputMaybe<Array<InputMaybe<ComponentHeroOrder>>>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where: InputMaybe<ComponentHeroFilter>;
};


export type QueryComponentRichImageArgs = {
  id: Scalars['String']['input'];
  locale: InputMaybe<Scalars['String']['input']>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryComponentRichImageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  order: InputMaybe<Array<InputMaybe<ComponentRichImageOrder>>>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where: InputMaybe<ComponentRichImageFilter>;
};


export type QueryComponentSeoArgs = {
  id: Scalars['String']['input'];
  locale: InputMaybe<Scalars['String']['input']>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryComponentSeoCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  order: InputMaybe<Array<InputMaybe<ComponentSeoOrder>>>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where: InputMaybe<ComponentSeoFilter>;
};


export type QueryEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  order: InputMaybe<Array<InputMaybe<EntryOrder>>>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where: InputMaybe<EntryFilter>;
};


export type QueryNavigationLinkArgs = {
  id: Scalars['String']['input'];
  locale: InputMaybe<Scalars['String']['input']>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryNavigationLinkCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  order: InputMaybe<Array<InputMaybe<NavigationLinkOrder>>>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where: InputMaybe<NavigationLinkFilter>;
};


export type QueryNavigationMenuArgs = {
  id: Scalars['String']['input'];
  locale: InputMaybe<Scalars['String']['input']>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryNavigationMenuCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  order: InputMaybe<Array<InputMaybe<NavigationMenuOrder>>>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where: InputMaybe<NavigationMenuFilter>;
};


export type QueryPageBlogPostArgs = {
  id: Scalars['String']['input'];
  locale: InputMaybe<Scalars['String']['input']>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryPageBlogPostCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  order: InputMaybe<Array<InputMaybe<PageBlogPostOrder>>>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where: InputMaybe<PageBlogPostFilter>;
};


export type QueryPageDefaultArgs = {
  id: Scalars['String']['input'];
  locale: InputMaybe<Scalars['String']['input']>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryPageDefaultCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  order: InputMaybe<Array<InputMaybe<PageDefaultOrder>>>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where: InputMaybe<PageDefaultFilter>;
};


export type QueryPageExperienceArgs = {
  id: Scalars['String']['input'];
  locale: InputMaybe<Scalars['String']['input']>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryPageExperienceCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  order: InputMaybe<Array<InputMaybe<PageExperienceOrder>>>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where: InputMaybe<PageExperienceFilter>;
};


export type QueryPageLandingArgs = {
  id: Scalars['String']['input'];
  locale: InputMaybe<Scalars['String']['input']>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryPageLandingCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  order: InputMaybe<Array<InputMaybe<PageLandingOrder>>>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where: InputMaybe<PageLandingFilter>;
};


export type QueryPageServiceArgs = {
  id: Scalars['String']['input'];
  locale: InputMaybe<Scalars['String']['input']>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryPageServiceCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  order: InputMaybe<Array<InputMaybe<PageServiceOrder>>>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where: InputMaybe<PageServiceFilter>;
};


export type QuerySettingsArgs = {
  id: Scalars['String']['input'];
  locale: InputMaybe<Scalars['String']['input']>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
};


export type QuerySettingsCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  order: InputMaybe<Array<InputMaybe<SettingsOrder>>>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where: InputMaybe<SettingsFilter>;
};


export type QueryVq5Hs6VZcdFFqcGewQDi5Args = {
  id: Scalars['String']['input'];
  locale: InputMaybe<Scalars['String']['input']>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryVq5Hs6VZcdFFqcGewQDi5CollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  order: InputMaybe<Array<InputMaybe<Vq5Hs6VZcdFFqcGewQDi5Order>>>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where: InputMaybe<Vq5Hs6VZcdFFqcGewQDi5Filter>;
};

export type ResourceLink = {
  sys: ResourceSys;
};

export type ResourceSys = {
  __typename?: 'ResourceSys';
  linkType: Scalars['String']['output'];
  urn: Scalars['String']['output'];
};

/** [See type definition](https://app.contentful.com/spaces/z7u9lztnactc/content_types/settings) */
export type Settings = Entry & _Node & {
  __typename?: 'Settings';
  _id: Scalars['ID']['output'];
  brandingDogNoShadow: Maybe<Asset>;
  brandingDogShadow: Maybe<Asset>;
  brandingFull: Maybe<Asset>;
  brandingKatakanShadow: Maybe<Asset>;
  brandingKatakanaNoShadow: Maybe<Asset>;
  brandingTextNoShadow: Maybe<Asset>;
  brandingTextShadow: Maybe<Asset>;
  contentfulMetadata: ContentfulMetadata;
  footerCopyrightText: Maybe<Scalars['String']['output']>;
  footerLegalNavigationCollection: Maybe<SettingsFooterLegalNavigationCollection>;
  footerServicesNavigationCollection: Maybe<SettingsFooterServicesNavigationCollection>;
  footerSiteNavigationCollection: Maybe<SettingsFooterSiteNavigationCollection>;
  headerNavigationCollection: Maybe<SettingsHeaderNavigationCollection>;
  internalName: Maybe<Scalars['String']['output']>;
  linkedFrom: Maybe<SettingsLinkingCollections>;
  logo: Maybe<Asset>;
  seo: Maybe<ComponentSeo>;
  siteDescription: Maybe<Scalars['String']['output']>;
  siteTitle: Maybe<Scalars['String']['output']>;
  socialLinksCollection: Maybe<SettingsSocialLinksCollection>;
  sys: Sys;
};


/** [See type definition](https://app.contentful.com/spaces/z7u9lztnactc/content_types/settings) */
export type SettingsBrandingDogNoShadowArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/z7u9lztnactc/content_types/settings) */
export type SettingsBrandingDogShadowArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/z7u9lztnactc/content_types/settings) */
export type SettingsBrandingFullArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/z7u9lztnactc/content_types/settings) */
export type SettingsBrandingKatakanShadowArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/z7u9lztnactc/content_types/settings) */
export type SettingsBrandingKatakanaNoShadowArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/z7u9lztnactc/content_types/settings) */
export type SettingsBrandingTextNoShadowArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/z7u9lztnactc/content_types/settings) */
export type SettingsBrandingTextShadowArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/z7u9lztnactc/content_types/settings) */
export type SettingsFooterCopyrightTextArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/z7u9lztnactc/content_types/settings) */
export type SettingsFooterLegalNavigationCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  order: InputMaybe<Array<InputMaybe<SettingsFooterLegalNavigationCollectionOrder>>>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where: InputMaybe<NavigationLinkFilter>;
};


/** [See type definition](https://app.contentful.com/spaces/z7u9lztnactc/content_types/settings) */
export type SettingsFooterServicesNavigationCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  order: InputMaybe<Array<InputMaybe<SettingsFooterServicesNavigationCollectionOrder>>>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where: InputMaybe<NavigationLinkFilter>;
};


/** [See type definition](https://app.contentful.com/spaces/z7u9lztnactc/content_types/settings) */
export type SettingsFooterSiteNavigationCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  order: InputMaybe<Array<InputMaybe<SettingsFooterSiteNavigationCollectionOrder>>>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where: InputMaybe<NavigationLinkFilter>;
};


/** [See type definition](https://app.contentful.com/spaces/z7u9lztnactc/content_types/settings) */
export type SettingsHeaderNavigationCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  order: InputMaybe<Array<InputMaybe<SettingsHeaderNavigationCollectionOrder>>>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where: InputMaybe<NavigationLinkFilter>;
};


/** [See type definition](https://app.contentful.com/spaces/z7u9lztnactc/content_types/settings) */
export type SettingsInternalNameArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/z7u9lztnactc/content_types/settings) */
export type SettingsLinkedFromArgs = {
  allowedLocales: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/z7u9lztnactc/content_types/settings) */
export type SettingsLogoArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/z7u9lztnactc/content_types/settings) */
export type SettingsSeoArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  where: InputMaybe<ComponentSeoFilter>;
};


/** [See type definition](https://app.contentful.com/spaces/z7u9lztnactc/content_types/settings) */
export type SettingsSiteDescriptionArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/z7u9lztnactc/content_types/settings) */
export type SettingsSiteTitleArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/z7u9lztnactc/content_types/settings) */
export type SettingsSocialLinksCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  order: InputMaybe<Array<InputMaybe<SettingsSocialLinksCollectionOrder>>>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where: InputMaybe<NavigationLinkFilter>;
};

export type SettingsCollection = {
  __typename?: 'SettingsCollection';
  items: Array<Maybe<Settings>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type SettingsFilter = {
  AND: InputMaybe<Array<InputMaybe<SettingsFilter>>>;
  OR: InputMaybe<Array<InputMaybe<SettingsFilter>>>;
  brandingDogNoShadow_exists: InputMaybe<Scalars['Boolean']['input']>;
  brandingDogShadow_exists: InputMaybe<Scalars['Boolean']['input']>;
  brandingFull_exists: InputMaybe<Scalars['Boolean']['input']>;
  brandingKatakanShadow_exists: InputMaybe<Scalars['Boolean']['input']>;
  brandingKatakanaNoShadow_exists: InputMaybe<Scalars['Boolean']['input']>;
  brandingTextNoShadow_exists: InputMaybe<Scalars['Boolean']['input']>;
  brandingTextShadow_exists: InputMaybe<Scalars['Boolean']['input']>;
  contentfulMetadata: InputMaybe<ContentfulMetadataFilter>;
  footerCopyrightText: InputMaybe<Scalars['String']['input']>;
  footerCopyrightText_contains: InputMaybe<Scalars['String']['input']>;
  footerCopyrightText_exists: InputMaybe<Scalars['Boolean']['input']>;
  footerCopyrightText_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  footerCopyrightText_not: InputMaybe<Scalars['String']['input']>;
  footerCopyrightText_not_contains: InputMaybe<Scalars['String']['input']>;
  footerCopyrightText_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  footerLegalNavigation: InputMaybe<CfNavigationLinkNestedFilter>;
  footerLegalNavigationCollection_exists: InputMaybe<Scalars['Boolean']['input']>;
  footerServicesNavigation: InputMaybe<CfNavigationLinkNestedFilter>;
  footerServicesNavigationCollection_exists: InputMaybe<Scalars['Boolean']['input']>;
  footerSiteNavigation: InputMaybe<CfNavigationLinkNestedFilter>;
  footerSiteNavigationCollection_exists: InputMaybe<Scalars['Boolean']['input']>;
  headerNavigation: InputMaybe<CfNavigationLinkNestedFilter>;
  headerNavigationCollection_exists: InputMaybe<Scalars['Boolean']['input']>;
  internalName: InputMaybe<Scalars['String']['input']>;
  internalName_contains: InputMaybe<Scalars['String']['input']>;
  internalName_exists: InputMaybe<Scalars['Boolean']['input']>;
  internalName_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalName_not: InputMaybe<Scalars['String']['input']>;
  internalName_not_contains: InputMaybe<Scalars['String']['input']>;
  internalName_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  logo_exists: InputMaybe<Scalars['Boolean']['input']>;
  seo: InputMaybe<CfComponentSeoNestedFilter>;
  seo_exists: InputMaybe<Scalars['Boolean']['input']>;
  siteDescription: InputMaybe<Scalars['String']['input']>;
  siteDescription_contains: InputMaybe<Scalars['String']['input']>;
  siteDescription_exists: InputMaybe<Scalars['Boolean']['input']>;
  siteDescription_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  siteDescription_not: InputMaybe<Scalars['String']['input']>;
  siteDescription_not_contains: InputMaybe<Scalars['String']['input']>;
  siteDescription_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  siteTitle: InputMaybe<Scalars['String']['input']>;
  siteTitle_contains: InputMaybe<Scalars['String']['input']>;
  siteTitle_exists: InputMaybe<Scalars['Boolean']['input']>;
  siteTitle_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  siteTitle_not: InputMaybe<Scalars['String']['input']>;
  siteTitle_not_contains: InputMaybe<Scalars['String']['input']>;
  siteTitle_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  socialLinks: InputMaybe<CfNavigationLinkNestedFilter>;
  socialLinksCollection_exists: InputMaybe<Scalars['Boolean']['input']>;
  sys: InputMaybe<SysFilter>;
};

export type SettingsFooterLegalNavigationCollection = {
  __typename?: 'SettingsFooterLegalNavigationCollection';
  items: Array<Maybe<NavigationLink>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export enum SettingsFooterLegalNavigationCollectionOrder {
  HrefAsc = 'href_ASC',
  HrefDesc = 'href_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export type SettingsFooterServicesNavigationCollection = {
  __typename?: 'SettingsFooterServicesNavigationCollection';
  items: Array<Maybe<NavigationLink>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export enum SettingsFooterServicesNavigationCollectionOrder {
  HrefAsc = 'href_ASC',
  HrefDesc = 'href_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export type SettingsFooterSiteNavigationCollection = {
  __typename?: 'SettingsFooterSiteNavigationCollection';
  items: Array<Maybe<NavigationLink>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export enum SettingsFooterSiteNavigationCollectionOrder {
  HrefAsc = 'href_ASC',
  HrefDesc = 'href_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export type SettingsHeaderNavigationCollection = {
  __typename?: 'SettingsHeaderNavigationCollection';
  items: Array<Maybe<NavigationLink>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export enum SettingsHeaderNavigationCollectionOrder {
  HrefAsc = 'href_ASC',
  HrefDesc = 'href_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export type SettingsLinkingCollections = {
  __typename?: 'SettingsLinkingCollections';
  entryCollection: Maybe<EntryCollection>;
};


export type SettingsLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum SettingsOrder {
  FooterCopyrightTextAsc = 'footerCopyrightText_ASC',
  FooterCopyrightTextDesc = 'footerCopyrightText_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  SiteDescriptionAsc = 'siteDescription_ASC',
  SiteDescriptionDesc = 'siteDescription_DESC',
  SiteTitleAsc = 'siteTitle_ASC',
  SiteTitleDesc = 'siteTitle_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export type SettingsSocialLinksCollection = {
  __typename?: 'SettingsSocialLinksCollection';
  items: Array<Maybe<NavigationLink>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export enum SettingsSocialLinksCollectionOrder {
  HrefAsc = 'href_ASC',
  HrefDesc = 'href_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export type Sys = {
  __typename?: 'Sys';
  environmentId: Scalars['String']['output'];
  firstPublishedAt: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['String']['output'];
  /** The locale that was requested. */
  locale: Maybe<Scalars['String']['output']>;
  publishedAt: Maybe<Scalars['DateTime']['output']>;
  publishedVersion: Maybe<Scalars['Int']['output']>;
  spaceId: Scalars['String']['output'];
};

export type SysFilter = {
  firstPublishedAt: InputMaybe<Scalars['DateTime']['input']>;
  firstPublishedAt_exists: InputMaybe<Scalars['Boolean']['input']>;
  firstPublishedAt_gt: InputMaybe<Scalars['DateTime']['input']>;
  firstPublishedAt_gte: InputMaybe<Scalars['DateTime']['input']>;
  firstPublishedAt_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  firstPublishedAt_lt: InputMaybe<Scalars['DateTime']['input']>;
  firstPublishedAt_lte: InputMaybe<Scalars['DateTime']['input']>;
  firstPublishedAt_not: InputMaybe<Scalars['DateTime']['input']>;
  firstPublishedAt_not_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  id: InputMaybe<Scalars['String']['input']>;
  id_contains: InputMaybe<Scalars['String']['input']>;
  id_exists: InputMaybe<Scalars['Boolean']['input']>;
  id_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id_not: InputMaybe<Scalars['String']['input']>;
  id_not_contains: InputMaybe<Scalars['String']['input']>;
  id_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  publishedAt: InputMaybe<Scalars['DateTime']['input']>;
  publishedAt_exists: InputMaybe<Scalars['Boolean']['input']>;
  publishedAt_gt: InputMaybe<Scalars['DateTime']['input']>;
  publishedAt_gte: InputMaybe<Scalars['DateTime']['input']>;
  publishedAt_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedAt_lt: InputMaybe<Scalars['DateTime']['input']>;
  publishedAt_lte: InputMaybe<Scalars['DateTime']['input']>;
  publishedAt_not: InputMaybe<Scalars['DateTime']['input']>;
  publishedAt_not_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedVersion: InputMaybe<Scalars['Float']['input']>;
  publishedVersion_exists: InputMaybe<Scalars['Boolean']['input']>;
  publishedVersion_gt: InputMaybe<Scalars['Float']['input']>;
  publishedVersion_gte: InputMaybe<Scalars['Float']['input']>;
  publishedVersion_in: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  publishedVersion_lt: InputMaybe<Scalars['Float']['input']>;
  publishedVersion_lte: InputMaybe<Scalars['Float']['input']>;
  publishedVersion_not: InputMaybe<Scalars['Float']['input']>;
  publishedVersion_not_in: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
};

/**
 * Represents a taxonomy concept entity for finding and organizing content easily.
 *         Find out more here: https://www.contentful.com/developers/docs/references/content-delivery-api/#/reference/content-concepts
 */
export type TaxonomyConcept = {
  __typename?: 'TaxonomyConcept';
  id: Maybe<Scalars['String']['output']>;
};

/** [See type definition](https://app.contentful.com/spaces/z7u9lztnactc/content_types/Vq5Hs6vZcdFFqcGewQDi5) */
export type Vq5Hs6VZcdFFqcGewQDi5 = Entry & _Node & {
  __typename?: 'Vq5Hs6VZcdFFqcGewQDi5';
  _id: Scalars['ID']['output'];
  contentfulMetadata: ContentfulMetadata;
  description: Maybe<Scalars['String']['output']>;
  image: Maybe<Asset>;
  linkedFrom: Maybe<Vq5Hs6VZcdFFqcGewQDi5LinkingCollections>;
  sys: Sys;
  title: Maybe<Scalars['String']['output']>;
  url: Maybe<Scalars['String']['output']>;
};


/** [See type definition](https://app.contentful.com/spaces/z7u9lztnactc/content_types/Vq5Hs6vZcdFFqcGewQDi5) */
export type Vq5Hs6VZcdFFqcGewQDi5DescriptionArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/z7u9lztnactc/content_types/Vq5Hs6vZcdFFqcGewQDi5) */
export type Vq5Hs6VZcdFFqcGewQDi5ImageArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/z7u9lztnactc/content_types/Vq5Hs6vZcdFFqcGewQDi5) */
export type Vq5Hs6VZcdFFqcGewQDi5LinkedFromArgs = {
  allowedLocales: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/z7u9lztnactc/content_types/Vq5Hs6vZcdFFqcGewQDi5) */
export type Vq5Hs6VZcdFFqcGewQDi5TitleArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/z7u9lztnactc/content_types/Vq5Hs6vZcdFFqcGewQDi5) */
export type Vq5Hs6VZcdFFqcGewQDi5UrlArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
};

export type Vq5Hs6VZcdFFqcGewQDi5Collection = {
  __typename?: 'Vq5Hs6VZcdFFqcGewQDi5Collection';
  items: Array<Maybe<Vq5Hs6VZcdFFqcGewQDi5>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type Vq5Hs6VZcdFFqcGewQDi5Filter = {
  AND: InputMaybe<Array<InputMaybe<Vq5Hs6VZcdFFqcGewQDi5Filter>>>;
  OR: InputMaybe<Array<InputMaybe<Vq5Hs6VZcdFFqcGewQDi5Filter>>>;
  contentfulMetadata: InputMaybe<ContentfulMetadataFilter>;
  description: InputMaybe<Scalars['String']['input']>;
  description_contains: InputMaybe<Scalars['String']['input']>;
  description_exists: InputMaybe<Scalars['Boolean']['input']>;
  description_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  description_not: InputMaybe<Scalars['String']['input']>;
  description_not_contains: InputMaybe<Scalars['String']['input']>;
  description_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  image_exists: InputMaybe<Scalars['Boolean']['input']>;
  sys: InputMaybe<SysFilter>;
  title: InputMaybe<Scalars['String']['input']>;
  title_contains: InputMaybe<Scalars['String']['input']>;
  title_exists: InputMaybe<Scalars['Boolean']['input']>;
  title_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_not: InputMaybe<Scalars['String']['input']>;
  title_not_contains: InputMaybe<Scalars['String']['input']>;
  title_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  url: InputMaybe<Scalars['String']['input']>;
  url_contains: InputMaybe<Scalars['String']['input']>;
  url_exists: InputMaybe<Scalars['Boolean']['input']>;
  url_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  url_not: InputMaybe<Scalars['String']['input']>;
  url_not_contains: InputMaybe<Scalars['String']['input']>;
  url_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Vq5Hs6VZcdFFqcGewQDi5LinkingCollections = {
  __typename?: 'Vq5Hs6VZcdFFqcGewQDi5LinkingCollections';
  entryCollection: Maybe<EntryCollection>;
};


export type Vq5Hs6VZcdFFqcGewQDi5LinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum Vq5Hs6VZcdFFqcGewQDi5Order {
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export type _Node = {
  _id: Scalars['ID']['output'];
};

export type CfComponentAuthorNestedFilter = {
  AND: InputMaybe<Array<InputMaybe<CfComponentAuthorNestedFilter>>>;
  OR: InputMaybe<Array<InputMaybe<CfComponentAuthorNestedFilter>>>;
  avatar_exists: InputMaybe<Scalars['Boolean']['input']>;
  contentfulMetadata: InputMaybe<ContentfulMetadataFilter>;
  internalName: InputMaybe<Scalars['String']['input']>;
  internalName_contains: InputMaybe<Scalars['String']['input']>;
  internalName_exists: InputMaybe<Scalars['Boolean']['input']>;
  internalName_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalName_not: InputMaybe<Scalars['String']['input']>;
  internalName_not_contains: InputMaybe<Scalars['String']['input']>;
  internalName_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  name: InputMaybe<Scalars['String']['input']>;
  name_contains: InputMaybe<Scalars['String']['input']>;
  name_exists: InputMaybe<Scalars['Boolean']['input']>;
  name_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  name_not: InputMaybe<Scalars['String']['input']>;
  name_not_contains: InputMaybe<Scalars['String']['input']>;
  name_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys: InputMaybe<SysFilter>;
};

export type CfComponentCtaNestedFilter = {
  AND: InputMaybe<Array<InputMaybe<CfComponentCtaNestedFilter>>>;
  OR: InputMaybe<Array<InputMaybe<CfComponentCtaNestedFilter>>>;
  contentfulMetadata: InputMaybe<ContentfulMetadataFilter>;
  ctaLink: InputMaybe<Scalars['String']['input']>;
  ctaLink_contains: InputMaybe<Scalars['String']['input']>;
  ctaLink_exists: InputMaybe<Scalars['Boolean']['input']>;
  ctaLink_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  ctaLink_not: InputMaybe<Scalars['String']['input']>;
  ctaLink_not_contains: InputMaybe<Scalars['String']['input']>;
  ctaLink_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  ctaText: InputMaybe<Scalars['String']['input']>;
  ctaText_contains: InputMaybe<Scalars['String']['input']>;
  ctaText_exists: InputMaybe<Scalars['Boolean']['input']>;
  ctaText_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  ctaText_not: InputMaybe<Scalars['String']['input']>;
  ctaText_not_contains: InputMaybe<Scalars['String']['input']>;
  ctaText_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  icon_exists: InputMaybe<Scalars['Boolean']['input']>;
  internalName: InputMaybe<Scalars['String']['input']>;
  internalName_contains: InputMaybe<Scalars['String']['input']>;
  internalName_exists: InputMaybe<Scalars['Boolean']['input']>;
  internalName_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalName_not: InputMaybe<Scalars['String']['input']>;
  internalName_not_contains: InputMaybe<Scalars['String']['input']>;
  internalName_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys: InputMaybe<SysFilter>;
};

export type CfComponentFeatureNestedFilter = {
  AND: InputMaybe<Array<InputMaybe<CfComponentFeatureNestedFilter>>>;
  OR: InputMaybe<Array<InputMaybe<CfComponentFeatureNestedFilter>>>;
  contentfulMetadata: InputMaybe<ContentfulMetadataFilter>;
  description: InputMaybe<Scalars['String']['input']>;
  description_contains: InputMaybe<Scalars['String']['input']>;
  description_exists: InputMaybe<Scalars['Boolean']['input']>;
  description_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  description_not: InputMaybe<Scalars['String']['input']>;
  description_not_contains: InputMaybe<Scalars['String']['input']>;
  description_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  heading: InputMaybe<Scalars['String']['input']>;
  heading_contains: InputMaybe<Scalars['String']['input']>;
  heading_exists: InputMaybe<Scalars['Boolean']['input']>;
  heading_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  heading_not: InputMaybe<Scalars['String']['input']>;
  heading_not_contains: InputMaybe<Scalars['String']['input']>;
  heading_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  image_exists: InputMaybe<Scalars['Boolean']['input']>;
  internalId: InputMaybe<Scalars['String']['input']>;
  internalId_contains: InputMaybe<Scalars['String']['input']>;
  internalId_exists: InputMaybe<Scalars['Boolean']['input']>;
  internalId_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalId_not: InputMaybe<Scalars['String']['input']>;
  internalId_not_contains: InputMaybe<Scalars['String']['input']>;
  internalId_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  link_exists: InputMaybe<Scalars['Boolean']['input']>;
  sys: InputMaybe<SysFilter>;
};

export type CfComponentHeroNestedFilter = {
  AND: InputMaybe<Array<InputMaybe<CfComponentHeroNestedFilter>>>;
  OR: InputMaybe<Array<InputMaybe<CfComponentHeroNestedFilter>>>;
  contentfulMetadata: InputMaybe<ContentfulMetadataFilter>;
  ctaFieldsCollection_exists: InputMaybe<Scalars['Boolean']['input']>;
  heading: InputMaybe<Scalars['String']['input']>;
  heading_contains: InputMaybe<Scalars['String']['input']>;
  heading_exists: InputMaybe<Scalars['Boolean']['input']>;
  heading_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  heading_not: InputMaybe<Scalars['String']['input']>;
  heading_not_contains: InputMaybe<Scalars['String']['input']>;
  heading_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  heroImage_exists: InputMaybe<Scalars['Boolean']['input']>;
  internalName: InputMaybe<Scalars['String']['input']>;
  internalName_contains: InputMaybe<Scalars['String']['input']>;
  internalName_exists: InputMaybe<Scalars['Boolean']['input']>;
  internalName_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalName_not: InputMaybe<Scalars['String']['input']>;
  internalName_not_contains: InputMaybe<Scalars['String']['input']>;
  internalName_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  subHeading: InputMaybe<Scalars['String']['input']>;
  subHeading_contains: InputMaybe<Scalars['String']['input']>;
  subHeading_exists: InputMaybe<Scalars['Boolean']['input']>;
  subHeading_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  subHeading_not: InputMaybe<Scalars['String']['input']>;
  subHeading_not_contains: InputMaybe<Scalars['String']['input']>;
  subHeading_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys: InputMaybe<SysFilter>;
};

export type CfComponentSeoNestedFilter = {
  AND: InputMaybe<Array<InputMaybe<CfComponentSeoNestedFilter>>>;
  OR: InputMaybe<Array<InputMaybe<CfComponentSeoNestedFilter>>>;
  canonicalUrl: InputMaybe<Scalars['String']['input']>;
  canonicalUrl_contains: InputMaybe<Scalars['String']['input']>;
  canonicalUrl_exists: InputMaybe<Scalars['Boolean']['input']>;
  canonicalUrl_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  canonicalUrl_not: InputMaybe<Scalars['String']['input']>;
  canonicalUrl_not_contains: InputMaybe<Scalars['String']['input']>;
  canonicalUrl_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contentfulMetadata: InputMaybe<ContentfulMetadataFilter>;
  internalName: InputMaybe<Scalars['String']['input']>;
  internalName_contains: InputMaybe<Scalars['String']['input']>;
  internalName_exists: InputMaybe<Scalars['Boolean']['input']>;
  internalName_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalName_not: InputMaybe<Scalars['String']['input']>;
  internalName_not_contains: InputMaybe<Scalars['String']['input']>;
  internalName_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  nofollow: InputMaybe<Scalars['Boolean']['input']>;
  nofollow_exists: InputMaybe<Scalars['Boolean']['input']>;
  nofollow_not: InputMaybe<Scalars['Boolean']['input']>;
  noindex: InputMaybe<Scalars['Boolean']['input']>;
  noindex_exists: InputMaybe<Scalars['Boolean']['input']>;
  noindex_not: InputMaybe<Scalars['Boolean']['input']>;
  pageDescription: InputMaybe<Scalars['String']['input']>;
  pageDescription_contains: InputMaybe<Scalars['String']['input']>;
  pageDescription_exists: InputMaybe<Scalars['Boolean']['input']>;
  pageDescription_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  pageDescription_not: InputMaybe<Scalars['String']['input']>;
  pageDescription_not_contains: InputMaybe<Scalars['String']['input']>;
  pageDescription_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  pageTitle: InputMaybe<Scalars['String']['input']>;
  pageTitle_contains: InputMaybe<Scalars['String']['input']>;
  pageTitle_exists: InputMaybe<Scalars['Boolean']['input']>;
  pageTitle_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  pageTitle_not: InputMaybe<Scalars['String']['input']>;
  pageTitle_not_contains: InputMaybe<Scalars['String']['input']>;
  pageTitle_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  shareImagesCollection_exists: InputMaybe<Scalars['Boolean']['input']>;
  sys: InputMaybe<SysFilter>;
};

export type CfNavigationLinkNestedFilter = {
  AND: InputMaybe<Array<InputMaybe<CfNavigationLinkNestedFilter>>>;
  OR: InputMaybe<Array<InputMaybe<CfNavigationLinkNestedFilter>>>;
  contentfulMetadata: InputMaybe<ContentfulMetadataFilter>;
  href: InputMaybe<Scalars['String']['input']>;
  href_contains: InputMaybe<Scalars['String']['input']>;
  href_exists: InputMaybe<Scalars['Boolean']['input']>;
  href_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  href_not: InputMaybe<Scalars['String']['input']>;
  href_not_contains: InputMaybe<Scalars['String']['input']>;
  href_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  icon_exists: InputMaybe<Scalars['Boolean']['input']>;
  image_exists: InputMaybe<Scalars['Boolean']['input']>;
  internalName: InputMaybe<Scalars['String']['input']>;
  internalName_contains: InputMaybe<Scalars['String']['input']>;
  internalName_exists: InputMaybe<Scalars['Boolean']['input']>;
  internalName_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalName_not: InputMaybe<Scalars['String']['input']>;
  internalName_not_contains: InputMaybe<Scalars['String']['input']>;
  internalName_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  subnavigationCollection_exists: InputMaybe<Scalars['Boolean']['input']>;
  sys: InputMaybe<SysFilter>;
  title: InputMaybe<Scalars['String']['input']>;
  title_contains: InputMaybe<Scalars['String']['input']>;
  title_exists: InputMaybe<Scalars['Boolean']['input']>;
  title_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_not: InputMaybe<Scalars['String']['input']>;
  title_not_contains: InputMaybe<Scalars['String']['input']>;
  title_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type CfPageBlogPostNestedFilter = {
  AND: InputMaybe<Array<InputMaybe<CfPageBlogPostNestedFilter>>>;
  OR: InputMaybe<Array<InputMaybe<CfPageBlogPostNestedFilter>>>;
  author_exists: InputMaybe<Scalars['Boolean']['input']>;
  content_contains: InputMaybe<Scalars['String']['input']>;
  content_exists: InputMaybe<Scalars['Boolean']['input']>;
  content_not_contains: InputMaybe<Scalars['String']['input']>;
  contentfulMetadata: InputMaybe<ContentfulMetadataFilter>;
  featuredImage_exists: InputMaybe<Scalars['Boolean']['input']>;
  internalName: InputMaybe<Scalars['String']['input']>;
  internalName_contains: InputMaybe<Scalars['String']['input']>;
  internalName_exists: InputMaybe<Scalars['Boolean']['input']>;
  internalName_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalName_not: InputMaybe<Scalars['String']['input']>;
  internalName_not_contains: InputMaybe<Scalars['String']['input']>;
  internalName_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  publishedDate: InputMaybe<Scalars['DateTime']['input']>;
  publishedDate_exists: InputMaybe<Scalars['Boolean']['input']>;
  publishedDate_gt: InputMaybe<Scalars['DateTime']['input']>;
  publishedDate_gte: InputMaybe<Scalars['DateTime']['input']>;
  publishedDate_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedDate_lt: InputMaybe<Scalars['DateTime']['input']>;
  publishedDate_lte: InputMaybe<Scalars['DateTime']['input']>;
  publishedDate_not: InputMaybe<Scalars['DateTime']['input']>;
  publishedDate_not_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  relatedBlogPostsCollection_exists: InputMaybe<Scalars['Boolean']['input']>;
  seoFields_exists: InputMaybe<Scalars['Boolean']['input']>;
  shortDescription: InputMaybe<Scalars['String']['input']>;
  shortDescription_contains: InputMaybe<Scalars['String']['input']>;
  shortDescription_exists: InputMaybe<Scalars['Boolean']['input']>;
  shortDescription_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  shortDescription_not: InputMaybe<Scalars['String']['input']>;
  shortDescription_not_contains: InputMaybe<Scalars['String']['input']>;
  shortDescription_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  slug: InputMaybe<Scalars['String']['input']>;
  slug_contains: InputMaybe<Scalars['String']['input']>;
  slug_exists: InputMaybe<Scalars['Boolean']['input']>;
  slug_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  slug_not: InputMaybe<Scalars['String']['input']>;
  slug_not_contains: InputMaybe<Scalars['String']['input']>;
  slug_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys: InputMaybe<SysFilter>;
  title: InputMaybe<Scalars['String']['input']>;
  title_contains: InputMaybe<Scalars['String']['input']>;
  title_exists: InputMaybe<Scalars['Boolean']['input']>;
  title_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_not: InputMaybe<Scalars['String']['input']>;
  title_not_contains: InputMaybe<Scalars['String']['input']>;
  title_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type AssetFragmentFragment = { __typename?: 'Asset', title: string | null, description: string | null, contentType: string | null, fileName: string | null, width: number | null, height: number | null, url: string | null, sys: { __typename?: 'Sys', id: string } };

export type SeoFragmentFragment = { __typename?: 'ComponentSeo', pageTitle: string | null, pageDescription: string | null, canonicalUrl: string | null, nofollow: boolean | null, noindex: boolean | null, sys: { __typename?: 'Sys', id: string }, shareImagesCollection: { __typename?: 'AssetCollection', items: Array<{ __typename?: 'Asset', title: string | null, description: string | null, contentType: string | null, fileName: string | null, width: number | null, height: number | null, url: string | null, sys: { __typename?: 'Sys', id: string } } | null> } | null };

export type CtaFragmentFragment = { __typename?: 'ComponentCta', ctaText: string | null, ctaLink: string | null, sys: { __typename?: 'Sys', id: string }, icon: { __typename?: 'Asset', title: string | null, description: string | null, contentType: string | null, fileName: string | null, width: number | null, height: number | null, url: string | null, sys: { __typename?: 'Sys', id: string } } | null };

export type HeroFragmentFragment = { __typename?: 'ComponentHero', internalName: string | null, heading: string | null, subHeading: string | null, sys: { __typename?: 'Sys', id: string }, heroImage: { __typename?: 'Asset', title: string | null, description: string | null, contentType: string | null, fileName: string | null, width: number | null, height: number | null, url: string | null, sys: { __typename?: 'Sys', id: string } } | null, ctaFieldsCollection: { __typename?: 'ComponentHeroCtaFieldsCollection', items: Array<{ __typename?: 'ComponentCta', ctaText: string | null, ctaLink: string | null, sys: { __typename?: 'Sys', id: string }, icon: { __typename?: 'Asset', title: string | null, description: string | null, contentType: string | null, fileName: string | null, width: number | null, height: number | null, url: string | null, sys: { __typename?: 'Sys', id: string } } | null } | null> } | null };

export type BlogPostPreviewFragmentFragment = { __typename?: 'PageBlogPost', internalName: string | null, title: string | null, slug: string | null, publishedDate: string | null, shortDescription: string | null, sys: { __typename?: 'Sys', id: string }, featuredImage: { __typename?: 'Asset', title: string | null, description: string | null, contentType: string | null, fileName: string | null, width: number | null, height: number | null, url: string | null, sys: { __typename?: 'Sys', id: string } } | null, author: { __typename?: 'ComponentAuthor', name: string | null, sys: { __typename?: 'Sys', id: string }, avatar: { __typename?: 'Asset', title: string | null, description: string | null, contentType: string | null, fileName: string | null, width: number | null, height: number | null, url: string | null, sys: { __typename?: 'Sys', id: string } } | null } | null };

export type LandingPageFragmentFragment = { __typename?: 'PageLanding', internalName: string | null, sys: { __typename?: 'Sys', id: string }, hero: { __typename?: 'ComponentHero', internalName: string | null, heading: string | null, subHeading: string | null, sys: { __typename?: 'Sys', id: string }, heroImage: { __typename?: 'Asset', title: string | null, description: string | null, contentType: string | null, fileName: string | null, width: number | null, height: number | null, url: string | null, sys: { __typename?: 'Sys', id: string } } | null, ctaFieldsCollection: { __typename?: 'ComponentHeroCtaFieldsCollection', items: Array<{ __typename?: 'ComponentCta', ctaText: string | null, ctaLink: string | null, sys: { __typename?: 'Sys', id: string }, icon: { __typename?: 'Asset', title: string | null, description: string | null, contentType: string | null, fileName: string | null, width: number | null, height: number | null, url: string | null, sys: { __typename?: 'Sys', id: string } } | null } | null> } | null } | null, featuredBlogPost: { __typename?: 'PageBlogPost', internalName: string | null, title: string | null, slug: string | null, publishedDate: string | null, shortDescription: string | null, sys: { __typename?: 'Sys', id: string }, featuredImage: { __typename?: 'Asset', title: string | null, description: string | null, contentType: string | null, fileName: string | null, width: number | null, height: number | null, url: string | null, sys: { __typename?: 'Sys', id: string } } | null, author: { __typename?: 'ComponentAuthor', name: string | null, sys: { __typename?: 'Sys', id: string }, avatar: { __typename?: 'Asset', title: string | null, description: string | null, contentType: string | null, fileName: string | null, width: number | null, height: number | null, url: string | null, sys: { __typename?: 'Sys', id: string } } | null } | null } | null, seoFields: { __typename?: 'ComponentSeo', pageTitle: string | null, pageDescription: string | null, canonicalUrl: string | null, nofollow: boolean | null, noindex: boolean | null, sys: { __typename?: 'Sys', id: string }, shareImagesCollection: { __typename?: 'AssetCollection', items: Array<{ __typename?: 'Asset', title: string | null, description: string | null, contentType: string | null, fileName: string | null, width: number | null, height: number | null, url: string | null, sys: { __typename?: 'Sys', id: string } } | null> } | null } | null };

export type LandingPageByIdDataFragment = { __typename?: 'PageLanding', internalName: string | null, sys: { __typename?: 'Sys', id: string }, contentfulMetadata: { __typename?: 'ContentfulMetadata', tags: Array<{ __typename?: 'ContentfulTag', id: string | null, name: string | null } | null> }, hero: { __typename?: 'ComponentHero', internalName: string | null, heading: string | null, subHeading: string | null, sys: { __typename?: 'Sys', id: string }, heroImage: { __typename?: 'Asset', title: string | null, description: string | null, contentType: string | null, fileName: string | null, width: number | null, height: number | null, url: string | null, sys: { __typename?: 'Sys', id: string } } | null, ctaFieldsCollection: { __typename?: 'ComponentHeroCtaFieldsCollection', items: Array<{ __typename?: 'ComponentCta', ctaText: string | null, ctaLink: string | null, sys: { __typename?: 'Sys', id: string }, icon: { __typename?: 'Asset', title: string | null, description: string | null, contentType: string | null, fileName: string | null, width: number | null, height: number | null, url: string | null, sys: { __typename?: 'Sys', id: string } } | null } | null> } | null } | null, featureCardsCollection: { __typename?: 'PageLandingFeatureCardsCollection', items: Array<{ __typename?: 'ComponentFeature', heading: string | null, description: string | null, sys: { __typename?: 'Sys', id: string }, contentfulMetadata: { __typename?: 'ContentfulMetadata', tags: Array<{ __typename?: 'ContentfulTag', id: string | null, name: string | null } | null> }, image: { __typename?: 'Asset', title: string | null, description: string | null, contentType: string | null, fileName: string | null, width: number | null, height: number | null, url: string | null, sys: { __typename?: 'Sys', id: string } } | null } | null> } | null, featuredBlogPost: { __typename?: 'PageBlogPost', internalName: string | null, title: string | null, slug: string | null, publishedDate: string | null, shortDescription: string | null, sys: { __typename?: 'Sys', id: string }, featuredImage: { __typename?: 'Asset', title: string | null, description: string | null, contentType: string | null, fileName: string | null, width: number | null, height: number | null, url: string | null, sys: { __typename?: 'Sys', id: string } } | null, author: { __typename?: 'ComponentAuthor', name: string | null, sys: { __typename?: 'Sys', id: string }, avatar: { __typename?: 'Asset', title: string | null, description: string | null, contentType: string | null, fileName: string | null, width: number | null, height: number | null, url: string | null, sys: { __typename?: 'Sys', id: string } } | null } | null } | null, seoFields: { __typename?: 'ComponentSeo', pageTitle: string | null, pageDescription: string | null, canonicalUrl: string | null, nofollow: boolean | null, noindex: boolean | null, sys: { __typename?: 'Sys', id: string }, shareImagesCollection: { __typename?: 'AssetCollection', items: Array<{ __typename?: 'Asset', title: string | null, description: string | null, contentType: string | null, fileName: string | null, width: number | null, height: number | null, url: string | null, sys: { __typename?: 'Sys', id: string } } | null> } | null } | null };

export type GetLandingPageByIdQueryVariables = Exact<{
  id: Scalars['String']['input'];
  locale: InputMaybe<Scalars['String']['input']>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
}>;


export type GetLandingPageByIdQuery = { __typename?: 'Query', pageLanding: { __typename?: 'PageLanding', internalName: string | null, sys: { __typename?: 'Sys', id: string }, contentfulMetadata: { __typename?: 'ContentfulMetadata', tags: Array<{ __typename?: 'ContentfulTag', id: string | null, name: string | null } | null> }, hero: { __typename?: 'ComponentHero', internalName: string | null, heading: string | null, subHeading: string | null, sys: { __typename?: 'Sys', id: string }, heroImage: { __typename?: 'Asset', title: string | null, description: string | null, contentType: string | null, fileName: string | null, width: number | null, height: number | null, url: string | null, sys: { __typename?: 'Sys', id: string } } | null, ctaFieldsCollection: { __typename?: 'ComponentHeroCtaFieldsCollection', items: Array<{ __typename?: 'ComponentCta', ctaText: string | null, ctaLink: string | null, sys: { __typename?: 'Sys', id: string }, icon: { __typename?: 'Asset', title: string | null, description: string | null, contentType: string | null, fileName: string | null, width: number | null, height: number | null, url: string | null, sys: { __typename?: 'Sys', id: string } } | null } | null> } | null } | null, featureCardsCollection: { __typename?: 'PageLandingFeatureCardsCollection', items: Array<{ __typename?: 'ComponentFeature', heading: string | null, description: string | null, sys: { __typename?: 'Sys', id: string }, contentfulMetadata: { __typename?: 'ContentfulMetadata', tags: Array<{ __typename?: 'ContentfulTag', id: string | null, name: string | null } | null> }, image: { __typename?: 'Asset', title: string | null, description: string | null, contentType: string | null, fileName: string | null, width: number | null, height: number | null, url: string | null, sys: { __typename?: 'Sys', id: string } } | null } | null> } | null, featuredBlogPost: { __typename?: 'PageBlogPost', internalName: string | null, title: string | null, slug: string | null, publishedDate: string | null, shortDescription: string | null, sys: { __typename?: 'Sys', id: string }, featuredImage: { __typename?: 'Asset', title: string | null, description: string | null, contentType: string | null, fileName: string | null, width: number | null, height: number | null, url: string | null, sys: { __typename?: 'Sys', id: string } } | null, author: { __typename?: 'ComponentAuthor', name: string | null, sys: { __typename?: 'Sys', id: string }, avatar: { __typename?: 'Asset', title: string | null, description: string | null, contentType: string | null, fileName: string | null, width: number | null, height: number | null, url: string | null, sys: { __typename?: 'Sys', id: string } } | null } | null } | null, seoFields: { __typename?: 'ComponentSeo', pageTitle: string | null, pageDescription: string | null, canonicalUrl: string | null, nofollow: boolean | null, noindex: boolean | null, sys: { __typename?: 'Sys', id: string }, shareImagesCollection: { __typename?: 'AssetCollection', items: Array<{ __typename?: 'Asset', title: string | null, description: string | null, contentType: string | null, fileName: string | null, width: number | null, height: number | null, url: string | null, sys: { __typename?: 'Sys', id: string } } | null> } | null } | null } | null };

export type GetSettingsQueryVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type GetSettingsQuery = { __typename?: 'Query', settings: { __typename?: 'Settings', siteTitle: string | null, siteDescription: string | null, footerCopyrightText: string | null, sys: { __typename?: 'Sys', id: string }, logo: { __typename?: 'Asset', title: string | null, description: string | null, contentType: string | null, fileName: string | null, size: number | null, url: string | null, width: number | null, height: number | null } | null, headerNavigationCollection: { __typename?: 'SettingsHeaderNavigationCollection', items: Array<{ __typename?: 'NavigationLink', title: string | null, href: string | null, icon: { __typename?: 'Asset', title: string | null, description: string | null, contentType: string | null, fileName: string | null, size: number | null, url: string | null, width: number | null, height: number | null } | null } | null> } | null, footerServicesNavigationCollection: { __typename?: 'SettingsFooterServicesNavigationCollection', items: Array<{ __typename?: 'NavigationLink', title: string | null, href: string | null, icon: { __typename?: 'Asset', title: string | null, description: string | null, contentType: string | null, fileName: string | null, size: number | null, url: string | null, width: number | null, height: number | null } | null } | null> } | null, footerSiteNavigationCollection: { __typename?: 'SettingsFooterSiteNavigationCollection', items: Array<{ __typename?: 'NavigationLink', title: string | null, href: string | null, icon: { __typename?: 'Asset', title: string | null, description: string | null, contentType: string | null, fileName: string | null, size: number | null, url: string | null, width: number | null, height: number | null } | null } | null> } | null, footerLegalNavigationCollection: { __typename?: 'SettingsFooterLegalNavigationCollection', items: Array<{ __typename?: 'NavigationLink', title: string | null, href: string | null, icon: { __typename?: 'Asset', title: string | null, description: string | null, contentType: string | null, fileName: string | null, size: number | null, url: string | null, width: number | null, height: number | null } | null } | null> } | null, seo: { __typename?: 'ComponentSeo', pageTitle: string | null, pageDescription: string | null, canonicalUrl: string | null, nofollow: boolean | null, noindex: boolean | null, sys: { __typename?: 'Sys', id: string }, shareImagesCollection: { __typename?: 'AssetCollection', items: Array<{ __typename?: 'Asset', title: string | null, description: string | null, contentType: string | null, fileName: string | null, size: number | null, url: string | null, width: number | null, height: number | null } | null> } | null } | null } | null };

export type SeoFieldsFragment = { __typename?: 'ComponentSeo', pageTitle: string | null, pageDescription: string | null, canonicalUrl: string | null, nofollow: boolean | null, noindex: boolean | null, sys: { __typename?: 'Sys', id: string }, shareImagesCollection: { __typename?: 'AssetCollection', items: Array<{ __typename?: 'Asset', title: string | null, description: string | null, contentType: string | null, fileName: string | null, size: number | null, url: string | null, width: number | null, height: number | null } | null> } | null };

export type ImageAssetFragment = { __typename?: 'Asset', title: string | null, description: string | null, contentType: string | null, fileName: string | null, size: number | null, url: string | null, width: number | null, height: number | null };

export const AssetFragmentFragmentDoc = gql`
    fragment AssetFragment on Asset {
  sys {
    id
  }
  title
  description
  contentType
  fileName
  width
  height
  url(transform: {width: 1000, quality: 80, format: WEBP})
}
    `;
export const CtaFragmentFragmentDoc = gql`
    fragment CtaFragment on ComponentCta {
  sys {
    id
  }
  ctaText
  ctaLink
  icon(preview: $preview) {
    ...AssetFragment
  }
}
    ${AssetFragmentFragmentDoc}`;
export const HeroFragmentFragmentDoc = gql`
    fragment HeroFragment on ComponentHero {
  sys {
    id
  }
  internalName
  heading
  subHeading
  heroImage(preview: $preview) {
    ...AssetFragment
  }
  ctaFieldsCollection(limit: 2, preview: $preview) {
    items {
      ...CtaFragment
    }
  }
}
    ${AssetFragmentFragmentDoc}
${CtaFragmentFragmentDoc}`;
export const BlogPostPreviewFragmentFragmentDoc = gql`
    fragment BlogPostPreviewFragment on PageBlogPost {
  sys {
    id
  }
  internalName
  title
  slug
  publishedDate
  shortDescription
  featuredImage(preview: $preview) {
    ...AssetFragment
  }
  author(preview: $preview) {
    sys {
      id
    }
    name
    avatar(preview: $preview) {
      ...AssetFragment
    }
  }
}
    ${AssetFragmentFragmentDoc}`;
export const SeoFragmentFragmentDoc = gql`
    fragment SeoFragment on ComponentSeo {
  sys {
    id
  }
  pageTitle
  pageDescription
  canonicalUrl
  nofollow
  noindex
  shareImagesCollection(limit: 1, preview: $preview) {
    items {
      ...AssetFragment
    }
  }
}
    ${AssetFragmentFragmentDoc}`;
export const LandingPageFragmentFragmentDoc = gql`
    fragment LandingPageFragment on PageLanding {
  sys {
    id
  }
  internalName
  hero(preview: $preview) {
    ...HeroFragment
  }
  featuredBlogPost(preview: $preview) {
    ...BlogPostPreviewFragment
  }
  seoFields(preview: $preview) {
    ...SeoFragment
  }
}
    ${HeroFragmentFragmentDoc}
${BlogPostPreviewFragmentFragmentDoc}
${SeoFragmentFragmentDoc}`;
export const LandingPageByIdDataFragmentDoc = gql`
    fragment LandingPageByIdData on PageLanding {
  sys {
    id
  }
  contentfulMetadata {
    tags {
      id
      name
    }
  }
  internalName
  hero(preview: $preview) {
    ...HeroFragment
  }
  featureCardsCollection(limit: 10, preview: $preview) {
    items {
      sys {
        id
      }
      contentfulMetadata {
        tags {
          id
          name
        }
      }
      heading
      description
      image(preview: $preview) {
        ...AssetFragment
      }
    }
  }
  featuredBlogPost(preview: $preview) {
    ...BlogPostPreviewFragment
  }
  seoFields(preview: $preview) {
    ...SeoFragment
  }
}
    ${HeroFragmentFragmentDoc}
${AssetFragmentFragmentDoc}
${BlogPostPreviewFragmentFragmentDoc}
${SeoFragmentFragmentDoc}`;
export const ImageAssetFragmentDoc = gql`
    fragment ImageAsset on Asset {
  title
  description
  contentType
  fileName
  size
  url
  width
  height
}
    `;
export const SeoFieldsFragmentDoc = gql`
    fragment SeoFields on ComponentSeo {
  sys {
    id
  }
  pageTitle
  pageDescription
  canonicalUrl
  nofollow
  nofollow
  noindex
  shareImagesCollection {
    items {
      ...ImageAsset
    }
  }
}
    ${ImageAssetFragmentDoc}`;
export const GetLandingPageByIdDocument = gql`
    query getLandingPageById($id: String!, $locale: String, $preview: Boolean) {
  pageLanding(id: $id, locale: $locale, preview: $preview) {
    ...LandingPageByIdData
  }
}
    ${LandingPageByIdDataFragmentDoc}`;
export const GetSettingsDocument = gql`
    query getSettings($id: String!) {
  settings(id: $id) {
    sys {
      id
    }
    siteTitle
    siteDescription
    logo {
      ...ImageAsset
    }
    headerNavigationCollection {
      items {
        title
        href
        icon {
          ...ImageAsset
        }
      }
    }
    footerServicesNavigationCollection {
      items {
        title
        href
        icon {
          ...ImageAsset
        }
      }
    }
    footerSiteNavigationCollection {
      items {
        title
        href
        icon {
          ...ImageAsset
        }
      }
    }
    footerLegalNavigationCollection {
      items {
        title
        href
        icon {
          ...ImageAsset
        }
      }
    }
    seo {
      ...SeoFields
    }
    footerCopyrightText
  }
}
    ${ImageAssetFragmentDoc}
${SeoFieldsFragmentDoc}`;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string, variables?: any) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType, _variables) => action();
const GetLandingPageByIdDocumentString = print(GetLandingPageByIdDocument);
const GetSettingsDocumentString = print(GetSettingsDocument);
export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    getLandingPageById(variables: GetLandingPageByIdQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<{ data: GetLandingPageByIdQuery; errors?: GraphQLError[]; extensions?: any; headers: Headers; status: number; }> {
        return withWrapper((wrappedRequestHeaders) => client.rawRequest<GetLandingPageByIdQuery>(GetLandingPageByIdDocumentString, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getLandingPageById', 'query', variables);
    },
    getSettings(variables: GetSettingsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<{ data: GetSettingsQuery; errors?: GraphQLError[]; extensions?: any; headers: Headers; status: number; }> {
        return withWrapper((wrappedRequestHeaders) => client.rawRequest<GetSettingsQuery>(GetSettingsDocumentString, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getSettings', 'query', variables);
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;