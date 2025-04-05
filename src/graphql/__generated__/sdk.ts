import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
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
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
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
  contentType?: Maybe<Scalars['String']['output']>;
  contentfulMetadata: ContentfulMetadata;
  description?: Maybe<Scalars['String']['output']>;
  fileName?: Maybe<Scalars['String']['output']>;
  height?: Maybe<Scalars['Int']['output']>;
  linkedFrom?: Maybe<AssetLinkingCollections>;
  size?: Maybe<Scalars['Int']['output']>;
  sys: Sys;
  title?: Maybe<Scalars['String']['output']>;
  url?: Maybe<Scalars['String']['output']>;
  width?: Maybe<Scalars['Int']['output']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetContentTypeArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetDescriptionArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetFileNameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetHeightArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetSizeArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetUrlArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  transform?: InputMaybe<ImageTransformOptions>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetWidthArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type AssetCollection = {
  __typename?: 'AssetCollection';
  items: Array<Maybe<Asset>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type AssetFilter = {
  AND?: InputMaybe<Array<InputMaybe<AssetFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<AssetFilter>>>;
  contentType?: InputMaybe<Scalars['String']['input']>;
  contentType_contains?: InputMaybe<Scalars['String']['input']>;
  contentType_exists?: InputMaybe<Scalars['Boolean']['input']>;
  contentType_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contentType_not?: InputMaybe<Scalars['String']['input']>;
  contentType_not_contains?: InputMaybe<Scalars['String']['input']>;
  contentType_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  description?: InputMaybe<Scalars['String']['input']>;
  description_contains?: InputMaybe<Scalars['String']['input']>;
  description_exists?: InputMaybe<Scalars['Boolean']['input']>;
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  description_not?: InputMaybe<Scalars['String']['input']>;
  description_not_contains?: InputMaybe<Scalars['String']['input']>;
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fileName?: InputMaybe<Scalars['String']['input']>;
  fileName_contains?: InputMaybe<Scalars['String']['input']>;
  fileName_exists?: InputMaybe<Scalars['Boolean']['input']>;
  fileName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fileName_not?: InputMaybe<Scalars['String']['input']>;
  fileName_not_contains?: InputMaybe<Scalars['String']['input']>;
  fileName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  height?: InputMaybe<Scalars['Int']['input']>;
  height_exists?: InputMaybe<Scalars['Boolean']['input']>;
  height_gt?: InputMaybe<Scalars['Int']['input']>;
  height_gte?: InputMaybe<Scalars['Int']['input']>;
  height_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  height_lt?: InputMaybe<Scalars['Int']['input']>;
  height_lte?: InputMaybe<Scalars['Int']['input']>;
  height_not?: InputMaybe<Scalars['Int']['input']>;
  height_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  size?: InputMaybe<Scalars['Int']['input']>;
  size_exists?: InputMaybe<Scalars['Boolean']['input']>;
  size_gt?: InputMaybe<Scalars['Int']['input']>;
  size_gte?: InputMaybe<Scalars['Int']['input']>;
  size_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  size_lt?: InputMaybe<Scalars['Int']['input']>;
  size_lte?: InputMaybe<Scalars['Int']['input']>;
  size_not?: InputMaybe<Scalars['Int']['input']>;
  size_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_contains?: InputMaybe<Scalars['String']['input']>;
  title_exists?: InputMaybe<Scalars['Boolean']['input']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_not?: InputMaybe<Scalars['String']['input']>;
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  url?: InputMaybe<Scalars['String']['input']>;
  url_contains?: InputMaybe<Scalars['String']['input']>;
  url_exists?: InputMaybe<Scalars['Boolean']['input']>;
  url_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  url_not?: InputMaybe<Scalars['String']['input']>;
  url_not_contains?: InputMaybe<Scalars['String']['input']>;
  url_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  width?: InputMaybe<Scalars['Int']['input']>;
  width_exists?: InputMaybe<Scalars['Boolean']['input']>;
  width_gt?: InputMaybe<Scalars['Int']['input']>;
  width_gte?: InputMaybe<Scalars['Int']['input']>;
  width_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  width_lt?: InputMaybe<Scalars['Int']['input']>;
  width_lte?: InputMaybe<Scalars['Int']['input']>;
  width_not?: InputMaybe<Scalars['Int']['input']>;
  width_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
};

export type AssetLinkingCollections = {
  __typename?: 'AssetLinkingCollections';
  componentAuthorCollection?: Maybe<ComponentAuthorCollection>;
  componentCtaCollection?: Maybe<ComponentCtaCollection>;
  componentHeroCollection?: Maybe<ComponentHeroCollection>;
  componentRichImageCollection?: Maybe<ComponentRichImageCollection>;
  componentSeoCollection?: Maybe<ComponentSeoCollection>;
  entryCollection?: Maybe<EntryCollection>;
  navigationLinkCollection?: Maybe<NavigationLinkCollection>;
  pageBlogPostCollection?: Maybe<PageBlogPostCollection>;
  pageExperienceCollection?: Maybe<PageExperienceCollection>;
  settingsCollection?: Maybe<SettingsCollection>;
  vq5Hs6VZcdFFqcGewQDi5Collection?: Maybe<Vq5Hs6VZcdFFqcGewQDi5Collection>;
};


export type AssetLinkingCollectionsComponentAuthorCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type AssetLinkingCollectionsComponentCtaCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type AssetLinkingCollectionsComponentHeroCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type AssetLinkingCollectionsComponentRichImageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type AssetLinkingCollectionsComponentSeoCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type AssetLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type AssetLinkingCollectionsNavigationLinkCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type AssetLinkingCollectionsPageBlogPostCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type AssetLinkingCollectionsPageExperienceCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type AssetLinkingCollectionsSettingsCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type AssetLinkingCollectionsVq5Hs6VZcdFFqcGewQDi5CollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
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
  avatar?: Maybe<Asset>;
  contentfulMetadata: ContentfulMetadata;
  internalName?: Maybe<Scalars['String']['output']>;
  linkedFrom?: Maybe<ComponentAuthorLinkingCollections>;
  name?: Maybe<Scalars['String']['output']>;
  sys: Sys;
};


/** To have author-related properties [See type definition](https://app.contentful.com/spaces/z7u9lztnactc/content_types/componentAuthor) */
export type ComponentAuthorAvatarArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


/** To have author-related properties [See type definition](https://app.contentful.com/spaces/z7u9lztnactc/content_types/componentAuthor) */
export type ComponentAuthorInternalNameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** To have author-related properties [See type definition](https://app.contentful.com/spaces/z7u9lztnactc/content_types/componentAuthor) */
export type ComponentAuthorLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** To have author-related properties [See type definition](https://app.contentful.com/spaces/z7u9lztnactc/content_types/componentAuthor) */
export type ComponentAuthorNameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type ComponentAuthorCollection = {
  __typename?: 'ComponentAuthorCollection';
  items: Array<Maybe<ComponentAuthor>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type ComponentAuthorFilter = {
  AND?: InputMaybe<Array<InputMaybe<ComponentAuthorFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ComponentAuthorFilter>>>;
  avatar_exists?: InputMaybe<Scalars['Boolean']['input']>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  internalName?: InputMaybe<Scalars['String']['input']>;
  internalName_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalName_not?: InputMaybe<Scalars['String']['input']>;
  internalName_not_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_contains?: InputMaybe<Scalars['String']['input']>;
  name_exists?: InputMaybe<Scalars['Boolean']['input']>;
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  name_not?: InputMaybe<Scalars['String']['input']>;
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
};

export type ComponentAuthorLinkingCollections = {
  __typename?: 'ComponentAuthorLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  pageBlogPostCollection?: Maybe<PageBlogPostCollection>;
};


export type ComponentAuthorLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type ComponentAuthorLinkingCollectionsPageBlogPostCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<ComponentAuthorLinkingCollectionsPageBlogPostCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
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
  ctaLink?: Maybe<Scalars['String']['output']>;
  ctaText?: Maybe<Scalars['String']['output']>;
  icon?: Maybe<Asset>;
  internalName?: Maybe<Scalars['String']['output']>;
  linkedFrom?: Maybe<ComponentCtaLinkingCollections>;
  sys: Sys;
};


/** [See type definition](https://app.contentful.com/spaces/z7u9lztnactc/content_types/componentCta) */
export type ComponentCtaCtaLinkArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/z7u9lztnactc/content_types/componentCta) */
export type ComponentCtaCtaTextArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/z7u9lztnactc/content_types/componentCta) */
export type ComponentCtaIconArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/z7u9lztnactc/content_types/componentCta) */
export type ComponentCtaInternalNameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/z7u9lztnactc/content_types/componentCta) */
export type ComponentCtaLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ComponentCtaCollection = {
  __typename?: 'ComponentCtaCollection';
  items: Array<Maybe<ComponentCta>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type ComponentCtaFilter = {
  AND?: InputMaybe<Array<InputMaybe<ComponentCtaFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ComponentCtaFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  ctaLink?: InputMaybe<Scalars['String']['input']>;
  ctaLink_contains?: InputMaybe<Scalars['String']['input']>;
  ctaLink_exists?: InputMaybe<Scalars['Boolean']['input']>;
  ctaLink_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  ctaLink_not?: InputMaybe<Scalars['String']['input']>;
  ctaLink_not_contains?: InputMaybe<Scalars['String']['input']>;
  ctaLink_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  ctaText?: InputMaybe<Scalars['String']['input']>;
  ctaText_contains?: InputMaybe<Scalars['String']['input']>;
  ctaText_exists?: InputMaybe<Scalars['Boolean']['input']>;
  ctaText_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  ctaText_not?: InputMaybe<Scalars['String']['input']>;
  ctaText_not_contains?: InputMaybe<Scalars['String']['input']>;
  ctaText_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  icon_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalName?: InputMaybe<Scalars['String']['input']>;
  internalName_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalName_not?: InputMaybe<Scalars['String']['input']>;
  internalName_not_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
};

export type ComponentCtaLinkingCollections = {
  __typename?: 'ComponentCtaLinkingCollections';
  componentHeroCollection?: Maybe<ComponentHeroCollection>;
  entryCollection?: Maybe<EntryCollection>;
};


export type ComponentCtaLinkingCollectionsComponentHeroCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<ComponentCtaLinkingCollectionsComponentHeroCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type ComponentCtaLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
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

/** [See type definition](https://app.contentful.com/spaces/z7u9lztnactc/content_types/componentHero) */
export type ComponentHero = Entry & _Node & {
  __typename?: 'ComponentHero';
  _id: Scalars['ID']['output'];
  contentfulMetadata: ContentfulMetadata;
  ctaFieldsCollection?: Maybe<ComponentHeroCtaFieldsCollection>;
  heading?: Maybe<Scalars['String']['output']>;
  heroImage?: Maybe<Asset>;
  internalName?: Maybe<Scalars['String']['output']>;
  linkedFrom?: Maybe<ComponentHeroLinkingCollections>;
  subHeading?: Maybe<Scalars['String']['output']>;
  sys: Sys;
};


/** [See type definition](https://app.contentful.com/spaces/z7u9lztnactc/content_types/componentHero) */
export type ComponentHeroCtaFieldsCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<ComponentHeroCtaFieldsCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ComponentCtaFilter>;
};


/** [See type definition](https://app.contentful.com/spaces/z7u9lztnactc/content_types/componentHero) */
export type ComponentHeroHeadingArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/z7u9lztnactc/content_types/componentHero) */
export type ComponentHeroHeroImageArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/z7u9lztnactc/content_types/componentHero) */
export type ComponentHeroInternalNameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/z7u9lztnactc/content_types/componentHero) */
export type ComponentHeroLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/z7u9lztnactc/content_types/componentHero) */
export type ComponentHeroSubHeadingArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
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
  AND?: InputMaybe<Array<InputMaybe<ComponentHeroFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ComponentHeroFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  ctaFields?: InputMaybe<CfComponentCtaNestedFilter>;
  ctaFieldsCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  heading?: InputMaybe<Scalars['String']['input']>;
  heading_contains?: InputMaybe<Scalars['String']['input']>;
  heading_exists?: InputMaybe<Scalars['Boolean']['input']>;
  heading_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  heading_not?: InputMaybe<Scalars['String']['input']>;
  heading_not_contains?: InputMaybe<Scalars['String']['input']>;
  heading_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  heroImage_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalName?: InputMaybe<Scalars['String']['input']>;
  internalName_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalName_not?: InputMaybe<Scalars['String']['input']>;
  internalName_not_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  subHeading?: InputMaybe<Scalars['String']['input']>;
  subHeading_contains?: InputMaybe<Scalars['String']['input']>;
  subHeading_exists?: InputMaybe<Scalars['Boolean']['input']>;
  subHeading_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  subHeading_not?: InputMaybe<Scalars['String']['input']>;
  subHeading_not_contains?: InputMaybe<Scalars['String']['input']>;
  subHeading_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
};

export type ComponentHeroLinkingCollections = {
  __typename?: 'ComponentHeroLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  pageLandingCollection?: Maybe<PageLandingCollection>;
};


export type ComponentHeroLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type ComponentHeroLinkingCollectionsPageLandingCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<ComponentHeroLinkingCollectionsPageLandingCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
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
  caption?: Maybe<Scalars['String']['output']>;
  contentfulMetadata: ContentfulMetadata;
  fullWidth?: Maybe<Scalars['Boolean']['output']>;
  image?: Maybe<Asset>;
  internalName?: Maybe<Scalars['String']['output']>;
  linkedFrom?: Maybe<ComponentRichImageLinkingCollections>;
  sys: Sys;
};


/** To describe an image used in rich text fields [See type definition](https://app.contentful.com/spaces/z7u9lztnactc/content_types/componentRichImage) */
export type ComponentRichImageCaptionArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** To describe an image used in rich text fields [See type definition](https://app.contentful.com/spaces/z7u9lztnactc/content_types/componentRichImage) */
export type ComponentRichImageFullWidthArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** To describe an image used in rich text fields [See type definition](https://app.contentful.com/spaces/z7u9lztnactc/content_types/componentRichImage) */
export type ComponentRichImageImageArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


/** To describe an image used in rich text fields [See type definition](https://app.contentful.com/spaces/z7u9lztnactc/content_types/componentRichImage) */
export type ComponentRichImageInternalNameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** To describe an image used in rich text fields [See type definition](https://app.contentful.com/spaces/z7u9lztnactc/content_types/componentRichImage) */
export type ComponentRichImageLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ComponentRichImageCollection = {
  __typename?: 'ComponentRichImageCollection';
  items: Array<Maybe<ComponentRichImage>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type ComponentRichImageFilter = {
  AND?: InputMaybe<Array<InputMaybe<ComponentRichImageFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ComponentRichImageFilter>>>;
  caption?: InputMaybe<Scalars['String']['input']>;
  caption_contains?: InputMaybe<Scalars['String']['input']>;
  caption_exists?: InputMaybe<Scalars['Boolean']['input']>;
  caption_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  caption_not?: InputMaybe<Scalars['String']['input']>;
  caption_not_contains?: InputMaybe<Scalars['String']['input']>;
  caption_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  fullWidth?: InputMaybe<Scalars['Boolean']['input']>;
  fullWidth_exists?: InputMaybe<Scalars['Boolean']['input']>;
  fullWidth_not?: InputMaybe<Scalars['Boolean']['input']>;
  image_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalName?: InputMaybe<Scalars['String']['input']>;
  internalName_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalName_not?: InputMaybe<Scalars['String']['input']>;
  internalName_not_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
};

export type ComponentRichImageLinkingCollections = {
  __typename?: 'ComponentRichImageLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};


export type ComponentRichImageLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
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
  canonicalUrl?: Maybe<Scalars['String']['output']>;
  contentfulMetadata: ContentfulMetadata;
  internalName?: Maybe<Scalars['String']['output']>;
  linkedFrom?: Maybe<ComponentSeoLinkingCollections>;
  nofollow?: Maybe<Scalars['Boolean']['output']>;
  noindex?: Maybe<Scalars['Boolean']['output']>;
  pageDescription?: Maybe<Scalars['String']['output']>;
  pageTitle?: Maybe<Scalars['String']['output']>;
  shareImagesCollection?: Maybe<AssetCollection>;
  sys: Sys;
};


/** To have SEO-related properties to the pages we render [See type definition](https://app.contentful.com/spaces/z7u9lztnactc/content_types/componentSeo) */
export type ComponentSeoCanonicalUrlArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** To have SEO-related properties to the pages we render [See type definition](https://app.contentful.com/spaces/z7u9lztnactc/content_types/componentSeo) */
export type ComponentSeoInternalNameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** To have SEO-related properties to the pages we render [See type definition](https://app.contentful.com/spaces/z7u9lztnactc/content_types/componentSeo) */
export type ComponentSeoLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** To have SEO-related properties to the pages we render [See type definition](https://app.contentful.com/spaces/z7u9lztnactc/content_types/componentSeo) */
export type ComponentSeoNofollowArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** To have SEO-related properties to the pages we render [See type definition](https://app.contentful.com/spaces/z7u9lztnactc/content_types/componentSeo) */
export type ComponentSeoNoindexArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** To have SEO-related properties to the pages we render [See type definition](https://app.contentful.com/spaces/z7u9lztnactc/content_types/componentSeo) */
export type ComponentSeoPageDescriptionArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** To have SEO-related properties to the pages we render [See type definition](https://app.contentful.com/spaces/z7u9lztnactc/content_types/componentSeo) */
export type ComponentSeoPageTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** To have SEO-related properties to the pages we render [See type definition](https://app.contentful.com/spaces/z7u9lztnactc/content_types/componentSeo) */
export type ComponentSeoShareImagesCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
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
  AND?: InputMaybe<Array<InputMaybe<ComponentSeoFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ComponentSeoFilter>>>;
  canonicalUrl?: InputMaybe<Scalars['String']['input']>;
  canonicalUrl_contains?: InputMaybe<Scalars['String']['input']>;
  canonicalUrl_exists?: InputMaybe<Scalars['Boolean']['input']>;
  canonicalUrl_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  canonicalUrl_not?: InputMaybe<Scalars['String']['input']>;
  canonicalUrl_not_contains?: InputMaybe<Scalars['String']['input']>;
  canonicalUrl_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  internalName?: InputMaybe<Scalars['String']['input']>;
  internalName_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalName_not?: InputMaybe<Scalars['String']['input']>;
  internalName_not_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  nofollow?: InputMaybe<Scalars['Boolean']['input']>;
  nofollow_exists?: InputMaybe<Scalars['Boolean']['input']>;
  nofollow_not?: InputMaybe<Scalars['Boolean']['input']>;
  noindex?: InputMaybe<Scalars['Boolean']['input']>;
  noindex_exists?: InputMaybe<Scalars['Boolean']['input']>;
  noindex_not?: InputMaybe<Scalars['Boolean']['input']>;
  pageDescription?: InputMaybe<Scalars['String']['input']>;
  pageDescription_contains?: InputMaybe<Scalars['String']['input']>;
  pageDescription_exists?: InputMaybe<Scalars['Boolean']['input']>;
  pageDescription_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  pageDescription_not?: InputMaybe<Scalars['String']['input']>;
  pageDescription_not_contains?: InputMaybe<Scalars['String']['input']>;
  pageDescription_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  pageTitle?: InputMaybe<Scalars['String']['input']>;
  pageTitle_contains?: InputMaybe<Scalars['String']['input']>;
  pageTitle_exists?: InputMaybe<Scalars['Boolean']['input']>;
  pageTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  pageTitle_not?: InputMaybe<Scalars['String']['input']>;
  pageTitle_not_contains?: InputMaybe<Scalars['String']['input']>;
  pageTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  shareImagesCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  sys?: InputMaybe<SysFilter>;
};

export type ComponentSeoLinkingCollections = {
  __typename?: 'ComponentSeoLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  pageBlogPostCollection?: Maybe<PageBlogPostCollection>;
  pageDefaultCollection?: Maybe<PageDefaultCollection>;
  pageLandingCollection?: Maybe<PageLandingCollection>;
  pageServiceCollection?: Maybe<PageServiceCollection>;
  settingsCollection?: Maybe<SettingsCollection>;
};


export type ComponentSeoLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type ComponentSeoLinkingCollectionsPageBlogPostCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<ComponentSeoLinkingCollectionsPageBlogPostCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type ComponentSeoLinkingCollectionsPageDefaultCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<ComponentSeoLinkingCollectionsPageDefaultCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type ComponentSeoLinkingCollectionsPageLandingCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<ComponentSeoLinkingCollectionsPageLandingCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type ComponentSeoLinkingCollectionsPageServiceCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<ComponentSeoLinkingCollectionsPageServiceCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type ComponentSeoLinkingCollectionsSettingsCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<ComponentSeoLinkingCollectionsSettingsCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
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
  id_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ContentfulMetadataConceptsFilter = {
  descendants?: InputMaybe<ContentfulMetadataConceptsDescendantsFilter>;
  id_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ContentfulMetadataFilter = {
  concepts?: InputMaybe<ContentfulMetadataConceptsFilter>;
  concepts_exists?: InputMaybe<Scalars['Boolean']['input']>;
  tags?: InputMaybe<ContentfulMetadataTagsFilter>;
  tags_exists?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ContentfulMetadataTagsFilter = {
  id_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

/**
 * Represents a tag entity for finding and organizing content easily.
 *       Find out more here: https://www.contentful.com/developers/docs/references/content-delivery-api/#/reference/content-tags
 */
export type ContentfulTag = {
  __typename?: 'ContentfulTag';
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
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
  AND?: InputMaybe<Array<InputMaybe<EntryFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<EntryFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  sys?: InputMaybe<SysFilter>;
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
  backgroundColor?: InputMaybe<Scalars['HexColor']['input']>;
  /**
   * Desired corner radius in pixels.
   *         Results in an image with rounded corners (pass `-1` for a full circle/ellipse).
   *         Defaults to `0`. Uses desired background color as padding color,
   *         unless the format is `JPG` or `JPG_PROGRESSIVE` and resize strategy is `PAD`, then defaults to white.
   */
  cornerRadius?: InputMaybe<Scalars['Int']['input']>;
  /** Desired image format. Defaults to the original image format. */
  format?: InputMaybe<ImageFormat>;
  /** Desired height in pixels. Defaults to the original image height. */
  height?: InputMaybe<Scalars['Dimension']['input']>;
  /**
   * Desired quality of the image in percents.
   *         Used for `PNG8`, `JPG`, `JPG_PROGRESSIVE` and `WEBP` formats.
   */
  quality?: InputMaybe<Scalars['Quality']['input']>;
  /** Desired resize focus area. Defaults to `CENTER`. */
  resizeFocus?: InputMaybe<ImageResizeFocus>;
  /** Desired resize strategy. Defaults to `FIT`. */
  resizeStrategy?: InputMaybe<ImageResizeStrategy>;
  /** Desired width in pixels. Defaults to the original image width. */
  width?: InputMaybe<Scalars['Dimension']['input']>;
};

/** [See type definition](https://app.contentful.com/spaces/z7u9lztnactc/content_types/navigationLink) */
export type NavigationLink = Entry & _Node & {
  __typename?: 'NavigationLink';
  _id: Scalars['ID']['output'];
  contentfulMetadata: ContentfulMetadata;
  href?: Maybe<Scalars['String']['output']>;
  icon?: Maybe<Asset>;
  image?: Maybe<Asset>;
  internalName?: Maybe<Scalars['String']['output']>;
  linkedFrom?: Maybe<NavigationLinkLinkingCollections>;
  subnavigationCollection?: Maybe<NavigationLinkSubnavigationCollection>;
  sys: Sys;
  title?: Maybe<Scalars['String']['output']>;
};


/** [See type definition](https://app.contentful.com/spaces/z7u9lztnactc/content_types/navigationLink) */
export type NavigationLinkHrefArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/z7u9lztnactc/content_types/navigationLink) */
export type NavigationLinkIconArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/z7u9lztnactc/content_types/navigationLink) */
export type NavigationLinkImageArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/z7u9lztnactc/content_types/navigationLink) */
export type NavigationLinkInternalNameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/z7u9lztnactc/content_types/navigationLink) */
export type NavigationLinkLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/z7u9lztnactc/content_types/navigationLink) */
export type NavigationLinkSubnavigationCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<NavigationLinkSubnavigationCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<NavigationLinkFilter>;
};


/** [See type definition](https://app.contentful.com/spaces/z7u9lztnactc/content_types/navigationLink) */
export type NavigationLinkTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type NavigationLinkCollection = {
  __typename?: 'NavigationLinkCollection';
  items: Array<Maybe<NavigationLink>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type NavigationLinkFilter = {
  AND?: InputMaybe<Array<InputMaybe<NavigationLinkFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<NavigationLinkFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  href?: InputMaybe<Scalars['String']['input']>;
  href_contains?: InputMaybe<Scalars['String']['input']>;
  href_exists?: InputMaybe<Scalars['Boolean']['input']>;
  href_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  href_not?: InputMaybe<Scalars['String']['input']>;
  href_not_contains?: InputMaybe<Scalars['String']['input']>;
  href_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  icon_exists?: InputMaybe<Scalars['Boolean']['input']>;
  image_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalName?: InputMaybe<Scalars['String']['input']>;
  internalName_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalName_not?: InputMaybe<Scalars['String']['input']>;
  internalName_not_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  subnavigation?: InputMaybe<CfNavigationLinkNestedFilter>;
  subnavigationCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_contains?: InputMaybe<Scalars['String']['input']>;
  title_exists?: InputMaybe<Scalars['Boolean']['input']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_not?: InputMaybe<Scalars['String']['input']>;
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type NavigationLinkLinkingCollections = {
  __typename?: 'NavigationLinkLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  navigationLinkCollection?: Maybe<NavigationLinkCollection>;
  navigationMenuCollection?: Maybe<NavigationMenuCollection>;
  settingsCollection?: Maybe<SettingsCollection>;
};


export type NavigationLinkLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type NavigationLinkLinkingCollectionsNavigationLinkCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<NavigationLinkLinkingCollectionsNavigationLinkCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type NavigationLinkLinkingCollectionsNavigationMenuCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<NavigationLinkLinkingCollectionsNavigationMenuCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type NavigationLinkLinkingCollectionsSettingsCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<NavigationLinkLinkingCollectionsSettingsCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

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
  internalName?: Maybe<Scalars['String']['output']>;
  linkedFrom?: Maybe<NavigationMenuLinkingCollections>;
  navigationMenuCollection?: Maybe<NavigationMenuNavigationMenuCollection>;
  position?: Maybe<Scalars['String']['output']>;
  sys: Sys;
};


/** [See type definition](https://app.contentful.com/spaces/z7u9lztnactc/content_types/navigationMenu) */
export type NavigationMenuInternalNameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/z7u9lztnactc/content_types/navigationMenu) */
export type NavigationMenuLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/z7u9lztnactc/content_types/navigationMenu) */
export type NavigationMenuNavigationMenuCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<NavigationMenuNavigationMenuCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<NavigationLinkFilter>;
};


/** [See type definition](https://app.contentful.com/spaces/z7u9lztnactc/content_types/navigationMenu) */
export type NavigationMenuPositionArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type NavigationMenuCollection = {
  __typename?: 'NavigationMenuCollection';
  items: Array<Maybe<NavigationMenu>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type NavigationMenuFilter = {
  AND?: InputMaybe<Array<InputMaybe<NavigationMenuFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<NavigationMenuFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  internalName?: InputMaybe<Scalars['String']['input']>;
  internalName_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalName_not?: InputMaybe<Scalars['String']['input']>;
  internalName_not_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  navigationMenu?: InputMaybe<CfNavigationLinkNestedFilter>;
  navigationMenuCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  position?: InputMaybe<Scalars['String']['input']>;
  position_contains?: InputMaybe<Scalars['String']['input']>;
  position_exists?: InputMaybe<Scalars['Boolean']['input']>;
  position_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  position_not?: InputMaybe<Scalars['String']['input']>;
  position_not_contains?: InputMaybe<Scalars['String']['input']>;
  position_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
};

export type NavigationMenuLinkingCollections = {
  __typename?: 'NavigationMenuLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};


export type NavigationMenuLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
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
  author?: Maybe<ComponentAuthor>;
  content?: Maybe<PageBlogPostContent>;
  contentfulMetadata: ContentfulMetadata;
  featuredImage?: Maybe<Asset>;
  internalName?: Maybe<Scalars['String']['output']>;
  linkedFrom?: Maybe<PageBlogPostLinkingCollections>;
  publishedDate?: Maybe<Scalars['DateTime']['output']>;
  relatedBlogPostsCollection?: Maybe<PageBlogPostRelatedBlogPostsCollection>;
  seoFields?: Maybe<ComponentSeo>;
  shortDescription?: Maybe<Scalars['String']['output']>;
  slug?: Maybe<Scalars['String']['output']>;
  sys: Sys;
  title?: Maybe<Scalars['String']['output']>;
};


/** To create individual blog posts [See type definition](https://app.contentful.com/spaces/z7u9lztnactc/content_types/pageBlogPost) */
export type PageBlogPostAuthorArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<ComponentAuthorFilter>;
};


/** To create individual blog posts [See type definition](https://app.contentful.com/spaces/z7u9lztnactc/content_types/pageBlogPost) */
export type PageBlogPostContentArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** To create individual blog posts [See type definition](https://app.contentful.com/spaces/z7u9lztnactc/content_types/pageBlogPost) */
export type PageBlogPostFeaturedImageArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


/** To create individual blog posts [See type definition](https://app.contentful.com/spaces/z7u9lztnactc/content_types/pageBlogPost) */
export type PageBlogPostInternalNameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** To create individual blog posts [See type definition](https://app.contentful.com/spaces/z7u9lztnactc/content_types/pageBlogPost) */
export type PageBlogPostLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** To create individual blog posts [See type definition](https://app.contentful.com/spaces/z7u9lztnactc/content_types/pageBlogPost) */
export type PageBlogPostPublishedDateArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** To create individual blog posts [See type definition](https://app.contentful.com/spaces/z7u9lztnactc/content_types/pageBlogPost) */
export type PageBlogPostRelatedBlogPostsCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<PageBlogPostRelatedBlogPostsCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<PageBlogPostFilter>;
};


/** To create individual blog posts [See type definition](https://app.contentful.com/spaces/z7u9lztnactc/content_types/pageBlogPost) */
export type PageBlogPostSeoFieldsArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<ComponentSeoFilter>;
};


/** To create individual blog posts [See type definition](https://app.contentful.com/spaces/z7u9lztnactc/content_types/pageBlogPost) */
export type PageBlogPostShortDescriptionArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** To create individual blog posts [See type definition](https://app.contentful.com/spaces/z7u9lztnactc/content_types/pageBlogPost) */
export type PageBlogPostSlugArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** To create individual blog posts [See type definition](https://app.contentful.com/spaces/z7u9lztnactc/content_types/pageBlogPost) */
export type PageBlogPostTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
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
  AND?: InputMaybe<Array<InputMaybe<PageBlogPostFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<PageBlogPostFilter>>>;
  author?: InputMaybe<CfComponentAuthorNestedFilter>;
  author_exists?: InputMaybe<Scalars['Boolean']['input']>;
  content_contains?: InputMaybe<Scalars['String']['input']>;
  content_exists?: InputMaybe<Scalars['Boolean']['input']>;
  content_not_contains?: InputMaybe<Scalars['String']['input']>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  featuredImage_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalName?: InputMaybe<Scalars['String']['input']>;
  internalName_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalName_not?: InputMaybe<Scalars['String']['input']>;
  internalName_not_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  publishedDate?: InputMaybe<Scalars['DateTime']['input']>;
  publishedDate_exists?: InputMaybe<Scalars['Boolean']['input']>;
  publishedDate_gt?: InputMaybe<Scalars['DateTime']['input']>;
  publishedDate_gte?: InputMaybe<Scalars['DateTime']['input']>;
  publishedDate_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedDate_lt?: InputMaybe<Scalars['DateTime']['input']>;
  publishedDate_lte?: InputMaybe<Scalars['DateTime']['input']>;
  publishedDate_not?: InputMaybe<Scalars['DateTime']['input']>;
  publishedDate_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  relatedBlogPosts?: InputMaybe<CfPageBlogPostNestedFilter>;
  relatedBlogPostsCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  seoFields?: InputMaybe<CfComponentSeoNestedFilter>;
  seoFields_exists?: InputMaybe<Scalars['Boolean']['input']>;
  shortDescription?: InputMaybe<Scalars['String']['input']>;
  shortDescription_contains?: InputMaybe<Scalars['String']['input']>;
  shortDescription_exists?: InputMaybe<Scalars['Boolean']['input']>;
  shortDescription_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  shortDescription_not?: InputMaybe<Scalars['String']['input']>;
  shortDescription_not_contains?: InputMaybe<Scalars['String']['input']>;
  shortDescription_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  slug?: InputMaybe<Scalars['String']['input']>;
  slug_contains?: InputMaybe<Scalars['String']['input']>;
  slug_exists?: InputMaybe<Scalars['Boolean']['input']>;
  slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  slug_not?: InputMaybe<Scalars['String']['input']>;
  slug_not_contains?: InputMaybe<Scalars['String']['input']>;
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_contains?: InputMaybe<Scalars['String']['input']>;
  title_exists?: InputMaybe<Scalars['Boolean']['input']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_not?: InputMaybe<Scalars['String']['input']>;
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type PageBlogPostLinkingCollections = {
  __typename?: 'PageBlogPostLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  pageBlogPostCollection?: Maybe<PageBlogPostCollection>;
  pageLandingCollection?: Maybe<PageLandingCollection>;
};


export type PageBlogPostLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type PageBlogPostLinkingCollectionsPageBlogPostCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<PageBlogPostLinkingCollectionsPageBlogPostCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type PageBlogPostLinkingCollectionsPageLandingCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<PageBlogPostLinkingCollectionsPageLandingCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
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
  internalName?: Maybe<Scalars['String']['output']>;
  linkedFrom?: Maybe<PageDefaultLinkingCollections>;
  pageContent?: Maybe<PageDefaultPageContent>;
  pageSeo?: Maybe<ComponentSeo>;
  pageTitle?: Maybe<Scalars['String']['output']>;
  slug?: Maybe<Scalars['String']['output']>;
  sys: Sys;
};


/** [See type definition](https://app.contentful.com/spaces/z7u9lztnactc/content_types/pageDefault) */
export type PageDefaultInternalNameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/z7u9lztnactc/content_types/pageDefault) */
export type PageDefaultLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/z7u9lztnactc/content_types/pageDefault) */
export type PageDefaultPageContentArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/z7u9lztnactc/content_types/pageDefault) */
export type PageDefaultPageSeoArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<ComponentSeoFilter>;
};


/** [See type definition](https://app.contentful.com/spaces/z7u9lztnactc/content_types/pageDefault) */
export type PageDefaultPageTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/z7u9lztnactc/content_types/pageDefault) */
export type PageDefaultSlugArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type PageDefaultCollection = {
  __typename?: 'PageDefaultCollection';
  items: Array<Maybe<PageDefault>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type PageDefaultFilter = {
  AND?: InputMaybe<Array<InputMaybe<PageDefaultFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<PageDefaultFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  internalName?: InputMaybe<Scalars['String']['input']>;
  internalName_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalName_not?: InputMaybe<Scalars['String']['input']>;
  internalName_not_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  pageContent_contains?: InputMaybe<Scalars['String']['input']>;
  pageContent_exists?: InputMaybe<Scalars['Boolean']['input']>;
  pageContent_not_contains?: InputMaybe<Scalars['String']['input']>;
  pageSeo?: InputMaybe<CfComponentSeoNestedFilter>;
  pageSeo_exists?: InputMaybe<Scalars['Boolean']['input']>;
  pageTitle?: InputMaybe<Scalars['String']['input']>;
  pageTitle_contains?: InputMaybe<Scalars['String']['input']>;
  pageTitle_exists?: InputMaybe<Scalars['Boolean']['input']>;
  pageTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  pageTitle_not?: InputMaybe<Scalars['String']['input']>;
  pageTitle_not_contains?: InputMaybe<Scalars['String']['input']>;
  pageTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  slug?: InputMaybe<Scalars['String']['input']>;
  slug_contains?: InputMaybe<Scalars['String']['input']>;
  slug_exists?: InputMaybe<Scalars['Boolean']['input']>;
  slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  slug_not?: InputMaybe<Scalars['String']['input']>;
  slug_not_contains?: InputMaybe<Scalars['String']['input']>;
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
};

export type PageDefaultLinkingCollections = {
  __typename?: 'PageDefaultLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};


export type PageDefaultLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
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
  bannerImage?: Maybe<Asset>;
  companyLogo?: Maybe<Asset>;
  companyName?: Maybe<Scalars['String']['output']>;
  contentfulMetadata: ContentfulMetadata;
  endDate?: Maybe<Scalars['DateTime']['output']>;
  internalTitle?: Maybe<Scalars['String']['output']>;
  jobDescription?: Maybe<PageExperienceJobDescription>;
  linkedFrom?: Maybe<PageExperienceLinkingCollections>;
  positionTitle?: Maybe<Scalars['String']['output']>;
  skillsUsed?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  slug?: Maybe<Scalars['String']['output']>;
  startDate?: Maybe<Scalars['DateTime']['output']>;
  sys: Sys;
  website?: Maybe<Scalars['String']['output']>;
};


/** Job Description [See type definition](https://app.contentful.com/spaces/z7u9lztnactc/content_types/pageExperience) */
export type PageExperienceBannerImageArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Job Description [See type definition](https://app.contentful.com/spaces/z7u9lztnactc/content_types/pageExperience) */
export type PageExperienceCompanyLogoArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Job Description [See type definition](https://app.contentful.com/spaces/z7u9lztnactc/content_types/pageExperience) */
export type PageExperienceCompanyNameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Job Description [See type definition](https://app.contentful.com/spaces/z7u9lztnactc/content_types/pageExperience) */
export type PageExperienceEndDateArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Job Description [See type definition](https://app.contentful.com/spaces/z7u9lztnactc/content_types/pageExperience) */
export type PageExperienceInternalTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Job Description [See type definition](https://app.contentful.com/spaces/z7u9lztnactc/content_types/pageExperience) */
export type PageExperienceJobDescriptionArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Job Description [See type definition](https://app.contentful.com/spaces/z7u9lztnactc/content_types/pageExperience) */
export type PageExperienceLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** Job Description [See type definition](https://app.contentful.com/spaces/z7u9lztnactc/content_types/pageExperience) */
export type PageExperiencePositionTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Job Description [See type definition](https://app.contentful.com/spaces/z7u9lztnactc/content_types/pageExperience) */
export type PageExperienceSkillsUsedArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Job Description [See type definition](https://app.contentful.com/spaces/z7u9lztnactc/content_types/pageExperience) */
export type PageExperienceSlugArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Job Description [See type definition](https://app.contentful.com/spaces/z7u9lztnactc/content_types/pageExperience) */
export type PageExperienceStartDateArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Job Description [See type definition](https://app.contentful.com/spaces/z7u9lztnactc/content_types/pageExperience) */
export type PageExperienceWebsiteArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type PageExperienceCollection = {
  __typename?: 'PageExperienceCollection';
  items: Array<Maybe<PageExperience>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type PageExperienceFilter = {
  AND?: InputMaybe<Array<InputMaybe<PageExperienceFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<PageExperienceFilter>>>;
  bannerImage_exists?: InputMaybe<Scalars['Boolean']['input']>;
  companyLogo_exists?: InputMaybe<Scalars['Boolean']['input']>;
  companyName?: InputMaybe<Scalars['String']['input']>;
  companyName_contains?: InputMaybe<Scalars['String']['input']>;
  companyName_exists?: InputMaybe<Scalars['Boolean']['input']>;
  companyName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  companyName_not?: InputMaybe<Scalars['String']['input']>;
  companyName_not_contains?: InputMaybe<Scalars['String']['input']>;
  companyName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  endDate?: InputMaybe<Scalars['DateTime']['input']>;
  endDate_exists?: InputMaybe<Scalars['Boolean']['input']>;
  endDate_gt?: InputMaybe<Scalars['DateTime']['input']>;
  endDate_gte?: InputMaybe<Scalars['DateTime']['input']>;
  endDate_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  endDate_lt?: InputMaybe<Scalars['DateTime']['input']>;
  endDate_lte?: InputMaybe<Scalars['DateTime']['input']>;
  endDate_not?: InputMaybe<Scalars['DateTime']['input']>;
  endDate_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  internalTitle?: InputMaybe<Scalars['String']['input']>;
  internalTitle_contains?: InputMaybe<Scalars['String']['input']>;
  internalTitle_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalTitle_not?: InputMaybe<Scalars['String']['input']>;
  internalTitle_not_contains?: InputMaybe<Scalars['String']['input']>;
  internalTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  jobDescription_contains?: InputMaybe<Scalars['String']['input']>;
  jobDescription_exists?: InputMaybe<Scalars['Boolean']['input']>;
  jobDescription_not_contains?: InputMaybe<Scalars['String']['input']>;
  positionTitle?: InputMaybe<Scalars['String']['input']>;
  positionTitle_contains?: InputMaybe<Scalars['String']['input']>;
  positionTitle_exists?: InputMaybe<Scalars['Boolean']['input']>;
  positionTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  positionTitle_not?: InputMaybe<Scalars['String']['input']>;
  positionTitle_not_contains?: InputMaybe<Scalars['String']['input']>;
  positionTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  skillsUsed_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  skillsUsed_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  skillsUsed_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  skillsUsed_exists?: InputMaybe<Scalars['Boolean']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  slug_contains?: InputMaybe<Scalars['String']['input']>;
  slug_exists?: InputMaybe<Scalars['Boolean']['input']>;
  slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  slug_not?: InputMaybe<Scalars['String']['input']>;
  slug_not_contains?: InputMaybe<Scalars['String']['input']>;
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  startDate?: InputMaybe<Scalars['DateTime']['input']>;
  startDate_exists?: InputMaybe<Scalars['Boolean']['input']>;
  startDate_gt?: InputMaybe<Scalars['DateTime']['input']>;
  startDate_gte?: InputMaybe<Scalars['DateTime']['input']>;
  startDate_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  startDate_lt?: InputMaybe<Scalars['DateTime']['input']>;
  startDate_lte?: InputMaybe<Scalars['DateTime']['input']>;
  startDate_not?: InputMaybe<Scalars['DateTime']['input']>;
  startDate_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  sys?: InputMaybe<SysFilter>;
  website?: InputMaybe<Scalars['String']['input']>;
  website_contains?: InputMaybe<Scalars['String']['input']>;
  website_exists?: InputMaybe<Scalars['Boolean']['input']>;
  website_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  website_not?: InputMaybe<Scalars['String']['input']>;
  website_not_contains?: InputMaybe<Scalars['String']['input']>;
  website_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
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
  entryCollection?: Maybe<EntryCollection>;
};


export type PageExperienceLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
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
  featuredBlogPost?: Maybe<PageBlogPost>;
  hero?: Maybe<ComponentHero>;
  internalName?: Maybe<Scalars['String']['output']>;
  linkedFrom?: Maybe<PageLandingLinkingCollections>;
  seoFields?: Maybe<ComponentSeo>;
  sys: Sys;
};


/** To have an entry point for the app (e.g. Homepage) [See type definition](https://app.contentful.com/spaces/z7u9lztnactc/content_types/pageLanding) */
export type PageLandingFeaturedBlogPostArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<PageBlogPostFilter>;
};


/** To have an entry point for the app (e.g. Homepage) [See type definition](https://app.contentful.com/spaces/z7u9lztnactc/content_types/pageLanding) */
export type PageLandingHeroArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<ComponentHeroFilter>;
};


/** To have an entry point for the app (e.g. Homepage) [See type definition](https://app.contentful.com/spaces/z7u9lztnactc/content_types/pageLanding) */
export type PageLandingInternalNameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** To have an entry point for the app (e.g. Homepage) [See type definition](https://app.contentful.com/spaces/z7u9lztnactc/content_types/pageLanding) */
export type PageLandingLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** To have an entry point for the app (e.g. Homepage) [See type definition](https://app.contentful.com/spaces/z7u9lztnactc/content_types/pageLanding) */
export type PageLandingSeoFieldsArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<ComponentSeoFilter>;
};

export type PageLandingCollection = {
  __typename?: 'PageLandingCollection';
  items: Array<Maybe<PageLanding>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type PageLandingFilter = {
  AND?: InputMaybe<Array<InputMaybe<PageLandingFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<PageLandingFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  featuredBlogPost?: InputMaybe<CfPageBlogPostNestedFilter>;
  featuredBlogPost_exists?: InputMaybe<Scalars['Boolean']['input']>;
  hero?: InputMaybe<CfComponentHeroNestedFilter>;
  hero_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalName?: InputMaybe<Scalars['String']['input']>;
  internalName_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalName_not?: InputMaybe<Scalars['String']['input']>;
  internalName_not_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  seoFields?: InputMaybe<CfComponentSeoNestedFilter>;
  seoFields_exists?: InputMaybe<Scalars['Boolean']['input']>;
  sys?: InputMaybe<SysFilter>;
};

export type PageLandingLinkingCollections = {
  __typename?: 'PageLandingLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};


export type PageLandingLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
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
  internalName?: Maybe<Scalars['String']['output']>;
  linkedFrom?: Maybe<PageServiceLinkingCollections>;
  pageContent?: Maybe<PageServicePageContent>;
  pageSeo?: Maybe<ComponentSeo>;
  pageTitle?: Maybe<Scalars['String']['output']>;
  slug?: Maybe<Scalars['String']['output']>;
  sys: Sys;
};


/** [See type definition](https://app.contentful.com/spaces/z7u9lztnactc/content_types/pageService) */
export type PageServiceInternalNameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/z7u9lztnactc/content_types/pageService) */
export type PageServiceLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/z7u9lztnactc/content_types/pageService) */
export type PageServicePageContentArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/z7u9lztnactc/content_types/pageService) */
export type PageServicePageSeoArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<ComponentSeoFilter>;
};


/** [See type definition](https://app.contentful.com/spaces/z7u9lztnactc/content_types/pageService) */
export type PageServicePageTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/z7u9lztnactc/content_types/pageService) */
export type PageServiceSlugArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type PageServiceCollection = {
  __typename?: 'PageServiceCollection';
  items: Array<Maybe<PageService>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type PageServiceFilter = {
  AND?: InputMaybe<Array<InputMaybe<PageServiceFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<PageServiceFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  internalName?: InputMaybe<Scalars['String']['input']>;
  internalName_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalName_not?: InputMaybe<Scalars['String']['input']>;
  internalName_not_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  pageContent_contains?: InputMaybe<Scalars['String']['input']>;
  pageContent_exists?: InputMaybe<Scalars['Boolean']['input']>;
  pageContent_not_contains?: InputMaybe<Scalars['String']['input']>;
  pageSeo?: InputMaybe<CfComponentSeoNestedFilter>;
  pageSeo_exists?: InputMaybe<Scalars['Boolean']['input']>;
  pageTitle?: InputMaybe<Scalars['String']['input']>;
  pageTitle_contains?: InputMaybe<Scalars['String']['input']>;
  pageTitle_exists?: InputMaybe<Scalars['Boolean']['input']>;
  pageTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  pageTitle_not?: InputMaybe<Scalars['String']['input']>;
  pageTitle_not_contains?: InputMaybe<Scalars['String']['input']>;
  pageTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  slug?: InputMaybe<Scalars['String']['input']>;
  slug_contains?: InputMaybe<Scalars['String']['input']>;
  slug_exists?: InputMaybe<Scalars['Boolean']['input']>;
  slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  slug_not?: InputMaybe<Scalars['String']['input']>;
  slug_not_contains?: InputMaybe<Scalars['String']['input']>;
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
};

export type PageServiceLinkingCollections = {
  __typename?: 'PageServiceLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};


export type PageServiceLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
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
  _node?: Maybe<_Node>;
  _nodes: Array<Maybe<_Node>>;
  asset?: Maybe<Asset>;
  assetCollection?: Maybe<AssetCollection>;
  componentAuthor?: Maybe<ComponentAuthor>;
  componentAuthorCollection?: Maybe<ComponentAuthorCollection>;
  componentCta?: Maybe<ComponentCta>;
  componentCtaCollection?: Maybe<ComponentCtaCollection>;
  componentHero?: Maybe<ComponentHero>;
  componentHeroCollection?: Maybe<ComponentHeroCollection>;
  componentRichImage?: Maybe<ComponentRichImage>;
  componentRichImageCollection?: Maybe<ComponentRichImageCollection>;
  componentSeo?: Maybe<ComponentSeo>;
  componentSeoCollection?: Maybe<ComponentSeoCollection>;
  entryCollection?: Maybe<EntryCollection>;
  navigationLink?: Maybe<NavigationLink>;
  navigationLinkCollection?: Maybe<NavigationLinkCollection>;
  navigationMenu?: Maybe<NavigationMenu>;
  navigationMenuCollection?: Maybe<NavigationMenuCollection>;
  pageBlogPost?: Maybe<PageBlogPost>;
  pageBlogPostCollection?: Maybe<PageBlogPostCollection>;
  pageDefault?: Maybe<PageDefault>;
  pageDefaultCollection?: Maybe<PageDefaultCollection>;
  pageExperience?: Maybe<PageExperience>;
  pageExperienceCollection?: Maybe<PageExperienceCollection>;
  pageLanding?: Maybe<PageLanding>;
  pageLandingCollection?: Maybe<PageLandingCollection>;
  pageService?: Maybe<PageService>;
  pageServiceCollection?: Maybe<PageServiceCollection>;
  settings?: Maybe<Settings>;
  settingsCollection?: Maybe<SettingsCollection>;
  vq5Hs6VZcdFFqcGewQDi5?: Maybe<Vq5Hs6VZcdFFqcGewQDi5>;
  vq5Hs6VZcdFFqcGewQDi5Collection?: Maybe<Vq5Hs6VZcdFFqcGewQDi5Collection>;
};


export type Query_NodeArgs = {
  id: Scalars['ID']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type Query_NodesArgs = {
  ids: Array<Scalars['ID']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryAssetArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryAssetCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<AssetOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<AssetFilter>;
};


export type QueryComponentAuthorArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryComponentAuthorCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<ComponentAuthorOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ComponentAuthorFilter>;
};


export type QueryComponentCtaArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryComponentCtaCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<ComponentCtaOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ComponentCtaFilter>;
};


export type QueryComponentHeroArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryComponentHeroCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<ComponentHeroOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ComponentHeroFilter>;
};


export type QueryComponentRichImageArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryComponentRichImageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<ComponentRichImageOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ComponentRichImageFilter>;
};


export type QueryComponentSeoArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryComponentSeoCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<ComponentSeoOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ComponentSeoFilter>;
};


export type QueryEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<EntryOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<EntryFilter>;
};


export type QueryNavigationLinkArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryNavigationLinkCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<NavigationLinkOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<NavigationLinkFilter>;
};


export type QueryNavigationMenuArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryNavigationMenuCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<NavigationMenuOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<NavigationMenuFilter>;
};


export type QueryPageBlogPostArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryPageBlogPostCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<PageBlogPostOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<PageBlogPostFilter>;
};


export type QueryPageDefaultArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryPageDefaultCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<PageDefaultOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<PageDefaultFilter>;
};


export type QueryPageExperienceArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryPageExperienceCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<PageExperienceOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<PageExperienceFilter>;
};


export type QueryPageLandingArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryPageLandingCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<PageLandingOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<PageLandingFilter>;
};


export type QueryPageServiceArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryPageServiceCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<PageServiceOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<PageServiceFilter>;
};


export type QuerySettingsArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QuerySettingsCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<SettingsOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<SettingsFilter>;
};


export type QueryVq5Hs6VZcdFFqcGewQDi5Args = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryVq5Hs6VZcdFFqcGewQDi5CollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<Vq5Hs6VZcdFFqcGewQDi5Order>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<Vq5Hs6VZcdFFqcGewQDi5Filter>;
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
  brandingDogNoShadow?: Maybe<Asset>;
  brandingDogShadow?: Maybe<Asset>;
  brandingFull?: Maybe<Asset>;
  brandingKatakanShadow?: Maybe<Asset>;
  brandingKatakanaNoShadow?: Maybe<Asset>;
  brandingTextNoShadow?: Maybe<Asset>;
  brandingTextShadow?: Maybe<Asset>;
  contentfulMetadata: ContentfulMetadata;
  footerCopyrightText?: Maybe<Scalars['String']['output']>;
  footerLegalNavigationCollection?: Maybe<SettingsFooterLegalNavigationCollection>;
  footerServicesNavigationCollection?: Maybe<SettingsFooterServicesNavigationCollection>;
  footerSiteNavigationCollection?: Maybe<SettingsFooterSiteNavigationCollection>;
  headerNavigationCollection?: Maybe<SettingsHeaderNavigationCollection>;
  internalName?: Maybe<Scalars['String']['output']>;
  linkedFrom?: Maybe<SettingsLinkingCollections>;
  logo?: Maybe<Asset>;
  seo?: Maybe<ComponentSeo>;
  siteDescription?: Maybe<Scalars['String']['output']>;
  siteTitle?: Maybe<Scalars['String']['output']>;
  socialLinksCollection?: Maybe<SettingsSocialLinksCollection>;
  sys: Sys;
};


/** [See type definition](https://app.contentful.com/spaces/z7u9lztnactc/content_types/settings) */
export type SettingsBrandingDogNoShadowArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/z7u9lztnactc/content_types/settings) */
export type SettingsBrandingDogShadowArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/z7u9lztnactc/content_types/settings) */
export type SettingsBrandingFullArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/z7u9lztnactc/content_types/settings) */
export type SettingsBrandingKatakanShadowArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/z7u9lztnactc/content_types/settings) */
export type SettingsBrandingKatakanaNoShadowArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/z7u9lztnactc/content_types/settings) */
export type SettingsBrandingTextNoShadowArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/z7u9lztnactc/content_types/settings) */
export type SettingsBrandingTextShadowArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/z7u9lztnactc/content_types/settings) */
export type SettingsFooterCopyrightTextArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/z7u9lztnactc/content_types/settings) */
export type SettingsFooterLegalNavigationCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<SettingsFooterLegalNavigationCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<NavigationLinkFilter>;
};


/** [See type definition](https://app.contentful.com/spaces/z7u9lztnactc/content_types/settings) */
export type SettingsFooterServicesNavigationCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<SettingsFooterServicesNavigationCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<NavigationLinkFilter>;
};


/** [See type definition](https://app.contentful.com/spaces/z7u9lztnactc/content_types/settings) */
export type SettingsFooterSiteNavigationCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<SettingsFooterSiteNavigationCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<NavigationLinkFilter>;
};


/** [See type definition](https://app.contentful.com/spaces/z7u9lztnactc/content_types/settings) */
export type SettingsHeaderNavigationCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<SettingsHeaderNavigationCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<NavigationLinkFilter>;
};


/** [See type definition](https://app.contentful.com/spaces/z7u9lztnactc/content_types/settings) */
export type SettingsInternalNameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/z7u9lztnactc/content_types/settings) */
export type SettingsLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/z7u9lztnactc/content_types/settings) */
export type SettingsLogoArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/z7u9lztnactc/content_types/settings) */
export type SettingsSeoArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<ComponentSeoFilter>;
};


/** [See type definition](https://app.contentful.com/spaces/z7u9lztnactc/content_types/settings) */
export type SettingsSiteDescriptionArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/z7u9lztnactc/content_types/settings) */
export type SettingsSiteTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/z7u9lztnactc/content_types/settings) */
export type SettingsSocialLinksCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<SettingsSocialLinksCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<NavigationLinkFilter>;
};

export type SettingsCollection = {
  __typename?: 'SettingsCollection';
  items: Array<Maybe<Settings>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type SettingsFilter = {
  AND?: InputMaybe<Array<InputMaybe<SettingsFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<SettingsFilter>>>;
  brandingDogNoShadow_exists?: InputMaybe<Scalars['Boolean']['input']>;
  brandingDogShadow_exists?: InputMaybe<Scalars['Boolean']['input']>;
  brandingFull_exists?: InputMaybe<Scalars['Boolean']['input']>;
  brandingKatakanShadow_exists?: InputMaybe<Scalars['Boolean']['input']>;
  brandingKatakanaNoShadow_exists?: InputMaybe<Scalars['Boolean']['input']>;
  brandingTextNoShadow_exists?: InputMaybe<Scalars['Boolean']['input']>;
  brandingTextShadow_exists?: InputMaybe<Scalars['Boolean']['input']>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  footerCopyrightText?: InputMaybe<Scalars['String']['input']>;
  footerCopyrightText_contains?: InputMaybe<Scalars['String']['input']>;
  footerCopyrightText_exists?: InputMaybe<Scalars['Boolean']['input']>;
  footerCopyrightText_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  footerCopyrightText_not?: InputMaybe<Scalars['String']['input']>;
  footerCopyrightText_not_contains?: InputMaybe<Scalars['String']['input']>;
  footerCopyrightText_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  footerLegalNavigation?: InputMaybe<CfNavigationLinkNestedFilter>;
  footerLegalNavigationCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  footerServicesNavigation?: InputMaybe<CfNavigationLinkNestedFilter>;
  footerServicesNavigationCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  footerSiteNavigation?: InputMaybe<CfNavigationLinkNestedFilter>;
  footerSiteNavigationCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  headerNavigation?: InputMaybe<CfNavigationLinkNestedFilter>;
  headerNavigationCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalName?: InputMaybe<Scalars['String']['input']>;
  internalName_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalName_not?: InputMaybe<Scalars['String']['input']>;
  internalName_not_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  logo_exists?: InputMaybe<Scalars['Boolean']['input']>;
  seo?: InputMaybe<CfComponentSeoNestedFilter>;
  seo_exists?: InputMaybe<Scalars['Boolean']['input']>;
  siteDescription?: InputMaybe<Scalars['String']['input']>;
  siteDescription_contains?: InputMaybe<Scalars['String']['input']>;
  siteDescription_exists?: InputMaybe<Scalars['Boolean']['input']>;
  siteDescription_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  siteDescription_not?: InputMaybe<Scalars['String']['input']>;
  siteDescription_not_contains?: InputMaybe<Scalars['String']['input']>;
  siteDescription_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  siteTitle?: InputMaybe<Scalars['String']['input']>;
  siteTitle_contains?: InputMaybe<Scalars['String']['input']>;
  siteTitle_exists?: InputMaybe<Scalars['Boolean']['input']>;
  siteTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  siteTitle_not?: InputMaybe<Scalars['String']['input']>;
  siteTitle_not_contains?: InputMaybe<Scalars['String']['input']>;
  siteTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  socialLinks?: InputMaybe<CfNavigationLinkNestedFilter>;
  socialLinksCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  sys?: InputMaybe<SysFilter>;
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
  entryCollection?: Maybe<EntryCollection>;
};


export type SettingsLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
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
  firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['String']['output'];
  /** The locale that was requested. */
  locale?: Maybe<Scalars['String']['output']>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  publishedVersion?: Maybe<Scalars['Int']['output']>;
  spaceId: Scalars['String']['output'];
};

export type SysFilter = {
  firstPublishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  firstPublishedAt_exists?: InputMaybe<Scalars['Boolean']['input']>;
  firstPublishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  firstPublishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  firstPublishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  firstPublishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  firstPublishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  firstPublishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  firstPublishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  id?: InputMaybe<Scalars['String']['input']>;
  id_contains?: InputMaybe<Scalars['String']['input']>;
  id_exists?: InputMaybe<Scalars['Boolean']['input']>;
  id_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id_not?: InputMaybe<Scalars['String']['input']>;
  id_not_contains?: InputMaybe<Scalars['String']['input']>;
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  publishedAt_exists?: InputMaybe<Scalars['Boolean']['input']>;
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedVersion?: InputMaybe<Scalars['Float']['input']>;
  publishedVersion_exists?: InputMaybe<Scalars['Boolean']['input']>;
  publishedVersion_gt?: InputMaybe<Scalars['Float']['input']>;
  publishedVersion_gte?: InputMaybe<Scalars['Float']['input']>;
  publishedVersion_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  publishedVersion_lt?: InputMaybe<Scalars['Float']['input']>;
  publishedVersion_lte?: InputMaybe<Scalars['Float']['input']>;
  publishedVersion_not?: InputMaybe<Scalars['Float']['input']>;
  publishedVersion_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
};

/**
 * Represents a taxonomy concept entity for finding and organizing content easily.
 *         Find out more here: https://www.contentful.com/developers/docs/references/content-delivery-api/#/reference/content-concepts
 */
export type TaxonomyConcept = {
  __typename?: 'TaxonomyConcept';
  id?: Maybe<Scalars['String']['output']>;
};

/** [See type definition](https://app.contentful.com/spaces/z7u9lztnactc/content_types/Vq5Hs6vZcdFFqcGewQDi5) */
export type Vq5Hs6VZcdFFqcGewQDi5 = Entry & _Node & {
  __typename?: 'Vq5Hs6VZcdFFqcGewQDi5';
  _id: Scalars['ID']['output'];
  contentfulMetadata: ContentfulMetadata;
  description?: Maybe<Scalars['String']['output']>;
  image?: Maybe<Asset>;
  linkedFrom?: Maybe<Vq5Hs6VZcdFFqcGewQDi5LinkingCollections>;
  sys: Sys;
  title?: Maybe<Scalars['String']['output']>;
  url?: Maybe<Scalars['String']['output']>;
};


/** [See type definition](https://app.contentful.com/spaces/z7u9lztnactc/content_types/Vq5Hs6vZcdFFqcGewQDi5) */
export type Vq5Hs6VZcdFFqcGewQDi5DescriptionArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/z7u9lztnactc/content_types/Vq5Hs6vZcdFFqcGewQDi5) */
export type Vq5Hs6VZcdFFqcGewQDi5ImageArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/z7u9lztnactc/content_types/Vq5Hs6vZcdFFqcGewQDi5) */
export type Vq5Hs6VZcdFFqcGewQDi5LinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/z7u9lztnactc/content_types/Vq5Hs6vZcdFFqcGewQDi5) */
export type Vq5Hs6VZcdFFqcGewQDi5TitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/z7u9lztnactc/content_types/Vq5Hs6vZcdFFqcGewQDi5) */
export type Vq5Hs6VZcdFFqcGewQDi5UrlArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type Vq5Hs6VZcdFFqcGewQDi5Collection = {
  __typename?: 'Vq5Hs6VZcdFFqcGewQDi5Collection';
  items: Array<Maybe<Vq5Hs6VZcdFFqcGewQDi5>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type Vq5Hs6VZcdFFqcGewQDi5Filter = {
  AND?: InputMaybe<Array<InputMaybe<Vq5Hs6VZcdFFqcGewQDi5Filter>>>;
  OR?: InputMaybe<Array<InputMaybe<Vq5Hs6VZcdFFqcGewQDi5Filter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  description?: InputMaybe<Scalars['String']['input']>;
  description_contains?: InputMaybe<Scalars['String']['input']>;
  description_exists?: InputMaybe<Scalars['Boolean']['input']>;
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  description_not?: InputMaybe<Scalars['String']['input']>;
  description_not_contains?: InputMaybe<Scalars['String']['input']>;
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  image_exists?: InputMaybe<Scalars['Boolean']['input']>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_contains?: InputMaybe<Scalars['String']['input']>;
  title_exists?: InputMaybe<Scalars['Boolean']['input']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_not?: InputMaybe<Scalars['String']['input']>;
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  url?: InputMaybe<Scalars['String']['input']>;
  url_contains?: InputMaybe<Scalars['String']['input']>;
  url_exists?: InputMaybe<Scalars['Boolean']['input']>;
  url_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  url_not?: InputMaybe<Scalars['String']['input']>;
  url_not_contains?: InputMaybe<Scalars['String']['input']>;
  url_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Vq5Hs6VZcdFFqcGewQDi5LinkingCollections = {
  __typename?: 'Vq5Hs6VZcdFFqcGewQDi5LinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};


export type Vq5Hs6VZcdFFqcGewQDi5LinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
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
  AND?: InputMaybe<Array<InputMaybe<CfComponentAuthorNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfComponentAuthorNestedFilter>>>;
  avatar_exists?: InputMaybe<Scalars['Boolean']['input']>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  internalName?: InputMaybe<Scalars['String']['input']>;
  internalName_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalName_not?: InputMaybe<Scalars['String']['input']>;
  internalName_not_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_contains?: InputMaybe<Scalars['String']['input']>;
  name_exists?: InputMaybe<Scalars['Boolean']['input']>;
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  name_not?: InputMaybe<Scalars['String']['input']>;
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
};

export type CfComponentCtaNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfComponentCtaNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfComponentCtaNestedFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  ctaLink?: InputMaybe<Scalars['String']['input']>;
  ctaLink_contains?: InputMaybe<Scalars['String']['input']>;
  ctaLink_exists?: InputMaybe<Scalars['Boolean']['input']>;
  ctaLink_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  ctaLink_not?: InputMaybe<Scalars['String']['input']>;
  ctaLink_not_contains?: InputMaybe<Scalars['String']['input']>;
  ctaLink_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  ctaText?: InputMaybe<Scalars['String']['input']>;
  ctaText_contains?: InputMaybe<Scalars['String']['input']>;
  ctaText_exists?: InputMaybe<Scalars['Boolean']['input']>;
  ctaText_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  ctaText_not?: InputMaybe<Scalars['String']['input']>;
  ctaText_not_contains?: InputMaybe<Scalars['String']['input']>;
  ctaText_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  icon_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalName?: InputMaybe<Scalars['String']['input']>;
  internalName_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalName_not?: InputMaybe<Scalars['String']['input']>;
  internalName_not_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
};

export type CfComponentHeroNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfComponentHeroNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfComponentHeroNestedFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  ctaFieldsCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  heading?: InputMaybe<Scalars['String']['input']>;
  heading_contains?: InputMaybe<Scalars['String']['input']>;
  heading_exists?: InputMaybe<Scalars['Boolean']['input']>;
  heading_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  heading_not?: InputMaybe<Scalars['String']['input']>;
  heading_not_contains?: InputMaybe<Scalars['String']['input']>;
  heading_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  heroImage_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalName?: InputMaybe<Scalars['String']['input']>;
  internalName_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalName_not?: InputMaybe<Scalars['String']['input']>;
  internalName_not_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  subHeading?: InputMaybe<Scalars['String']['input']>;
  subHeading_contains?: InputMaybe<Scalars['String']['input']>;
  subHeading_exists?: InputMaybe<Scalars['Boolean']['input']>;
  subHeading_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  subHeading_not?: InputMaybe<Scalars['String']['input']>;
  subHeading_not_contains?: InputMaybe<Scalars['String']['input']>;
  subHeading_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
};

export type CfComponentSeoNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfComponentSeoNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfComponentSeoNestedFilter>>>;
  canonicalUrl?: InputMaybe<Scalars['String']['input']>;
  canonicalUrl_contains?: InputMaybe<Scalars['String']['input']>;
  canonicalUrl_exists?: InputMaybe<Scalars['Boolean']['input']>;
  canonicalUrl_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  canonicalUrl_not?: InputMaybe<Scalars['String']['input']>;
  canonicalUrl_not_contains?: InputMaybe<Scalars['String']['input']>;
  canonicalUrl_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  internalName?: InputMaybe<Scalars['String']['input']>;
  internalName_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalName_not?: InputMaybe<Scalars['String']['input']>;
  internalName_not_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  nofollow?: InputMaybe<Scalars['Boolean']['input']>;
  nofollow_exists?: InputMaybe<Scalars['Boolean']['input']>;
  nofollow_not?: InputMaybe<Scalars['Boolean']['input']>;
  noindex?: InputMaybe<Scalars['Boolean']['input']>;
  noindex_exists?: InputMaybe<Scalars['Boolean']['input']>;
  noindex_not?: InputMaybe<Scalars['Boolean']['input']>;
  pageDescription?: InputMaybe<Scalars['String']['input']>;
  pageDescription_contains?: InputMaybe<Scalars['String']['input']>;
  pageDescription_exists?: InputMaybe<Scalars['Boolean']['input']>;
  pageDescription_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  pageDescription_not?: InputMaybe<Scalars['String']['input']>;
  pageDescription_not_contains?: InputMaybe<Scalars['String']['input']>;
  pageDescription_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  pageTitle?: InputMaybe<Scalars['String']['input']>;
  pageTitle_contains?: InputMaybe<Scalars['String']['input']>;
  pageTitle_exists?: InputMaybe<Scalars['Boolean']['input']>;
  pageTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  pageTitle_not?: InputMaybe<Scalars['String']['input']>;
  pageTitle_not_contains?: InputMaybe<Scalars['String']['input']>;
  pageTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  shareImagesCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  sys?: InputMaybe<SysFilter>;
};

export type CfNavigationLinkNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfNavigationLinkNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfNavigationLinkNestedFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  href?: InputMaybe<Scalars['String']['input']>;
  href_contains?: InputMaybe<Scalars['String']['input']>;
  href_exists?: InputMaybe<Scalars['Boolean']['input']>;
  href_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  href_not?: InputMaybe<Scalars['String']['input']>;
  href_not_contains?: InputMaybe<Scalars['String']['input']>;
  href_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  icon_exists?: InputMaybe<Scalars['Boolean']['input']>;
  image_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalName?: InputMaybe<Scalars['String']['input']>;
  internalName_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalName_not?: InputMaybe<Scalars['String']['input']>;
  internalName_not_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  subnavigationCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_contains?: InputMaybe<Scalars['String']['input']>;
  title_exists?: InputMaybe<Scalars['Boolean']['input']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_not?: InputMaybe<Scalars['String']['input']>;
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type CfPageBlogPostNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfPageBlogPostNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfPageBlogPostNestedFilter>>>;
  author_exists?: InputMaybe<Scalars['Boolean']['input']>;
  content_contains?: InputMaybe<Scalars['String']['input']>;
  content_exists?: InputMaybe<Scalars['Boolean']['input']>;
  content_not_contains?: InputMaybe<Scalars['String']['input']>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  featuredImage_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalName?: InputMaybe<Scalars['String']['input']>;
  internalName_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalName_not?: InputMaybe<Scalars['String']['input']>;
  internalName_not_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  publishedDate?: InputMaybe<Scalars['DateTime']['input']>;
  publishedDate_exists?: InputMaybe<Scalars['Boolean']['input']>;
  publishedDate_gt?: InputMaybe<Scalars['DateTime']['input']>;
  publishedDate_gte?: InputMaybe<Scalars['DateTime']['input']>;
  publishedDate_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedDate_lt?: InputMaybe<Scalars['DateTime']['input']>;
  publishedDate_lte?: InputMaybe<Scalars['DateTime']['input']>;
  publishedDate_not?: InputMaybe<Scalars['DateTime']['input']>;
  publishedDate_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  relatedBlogPostsCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  seoFields_exists?: InputMaybe<Scalars['Boolean']['input']>;
  shortDescription?: InputMaybe<Scalars['String']['input']>;
  shortDescription_contains?: InputMaybe<Scalars['String']['input']>;
  shortDescription_exists?: InputMaybe<Scalars['Boolean']['input']>;
  shortDescription_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  shortDescription_not?: InputMaybe<Scalars['String']['input']>;
  shortDescription_not_contains?: InputMaybe<Scalars['String']['input']>;
  shortDescription_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  slug?: InputMaybe<Scalars['String']['input']>;
  slug_contains?: InputMaybe<Scalars['String']['input']>;
  slug_exists?: InputMaybe<Scalars['Boolean']['input']>;
  slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  slug_not?: InputMaybe<Scalars['String']['input']>;
  slug_not_contains?: InputMaybe<Scalars['String']['input']>;
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_contains?: InputMaybe<Scalars['String']['input']>;
  title_exists?: InputMaybe<Scalars['Boolean']['input']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_not?: InputMaybe<Scalars['String']['input']>;
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type GetSettingsQueryVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type GetSettingsQuery = { __typename?: 'Query', settings?: { __typename?: 'Settings', siteTitle?: string | null, siteDescription?: string | null, footerCopyrightText?: string | null, sys: { __typename?: 'Sys', id: string }, logo?: { __typename?: 'Asset', title?: string | null, description?: string | null, contentType?: string | null, fileName?: string | null, size?: number | null, url?: string | null, width?: number | null, height?: number | null } | null, headerNavigationCollection?: { __typename?: 'SettingsHeaderNavigationCollection', items: Array<{ __typename?: 'NavigationLink', title?: string | null, href?: string | null, icon?: { __typename?: 'Asset', title?: string | null, description?: string | null, contentType?: string | null, fileName?: string | null, size?: number | null, url?: string | null, width?: number | null, height?: number | null } | null } | null> } | null, footerServicesNavigationCollection?: { __typename?: 'SettingsFooterServicesNavigationCollection', items: Array<{ __typename?: 'NavigationLink', title?: string | null, href?: string | null, icon?: { __typename?: 'Asset', title?: string | null, description?: string | null, contentType?: string | null, fileName?: string | null, size?: number | null, url?: string | null, width?: number | null, height?: number | null } | null } | null> } | null, footerSiteNavigationCollection?: { __typename?: 'SettingsFooterSiteNavigationCollection', items: Array<{ __typename?: 'NavigationLink', title?: string | null, href?: string | null, icon?: { __typename?: 'Asset', title?: string | null, description?: string | null, contentType?: string | null, fileName?: string | null, size?: number | null, url?: string | null, width?: number | null, height?: number | null } | null } | null> } | null, footerLegalNavigationCollection?: { __typename?: 'SettingsFooterLegalNavigationCollection', items: Array<{ __typename?: 'NavigationLink', title?: string | null, href?: string | null, icon?: { __typename?: 'Asset', title?: string | null, description?: string | null, contentType?: string | null, fileName?: string | null, size?: number | null, url?: string | null, width?: number | null, height?: number | null } | null } | null> } | null, seo?: { __typename?: 'ComponentSeo', pageTitle?: string | null, pageDescription?: string | null, canonicalUrl?: string | null, nofollow?: boolean | null, noindex?: boolean | null, sys: { __typename?: 'Sys', id: string }, shareImagesCollection?: { __typename?: 'AssetCollection', items: Array<{ __typename?: 'Asset', title?: string | null, description?: string | null, contentType?: string | null, fileName?: string | null, size?: number | null, url?: string | null, width?: number | null, height?: number | null } | null> } | null } | null } | null };

export type SeoFieldsFragment = { __typename?: 'ComponentSeo', pageTitle?: string | null, pageDescription?: string | null, canonicalUrl?: string | null, nofollow?: boolean | null, noindex?: boolean | null, sys: { __typename?: 'Sys', id: string }, shareImagesCollection?: { __typename?: 'AssetCollection', items: Array<{ __typename?: 'Asset', title?: string | null, description?: string | null, contentType?: string | null, fileName?: string | null, size?: number | null, url?: string | null, width?: number | null, height?: number | null } | null> } | null };

export type ImageAssetFragment = { __typename?: 'Asset', title?: string | null, description?: string | null, contentType?: string | null, fileName?: string | null, size?: number | null, url?: string | null, width?: number | null, height?: number | null };

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
const GetSettingsDocumentString = print(GetSettingsDocument);
export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    getSettings(variables: GetSettingsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<{ data: GetSettingsQuery; errors?: GraphQLError[]; extensions?: any; headers: Headers; status: number; }> {
        return withWrapper((wrappedRequestHeaders) => client.rawRequest<GetSettingsQuery>(GetSettingsDocumentString, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getSettings', 'query', variables);
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;


export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;


/** Mapping of interface types */
export type ResolversInterfaceTypes<_RefType extends Record<string, unknown>> = {
  Entry: ( Omit<ComponentAuthor, 'linkedFrom'> & { linkedFrom?: Maybe<_RefType['ComponentAuthorLinkingCollections']> } ) | ( Omit<ComponentCta, 'linkedFrom'> & { linkedFrom?: Maybe<_RefType['ComponentCtaLinkingCollections']> } ) | ( Omit<ComponentHero, 'ctaFieldsCollection' | 'linkedFrom'> & { ctaFieldsCollection?: Maybe<_RefType['ComponentHeroCtaFieldsCollection']>, linkedFrom?: Maybe<_RefType['ComponentHeroLinkingCollections']> } ) | ( Omit<ComponentRichImage, 'linkedFrom'> & { linkedFrom?: Maybe<_RefType['ComponentRichImageLinkingCollections']> } ) | ( Omit<ComponentSeo, 'linkedFrom'> & { linkedFrom?: Maybe<_RefType['ComponentSeoLinkingCollections']> } ) | ( Omit<NavigationLink, 'linkedFrom' | 'subnavigationCollection'> & { linkedFrom?: Maybe<_RefType['NavigationLinkLinkingCollections']>, subnavigationCollection?: Maybe<_RefType['NavigationLinkSubnavigationCollection']> } ) | ( Omit<NavigationMenu, 'linkedFrom' | 'navigationMenuCollection'> & { linkedFrom?: Maybe<_RefType['NavigationMenuLinkingCollections']>, navigationMenuCollection?: Maybe<_RefType['NavigationMenuNavigationMenuCollection']> } ) | ( Omit<PageBlogPost, 'author' | 'content' | 'linkedFrom' | 'relatedBlogPostsCollection' | 'seoFields'> & { author?: Maybe<_RefType['ComponentAuthor']>, content?: Maybe<_RefType['PageBlogPostContent']>, linkedFrom?: Maybe<_RefType['PageBlogPostLinkingCollections']>, relatedBlogPostsCollection?: Maybe<_RefType['PageBlogPostRelatedBlogPostsCollection']>, seoFields?: Maybe<_RefType['ComponentSeo']> } ) | ( Omit<PageDefault, 'linkedFrom' | 'pageContent' | 'pageSeo'> & { linkedFrom?: Maybe<_RefType['PageDefaultLinkingCollections']>, pageContent?: Maybe<_RefType['PageDefaultPageContent']>, pageSeo?: Maybe<_RefType['ComponentSeo']> } ) | ( Omit<PageExperience, 'jobDescription' | 'linkedFrom'> & { jobDescription?: Maybe<_RefType['PageExperienceJobDescription']>, linkedFrom?: Maybe<_RefType['PageExperienceLinkingCollections']> } ) | ( Omit<PageLanding, 'featuredBlogPost' | 'hero' | 'linkedFrom' | 'seoFields'> & { featuredBlogPost?: Maybe<_RefType['PageBlogPost']>, hero?: Maybe<_RefType['ComponentHero']>, linkedFrom?: Maybe<_RefType['PageLandingLinkingCollections']>, seoFields?: Maybe<_RefType['ComponentSeo']> } ) | ( Omit<PageService, 'linkedFrom' | 'pageContent' | 'pageSeo'> & { linkedFrom?: Maybe<_RefType['PageServiceLinkingCollections']>, pageContent?: Maybe<_RefType['PageServicePageContent']>, pageSeo?: Maybe<_RefType['ComponentSeo']> } ) | ( Omit<Settings, 'footerLegalNavigationCollection' | 'footerServicesNavigationCollection' | 'footerSiteNavigationCollection' | 'headerNavigationCollection' | 'linkedFrom' | 'seo' | 'socialLinksCollection'> & { footerLegalNavigationCollection?: Maybe<_RefType['SettingsFooterLegalNavigationCollection']>, footerServicesNavigationCollection?: Maybe<_RefType['SettingsFooterServicesNavigationCollection']>, footerSiteNavigationCollection?: Maybe<_RefType['SettingsFooterSiteNavigationCollection']>, headerNavigationCollection?: Maybe<_RefType['SettingsHeaderNavigationCollection']>, linkedFrom?: Maybe<_RefType['SettingsLinkingCollections']>, seo?: Maybe<_RefType['ComponentSeo']>, socialLinksCollection?: Maybe<_RefType['SettingsSocialLinksCollection']> } ) | ( Omit<Vq5Hs6VZcdFFqcGewQDi5, 'linkedFrom'> & { linkedFrom?: Maybe<_RefType['Vq5Hs6VZcdFFqcGewQDi5LinkingCollections']> } );
  ResourceLink: ( PageBlogPostContentResourcesBlock ) | ( PageBlogPostContentResourcesHyperlink ) | ( PageBlogPostContentResourcesInline ) | ( PageDefaultPageContentResourcesBlock ) | ( PageDefaultPageContentResourcesHyperlink ) | ( PageDefaultPageContentResourcesInline ) | ( PageExperienceJobDescriptionResourcesBlock ) | ( PageExperienceJobDescriptionResourcesHyperlink ) | ( PageExperienceJobDescriptionResourcesInline ) | ( PageServicePageContentResourcesBlock ) | ( PageServicePageContentResourcesHyperlink ) | ( PageServicePageContentResourcesInline );
  _Node: ( Omit<ComponentAuthor, 'linkedFrom'> & { linkedFrom?: Maybe<_RefType['ComponentAuthorLinkingCollections']> } ) | ( Omit<ComponentCta, 'linkedFrom'> & { linkedFrom?: Maybe<_RefType['ComponentCtaLinkingCollections']> } ) | ( Omit<ComponentHero, 'ctaFieldsCollection' | 'linkedFrom'> & { ctaFieldsCollection?: Maybe<_RefType['ComponentHeroCtaFieldsCollection']>, linkedFrom?: Maybe<_RefType['ComponentHeroLinkingCollections']> } ) | ( Omit<ComponentRichImage, 'linkedFrom'> & { linkedFrom?: Maybe<_RefType['ComponentRichImageLinkingCollections']> } ) | ( Omit<ComponentSeo, 'linkedFrom'> & { linkedFrom?: Maybe<_RefType['ComponentSeoLinkingCollections']> } ) | ( Omit<NavigationLink, 'linkedFrom' | 'subnavigationCollection'> & { linkedFrom?: Maybe<_RefType['NavigationLinkLinkingCollections']>, subnavigationCollection?: Maybe<_RefType['NavigationLinkSubnavigationCollection']> } ) | ( Omit<NavigationMenu, 'linkedFrom' | 'navigationMenuCollection'> & { linkedFrom?: Maybe<_RefType['NavigationMenuLinkingCollections']>, navigationMenuCollection?: Maybe<_RefType['NavigationMenuNavigationMenuCollection']> } ) | ( Omit<PageBlogPost, 'author' | 'content' | 'linkedFrom' | 'relatedBlogPostsCollection' | 'seoFields'> & { author?: Maybe<_RefType['ComponentAuthor']>, content?: Maybe<_RefType['PageBlogPostContent']>, linkedFrom?: Maybe<_RefType['PageBlogPostLinkingCollections']>, relatedBlogPostsCollection?: Maybe<_RefType['PageBlogPostRelatedBlogPostsCollection']>, seoFields?: Maybe<_RefType['ComponentSeo']> } ) | ( Omit<PageDefault, 'linkedFrom' | 'pageContent' | 'pageSeo'> & { linkedFrom?: Maybe<_RefType['PageDefaultLinkingCollections']>, pageContent?: Maybe<_RefType['PageDefaultPageContent']>, pageSeo?: Maybe<_RefType['ComponentSeo']> } ) | ( Omit<PageExperience, 'jobDescription' | 'linkedFrom'> & { jobDescription?: Maybe<_RefType['PageExperienceJobDescription']>, linkedFrom?: Maybe<_RefType['PageExperienceLinkingCollections']> } ) | ( Omit<PageLanding, 'featuredBlogPost' | 'hero' | 'linkedFrom' | 'seoFields'> & { featuredBlogPost?: Maybe<_RefType['PageBlogPost']>, hero?: Maybe<_RefType['ComponentHero']>, linkedFrom?: Maybe<_RefType['PageLandingLinkingCollections']>, seoFields?: Maybe<_RefType['ComponentSeo']> } ) | ( Omit<PageService, 'linkedFrom' | 'pageContent' | 'pageSeo'> & { linkedFrom?: Maybe<_RefType['PageServiceLinkingCollections']>, pageContent?: Maybe<_RefType['PageServicePageContent']>, pageSeo?: Maybe<_RefType['ComponentSeo']> } ) | ( Omit<Settings, 'footerLegalNavigationCollection' | 'footerServicesNavigationCollection' | 'footerSiteNavigationCollection' | 'headerNavigationCollection' | 'linkedFrom' | 'seo' | 'socialLinksCollection'> & { footerLegalNavigationCollection?: Maybe<_RefType['SettingsFooterLegalNavigationCollection']>, footerServicesNavigationCollection?: Maybe<_RefType['SettingsFooterServicesNavigationCollection']>, footerSiteNavigationCollection?: Maybe<_RefType['SettingsFooterSiteNavigationCollection']>, headerNavigationCollection?: Maybe<_RefType['SettingsHeaderNavigationCollection']>, linkedFrom?: Maybe<_RefType['SettingsLinkingCollections']>, seo?: Maybe<_RefType['ComponentSeo']>, socialLinksCollection?: Maybe<_RefType['SettingsSocialLinksCollection']> } ) | ( Omit<Vq5Hs6VZcdFFqcGewQDi5, 'linkedFrom'> & { linkedFrom?: Maybe<_RefType['Vq5Hs6VZcdFFqcGewQDi5LinkingCollections']> } );
};

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Asset: ResolverTypeWrapper<Omit<Asset, 'linkedFrom'> & { linkedFrom?: Maybe<ResolversTypes['AssetLinkingCollections']> }>;
  AssetCollection: ResolverTypeWrapper<AssetCollection>;
  AssetFilter: AssetFilter;
  AssetLinkingCollections: ResolverTypeWrapper<Omit<AssetLinkingCollections, 'componentAuthorCollection' | 'componentCtaCollection' | 'componentHeroCollection' | 'componentRichImageCollection' | 'componentSeoCollection' | 'entryCollection' | 'navigationLinkCollection' | 'pageBlogPostCollection' | 'pageExperienceCollection' | 'settingsCollection' | 'vq5Hs6VZcdFFqcGewQDi5Collection'> & { componentAuthorCollection?: Maybe<ResolversTypes['ComponentAuthorCollection']>, componentCtaCollection?: Maybe<ResolversTypes['ComponentCtaCollection']>, componentHeroCollection?: Maybe<ResolversTypes['ComponentHeroCollection']>, componentRichImageCollection?: Maybe<ResolversTypes['ComponentRichImageCollection']>, componentSeoCollection?: Maybe<ResolversTypes['ComponentSeoCollection']>, entryCollection?: Maybe<ResolversTypes['EntryCollection']>, navigationLinkCollection?: Maybe<ResolversTypes['NavigationLinkCollection']>, pageBlogPostCollection?: Maybe<ResolversTypes['PageBlogPostCollection']>, pageExperienceCollection?: Maybe<ResolversTypes['PageExperienceCollection']>, settingsCollection?: Maybe<ResolversTypes['SettingsCollection']>, vq5Hs6VZcdFFqcGewQDi5Collection?: Maybe<ResolversTypes['Vq5Hs6VZcdFFqcGewQDi5Collection']> }>;
  AssetOrder: AssetOrder;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>;
  ComponentAuthor: ResolverTypeWrapper<Omit<ComponentAuthor, 'linkedFrom'> & { linkedFrom?: Maybe<ResolversTypes['ComponentAuthorLinkingCollections']> }>;
  ComponentAuthorCollection: ResolverTypeWrapper<Omit<ComponentAuthorCollection, 'items'> & { items: Array<Maybe<ResolversTypes['ComponentAuthor']>> }>;
  ComponentAuthorFilter: ComponentAuthorFilter;
  ComponentAuthorLinkingCollections: ResolverTypeWrapper<Omit<ComponentAuthorLinkingCollections, 'entryCollection' | 'pageBlogPostCollection'> & { entryCollection?: Maybe<ResolversTypes['EntryCollection']>, pageBlogPostCollection?: Maybe<ResolversTypes['PageBlogPostCollection']> }>;
  ComponentAuthorLinkingCollectionsPageBlogPostCollectionOrder: ComponentAuthorLinkingCollectionsPageBlogPostCollectionOrder;
  ComponentAuthorOrder: ComponentAuthorOrder;
  ComponentCta: ResolverTypeWrapper<Omit<ComponentCta, 'linkedFrom'> & { linkedFrom?: Maybe<ResolversTypes['ComponentCtaLinkingCollections']> }>;
  ComponentCtaCollection: ResolverTypeWrapper<Omit<ComponentCtaCollection, 'items'> & { items: Array<Maybe<ResolversTypes['ComponentCta']>> }>;
  ComponentCtaFilter: ComponentCtaFilter;
  ComponentCtaLinkingCollections: ResolverTypeWrapper<Omit<ComponentCtaLinkingCollections, 'componentHeroCollection' | 'entryCollection'> & { componentHeroCollection?: Maybe<ResolversTypes['ComponentHeroCollection']>, entryCollection?: Maybe<ResolversTypes['EntryCollection']> }>;
  ComponentCtaLinkingCollectionsComponentHeroCollectionOrder: ComponentCtaLinkingCollectionsComponentHeroCollectionOrder;
  ComponentCtaOrder: ComponentCtaOrder;
  ComponentHero: ResolverTypeWrapper<Omit<ComponentHero, 'ctaFieldsCollection' | 'linkedFrom'> & { ctaFieldsCollection?: Maybe<ResolversTypes['ComponentHeroCtaFieldsCollection']>, linkedFrom?: Maybe<ResolversTypes['ComponentHeroLinkingCollections']> }>;
  ComponentHeroCollection: ResolverTypeWrapper<Omit<ComponentHeroCollection, 'items'> & { items: Array<Maybe<ResolversTypes['ComponentHero']>> }>;
  ComponentHeroCtaFieldsCollection: ResolverTypeWrapper<Omit<ComponentHeroCtaFieldsCollection, 'items'> & { items: Array<Maybe<ResolversTypes['ComponentCta']>> }>;
  ComponentHeroCtaFieldsCollectionOrder: ComponentHeroCtaFieldsCollectionOrder;
  ComponentHeroFilter: ComponentHeroFilter;
  ComponentHeroLinkingCollections: ResolverTypeWrapper<Omit<ComponentHeroLinkingCollections, 'entryCollection' | 'pageLandingCollection'> & { entryCollection?: Maybe<ResolversTypes['EntryCollection']>, pageLandingCollection?: Maybe<ResolversTypes['PageLandingCollection']> }>;
  ComponentHeroLinkingCollectionsPageLandingCollectionOrder: ComponentHeroLinkingCollectionsPageLandingCollectionOrder;
  ComponentHeroOrder: ComponentHeroOrder;
  ComponentRichImage: ResolverTypeWrapper<Omit<ComponentRichImage, 'linkedFrom'> & { linkedFrom?: Maybe<ResolversTypes['ComponentRichImageLinkingCollections']> }>;
  ComponentRichImageCollection: ResolverTypeWrapper<Omit<ComponentRichImageCollection, 'items'> & { items: Array<Maybe<ResolversTypes['ComponentRichImage']>> }>;
  ComponentRichImageFilter: ComponentRichImageFilter;
  ComponentRichImageLinkingCollections: ResolverTypeWrapper<Omit<ComponentRichImageLinkingCollections, 'entryCollection'> & { entryCollection?: Maybe<ResolversTypes['EntryCollection']> }>;
  ComponentRichImageOrder: ComponentRichImageOrder;
  ComponentSeo: ResolverTypeWrapper<Omit<ComponentSeo, 'linkedFrom'> & { linkedFrom?: Maybe<ResolversTypes['ComponentSeoLinkingCollections']> }>;
  ComponentSeoCollection: ResolverTypeWrapper<Omit<ComponentSeoCollection, 'items'> & { items: Array<Maybe<ResolversTypes['ComponentSeo']>> }>;
  ComponentSeoFilter: ComponentSeoFilter;
  ComponentSeoLinkingCollections: ResolverTypeWrapper<Omit<ComponentSeoLinkingCollections, 'entryCollection' | 'pageBlogPostCollection' | 'pageDefaultCollection' | 'pageLandingCollection' | 'pageServiceCollection' | 'settingsCollection'> & { entryCollection?: Maybe<ResolversTypes['EntryCollection']>, pageBlogPostCollection?: Maybe<ResolversTypes['PageBlogPostCollection']>, pageDefaultCollection?: Maybe<ResolversTypes['PageDefaultCollection']>, pageLandingCollection?: Maybe<ResolversTypes['PageLandingCollection']>, pageServiceCollection?: Maybe<ResolversTypes['PageServiceCollection']>, settingsCollection?: Maybe<ResolversTypes['SettingsCollection']> }>;
  ComponentSeoLinkingCollectionsPageBlogPostCollectionOrder: ComponentSeoLinkingCollectionsPageBlogPostCollectionOrder;
  ComponentSeoLinkingCollectionsPageDefaultCollectionOrder: ComponentSeoLinkingCollectionsPageDefaultCollectionOrder;
  ComponentSeoLinkingCollectionsPageLandingCollectionOrder: ComponentSeoLinkingCollectionsPageLandingCollectionOrder;
  ComponentSeoLinkingCollectionsPageServiceCollectionOrder: ComponentSeoLinkingCollectionsPageServiceCollectionOrder;
  ComponentSeoLinkingCollectionsSettingsCollectionOrder: ComponentSeoLinkingCollectionsSettingsCollectionOrder;
  ComponentSeoOrder: ComponentSeoOrder;
  ContentfulMetadata: ResolverTypeWrapper<ContentfulMetadata>;
  ContentfulMetadataConceptsDescendantsFilter: ContentfulMetadataConceptsDescendantsFilter;
  ContentfulMetadataConceptsFilter: ContentfulMetadataConceptsFilter;
  ContentfulMetadataFilter: ContentfulMetadataFilter;
  ContentfulMetadataTagsFilter: ContentfulMetadataTagsFilter;
  ContentfulTag: ResolverTypeWrapper<ContentfulTag>;
  DateTime: ResolverTypeWrapper<Scalars['DateTime']['output']>;
  Dimension: ResolverTypeWrapper<Scalars['Dimension']['output']>;
  Entry: ResolverTypeWrapper<ResolversInterfaceTypes<ResolversTypes>['Entry']>;
  EntryCollection: ResolverTypeWrapper<Omit<EntryCollection, 'items'> & { items: Array<Maybe<ResolversTypes['Entry']>> }>;
  EntryFilter: EntryFilter;
  EntryOrder: EntryOrder;
  Float: ResolverTypeWrapper<Scalars['Float']['output']>;
  HexColor: ResolverTypeWrapper<Scalars['HexColor']['output']>;
  ID: ResolverTypeWrapper<Scalars['ID']['output']>;
  ImageFormat: ImageFormat;
  ImageResizeFocus: ImageResizeFocus;
  ImageResizeStrategy: ImageResizeStrategy;
  ImageTransformOptions: ImageTransformOptions;
  Int: ResolverTypeWrapper<Scalars['Int']['output']>;
  JSON: ResolverTypeWrapper<Scalars['JSON']['output']>;
  NavigationLink: ResolverTypeWrapper<Omit<NavigationLink, 'linkedFrom' | 'subnavigationCollection'> & { linkedFrom?: Maybe<ResolversTypes['NavigationLinkLinkingCollections']>, subnavigationCollection?: Maybe<ResolversTypes['NavigationLinkSubnavigationCollection']> }>;
  NavigationLinkCollection: ResolverTypeWrapper<Omit<NavigationLinkCollection, 'items'> & { items: Array<Maybe<ResolversTypes['NavigationLink']>> }>;
  NavigationLinkFilter: NavigationLinkFilter;
  NavigationLinkLinkingCollections: ResolverTypeWrapper<Omit<NavigationLinkLinkingCollections, 'entryCollection' | 'navigationLinkCollection' | 'navigationMenuCollection' | 'settingsCollection'> & { entryCollection?: Maybe<ResolversTypes['EntryCollection']>, navigationLinkCollection?: Maybe<ResolversTypes['NavigationLinkCollection']>, navigationMenuCollection?: Maybe<ResolversTypes['NavigationMenuCollection']>, settingsCollection?: Maybe<ResolversTypes['SettingsCollection']> }>;
  NavigationLinkLinkingCollectionsNavigationLinkCollectionOrder: NavigationLinkLinkingCollectionsNavigationLinkCollectionOrder;
  NavigationLinkLinkingCollectionsNavigationMenuCollectionOrder: NavigationLinkLinkingCollectionsNavigationMenuCollectionOrder;
  NavigationLinkLinkingCollectionsSettingsCollectionOrder: NavigationLinkLinkingCollectionsSettingsCollectionOrder;
  NavigationLinkOrder: NavigationLinkOrder;
  NavigationLinkSubnavigationCollection: ResolverTypeWrapper<Omit<NavigationLinkSubnavigationCollection, 'items'> & { items: Array<Maybe<ResolversTypes['NavigationLink']>> }>;
  NavigationLinkSubnavigationCollectionOrder: NavigationLinkSubnavigationCollectionOrder;
  NavigationMenu: ResolverTypeWrapper<Omit<NavigationMenu, 'linkedFrom' | 'navigationMenuCollection'> & { linkedFrom?: Maybe<ResolversTypes['NavigationMenuLinkingCollections']>, navigationMenuCollection?: Maybe<ResolversTypes['NavigationMenuNavigationMenuCollection']> }>;
  NavigationMenuCollection: ResolverTypeWrapper<Omit<NavigationMenuCollection, 'items'> & { items: Array<Maybe<ResolversTypes['NavigationMenu']>> }>;
  NavigationMenuFilter: NavigationMenuFilter;
  NavigationMenuLinkingCollections: ResolverTypeWrapper<Omit<NavigationMenuLinkingCollections, 'entryCollection'> & { entryCollection?: Maybe<ResolversTypes['EntryCollection']> }>;
  NavigationMenuNavigationMenuCollection: ResolverTypeWrapper<Omit<NavigationMenuNavigationMenuCollection, 'items'> & { items: Array<Maybe<ResolversTypes['NavigationLink']>> }>;
  NavigationMenuNavigationMenuCollectionOrder: NavigationMenuNavigationMenuCollectionOrder;
  NavigationMenuOrder: NavigationMenuOrder;
  PageBlogPost: ResolverTypeWrapper<Omit<PageBlogPost, 'author' | 'content' | 'linkedFrom' | 'relatedBlogPostsCollection' | 'seoFields'> & { author?: Maybe<ResolversTypes['ComponentAuthor']>, content?: Maybe<ResolversTypes['PageBlogPostContent']>, linkedFrom?: Maybe<ResolversTypes['PageBlogPostLinkingCollections']>, relatedBlogPostsCollection?: Maybe<ResolversTypes['PageBlogPostRelatedBlogPostsCollection']>, seoFields?: Maybe<ResolversTypes['ComponentSeo']> }>;
  PageBlogPostCollection: ResolverTypeWrapper<Omit<PageBlogPostCollection, 'items'> & { items: Array<Maybe<ResolversTypes['PageBlogPost']>> }>;
  PageBlogPostContent: ResolverTypeWrapper<Omit<PageBlogPostContent, 'links'> & { links: ResolversTypes['PageBlogPostContentLinks'] }>;
  PageBlogPostContentAssets: ResolverTypeWrapper<PageBlogPostContentAssets>;
  PageBlogPostContentEntries: ResolverTypeWrapper<Omit<PageBlogPostContentEntries, 'block' | 'hyperlink' | 'inline'> & { block: Array<Maybe<ResolversTypes['Entry']>>, hyperlink: Array<Maybe<ResolversTypes['Entry']>>, inline: Array<Maybe<ResolversTypes['Entry']>> }>;
  PageBlogPostContentLinks: ResolverTypeWrapper<Omit<PageBlogPostContentLinks, 'assets' | 'entries'> & { assets: ResolversTypes['PageBlogPostContentAssets'], entries: ResolversTypes['PageBlogPostContentEntries'] }>;
  PageBlogPostContentResources: ResolverTypeWrapper<PageBlogPostContentResources>;
  PageBlogPostContentResourcesBlock: ResolverTypeWrapper<PageBlogPostContentResourcesBlock>;
  PageBlogPostContentResourcesHyperlink: ResolverTypeWrapper<PageBlogPostContentResourcesHyperlink>;
  PageBlogPostContentResourcesInline: ResolverTypeWrapper<PageBlogPostContentResourcesInline>;
  PageBlogPostFilter: PageBlogPostFilter;
  PageBlogPostLinkingCollections: ResolverTypeWrapper<Omit<PageBlogPostLinkingCollections, 'entryCollection' | 'pageBlogPostCollection' | 'pageLandingCollection'> & { entryCollection?: Maybe<ResolversTypes['EntryCollection']>, pageBlogPostCollection?: Maybe<ResolversTypes['PageBlogPostCollection']>, pageLandingCollection?: Maybe<ResolversTypes['PageLandingCollection']> }>;
  PageBlogPostLinkingCollectionsPageBlogPostCollectionOrder: PageBlogPostLinkingCollectionsPageBlogPostCollectionOrder;
  PageBlogPostLinkingCollectionsPageLandingCollectionOrder: PageBlogPostLinkingCollectionsPageLandingCollectionOrder;
  PageBlogPostOrder: PageBlogPostOrder;
  PageBlogPostRelatedBlogPostsCollection: ResolverTypeWrapper<Omit<PageBlogPostRelatedBlogPostsCollection, 'items'> & { items: Array<Maybe<ResolversTypes['PageBlogPost']>> }>;
  PageBlogPostRelatedBlogPostsCollectionOrder: PageBlogPostRelatedBlogPostsCollectionOrder;
  PageDefault: ResolverTypeWrapper<Omit<PageDefault, 'linkedFrom' | 'pageContent' | 'pageSeo'> & { linkedFrom?: Maybe<ResolversTypes['PageDefaultLinkingCollections']>, pageContent?: Maybe<ResolversTypes['PageDefaultPageContent']>, pageSeo?: Maybe<ResolversTypes['ComponentSeo']> }>;
  PageDefaultCollection: ResolverTypeWrapper<Omit<PageDefaultCollection, 'items'> & { items: Array<Maybe<ResolversTypes['PageDefault']>> }>;
  PageDefaultFilter: PageDefaultFilter;
  PageDefaultLinkingCollections: ResolverTypeWrapper<Omit<PageDefaultLinkingCollections, 'entryCollection'> & { entryCollection?: Maybe<ResolversTypes['EntryCollection']> }>;
  PageDefaultOrder: PageDefaultOrder;
  PageDefaultPageContent: ResolverTypeWrapper<Omit<PageDefaultPageContent, 'links'> & { links: ResolversTypes['PageDefaultPageContentLinks'] }>;
  PageDefaultPageContentAssets: ResolverTypeWrapper<PageDefaultPageContentAssets>;
  PageDefaultPageContentEntries: ResolverTypeWrapper<Omit<PageDefaultPageContentEntries, 'block' | 'hyperlink' | 'inline'> & { block: Array<Maybe<ResolversTypes['Entry']>>, hyperlink: Array<Maybe<ResolversTypes['Entry']>>, inline: Array<Maybe<ResolversTypes['Entry']>> }>;
  PageDefaultPageContentLinks: ResolverTypeWrapper<Omit<PageDefaultPageContentLinks, 'assets' | 'entries'> & { assets: ResolversTypes['PageDefaultPageContentAssets'], entries: ResolversTypes['PageDefaultPageContentEntries'] }>;
  PageDefaultPageContentResources: ResolverTypeWrapper<PageDefaultPageContentResources>;
  PageDefaultPageContentResourcesBlock: ResolverTypeWrapper<PageDefaultPageContentResourcesBlock>;
  PageDefaultPageContentResourcesHyperlink: ResolverTypeWrapper<PageDefaultPageContentResourcesHyperlink>;
  PageDefaultPageContentResourcesInline: ResolverTypeWrapper<PageDefaultPageContentResourcesInline>;
  PageExperience: ResolverTypeWrapper<Omit<PageExperience, 'jobDescription' | 'linkedFrom'> & { jobDescription?: Maybe<ResolversTypes['PageExperienceJobDescription']>, linkedFrom?: Maybe<ResolversTypes['PageExperienceLinkingCollections']> }>;
  PageExperienceCollection: ResolverTypeWrapper<Omit<PageExperienceCollection, 'items'> & { items: Array<Maybe<ResolversTypes['PageExperience']>> }>;
  PageExperienceFilter: PageExperienceFilter;
  PageExperienceJobDescription: ResolverTypeWrapper<Omit<PageExperienceJobDescription, 'links'> & { links: ResolversTypes['PageExperienceJobDescriptionLinks'] }>;
  PageExperienceJobDescriptionAssets: ResolverTypeWrapper<PageExperienceJobDescriptionAssets>;
  PageExperienceJobDescriptionEntries: ResolverTypeWrapper<Omit<PageExperienceJobDescriptionEntries, 'block' | 'hyperlink' | 'inline'> & { block: Array<Maybe<ResolversTypes['Entry']>>, hyperlink: Array<Maybe<ResolversTypes['Entry']>>, inline: Array<Maybe<ResolversTypes['Entry']>> }>;
  PageExperienceJobDescriptionLinks: ResolverTypeWrapper<Omit<PageExperienceJobDescriptionLinks, 'assets' | 'entries'> & { assets: ResolversTypes['PageExperienceJobDescriptionAssets'], entries: ResolversTypes['PageExperienceJobDescriptionEntries'] }>;
  PageExperienceJobDescriptionResources: ResolverTypeWrapper<PageExperienceJobDescriptionResources>;
  PageExperienceJobDescriptionResourcesBlock: ResolverTypeWrapper<PageExperienceJobDescriptionResourcesBlock>;
  PageExperienceJobDescriptionResourcesHyperlink: ResolverTypeWrapper<PageExperienceJobDescriptionResourcesHyperlink>;
  PageExperienceJobDescriptionResourcesInline: ResolverTypeWrapper<PageExperienceJobDescriptionResourcesInline>;
  PageExperienceLinkingCollections: ResolverTypeWrapper<Omit<PageExperienceLinkingCollections, 'entryCollection'> & { entryCollection?: Maybe<ResolversTypes['EntryCollection']> }>;
  PageExperienceOrder: PageExperienceOrder;
  PageLanding: ResolverTypeWrapper<Omit<PageLanding, 'featuredBlogPost' | 'hero' | 'linkedFrom' | 'seoFields'> & { featuredBlogPost?: Maybe<ResolversTypes['PageBlogPost']>, hero?: Maybe<ResolversTypes['ComponentHero']>, linkedFrom?: Maybe<ResolversTypes['PageLandingLinkingCollections']>, seoFields?: Maybe<ResolversTypes['ComponentSeo']> }>;
  PageLandingCollection: ResolverTypeWrapper<Omit<PageLandingCollection, 'items'> & { items: Array<Maybe<ResolversTypes['PageLanding']>> }>;
  PageLandingFilter: PageLandingFilter;
  PageLandingLinkingCollections: ResolverTypeWrapper<Omit<PageLandingLinkingCollections, 'entryCollection'> & { entryCollection?: Maybe<ResolversTypes['EntryCollection']> }>;
  PageLandingOrder: PageLandingOrder;
  PageService: ResolverTypeWrapper<Omit<PageService, 'linkedFrom' | 'pageContent' | 'pageSeo'> & { linkedFrom?: Maybe<ResolversTypes['PageServiceLinkingCollections']>, pageContent?: Maybe<ResolversTypes['PageServicePageContent']>, pageSeo?: Maybe<ResolversTypes['ComponentSeo']> }>;
  PageServiceCollection: ResolverTypeWrapper<Omit<PageServiceCollection, 'items'> & { items: Array<Maybe<ResolversTypes['PageService']>> }>;
  PageServiceFilter: PageServiceFilter;
  PageServiceLinkingCollections: ResolverTypeWrapper<Omit<PageServiceLinkingCollections, 'entryCollection'> & { entryCollection?: Maybe<ResolversTypes['EntryCollection']> }>;
  PageServiceOrder: PageServiceOrder;
  PageServicePageContent: ResolverTypeWrapper<Omit<PageServicePageContent, 'links'> & { links: ResolversTypes['PageServicePageContentLinks'] }>;
  PageServicePageContentAssets: ResolverTypeWrapper<PageServicePageContentAssets>;
  PageServicePageContentEntries: ResolverTypeWrapper<Omit<PageServicePageContentEntries, 'block' | 'hyperlink' | 'inline'> & { block: Array<Maybe<ResolversTypes['Entry']>>, hyperlink: Array<Maybe<ResolversTypes['Entry']>>, inline: Array<Maybe<ResolversTypes['Entry']>> }>;
  PageServicePageContentLinks: ResolverTypeWrapper<Omit<PageServicePageContentLinks, 'assets' | 'entries'> & { assets: ResolversTypes['PageServicePageContentAssets'], entries: ResolversTypes['PageServicePageContentEntries'] }>;
  PageServicePageContentResources: ResolverTypeWrapper<PageServicePageContentResources>;
  PageServicePageContentResourcesBlock: ResolverTypeWrapper<PageServicePageContentResourcesBlock>;
  PageServicePageContentResourcesHyperlink: ResolverTypeWrapper<PageServicePageContentResourcesHyperlink>;
  PageServicePageContentResourcesInline: ResolverTypeWrapper<PageServicePageContentResourcesInline>;
  Quality: ResolverTypeWrapper<Scalars['Quality']['output']>;
  Query: ResolverTypeWrapper<{}>;
  ResourceLink: ResolverTypeWrapper<ResolversInterfaceTypes<ResolversTypes>['ResourceLink']>;
  ResourceSys: ResolverTypeWrapper<ResourceSys>;
  Settings: ResolverTypeWrapper<Omit<Settings, 'footerLegalNavigationCollection' | 'footerServicesNavigationCollection' | 'footerSiteNavigationCollection' | 'headerNavigationCollection' | 'linkedFrom' | 'seo' | 'socialLinksCollection'> & { footerLegalNavigationCollection?: Maybe<ResolversTypes['SettingsFooterLegalNavigationCollection']>, footerServicesNavigationCollection?: Maybe<ResolversTypes['SettingsFooterServicesNavigationCollection']>, footerSiteNavigationCollection?: Maybe<ResolversTypes['SettingsFooterSiteNavigationCollection']>, headerNavigationCollection?: Maybe<ResolversTypes['SettingsHeaderNavigationCollection']>, linkedFrom?: Maybe<ResolversTypes['SettingsLinkingCollections']>, seo?: Maybe<ResolversTypes['ComponentSeo']>, socialLinksCollection?: Maybe<ResolversTypes['SettingsSocialLinksCollection']> }>;
  SettingsCollection: ResolverTypeWrapper<Omit<SettingsCollection, 'items'> & { items: Array<Maybe<ResolversTypes['Settings']>> }>;
  SettingsFilter: SettingsFilter;
  SettingsFooterLegalNavigationCollection: ResolverTypeWrapper<Omit<SettingsFooterLegalNavigationCollection, 'items'> & { items: Array<Maybe<ResolversTypes['NavigationLink']>> }>;
  SettingsFooterLegalNavigationCollectionOrder: SettingsFooterLegalNavigationCollectionOrder;
  SettingsFooterServicesNavigationCollection: ResolverTypeWrapper<Omit<SettingsFooterServicesNavigationCollection, 'items'> & { items: Array<Maybe<ResolversTypes['NavigationLink']>> }>;
  SettingsFooterServicesNavigationCollectionOrder: SettingsFooterServicesNavigationCollectionOrder;
  SettingsFooterSiteNavigationCollection: ResolverTypeWrapper<Omit<SettingsFooterSiteNavigationCollection, 'items'> & { items: Array<Maybe<ResolversTypes['NavigationLink']>> }>;
  SettingsFooterSiteNavigationCollectionOrder: SettingsFooterSiteNavigationCollectionOrder;
  SettingsHeaderNavigationCollection: ResolverTypeWrapper<Omit<SettingsHeaderNavigationCollection, 'items'> & { items: Array<Maybe<ResolversTypes['NavigationLink']>> }>;
  SettingsHeaderNavigationCollectionOrder: SettingsHeaderNavigationCollectionOrder;
  SettingsLinkingCollections: ResolverTypeWrapper<Omit<SettingsLinkingCollections, 'entryCollection'> & { entryCollection?: Maybe<ResolversTypes['EntryCollection']> }>;
  SettingsOrder: SettingsOrder;
  SettingsSocialLinksCollection: ResolverTypeWrapper<Omit<SettingsSocialLinksCollection, 'items'> & { items: Array<Maybe<ResolversTypes['NavigationLink']>> }>;
  SettingsSocialLinksCollectionOrder: SettingsSocialLinksCollectionOrder;
  String: ResolverTypeWrapper<Scalars['String']['output']>;
  Sys: ResolverTypeWrapper<Sys>;
  SysFilter: SysFilter;
  TaxonomyConcept: ResolverTypeWrapper<TaxonomyConcept>;
  Vq5Hs6VZcdFFqcGewQDi5: ResolverTypeWrapper<Omit<Vq5Hs6VZcdFFqcGewQDi5, 'linkedFrom'> & { linkedFrom?: Maybe<ResolversTypes['Vq5Hs6VZcdFFqcGewQDi5LinkingCollections']> }>;
  Vq5Hs6VZcdFFqcGewQDi5Collection: ResolverTypeWrapper<Omit<Vq5Hs6VZcdFFqcGewQDi5Collection, 'items'> & { items: Array<Maybe<ResolversTypes['Vq5Hs6VZcdFFqcGewQDi5']>> }>;
  Vq5Hs6VZcdFFqcGewQDi5Filter: Vq5Hs6VZcdFFqcGewQDi5Filter;
  Vq5Hs6VZcdFFqcGewQDi5LinkingCollections: ResolverTypeWrapper<Omit<Vq5Hs6VZcdFFqcGewQDi5LinkingCollections, 'entryCollection'> & { entryCollection?: Maybe<ResolversTypes['EntryCollection']> }>;
  Vq5Hs6VZcdFFqcGewQDi5Order: Vq5Hs6VZcdFFqcGewQDi5Order;
  _Node: ResolverTypeWrapper<ResolversInterfaceTypes<ResolversTypes>['_Node']>;
  cfComponentAuthorNestedFilter: CfComponentAuthorNestedFilter;
  cfComponentCtaNestedFilter: CfComponentCtaNestedFilter;
  cfComponentHeroNestedFilter: CfComponentHeroNestedFilter;
  cfComponentSeoNestedFilter: CfComponentSeoNestedFilter;
  cfNavigationLinkNestedFilter: CfNavigationLinkNestedFilter;
  cfPageBlogPostNestedFilter: CfPageBlogPostNestedFilter;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Asset: Omit<Asset, 'linkedFrom'> & { linkedFrom?: Maybe<ResolversParentTypes['AssetLinkingCollections']> };
  AssetCollection: AssetCollection;
  AssetFilter: AssetFilter;
  AssetLinkingCollections: Omit<AssetLinkingCollections, 'componentAuthorCollection' | 'componentCtaCollection' | 'componentHeroCollection' | 'componentRichImageCollection' | 'componentSeoCollection' | 'entryCollection' | 'navigationLinkCollection' | 'pageBlogPostCollection' | 'pageExperienceCollection' | 'settingsCollection' | 'vq5Hs6VZcdFFqcGewQDi5Collection'> & { componentAuthorCollection?: Maybe<ResolversParentTypes['ComponentAuthorCollection']>, componentCtaCollection?: Maybe<ResolversParentTypes['ComponentCtaCollection']>, componentHeroCollection?: Maybe<ResolversParentTypes['ComponentHeroCollection']>, componentRichImageCollection?: Maybe<ResolversParentTypes['ComponentRichImageCollection']>, componentSeoCollection?: Maybe<ResolversParentTypes['ComponentSeoCollection']>, entryCollection?: Maybe<ResolversParentTypes['EntryCollection']>, navigationLinkCollection?: Maybe<ResolversParentTypes['NavigationLinkCollection']>, pageBlogPostCollection?: Maybe<ResolversParentTypes['PageBlogPostCollection']>, pageExperienceCollection?: Maybe<ResolversParentTypes['PageExperienceCollection']>, settingsCollection?: Maybe<ResolversParentTypes['SettingsCollection']>, vq5Hs6VZcdFFqcGewQDi5Collection?: Maybe<ResolversParentTypes['Vq5Hs6VZcdFFqcGewQDi5Collection']> };
  Boolean: Scalars['Boolean']['output'];
  ComponentAuthor: Omit<ComponentAuthor, 'linkedFrom'> & { linkedFrom?: Maybe<ResolversParentTypes['ComponentAuthorLinkingCollections']> };
  ComponentAuthorCollection: Omit<ComponentAuthorCollection, 'items'> & { items: Array<Maybe<ResolversParentTypes['ComponentAuthor']>> };
  ComponentAuthorFilter: ComponentAuthorFilter;
  ComponentAuthorLinkingCollections: Omit<ComponentAuthorLinkingCollections, 'entryCollection' | 'pageBlogPostCollection'> & { entryCollection?: Maybe<ResolversParentTypes['EntryCollection']>, pageBlogPostCollection?: Maybe<ResolversParentTypes['PageBlogPostCollection']> };
  ComponentCta: Omit<ComponentCta, 'linkedFrom'> & { linkedFrom?: Maybe<ResolversParentTypes['ComponentCtaLinkingCollections']> };
  ComponentCtaCollection: Omit<ComponentCtaCollection, 'items'> & { items: Array<Maybe<ResolversParentTypes['ComponentCta']>> };
  ComponentCtaFilter: ComponentCtaFilter;
  ComponentCtaLinkingCollections: Omit<ComponentCtaLinkingCollections, 'componentHeroCollection' | 'entryCollection'> & { componentHeroCollection?: Maybe<ResolversParentTypes['ComponentHeroCollection']>, entryCollection?: Maybe<ResolversParentTypes['EntryCollection']> };
  ComponentHero: Omit<ComponentHero, 'ctaFieldsCollection' | 'linkedFrom'> & { ctaFieldsCollection?: Maybe<ResolversParentTypes['ComponentHeroCtaFieldsCollection']>, linkedFrom?: Maybe<ResolversParentTypes['ComponentHeroLinkingCollections']> };
  ComponentHeroCollection: Omit<ComponentHeroCollection, 'items'> & { items: Array<Maybe<ResolversParentTypes['ComponentHero']>> };
  ComponentHeroCtaFieldsCollection: Omit<ComponentHeroCtaFieldsCollection, 'items'> & { items: Array<Maybe<ResolversParentTypes['ComponentCta']>> };
  ComponentHeroFilter: ComponentHeroFilter;
  ComponentHeroLinkingCollections: Omit<ComponentHeroLinkingCollections, 'entryCollection' | 'pageLandingCollection'> & { entryCollection?: Maybe<ResolversParentTypes['EntryCollection']>, pageLandingCollection?: Maybe<ResolversParentTypes['PageLandingCollection']> };
  ComponentRichImage: Omit<ComponentRichImage, 'linkedFrom'> & { linkedFrom?: Maybe<ResolversParentTypes['ComponentRichImageLinkingCollections']> };
  ComponentRichImageCollection: Omit<ComponentRichImageCollection, 'items'> & { items: Array<Maybe<ResolversParentTypes['ComponentRichImage']>> };
  ComponentRichImageFilter: ComponentRichImageFilter;
  ComponentRichImageLinkingCollections: Omit<ComponentRichImageLinkingCollections, 'entryCollection'> & { entryCollection?: Maybe<ResolversParentTypes['EntryCollection']> };
  ComponentSeo: Omit<ComponentSeo, 'linkedFrom'> & { linkedFrom?: Maybe<ResolversParentTypes['ComponentSeoLinkingCollections']> };
  ComponentSeoCollection: Omit<ComponentSeoCollection, 'items'> & { items: Array<Maybe<ResolversParentTypes['ComponentSeo']>> };
  ComponentSeoFilter: ComponentSeoFilter;
  ComponentSeoLinkingCollections: Omit<ComponentSeoLinkingCollections, 'entryCollection' | 'pageBlogPostCollection' | 'pageDefaultCollection' | 'pageLandingCollection' | 'pageServiceCollection' | 'settingsCollection'> & { entryCollection?: Maybe<ResolversParentTypes['EntryCollection']>, pageBlogPostCollection?: Maybe<ResolversParentTypes['PageBlogPostCollection']>, pageDefaultCollection?: Maybe<ResolversParentTypes['PageDefaultCollection']>, pageLandingCollection?: Maybe<ResolversParentTypes['PageLandingCollection']>, pageServiceCollection?: Maybe<ResolversParentTypes['PageServiceCollection']>, settingsCollection?: Maybe<ResolversParentTypes['SettingsCollection']> };
  ContentfulMetadata: ContentfulMetadata;
  ContentfulMetadataConceptsDescendantsFilter: ContentfulMetadataConceptsDescendantsFilter;
  ContentfulMetadataConceptsFilter: ContentfulMetadataConceptsFilter;
  ContentfulMetadataFilter: ContentfulMetadataFilter;
  ContentfulMetadataTagsFilter: ContentfulMetadataTagsFilter;
  ContentfulTag: ContentfulTag;
  DateTime: Scalars['DateTime']['output'];
  Dimension: Scalars['Dimension']['output'];
  Entry: ResolversInterfaceTypes<ResolversParentTypes>['Entry'];
  EntryCollection: Omit<EntryCollection, 'items'> & { items: Array<Maybe<ResolversParentTypes['Entry']>> };
  EntryFilter: EntryFilter;
  Float: Scalars['Float']['output'];
  HexColor: Scalars['HexColor']['output'];
  ID: Scalars['ID']['output'];
  ImageTransformOptions: ImageTransformOptions;
  Int: Scalars['Int']['output'];
  JSON: Scalars['JSON']['output'];
  NavigationLink: Omit<NavigationLink, 'linkedFrom' | 'subnavigationCollection'> & { linkedFrom?: Maybe<ResolversParentTypes['NavigationLinkLinkingCollections']>, subnavigationCollection?: Maybe<ResolversParentTypes['NavigationLinkSubnavigationCollection']> };
  NavigationLinkCollection: Omit<NavigationLinkCollection, 'items'> & { items: Array<Maybe<ResolversParentTypes['NavigationLink']>> };
  NavigationLinkFilter: NavigationLinkFilter;
  NavigationLinkLinkingCollections: Omit<NavigationLinkLinkingCollections, 'entryCollection' | 'navigationLinkCollection' | 'navigationMenuCollection' | 'settingsCollection'> & { entryCollection?: Maybe<ResolversParentTypes['EntryCollection']>, navigationLinkCollection?: Maybe<ResolversParentTypes['NavigationLinkCollection']>, navigationMenuCollection?: Maybe<ResolversParentTypes['NavigationMenuCollection']>, settingsCollection?: Maybe<ResolversParentTypes['SettingsCollection']> };
  NavigationLinkSubnavigationCollection: Omit<NavigationLinkSubnavigationCollection, 'items'> & { items: Array<Maybe<ResolversParentTypes['NavigationLink']>> };
  NavigationMenu: Omit<NavigationMenu, 'linkedFrom' | 'navigationMenuCollection'> & { linkedFrom?: Maybe<ResolversParentTypes['NavigationMenuLinkingCollections']>, navigationMenuCollection?: Maybe<ResolversParentTypes['NavigationMenuNavigationMenuCollection']> };
  NavigationMenuCollection: Omit<NavigationMenuCollection, 'items'> & { items: Array<Maybe<ResolversParentTypes['NavigationMenu']>> };
  NavigationMenuFilter: NavigationMenuFilter;
  NavigationMenuLinkingCollections: Omit<NavigationMenuLinkingCollections, 'entryCollection'> & { entryCollection?: Maybe<ResolversParentTypes['EntryCollection']> };
  NavigationMenuNavigationMenuCollection: Omit<NavigationMenuNavigationMenuCollection, 'items'> & { items: Array<Maybe<ResolversParentTypes['NavigationLink']>> };
  PageBlogPost: Omit<PageBlogPost, 'author' | 'content' | 'linkedFrom' | 'relatedBlogPostsCollection' | 'seoFields'> & { author?: Maybe<ResolversParentTypes['ComponentAuthor']>, content?: Maybe<ResolversParentTypes['PageBlogPostContent']>, linkedFrom?: Maybe<ResolversParentTypes['PageBlogPostLinkingCollections']>, relatedBlogPostsCollection?: Maybe<ResolversParentTypes['PageBlogPostRelatedBlogPostsCollection']>, seoFields?: Maybe<ResolversParentTypes['ComponentSeo']> };
  PageBlogPostCollection: Omit<PageBlogPostCollection, 'items'> & { items: Array<Maybe<ResolversParentTypes['PageBlogPost']>> };
  PageBlogPostContent: Omit<PageBlogPostContent, 'links'> & { links: ResolversParentTypes['PageBlogPostContentLinks'] };
  PageBlogPostContentAssets: PageBlogPostContentAssets;
  PageBlogPostContentEntries: Omit<PageBlogPostContentEntries, 'block' | 'hyperlink' | 'inline'> & { block: Array<Maybe<ResolversParentTypes['Entry']>>, hyperlink: Array<Maybe<ResolversParentTypes['Entry']>>, inline: Array<Maybe<ResolversParentTypes['Entry']>> };
  PageBlogPostContentLinks: Omit<PageBlogPostContentLinks, 'assets' | 'entries'> & { assets: ResolversParentTypes['PageBlogPostContentAssets'], entries: ResolversParentTypes['PageBlogPostContentEntries'] };
  PageBlogPostContentResources: PageBlogPostContentResources;
  PageBlogPostContentResourcesBlock: PageBlogPostContentResourcesBlock;
  PageBlogPostContentResourcesHyperlink: PageBlogPostContentResourcesHyperlink;
  PageBlogPostContentResourcesInline: PageBlogPostContentResourcesInline;
  PageBlogPostFilter: PageBlogPostFilter;
  PageBlogPostLinkingCollections: Omit<PageBlogPostLinkingCollections, 'entryCollection' | 'pageBlogPostCollection' | 'pageLandingCollection'> & { entryCollection?: Maybe<ResolversParentTypes['EntryCollection']>, pageBlogPostCollection?: Maybe<ResolversParentTypes['PageBlogPostCollection']>, pageLandingCollection?: Maybe<ResolversParentTypes['PageLandingCollection']> };
  PageBlogPostRelatedBlogPostsCollection: Omit<PageBlogPostRelatedBlogPostsCollection, 'items'> & { items: Array<Maybe<ResolversParentTypes['PageBlogPost']>> };
  PageDefault: Omit<PageDefault, 'linkedFrom' | 'pageContent' | 'pageSeo'> & { linkedFrom?: Maybe<ResolversParentTypes['PageDefaultLinkingCollections']>, pageContent?: Maybe<ResolversParentTypes['PageDefaultPageContent']>, pageSeo?: Maybe<ResolversParentTypes['ComponentSeo']> };
  PageDefaultCollection: Omit<PageDefaultCollection, 'items'> & { items: Array<Maybe<ResolversParentTypes['PageDefault']>> };
  PageDefaultFilter: PageDefaultFilter;
  PageDefaultLinkingCollections: Omit<PageDefaultLinkingCollections, 'entryCollection'> & { entryCollection?: Maybe<ResolversParentTypes['EntryCollection']> };
  PageDefaultPageContent: Omit<PageDefaultPageContent, 'links'> & { links: ResolversParentTypes['PageDefaultPageContentLinks'] };
  PageDefaultPageContentAssets: PageDefaultPageContentAssets;
  PageDefaultPageContentEntries: Omit<PageDefaultPageContentEntries, 'block' | 'hyperlink' | 'inline'> & { block: Array<Maybe<ResolversParentTypes['Entry']>>, hyperlink: Array<Maybe<ResolversParentTypes['Entry']>>, inline: Array<Maybe<ResolversParentTypes['Entry']>> };
  PageDefaultPageContentLinks: Omit<PageDefaultPageContentLinks, 'assets' | 'entries'> & { assets: ResolversParentTypes['PageDefaultPageContentAssets'], entries: ResolversParentTypes['PageDefaultPageContentEntries'] };
  PageDefaultPageContentResources: PageDefaultPageContentResources;
  PageDefaultPageContentResourcesBlock: PageDefaultPageContentResourcesBlock;
  PageDefaultPageContentResourcesHyperlink: PageDefaultPageContentResourcesHyperlink;
  PageDefaultPageContentResourcesInline: PageDefaultPageContentResourcesInline;
  PageExperience: Omit<PageExperience, 'jobDescription' | 'linkedFrom'> & { jobDescription?: Maybe<ResolversParentTypes['PageExperienceJobDescription']>, linkedFrom?: Maybe<ResolversParentTypes['PageExperienceLinkingCollections']> };
  PageExperienceCollection: Omit<PageExperienceCollection, 'items'> & { items: Array<Maybe<ResolversParentTypes['PageExperience']>> };
  PageExperienceFilter: PageExperienceFilter;
  PageExperienceJobDescription: Omit<PageExperienceJobDescription, 'links'> & { links: ResolversParentTypes['PageExperienceJobDescriptionLinks'] };
  PageExperienceJobDescriptionAssets: PageExperienceJobDescriptionAssets;
  PageExperienceJobDescriptionEntries: Omit<PageExperienceJobDescriptionEntries, 'block' | 'hyperlink' | 'inline'> & { block: Array<Maybe<ResolversParentTypes['Entry']>>, hyperlink: Array<Maybe<ResolversParentTypes['Entry']>>, inline: Array<Maybe<ResolversParentTypes['Entry']>> };
  PageExperienceJobDescriptionLinks: Omit<PageExperienceJobDescriptionLinks, 'assets' | 'entries'> & { assets: ResolversParentTypes['PageExperienceJobDescriptionAssets'], entries: ResolversParentTypes['PageExperienceJobDescriptionEntries'] };
  PageExperienceJobDescriptionResources: PageExperienceJobDescriptionResources;
  PageExperienceJobDescriptionResourcesBlock: PageExperienceJobDescriptionResourcesBlock;
  PageExperienceJobDescriptionResourcesHyperlink: PageExperienceJobDescriptionResourcesHyperlink;
  PageExperienceJobDescriptionResourcesInline: PageExperienceJobDescriptionResourcesInline;
  PageExperienceLinkingCollections: Omit<PageExperienceLinkingCollections, 'entryCollection'> & { entryCollection?: Maybe<ResolversParentTypes['EntryCollection']> };
  PageLanding: Omit<PageLanding, 'featuredBlogPost' | 'hero' | 'linkedFrom' | 'seoFields'> & { featuredBlogPost?: Maybe<ResolversParentTypes['PageBlogPost']>, hero?: Maybe<ResolversParentTypes['ComponentHero']>, linkedFrom?: Maybe<ResolversParentTypes['PageLandingLinkingCollections']>, seoFields?: Maybe<ResolversParentTypes['ComponentSeo']> };
  PageLandingCollection: Omit<PageLandingCollection, 'items'> & { items: Array<Maybe<ResolversParentTypes['PageLanding']>> };
  PageLandingFilter: PageLandingFilter;
  PageLandingLinkingCollections: Omit<PageLandingLinkingCollections, 'entryCollection'> & { entryCollection?: Maybe<ResolversParentTypes['EntryCollection']> };
  PageService: Omit<PageService, 'linkedFrom' | 'pageContent' | 'pageSeo'> & { linkedFrom?: Maybe<ResolversParentTypes['PageServiceLinkingCollections']>, pageContent?: Maybe<ResolversParentTypes['PageServicePageContent']>, pageSeo?: Maybe<ResolversParentTypes['ComponentSeo']> };
  PageServiceCollection: Omit<PageServiceCollection, 'items'> & { items: Array<Maybe<ResolversParentTypes['PageService']>> };
  PageServiceFilter: PageServiceFilter;
  PageServiceLinkingCollections: Omit<PageServiceLinkingCollections, 'entryCollection'> & { entryCollection?: Maybe<ResolversParentTypes['EntryCollection']> };
  PageServicePageContent: Omit<PageServicePageContent, 'links'> & { links: ResolversParentTypes['PageServicePageContentLinks'] };
  PageServicePageContentAssets: PageServicePageContentAssets;
  PageServicePageContentEntries: Omit<PageServicePageContentEntries, 'block' | 'hyperlink' | 'inline'> & { block: Array<Maybe<ResolversParentTypes['Entry']>>, hyperlink: Array<Maybe<ResolversParentTypes['Entry']>>, inline: Array<Maybe<ResolversParentTypes['Entry']>> };
  PageServicePageContentLinks: Omit<PageServicePageContentLinks, 'assets' | 'entries'> & { assets: ResolversParentTypes['PageServicePageContentAssets'], entries: ResolversParentTypes['PageServicePageContentEntries'] };
  PageServicePageContentResources: PageServicePageContentResources;
  PageServicePageContentResourcesBlock: PageServicePageContentResourcesBlock;
  PageServicePageContentResourcesHyperlink: PageServicePageContentResourcesHyperlink;
  PageServicePageContentResourcesInline: PageServicePageContentResourcesInline;
  Quality: Scalars['Quality']['output'];
  Query: {};
  ResourceLink: ResolversInterfaceTypes<ResolversParentTypes>['ResourceLink'];
  ResourceSys: ResourceSys;
  Settings: Omit<Settings, 'footerLegalNavigationCollection' | 'footerServicesNavigationCollection' | 'footerSiteNavigationCollection' | 'headerNavigationCollection' | 'linkedFrom' | 'seo' | 'socialLinksCollection'> & { footerLegalNavigationCollection?: Maybe<ResolversParentTypes['SettingsFooterLegalNavigationCollection']>, footerServicesNavigationCollection?: Maybe<ResolversParentTypes['SettingsFooterServicesNavigationCollection']>, footerSiteNavigationCollection?: Maybe<ResolversParentTypes['SettingsFooterSiteNavigationCollection']>, headerNavigationCollection?: Maybe<ResolversParentTypes['SettingsHeaderNavigationCollection']>, linkedFrom?: Maybe<ResolversParentTypes['SettingsLinkingCollections']>, seo?: Maybe<ResolversParentTypes['ComponentSeo']>, socialLinksCollection?: Maybe<ResolversParentTypes['SettingsSocialLinksCollection']> };
  SettingsCollection: Omit<SettingsCollection, 'items'> & { items: Array<Maybe<ResolversParentTypes['Settings']>> };
  SettingsFilter: SettingsFilter;
  SettingsFooterLegalNavigationCollection: Omit<SettingsFooterLegalNavigationCollection, 'items'> & { items: Array<Maybe<ResolversParentTypes['NavigationLink']>> };
  SettingsFooterServicesNavigationCollection: Omit<SettingsFooterServicesNavigationCollection, 'items'> & { items: Array<Maybe<ResolversParentTypes['NavigationLink']>> };
  SettingsFooterSiteNavigationCollection: Omit<SettingsFooterSiteNavigationCollection, 'items'> & { items: Array<Maybe<ResolversParentTypes['NavigationLink']>> };
  SettingsHeaderNavigationCollection: Omit<SettingsHeaderNavigationCollection, 'items'> & { items: Array<Maybe<ResolversParentTypes['NavigationLink']>> };
  SettingsLinkingCollections: Omit<SettingsLinkingCollections, 'entryCollection'> & { entryCollection?: Maybe<ResolversParentTypes['EntryCollection']> };
  SettingsSocialLinksCollection: Omit<SettingsSocialLinksCollection, 'items'> & { items: Array<Maybe<ResolversParentTypes['NavigationLink']>> };
  String: Scalars['String']['output'];
  Sys: Sys;
  SysFilter: SysFilter;
  TaxonomyConcept: TaxonomyConcept;
  Vq5Hs6VZcdFFqcGewQDi5: Omit<Vq5Hs6VZcdFFqcGewQDi5, 'linkedFrom'> & { linkedFrom?: Maybe<ResolversParentTypes['Vq5Hs6VZcdFFqcGewQDi5LinkingCollections']> };
  Vq5Hs6VZcdFFqcGewQDi5Collection: Omit<Vq5Hs6VZcdFFqcGewQDi5Collection, 'items'> & { items: Array<Maybe<ResolversParentTypes['Vq5Hs6VZcdFFqcGewQDi5']>> };
  Vq5Hs6VZcdFFqcGewQDi5Filter: Vq5Hs6VZcdFFqcGewQDi5Filter;
  Vq5Hs6VZcdFFqcGewQDi5LinkingCollections: Omit<Vq5Hs6VZcdFFqcGewQDi5LinkingCollections, 'entryCollection'> & { entryCollection?: Maybe<ResolversParentTypes['EntryCollection']> };
  _Node: ResolversInterfaceTypes<ResolversParentTypes>['_Node'];
  cfComponentAuthorNestedFilter: CfComponentAuthorNestedFilter;
  cfComponentCtaNestedFilter: CfComponentCtaNestedFilter;
  cfComponentHeroNestedFilter: CfComponentHeroNestedFilter;
  cfComponentSeoNestedFilter: CfComponentSeoNestedFilter;
  cfNavigationLinkNestedFilter: CfNavigationLinkNestedFilter;
  cfPageBlogPostNestedFilter: CfPageBlogPostNestedFilter;
};

export type ContentSourceMapsDirectiveArgs = { };

export type ContentSourceMapsDirectiveResolver<Result, Parent, ContextType = any, Args = ContentSourceMapsDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type AssetResolvers<ContextType = any, ParentType extends ResolversParentTypes['Asset'] = ResolversParentTypes['Asset']> = {
  contentType?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, Partial<AssetContentTypeArgs>>;
  contentfulMetadata?: Resolver<ResolversTypes['ContentfulMetadata'], ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, Partial<AssetDescriptionArgs>>;
  fileName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, Partial<AssetFileNameArgs>>;
  height?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType, Partial<AssetHeightArgs>>;
  linkedFrom?: Resolver<Maybe<ResolversTypes['AssetLinkingCollections']>, ParentType, ContextType, Partial<AssetLinkedFromArgs>>;
  size?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType, Partial<AssetSizeArgs>>;
  sys?: Resolver<ResolversTypes['Sys'], ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, Partial<AssetTitleArgs>>;
  url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, Partial<AssetUrlArgs>>;
  width?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType, Partial<AssetWidthArgs>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AssetCollectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['AssetCollection'] = ResolversParentTypes['AssetCollection']> = {
  items?: Resolver<Array<Maybe<ResolversTypes['Asset']>>, ParentType, ContextType>;
  limit?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  skip?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  total?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AssetLinkingCollectionsResolvers<ContextType = any, ParentType extends ResolversParentTypes['AssetLinkingCollections'] = ResolversParentTypes['AssetLinkingCollections']> = {
  componentAuthorCollection?: Resolver<Maybe<ResolversTypes['ComponentAuthorCollection']>, ParentType, ContextType, RequireFields<AssetLinkingCollectionsComponentAuthorCollectionArgs, 'limit' | 'skip'>>;
  componentCtaCollection?: Resolver<Maybe<ResolversTypes['ComponentCtaCollection']>, ParentType, ContextType, RequireFields<AssetLinkingCollectionsComponentCtaCollectionArgs, 'limit' | 'skip'>>;
  componentHeroCollection?: Resolver<Maybe<ResolversTypes['ComponentHeroCollection']>, ParentType, ContextType, RequireFields<AssetLinkingCollectionsComponentHeroCollectionArgs, 'limit' | 'skip'>>;
  componentRichImageCollection?: Resolver<Maybe<ResolversTypes['ComponentRichImageCollection']>, ParentType, ContextType, RequireFields<AssetLinkingCollectionsComponentRichImageCollectionArgs, 'limit' | 'skip'>>;
  componentSeoCollection?: Resolver<Maybe<ResolversTypes['ComponentSeoCollection']>, ParentType, ContextType, RequireFields<AssetLinkingCollectionsComponentSeoCollectionArgs, 'limit' | 'skip'>>;
  entryCollection?: Resolver<Maybe<ResolversTypes['EntryCollection']>, ParentType, ContextType, RequireFields<AssetLinkingCollectionsEntryCollectionArgs, 'limit' | 'skip'>>;
  navigationLinkCollection?: Resolver<Maybe<ResolversTypes['NavigationLinkCollection']>, ParentType, ContextType, RequireFields<AssetLinkingCollectionsNavigationLinkCollectionArgs, 'limit' | 'skip'>>;
  pageBlogPostCollection?: Resolver<Maybe<ResolversTypes['PageBlogPostCollection']>, ParentType, ContextType, RequireFields<AssetLinkingCollectionsPageBlogPostCollectionArgs, 'limit' | 'skip'>>;
  pageExperienceCollection?: Resolver<Maybe<ResolversTypes['PageExperienceCollection']>, ParentType, ContextType, RequireFields<AssetLinkingCollectionsPageExperienceCollectionArgs, 'limit' | 'skip'>>;
  settingsCollection?: Resolver<Maybe<ResolversTypes['SettingsCollection']>, ParentType, ContextType, RequireFields<AssetLinkingCollectionsSettingsCollectionArgs, 'limit' | 'skip'>>;
  vq5Hs6VZcdFFqcGewQDi5Collection?: Resolver<Maybe<ResolversTypes['Vq5Hs6VZcdFFqcGewQDi5Collection']>, ParentType, ContextType, RequireFields<AssetLinkingCollectionsVq5Hs6VZcdFFqcGewQDi5CollectionArgs, 'limit' | 'skip'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ComponentAuthorResolvers<ContextType = any, ParentType extends ResolversParentTypes['ComponentAuthor'] = ResolversParentTypes['ComponentAuthor']> = {
  _id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  avatar?: Resolver<Maybe<ResolversTypes['Asset']>, ParentType, ContextType, Partial<ComponentAuthorAvatarArgs>>;
  contentfulMetadata?: Resolver<ResolversTypes['ContentfulMetadata'], ParentType, ContextType>;
  internalName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, Partial<ComponentAuthorInternalNameArgs>>;
  linkedFrom?: Resolver<Maybe<ResolversTypes['ComponentAuthorLinkingCollections']>, ParentType, ContextType, Partial<ComponentAuthorLinkedFromArgs>>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, Partial<ComponentAuthorNameArgs>>;
  sys?: Resolver<ResolversTypes['Sys'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ComponentAuthorCollectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['ComponentAuthorCollection'] = ResolversParentTypes['ComponentAuthorCollection']> = {
  items?: Resolver<Array<Maybe<ResolversTypes['ComponentAuthor']>>, ParentType, ContextType>;
  limit?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  skip?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  total?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ComponentAuthorLinkingCollectionsResolvers<ContextType = any, ParentType extends ResolversParentTypes['ComponentAuthorLinkingCollections'] = ResolversParentTypes['ComponentAuthorLinkingCollections']> = {
  entryCollection?: Resolver<Maybe<ResolversTypes['EntryCollection']>, ParentType, ContextType, RequireFields<ComponentAuthorLinkingCollectionsEntryCollectionArgs, 'limit' | 'skip'>>;
  pageBlogPostCollection?: Resolver<Maybe<ResolversTypes['PageBlogPostCollection']>, ParentType, ContextType, RequireFields<ComponentAuthorLinkingCollectionsPageBlogPostCollectionArgs, 'limit' | 'skip'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ComponentCtaResolvers<ContextType = any, ParentType extends ResolversParentTypes['ComponentCta'] = ResolversParentTypes['ComponentCta']> = {
  _id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  contentfulMetadata?: Resolver<ResolversTypes['ContentfulMetadata'], ParentType, ContextType>;
  ctaLink?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, Partial<ComponentCtaCtaLinkArgs>>;
  ctaText?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, Partial<ComponentCtaCtaTextArgs>>;
  icon?: Resolver<Maybe<ResolversTypes['Asset']>, ParentType, ContextType, Partial<ComponentCtaIconArgs>>;
  internalName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, Partial<ComponentCtaInternalNameArgs>>;
  linkedFrom?: Resolver<Maybe<ResolversTypes['ComponentCtaLinkingCollections']>, ParentType, ContextType, Partial<ComponentCtaLinkedFromArgs>>;
  sys?: Resolver<ResolversTypes['Sys'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ComponentCtaCollectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['ComponentCtaCollection'] = ResolversParentTypes['ComponentCtaCollection']> = {
  items?: Resolver<Array<Maybe<ResolversTypes['ComponentCta']>>, ParentType, ContextType>;
  limit?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  skip?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  total?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ComponentCtaLinkingCollectionsResolvers<ContextType = any, ParentType extends ResolversParentTypes['ComponentCtaLinkingCollections'] = ResolversParentTypes['ComponentCtaLinkingCollections']> = {
  componentHeroCollection?: Resolver<Maybe<ResolversTypes['ComponentHeroCollection']>, ParentType, ContextType, RequireFields<ComponentCtaLinkingCollectionsComponentHeroCollectionArgs, 'limit' | 'skip'>>;
  entryCollection?: Resolver<Maybe<ResolversTypes['EntryCollection']>, ParentType, ContextType, RequireFields<ComponentCtaLinkingCollectionsEntryCollectionArgs, 'limit' | 'skip'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ComponentHeroResolvers<ContextType = any, ParentType extends ResolversParentTypes['ComponentHero'] = ResolversParentTypes['ComponentHero']> = {
  _id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  contentfulMetadata?: Resolver<ResolversTypes['ContentfulMetadata'], ParentType, ContextType>;
  ctaFieldsCollection?: Resolver<Maybe<ResolversTypes['ComponentHeroCtaFieldsCollection']>, ParentType, ContextType, RequireFields<ComponentHeroCtaFieldsCollectionArgs, 'limit' | 'skip'>>;
  heading?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, Partial<ComponentHeroHeadingArgs>>;
  heroImage?: Resolver<Maybe<ResolversTypes['Asset']>, ParentType, ContextType, Partial<ComponentHeroHeroImageArgs>>;
  internalName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, Partial<ComponentHeroInternalNameArgs>>;
  linkedFrom?: Resolver<Maybe<ResolversTypes['ComponentHeroLinkingCollections']>, ParentType, ContextType, Partial<ComponentHeroLinkedFromArgs>>;
  subHeading?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, Partial<ComponentHeroSubHeadingArgs>>;
  sys?: Resolver<ResolversTypes['Sys'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ComponentHeroCollectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['ComponentHeroCollection'] = ResolversParentTypes['ComponentHeroCollection']> = {
  items?: Resolver<Array<Maybe<ResolversTypes['ComponentHero']>>, ParentType, ContextType>;
  limit?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  skip?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  total?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ComponentHeroCtaFieldsCollectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['ComponentHeroCtaFieldsCollection'] = ResolversParentTypes['ComponentHeroCtaFieldsCollection']> = {
  items?: Resolver<Array<Maybe<ResolversTypes['ComponentCta']>>, ParentType, ContextType>;
  limit?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  skip?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  total?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ComponentHeroLinkingCollectionsResolvers<ContextType = any, ParentType extends ResolversParentTypes['ComponentHeroLinkingCollections'] = ResolversParentTypes['ComponentHeroLinkingCollections']> = {
  entryCollection?: Resolver<Maybe<ResolversTypes['EntryCollection']>, ParentType, ContextType, RequireFields<ComponentHeroLinkingCollectionsEntryCollectionArgs, 'limit' | 'skip'>>;
  pageLandingCollection?: Resolver<Maybe<ResolversTypes['PageLandingCollection']>, ParentType, ContextType, RequireFields<ComponentHeroLinkingCollectionsPageLandingCollectionArgs, 'limit' | 'skip'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ComponentRichImageResolvers<ContextType = any, ParentType extends ResolversParentTypes['ComponentRichImage'] = ResolversParentTypes['ComponentRichImage']> = {
  _id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  caption?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, Partial<ComponentRichImageCaptionArgs>>;
  contentfulMetadata?: Resolver<ResolversTypes['ContentfulMetadata'], ParentType, ContextType>;
  fullWidth?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, Partial<ComponentRichImageFullWidthArgs>>;
  image?: Resolver<Maybe<ResolversTypes['Asset']>, ParentType, ContextType, Partial<ComponentRichImageImageArgs>>;
  internalName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, Partial<ComponentRichImageInternalNameArgs>>;
  linkedFrom?: Resolver<Maybe<ResolversTypes['ComponentRichImageLinkingCollections']>, ParentType, ContextType, Partial<ComponentRichImageLinkedFromArgs>>;
  sys?: Resolver<ResolversTypes['Sys'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ComponentRichImageCollectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['ComponentRichImageCollection'] = ResolversParentTypes['ComponentRichImageCollection']> = {
  items?: Resolver<Array<Maybe<ResolversTypes['ComponentRichImage']>>, ParentType, ContextType>;
  limit?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  skip?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  total?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ComponentRichImageLinkingCollectionsResolvers<ContextType = any, ParentType extends ResolversParentTypes['ComponentRichImageLinkingCollections'] = ResolversParentTypes['ComponentRichImageLinkingCollections']> = {
  entryCollection?: Resolver<Maybe<ResolversTypes['EntryCollection']>, ParentType, ContextType, RequireFields<ComponentRichImageLinkingCollectionsEntryCollectionArgs, 'limit' | 'skip'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ComponentSeoResolvers<ContextType = any, ParentType extends ResolversParentTypes['ComponentSeo'] = ResolversParentTypes['ComponentSeo']> = {
  _id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  canonicalUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, Partial<ComponentSeoCanonicalUrlArgs>>;
  contentfulMetadata?: Resolver<ResolversTypes['ContentfulMetadata'], ParentType, ContextType>;
  internalName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, Partial<ComponentSeoInternalNameArgs>>;
  linkedFrom?: Resolver<Maybe<ResolversTypes['ComponentSeoLinkingCollections']>, ParentType, ContextType, Partial<ComponentSeoLinkedFromArgs>>;
  nofollow?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, Partial<ComponentSeoNofollowArgs>>;
  noindex?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, Partial<ComponentSeoNoindexArgs>>;
  pageDescription?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, Partial<ComponentSeoPageDescriptionArgs>>;
  pageTitle?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, Partial<ComponentSeoPageTitleArgs>>;
  shareImagesCollection?: Resolver<Maybe<ResolversTypes['AssetCollection']>, ParentType, ContextType, RequireFields<ComponentSeoShareImagesCollectionArgs, 'limit' | 'skip'>>;
  sys?: Resolver<ResolversTypes['Sys'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ComponentSeoCollectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['ComponentSeoCollection'] = ResolversParentTypes['ComponentSeoCollection']> = {
  items?: Resolver<Array<Maybe<ResolversTypes['ComponentSeo']>>, ParentType, ContextType>;
  limit?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  skip?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  total?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ComponentSeoLinkingCollectionsResolvers<ContextType = any, ParentType extends ResolversParentTypes['ComponentSeoLinkingCollections'] = ResolversParentTypes['ComponentSeoLinkingCollections']> = {
  entryCollection?: Resolver<Maybe<ResolversTypes['EntryCollection']>, ParentType, ContextType, RequireFields<ComponentSeoLinkingCollectionsEntryCollectionArgs, 'limit' | 'skip'>>;
  pageBlogPostCollection?: Resolver<Maybe<ResolversTypes['PageBlogPostCollection']>, ParentType, ContextType, RequireFields<ComponentSeoLinkingCollectionsPageBlogPostCollectionArgs, 'limit' | 'skip'>>;
  pageDefaultCollection?: Resolver<Maybe<ResolversTypes['PageDefaultCollection']>, ParentType, ContextType, RequireFields<ComponentSeoLinkingCollectionsPageDefaultCollectionArgs, 'limit' | 'skip'>>;
  pageLandingCollection?: Resolver<Maybe<ResolversTypes['PageLandingCollection']>, ParentType, ContextType, RequireFields<ComponentSeoLinkingCollectionsPageLandingCollectionArgs, 'limit' | 'skip'>>;
  pageServiceCollection?: Resolver<Maybe<ResolversTypes['PageServiceCollection']>, ParentType, ContextType, RequireFields<ComponentSeoLinkingCollectionsPageServiceCollectionArgs, 'limit' | 'skip'>>;
  settingsCollection?: Resolver<Maybe<ResolversTypes['SettingsCollection']>, ParentType, ContextType, RequireFields<ComponentSeoLinkingCollectionsSettingsCollectionArgs, 'limit' | 'skip'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ContentfulMetadataResolvers<ContextType = any, ParentType extends ResolversParentTypes['ContentfulMetadata'] = ResolversParentTypes['ContentfulMetadata']> = {
  concepts?: Resolver<Array<Maybe<ResolversTypes['TaxonomyConcept']>>, ParentType, ContextType>;
  tags?: Resolver<Array<Maybe<ResolversTypes['ContentfulTag']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ContentfulTagResolvers<ContextType = any, ParentType extends ResolversParentTypes['ContentfulTag'] = ResolversParentTypes['ContentfulTag']> = {
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface DateTimeScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['DateTime'], any> {
  name: 'DateTime';
}

export interface DimensionScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Dimension'], any> {
  name: 'Dimension';
}

export type EntryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Entry'] = ResolversParentTypes['Entry']> = {
  __resolveType: TypeResolveFn<'ComponentAuthor' | 'ComponentCta' | 'ComponentHero' | 'ComponentRichImage' | 'ComponentSeo' | 'NavigationLink' | 'NavigationMenu' | 'PageBlogPost' | 'PageDefault' | 'PageExperience' | 'PageLanding' | 'PageService' | 'Settings' | 'Vq5Hs6VZcdFFqcGewQDi5', ParentType, ContextType>;
  contentfulMetadata?: Resolver<ResolversTypes['ContentfulMetadata'], ParentType, ContextType>;
  sys?: Resolver<ResolversTypes['Sys'], ParentType, ContextType>;
};

export type EntryCollectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['EntryCollection'] = ResolversParentTypes['EntryCollection']> = {
  items?: Resolver<Array<Maybe<ResolversTypes['Entry']>>, ParentType, ContextType>;
  limit?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  skip?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  total?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface HexColorScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['HexColor'], any> {
  name: 'HexColor';
}

export interface JsonScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['JSON'], any> {
  name: 'JSON';
}

export type NavigationLinkResolvers<ContextType = any, ParentType extends ResolversParentTypes['NavigationLink'] = ResolversParentTypes['NavigationLink']> = {
  _id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  contentfulMetadata?: Resolver<ResolversTypes['ContentfulMetadata'], ParentType, ContextType>;
  href?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, Partial<NavigationLinkHrefArgs>>;
  icon?: Resolver<Maybe<ResolversTypes['Asset']>, ParentType, ContextType, Partial<NavigationLinkIconArgs>>;
  image?: Resolver<Maybe<ResolversTypes['Asset']>, ParentType, ContextType, Partial<NavigationLinkImageArgs>>;
  internalName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, Partial<NavigationLinkInternalNameArgs>>;
  linkedFrom?: Resolver<Maybe<ResolversTypes['NavigationLinkLinkingCollections']>, ParentType, ContextType, Partial<NavigationLinkLinkedFromArgs>>;
  subnavigationCollection?: Resolver<Maybe<ResolversTypes['NavigationLinkSubnavigationCollection']>, ParentType, ContextType, RequireFields<NavigationLinkSubnavigationCollectionArgs, 'limit' | 'skip'>>;
  sys?: Resolver<ResolversTypes['Sys'], ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, Partial<NavigationLinkTitleArgs>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type NavigationLinkCollectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['NavigationLinkCollection'] = ResolversParentTypes['NavigationLinkCollection']> = {
  items?: Resolver<Array<Maybe<ResolversTypes['NavigationLink']>>, ParentType, ContextType>;
  limit?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  skip?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  total?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type NavigationLinkLinkingCollectionsResolvers<ContextType = any, ParentType extends ResolversParentTypes['NavigationLinkLinkingCollections'] = ResolversParentTypes['NavigationLinkLinkingCollections']> = {
  entryCollection?: Resolver<Maybe<ResolversTypes['EntryCollection']>, ParentType, ContextType, RequireFields<NavigationLinkLinkingCollectionsEntryCollectionArgs, 'limit' | 'skip'>>;
  navigationLinkCollection?: Resolver<Maybe<ResolversTypes['NavigationLinkCollection']>, ParentType, ContextType, RequireFields<NavigationLinkLinkingCollectionsNavigationLinkCollectionArgs, 'limit' | 'skip'>>;
  navigationMenuCollection?: Resolver<Maybe<ResolversTypes['NavigationMenuCollection']>, ParentType, ContextType, RequireFields<NavigationLinkLinkingCollectionsNavigationMenuCollectionArgs, 'limit' | 'skip'>>;
  settingsCollection?: Resolver<Maybe<ResolversTypes['SettingsCollection']>, ParentType, ContextType, RequireFields<NavigationLinkLinkingCollectionsSettingsCollectionArgs, 'limit' | 'skip'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type NavigationLinkSubnavigationCollectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['NavigationLinkSubnavigationCollection'] = ResolversParentTypes['NavigationLinkSubnavigationCollection']> = {
  items?: Resolver<Array<Maybe<ResolversTypes['NavigationLink']>>, ParentType, ContextType>;
  limit?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  skip?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  total?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type NavigationMenuResolvers<ContextType = any, ParentType extends ResolversParentTypes['NavigationMenu'] = ResolversParentTypes['NavigationMenu']> = {
  _id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  contentfulMetadata?: Resolver<ResolversTypes['ContentfulMetadata'], ParentType, ContextType>;
  internalName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, Partial<NavigationMenuInternalNameArgs>>;
  linkedFrom?: Resolver<Maybe<ResolversTypes['NavigationMenuLinkingCollections']>, ParentType, ContextType, Partial<NavigationMenuLinkedFromArgs>>;
  navigationMenuCollection?: Resolver<Maybe<ResolversTypes['NavigationMenuNavigationMenuCollection']>, ParentType, ContextType, RequireFields<NavigationMenuNavigationMenuCollectionArgs, 'limit' | 'skip'>>;
  position?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, Partial<NavigationMenuPositionArgs>>;
  sys?: Resolver<ResolversTypes['Sys'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type NavigationMenuCollectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['NavigationMenuCollection'] = ResolversParentTypes['NavigationMenuCollection']> = {
  items?: Resolver<Array<Maybe<ResolversTypes['NavigationMenu']>>, ParentType, ContextType>;
  limit?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  skip?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  total?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type NavigationMenuLinkingCollectionsResolvers<ContextType = any, ParentType extends ResolversParentTypes['NavigationMenuLinkingCollections'] = ResolversParentTypes['NavigationMenuLinkingCollections']> = {
  entryCollection?: Resolver<Maybe<ResolversTypes['EntryCollection']>, ParentType, ContextType, RequireFields<NavigationMenuLinkingCollectionsEntryCollectionArgs, 'limit' | 'skip'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type NavigationMenuNavigationMenuCollectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['NavigationMenuNavigationMenuCollection'] = ResolversParentTypes['NavigationMenuNavigationMenuCollection']> = {
  items?: Resolver<Array<Maybe<ResolversTypes['NavigationLink']>>, ParentType, ContextType>;
  limit?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  skip?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  total?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PageBlogPostResolvers<ContextType = any, ParentType extends ResolversParentTypes['PageBlogPost'] = ResolversParentTypes['PageBlogPost']> = {
  _id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  author?: Resolver<Maybe<ResolversTypes['ComponentAuthor']>, ParentType, ContextType, Partial<PageBlogPostAuthorArgs>>;
  content?: Resolver<Maybe<ResolversTypes['PageBlogPostContent']>, ParentType, ContextType, Partial<PageBlogPostContentArgs>>;
  contentfulMetadata?: Resolver<ResolversTypes['ContentfulMetadata'], ParentType, ContextType>;
  featuredImage?: Resolver<Maybe<ResolversTypes['Asset']>, ParentType, ContextType, Partial<PageBlogPostFeaturedImageArgs>>;
  internalName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, Partial<PageBlogPostInternalNameArgs>>;
  linkedFrom?: Resolver<Maybe<ResolversTypes['PageBlogPostLinkingCollections']>, ParentType, ContextType, Partial<PageBlogPostLinkedFromArgs>>;
  publishedDate?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType, Partial<PageBlogPostPublishedDateArgs>>;
  relatedBlogPostsCollection?: Resolver<Maybe<ResolversTypes['PageBlogPostRelatedBlogPostsCollection']>, ParentType, ContextType, RequireFields<PageBlogPostRelatedBlogPostsCollectionArgs, 'limit' | 'skip'>>;
  seoFields?: Resolver<Maybe<ResolversTypes['ComponentSeo']>, ParentType, ContextType, Partial<PageBlogPostSeoFieldsArgs>>;
  shortDescription?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, Partial<PageBlogPostShortDescriptionArgs>>;
  slug?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, Partial<PageBlogPostSlugArgs>>;
  sys?: Resolver<ResolversTypes['Sys'], ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, Partial<PageBlogPostTitleArgs>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PageBlogPostCollectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['PageBlogPostCollection'] = ResolversParentTypes['PageBlogPostCollection']> = {
  items?: Resolver<Array<Maybe<ResolversTypes['PageBlogPost']>>, ParentType, ContextType>;
  limit?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  skip?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  total?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PageBlogPostContentResolvers<ContextType = any, ParentType extends ResolversParentTypes['PageBlogPostContent'] = ResolversParentTypes['PageBlogPostContent']> = {
  json?: Resolver<ResolversTypes['JSON'], ParentType, ContextType>;
  links?: Resolver<ResolversTypes['PageBlogPostContentLinks'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PageBlogPostContentAssetsResolvers<ContextType = any, ParentType extends ResolversParentTypes['PageBlogPostContentAssets'] = ResolversParentTypes['PageBlogPostContentAssets']> = {
  block?: Resolver<Array<Maybe<ResolversTypes['Asset']>>, ParentType, ContextType>;
  hyperlink?: Resolver<Array<Maybe<ResolversTypes['Asset']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PageBlogPostContentEntriesResolvers<ContextType = any, ParentType extends ResolversParentTypes['PageBlogPostContentEntries'] = ResolversParentTypes['PageBlogPostContentEntries']> = {
  block?: Resolver<Array<Maybe<ResolversTypes['Entry']>>, ParentType, ContextType>;
  hyperlink?: Resolver<Array<Maybe<ResolversTypes['Entry']>>, ParentType, ContextType>;
  inline?: Resolver<Array<Maybe<ResolversTypes['Entry']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PageBlogPostContentLinksResolvers<ContextType = any, ParentType extends ResolversParentTypes['PageBlogPostContentLinks'] = ResolversParentTypes['PageBlogPostContentLinks']> = {
  assets?: Resolver<ResolversTypes['PageBlogPostContentAssets'], ParentType, ContextType>;
  entries?: Resolver<ResolversTypes['PageBlogPostContentEntries'], ParentType, ContextType>;
  resources?: Resolver<ResolversTypes['PageBlogPostContentResources'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PageBlogPostContentResourcesResolvers<ContextType = any, ParentType extends ResolversParentTypes['PageBlogPostContentResources'] = ResolversParentTypes['PageBlogPostContentResources']> = {
  block?: Resolver<Array<ResolversTypes['PageBlogPostContentResourcesBlock']>, ParentType, ContextType>;
  hyperlink?: Resolver<Array<ResolversTypes['PageBlogPostContentResourcesHyperlink']>, ParentType, ContextType>;
  inline?: Resolver<Array<ResolversTypes['PageBlogPostContentResourcesInline']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PageBlogPostContentResourcesBlockResolvers<ContextType = any, ParentType extends ResolversParentTypes['PageBlogPostContentResourcesBlock'] = ResolversParentTypes['PageBlogPostContentResourcesBlock']> = {
  sys?: Resolver<ResolversTypes['ResourceSys'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PageBlogPostContentResourcesHyperlinkResolvers<ContextType = any, ParentType extends ResolversParentTypes['PageBlogPostContentResourcesHyperlink'] = ResolversParentTypes['PageBlogPostContentResourcesHyperlink']> = {
  sys?: Resolver<ResolversTypes['ResourceSys'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PageBlogPostContentResourcesInlineResolvers<ContextType = any, ParentType extends ResolversParentTypes['PageBlogPostContentResourcesInline'] = ResolversParentTypes['PageBlogPostContentResourcesInline']> = {
  sys?: Resolver<ResolversTypes['ResourceSys'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PageBlogPostLinkingCollectionsResolvers<ContextType = any, ParentType extends ResolversParentTypes['PageBlogPostLinkingCollections'] = ResolversParentTypes['PageBlogPostLinkingCollections']> = {
  entryCollection?: Resolver<Maybe<ResolversTypes['EntryCollection']>, ParentType, ContextType, RequireFields<PageBlogPostLinkingCollectionsEntryCollectionArgs, 'limit' | 'skip'>>;
  pageBlogPostCollection?: Resolver<Maybe<ResolversTypes['PageBlogPostCollection']>, ParentType, ContextType, RequireFields<PageBlogPostLinkingCollectionsPageBlogPostCollectionArgs, 'limit' | 'skip'>>;
  pageLandingCollection?: Resolver<Maybe<ResolversTypes['PageLandingCollection']>, ParentType, ContextType, RequireFields<PageBlogPostLinkingCollectionsPageLandingCollectionArgs, 'limit' | 'skip'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PageBlogPostRelatedBlogPostsCollectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['PageBlogPostRelatedBlogPostsCollection'] = ResolversParentTypes['PageBlogPostRelatedBlogPostsCollection']> = {
  items?: Resolver<Array<Maybe<ResolversTypes['PageBlogPost']>>, ParentType, ContextType>;
  limit?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  skip?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  total?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PageDefaultResolvers<ContextType = any, ParentType extends ResolversParentTypes['PageDefault'] = ResolversParentTypes['PageDefault']> = {
  _id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  contentfulMetadata?: Resolver<ResolversTypes['ContentfulMetadata'], ParentType, ContextType>;
  internalName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, Partial<PageDefaultInternalNameArgs>>;
  linkedFrom?: Resolver<Maybe<ResolversTypes['PageDefaultLinkingCollections']>, ParentType, ContextType, Partial<PageDefaultLinkedFromArgs>>;
  pageContent?: Resolver<Maybe<ResolversTypes['PageDefaultPageContent']>, ParentType, ContextType, Partial<PageDefaultPageContentArgs>>;
  pageSeo?: Resolver<Maybe<ResolversTypes['ComponentSeo']>, ParentType, ContextType, Partial<PageDefaultPageSeoArgs>>;
  pageTitle?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, Partial<PageDefaultPageTitleArgs>>;
  slug?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, Partial<PageDefaultSlugArgs>>;
  sys?: Resolver<ResolversTypes['Sys'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PageDefaultCollectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['PageDefaultCollection'] = ResolversParentTypes['PageDefaultCollection']> = {
  items?: Resolver<Array<Maybe<ResolversTypes['PageDefault']>>, ParentType, ContextType>;
  limit?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  skip?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  total?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PageDefaultLinkingCollectionsResolvers<ContextType = any, ParentType extends ResolversParentTypes['PageDefaultLinkingCollections'] = ResolversParentTypes['PageDefaultLinkingCollections']> = {
  entryCollection?: Resolver<Maybe<ResolversTypes['EntryCollection']>, ParentType, ContextType, RequireFields<PageDefaultLinkingCollectionsEntryCollectionArgs, 'limit' | 'skip'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PageDefaultPageContentResolvers<ContextType = any, ParentType extends ResolversParentTypes['PageDefaultPageContent'] = ResolversParentTypes['PageDefaultPageContent']> = {
  json?: Resolver<ResolversTypes['JSON'], ParentType, ContextType>;
  links?: Resolver<ResolversTypes['PageDefaultPageContentLinks'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PageDefaultPageContentAssetsResolvers<ContextType = any, ParentType extends ResolversParentTypes['PageDefaultPageContentAssets'] = ResolversParentTypes['PageDefaultPageContentAssets']> = {
  block?: Resolver<Array<Maybe<ResolversTypes['Asset']>>, ParentType, ContextType>;
  hyperlink?: Resolver<Array<Maybe<ResolversTypes['Asset']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PageDefaultPageContentEntriesResolvers<ContextType = any, ParentType extends ResolversParentTypes['PageDefaultPageContentEntries'] = ResolversParentTypes['PageDefaultPageContentEntries']> = {
  block?: Resolver<Array<Maybe<ResolversTypes['Entry']>>, ParentType, ContextType>;
  hyperlink?: Resolver<Array<Maybe<ResolversTypes['Entry']>>, ParentType, ContextType>;
  inline?: Resolver<Array<Maybe<ResolversTypes['Entry']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PageDefaultPageContentLinksResolvers<ContextType = any, ParentType extends ResolversParentTypes['PageDefaultPageContentLinks'] = ResolversParentTypes['PageDefaultPageContentLinks']> = {
  assets?: Resolver<ResolversTypes['PageDefaultPageContentAssets'], ParentType, ContextType>;
  entries?: Resolver<ResolversTypes['PageDefaultPageContentEntries'], ParentType, ContextType>;
  resources?: Resolver<ResolversTypes['PageDefaultPageContentResources'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PageDefaultPageContentResourcesResolvers<ContextType = any, ParentType extends ResolversParentTypes['PageDefaultPageContentResources'] = ResolversParentTypes['PageDefaultPageContentResources']> = {
  block?: Resolver<Array<ResolversTypes['PageDefaultPageContentResourcesBlock']>, ParentType, ContextType>;
  hyperlink?: Resolver<Array<ResolversTypes['PageDefaultPageContentResourcesHyperlink']>, ParentType, ContextType>;
  inline?: Resolver<Array<ResolversTypes['PageDefaultPageContentResourcesInline']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PageDefaultPageContentResourcesBlockResolvers<ContextType = any, ParentType extends ResolversParentTypes['PageDefaultPageContentResourcesBlock'] = ResolversParentTypes['PageDefaultPageContentResourcesBlock']> = {
  sys?: Resolver<ResolversTypes['ResourceSys'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PageDefaultPageContentResourcesHyperlinkResolvers<ContextType = any, ParentType extends ResolversParentTypes['PageDefaultPageContentResourcesHyperlink'] = ResolversParentTypes['PageDefaultPageContentResourcesHyperlink']> = {
  sys?: Resolver<ResolversTypes['ResourceSys'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PageDefaultPageContentResourcesInlineResolvers<ContextType = any, ParentType extends ResolversParentTypes['PageDefaultPageContentResourcesInline'] = ResolversParentTypes['PageDefaultPageContentResourcesInline']> = {
  sys?: Resolver<ResolversTypes['ResourceSys'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PageExperienceResolvers<ContextType = any, ParentType extends ResolversParentTypes['PageExperience'] = ResolversParentTypes['PageExperience']> = {
  _id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  bannerImage?: Resolver<Maybe<ResolversTypes['Asset']>, ParentType, ContextType, Partial<PageExperienceBannerImageArgs>>;
  companyLogo?: Resolver<Maybe<ResolversTypes['Asset']>, ParentType, ContextType, Partial<PageExperienceCompanyLogoArgs>>;
  companyName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, Partial<PageExperienceCompanyNameArgs>>;
  contentfulMetadata?: Resolver<ResolversTypes['ContentfulMetadata'], ParentType, ContextType>;
  endDate?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType, Partial<PageExperienceEndDateArgs>>;
  internalTitle?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, Partial<PageExperienceInternalTitleArgs>>;
  jobDescription?: Resolver<Maybe<ResolversTypes['PageExperienceJobDescription']>, ParentType, ContextType, Partial<PageExperienceJobDescriptionArgs>>;
  linkedFrom?: Resolver<Maybe<ResolversTypes['PageExperienceLinkingCollections']>, ParentType, ContextType, Partial<PageExperienceLinkedFromArgs>>;
  positionTitle?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, Partial<PageExperiencePositionTitleArgs>>;
  skillsUsed?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType, Partial<PageExperienceSkillsUsedArgs>>;
  slug?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, Partial<PageExperienceSlugArgs>>;
  startDate?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType, Partial<PageExperienceStartDateArgs>>;
  sys?: Resolver<ResolversTypes['Sys'], ParentType, ContextType>;
  website?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, Partial<PageExperienceWebsiteArgs>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PageExperienceCollectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['PageExperienceCollection'] = ResolversParentTypes['PageExperienceCollection']> = {
  items?: Resolver<Array<Maybe<ResolversTypes['PageExperience']>>, ParentType, ContextType>;
  limit?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  skip?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  total?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PageExperienceJobDescriptionResolvers<ContextType = any, ParentType extends ResolversParentTypes['PageExperienceJobDescription'] = ResolversParentTypes['PageExperienceJobDescription']> = {
  json?: Resolver<ResolversTypes['JSON'], ParentType, ContextType>;
  links?: Resolver<ResolversTypes['PageExperienceJobDescriptionLinks'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PageExperienceJobDescriptionAssetsResolvers<ContextType = any, ParentType extends ResolversParentTypes['PageExperienceJobDescriptionAssets'] = ResolversParentTypes['PageExperienceJobDescriptionAssets']> = {
  block?: Resolver<Array<Maybe<ResolversTypes['Asset']>>, ParentType, ContextType>;
  hyperlink?: Resolver<Array<Maybe<ResolversTypes['Asset']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PageExperienceJobDescriptionEntriesResolvers<ContextType = any, ParentType extends ResolversParentTypes['PageExperienceJobDescriptionEntries'] = ResolversParentTypes['PageExperienceJobDescriptionEntries']> = {
  block?: Resolver<Array<Maybe<ResolversTypes['Entry']>>, ParentType, ContextType>;
  hyperlink?: Resolver<Array<Maybe<ResolversTypes['Entry']>>, ParentType, ContextType>;
  inline?: Resolver<Array<Maybe<ResolversTypes['Entry']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PageExperienceJobDescriptionLinksResolvers<ContextType = any, ParentType extends ResolversParentTypes['PageExperienceJobDescriptionLinks'] = ResolversParentTypes['PageExperienceJobDescriptionLinks']> = {
  assets?: Resolver<ResolversTypes['PageExperienceJobDescriptionAssets'], ParentType, ContextType>;
  entries?: Resolver<ResolversTypes['PageExperienceJobDescriptionEntries'], ParentType, ContextType>;
  resources?: Resolver<ResolversTypes['PageExperienceJobDescriptionResources'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PageExperienceJobDescriptionResourcesResolvers<ContextType = any, ParentType extends ResolversParentTypes['PageExperienceJobDescriptionResources'] = ResolversParentTypes['PageExperienceJobDescriptionResources']> = {
  block?: Resolver<Array<ResolversTypes['PageExperienceJobDescriptionResourcesBlock']>, ParentType, ContextType>;
  hyperlink?: Resolver<Array<ResolversTypes['PageExperienceJobDescriptionResourcesHyperlink']>, ParentType, ContextType>;
  inline?: Resolver<Array<ResolversTypes['PageExperienceJobDescriptionResourcesInline']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PageExperienceJobDescriptionResourcesBlockResolvers<ContextType = any, ParentType extends ResolversParentTypes['PageExperienceJobDescriptionResourcesBlock'] = ResolversParentTypes['PageExperienceJobDescriptionResourcesBlock']> = {
  sys?: Resolver<ResolversTypes['ResourceSys'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PageExperienceJobDescriptionResourcesHyperlinkResolvers<ContextType = any, ParentType extends ResolversParentTypes['PageExperienceJobDescriptionResourcesHyperlink'] = ResolversParentTypes['PageExperienceJobDescriptionResourcesHyperlink']> = {
  sys?: Resolver<ResolversTypes['ResourceSys'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PageExperienceJobDescriptionResourcesInlineResolvers<ContextType = any, ParentType extends ResolversParentTypes['PageExperienceJobDescriptionResourcesInline'] = ResolversParentTypes['PageExperienceJobDescriptionResourcesInline']> = {
  sys?: Resolver<ResolversTypes['ResourceSys'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PageExperienceLinkingCollectionsResolvers<ContextType = any, ParentType extends ResolversParentTypes['PageExperienceLinkingCollections'] = ResolversParentTypes['PageExperienceLinkingCollections']> = {
  entryCollection?: Resolver<Maybe<ResolversTypes['EntryCollection']>, ParentType, ContextType, RequireFields<PageExperienceLinkingCollectionsEntryCollectionArgs, 'limit' | 'skip'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PageLandingResolvers<ContextType = any, ParentType extends ResolversParentTypes['PageLanding'] = ResolversParentTypes['PageLanding']> = {
  _id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  contentfulMetadata?: Resolver<ResolversTypes['ContentfulMetadata'], ParentType, ContextType>;
  featuredBlogPost?: Resolver<Maybe<ResolversTypes['PageBlogPost']>, ParentType, ContextType, Partial<PageLandingFeaturedBlogPostArgs>>;
  hero?: Resolver<Maybe<ResolversTypes['ComponentHero']>, ParentType, ContextType, Partial<PageLandingHeroArgs>>;
  internalName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, Partial<PageLandingInternalNameArgs>>;
  linkedFrom?: Resolver<Maybe<ResolversTypes['PageLandingLinkingCollections']>, ParentType, ContextType, Partial<PageLandingLinkedFromArgs>>;
  seoFields?: Resolver<Maybe<ResolversTypes['ComponentSeo']>, ParentType, ContextType, Partial<PageLandingSeoFieldsArgs>>;
  sys?: Resolver<ResolversTypes['Sys'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PageLandingCollectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['PageLandingCollection'] = ResolversParentTypes['PageLandingCollection']> = {
  items?: Resolver<Array<Maybe<ResolversTypes['PageLanding']>>, ParentType, ContextType>;
  limit?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  skip?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  total?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PageLandingLinkingCollectionsResolvers<ContextType = any, ParentType extends ResolversParentTypes['PageLandingLinkingCollections'] = ResolversParentTypes['PageLandingLinkingCollections']> = {
  entryCollection?: Resolver<Maybe<ResolversTypes['EntryCollection']>, ParentType, ContextType, RequireFields<PageLandingLinkingCollectionsEntryCollectionArgs, 'limit' | 'skip'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PageServiceResolvers<ContextType = any, ParentType extends ResolversParentTypes['PageService'] = ResolversParentTypes['PageService']> = {
  _id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  contentfulMetadata?: Resolver<ResolversTypes['ContentfulMetadata'], ParentType, ContextType>;
  internalName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, Partial<PageServiceInternalNameArgs>>;
  linkedFrom?: Resolver<Maybe<ResolversTypes['PageServiceLinkingCollections']>, ParentType, ContextType, Partial<PageServiceLinkedFromArgs>>;
  pageContent?: Resolver<Maybe<ResolversTypes['PageServicePageContent']>, ParentType, ContextType, Partial<PageServicePageContentArgs>>;
  pageSeo?: Resolver<Maybe<ResolversTypes['ComponentSeo']>, ParentType, ContextType, Partial<PageServicePageSeoArgs>>;
  pageTitle?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, Partial<PageServicePageTitleArgs>>;
  slug?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, Partial<PageServiceSlugArgs>>;
  sys?: Resolver<ResolversTypes['Sys'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PageServiceCollectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['PageServiceCollection'] = ResolversParentTypes['PageServiceCollection']> = {
  items?: Resolver<Array<Maybe<ResolversTypes['PageService']>>, ParentType, ContextType>;
  limit?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  skip?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  total?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PageServiceLinkingCollectionsResolvers<ContextType = any, ParentType extends ResolversParentTypes['PageServiceLinkingCollections'] = ResolversParentTypes['PageServiceLinkingCollections']> = {
  entryCollection?: Resolver<Maybe<ResolversTypes['EntryCollection']>, ParentType, ContextType, RequireFields<PageServiceLinkingCollectionsEntryCollectionArgs, 'limit' | 'skip'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PageServicePageContentResolvers<ContextType = any, ParentType extends ResolversParentTypes['PageServicePageContent'] = ResolversParentTypes['PageServicePageContent']> = {
  json?: Resolver<ResolversTypes['JSON'], ParentType, ContextType>;
  links?: Resolver<ResolversTypes['PageServicePageContentLinks'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PageServicePageContentAssetsResolvers<ContextType = any, ParentType extends ResolversParentTypes['PageServicePageContentAssets'] = ResolversParentTypes['PageServicePageContentAssets']> = {
  block?: Resolver<Array<Maybe<ResolversTypes['Asset']>>, ParentType, ContextType>;
  hyperlink?: Resolver<Array<Maybe<ResolversTypes['Asset']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PageServicePageContentEntriesResolvers<ContextType = any, ParentType extends ResolversParentTypes['PageServicePageContentEntries'] = ResolversParentTypes['PageServicePageContentEntries']> = {
  block?: Resolver<Array<Maybe<ResolversTypes['Entry']>>, ParentType, ContextType>;
  hyperlink?: Resolver<Array<Maybe<ResolversTypes['Entry']>>, ParentType, ContextType>;
  inline?: Resolver<Array<Maybe<ResolversTypes['Entry']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PageServicePageContentLinksResolvers<ContextType = any, ParentType extends ResolversParentTypes['PageServicePageContentLinks'] = ResolversParentTypes['PageServicePageContentLinks']> = {
  assets?: Resolver<ResolversTypes['PageServicePageContentAssets'], ParentType, ContextType>;
  entries?: Resolver<ResolversTypes['PageServicePageContentEntries'], ParentType, ContextType>;
  resources?: Resolver<ResolversTypes['PageServicePageContentResources'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PageServicePageContentResourcesResolvers<ContextType = any, ParentType extends ResolversParentTypes['PageServicePageContentResources'] = ResolversParentTypes['PageServicePageContentResources']> = {
  block?: Resolver<Array<ResolversTypes['PageServicePageContentResourcesBlock']>, ParentType, ContextType>;
  hyperlink?: Resolver<Array<ResolversTypes['PageServicePageContentResourcesHyperlink']>, ParentType, ContextType>;
  inline?: Resolver<Array<ResolversTypes['PageServicePageContentResourcesInline']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PageServicePageContentResourcesBlockResolvers<ContextType = any, ParentType extends ResolversParentTypes['PageServicePageContentResourcesBlock'] = ResolversParentTypes['PageServicePageContentResourcesBlock']> = {
  sys?: Resolver<ResolversTypes['ResourceSys'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PageServicePageContentResourcesHyperlinkResolvers<ContextType = any, ParentType extends ResolversParentTypes['PageServicePageContentResourcesHyperlink'] = ResolversParentTypes['PageServicePageContentResourcesHyperlink']> = {
  sys?: Resolver<ResolversTypes['ResourceSys'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PageServicePageContentResourcesInlineResolvers<ContextType = any, ParentType extends ResolversParentTypes['PageServicePageContentResourcesInline'] = ResolversParentTypes['PageServicePageContentResourcesInline']> = {
  sys?: Resolver<ResolversTypes['ResourceSys'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface QualityScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Quality'], any> {
  name: 'Quality';
}

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  _node?: Resolver<Maybe<ResolversTypes['_Node']>, ParentType, ContextType, RequireFields<Query_NodeArgs, 'id'>>;
  _nodes?: Resolver<Array<Maybe<ResolversTypes['_Node']>>, ParentType, ContextType, RequireFields<Query_NodesArgs, 'ids'>>;
  asset?: Resolver<Maybe<ResolversTypes['Asset']>, ParentType, ContextType, RequireFields<QueryAssetArgs, 'id'>>;
  assetCollection?: Resolver<Maybe<ResolversTypes['AssetCollection']>, ParentType, ContextType, RequireFields<QueryAssetCollectionArgs, 'limit' | 'skip'>>;
  componentAuthor?: Resolver<Maybe<ResolversTypes['ComponentAuthor']>, ParentType, ContextType, RequireFields<QueryComponentAuthorArgs, 'id'>>;
  componentAuthorCollection?: Resolver<Maybe<ResolversTypes['ComponentAuthorCollection']>, ParentType, ContextType, RequireFields<QueryComponentAuthorCollectionArgs, 'limit' | 'skip'>>;
  componentCta?: Resolver<Maybe<ResolversTypes['ComponentCta']>, ParentType, ContextType, RequireFields<QueryComponentCtaArgs, 'id'>>;
  componentCtaCollection?: Resolver<Maybe<ResolversTypes['ComponentCtaCollection']>, ParentType, ContextType, RequireFields<QueryComponentCtaCollectionArgs, 'limit' | 'skip'>>;
  componentHero?: Resolver<Maybe<ResolversTypes['ComponentHero']>, ParentType, ContextType, RequireFields<QueryComponentHeroArgs, 'id'>>;
  componentHeroCollection?: Resolver<Maybe<ResolversTypes['ComponentHeroCollection']>, ParentType, ContextType, RequireFields<QueryComponentHeroCollectionArgs, 'limit' | 'skip'>>;
  componentRichImage?: Resolver<Maybe<ResolversTypes['ComponentRichImage']>, ParentType, ContextType, RequireFields<QueryComponentRichImageArgs, 'id'>>;
  componentRichImageCollection?: Resolver<Maybe<ResolversTypes['ComponentRichImageCollection']>, ParentType, ContextType, RequireFields<QueryComponentRichImageCollectionArgs, 'limit' | 'skip'>>;
  componentSeo?: Resolver<Maybe<ResolversTypes['ComponentSeo']>, ParentType, ContextType, RequireFields<QueryComponentSeoArgs, 'id'>>;
  componentSeoCollection?: Resolver<Maybe<ResolversTypes['ComponentSeoCollection']>, ParentType, ContextType, RequireFields<QueryComponentSeoCollectionArgs, 'limit' | 'skip'>>;
  entryCollection?: Resolver<Maybe<ResolversTypes['EntryCollection']>, ParentType, ContextType, RequireFields<QueryEntryCollectionArgs, 'limit' | 'skip'>>;
  navigationLink?: Resolver<Maybe<ResolversTypes['NavigationLink']>, ParentType, ContextType, RequireFields<QueryNavigationLinkArgs, 'id'>>;
  navigationLinkCollection?: Resolver<Maybe<ResolversTypes['NavigationLinkCollection']>, ParentType, ContextType, RequireFields<QueryNavigationLinkCollectionArgs, 'limit' | 'skip'>>;
  navigationMenu?: Resolver<Maybe<ResolversTypes['NavigationMenu']>, ParentType, ContextType, RequireFields<QueryNavigationMenuArgs, 'id'>>;
  navigationMenuCollection?: Resolver<Maybe<ResolversTypes['NavigationMenuCollection']>, ParentType, ContextType, RequireFields<QueryNavigationMenuCollectionArgs, 'limit' | 'skip'>>;
  pageBlogPost?: Resolver<Maybe<ResolversTypes['PageBlogPost']>, ParentType, ContextType, RequireFields<QueryPageBlogPostArgs, 'id'>>;
  pageBlogPostCollection?: Resolver<Maybe<ResolversTypes['PageBlogPostCollection']>, ParentType, ContextType, RequireFields<QueryPageBlogPostCollectionArgs, 'limit' | 'skip'>>;
  pageDefault?: Resolver<Maybe<ResolversTypes['PageDefault']>, ParentType, ContextType, RequireFields<QueryPageDefaultArgs, 'id'>>;
  pageDefaultCollection?: Resolver<Maybe<ResolversTypes['PageDefaultCollection']>, ParentType, ContextType, RequireFields<QueryPageDefaultCollectionArgs, 'limit' | 'skip'>>;
  pageExperience?: Resolver<Maybe<ResolversTypes['PageExperience']>, ParentType, ContextType, RequireFields<QueryPageExperienceArgs, 'id'>>;
  pageExperienceCollection?: Resolver<Maybe<ResolversTypes['PageExperienceCollection']>, ParentType, ContextType, RequireFields<QueryPageExperienceCollectionArgs, 'limit' | 'skip'>>;
  pageLanding?: Resolver<Maybe<ResolversTypes['PageLanding']>, ParentType, ContextType, RequireFields<QueryPageLandingArgs, 'id'>>;
  pageLandingCollection?: Resolver<Maybe<ResolversTypes['PageLandingCollection']>, ParentType, ContextType, RequireFields<QueryPageLandingCollectionArgs, 'limit' | 'skip'>>;
  pageService?: Resolver<Maybe<ResolversTypes['PageService']>, ParentType, ContextType, RequireFields<QueryPageServiceArgs, 'id'>>;
  pageServiceCollection?: Resolver<Maybe<ResolversTypes['PageServiceCollection']>, ParentType, ContextType, RequireFields<QueryPageServiceCollectionArgs, 'limit' | 'skip'>>;
  settings?: Resolver<Maybe<ResolversTypes['Settings']>, ParentType, ContextType, RequireFields<QuerySettingsArgs, 'id'>>;
  settingsCollection?: Resolver<Maybe<ResolversTypes['SettingsCollection']>, ParentType, ContextType, RequireFields<QuerySettingsCollectionArgs, 'limit' | 'skip'>>;
  vq5Hs6VZcdFFqcGewQDi5?: Resolver<Maybe<ResolversTypes['Vq5Hs6VZcdFFqcGewQDi5']>, ParentType, ContextType, RequireFields<QueryVq5Hs6VZcdFFqcGewQDi5Args, 'id'>>;
  vq5Hs6VZcdFFqcGewQDi5Collection?: Resolver<Maybe<ResolversTypes['Vq5Hs6VZcdFFqcGewQDi5Collection']>, ParentType, ContextType, RequireFields<QueryVq5Hs6VZcdFFqcGewQDi5CollectionArgs, 'limit' | 'skip'>>;
};

export type ResourceLinkResolvers<ContextType = any, ParentType extends ResolversParentTypes['ResourceLink'] = ResolversParentTypes['ResourceLink']> = {
  __resolveType: TypeResolveFn<'PageBlogPostContentResourcesBlock' | 'PageBlogPostContentResourcesHyperlink' | 'PageBlogPostContentResourcesInline' | 'PageDefaultPageContentResourcesBlock' | 'PageDefaultPageContentResourcesHyperlink' | 'PageDefaultPageContentResourcesInline' | 'PageExperienceJobDescriptionResourcesBlock' | 'PageExperienceJobDescriptionResourcesHyperlink' | 'PageExperienceJobDescriptionResourcesInline' | 'PageServicePageContentResourcesBlock' | 'PageServicePageContentResourcesHyperlink' | 'PageServicePageContentResourcesInline', ParentType, ContextType>;
  sys?: Resolver<ResolversTypes['ResourceSys'], ParentType, ContextType>;
};

export type ResourceSysResolvers<ContextType = any, ParentType extends ResolversParentTypes['ResourceSys'] = ResolversParentTypes['ResourceSys']> = {
  linkType?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  urn?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SettingsResolvers<ContextType = any, ParentType extends ResolversParentTypes['Settings'] = ResolversParentTypes['Settings']> = {
  _id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  brandingDogNoShadow?: Resolver<Maybe<ResolversTypes['Asset']>, ParentType, ContextType, Partial<SettingsBrandingDogNoShadowArgs>>;
  brandingDogShadow?: Resolver<Maybe<ResolversTypes['Asset']>, ParentType, ContextType, Partial<SettingsBrandingDogShadowArgs>>;
  brandingFull?: Resolver<Maybe<ResolversTypes['Asset']>, ParentType, ContextType, Partial<SettingsBrandingFullArgs>>;
  brandingKatakanShadow?: Resolver<Maybe<ResolversTypes['Asset']>, ParentType, ContextType, Partial<SettingsBrandingKatakanShadowArgs>>;
  brandingKatakanaNoShadow?: Resolver<Maybe<ResolversTypes['Asset']>, ParentType, ContextType, Partial<SettingsBrandingKatakanaNoShadowArgs>>;
  brandingTextNoShadow?: Resolver<Maybe<ResolversTypes['Asset']>, ParentType, ContextType, Partial<SettingsBrandingTextNoShadowArgs>>;
  brandingTextShadow?: Resolver<Maybe<ResolversTypes['Asset']>, ParentType, ContextType, Partial<SettingsBrandingTextShadowArgs>>;
  contentfulMetadata?: Resolver<ResolversTypes['ContentfulMetadata'], ParentType, ContextType>;
  footerCopyrightText?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, Partial<SettingsFooterCopyrightTextArgs>>;
  footerLegalNavigationCollection?: Resolver<Maybe<ResolversTypes['SettingsFooterLegalNavigationCollection']>, ParentType, ContextType, RequireFields<SettingsFooterLegalNavigationCollectionArgs, 'limit' | 'skip'>>;
  footerServicesNavigationCollection?: Resolver<Maybe<ResolversTypes['SettingsFooterServicesNavigationCollection']>, ParentType, ContextType, RequireFields<SettingsFooterServicesNavigationCollectionArgs, 'limit' | 'skip'>>;
  footerSiteNavigationCollection?: Resolver<Maybe<ResolversTypes['SettingsFooterSiteNavigationCollection']>, ParentType, ContextType, RequireFields<SettingsFooterSiteNavigationCollectionArgs, 'limit' | 'skip'>>;
  headerNavigationCollection?: Resolver<Maybe<ResolversTypes['SettingsHeaderNavigationCollection']>, ParentType, ContextType, RequireFields<SettingsHeaderNavigationCollectionArgs, 'limit' | 'skip'>>;
  internalName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, Partial<SettingsInternalNameArgs>>;
  linkedFrom?: Resolver<Maybe<ResolversTypes['SettingsLinkingCollections']>, ParentType, ContextType, Partial<SettingsLinkedFromArgs>>;
  logo?: Resolver<Maybe<ResolversTypes['Asset']>, ParentType, ContextType, Partial<SettingsLogoArgs>>;
  seo?: Resolver<Maybe<ResolversTypes['ComponentSeo']>, ParentType, ContextType, Partial<SettingsSeoArgs>>;
  siteDescription?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, Partial<SettingsSiteDescriptionArgs>>;
  siteTitle?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, Partial<SettingsSiteTitleArgs>>;
  socialLinksCollection?: Resolver<Maybe<ResolversTypes['SettingsSocialLinksCollection']>, ParentType, ContextType, RequireFields<SettingsSocialLinksCollectionArgs, 'limit' | 'skip'>>;
  sys?: Resolver<ResolversTypes['Sys'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SettingsCollectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['SettingsCollection'] = ResolversParentTypes['SettingsCollection']> = {
  items?: Resolver<Array<Maybe<ResolversTypes['Settings']>>, ParentType, ContextType>;
  limit?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  skip?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  total?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SettingsFooterLegalNavigationCollectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['SettingsFooterLegalNavigationCollection'] = ResolversParentTypes['SettingsFooterLegalNavigationCollection']> = {
  items?: Resolver<Array<Maybe<ResolversTypes['NavigationLink']>>, ParentType, ContextType>;
  limit?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  skip?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  total?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SettingsFooterServicesNavigationCollectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['SettingsFooterServicesNavigationCollection'] = ResolversParentTypes['SettingsFooterServicesNavigationCollection']> = {
  items?: Resolver<Array<Maybe<ResolversTypes['NavigationLink']>>, ParentType, ContextType>;
  limit?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  skip?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  total?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SettingsFooterSiteNavigationCollectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['SettingsFooterSiteNavigationCollection'] = ResolversParentTypes['SettingsFooterSiteNavigationCollection']> = {
  items?: Resolver<Array<Maybe<ResolversTypes['NavigationLink']>>, ParentType, ContextType>;
  limit?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  skip?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  total?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SettingsHeaderNavigationCollectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['SettingsHeaderNavigationCollection'] = ResolversParentTypes['SettingsHeaderNavigationCollection']> = {
  items?: Resolver<Array<Maybe<ResolversTypes['NavigationLink']>>, ParentType, ContextType>;
  limit?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  skip?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  total?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SettingsLinkingCollectionsResolvers<ContextType = any, ParentType extends ResolversParentTypes['SettingsLinkingCollections'] = ResolversParentTypes['SettingsLinkingCollections']> = {
  entryCollection?: Resolver<Maybe<ResolversTypes['EntryCollection']>, ParentType, ContextType, RequireFields<SettingsLinkingCollectionsEntryCollectionArgs, 'limit' | 'skip'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SettingsSocialLinksCollectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['SettingsSocialLinksCollection'] = ResolversParentTypes['SettingsSocialLinksCollection']> = {
  items?: Resolver<Array<Maybe<ResolversTypes['NavigationLink']>>, ParentType, ContextType>;
  limit?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  skip?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  total?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SysResolvers<ContextType = any, ParentType extends ResolversParentTypes['Sys'] = ResolversParentTypes['Sys']> = {
  environmentId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  firstPublishedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  locale?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  publishedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  publishedVersion?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  spaceId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TaxonomyConceptResolvers<ContextType = any, ParentType extends ResolversParentTypes['TaxonomyConcept'] = ResolversParentTypes['TaxonomyConcept']> = {
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Vq5Hs6VZcdFFqcGewQDi5Resolvers<ContextType = any, ParentType extends ResolversParentTypes['Vq5Hs6VZcdFFqcGewQDi5'] = ResolversParentTypes['Vq5Hs6VZcdFFqcGewQDi5']> = {
  _id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  contentfulMetadata?: Resolver<ResolversTypes['ContentfulMetadata'], ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, Partial<Vq5Hs6VZcdFFqcGewQDi5DescriptionArgs>>;
  image?: Resolver<Maybe<ResolversTypes['Asset']>, ParentType, ContextType, Partial<Vq5Hs6VZcdFFqcGewQDi5ImageArgs>>;
  linkedFrom?: Resolver<Maybe<ResolversTypes['Vq5Hs6VZcdFFqcGewQDi5LinkingCollections']>, ParentType, ContextType, Partial<Vq5Hs6VZcdFFqcGewQDi5LinkedFromArgs>>;
  sys?: Resolver<ResolversTypes['Sys'], ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, Partial<Vq5Hs6VZcdFFqcGewQDi5TitleArgs>>;
  url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, Partial<Vq5Hs6VZcdFFqcGewQDi5UrlArgs>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Vq5Hs6VZcdFFqcGewQDi5CollectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['Vq5Hs6VZcdFFqcGewQDi5Collection'] = ResolversParentTypes['Vq5Hs6VZcdFFqcGewQDi5Collection']> = {
  items?: Resolver<Array<Maybe<ResolversTypes['Vq5Hs6VZcdFFqcGewQDi5']>>, ParentType, ContextType>;
  limit?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  skip?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  total?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Vq5Hs6VZcdFFqcGewQDi5LinkingCollectionsResolvers<ContextType = any, ParentType extends ResolversParentTypes['Vq5Hs6VZcdFFqcGewQDi5LinkingCollections'] = ResolversParentTypes['Vq5Hs6VZcdFFqcGewQDi5LinkingCollections']> = {
  entryCollection?: Resolver<Maybe<ResolversTypes['EntryCollection']>, ParentType, ContextType, RequireFields<Vq5Hs6VZcdFFqcGewQDi5LinkingCollectionsEntryCollectionArgs, 'limit' | 'skip'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type _NodeResolvers<ContextType = any, ParentType extends ResolversParentTypes['_Node'] = ResolversParentTypes['_Node']> = {
  __resolveType: TypeResolveFn<'ComponentAuthor' | 'ComponentCta' | 'ComponentHero' | 'ComponentRichImage' | 'ComponentSeo' | 'NavigationLink' | 'NavigationMenu' | 'PageBlogPost' | 'PageDefault' | 'PageExperience' | 'PageLanding' | 'PageService' | 'Settings' | 'Vq5Hs6VZcdFFqcGewQDi5', ParentType, ContextType>;
  _id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  Asset?: AssetResolvers<ContextType>;
  AssetCollection?: AssetCollectionResolvers<ContextType>;
  AssetLinkingCollections?: AssetLinkingCollectionsResolvers<ContextType>;
  ComponentAuthor?: ComponentAuthorResolvers<ContextType>;
  ComponentAuthorCollection?: ComponentAuthorCollectionResolvers<ContextType>;
  ComponentAuthorLinkingCollections?: ComponentAuthorLinkingCollectionsResolvers<ContextType>;
  ComponentCta?: ComponentCtaResolvers<ContextType>;
  ComponentCtaCollection?: ComponentCtaCollectionResolvers<ContextType>;
  ComponentCtaLinkingCollections?: ComponentCtaLinkingCollectionsResolvers<ContextType>;
  ComponentHero?: ComponentHeroResolvers<ContextType>;
  ComponentHeroCollection?: ComponentHeroCollectionResolvers<ContextType>;
  ComponentHeroCtaFieldsCollection?: ComponentHeroCtaFieldsCollectionResolvers<ContextType>;
  ComponentHeroLinkingCollections?: ComponentHeroLinkingCollectionsResolvers<ContextType>;
  ComponentRichImage?: ComponentRichImageResolvers<ContextType>;
  ComponentRichImageCollection?: ComponentRichImageCollectionResolvers<ContextType>;
  ComponentRichImageLinkingCollections?: ComponentRichImageLinkingCollectionsResolvers<ContextType>;
  ComponentSeo?: ComponentSeoResolvers<ContextType>;
  ComponentSeoCollection?: ComponentSeoCollectionResolvers<ContextType>;
  ComponentSeoLinkingCollections?: ComponentSeoLinkingCollectionsResolvers<ContextType>;
  ContentfulMetadata?: ContentfulMetadataResolvers<ContextType>;
  ContentfulTag?: ContentfulTagResolvers<ContextType>;
  DateTime?: GraphQLScalarType;
  Dimension?: GraphQLScalarType;
  Entry?: EntryResolvers<ContextType>;
  EntryCollection?: EntryCollectionResolvers<ContextType>;
  HexColor?: GraphQLScalarType;
  JSON?: GraphQLScalarType;
  NavigationLink?: NavigationLinkResolvers<ContextType>;
  NavigationLinkCollection?: NavigationLinkCollectionResolvers<ContextType>;
  NavigationLinkLinkingCollections?: NavigationLinkLinkingCollectionsResolvers<ContextType>;
  NavigationLinkSubnavigationCollection?: NavigationLinkSubnavigationCollectionResolvers<ContextType>;
  NavigationMenu?: NavigationMenuResolvers<ContextType>;
  NavigationMenuCollection?: NavigationMenuCollectionResolvers<ContextType>;
  NavigationMenuLinkingCollections?: NavigationMenuLinkingCollectionsResolvers<ContextType>;
  NavigationMenuNavigationMenuCollection?: NavigationMenuNavigationMenuCollectionResolvers<ContextType>;
  PageBlogPost?: PageBlogPostResolvers<ContextType>;
  PageBlogPostCollection?: PageBlogPostCollectionResolvers<ContextType>;
  PageBlogPostContent?: PageBlogPostContentResolvers<ContextType>;
  PageBlogPostContentAssets?: PageBlogPostContentAssetsResolvers<ContextType>;
  PageBlogPostContentEntries?: PageBlogPostContentEntriesResolvers<ContextType>;
  PageBlogPostContentLinks?: PageBlogPostContentLinksResolvers<ContextType>;
  PageBlogPostContentResources?: PageBlogPostContentResourcesResolvers<ContextType>;
  PageBlogPostContentResourcesBlock?: PageBlogPostContentResourcesBlockResolvers<ContextType>;
  PageBlogPostContentResourcesHyperlink?: PageBlogPostContentResourcesHyperlinkResolvers<ContextType>;
  PageBlogPostContentResourcesInline?: PageBlogPostContentResourcesInlineResolvers<ContextType>;
  PageBlogPostLinkingCollections?: PageBlogPostLinkingCollectionsResolvers<ContextType>;
  PageBlogPostRelatedBlogPostsCollection?: PageBlogPostRelatedBlogPostsCollectionResolvers<ContextType>;
  PageDefault?: PageDefaultResolvers<ContextType>;
  PageDefaultCollection?: PageDefaultCollectionResolvers<ContextType>;
  PageDefaultLinkingCollections?: PageDefaultLinkingCollectionsResolvers<ContextType>;
  PageDefaultPageContent?: PageDefaultPageContentResolvers<ContextType>;
  PageDefaultPageContentAssets?: PageDefaultPageContentAssetsResolvers<ContextType>;
  PageDefaultPageContentEntries?: PageDefaultPageContentEntriesResolvers<ContextType>;
  PageDefaultPageContentLinks?: PageDefaultPageContentLinksResolvers<ContextType>;
  PageDefaultPageContentResources?: PageDefaultPageContentResourcesResolvers<ContextType>;
  PageDefaultPageContentResourcesBlock?: PageDefaultPageContentResourcesBlockResolvers<ContextType>;
  PageDefaultPageContentResourcesHyperlink?: PageDefaultPageContentResourcesHyperlinkResolvers<ContextType>;
  PageDefaultPageContentResourcesInline?: PageDefaultPageContentResourcesInlineResolvers<ContextType>;
  PageExperience?: PageExperienceResolvers<ContextType>;
  PageExperienceCollection?: PageExperienceCollectionResolvers<ContextType>;
  PageExperienceJobDescription?: PageExperienceJobDescriptionResolvers<ContextType>;
  PageExperienceJobDescriptionAssets?: PageExperienceJobDescriptionAssetsResolvers<ContextType>;
  PageExperienceJobDescriptionEntries?: PageExperienceJobDescriptionEntriesResolvers<ContextType>;
  PageExperienceJobDescriptionLinks?: PageExperienceJobDescriptionLinksResolvers<ContextType>;
  PageExperienceJobDescriptionResources?: PageExperienceJobDescriptionResourcesResolvers<ContextType>;
  PageExperienceJobDescriptionResourcesBlock?: PageExperienceJobDescriptionResourcesBlockResolvers<ContextType>;
  PageExperienceJobDescriptionResourcesHyperlink?: PageExperienceJobDescriptionResourcesHyperlinkResolvers<ContextType>;
  PageExperienceJobDescriptionResourcesInline?: PageExperienceJobDescriptionResourcesInlineResolvers<ContextType>;
  PageExperienceLinkingCollections?: PageExperienceLinkingCollectionsResolvers<ContextType>;
  PageLanding?: PageLandingResolvers<ContextType>;
  PageLandingCollection?: PageLandingCollectionResolvers<ContextType>;
  PageLandingLinkingCollections?: PageLandingLinkingCollectionsResolvers<ContextType>;
  PageService?: PageServiceResolvers<ContextType>;
  PageServiceCollection?: PageServiceCollectionResolvers<ContextType>;
  PageServiceLinkingCollections?: PageServiceLinkingCollectionsResolvers<ContextType>;
  PageServicePageContent?: PageServicePageContentResolvers<ContextType>;
  PageServicePageContentAssets?: PageServicePageContentAssetsResolvers<ContextType>;
  PageServicePageContentEntries?: PageServicePageContentEntriesResolvers<ContextType>;
  PageServicePageContentLinks?: PageServicePageContentLinksResolvers<ContextType>;
  PageServicePageContentResources?: PageServicePageContentResourcesResolvers<ContextType>;
  PageServicePageContentResourcesBlock?: PageServicePageContentResourcesBlockResolvers<ContextType>;
  PageServicePageContentResourcesHyperlink?: PageServicePageContentResourcesHyperlinkResolvers<ContextType>;
  PageServicePageContentResourcesInline?: PageServicePageContentResourcesInlineResolvers<ContextType>;
  Quality?: GraphQLScalarType;
  Query?: QueryResolvers<ContextType>;
  ResourceLink?: ResourceLinkResolvers<ContextType>;
  ResourceSys?: ResourceSysResolvers<ContextType>;
  Settings?: SettingsResolvers<ContextType>;
  SettingsCollection?: SettingsCollectionResolvers<ContextType>;
  SettingsFooterLegalNavigationCollection?: SettingsFooterLegalNavigationCollectionResolvers<ContextType>;
  SettingsFooterServicesNavigationCollection?: SettingsFooterServicesNavigationCollectionResolvers<ContextType>;
  SettingsFooterSiteNavigationCollection?: SettingsFooterSiteNavigationCollectionResolvers<ContextType>;
  SettingsHeaderNavigationCollection?: SettingsHeaderNavigationCollectionResolvers<ContextType>;
  SettingsLinkingCollections?: SettingsLinkingCollectionsResolvers<ContextType>;
  SettingsSocialLinksCollection?: SettingsSocialLinksCollectionResolvers<ContextType>;
  Sys?: SysResolvers<ContextType>;
  TaxonomyConcept?: TaxonomyConceptResolvers<ContextType>;
  Vq5Hs6VZcdFFqcGewQDi5?: Vq5Hs6VZcdFFqcGewQDi5Resolvers<ContextType>;
  Vq5Hs6VZcdFFqcGewQDi5Collection?: Vq5Hs6VZcdFFqcGewQDi5CollectionResolvers<ContextType>;
  Vq5Hs6VZcdFFqcGewQDi5LinkingCollections?: Vq5Hs6VZcdFFqcGewQDi5LinkingCollectionsResolvers<ContextType>;
  _Node?: _NodeResolvers<ContextType>;
};

export type DirectiveResolvers<ContextType = any> = {
  contentSourceMaps?: ContentSourceMapsDirectiveResolver<any, any, ContextType>;
};
