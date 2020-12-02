/* eslint-disable */

declare namespace GatsbyTypes {
  type Maybe<T> = T | undefined;
  type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
  type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
  type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
  /** All built-in and custom scalars, mapped to their actual values */
  type Scalars = {
    ID: string;
    String: string;
    Boolean: boolean;
    Int: number;
    Float: number;
    Date: string;
    JSON: never;
  };

  type BlurredOptions = {
    /** Width of the generated low-res preview. Default is 20px */
    readonly width: Maybe<Scalars['Int']>;
    /**
     * Force the output format for the low-res preview. Default is to use the same
     * format as the input. You should rarely need to change this
     */
    readonly toFormat: Maybe<ImageFormat>;
  };

  type BooleanQueryOperatorInput = {
    readonly eq: Maybe<Scalars['Boolean']>;
    readonly ne: Maybe<Scalars['Boolean']>;
    readonly in: Maybe<ReadonlyArray<Maybe<Scalars['Boolean']>>>;
    readonly nin: Maybe<ReadonlyArray<Maybe<Scalars['Boolean']>>>;
  };

  type DataJson = Node & {
    readonly id: Scalars['ID'];
    readonly parent: Maybe<Node>;
    readonly children: ReadonlyArray<Node>;
    readonly internal: Internal;
    readonly content: Maybe<ReadonlyArray<Maybe<DataJsonContent>>>;
    readonly password: Maybe<Scalars['String']>;
  };

  type DataJsonConnection = {
    readonly totalCount: Scalars['Int'];
    readonly edges: ReadonlyArray<DataJsonEdge>;
    readonly nodes: ReadonlyArray<DataJson>;
    readonly pageInfo: PageInfo;
    readonly distinct: ReadonlyArray<Scalars['String']>;
    readonly group: ReadonlyArray<DataJsonGroupConnection>;
  };

  type DataJsonConnection_distinctArgs = {
    field: DataJsonFieldsEnum;
  };

  type DataJsonConnection_groupArgs = {
    skip: Maybe<Scalars['Int']>;
    limit: Maybe<Scalars['Int']>;
    field: DataJsonFieldsEnum;
  };

  type DataJsonContent = {
    readonly title: Maybe<Scalars['String']>;
    readonly image: Maybe<File>;
    readonly pdf: Maybe<File>;
  };

  type DataJsonContentFilterInput = {
    readonly title: Maybe<StringQueryOperatorInput>;
    readonly image: Maybe<FileFilterInput>;
    readonly pdf: Maybe<FileFilterInput>;
  };

  type DataJsonContentFilterListInput = {
    readonly elemMatch: Maybe<DataJsonContentFilterInput>;
  };

  type DataJsonEdge = {
    readonly next: Maybe<DataJson>;
    readonly node: DataJson;
    readonly previous: Maybe<DataJson>;
  };

  enum DataJsonFieldsEnum {
    id = 'id',
    parent___id = 'parent.id',
    parent___parent___id = 'parent.parent.id',
    parent___parent___parent___id = 'parent.parent.parent.id',
    parent___parent___parent___children = 'parent.parent.parent.children',
    parent___parent___children = 'parent.parent.children',
    parent___parent___children___id = 'parent.parent.children.id',
    parent___parent___children___children = 'parent.parent.children.children',
    parent___parent___internal___content = 'parent.parent.internal.content',
    parent___parent___internal___contentDigest = 'parent.parent.internal.contentDigest',
    parent___parent___internal___description = 'parent.parent.internal.description',
    parent___parent___internal___fieldOwners = 'parent.parent.internal.fieldOwners',
    parent___parent___internal___ignoreType = 'parent.parent.internal.ignoreType',
    parent___parent___internal___mediaType = 'parent.parent.internal.mediaType',
    parent___parent___internal___owner = 'parent.parent.internal.owner',
    parent___parent___internal___type = 'parent.parent.internal.type',
    parent___children = 'parent.children',
    parent___children___id = 'parent.children.id',
    parent___children___parent___id = 'parent.children.parent.id',
    parent___children___parent___children = 'parent.children.parent.children',
    parent___children___children = 'parent.children.children',
    parent___children___children___id = 'parent.children.children.id',
    parent___children___children___children = 'parent.children.children.children',
    parent___children___internal___content = 'parent.children.internal.content',
    parent___children___internal___contentDigest = 'parent.children.internal.contentDigest',
    parent___children___internal___description = 'parent.children.internal.description',
    parent___children___internal___fieldOwners = 'parent.children.internal.fieldOwners',
    parent___children___internal___ignoreType = 'parent.children.internal.ignoreType',
    parent___children___internal___mediaType = 'parent.children.internal.mediaType',
    parent___children___internal___owner = 'parent.children.internal.owner',
    parent___children___internal___type = 'parent.children.internal.type',
    parent___internal___content = 'parent.internal.content',
    parent___internal___contentDigest = 'parent.internal.contentDigest',
    parent___internal___description = 'parent.internal.description',
    parent___internal___fieldOwners = 'parent.internal.fieldOwners',
    parent___internal___ignoreType = 'parent.internal.ignoreType',
    parent___internal___mediaType = 'parent.internal.mediaType',
    parent___internal___owner = 'parent.internal.owner',
    parent___internal___type = 'parent.internal.type',
    children = 'children',
    children___id = 'children.id',
    children___parent___id = 'children.parent.id',
    children___parent___parent___id = 'children.parent.parent.id',
    children___parent___parent___children = 'children.parent.parent.children',
    children___parent___children = 'children.parent.children',
    children___parent___children___id = 'children.parent.children.id',
    children___parent___children___children = 'children.parent.children.children',
    children___parent___internal___content = 'children.parent.internal.content',
    children___parent___internal___contentDigest = 'children.parent.internal.contentDigest',
    children___parent___internal___description = 'children.parent.internal.description',
    children___parent___internal___fieldOwners = 'children.parent.internal.fieldOwners',
    children___parent___internal___ignoreType = 'children.parent.internal.ignoreType',
    children___parent___internal___mediaType = 'children.parent.internal.mediaType',
    children___parent___internal___owner = 'children.parent.internal.owner',
    children___parent___internal___type = 'children.parent.internal.type',
    children___children = 'children.children',
    children___children___id = 'children.children.id',
    children___children___parent___id = 'children.children.parent.id',
    children___children___parent___children = 'children.children.parent.children',
    children___children___children = 'children.children.children',
    children___children___children___id = 'children.children.children.id',
    children___children___children___children = 'children.children.children.children',
    children___children___internal___content = 'children.children.internal.content',
    children___children___internal___contentDigest = 'children.children.internal.contentDigest',
    children___children___internal___description = 'children.children.internal.description',
    children___children___internal___fieldOwners = 'children.children.internal.fieldOwners',
    children___children___internal___ignoreType = 'children.children.internal.ignoreType',
    children___children___internal___mediaType = 'children.children.internal.mediaType',
    children___children___internal___owner = 'children.children.internal.owner',
    children___children___internal___type = 'children.children.internal.type',
    children___internal___content = 'children.internal.content',
    children___internal___contentDigest = 'children.internal.contentDigest',
    children___internal___description = 'children.internal.description',
    children___internal___fieldOwners = 'children.internal.fieldOwners',
    children___internal___ignoreType = 'children.internal.ignoreType',
    children___internal___mediaType = 'children.internal.mediaType',
    children___internal___owner = 'children.internal.owner',
    children___internal___type = 'children.internal.type',
    internal___content = 'internal.content',
    internal___contentDigest = 'internal.contentDigest',
    internal___description = 'internal.description',
    internal___fieldOwners = 'internal.fieldOwners',
    internal___ignoreType = 'internal.ignoreType',
    internal___mediaType = 'internal.mediaType',
    internal___owner = 'internal.owner',
    internal___type = 'internal.type',
    content = 'content',
    content___title = 'content.title',
    content___image___sourceInstanceName = 'content.image.sourceInstanceName',
    content___image___absolutePath = 'content.image.absolutePath',
    content___image___relativePath = 'content.image.relativePath',
    content___image___extension = 'content.image.extension',
    content___image___size = 'content.image.size',
    content___image___prettySize = 'content.image.prettySize',
    content___image___modifiedTime = 'content.image.modifiedTime',
    content___image___accessTime = 'content.image.accessTime',
    content___image___changeTime = 'content.image.changeTime',
    content___image___birthTime = 'content.image.birthTime',
    content___image___root = 'content.image.root',
    content___image___dir = 'content.image.dir',
    content___image___base = 'content.image.base',
    content___image___ext = 'content.image.ext',
    content___image___name = 'content.image.name',
    content___image___relativeDirectory = 'content.image.relativeDirectory',
    content___image___dev = 'content.image.dev',
    content___image___mode = 'content.image.mode',
    content___image___nlink = 'content.image.nlink',
    content___image___uid = 'content.image.uid',
    content___image___gid = 'content.image.gid',
    content___image___rdev = 'content.image.rdev',
    content___image___ino = 'content.image.ino',
    content___image___atimeMs = 'content.image.atimeMs',
    content___image___mtimeMs = 'content.image.mtimeMs',
    content___image___ctimeMs = 'content.image.ctimeMs',
    content___image___atime = 'content.image.atime',
    content___image___mtime = 'content.image.mtime',
    content___image___ctime = 'content.image.ctime',
    content___image___birthtime = 'content.image.birthtime',
    content___image___birthtimeMs = 'content.image.birthtimeMs',
    content___image___blksize = 'content.image.blksize',
    content___image___blocks = 'content.image.blocks',
    content___image___url = 'content.image.url',
    content___image___publicURL = 'content.image.publicURL',
    content___image___childImageSharp___gatsbyImageData = 'content.image.childImageSharp.gatsbyImageData',
    content___image___childImageSharp___id = 'content.image.childImageSharp.id',
    content___image___childImageSharp___children = 'content.image.childImageSharp.children',
    content___image___id = 'content.image.id',
    content___image___parent___id = 'content.image.parent.id',
    content___image___parent___children = 'content.image.parent.children',
    content___image___children = 'content.image.children',
    content___image___children___id = 'content.image.children.id',
    content___image___children___children = 'content.image.children.children',
    content___image___internal___content = 'content.image.internal.content',
    content___image___internal___contentDigest = 'content.image.internal.contentDigest',
    content___image___internal___description = 'content.image.internal.description',
    content___image___internal___fieldOwners = 'content.image.internal.fieldOwners',
    content___image___internal___ignoreType = 'content.image.internal.ignoreType',
    content___image___internal___mediaType = 'content.image.internal.mediaType',
    content___image___internal___owner = 'content.image.internal.owner',
    content___image___internal___type = 'content.image.internal.type',
    content___image___childDataJson___id = 'content.image.childDataJson.id',
    content___image___childDataJson___children = 'content.image.childDataJson.children',
    content___image___childDataJson___content = 'content.image.childDataJson.content',
    content___image___childDataJson___password = 'content.image.childDataJson.password',
    content___image___childMdx___rawBody = 'content.image.childMdx.rawBody',
    content___image___childMdx___fileAbsolutePath = 'content.image.childMdx.fileAbsolutePath',
    content___image___childMdx___slug = 'content.image.childMdx.slug',
    content___image___childMdx___body = 'content.image.childMdx.body',
    content___image___childMdx___excerpt = 'content.image.childMdx.excerpt',
    content___image___childMdx___headings = 'content.image.childMdx.headings',
    content___image___childMdx___html = 'content.image.childMdx.html',
    content___image___childMdx___mdxAST = 'content.image.childMdx.mdxAST',
    content___image___childMdx___tableOfContents = 'content.image.childMdx.tableOfContents',
    content___image___childMdx___timeToRead = 'content.image.childMdx.timeToRead',
    content___image___childMdx___id = 'content.image.childMdx.id',
    content___image___childMdx___children = 'content.image.childMdx.children',
    content___pdf___sourceInstanceName = 'content.pdf.sourceInstanceName',
    content___pdf___absolutePath = 'content.pdf.absolutePath',
    content___pdf___relativePath = 'content.pdf.relativePath',
    content___pdf___extension = 'content.pdf.extension',
    content___pdf___size = 'content.pdf.size',
    content___pdf___prettySize = 'content.pdf.prettySize',
    content___pdf___modifiedTime = 'content.pdf.modifiedTime',
    content___pdf___accessTime = 'content.pdf.accessTime',
    content___pdf___changeTime = 'content.pdf.changeTime',
    content___pdf___birthTime = 'content.pdf.birthTime',
    content___pdf___root = 'content.pdf.root',
    content___pdf___dir = 'content.pdf.dir',
    content___pdf___base = 'content.pdf.base',
    content___pdf___ext = 'content.pdf.ext',
    content___pdf___name = 'content.pdf.name',
    content___pdf___relativeDirectory = 'content.pdf.relativeDirectory',
    content___pdf___dev = 'content.pdf.dev',
    content___pdf___mode = 'content.pdf.mode',
    content___pdf___nlink = 'content.pdf.nlink',
    content___pdf___uid = 'content.pdf.uid',
    content___pdf___gid = 'content.pdf.gid',
    content___pdf___rdev = 'content.pdf.rdev',
    content___pdf___ino = 'content.pdf.ino',
    content___pdf___atimeMs = 'content.pdf.atimeMs',
    content___pdf___mtimeMs = 'content.pdf.mtimeMs',
    content___pdf___ctimeMs = 'content.pdf.ctimeMs',
    content___pdf___atime = 'content.pdf.atime',
    content___pdf___mtime = 'content.pdf.mtime',
    content___pdf___ctime = 'content.pdf.ctime',
    content___pdf___birthtime = 'content.pdf.birthtime',
    content___pdf___birthtimeMs = 'content.pdf.birthtimeMs',
    content___pdf___blksize = 'content.pdf.blksize',
    content___pdf___blocks = 'content.pdf.blocks',
    content___pdf___url = 'content.pdf.url',
    content___pdf___publicURL = 'content.pdf.publicURL',
    content___pdf___childImageSharp___gatsbyImageData = 'content.pdf.childImageSharp.gatsbyImageData',
    content___pdf___childImageSharp___id = 'content.pdf.childImageSharp.id',
    content___pdf___childImageSharp___children = 'content.pdf.childImageSharp.children',
    content___pdf___id = 'content.pdf.id',
    content___pdf___parent___id = 'content.pdf.parent.id',
    content___pdf___parent___children = 'content.pdf.parent.children',
    content___pdf___children = 'content.pdf.children',
    content___pdf___children___id = 'content.pdf.children.id',
    content___pdf___children___children = 'content.pdf.children.children',
    content___pdf___internal___content = 'content.pdf.internal.content',
    content___pdf___internal___contentDigest = 'content.pdf.internal.contentDigest',
    content___pdf___internal___description = 'content.pdf.internal.description',
    content___pdf___internal___fieldOwners = 'content.pdf.internal.fieldOwners',
    content___pdf___internal___ignoreType = 'content.pdf.internal.ignoreType',
    content___pdf___internal___mediaType = 'content.pdf.internal.mediaType',
    content___pdf___internal___owner = 'content.pdf.internal.owner',
    content___pdf___internal___type = 'content.pdf.internal.type',
    content___pdf___childDataJson___id = 'content.pdf.childDataJson.id',
    content___pdf___childDataJson___children = 'content.pdf.childDataJson.children',
    content___pdf___childDataJson___content = 'content.pdf.childDataJson.content',
    content___pdf___childDataJson___password = 'content.pdf.childDataJson.password',
    content___pdf___childMdx___rawBody = 'content.pdf.childMdx.rawBody',
    content___pdf___childMdx___fileAbsolutePath = 'content.pdf.childMdx.fileAbsolutePath',
    content___pdf___childMdx___slug = 'content.pdf.childMdx.slug',
    content___pdf___childMdx___body = 'content.pdf.childMdx.body',
    content___pdf___childMdx___excerpt = 'content.pdf.childMdx.excerpt',
    content___pdf___childMdx___headings = 'content.pdf.childMdx.headings',
    content___pdf___childMdx___html = 'content.pdf.childMdx.html',
    content___pdf___childMdx___mdxAST = 'content.pdf.childMdx.mdxAST',
    content___pdf___childMdx___tableOfContents = 'content.pdf.childMdx.tableOfContents',
    content___pdf___childMdx___timeToRead = 'content.pdf.childMdx.timeToRead',
    content___pdf___childMdx___id = 'content.pdf.childMdx.id',
    content___pdf___childMdx___children = 'content.pdf.childMdx.children',
    password = 'password',
  }

  type DataJsonFilterInput = {
    readonly id: Maybe<StringQueryOperatorInput>;
    readonly parent: Maybe<NodeFilterInput>;
    readonly children: Maybe<NodeFilterListInput>;
    readonly internal: Maybe<InternalFilterInput>;
    readonly content: Maybe<DataJsonContentFilterListInput>;
    readonly password: Maybe<StringQueryOperatorInput>;
  };

  type DataJsonGroupConnection = {
    readonly totalCount: Scalars['Int'];
    readonly edges: ReadonlyArray<DataJsonEdge>;
    readonly nodes: ReadonlyArray<DataJson>;
    readonly pageInfo: PageInfo;
    readonly field: Scalars['String'];
    readonly fieldValue: Maybe<Scalars['String']>;
  };

  type DataJsonSortInput = {
    readonly fields: Maybe<ReadonlyArray<Maybe<DataJsonFieldsEnum>>>;
    readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
  };

  type DateQueryOperatorInput = {
    readonly eq: Maybe<Scalars['Date']>;
    readonly ne: Maybe<Scalars['Date']>;
    readonly gt: Maybe<Scalars['Date']>;
    readonly gte: Maybe<Scalars['Date']>;
    readonly lt: Maybe<Scalars['Date']>;
    readonly lte: Maybe<Scalars['Date']>;
    readonly in: Maybe<ReadonlyArray<Maybe<Scalars['Date']>>>;
    readonly nin: Maybe<ReadonlyArray<Maybe<Scalars['Date']>>>;
  };

  type Directory = Node & {
    readonly sourceInstanceName: Scalars['String'];
    readonly absolutePath: Scalars['String'];
    readonly relativePath: Scalars['String'];
    readonly extension: Scalars['String'];
    readonly size: Scalars['Int'];
    readonly prettySize: Scalars['String'];
    readonly modifiedTime: Scalars['Date'];
    readonly accessTime: Scalars['Date'];
    readonly changeTime: Scalars['Date'];
    readonly birthTime: Scalars['Date'];
    readonly root: Scalars['String'];
    readonly dir: Scalars['String'];
    readonly base: Scalars['String'];
    readonly ext: Scalars['String'];
    readonly name: Scalars['String'];
    readonly relativeDirectory: Scalars['String'];
    readonly dev: Scalars['Int'];
    readonly mode: Scalars['Int'];
    readonly nlink: Scalars['Int'];
    readonly uid: Scalars['Int'];
    readonly gid: Scalars['Int'];
    readonly rdev: Scalars['Int'];
    readonly ino: Scalars['Float'];
    readonly atimeMs: Scalars['Float'];
    readonly mtimeMs: Scalars['Float'];
    readonly ctimeMs: Scalars['Float'];
    readonly atime: Scalars['Date'];
    readonly mtime: Scalars['Date'];
    readonly ctime: Scalars['Date'];
    /** @deprecated Use `birthTime` instead */
    readonly birthtime: Maybe<Scalars['Date']>;
    /** @deprecated Use `birthTime` instead */
    readonly birthtimeMs: Maybe<Scalars['Float']>;
    readonly blksize: Maybe<Scalars['Int']>;
    readonly blocks: Maybe<Scalars['Int']>;
    readonly id: Scalars['ID'];
    readonly parent: Maybe<Node>;
    readonly children: ReadonlyArray<Node>;
    readonly internal: Internal;
  };

  type Directory_modifiedTimeArgs = {
    formatString: Maybe<Scalars['String']>;
    fromNow: Maybe<Scalars['Boolean']>;
    difference: Maybe<Scalars['String']>;
    locale: Maybe<Scalars['String']>;
  };

  type Directory_accessTimeArgs = {
    formatString: Maybe<Scalars['String']>;
    fromNow: Maybe<Scalars['Boolean']>;
    difference: Maybe<Scalars['String']>;
    locale: Maybe<Scalars['String']>;
  };

  type Directory_changeTimeArgs = {
    formatString: Maybe<Scalars['String']>;
    fromNow: Maybe<Scalars['Boolean']>;
    difference: Maybe<Scalars['String']>;
    locale: Maybe<Scalars['String']>;
  };

  type Directory_birthTimeArgs = {
    formatString: Maybe<Scalars['String']>;
    fromNow: Maybe<Scalars['Boolean']>;
    difference: Maybe<Scalars['String']>;
    locale: Maybe<Scalars['String']>;
  };

  type Directory_atimeArgs = {
    formatString: Maybe<Scalars['String']>;
    fromNow: Maybe<Scalars['Boolean']>;
    difference: Maybe<Scalars['String']>;
    locale: Maybe<Scalars['String']>;
  };

  type Directory_mtimeArgs = {
    formatString: Maybe<Scalars['String']>;
    fromNow: Maybe<Scalars['Boolean']>;
    difference: Maybe<Scalars['String']>;
    locale: Maybe<Scalars['String']>;
  };

  type Directory_ctimeArgs = {
    formatString: Maybe<Scalars['String']>;
    fromNow: Maybe<Scalars['Boolean']>;
    difference: Maybe<Scalars['String']>;
    locale: Maybe<Scalars['String']>;
  };

  type DirectoryConnection = {
    readonly totalCount: Scalars['Int'];
    readonly edges: ReadonlyArray<DirectoryEdge>;
    readonly nodes: ReadonlyArray<Directory>;
    readonly pageInfo: PageInfo;
    readonly distinct: ReadonlyArray<Scalars['String']>;
    readonly group: ReadonlyArray<DirectoryGroupConnection>;
  };

  type DirectoryConnection_distinctArgs = {
    field: DirectoryFieldsEnum;
  };

  type DirectoryConnection_groupArgs = {
    skip: Maybe<Scalars['Int']>;
    limit: Maybe<Scalars['Int']>;
    field: DirectoryFieldsEnum;
  };

  type DirectoryEdge = {
    readonly next: Maybe<Directory>;
    readonly node: Directory;
    readonly previous: Maybe<Directory>;
  };

  enum DirectoryFieldsEnum {
    sourceInstanceName = 'sourceInstanceName',
    absolutePath = 'absolutePath',
    relativePath = 'relativePath',
    extension = 'extension',
    size = 'size',
    prettySize = 'prettySize',
    modifiedTime = 'modifiedTime',
    accessTime = 'accessTime',
    changeTime = 'changeTime',
    birthTime = 'birthTime',
    root = 'root',
    dir = 'dir',
    base = 'base',
    ext = 'ext',
    name = 'name',
    relativeDirectory = 'relativeDirectory',
    dev = 'dev',
    mode = 'mode',
    nlink = 'nlink',
    uid = 'uid',
    gid = 'gid',
    rdev = 'rdev',
    ino = 'ino',
    atimeMs = 'atimeMs',
    mtimeMs = 'mtimeMs',
    ctimeMs = 'ctimeMs',
    atime = 'atime',
    mtime = 'mtime',
    ctime = 'ctime',
    birthtime = 'birthtime',
    birthtimeMs = 'birthtimeMs',
    blksize = 'blksize',
    blocks = 'blocks',
    id = 'id',
    parent___id = 'parent.id',
    parent___parent___id = 'parent.parent.id',
    parent___parent___parent___id = 'parent.parent.parent.id',
    parent___parent___parent___children = 'parent.parent.parent.children',
    parent___parent___children = 'parent.parent.children',
    parent___parent___children___id = 'parent.parent.children.id',
    parent___parent___children___children = 'parent.parent.children.children',
    parent___parent___internal___content = 'parent.parent.internal.content',
    parent___parent___internal___contentDigest = 'parent.parent.internal.contentDigest',
    parent___parent___internal___description = 'parent.parent.internal.description',
    parent___parent___internal___fieldOwners = 'parent.parent.internal.fieldOwners',
    parent___parent___internal___ignoreType = 'parent.parent.internal.ignoreType',
    parent___parent___internal___mediaType = 'parent.parent.internal.mediaType',
    parent___parent___internal___owner = 'parent.parent.internal.owner',
    parent___parent___internal___type = 'parent.parent.internal.type',
    parent___children = 'parent.children',
    parent___children___id = 'parent.children.id',
    parent___children___parent___id = 'parent.children.parent.id',
    parent___children___parent___children = 'parent.children.parent.children',
    parent___children___children = 'parent.children.children',
    parent___children___children___id = 'parent.children.children.id',
    parent___children___children___children = 'parent.children.children.children',
    parent___children___internal___content = 'parent.children.internal.content',
    parent___children___internal___contentDigest = 'parent.children.internal.contentDigest',
    parent___children___internal___description = 'parent.children.internal.description',
    parent___children___internal___fieldOwners = 'parent.children.internal.fieldOwners',
    parent___children___internal___ignoreType = 'parent.children.internal.ignoreType',
    parent___children___internal___mediaType = 'parent.children.internal.mediaType',
    parent___children___internal___owner = 'parent.children.internal.owner',
    parent___children___internal___type = 'parent.children.internal.type',
    parent___internal___content = 'parent.internal.content',
    parent___internal___contentDigest = 'parent.internal.contentDigest',
    parent___internal___description = 'parent.internal.description',
    parent___internal___fieldOwners = 'parent.internal.fieldOwners',
    parent___internal___ignoreType = 'parent.internal.ignoreType',
    parent___internal___mediaType = 'parent.internal.mediaType',
    parent___internal___owner = 'parent.internal.owner',
    parent___internal___type = 'parent.internal.type',
    children = 'children',
    children___id = 'children.id',
    children___parent___id = 'children.parent.id',
    children___parent___parent___id = 'children.parent.parent.id',
    children___parent___parent___children = 'children.parent.parent.children',
    children___parent___children = 'children.parent.children',
    children___parent___children___id = 'children.parent.children.id',
    children___parent___children___children = 'children.parent.children.children',
    children___parent___internal___content = 'children.parent.internal.content',
    children___parent___internal___contentDigest = 'children.parent.internal.contentDigest',
    children___parent___internal___description = 'children.parent.internal.description',
    children___parent___internal___fieldOwners = 'children.parent.internal.fieldOwners',
    children___parent___internal___ignoreType = 'children.parent.internal.ignoreType',
    children___parent___internal___mediaType = 'children.parent.internal.mediaType',
    children___parent___internal___owner = 'children.parent.internal.owner',
    children___parent___internal___type = 'children.parent.internal.type',
    children___children = 'children.children',
    children___children___id = 'children.children.id',
    children___children___parent___id = 'children.children.parent.id',
    children___children___parent___children = 'children.children.parent.children',
    children___children___children = 'children.children.children',
    children___children___children___id = 'children.children.children.id',
    children___children___children___children = 'children.children.children.children',
    children___children___internal___content = 'children.children.internal.content',
    children___children___internal___contentDigest = 'children.children.internal.contentDigest',
    children___children___internal___description = 'children.children.internal.description',
    children___children___internal___fieldOwners = 'children.children.internal.fieldOwners',
    children___children___internal___ignoreType = 'children.children.internal.ignoreType',
    children___children___internal___mediaType = 'children.children.internal.mediaType',
    children___children___internal___owner = 'children.children.internal.owner',
    children___children___internal___type = 'children.children.internal.type',
    children___internal___content = 'children.internal.content',
    children___internal___contentDigest = 'children.internal.contentDigest',
    children___internal___description = 'children.internal.description',
    children___internal___fieldOwners = 'children.internal.fieldOwners',
    children___internal___ignoreType = 'children.internal.ignoreType',
    children___internal___mediaType = 'children.internal.mediaType',
    children___internal___owner = 'children.internal.owner',
    children___internal___type = 'children.internal.type',
    internal___content = 'internal.content',
    internal___contentDigest = 'internal.contentDigest',
    internal___description = 'internal.description',
    internal___fieldOwners = 'internal.fieldOwners',
    internal___ignoreType = 'internal.ignoreType',
    internal___mediaType = 'internal.mediaType',
    internal___owner = 'internal.owner',
    internal___type = 'internal.type',
  }

  type DirectoryFilterInput = {
    readonly sourceInstanceName: Maybe<StringQueryOperatorInput>;
    readonly absolutePath: Maybe<StringQueryOperatorInput>;
    readonly relativePath: Maybe<StringQueryOperatorInput>;
    readonly extension: Maybe<StringQueryOperatorInput>;
    readonly size: Maybe<IntQueryOperatorInput>;
    readonly prettySize: Maybe<StringQueryOperatorInput>;
    readonly modifiedTime: Maybe<DateQueryOperatorInput>;
    readonly accessTime: Maybe<DateQueryOperatorInput>;
    readonly changeTime: Maybe<DateQueryOperatorInput>;
    readonly birthTime: Maybe<DateQueryOperatorInput>;
    readonly root: Maybe<StringQueryOperatorInput>;
    readonly dir: Maybe<StringQueryOperatorInput>;
    readonly base: Maybe<StringQueryOperatorInput>;
    readonly ext: Maybe<StringQueryOperatorInput>;
    readonly name: Maybe<StringQueryOperatorInput>;
    readonly relativeDirectory: Maybe<StringQueryOperatorInput>;
    readonly dev: Maybe<IntQueryOperatorInput>;
    readonly mode: Maybe<IntQueryOperatorInput>;
    readonly nlink: Maybe<IntQueryOperatorInput>;
    readonly uid: Maybe<IntQueryOperatorInput>;
    readonly gid: Maybe<IntQueryOperatorInput>;
    readonly rdev: Maybe<IntQueryOperatorInput>;
    readonly ino: Maybe<FloatQueryOperatorInput>;
    readonly atimeMs: Maybe<FloatQueryOperatorInput>;
    readonly mtimeMs: Maybe<FloatQueryOperatorInput>;
    readonly ctimeMs: Maybe<FloatQueryOperatorInput>;
    readonly atime: Maybe<DateQueryOperatorInput>;
    readonly mtime: Maybe<DateQueryOperatorInput>;
    readonly ctime: Maybe<DateQueryOperatorInput>;
    readonly birthtime: Maybe<DateQueryOperatorInput>;
    readonly birthtimeMs: Maybe<FloatQueryOperatorInput>;
    readonly blksize: Maybe<IntQueryOperatorInput>;
    readonly blocks: Maybe<IntQueryOperatorInput>;
    readonly id: Maybe<StringQueryOperatorInput>;
    readonly parent: Maybe<NodeFilterInput>;
    readonly children: Maybe<NodeFilterListInput>;
    readonly internal: Maybe<InternalFilterInput>;
  };

  type DirectoryGroupConnection = {
    readonly totalCount: Scalars['Int'];
    readonly edges: ReadonlyArray<DirectoryEdge>;
    readonly nodes: ReadonlyArray<Directory>;
    readonly pageInfo: PageInfo;
    readonly field: Scalars['String'];
    readonly fieldValue: Maybe<Scalars['String']>;
  };

  type DirectorySortInput = {
    readonly fields: Maybe<ReadonlyArray<Maybe<DirectoryFieldsEnum>>>;
    readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
  };

  type DuotoneGradient = {
    readonly highlight: Scalars['String'];
    readonly shadow: Scalars['String'];
    readonly opacity: Maybe<Scalars['Int']>;
  };

  type File = Node & {
    readonly sourceInstanceName: Scalars['String'];
    readonly absolutePath: Scalars['String'];
    readonly relativePath: Scalars['String'];
    readonly extension: Scalars['String'];
    readonly size: Scalars['Int'];
    readonly prettySize: Scalars['String'];
    readonly modifiedTime: Scalars['Date'];
    readonly accessTime: Scalars['Date'];
    readonly changeTime: Scalars['Date'];
    readonly birthTime: Scalars['Date'];
    readonly root: Scalars['String'];
    readonly dir: Scalars['String'];
    readonly base: Scalars['String'];
    readonly ext: Scalars['String'];
    readonly name: Scalars['String'];
    readonly relativeDirectory: Scalars['String'];
    readonly dev: Scalars['Int'];
    readonly mode: Scalars['Int'];
    readonly nlink: Scalars['Int'];
    readonly uid: Scalars['Int'];
    readonly gid: Scalars['Int'];
    readonly rdev: Scalars['Int'];
    readonly ino: Scalars['Float'];
    readonly atimeMs: Scalars['Float'];
    readonly mtimeMs: Scalars['Float'];
    readonly ctimeMs: Scalars['Float'];
    readonly atime: Scalars['Date'];
    readonly mtime: Scalars['Date'];
    readonly ctime: Scalars['Date'];
    /** @deprecated Use `birthTime` instead */
    readonly birthtime: Maybe<Scalars['Date']>;
    /** @deprecated Use `birthTime` instead */
    readonly birthtimeMs: Maybe<Scalars['Float']>;
    readonly blksize: Maybe<Scalars['Int']>;
    readonly blocks: Maybe<Scalars['Int']>;
    readonly url: Maybe<Scalars['String']>;
    /** Copy file to static directory and return public url to it */
    readonly publicURL: Maybe<Scalars['String']>;
    readonly childImageSharp: Maybe<ImageSharp>;
    readonly id: Scalars['ID'];
    readonly parent: Maybe<Node>;
    readonly children: ReadonlyArray<Node>;
    readonly internal: Internal;
    readonly childDataJson: Maybe<DataJson>;
    readonly childMdx: Maybe<Mdx>;
  };

  type File_modifiedTimeArgs = {
    formatString: Maybe<Scalars['String']>;
    fromNow: Maybe<Scalars['Boolean']>;
    difference: Maybe<Scalars['String']>;
    locale: Maybe<Scalars['String']>;
  };

  type File_accessTimeArgs = {
    formatString: Maybe<Scalars['String']>;
    fromNow: Maybe<Scalars['Boolean']>;
    difference: Maybe<Scalars['String']>;
    locale: Maybe<Scalars['String']>;
  };

  type File_changeTimeArgs = {
    formatString: Maybe<Scalars['String']>;
    fromNow: Maybe<Scalars['Boolean']>;
    difference: Maybe<Scalars['String']>;
    locale: Maybe<Scalars['String']>;
  };

  type File_birthTimeArgs = {
    formatString: Maybe<Scalars['String']>;
    fromNow: Maybe<Scalars['Boolean']>;
    difference: Maybe<Scalars['String']>;
    locale: Maybe<Scalars['String']>;
  };

  type File_atimeArgs = {
    formatString: Maybe<Scalars['String']>;
    fromNow: Maybe<Scalars['Boolean']>;
    difference: Maybe<Scalars['String']>;
    locale: Maybe<Scalars['String']>;
  };

  type File_mtimeArgs = {
    formatString: Maybe<Scalars['String']>;
    fromNow: Maybe<Scalars['Boolean']>;
    difference: Maybe<Scalars['String']>;
    locale: Maybe<Scalars['String']>;
  };

  type File_ctimeArgs = {
    formatString: Maybe<Scalars['String']>;
    fromNow: Maybe<Scalars['Boolean']>;
    difference: Maybe<Scalars['String']>;
    locale: Maybe<Scalars['String']>;
  };

  type FileConnection = {
    readonly totalCount: Scalars['Int'];
    readonly edges: ReadonlyArray<FileEdge>;
    readonly nodes: ReadonlyArray<File>;
    readonly pageInfo: PageInfo;
    readonly distinct: ReadonlyArray<Scalars['String']>;
    readonly group: ReadonlyArray<FileGroupConnection>;
  };

  type FileConnection_distinctArgs = {
    field: FileFieldsEnum;
  };

  type FileConnection_groupArgs = {
    skip: Maybe<Scalars['Int']>;
    limit: Maybe<Scalars['Int']>;
    field: FileFieldsEnum;
  };

  type FileEdge = {
    readonly next: Maybe<File>;
    readonly node: File;
    readonly previous: Maybe<File>;
  };

  enum FileFieldsEnum {
    sourceInstanceName = 'sourceInstanceName',
    absolutePath = 'absolutePath',
    relativePath = 'relativePath',
    extension = 'extension',
    size = 'size',
    prettySize = 'prettySize',
    modifiedTime = 'modifiedTime',
    accessTime = 'accessTime',
    changeTime = 'changeTime',
    birthTime = 'birthTime',
    root = 'root',
    dir = 'dir',
    base = 'base',
    ext = 'ext',
    name = 'name',
    relativeDirectory = 'relativeDirectory',
    dev = 'dev',
    mode = 'mode',
    nlink = 'nlink',
    uid = 'uid',
    gid = 'gid',
    rdev = 'rdev',
    ino = 'ino',
    atimeMs = 'atimeMs',
    mtimeMs = 'mtimeMs',
    ctimeMs = 'ctimeMs',
    atime = 'atime',
    mtime = 'mtime',
    ctime = 'ctime',
    birthtime = 'birthtime',
    birthtimeMs = 'birthtimeMs',
    blksize = 'blksize',
    blocks = 'blocks',
    url = 'url',
    publicURL = 'publicURL',
    childImageSharp___fixed___base64 = 'childImageSharp.fixed.base64',
    childImageSharp___fixed___tracedSVG = 'childImageSharp.fixed.tracedSVG',
    childImageSharp___fixed___aspectRatio = 'childImageSharp.fixed.aspectRatio',
    childImageSharp___fixed___width = 'childImageSharp.fixed.width',
    childImageSharp___fixed___height = 'childImageSharp.fixed.height',
    childImageSharp___fixed___src = 'childImageSharp.fixed.src',
    childImageSharp___fixed___srcSet = 'childImageSharp.fixed.srcSet',
    childImageSharp___fixed___srcWebp = 'childImageSharp.fixed.srcWebp',
    childImageSharp___fixed___srcSetWebp = 'childImageSharp.fixed.srcSetWebp',
    childImageSharp___fixed___originalName = 'childImageSharp.fixed.originalName',
    childImageSharp___resolutions___base64 = 'childImageSharp.resolutions.base64',
    childImageSharp___resolutions___tracedSVG = 'childImageSharp.resolutions.tracedSVG',
    childImageSharp___resolutions___aspectRatio = 'childImageSharp.resolutions.aspectRatio',
    childImageSharp___resolutions___width = 'childImageSharp.resolutions.width',
    childImageSharp___resolutions___height = 'childImageSharp.resolutions.height',
    childImageSharp___resolutions___src = 'childImageSharp.resolutions.src',
    childImageSharp___resolutions___srcSet = 'childImageSharp.resolutions.srcSet',
    childImageSharp___resolutions___srcWebp = 'childImageSharp.resolutions.srcWebp',
    childImageSharp___resolutions___srcSetWebp = 'childImageSharp.resolutions.srcSetWebp',
    childImageSharp___resolutions___originalName = 'childImageSharp.resolutions.originalName',
    childImageSharp___fluid___base64 = 'childImageSharp.fluid.base64',
    childImageSharp___fluid___tracedSVG = 'childImageSharp.fluid.tracedSVG',
    childImageSharp___fluid___aspectRatio = 'childImageSharp.fluid.aspectRatio',
    childImageSharp___fluid___src = 'childImageSharp.fluid.src',
    childImageSharp___fluid___srcSet = 'childImageSharp.fluid.srcSet',
    childImageSharp___fluid___srcWebp = 'childImageSharp.fluid.srcWebp',
    childImageSharp___fluid___srcSetWebp = 'childImageSharp.fluid.srcSetWebp',
    childImageSharp___fluid___sizes = 'childImageSharp.fluid.sizes',
    childImageSharp___fluid___originalImg = 'childImageSharp.fluid.originalImg',
    childImageSharp___fluid___originalName = 'childImageSharp.fluid.originalName',
    childImageSharp___fluid___presentationWidth = 'childImageSharp.fluid.presentationWidth',
    childImageSharp___fluid___presentationHeight = 'childImageSharp.fluid.presentationHeight',
    childImageSharp___sizes___base64 = 'childImageSharp.sizes.base64',
    childImageSharp___sizes___tracedSVG = 'childImageSharp.sizes.tracedSVG',
    childImageSharp___sizes___aspectRatio = 'childImageSharp.sizes.aspectRatio',
    childImageSharp___sizes___src = 'childImageSharp.sizes.src',
    childImageSharp___sizes___srcSet = 'childImageSharp.sizes.srcSet',
    childImageSharp___sizes___srcWebp = 'childImageSharp.sizes.srcWebp',
    childImageSharp___sizes___srcSetWebp = 'childImageSharp.sizes.srcSetWebp',
    childImageSharp___sizes___sizes = 'childImageSharp.sizes.sizes',
    childImageSharp___sizes___originalImg = 'childImageSharp.sizes.originalImg',
    childImageSharp___sizes___originalName = 'childImageSharp.sizes.originalName',
    childImageSharp___sizes___presentationWidth = 'childImageSharp.sizes.presentationWidth',
    childImageSharp___sizes___presentationHeight = 'childImageSharp.sizes.presentationHeight',
    childImageSharp___gatsbyImageData = 'childImageSharp.gatsbyImageData',
    childImageSharp___original___width = 'childImageSharp.original.width',
    childImageSharp___original___height = 'childImageSharp.original.height',
    childImageSharp___original___src = 'childImageSharp.original.src',
    childImageSharp___resize___src = 'childImageSharp.resize.src',
    childImageSharp___resize___tracedSVG = 'childImageSharp.resize.tracedSVG',
    childImageSharp___resize___width = 'childImageSharp.resize.width',
    childImageSharp___resize___height = 'childImageSharp.resize.height',
    childImageSharp___resize___aspectRatio = 'childImageSharp.resize.aspectRatio',
    childImageSharp___resize___originalName = 'childImageSharp.resize.originalName',
    childImageSharp___id = 'childImageSharp.id',
    childImageSharp___parent___id = 'childImageSharp.parent.id',
    childImageSharp___parent___parent___id = 'childImageSharp.parent.parent.id',
    childImageSharp___parent___parent___children = 'childImageSharp.parent.parent.children',
    childImageSharp___parent___children = 'childImageSharp.parent.children',
    childImageSharp___parent___children___id = 'childImageSharp.parent.children.id',
    childImageSharp___parent___children___children = 'childImageSharp.parent.children.children',
    childImageSharp___parent___internal___content = 'childImageSharp.parent.internal.content',
    childImageSharp___parent___internal___contentDigest = 'childImageSharp.parent.internal.contentDigest',
    childImageSharp___parent___internal___description = 'childImageSharp.parent.internal.description',
    childImageSharp___parent___internal___fieldOwners = 'childImageSharp.parent.internal.fieldOwners',
    childImageSharp___parent___internal___ignoreType = 'childImageSharp.parent.internal.ignoreType',
    childImageSharp___parent___internal___mediaType = 'childImageSharp.parent.internal.mediaType',
    childImageSharp___parent___internal___owner = 'childImageSharp.parent.internal.owner',
    childImageSharp___parent___internal___type = 'childImageSharp.parent.internal.type',
    childImageSharp___children = 'childImageSharp.children',
    childImageSharp___children___id = 'childImageSharp.children.id',
    childImageSharp___children___parent___id = 'childImageSharp.children.parent.id',
    childImageSharp___children___parent___children = 'childImageSharp.children.parent.children',
    childImageSharp___children___children = 'childImageSharp.children.children',
    childImageSharp___children___children___id = 'childImageSharp.children.children.id',
    childImageSharp___children___children___children = 'childImageSharp.children.children.children',
    childImageSharp___children___internal___content = 'childImageSharp.children.internal.content',
    childImageSharp___children___internal___contentDigest = 'childImageSharp.children.internal.contentDigest',
    childImageSharp___children___internal___description = 'childImageSharp.children.internal.description',
    childImageSharp___children___internal___fieldOwners = 'childImageSharp.children.internal.fieldOwners',
    childImageSharp___children___internal___ignoreType = 'childImageSharp.children.internal.ignoreType',
    childImageSharp___children___internal___mediaType = 'childImageSharp.children.internal.mediaType',
    childImageSharp___children___internal___owner = 'childImageSharp.children.internal.owner',
    childImageSharp___children___internal___type = 'childImageSharp.children.internal.type',
    childImageSharp___internal___content = 'childImageSharp.internal.content',
    childImageSharp___internal___contentDigest = 'childImageSharp.internal.contentDigest',
    childImageSharp___internal___description = 'childImageSharp.internal.description',
    childImageSharp___internal___fieldOwners = 'childImageSharp.internal.fieldOwners',
    childImageSharp___internal___ignoreType = 'childImageSharp.internal.ignoreType',
    childImageSharp___internal___mediaType = 'childImageSharp.internal.mediaType',
    childImageSharp___internal___owner = 'childImageSharp.internal.owner',
    childImageSharp___internal___type = 'childImageSharp.internal.type',
    id = 'id',
    parent___id = 'parent.id',
    parent___parent___id = 'parent.parent.id',
    parent___parent___parent___id = 'parent.parent.parent.id',
    parent___parent___parent___children = 'parent.parent.parent.children',
    parent___parent___children = 'parent.parent.children',
    parent___parent___children___id = 'parent.parent.children.id',
    parent___parent___children___children = 'parent.parent.children.children',
    parent___parent___internal___content = 'parent.parent.internal.content',
    parent___parent___internal___contentDigest = 'parent.parent.internal.contentDigest',
    parent___parent___internal___description = 'parent.parent.internal.description',
    parent___parent___internal___fieldOwners = 'parent.parent.internal.fieldOwners',
    parent___parent___internal___ignoreType = 'parent.parent.internal.ignoreType',
    parent___parent___internal___mediaType = 'parent.parent.internal.mediaType',
    parent___parent___internal___owner = 'parent.parent.internal.owner',
    parent___parent___internal___type = 'parent.parent.internal.type',
    parent___children = 'parent.children',
    parent___children___id = 'parent.children.id',
    parent___children___parent___id = 'parent.children.parent.id',
    parent___children___parent___children = 'parent.children.parent.children',
    parent___children___children = 'parent.children.children',
    parent___children___children___id = 'parent.children.children.id',
    parent___children___children___children = 'parent.children.children.children',
    parent___children___internal___content = 'parent.children.internal.content',
    parent___children___internal___contentDigest = 'parent.children.internal.contentDigest',
    parent___children___internal___description = 'parent.children.internal.description',
    parent___children___internal___fieldOwners = 'parent.children.internal.fieldOwners',
    parent___children___internal___ignoreType = 'parent.children.internal.ignoreType',
    parent___children___internal___mediaType = 'parent.children.internal.mediaType',
    parent___children___internal___owner = 'parent.children.internal.owner',
    parent___children___internal___type = 'parent.children.internal.type',
    parent___internal___content = 'parent.internal.content',
    parent___internal___contentDigest = 'parent.internal.contentDigest',
    parent___internal___description = 'parent.internal.description',
    parent___internal___fieldOwners = 'parent.internal.fieldOwners',
    parent___internal___ignoreType = 'parent.internal.ignoreType',
    parent___internal___mediaType = 'parent.internal.mediaType',
    parent___internal___owner = 'parent.internal.owner',
    parent___internal___type = 'parent.internal.type',
    children = 'children',
    children___id = 'children.id',
    children___parent___id = 'children.parent.id',
    children___parent___parent___id = 'children.parent.parent.id',
    children___parent___parent___children = 'children.parent.parent.children',
    children___parent___children = 'children.parent.children',
    children___parent___children___id = 'children.parent.children.id',
    children___parent___children___children = 'children.parent.children.children',
    children___parent___internal___content = 'children.parent.internal.content',
    children___parent___internal___contentDigest = 'children.parent.internal.contentDigest',
    children___parent___internal___description = 'children.parent.internal.description',
    children___parent___internal___fieldOwners = 'children.parent.internal.fieldOwners',
    children___parent___internal___ignoreType = 'children.parent.internal.ignoreType',
    children___parent___internal___mediaType = 'children.parent.internal.mediaType',
    children___parent___internal___owner = 'children.parent.internal.owner',
    children___parent___internal___type = 'children.parent.internal.type',
    children___children = 'children.children',
    children___children___id = 'children.children.id',
    children___children___parent___id = 'children.children.parent.id',
    children___children___parent___children = 'children.children.parent.children',
    children___children___children = 'children.children.children',
    children___children___children___id = 'children.children.children.id',
    children___children___children___children = 'children.children.children.children',
    children___children___internal___content = 'children.children.internal.content',
    children___children___internal___contentDigest = 'children.children.internal.contentDigest',
    children___children___internal___description = 'children.children.internal.description',
    children___children___internal___fieldOwners = 'children.children.internal.fieldOwners',
    children___children___internal___ignoreType = 'children.children.internal.ignoreType',
    children___children___internal___mediaType = 'children.children.internal.mediaType',
    children___children___internal___owner = 'children.children.internal.owner',
    children___children___internal___type = 'children.children.internal.type',
    children___internal___content = 'children.internal.content',
    children___internal___contentDigest = 'children.internal.contentDigest',
    children___internal___description = 'children.internal.description',
    children___internal___fieldOwners = 'children.internal.fieldOwners',
    children___internal___ignoreType = 'children.internal.ignoreType',
    children___internal___mediaType = 'children.internal.mediaType',
    children___internal___owner = 'children.internal.owner',
    children___internal___type = 'children.internal.type',
    internal___content = 'internal.content',
    internal___contentDigest = 'internal.contentDigest',
    internal___description = 'internal.description',
    internal___fieldOwners = 'internal.fieldOwners',
    internal___ignoreType = 'internal.ignoreType',
    internal___mediaType = 'internal.mediaType',
    internal___owner = 'internal.owner',
    internal___type = 'internal.type',
    childDataJson___id = 'childDataJson.id',
    childDataJson___parent___id = 'childDataJson.parent.id',
    childDataJson___parent___parent___id = 'childDataJson.parent.parent.id',
    childDataJson___parent___parent___children = 'childDataJson.parent.parent.children',
    childDataJson___parent___children = 'childDataJson.parent.children',
    childDataJson___parent___children___id = 'childDataJson.parent.children.id',
    childDataJson___parent___children___children = 'childDataJson.parent.children.children',
    childDataJson___parent___internal___content = 'childDataJson.parent.internal.content',
    childDataJson___parent___internal___contentDigest = 'childDataJson.parent.internal.contentDigest',
    childDataJson___parent___internal___description = 'childDataJson.parent.internal.description',
    childDataJson___parent___internal___fieldOwners = 'childDataJson.parent.internal.fieldOwners',
    childDataJson___parent___internal___ignoreType = 'childDataJson.parent.internal.ignoreType',
    childDataJson___parent___internal___mediaType = 'childDataJson.parent.internal.mediaType',
    childDataJson___parent___internal___owner = 'childDataJson.parent.internal.owner',
    childDataJson___parent___internal___type = 'childDataJson.parent.internal.type',
    childDataJson___children = 'childDataJson.children',
    childDataJson___children___id = 'childDataJson.children.id',
    childDataJson___children___parent___id = 'childDataJson.children.parent.id',
    childDataJson___children___parent___children = 'childDataJson.children.parent.children',
    childDataJson___children___children = 'childDataJson.children.children',
    childDataJson___children___children___id = 'childDataJson.children.children.id',
    childDataJson___children___children___children = 'childDataJson.children.children.children',
    childDataJson___children___internal___content = 'childDataJson.children.internal.content',
    childDataJson___children___internal___contentDigest = 'childDataJson.children.internal.contentDigest',
    childDataJson___children___internal___description = 'childDataJson.children.internal.description',
    childDataJson___children___internal___fieldOwners = 'childDataJson.children.internal.fieldOwners',
    childDataJson___children___internal___ignoreType = 'childDataJson.children.internal.ignoreType',
    childDataJson___children___internal___mediaType = 'childDataJson.children.internal.mediaType',
    childDataJson___children___internal___owner = 'childDataJson.children.internal.owner',
    childDataJson___children___internal___type = 'childDataJson.children.internal.type',
    childDataJson___internal___content = 'childDataJson.internal.content',
    childDataJson___internal___contentDigest = 'childDataJson.internal.contentDigest',
    childDataJson___internal___description = 'childDataJson.internal.description',
    childDataJson___internal___fieldOwners = 'childDataJson.internal.fieldOwners',
    childDataJson___internal___ignoreType = 'childDataJson.internal.ignoreType',
    childDataJson___internal___mediaType = 'childDataJson.internal.mediaType',
    childDataJson___internal___owner = 'childDataJson.internal.owner',
    childDataJson___internal___type = 'childDataJson.internal.type',
    childDataJson___content = 'childDataJson.content',
    childDataJson___content___title = 'childDataJson.content.title',
    childDataJson___content___image___sourceInstanceName = 'childDataJson.content.image.sourceInstanceName',
    childDataJson___content___image___absolutePath = 'childDataJson.content.image.absolutePath',
    childDataJson___content___image___relativePath = 'childDataJson.content.image.relativePath',
    childDataJson___content___image___extension = 'childDataJson.content.image.extension',
    childDataJson___content___image___size = 'childDataJson.content.image.size',
    childDataJson___content___image___prettySize = 'childDataJson.content.image.prettySize',
    childDataJson___content___image___modifiedTime = 'childDataJson.content.image.modifiedTime',
    childDataJson___content___image___accessTime = 'childDataJson.content.image.accessTime',
    childDataJson___content___image___changeTime = 'childDataJson.content.image.changeTime',
    childDataJson___content___image___birthTime = 'childDataJson.content.image.birthTime',
    childDataJson___content___image___root = 'childDataJson.content.image.root',
    childDataJson___content___image___dir = 'childDataJson.content.image.dir',
    childDataJson___content___image___base = 'childDataJson.content.image.base',
    childDataJson___content___image___ext = 'childDataJson.content.image.ext',
    childDataJson___content___image___name = 'childDataJson.content.image.name',
    childDataJson___content___image___relativeDirectory = 'childDataJson.content.image.relativeDirectory',
    childDataJson___content___image___dev = 'childDataJson.content.image.dev',
    childDataJson___content___image___mode = 'childDataJson.content.image.mode',
    childDataJson___content___image___nlink = 'childDataJson.content.image.nlink',
    childDataJson___content___image___uid = 'childDataJson.content.image.uid',
    childDataJson___content___image___gid = 'childDataJson.content.image.gid',
    childDataJson___content___image___rdev = 'childDataJson.content.image.rdev',
    childDataJson___content___image___ino = 'childDataJson.content.image.ino',
    childDataJson___content___image___atimeMs = 'childDataJson.content.image.atimeMs',
    childDataJson___content___image___mtimeMs = 'childDataJson.content.image.mtimeMs',
    childDataJson___content___image___ctimeMs = 'childDataJson.content.image.ctimeMs',
    childDataJson___content___image___atime = 'childDataJson.content.image.atime',
    childDataJson___content___image___mtime = 'childDataJson.content.image.mtime',
    childDataJson___content___image___ctime = 'childDataJson.content.image.ctime',
    childDataJson___content___image___birthtime = 'childDataJson.content.image.birthtime',
    childDataJson___content___image___birthtimeMs = 'childDataJson.content.image.birthtimeMs',
    childDataJson___content___image___blksize = 'childDataJson.content.image.blksize',
    childDataJson___content___image___blocks = 'childDataJson.content.image.blocks',
    childDataJson___content___image___url = 'childDataJson.content.image.url',
    childDataJson___content___image___publicURL = 'childDataJson.content.image.publicURL',
    childDataJson___content___image___id = 'childDataJson.content.image.id',
    childDataJson___content___image___children = 'childDataJson.content.image.children',
    childDataJson___content___pdf___sourceInstanceName = 'childDataJson.content.pdf.sourceInstanceName',
    childDataJson___content___pdf___absolutePath = 'childDataJson.content.pdf.absolutePath',
    childDataJson___content___pdf___relativePath = 'childDataJson.content.pdf.relativePath',
    childDataJson___content___pdf___extension = 'childDataJson.content.pdf.extension',
    childDataJson___content___pdf___size = 'childDataJson.content.pdf.size',
    childDataJson___content___pdf___prettySize = 'childDataJson.content.pdf.prettySize',
    childDataJson___content___pdf___modifiedTime = 'childDataJson.content.pdf.modifiedTime',
    childDataJson___content___pdf___accessTime = 'childDataJson.content.pdf.accessTime',
    childDataJson___content___pdf___changeTime = 'childDataJson.content.pdf.changeTime',
    childDataJson___content___pdf___birthTime = 'childDataJson.content.pdf.birthTime',
    childDataJson___content___pdf___root = 'childDataJson.content.pdf.root',
    childDataJson___content___pdf___dir = 'childDataJson.content.pdf.dir',
    childDataJson___content___pdf___base = 'childDataJson.content.pdf.base',
    childDataJson___content___pdf___ext = 'childDataJson.content.pdf.ext',
    childDataJson___content___pdf___name = 'childDataJson.content.pdf.name',
    childDataJson___content___pdf___relativeDirectory = 'childDataJson.content.pdf.relativeDirectory',
    childDataJson___content___pdf___dev = 'childDataJson.content.pdf.dev',
    childDataJson___content___pdf___mode = 'childDataJson.content.pdf.mode',
    childDataJson___content___pdf___nlink = 'childDataJson.content.pdf.nlink',
    childDataJson___content___pdf___uid = 'childDataJson.content.pdf.uid',
    childDataJson___content___pdf___gid = 'childDataJson.content.pdf.gid',
    childDataJson___content___pdf___rdev = 'childDataJson.content.pdf.rdev',
    childDataJson___content___pdf___ino = 'childDataJson.content.pdf.ino',
    childDataJson___content___pdf___atimeMs = 'childDataJson.content.pdf.atimeMs',
    childDataJson___content___pdf___mtimeMs = 'childDataJson.content.pdf.mtimeMs',
    childDataJson___content___pdf___ctimeMs = 'childDataJson.content.pdf.ctimeMs',
    childDataJson___content___pdf___atime = 'childDataJson.content.pdf.atime',
    childDataJson___content___pdf___mtime = 'childDataJson.content.pdf.mtime',
    childDataJson___content___pdf___ctime = 'childDataJson.content.pdf.ctime',
    childDataJson___content___pdf___birthtime = 'childDataJson.content.pdf.birthtime',
    childDataJson___content___pdf___birthtimeMs = 'childDataJson.content.pdf.birthtimeMs',
    childDataJson___content___pdf___blksize = 'childDataJson.content.pdf.blksize',
    childDataJson___content___pdf___blocks = 'childDataJson.content.pdf.blocks',
    childDataJson___content___pdf___url = 'childDataJson.content.pdf.url',
    childDataJson___content___pdf___publicURL = 'childDataJson.content.pdf.publicURL',
    childDataJson___content___pdf___id = 'childDataJson.content.pdf.id',
    childDataJson___content___pdf___children = 'childDataJson.content.pdf.children',
    childDataJson___password = 'childDataJson.password',
    childMdx___rawBody = 'childMdx.rawBody',
    childMdx___fileAbsolutePath = 'childMdx.fileAbsolutePath',
    childMdx___frontmatter___title = 'childMdx.frontmatter.title',
    childMdx___frontmatter___categories = 'childMdx.frontmatter.categories',
    childMdx___frontmatter___date = 'childMdx.frontmatter.date',
    childMdx___frontmatter___coverImage___sourceInstanceName = 'childMdx.frontmatter.coverImage.sourceInstanceName',
    childMdx___frontmatter___coverImage___absolutePath = 'childMdx.frontmatter.coverImage.absolutePath',
    childMdx___frontmatter___coverImage___relativePath = 'childMdx.frontmatter.coverImage.relativePath',
    childMdx___frontmatter___coverImage___extension = 'childMdx.frontmatter.coverImage.extension',
    childMdx___frontmatter___coverImage___size = 'childMdx.frontmatter.coverImage.size',
    childMdx___frontmatter___coverImage___prettySize = 'childMdx.frontmatter.coverImage.prettySize',
    childMdx___frontmatter___coverImage___modifiedTime = 'childMdx.frontmatter.coverImage.modifiedTime',
    childMdx___frontmatter___coverImage___accessTime = 'childMdx.frontmatter.coverImage.accessTime',
    childMdx___frontmatter___coverImage___changeTime = 'childMdx.frontmatter.coverImage.changeTime',
    childMdx___frontmatter___coverImage___birthTime = 'childMdx.frontmatter.coverImage.birthTime',
    childMdx___frontmatter___coverImage___root = 'childMdx.frontmatter.coverImage.root',
    childMdx___frontmatter___coverImage___dir = 'childMdx.frontmatter.coverImage.dir',
    childMdx___frontmatter___coverImage___base = 'childMdx.frontmatter.coverImage.base',
    childMdx___frontmatter___coverImage___ext = 'childMdx.frontmatter.coverImage.ext',
    childMdx___frontmatter___coverImage___name = 'childMdx.frontmatter.coverImage.name',
    childMdx___frontmatter___coverImage___relativeDirectory = 'childMdx.frontmatter.coverImage.relativeDirectory',
    childMdx___frontmatter___coverImage___dev = 'childMdx.frontmatter.coverImage.dev',
    childMdx___frontmatter___coverImage___mode = 'childMdx.frontmatter.coverImage.mode',
    childMdx___frontmatter___coverImage___nlink = 'childMdx.frontmatter.coverImage.nlink',
    childMdx___frontmatter___coverImage___uid = 'childMdx.frontmatter.coverImage.uid',
    childMdx___frontmatter___coverImage___gid = 'childMdx.frontmatter.coverImage.gid',
    childMdx___frontmatter___coverImage___rdev = 'childMdx.frontmatter.coverImage.rdev',
    childMdx___frontmatter___coverImage___ino = 'childMdx.frontmatter.coverImage.ino',
    childMdx___frontmatter___coverImage___atimeMs = 'childMdx.frontmatter.coverImage.atimeMs',
    childMdx___frontmatter___coverImage___mtimeMs = 'childMdx.frontmatter.coverImage.mtimeMs',
    childMdx___frontmatter___coverImage___ctimeMs = 'childMdx.frontmatter.coverImage.ctimeMs',
    childMdx___frontmatter___coverImage___atime = 'childMdx.frontmatter.coverImage.atime',
    childMdx___frontmatter___coverImage___mtime = 'childMdx.frontmatter.coverImage.mtime',
    childMdx___frontmatter___coverImage___ctime = 'childMdx.frontmatter.coverImage.ctime',
    childMdx___frontmatter___coverImage___birthtime = 'childMdx.frontmatter.coverImage.birthtime',
    childMdx___frontmatter___coverImage___birthtimeMs = 'childMdx.frontmatter.coverImage.birthtimeMs',
    childMdx___frontmatter___coverImage___blksize = 'childMdx.frontmatter.coverImage.blksize',
    childMdx___frontmatter___coverImage___blocks = 'childMdx.frontmatter.coverImage.blocks',
    childMdx___frontmatter___coverImage___url = 'childMdx.frontmatter.coverImage.url',
    childMdx___frontmatter___coverImage___publicURL = 'childMdx.frontmatter.coverImage.publicURL',
    childMdx___frontmatter___coverImage___id = 'childMdx.frontmatter.coverImage.id',
    childMdx___frontmatter___coverImage___children = 'childMdx.frontmatter.coverImage.children',
    childMdx___frontmatter___bottomGallery = 'childMdx.frontmatter.bottomGallery',
    childMdx___frontmatter___bottomGallery___blogName = 'childMdx.frontmatter.bottomGallery.blogName',
    childMdx___slug = 'childMdx.slug',
    childMdx___body = 'childMdx.body',
    childMdx___excerpt = 'childMdx.excerpt',
    childMdx___headings = 'childMdx.headings',
    childMdx___headings___value = 'childMdx.headings.value',
    childMdx___headings___depth = 'childMdx.headings.depth',
    childMdx___html = 'childMdx.html',
    childMdx___mdxAST = 'childMdx.mdxAST',
    childMdx___tableOfContents = 'childMdx.tableOfContents',
    childMdx___timeToRead = 'childMdx.timeToRead',
    childMdx___wordCount___paragraphs = 'childMdx.wordCount.paragraphs',
    childMdx___wordCount___sentences = 'childMdx.wordCount.sentences',
    childMdx___wordCount___words = 'childMdx.wordCount.words',
    childMdx___fields___readingTime___text = 'childMdx.fields.readingTime.text',
    childMdx___fields___readingTime___minutes = 'childMdx.fields.readingTime.minutes',
    childMdx___fields___readingTime___time = 'childMdx.fields.readingTime.time',
    childMdx___fields___readingTime___words = 'childMdx.fields.readingTime.words',
    childMdx___fields___slug = 'childMdx.fields.slug',
    childMdx___fields___blogPath = 'childMdx.fields.blogPath',
    childMdx___id = 'childMdx.id',
    childMdx___parent___id = 'childMdx.parent.id',
    childMdx___parent___parent___id = 'childMdx.parent.parent.id',
    childMdx___parent___parent___children = 'childMdx.parent.parent.children',
    childMdx___parent___children = 'childMdx.parent.children',
    childMdx___parent___children___id = 'childMdx.parent.children.id',
    childMdx___parent___children___children = 'childMdx.parent.children.children',
    childMdx___parent___internal___content = 'childMdx.parent.internal.content',
    childMdx___parent___internal___contentDigest = 'childMdx.parent.internal.contentDigest',
    childMdx___parent___internal___description = 'childMdx.parent.internal.description',
    childMdx___parent___internal___fieldOwners = 'childMdx.parent.internal.fieldOwners',
    childMdx___parent___internal___ignoreType = 'childMdx.parent.internal.ignoreType',
    childMdx___parent___internal___mediaType = 'childMdx.parent.internal.mediaType',
    childMdx___parent___internal___owner = 'childMdx.parent.internal.owner',
    childMdx___parent___internal___type = 'childMdx.parent.internal.type',
    childMdx___children = 'childMdx.children',
    childMdx___children___id = 'childMdx.children.id',
    childMdx___children___parent___id = 'childMdx.children.parent.id',
    childMdx___children___parent___children = 'childMdx.children.parent.children',
    childMdx___children___children = 'childMdx.children.children',
    childMdx___children___children___id = 'childMdx.children.children.id',
    childMdx___children___children___children = 'childMdx.children.children.children',
    childMdx___children___internal___content = 'childMdx.children.internal.content',
    childMdx___children___internal___contentDigest = 'childMdx.children.internal.contentDigest',
    childMdx___children___internal___description = 'childMdx.children.internal.description',
    childMdx___children___internal___fieldOwners = 'childMdx.children.internal.fieldOwners',
    childMdx___children___internal___ignoreType = 'childMdx.children.internal.ignoreType',
    childMdx___children___internal___mediaType = 'childMdx.children.internal.mediaType',
    childMdx___children___internal___owner = 'childMdx.children.internal.owner',
    childMdx___children___internal___type = 'childMdx.children.internal.type',
    childMdx___internal___content = 'childMdx.internal.content',
    childMdx___internal___contentDigest = 'childMdx.internal.contentDigest',
    childMdx___internal___description = 'childMdx.internal.description',
    childMdx___internal___fieldOwners = 'childMdx.internal.fieldOwners',
    childMdx___internal___ignoreType = 'childMdx.internal.ignoreType',
    childMdx___internal___mediaType = 'childMdx.internal.mediaType',
    childMdx___internal___owner = 'childMdx.internal.owner',
    childMdx___internal___type = 'childMdx.internal.type',
  }

  type FileFilterInput = {
    readonly sourceInstanceName: Maybe<StringQueryOperatorInput>;
    readonly absolutePath: Maybe<StringQueryOperatorInput>;
    readonly relativePath: Maybe<StringQueryOperatorInput>;
    readonly extension: Maybe<StringQueryOperatorInput>;
    readonly size: Maybe<IntQueryOperatorInput>;
    readonly prettySize: Maybe<StringQueryOperatorInput>;
    readonly modifiedTime: Maybe<DateQueryOperatorInput>;
    readonly accessTime: Maybe<DateQueryOperatorInput>;
    readonly changeTime: Maybe<DateQueryOperatorInput>;
    readonly birthTime: Maybe<DateQueryOperatorInput>;
    readonly root: Maybe<StringQueryOperatorInput>;
    readonly dir: Maybe<StringQueryOperatorInput>;
    readonly base: Maybe<StringQueryOperatorInput>;
    readonly ext: Maybe<StringQueryOperatorInput>;
    readonly name: Maybe<StringQueryOperatorInput>;
    readonly relativeDirectory: Maybe<StringQueryOperatorInput>;
    readonly dev: Maybe<IntQueryOperatorInput>;
    readonly mode: Maybe<IntQueryOperatorInput>;
    readonly nlink: Maybe<IntQueryOperatorInput>;
    readonly uid: Maybe<IntQueryOperatorInput>;
    readonly gid: Maybe<IntQueryOperatorInput>;
    readonly rdev: Maybe<IntQueryOperatorInput>;
    readonly ino: Maybe<FloatQueryOperatorInput>;
    readonly atimeMs: Maybe<FloatQueryOperatorInput>;
    readonly mtimeMs: Maybe<FloatQueryOperatorInput>;
    readonly ctimeMs: Maybe<FloatQueryOperatorInput>;
    readonly atime: Maybe<DateQueryOperatorInput>;
    readonly mtime: Maybe<DateQueryOperatorInput>;
    readonly ctime: Maybe<DateQueryOperatorInput>;
    readonly birthtime: Maybe<DateQueryOperatorInput>;
    readonly birthtimeMs: Maybe<FloatQueryOperatorInput>;
    readonly blksize: Maybe<IntQueryOperatorInput>;
    readonly blocks: Maybe<IntQueryOperatorInput>;
    readonly url: Maybe<StringQueryOperatorInput>;
    readonly publicURL: Maybe<StringQueryOperatorInput>;
    readonly childImageSharp: Maybe<ImageSharpFilterInput>;
    readonly id: Maybe<StringQueryOperatorInput>;
    readonly parent: Maybe<NodeFilterInput>;
    readonly children: Maybe<NodeFilterListInput>;
    readonly internal: Maybe<InternalFilterInput>;
    readonly childDataJson: Maybe<DataJsonFilterInput>;
    readonly childMdx: Maybe<MdxFilterInput>;
  };

  type FileGroupConnection = {
    readonly totalCount: Scalars['Int'];
    readonly edges: ReadonlyArray<FileEdge>;
    readonly nodes: ReadonlyArray<File>;
    readonly pageInfo: PageInfo;
    readonly field: Scalars['String'];
    readonly fieldValue: Maybe<Scalars['String']>;
  };

  type FileSortInput = {
    readonly fields: Maybe<ReadonlyArray<Maybe<FileFieldsEnum>>>;
    readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
  };

  type FloatQueryOperatorInput = {
    readonly eq: Maybe<Scalars['Float']>;
    readonly ne: Maybe<Scalars['Float']>;
    readonly gt: Maybe<Scalars['Float']>;
    readonly gte: Maybe<Scalars['Float']>;
    readonly lt: Maybe<Scalars['Float']>;
    readonly lte: Maybe<Scalars['Float']>;
    readonly in: Maybe<ReadonlyArray<Maybe<Scalars['Float']>>>;
    readonly nin: Maybe<ReadonlyArray<Maybe<Scalars['Float']>>>;
  };

  enum HeadingsMdx {
    h1 = 'h1',
    h2 = 'h2',
    h3 = 'h3',
    h4 = 'h4',
    h5 = 'h5',
    h6 = 'h6',
  }

  enum ImageCropFocus {
    CENTER = 0,
    NORTH = 1,
    NORTHEAST = 5,
    EAST = 2,
    SOUTHEAST = 6,
    SOUTH = 3,
    SOUTHWEST = 7,
    WEST = 4,
    NORTHWEST = 8,
    ENTROPY = 16,
    ATTENTION = 17,
  }

  enum ImageFit {
    COVER = 'cover',
    CONTAIN = 'contain',
    FILL = 'fill',
    INSIDE = 'inside',
    OUTSIDE = 'outside',
  }

  enum ImageFormat {
    NO_CHANGE = '',
    AUTO = '',
    JPG = 'jpg',
    PNG = 'png',
    WEBP = 'webp',
  }

  enum ImageLayout {
    FIXED = 'fixed',
    FLUID = 'fluid',
    CONSTRAINED = 'constrained',
  }

  enum ImagePlaceholder {
    DOMINANT_COLOR = 'dominantColor',
    TRACED_SVG = 'tracedSVG',
    BLURRED = 'blurred',
    NONE = 'none',
  }

  type ImageSharp = Node & {
    readonly fixed: Maybe<ImageSharpFixed>;
    /** @deprecated Resolutions was deprecated in Gatsby v2. It's been renamed to "fixed" https://example.com/write-docs-and-fix-this-example-link */
    readonly resolutions: Maybe<ImageSharpResolutions>;
    readonly fluid: Maybe<ImageSharpFluid>;
    /** @deprecated Sizes was deprecated in Gatsby v2. It's been renamed to "fluid" https://example.com/write-docs-and-fix-this-example-link */
    readonly sizes: Maybe<ImageSharpSizes>;
    readonly gatsbyImageData: Scalars['JSON'];
    readonly original: Maybe<ImageSharpOriginal>;
    readonly resize: Maybe<ImageSharpResize>;
    readonly id: Scalars['ID'];
    readonly parent: Maybe<Node>;
    readonly children: ReadonlyArray<Node>;
    readonly internal: Internal;
  };

  type ImageSharp_fixedArgs = {
    width: Maybe<Scalars['Int']>;
    height: Maybe<Scalars['Int']>;
    base64Width: Maybe<Scalars['Int']>;
    jpegProgressive?: Maybe<Scalars['Boolean']>;
    pngCompressionSpeed?: Maybe<Scalars['Int']>;
    grayscale?: Maybe<Scalars['Boolean']>;
    duotone: Maybe<DuotoneGradient>;
    traceSVG: Maybe<Potrace>;
    quality: Maybe<Scalars['Int']>;
    jpegQuality: Maybe<Scalars['Int']>;
    pngQuality: Maybe<Scalars['Int']>;
    webpQuality: Maybe<Scalars['Int']>;
    toFormat?: Maybe<ImageFormat>;
    toFormatBase64?: Maybe<ImageFormat>;
    cropFocus?: Maybe<ImageCropFocus>;
    fit?: Maybe<ImageFit>;
    background?: Maybe<Scalars['String']>;
    rotate?: Maybe<Scalars['Int']>;
    trim?: Maybe<Scalars['Float']>;
  };

  type ImageSharp_resolutionsArgs = {
    width: Maybe<Scalars['Int']>;
    height: Maybe<Scalars['Int']>;
    base64Width: Maybe<Scalars['Int']>;
    jpegProgressive?: Maybe<Scalars['Boolean']>;
    pngCompressionSpeed?: Maybe<Scalars['Int']>;
    grayscale?: Maybe<Scalars['Boolean']>;
    duotone: Maybe<DuotoneGradient>;
    traceSVG: Maybe<Potrace>;
    quality: Maybe<Scalars['Int']>;
    jpegQuality: Maybe<Scalars['Int']>;
    pngQuality: Maybe<Scalars['Int']>;
    webpQuality: Maybe<Scalars['Int']>;
    toFormat?: Maybe<ImageFormat>;
    toFormatBase64?: Maybe<ImageFormat>;
    cropFocus?: Maybe<ImageCropFocus>;
    fit?: Maybe<ImageFit>;
    background?: Maybe<Scalars['String']>;
    rotate?: Maybe<Scalars['Int']>;
    trim?: Maybe<Scalars['Float']>;
  };

  type ImageSharp_fluidArgs = {
    maxWidth: Maybe<Scalars['Int']>;
    maxHeight: Maybe<Scalars['Int']>;
    base64Width: Maybe<Scalars['Int']>;
    grayscale?: Maybe<Scalars['Boolean']>;
    jpegProgressive?: Maybe<Scalars['Boolean']>;
    pngCompressionSpeed?: Maybe<Scalars['Int']>;
    duotone: Maybe<DuotoneGradient>;
    traceSVG: Maybe<Potrace>;
    quality: Maybe<Scalars['Int']>;
    jpegQuality: Maybe<Scalars['Int']>;
    pngQuality: Maybe<Scalars['Int']>;
    webpQuality: Maybe<Scalars['Int']>;
    toFormat?: Maybe<ImageFormat>;
    toFormatBase64?: Maybe<ImageFormat>;
    cropFocus?: Maybe<ImageCropFocus>;
    fit?: Maybe<ImageFit>;
    background?: Maybe<Scalars['String']>;
    rotate?: Maybe<Scalars['Int']>;
    trim?: Maybe<Scalars['Float']>;
    sizes?: Maybe<Scalars['String']>;
    srcSetBreakpoints?: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
  };

  type ImageSharp_sizesArgs = {
    maxWidth: Maybe<Scalars['Int']>;
    maxHeight: Maybe<Scalars['Int']>;
    base64Width: Maybe<Scalars['Int']>;
    grayscale?: Maybe<Scalars['Boolean']>;
    jpegProgressive?: Maybe<Scalars['Boolean']>;
    pngCompressionSpeed?: Maybe<Scalars['Int']>;
    duotone: Maybe<DuotoneGradient>;
    traceSVG: Maybe<Potrace>;
    quality: Maybe<Scalars['Int']>;
    jpegQuality: Maybe<Scalars['Int']>;
    pngQuality: Maybe<Scalars['Int']>;
    webpQuality: Maybe<Scalars['Int']>;
    toFormat?: Maybe<ImageFormat>;
    toFormatBase64?: Maybe<ImageFormat>;
    cropFocus?: Maybe<ImageCropFocus>;
    fit?: Maybe<ImageFit>;
    background?: Maybe<Scalars['String']>;
    rotate?: Maybe<Scalars['Int']>;
    trim?: Maybe<Scalars['Float']>;
    sizes?: Maybe<Scalars['String']>;
    srcSetBreakpoints?: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
  };

  type ImageSharp_gatsbyImageDataArgs = {
    layout?: Maybe<ImageLayout>;
    maxWidth: Maybe<Scalars['Int']>;
    maxHeight: Maybe<Scalars['Int']>;
    width: Maybe<Scalars['Int']>;
    height: Maybe<Scalars['Int']>;
    placeholder?: Maybe<ImagePlaceholder>;
    blurredOptions: Maybe<BlurredOptions>;
    tracedSVGOptions: Maybe<Potrace>;
    formats?: Maybe<ReadonlyArray<Maybe<ImageFormat>>>;
    outputPixelDensities: Maybe<ReadonlyArray<Maybe<Scalars['Float']>>>;
    sizes?: Maybe<Scalars['String']>;
    quality: Maybe<Scalars['Int']>;
    jpgOptions: Maybe<JPGOptions>;
    pngOptions: Maybe<PNGOptions>;
    webpOptions: Maybe<WebPOptions>;
    transformOptions: Maybe<TransformOptions>;
    background?: Maybe<Scalars['String']>;
  };

  type ImageSharp_resizeArgs = {
    width: Maybe<Scalars['Int']>;
    height: Maybe<Scalars['Int']>;
    quality: Maybe<Scalars['Int']>;
    jpegQuality: Maybe<Scalars['Int']>;
    pngQuality: Maybe<Scalars['Int']>;
    webpQuality: Maybe<Scalars['Int']>;
    jpegProgressive?: Maybe<Scalars['Boolean']>;
    pngCompressionLevel?: Maybe<Scalars['Int']>;
    pngCompressionSpeed?: Maybe<Scalars['Int']>;
    grayscale?: Maybe<Scalars['Boolean']>;
    duotone: Maybe<DuotoneGradient>;
    base64?: Maybe<Scalars['Boolean']>;
    traceSVG: Maybe<Potrace>;
    toFormat?: Maybe<ImageFormat>;
    cropFocus?: Maybe<ImageCropFocus>;
    fit?: Maybe<ImageFit>;
    background?: Maybe<Scalars['String']>;
    rotate?: Maybe<Scalars['Int']>;
    trim?: Maybe<Scalars['Float']>;
  };

  type ImageSharpConnection = {
    readonly totalCount: Scalars['Int'];
    readonly edges: ReadonlyArray<ImageSharpEdge>;
    readonly nodes: ReadonlyArray<ImageSharp>;
    readonly pageInfo: PageInfo;
    readonly distinct: ReadonlyArray<Scalars['String']>;
    readonly group: ReadonlyArray<ImageSharpGroupConnection>;
  };

  type ImageSharpConnection_distinctArgs = {
    field: ImageSharpFieldsEnum;
  };

  type ImageSharpConnection_groupArgs = {
    skip: Maybe<Scalars['Int']>;
    limit: Maybe<Scalars['Int']>;
    field: ImageSharpFieldsEnum;
  };

  type ImageSharpEdge = {
    readonly next: Maybe<ImageSharp>;
    readonly node: ImageSharp;
    readonly previous: Maybe<ImageSharp>;
  };

  enum ImageSharpFieldsEnum {
    fixed___base64 = 'fixed.base64',
    fixed___tracedSVG = 'fixed.tracedSVG',
    fixed___aspectRatio = 'fixed.aspectRatio',
    fixed___width = 'fixed.width',
    fixed___height = 'fixed.height',
    fixed___src = 'fixed.src',
    fixed___srcSet = 'fixed.srcSet',
    fixed___srcWebp = 'fixed.srcWebp',
    fixed___srcSetWebp = 'fixed.srcSetWebp',
    fixed___originalName = 'fixed.originalName',
    resolutions___base64 = 'resolutions.base64',
    resolutions___tracedSVG = 'resolutions.tracedSVG',
    resolutions___aspectRatio = 'resolutions.aspectRatio',
    resolutions___width = 'resolutions.width',
    resolutions___height = 'resolutions.height',
    resolutions___src = 'resolutions.src',
    resolutions___srcSet = 'resolutions.srcSet',
    resolutions___srcWebp = 'resolutions.srcWebp',
    resolutions___srcSetWebp = 'resolutions.srcSetWebp',
    resolutions___originalName = 'resolutions.originalName',
    fluid___base64 = 'fluid.base64',
    fluid___tracedSVG = 'fluid.tracedSVG',
    fluid___aspectRatio = 'fluid.aspectRatio',
    fluid___src = 'fluid.src',
    fluid___srcSet = 'fluid.srcSet',
    fluid___srcWebp = 'fluid.srcWebp',
    fluid___srcSetWebp = 'fluid.srcSetWebp',
    fluid___sizes = 'fluid.sizes',
    fluid___originalImg = 'fluid.originalImg',
    fluid___originalName = 'fluid.originalName',
    fluid___presentationWidth = 'fluid.presentationWidth',
    fluid___presentationHeight = 'fluid.presentationHeight',
    sizes___base64 = 'sizes.base64',
    sizes___tracedSVG = 'sizes.tracedSVG',
    sizes___aspectRatio = 'sizes.aspectRatio',
    sizes___src = 'sizes.src',
    sizes___srcSet = 'sizes.srcSet',
    sizes___srcWebp = 'sizes.srcWebp',
    sizes___srcSetWebp = 'sizes.srcSetWebp',
    sizes___sizes = 'sizes.sizes',
    sizes___originalImg = 'sizes.originalImg',
    sizes___originalName = 'sizes.originalName',
    sizes___presentationWidth = 'sizes.presentationWidth',
    sizes___presentationHeight = 'sizes.presentationHeight',
    gatsbyImageData = 'gatsbyImageData',
    original___width = 'original.width',
    original___height = 'original.height',
    original___src = 'original.src',
    resize___src = 'resize.src',
    resize___tracedSVG = 'resize.tracedSVG',
    resize___width = 'resize.width',
    resize___height = 'resize.height',
    resize___aspectRatio = 'resize.aspectRatio',
    resize___originalName = 'resize.originalName',
    id = 'id',
    parent___id = 'parent.id',
    parent___parent___id = 'parent.parent.id',
    parent___parent___parent___id = 'parent.parent.parent.id',
    parent___parent___parent___children = 'parent.parent.parent.children',
    parent___parent___children = 'parent.parent.children',
    parent___parent___children___id = 'parent.parent.children.id',
    parent___parent___children___children = 'parent.parent.children.children',
    parent___parent___internal___content = 'parent.parent.internal.content',
    parent___parent___internal___contentDigest = 'parent.parent.internal.contentDigest',
    parent___parent___internal___description = 'parent.parent.internal.description',
    parent___parent___internal___fieldOwners = 'parent.parent.internal.fieldOwners',
    parent___parent___internal___ignoreType = 'parent.parent.internal.ignoreType',
    parent___parent___internal___mediaType = 'parent.parent.internal.mediaType',
    parent___parent___internal___owner = 'parent.parent.internal.owner',
    parent___parent___internal___type = 'parent.parent.internal.type',
    parent___children = 'parent.children',
    parent___children___id = 'parent.children.id',
    parent___children___parent___id = 'parent.children.parent.id',
    parent___children___parent___children = 'parent.children.parent.children',
    parent___children___children = 'parent.children.children',
    parent___children___children___id = 'parent.children.children.id',
    parent___children___children___children = 'parent.children.children.children',
    parent___children___internal___content = 'parent.children.internal.content',
    parent___children___internal___contentDigest = 'parent.children.internal.contentDigest',
    parent___children___internal___description = 'parent.children.internal.description',
    parent___children___internal___fieldOwners = 'parent.children.internal.fieldOwners',
    parent___children___internal___ignoreType = 'parent.children.internal.ignoreType',
    parent___children___internal___mediaType = 'parent.children.internal.mediaType',
    parent___children___internal___owner = 'parent.children.internal.owner',
    parent___children___internal___type = 'parent.children.internal.type',
    parent___internal___content = 'parent.internal.content',
    parent___internal___contentDigest = 'parent.internal.contentDigest',
    parent___internal___description = 'parent.internal.description',
    parent___internal___fieldOwners = 'parent.internal.fieldOwners',
    parent___internal___ignoreType = 'parent.internal.ignoreType',
    parent___internal___mediaType = 'parent.internal.mediaType',
    parent___internal___owner = 'parent.internal.owner',
    parent___internal___type = 'parent.internal.type',
    children = 'children',
    children___id = 'children.id',
    children___parent___id = 'children.parent.id',
    children___parent___parent___id = 'children.parent.parent.id',
    children___parent___parent___children = 'children.parent.parent.children',
    children___parent___children = 'children.parent.children',
    children___parent___children___id = 'children.parent.children.id',
    children___parent___children___children = 'children.parent.children.children',
    children___parent___internal___content = 'children.parent.internal.content',
    children___parent___internal___contentDigest = 'children.parent.internal.contentDigest',
    children___parent___internal___description = 'children.parent.internal.description',
    children___parent___internal___fieldOwners = 'children.parent.internal.fieldOwners',
    children___parent___internal___ignoreType = 'children.parent.internal.ignoreType',
    children___parent___internal___mediaType = 'children.parent.internal.mediaType',
    children___parent___internal___owner = 'children.parent.internal.owner',
    children___parent___internal___type = 'children.parent.internal.type',
    children___children = 'children.children',
    children___children___id = 'children.children.id',
    children___children___parent___id = 'children.children.parent.id',
    children___children___parent___children = 'children.children.parent.children',
    children___children___children = 'children.children.children',
    children___children___children___id = 'children.children.children.id',
    children___children___children___children = 'children.children.children.children',
    children___children___internal___content = 'children.children.internal.content',
    children___children___internal___contentDigest = 'children.children.internal.contentDigest',
    children___children___internal___description = 'children.children.internal.description',
    children___children___internal___fieldOwners = 'children.children.internal.fieldOwners',
    children___children___internal___ignoreType = 'children.children.internal.ignoreType',
    children___children___internal___mediaType = 'children.children.internal.mediaType',
    children___children___internal___owner = 'children.children.internal.owner',
    children___children___internal___type = 'children.children.internal.type',
    children___internal___content = 'children.internal.content',
    children___internal___contentDigest = 'children.internal.contentDigest',
    children___internal___description = 'children.internal.description',
    children___internal___fieldOwners = 'children.internal.fieldOwners',
    children___internal___ignoreType = 'children.internal.ignoreType',
    children___internal___mediaType = 'children.internal.mediaType',
    children___internal___owner = 'children.internal.owner',
    children___internal___type = 'children.internal.type',
    internal___content = 'internal.content',
    internal___contentDigest = 'internal.contentDigest',
    internal___description = 'internal.description',
    internal___fieldOwners = 'internal.fieldOwners',
    internal___ignoreType = 'internal.ignoreType',
    internal___mediaType = 'internal.mediaType',
    internal___owner = 'internal.owner',
    internal___type = 'internal.type',
  }

  type ImageSharpFilterInput = {
    readonly fixed: Maybe<ImageSharpFixedFilterInput>;
    readonly resolutions: Maybe<ImageSharpResolutionsFilterInput>;
    readonly fluid: Maybe<ImageSharpFluidFilterInput>;
    readonly sizes: Maybe<ImageSharpSizesFilterInput>;
    readonly gatsbyImageData: Maybe<JSONQueryOperatorInput>;
    readonly original: Maybe<ImageSharpOriginalFilterInput>;
    readonly resize: Maybe<ImageSharpResizeFilterInput>;
    readonly id: Maybe<StringQueryOperatorInput>;
    readonly parent: Maybe<NodeFilterInput>;
    readonly children: Maybe<NodeFilterListInput>;
    readonly internal: Maybe<InternalFilterInput>;
  };

  type ImageSharpFixed = {
    readonly base64: Maybe<Scalars['String']>;
    readonly tracedSVG: Maybe<Scalars['String']>;
    readonly aspectRatio: Maybe<Scalars['Float']>;
    readonly width: Scalars['Float'];
    readonly height: Scalars['Float'];
    readonly src: Scalars['String'];
    readonly srcSet: Scalars['String'];
    readonly srcWebp: Maybe<Scalars['String']>;
    readonly srcSetWebp: Maybe<Scalars['String']>;
    readonly originalName: Maybe<Scalars['String']>;
  };

  type ImageSharpFixedFilterInput = {
    readonly base64: Maybe<StringQueryOperatorInput>;
    readonly tracedSVG: Maybe<StringQueryOperatorInput>;
    readonly aspectRatio: Maybe<FloatQueryOperatorInput>;
    readonly width: Maybe<FloatQueryOperatorInput>;
    readonly height: Maybe<FloatQueryOperatorInput>;
    readonly src: Maybe<StringQueryOperatorInput>;
    readonly srcSet: Maybe<StringQueryOperatorInput>;
    readonly srcWebp: Maybe<StringQueryOperatorInput>;
    readonly srcSetWebp: Maybe<StringQueryOperatorInput>;
    readonly originalName: Maybe<StringQueryOperatorInput>;
  };

  type ImageSharpFluid = {
    readonly base64: Maybe<Scalars['String']>;
    readonly tracedSVG: Maybe<Scalars['String']>;
    readonly aspectRatio: Scalars['Float'];
    readonly src: Scalars['String'];
    readonly srcSet: Scalars['String'];
    readonly srcWebp: Maybe<Scalars['String']>;
    readonly srcSetWebp: Maybe<Scalars['String']>;
    readonly sizes: Scalars['String'];
    readonly originalImg: Maybe<Scalars['String']>;
    readonly originalName: Maybe<Scalars['String']>;
    readonly presentationWidth: Scalars['Int'];
    readonly presentationHeight: Scalars['Int'];
  };

  type ImageSharpFluidFilterInput = {
    readonly base64: Maybe<StringQueryOperatorInput>;
    readonly tracedSVG: Maybe<StringQueryOperatorInput>;
    readonly aspectRatio: Maybe<FloatQueryOperatorInput>;
    readonly src: Maybe<StringQueryOperatorInput>;
    readonly srcSet: Maybe<StringQueryOperatorInput>;
    readonly srcWebp: Maybe<StringQueryOperatorInput>;
    readonly srcSetWebp: Maybe<StringQueryOperatorInput>;
    readonly sizes: Maybe<StringQueryOperatorInput>;
    readonly originalImg: Maybe<StringQueryOperatorInput>;
    readonly originalName: Maybe<StringQueryOperatorInput>;
    readonly presentationWidth: Maybe<IntQueryOperatorInput>;
    readonly presentationHeight: Maybe<IntQueryOperatorInput>;
  };

  type ImageSharpGroupConnection = {
    readonly totalCount: Scalars['Int'];
    readonly edges: ReadonlyArray<ImageSharpEdge>;
    readonly nodes: ReadonlyArray<ImageSharp>;
    readonly pageInfo: PageInfo;
    readonly field: Scalars['String'];
    readonly fieldValue: Maybe<Scalars['String']>;
  };

  type ImageSharpOriginal = {
    readonly width: Maybe<Scalars['Float']>;
    readonly height: Maybe<Scalars['Float']>;
    readonly src: Maybe<Scalars['String']>;
  };

  type ImageSharpOriginalFilterInput = {
    readonly width: Maybe<FloatQueryOperatorInput>;
    readonly height: Maybe<FloatQueryOperatorInput>;
    readonly src: Maybe<StringQueryOperatorInput>;
  };

  type ImageSharpResize = {
    readonly src: Maybe<Scalars['String']>;
    readonly tracedSVG: Maybe<Scalars['String']>;
    readonly width: Maybe<Scalars['Int']>;
    readonly height: Maybe<Scalars['Int']>;
    readonly aspectRatio: Maybe<Scalars['Float']>;
    readonly originalName: Maybe<Scalars['String']>;
  };

  type ImageSharpResizeFilterInput = {
    readonly src: Maybe<StringQueryOperatorInput>;
    readonly tracedSVG: Maybe<StringQueryOperatorInput>;
    readonly width: Maybe<IntQueryOperatorInput>;
    readonly height: Maybe<IntQueryOperatorInput>;
    readonly aspectRatio: Maybe<FloatQueryOperatorInput>;
    readonly originalName: Maybe<StringQueryOperatorInput>;
  };

  type ImageSharpResolutions = {
    readonly base64: Maybe<Scalars['String']>;
    readonly tracedSVG: Maybe<Scalars['String']>;
    readonly aspectRatio: Maybe<Scalars['Float']>;
    readonly width: Scalars['Float'];
    readonly height: Scalars['Float'];
    readonly src: Scalars['String'];
    readonly srcSet: Scalars['String'];
    readonly srcWebp: Maybe<Scalars['String']>;
    readonly srcSetWebp: Maybe<Scalars['String']>;
    readonly originalName: Maybe<Scalars['String']>;
  };

  type ImageSharpResolutionsFilterInput = {
    readonly base64: Maybe<StringQueryOperatorInput>;
    readonly tracedSVG: Maybe<StringQueryOperatorInput>;
    readonly aspectRatio: Maybe<FloatQueryOperatorInput>;
    readonly width: Maybe<FloatQueryOperatorInput>;
    readonly height: Maybe<FloatQueryOperatorInput>;
    readonly src: Maybe<StringQueryOperatorInput>;
    readonly srcSet: Maybe<StringQueryOperatorInput>;
    readonly srcWebp: Maybe<StringQueryOperatorInput>;
    readonly srcSetWebp: Maybe<StringQueryOperatorInput>;
    readonly originalName: Maybe<StringQueryOperatorInput>;
  };

  type ImageSharpSizes = {
    readonly base64: Maybe<Scalars['String']>;
    readonly tracedSVG: Maybe<Scalars['String']>;
    readonly aspectRatio: Scalars['Float'];
    readonly src: Scalars['String'];
    readonly srcSet: Scalars['String'];
    readonly srcWebp: Maybe<Scalars['String']>;
    readonly srcSetWebp: Maybe<Scalars['String']>;
    readonly sizes: Scalars['String'];
    readonly originalImg: Maybe<Scalars['String']>;
    readonly originalName: Maybe<Scalars['String']>;
    readonly presentationWidth: Scalars['Int'];
    readonly presentationHeight: Scalars['Int'];
  };

  type ImageSharpSizesFilterInput = {
    readonly base64: Maybe<StringQueryOperatorInput>;
    readonly tracedSVG: Maybe<StringQueryOperatorInput>;
    readonly aspectRatio: Maybe<FloatQueryOperatorInput>;
    readonly src: Maybe<StringQueryOperatorInput>;
    readonly srcSet: Maybe<StringQueryOperatorInput>;
    readonly srcWebp: Maybe<StringQueryOperatorInput>;
    readonly srcSetWebp: Maybe<StringQueryOperatorInput>;
    readonly sizes: Maybe<StringQueryOperatorInput>;
    readonly originalImg: Maybe<StringQueryOperatorInput>;
    readonly originalName: Maybe<StringQueryOperatorInput>;
    readonly presentationWidth: Maybe<IntQueryOperatorInput>;
    readonly presentationHeight: Maybe<IntQueryOperatorInput>;
  };

  type ImageSharpSortInput = {
    readonly fields: Maybe<ReadonlyArray<Maybe<ImageSharpFieldsEnum>>>;
    readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
  };

  type InstaNode = Node & {
    readonly id: Scalars['ID'];
    readonly parent: Maybe<Node>;
    readonly children: ReadonlyArray<Node>;
    readonly internal: Internal;
    readonly type: Maybe<Scalars['String']>;
    readonly username: Maybe<Scalars['String']>;
    readonly likes: Maybe<Scalars['Int']>;
    readonly caption: Maybe<Scalars['String']>;
    readonly thumbnails: Maybe<ReadonlyArray<Maybe<InstaNodeThumbnails>>>;
    readonly mediaType: Maybe<Scalars['String']>;
    readonly preview: Maybe<Scalars['String']>;
    readonly original: Maybe<Scalars['String']>;
    readonly timestamp: Maybe<Scalars['Int']>;
    readonly dimensions: Maybe<InstaNodeDimensions>;
    readonly comments: Maybe<Scalars['Int']>;
    readonly localFile: Maybe<File>;
  };

  type InstaNodeConnection = {
    readonly totalCount: Scalars['Int'];
    readonly edges: ReadonlyArray<InstaNodeEdge>;
    readonly nodes: ReadonlyArray<InstaNode>;
    readonly pageInfo: PageInfo;
    readonly distinct: ReadonlyArray<Scalars['String']>;
    readonly group: ReadonlyArray<InstaNodeGroupConnection>;
  };

  type InstaNodeConnection_distinctArgs = {
    field: InstaNodeFieldsEnum;
  };

  type InstaNodeConnection_groupArgs = {
    skip: Maybe<Scalars['Int']>;
    limit: Maybe<Scalars['Int']>;
    field: InstaNodeFieldsEnum;
  };

  type InstaNodeDimensions = {
    readonly height: Maybe<Scalars['Int']>;
    readonly width: Maybe<Scalars['Int']>;
  };

  type InstaNodeDimensionsFilterInput = {
    readonly height: Maybe<IntQueryOperatorInput>;
    readonly width: Maybe<IntQueryOperatorInput>;
  };

  type InstaNodeEdge = {
    readonly next: Maybe<InstaNode>;
    readonly node: InstaNode;
    readonly previous: Maybe<InstaNode>;
  };

  enum InstaNodeFieldsEnum {
    id = 'id',
    parent___id = 'parent.id',
    parent___parent___id = 'parent.parent.id',
    parent___parent___parent___id = 'parent.parent.parent.id',
    parent___parent___parent___children = 'parent.parent.parent.children',
    parent___parent___children = 'parent.parent.children',
    parent___parent___children___id = 'parent.parent.children.id',
    parent___parent___children___children = 'parent.parent.children.children',
    parent___parent___internal___content = 'parent.parent.internal.content',
    parent___parent___internal___contentDigest = 'parent.parent.internal.contentDigest',
    parent___parent___internal___description = 'parent.parent.internal.description',
    parent___parent___internal___fieldOwners = 'parent.parent.internal.fieldOwners',
    parent___parent___internal___ignoreType = 'parent.parent.internal.ignoreType',
    parent___parent___internal___mediaType = 'parent.parent.internal.mediaType',
    parent___parent___internal___owner = 'parent.parent.internal.owner',
    parent___parent___internal___type = 'parent.parent.internal.type',
    parent___children = 'parent.children',
    parent___children___id = 'parent.children.id',
    parent___children___parent___id = 'parent.children.parent.id',
    parent___children___parent___children = 'parent.children.parent.children',
    parent___children___children = 'parent.children.children',
    parent___children___children___id = 'parent.children.children.id',
    parent___children___children___children = 'parent.children.children.children',
    parent___children___internal___content = 'parent.children.internal.content',
    parent___children___internal___contentDigest = 'parent.children.internal.contentDigest',
    parent___children___internal___description = 'parent.children.internal.description',
    parent___children___internal___fieldOwners = 'parent.children.internal.fieldOwners',
    parent___children___internal___ignoreType = 'parent.children.internal.ignoreType',
    parent___children___internal___mediaType = 'parent.children.internal.mediaType',
    parent___children___internal___owner = 'parent.children.internal.owner',
    parent___children___internal___type = 'parent.children.internal.type',
    parent___internal___content = 'parent.internal.content',
    parent___internal___contentDigest = 'parent.internal.contentDigest',
    parent___internal___description = 'parent.internal.description',
    parent___internal___fieldOwners = 'parent.internal.fieldOwners',
    parent___internal___ignoreType = 'parent.internal.ignoreType',
    parent___internal___mediaType = 'parent.internal.mediaType',
    parent___internal___owner = 'parent.internal.owner',
    parent___internal___type = 'parent.internal.type',
    children = 'children',
    children___id = 'children.id',
    children___parent___id = 'children.parent.id',
    children___parent___parent___id = 'children.parent.parent.id',
    children___parent___parent___children = 'children.parent.parent.children',
    children___parent___children = 'children.parent.children',
    children___parent___children___id = 'children.parent.children.id',
    children___parent___children___children = 'children.parent.children.children',
    children___parent___internal___content = 'children.parent.internal.content',
    children___parent___internal___contentDigest = 'children.parent.internal.contentDigest',
    children___parent___internal___description = 'children.parent.internal.description',
    children___parent___internal___fieldOwners = 'children.parent.internal.fieldOwners',
    children___parent___internal___ignoreType = 'children.parent.internal.ignoreType',
    children___parent___internal___mediaType = 'children.parent.internal.mediaType',
    children___parent___internal___owner = 'children.parent.internal.owner',
    children___parent___internal___type = 'children.parent.internal.type',
    children___children = 'children.children',
    children___children___id = 'children.children.id',
    children___children___parent___id = 'children.children.parent.id',
    children___children___parent___children = 'children.children.parent.children',
    children___children___children = 'children.children.children',
    children___children___children___id = 'children.children.children.id',
    children___children___children___children = 'children.children.children.children',
    children___children___internal___content = 'children.children.internal.content',
    children___children___internal___contentDigest = 'children.children.internal.contentDigest',
    children___children___internal___description = 'children.children.internal.description',
    children___children___internal___fieldOwners = 'children.children.internal.fieldOwners',
    children___children___internal___ignoreType = 'children.children.internal.ignoreType',
    children___children___internal___mediaType = 'children.children.internal.mediaType',
    children___children___internal___owner = 'children.children.internal.owner',
    children___children___internal___type = 'children.children.internal.type',
    children___internal___content = 'children.internal.content',
    children___internal___contentDigest = 'children.internal.contentDigest',
    children___internal___description = 'children.internal.description',
    children___internal___fieldOwners = 'children.internal.fieldOwners',
    children___internal___ignoreType = 'children.internal.ignoreType',
    children___internal___mediaType = 'children.internal.mediaType',
    children___internal___owner = 'children.internal.owner',
    children___internal___type = 'children.internal.type',
    internal___content = 'internal.content',
    internal___contentDigest = 'internal.contentDigest',
    internal___description = 'internal.description',
    internal___fieldOwners = 'internal.fieldOwners',
    internal___ignoreType = 'internal.ignoreType',
    internal___mediaType = 'internal.mediaType',
    internal___owner = 'internal.owner',
    internal___type = 'internal.type',
    type = 'type',
    username = 'username',
    likes = 'likes',
    caption = 'caption',
    thumbnails = 'thumbnails',
    thumbnails___src = 'thumbnails.src',
    thumbnails___config_width = 'thumbnails.config_width',
    thumbnails___config_height = 'thumbnails.config_height',
    mediaType = 'mediaType',
    preview = 'preview',
    original = 'original',
    timestamp = 'timestamp',
    dimensions___height = 'dimensions.height',
    dimensions___width = 'dimensions.width',
    comments = 'comments',
    localFile___sourceInstanceName = 'localFile.sourceInstanceName',
    localFile___absolutePath = 'localFile.absolutePath',
    localFile___relativePath = 'localFile.relativePath',
    localFile___extension = 'localFile.extension',
    localFile___size = 'localFile.size',
    localFile___prettySize = 'localFile.prettySize',
    localFile___modifiedTime = 'localFile.modifiedTime',
    localFile___accessTime = 'localFile.accessTime',
    localFile___changeTime = 'localFile.changeTime',
    localFile___birthTime = 'localFile.birthTime',
    localFile___root = 'localFile.root',
    localFile___dir = 'localFile.dir',
    localFile___base = 'localFile.base',
    localFile___ext = 'localFile.ext',
    localFile___name = 'localFile.name',
    localFile___relativeDirectory = 'localFile.relativeDirectory',
    localFile___dev = 'localFile.dev',
    localFile___mode = 'localFile.mode',
    localFile___nlink = 'localFile.nlink',
    localFile___uid = 'localFile.uid',
    localFile___gid = 'localFile.gid',
    localFile___rdev = 'localFile.rdev',
    localFile___ino = 'localFile.ino',
    localFile___atimeMs = 'localFile.atimeMs',
    localFile___mtimeMs = 'localFile.mtimeMs',
    localFile___ctimeMs = 'localFile.ctimeMs',
    localFile___atime = 'localFile.atime',
    localFile___mtime = 'localFile.mtime',
    localFile___ctime = 'localFile.ctime',
    localFile___birthtime = 'localFile.birthtime',
    localFile___birthtimeMs = 'localFile.birthtimeMs',
    localFile___blksize = 'localFile.blksize',
    localFile___blocks = 'localFile.blocks',
    localFile___url = 'localFile.url',
    localFile___publicURL = 'localFile.publicURL',
    localFile___childImageSharp___fixed___base64 = 'localFile.childImageSharp.fixed.base64',
    localFile___childImageSharp___fixed___tracedSVG = 'localFile.childImageSharp.fixed.tracedSVG',
    localFile___childImageSharp___fixed___aspectRatio = 'localFile.childImageSharp.fixed.aspectRatio',
    localFile___childImageSharp___fixed___width = 'localFile.childImageSharp.fixed.width',
    localFile___childImageSharp___fixed___height = 'localFile.childImageSharp.fixed.height',
    localFile___childImageSharp___fixed___src = 'localFile.childImageSharp.fixed.src',
    localFile___childImageSharp___fixed___srcSet = 'localFile.childImageSharp.fixed.srcSet',
    localFile___childImageSharp___fixed___srcWebp = 'localFile.childImageSharp.fixed.srcWebp',
    localFile___childImageSharp___fixed___srcSetWebp = 'localFile.childImageSharp.fixed.srcSetWebp',
    localFile___childImageSharp___fixed___originalName = 'localFile.childImageSharp.fixed.originalName',
    localFile___childImageSharp___resolutions___base64 = 'localFile.childImageSharp.resolutions.base64',
    localFile___childImageSharp___resolutions___tracedSVG = 'localFile.childImageSharp.resolutions.tracedSVG',
    localFile___childImageSharp___resolutions___aspectRatio = 'localFile.childImageSharp.resolutions.aspectRatio',
    localFile___childImageSharp___resolutions___width = 'localFile.childImageSharp.resolutions.width',
    localFile___childImageSharp___resolutions___height = 'localFile.childImageSharp.resolutions.height',
    localFile___childImageSharp___resolutions___src = 'localFile.childImageSharp.resolutions.src',
    localFile___childImageSharp___resolutions___srcSet = 'localFile.childImageSharp.resolutions.srcSet',
    localFile___childImageSharp___resolutions___srcWebp = 'localFile.childImageSharp.resolutions.srcWebp',
    localFile___childImageSharp___resolutions___srcSetWebp = 'localFile.childImageSharp.resolutions.srcSetWebp',
    localFile___childImageSharp___resolutions___originalName = 'localFile.childImageSharp.resolutions.originalName',
    localFile___childImageSharp___fluid___base64 = 'localFile.childImageSharp.fluid.base64',
    localFile___childImageSharp___fluid___tracedSVG = 'localFile.childImageSharp.fluid.tracedSVG',
    localFile___childImageSharp___fluid___aspectRatio = 'localFile.childImageSharp.fluid.aspectRatio',
    localFile___childImageSharp___fluid___src = 'localFile.childImageSharp.fluid.src',
    localFile___childImageSharp___fluid___srcSet = 'localFile.childImageSharp.fluid.srcSet',
    localFile___childImageSharp___fluid___srcWebp = 'localFile.childImageSharp.fluid.srcWebp',
    localFile___childImageSharp___fluid___srcSetWebp = 'localFile.childImageSharp.fluid.srcSetWebp',
    localFile___childImageSharp___fluid___sizes = 'localFile.childImageSharp.fluid.sizes',
    localFile___childImageSharp___fluid___originalImg = 'localFile.childImageSharp.fluid.originalImg',
    localFile___childImageSharp___fluid___originalName = 'localFile.childImageSharp.fluid.originalName',
    localFile___childImageSharp___fluid___presentationWidth = 'localFile.childImageSharp.fluid.presentationWidth',
    localFile___childImageSharp___fluid___presentationHeight = 'localFile.childImageSharp.fluid.presentationHeight',
    localFile___childImageSharp___sizes___base64 = 'localFile.childImageSharp.sizes.base64',
    localFile___childImageSharp___sizes___tracedSVG = 'localFile.childImageSharp.sizes.tracedSVG',
    localFile___childImageSharp___sizes___aspectRatio = 'localFile.childImageSharp.sizes.aspectRatio',
    localFile___childImageSharp___sizes___src = 'localFile.childImageSharp.sizes.src',
    localFile___childImageSharp___sizes___srcSet = 'localFile.childImageSharp.sizes.srcSet',
    localFile___childImageSharp___sizes___srcWebp = 'localFile.childImageSharp.sizes.srcWebp',
    localFile___childImageSharp___sizes___srcSetWebp = 'localFile.childImageSharp.sizes.srcSetWebp',
    localFile___childImageSharp___sizes___sizes = 'localFile.childImageSharp.sizes.sizes',
    localFile___childImageSharp___sizes___originalImg = 'localFile.childImageSharp.sizes.originalImg',
    localFile___childImageSharp___sizes___originalName = 'localFile.childImageSharp.sizes.originalName',
    localFile___childImageSharp___sizes___presentationWidth = 'localFile.childImageSharp.sizes.presentationWidth',
    localFile___childImageSharp___sizes___presentationHeight = 'localFile.childImageSharp.sizes.presentationHeight',
    localFile___childImageSharp___gatsbyImageData = 'localFile.childImageSharp.gatsbyImageData',
    localFile___childImageSharp___original___width = 'localFile.childImageSharp.original.width',
    localFile___childImageSharp___original___height = 'localFile.childImageSharp.original.height',
    localFile___childImageSharp___original___src = 'localFile.childImageSharp.original.src',
    localFile___childImageSharp___resize___src = 'localFile.childImageSharp.resize.src',
    localFile___childImageSharp___resize___tracedSVG = 'localFile.childImageSharp.resize.tracedSVG',
    localFile___childImageSharp___resize___width = 'localFile.childImageSharp.resize.width',
    localFile___childImageSharp___resize___height = 'localFile.childImageSharp.resize.height',
    localFile___childImageSharp___resize___aspectRatio = 'localFile.childImageSharp.resize.aspectRatio',
    localFile___childImageSharp___resize___originalName = 'localFile.childImageSharp.resize.originalName',
    localFile___childImageSharp___id = 'localFile.childImageSharp.id',
    localFile___childImageSharp___parent___id = 'localFile.childImageSharp.parent.id',
    localFile___childImageSharp___parent___children = 'localFile.childImageSharp.parent.children',
    localFile___childImageSharp___children = 'localFile.childImageSharp.children',
    localFile___childImageSharp___children___id = 'localFile.childImageSharp.children.id',
    localFile___childImageSharp___children___children = 'localFile.childImageSharp.children.children',
    localFile___childImageSharp___internal___content = 'localFile.childImageSharp.internal.content',
    localFile___childImageSharp___internal___contentDigest = 'localFile.childImageSharp.internal.contentDigest',
    localFile___childImageSharp___internal___description = 'localFile.childImageSharp.internal.description',
    localFile___childImageSharp___internal___fieldOwners = 'localFile.childImageSharp.internal.fieldOwners',
    localFile___childImageSharp___internal___ignoreType = 'localFile.childImageSharp.internal.ignoreType',
    localFile___childImageSharp___internal___mediaType = 'localFile.childImageSharp.internal.mediaType',
    localFile___childImageSharp___internal___owner = 'localFile.childImageSharp.internal.owner',
    localFile___childImageSharp___internal___type = 'localFile.childImageSharp.internal.type',
    localFile___id = 'localFile.id',
    localFile___parent___id = 'localFile.parent.id',
    localFile___parent___parent___id = 'localFile.parent.parent.id',
    localFile___parent___parent___children = 'localFile.parent.parent.children',
    localFile___parent___children = 'localFile.parent.children',
    localFile___parent___children___id = 'localFile.parent.children.id',
    localFile___parent___children___children = 'localFile.parent.children.children',
    localFile___parent___internal___content = 'localFile.parent.internal.content',
    localFile___parent___internal___contentDigest = 'localFile.parent.internal.contentDigest',
    localFile___parent___internal___description = 'localFile.parent.internal.description',
    localFile___parent___internal___fieldOwners = 'localFile.parent.internal.fieldOwners',
    localFile___parent___internal___ignoreType = 'localFile.parent.internal.ignoreType',
    localFile___parent___internal___mediaType = 'localFile.parent.internal.mediaType',
    localFile___parent___internal___owner = 'localFile.parent.internal.owner',
    localFile___parent___internal___type = 'localFile.parent.internal.type',
    localFile___children = 'localFile.children',
    localFile___children___id = 'localFile.children.id',
    localFile___children___parent___id = 'localFile.children.parent.id',
    localFile___children___parent___children = 'localFile.children.parent.children',
    localFile___children___children = 'localFile.children.children',
    localFile___children___children___id = 'localFile.children.children.id',
    localFile___children___children___children = 'localFile.children.children.children',
    localFile___children___internal___content = 'localFile.children.internal.content',
    localFile___children___internal___contentDigest = 'localFile.children.internal.contentDigest',
    localFile___children___internal___description = 'localFile.children.internal.description',
    localFile___children___internal___fieldOwners = 'localFile.children.internal.fieldOwners',
    localFile___children___internal___ignoreType = 'localFile.children.internal.ignoreType',
    localFile___children___internal___mediaType = 'localFile.children.internal.mediaType',
    localFile___children___internal___owner = 'localFile.children.internal.owner',
    localFile___children___internal___type = 'localFile.children.internal.type',
    localFile___internal___content = 'localFile.internal.content',
    localFile___internal___contentDigest = 'localFile.internal.contentDigest',
    localFile___internal___description = 'localFile.internal.description',
    localFile___internal___fieldOwners = 'localFile.internal.fieldOwners',
    localFile___internal___ignoreType = 'localFile.internal.ignoreType',
    localFile___internal___mediaType = 'localFile.internal.mediaType',
    localFile___internal___owner = 'localFile.internal.owner',
    localFile___internal___type = 'localFile.internal.type',
    localFile___childDataJson___id = 'localFile.childDataJson.id',
    localFile___childDataJson___parent___id = 'localFile.childDataJson.parent.id',
    localFile___childDataJson___parent___children = 'localFile.childDataJson.parent.children',
    localFile___childDataJson___children = 'localFile.childDataJson.children',
    localFile___childDataJson___children___id = 'localFile.childDataJson.children.id',
    localFile___childDataJson___children___children = 'localFile.childDataJson.children.children',
    localFile___childDataJson___internal___content = 'localFile.childDataJson.internal.content',
    localFile___childDataJson___internal___contentDigest = 'localFile.childDataJson.internal.contentDigest',
    localFile___childDataJson___internal___description = 'localFile.childDataJson.internal.description',
    localFile___childDataJson___internal___fieldOwners = 'localFile.childDataJson.internal.fieldOwners',
    localFile___childDataJson___internal___ignoreType = 'localFile.childDataJson.internal.ignoreType',
    localFile___childDataJson___internal___mediaType = 'localFile.childDataJson.internal.mediaType',
    localFile___childDataJson___internal___owner = 'localFile.childDataJson.internal.owner',
    localFile___childDataJson___internal___type = 'localFile.childDataJson.internal.type',
    localFile___childDataJson___content = 'localFile.childDataJson.content',
    localFile___childDataJson___content___title = 'localFile.childDataJson.content.title',
    localFile___childDataJson___password = 'localFile.childDataJson.password',
    localFile___childMdx___rawBody = 'localFile.childMdx.rawBody',
    localFile___childMdx___fileAbsolutePath = 'localFile.childMdx.fileAbsolutePath',
    localFile___childMdx___frontmatter___title = 'localFile.childMdx.frontmatter.title',
    localFile___childMdx___frontmatter___categories = 'localFile.childMdx.frontmatter.categories',
    localFile___childMdx___frontmatter___date = 'localFile.childMdx.frontmatter.date',
    localFile___childMdx___frontmatter___bottomGallery = 'localFile.childMdx.frontmatter.bottomGallery',
    localFile___childMdx___slug = 'localFile.childMdx.slug',
    localFile___childMdx___body = 'localFile.childMdx.body',
    localFile___childMdx___excerpt = 'localFile.childMdx.excerpt',
    localFile___childMdx___headings = 'localFile.childMdx.headings',
    localFile___childMdx___headings___value = 'localFile.childMdx.headings.value',
    localFile___childMdx___headings___depth = 'localFile.childMdx.headings.depth',
    localFile___childMdx___html = 'localFile.childMdx.html',
    localFile___childMdx___mdxAST = 'localFile.childMdx.mdxAST',
    localFile___childMdx___tableOfContents = 'localFile.childMdx.tableOfContents',
    localFile___childMdx___timeToRead = 'localFile.childMdx.timeToRead',
    localFile___childMdx___wordCount___paragraphs = 'localFile.childMdx.wordCount.paragraphs',
    localFile___childMdx___wordCount___sentences = 'localFile.childMdx.wordCount.sentences',
    localFile___childMdx___wordCount___words = 'localFile.childMdx.wordCount.words',
    localFile___childMdx___fields___slug = 'localFile.childMdx.fields.slug',
    localFile___childMdx___fields___blogPath = 'localFile.childMdx.fields.blogPath',
    localFile___childMdx___id = 'localFile.childMdx.id',
    localFile___childMdx___parent___id = 'localFile.childMdx.parent.id',
    localFile___childMdx___parent___children = 'localFile.childMdx.parent.children',
    localFile___childMdx___children = 'localFile.childMdx.children',
    localFile___childMdx___children___id = 'localFile.childMdx.children.id',
    localFile___childMdx___children___children = 'localFile.childMdx.children.children',
    localFile___childMdx___internal___content = 'localFile.childMdx.internal.content',
    localFile___childMdx___internal___contentDigest = 'localFile.childMdx.internal.contentDigest',
    localFile___childMdx___internal___description = 'localFile.childMdx.internal.description',
    localFile___childMdx___internal___fieldOwners = 'localFile.childMdx.internal.fieldOwners',
    localFile___childMdx___internal___ignoreType = 'localFile.childMdx.internal.ignoreType',
    localFile___childMdx___internal___mediaType = 'localFile.childMdx.internal.mediaType',
    localFile___childMdx___internal___owner = 'localFile.childMdx.internal.owner',
    localFile___childMdx___internal___type = 'localFile.childMdx.internal.type',
  }

  type InstaNodeFilterInput = {
    readonly id: Maybe<StringQueryOperatorInput>;
    readonly parent: Maybe<NodeFilterInput>;
    readonly children: Maybe<NodeFilterListInput>;
    readonly internal: Maybe<InternalFilterInput>;
    readonly type: Maybe<StringQueryOperatorInput>;
    readonly username: Maybe<StringQueryOperatorInput>;
    readonly likes: Maybe<IntQueryOperatorInput>;
    readonly caption: Maybe<StringQueryOperatorInput>;
    readonly thumbnails: Maybe<InstaNodeThumbnailsFilterListInput>;
    readonly mediaType: Maybe<StringQueryOperatorInput>;
    readonly preview: Maybe<StringQueryOperatorInput>;
    readonly original: Maybe<StringQueryOperatorInput>;
    readonly timestamp: Maybe<IntQueryOperatorInput>;
    readonly dimensions: Maybe<InstaNodeDimensionsFilterInput>;
    readonly comments: Maybe<IntQueryOperatorInput>;
    readonly localFile: Maybe<FileFilterInput>;
  };

  type InstaNodeGroupConnection = {
    readonly totalCount: Scalars['Int'];
    readonly edges: ReadonlyArray<InstaNodeEdge>;
    readonly nodes: ReadonlyArray<InstaNode>;
    readonly pageInfo: PageInfo;
    readonly field: Scalars['String'];
    readonly fieldValue: Maybe<Scalars['String']>;
  };

  type InstaNodeSortInput = {
    readonly fields: Maybe<ReadonlyArray<Maybe<InstaNodeFieldsEnum>>>;
    readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
  };

  type InstaNodeThumbnails = {
    readonly src: Maybe<Scalars['String']>;
    readonly config_width: Maybe<Scalars['Int']>;
    readonly config_height: Maybe<Scalars['Int']>;
  };

  type InstaNodeThumbnailsFilterInput = {
    readonly src: Maybe<StringQueryOperatorInput>;
    readonly config_width: Maybe<IntQueryOperatorInput>;
    readonly config_height: Maybe<IntQueryOperatorInput>;
  };

  type InstaNodeThumbnailsFilterListInput = {
    readonly elemMatch: Maybe<InstaNodeThumbnailsFilterInput>;
  };

  type Internal = {
    readonly content: Maybe<Scalars['String']>;
    readonly contentDigest: Scalars['String'];
    readonly description: Maybe<Scalars['String']>;
    readonly fieldOwners: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
    readonly ignoreType: Maybe<Scalars['Boolean']>;
    readonly mediaType: Maybe<Scalars['String']>;
    readonly owner: Scalars['String'];
    readonly type: Scalars['String'];
  };

  type InternalFilterInput = {
    readonly content: Maybe<StringQueryOperatorInput>;
    readonly contentDigest: Maybe<StringQueryOperatorInput>;
    readonly description: Maybe<StringQueryOperatorInput>;
    readonly fieldOwners: Maybe<StringQueryOperatorInput>;
    readonly ignoreType: Maybe<BooleanQueryOperatorInput>;
    readonly mediaType: Maybe<StringQueryOperatorInput>;
    readonly owner: Maybe<StringQueryOperatorInput>;
    readonly type: Maybe<StringQueryOperatorInput>;
  };

  type IntQueryOperatorInput = {
    readonly eq: Maybe<Scalars['Int']>;
    readonly ne: Maybe<Scalars['Int']>;
    readonly gt: Maybe<Scalars['Int']>;
    readonly gte: Maybe<Scalars['Int']>;
    readonly lt: Maybe<Scalars['Int']>;
    readonly lte: Maybe<Scalars['Int']>;
    readonly in: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
    readonly nin: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
  };

  type JPGOptions = {
    readonly quality: Maybe<Scalars['Int']>;
    readonly progressive: Maybe<Scalars['Boolean']>;
  };

  type JSONQueryOperatorInput = {
    readonly eq: Maybe<Scalars['JSON']>;
    readonly ne: Maybe<Scalars['JSON']>;
    readonly in: Maybe<ReadonlyArray<Maybe<Scalars['JSON']>>>;
    readonly nin: Maybe<ReadonlyArray<Maybe<Scalars['JSON']>>>;
    readonly regex: Maybe<Scalars['JSON']>;
    readonly glob: Maybe<Scalars['JSON']>;
  };

  type Mdx = Node & {
    readonly rawBody: Scalars['String'];
    readonly fileAbsolutePath: Scalars['String'];
    readonly frontmatter: Maybe<MdxFrontmatter>;
    readonly slug: Maybe<Scalars['String']>;
    readonly body: Scalars['String'];
    readonly excerpt: Scalars['String'];
    readonly headings: Maybe<ReadonlyArray<Maybe<MdxHeadingMdx>>>;
    readonly html: Maybe<Scalars['String']>;
    readonly mdxAST: Maybe<Scalars['JSON']>;
    readonly tableOfContents: Maybe<Scalars['JSON']>;
    readonly timeToRead: Maybe<Scalars['Int']>;
    readonly wordCount: Maybe<MdxWordCount>;
    readonly fields: Maybe<MdxFields>;
    readonly id: Scalars['ID'];
    readonly parent: Maybe<Node>;
    readonly children: ReadonlyArray<Node>;
    readonly internal: Internal;
  };

  type Mdx_excerptArgs = {
    pruneLength?: Maybe<Scalars['Int']>;
    truncate?: Maybe<Scalars['Boolean']>;
  };

  type Mdx_headingsArgs = {
    depth: Maybe<HeadingsMdx>;
  };

  type Mdx_tableOfContentsArgs = {
    maxDepth: Maybe<Scalars['Int']>;
  };

  type MdxConnection = {
    readonly totalCount: Scalars['Int'];
    readonly edges: ReadonlyArray<MdxEdge>;
    readonly nodes: ReadonlyArray<Mdx>;
    readonly pageInfo: PageInfo;
    readonly distinct: ReadonlyArray<Scalars['String']>;
    readonly group: ReadonlyArray<MdxGroupConnection>;
  };

  type MdxConnection_distinctArgs = {
    field: MdxFieldsEnum;
  };

  type MdxConnection_groupArgs = {
    skip: Maybe<Scalars['Int']>;
    limit: Maybe<Scalars['Int']>;
    field: MdxFieldsEnum;
  };

  type MdxEdge = {
    readonly next: Maybe<Mdx>;
    readonly node: Mdx;
    readonly previous: Maybe<Mdx>;
  };

  type MdxFields = {
    readonly readingTime: Maybe<MdxFieldsReadingTime>;
    readonly slug: Maybe<Scalars['String']>;
    readonly blogPath: Maybe<Scalars['String']>;
  };

  enum MdxFieldsEnum {
    rawBody = 'rawBody',
    fileAbsolutePath = 'fileAbsolutePath',
    frontmatter___title = 'frontmatter.title',
    frontmatter___categories = 'frontmatter.categories',
    frontmatter___date = 'frontmatter.date',
    frontmatter___coverImage___sourceInstanceName = 'frontmatter.coverImage.sourceInstanceName',
    frontmatter___coverImage___absolutePath = 'frontmatter.coverImage.absolutePath',
    frontmatter___coverImage___relativePath = 'frontmatter.coverImage.relativePath',
    frontmatter___coverImage___extension = 'frontmatter.coverImage.extension',
    frontmatter___coverImage___size = 'frontmatter.coverImage.size',
    frontmatter___coverImage___prettySize = 'frontmatter.coverImage.prettySize',
    frontmatter___coverImage___modifiedTime = 'frontmatter.coverImage.modifiedTime',
    frontmatter___coverImage___accessTime = 'frontmatter.coverImage.accessTime',
    frontmatter___coverImage___changeTime = 'frontmatter.coverImage.changeTime',
    frontmatter___coverImage___birthTime = 'frontmatter.coverImage.birthTime',
    frontmatter___coverImage___root = 'frontmatter.coverImage.root',
    frontmatter___coverImage___dir = 'frontmatter.coverImage.dir',
    frontmatter___coverImage___base = 'frontmatter.coverImage.base',
    frontmatter___coverImage___ext = 'frontmatter.coverImage.ext',
    frontmatter___coverImage___name = 'frontmatter.coverImage.name',
    frontmatter___coverImage___relativeDirectory = 'frontmatter.coverImage.relativeDirectory',
    frontmatter___coverImage___dev = 'frontmatter.coverImage.dev',
    frontmatter___coverImage___mode = 'frontmatter.coverImage.mode',
    frontmatter___coverImage___nlink = 'frontmatter.coverImage.nlink',
    frontmatter___coverImage___uid = 'frontmatter.coverImage.uid',
    frontmatter___coverImage___gid = 'frontmatter.coverImage.gid',
    frontmatter___coverImage___rdev = 'frontmatter.coverImage.rdev',
    frontmatter___coverImage___ino = 'frontmatter.coverImage.ino',
    frontmatter___coverImage___atimeMs = 'frontmatter.coverImage.atimeMs',
    frontmatter___coverImage___mtimeMs = 'frontmatter.coverImage.mtimeMs',
    frontmatter___coverImage___ctimeMs = 'frontmatter.coverImage.ctimeMs',
    frontmatter___coverImage___atime = 'frontmatter.coverImage.atime',
    frontmatter___coverImage___mtime = 'frontmatter.coverImage.mtime',
    frontmatter___coverImage___ctime = 'frontmatter.coverImage.ctime',
    frontmatter___coverImage___birthtime = 'frontmatter.coverImage.birthtime',
    frontmatter___coverImage___birthtimeMs = 'frontmatter.coverImage.birthtimeMs',
    frontmatter___coverImage___blksize = 'frontmatter.coverImage.blksize',
    frontmatter___coverImage___blocks = 'frontmatter.coverImage.blocks',
    frontmatter___coverImage___url = 'frontmatter.coverImage.url',
    frontmatter___coverImage___publicURL = 'frontmatter.coverImage.publicURL',
    frontmatter___coverImage___childImageSharp___gatsbyImageData = 'frontmatter.coverImage.childImageSharp.gatsbyImageData',
    frontmatter___coverImage___childImageSharp___id = 'frontmatter.coverImage.childImageSharp.id',
    frontmatter___coverImage___childImageSharp___children = 'frontmatter.coverImage.childImageSharp.children',
    frontmatter___coverImage___id = 'frontmatter.coverImage.id',
    frontmatter___coverImage___parent___id = 'frontmatter.coverImage.parent.id',
    frontmatter___coverImage___parent___children = 'frontmatter.coverImage.parent.children',
    frontmatter___coverImage___children = 'frontmatter.coverImage.children',
    frontmatter___coverImage___children___id = 'frontmatter.coverImage.children.id',
    frontmatter___coverImage___children___children = 'frontmatter.coverImage.children.children',
    frontmatter___coverImage___internal___content = 'frontmatter.coverImage.internal.content',
    frontmatter___coverImage___internal___contentDigest = 'frontmatter.coverImage.internal.contentDigest',
    frontmatter___coverImage___internal___description = 'frontmatter.coverImage.internal.description',
    frontmatter___coverImage___internal___fieldOwners = 'frontmatter.coverImage.internal.fieldOwners',
    frontmatter___coverImage___internal___ignoreType = 'frontmatter.coverImage.internal.ignoreType',
    frontmatter___coverImage___internal___mediaType = 'frontmatter.coverImage.internal.mediaType',
    frontmatter___coverImage___internal___owner = 'frontmatter.coverImage.internal.owner',
    frontmatter___coverImage___internal___type = 'frontmatter.coverImage.internal.type',
    frontmatter___coverImage___childDataJson___id = 'frontmatter.coverImage.childDataJson.id',
    frontmatter___coverImage___childDataJson___children = 'frontmatter.coverImage.childDataJson.children',
    frontmatter___coverImage___childDataJson___content = 'frontmatter.coverImage.childDataJson.content',
    frontmatter___coverImage___childDataJson___password = 'frontmatter.coverImage.childDataJson.password',
    frontmatter___coverImage___childMdx___rawBody = 'frontmatter.coverImage.childMdx.rawBody',
    frontmatter___coverImage___childMdx___fileAbsolutePath = 'frontmatter.coverImage.childMdx.fileAbsolutePath',
    frontmatter___coverImage___childMdx___slug = 'frontmatter.coverImage.childMdx.slug',
    frontmatter___coverImage___childMdx___body = 'frontmatter.coverImage.childMdx.body',
    frontmatter___coverImage___childMdx___excerpt = 'frontmatter.coverImage.childMdx.excerpt',
    frontmatter___coverImage___childMdx___headings = 'frontmatter.coverImage.childMdx.headings',
    frontmatter___coverImage___childMdx___html = 'frontmatter.coverImage.childMdx.html',
    frontmatter___coverImage___childMdx___mdxAST = 'frontmatter.coverImage.childMdx.mdxAST',
    frontmatter___coverImage___childMdx___tableOfContents = 'frontmatter.coverImage.childMdx.tableOfContents',
    frontmatter___coverImage___childMdx___timeToRead = 'frontmatter.coverImage.childMdx.timeToRead',
    frontmatter___coverImage___childMdx___id = 'frontmatter.coverImage.childMdx.id',
    frontmatter___coverImage___childMdx___children = 'frontmatter.coverImage.childMdx.children',
    frontmatter___bottomGallery = 'frontmatter.bottomGallery',
    frontmatter___bottomGallery___blogName = 'frontmatter.bottomGallery.blogName',
    frontmatter___bottomGallery___image___sourceInstanceName = 'frontmatter.bottomGallery.image.sourceInstanceName',
    frontmatter___bottomGallery___image___absolutePath = 'frontmatter.bottomGallery.image.absolutePath',
    frontmatter___bottomGallery___image___relativePath = 'frontmatter.bottomGallery.image.relativePath',
    frontmatter___bottomGallery___image___extension = 'frontmatter.bottomGallery.image.extension',
    frontmatter___bottomGallery___image___size = 'frontmatter.bottomGallery.image.size',
    frontmatter___bottomGallery___image___prettySize = 'frontmatter.bottomGallery.image.prettySize',
    frontmatter___bottomGallery___image___modifiedTime = 'frontmatter.bottomGallery.image.modifiedTime',
    frontmatter___bottomGallery___image___accessTime = 'frontmatter.bottomGallery.image.accessTime',
    frontmatter___bottomGallery___image___changeTime = 'frontmatter.bottomGallery.image.changeTime',
    frontmatter___bottomGallery___image___birthTime = 'frontmatter.bottomGallery.image.birthTime',
    frontmatter___bottomGallery___image___root = 'frontmatter.bottomGallery.image.root',
    frontmatter___bottomGallery___image___dir = 'frontmatter.bottomGallery.image.dir',
    frontmatter___bottomGallery___image___base = 'frontmatter.bottomGallery.image.base',
    frontmatter___bottomGallery___image___ext = 'frontmatter.bottomGallery.image.ext',
    frontmatter___bottomGallery___image___name = 'frontmatter.bottomGallery.image.name',
    frontmatter___bottomGallery___image___relativeDirectory = 'frontmatter.bottomGallery.image.relativeDirectory',
    frontmatter___bottomGallery___image___dev = 'frontmatter.bottomGallery.image.dev',
    frontmatter___bottomGallery___image___mode = 'frontmatter.bottomGallery.image.mode',
    frontmatter___bottomGallery___image___nlink = 'frontmatter.bottomGallery.image.nlink',
    frontmatter___bottomGallery___image___uid = 'frontmatter.bottomGallery.image.uid',
    frontmatter___bottomGallery___image___gid = 'frontmatter.bottomGallery.image.gid',
    frontmatter___bottomGallery___image___rdev = 'frontmatter.bottomGallery.image.rdev',
    frontmatter___bottomGallery___image___ino = 'frontmatter.bottomGallery.image.ino',
    frontmatter___bottomGallery___image___atimeMs = 'frontmatter.bottomGallery.image.atimeMs',
    frontmatter___bottomGallery___image___mtimeMs = 'frontmatter.bottomGallery.image.mtimeMs',
    frontmatter___bottomGallery___image___ctimeMs = 'frontmatter.bottomGallery.image.ctimeMs',
    frontmatter___bottomGallery___image___atime = 'frontmatter.bottomGallery.image.atime',
    frontmatter___bottomGallery___image___mtime = 'frontmatter.bottomGallery.image.mtime',
    frontmatter___bottomGallery___image___ctime = 'frontmatter.bottomGallery.image.ctime',
    frontmatter___bottomGallery___image___birthtime = 'frontmatter.bottomGallery.image.birthtime',
    frontmatter___bottomGallery___image___birthtimeMs = 'frontmatter.bottomGallery.image.birthtimeMs',
    frontmatter___bottomGallery___image___blksize = 'frontmatter.bottomGallery.image.blksize',
    frontmatter___bottomGallery___image___blocks = 'frontmatter.bottomGallery.image.blocks',
    frontmatter___bottomGallery___image___url = 'frontmatter.bottomGallery.image.url',
    frontmatter___bottomGallery___image___publicURL = 'frontmatter.bottomGallery.image.publicURL',
    frontmatter___bottomGallery___image___id = 'frontmatter.bottomGallery.image.id',
    frontmatter___bottomGallery___image___children = 'frontmatter.bottomGallery.image.children',
    slug = 'slug',
    body = 'body',
    excerpt = 'excerpt',
    headings = 'headings',
    headings___value = 'headings.value',
    headings___depth = 'headings.depth',
    html = 'html',
    mdxAST = 'mdxAST',
    tableOfContents = 'tableOfContents',
    timeToRead = 'timeToRead',
    wordCount___paragraphs = 'wordCount.paragraphs',
    wordCount___sentences = 'wordCount.sentences',
    wordCount___words = 'wordCount.words',
    fields___readingTime___text = 'fields.readingTime.text',
    fields___readingTime___minutes = 'fields.readingTime.minutes',
    fields___readingTime___time = 'fields.readingTime.time',
    fields___readingTime___words = 'fields.readingTime.words',
    fields___slug = 'fields.slug',
    fields___blogPath = 'fields.blogPath',
    id = 'id',
    parent___id = 'parent.id',
    parent___parent___id = 'parent.parent.id',
    parent___parent___parent___id = 'parent.parent.parent.id',
    parent___parent___parent___children = 'parent.parent.parent.children',
    parent___parent___children = 'parent.parent.children',
    parent___parent___children___id = 'parent.parent.children.id',
    parent___parent___children___children = 'parent.parent.children.children',
    parent___parent___internal___content = 'parent.parent.internal.content',
    parent___parent___internal___contentDigest = 'parent.parent.internal.contentDigest',
    parent___parent___internal___description = 'parent.parent.internal.description',
    parent___parent___internal___fieldOwners = 'parent.parent.internal.fieldOwners',
    parent___parent___internal___ignoreType = 'parent.parent.internal.ignoreType',
    parent___parent___internal___mediaType = 'parent.parent.internal.mediaType',
    parent___parent___internal___owner = 'parent.parent.internal.owner',
    parent___parent___internal___type = 'parent.parent.internal.type',
    parent___children = 'parent.children',
    parent___children___id = 'parent.children.id',
    parent___children___parent___id = 'parent.children.parent.id',
    parent___children___parent___children = 'parent.children.parent.children',
    parent___children___children = 'parent.children.children',
    parent___children___children___id = 'parent.children.children.id',
    parent___children___children___children = 'parent.children.children.children',
    parent___children___internal___content = 'parent.children.internal.content',
    parent___children___internal___contentDigest = 'parent.children.internal.contentDigest',
    parent___children___internal___description = 'parent.children.internal.description',
    parent___children___internal___fieldOwners = 'parent.children.internal.fieldOwners',
    parent___children___internal___ignoreType = 'parent.children.internal.ignoreType',
    parent___children___internal___mediaType = 'parent.children.internal.mediaType',
    parent___children___internal___owner = 'parent.children.internal.owner',
    parent___children___internal___type = 'parent.children.internal.type',
    parent___internal___content = 'parent.internal.content',
    parent___internal___contentDigest = 'parent.internal.contentDigest',
    parent___internal___description = 'parent.internal.description',
    parent___internal___fieldOwners = 'parent.internal.fieldOwners',
    parent___internal___ignoreType = 'parent.internal.ignoreType',
    parent___internal___mediaType = 'parent.internal.mediaType',
    parent___internal___owner = 'parent.internal.owner',
    parent___internal___type = 'parent.internal.type',
    children = 'children',
    children___id = 'children.id',
    children___parent___id = 'children.parent.id',
    children___parent___parent___id = 'children.parent.parent.id',
    children___parent___parent___children = 'children.parent.parent.children',
    children___parent___children = 'children.parent.children',
    children___parent___children___id = 'children.parent.children.id',
    children___parent___children___children = 'children.parent.children.children',
    children___parent___internal___content = 'children.parent.internal.content',
    children___parent___internal___contentDigest = 'children.parent.internal.contentDigest',
    children___parent___internal___description = 'children.parent.internal.description',
    children___parent___internal___fieldOwners = 'children.parent.internal.fieldOwners',
    children___parent___internal___ignoreType = 'children.parent.internal.ignoreType',
    children___parent___internal___mediaType = 'children.parent.internal.mediaType',
    children___parent___internal___owner = 'children.parent.internal.owner',
    children___parent___internal___type = 'children.parent.internal.type',
    children___children = 'children.children',
    children___children___id = 'children.children.id',
    children___children___parent___id = 'children.children.parent.id',
    children___children___parent___children = 'children.children.parent.children',
    children___children___children = 'children.children.children',
    children___children___children___id = 'children.children.children.id',
    children___children___children___children = 'children.children.children.children',
    children___children___internal___content = 'children.children.internal.content',
    children___children___internal___contentDigest = 'children.children.internal.contentDigest',
    children___children___internal___description = 'children.children.internal.description',
    children___children___internal___fieldOwners = 'children.children.internal.fieldOwners',
    children___children___internal___ignoreType = 'children.children.internal.ignoreType',
    children___children___internal___mediaType = 'children.children.internal.mediaType',
    children___children___internal___owner = 'children.children.internal.owner',
    children___children___internal___type = 'children.children.internal.type',
    children___internal___content = 'children.internal.content',
    children___internal___contentDigest = 'children.internal.contentDigest',
    children___internal___description = 'children.internal.description',
    children___internal___fieldOwners = 'children.internal.fieldOwners',
    children___internal___ignoreType = 'children.internal.ignoreType',
    children___internal___mediaType = 'children.internal.mediaType',
    children___internal___owner = 'children.internal.owner',
    children___internal___type = 'children.internal.type',
    internal___content = 'internal.content',
    internal___contentDigest = 'internal.contentDigest',
    internal___description = 'internal.description',
    internal___fieldOwners = 'internal.fieldOwners',
    internal___ignoreType = 'internal.ignoreType',
    internal___mediaType = 'internal.mediaType',
    internal___owner = 'internal.owner',
    internal___type = 'internal.type',
  }

  type MdxFieldsFilterInput = {
    readonly readingTime: Maybe<MdxFieldsReadingTimeFilterInput>;
    readonly slug: Maybe<StringQueryOperatorInput>;
    readonly blogPath: Maybe<StringQueryOperatorInput>;
  };

  type MdxFieldsReadingTime = {
    readonly text: Maybe<Scalars['String']>;
    readonly minutes: Maybe<Scalars['Float']>;
    readonly time: Maybe<Scalars['Float']>;
    readonly words: Maybe<Scalars['Int']>;
  };

  type MdxFieldsReadingTimeFilterInput = {
    readonly text: Maybe<StringQueryOperatorInput>;
    readonly minutes: Maybe<FloatQueryOperatorInput>;
    readonly time: Maybe<FloatQueryOperatorInput>;
    readonly words: Maybe<IntQueryOperatorInput>;
  };

  type MdxFilterInput = {
    readonly rawBody: Maybe<StringQueryOperatorInput>;
    readonly fileAbsolutePath: Maybe<StringQueryOperatorInput>;
    readonly frontmatter: Maybe<MdxFrontmatterFilterInput>;
    readonly slug: Maybe<StringQueryOperatorInput>;
    readonly body: Maybe<StringQueryOperatorInput>;
    readonly excerpt: Maybe<StringQueryOperatorInput>;
    readonly headings: Maybe<MdxHeadingMdxFilterListInput>;
    readonly html: Maybe<StringQueryOperatorInput>;
    readonly mdxAST: Maybe<JSONQueryOperatorInput>;
    readonly tableOfContents: Maybe<JSONQueryOperatorInput>;
    readonly timeToRead: Maybe<IntQueryOperatorInput>;
    readonly wordCount: Maybe<MdxWordCountFilterInput>;
    readonly fields: Maybe<MdxFieldsFilterInput>;
    readonly id: Maybe<StringQueryOperatorInput>;
    readonly parent: Maybe<NodeFilterInput>;
    readonly children: Maybe<NodeFilterListInput>;
    readonly internal: Maybe<InternalFilterInput>;
  };

  type MdxFrontmatter = {
    readonly title: Scalars['String'];
    readonly categories: Maybe<ReadonlyArray<Scalars['String']>>;
    readonly date: Maybe<Scalars['Date']>;
    readonly coverImage: Maybe<File>;
    readonly bottomGallery: Maybe<ReadonlyArray<Maybe<MdxFrontmatterBottomGallery>>>;
  };

  type MdxFrontmatter_dateArgs = {
    formatString: Maybe<Scalars['String']>;
    fromNow: Maybe<Scalars['Boolean']>;
    difference: Maybe<Scalars['String']>;
    locale: Maybe<Scalars['String']>;
  };

  type MdxFrontmatterBottomGallery = {
    readonly blogName: Maybe<Scalars['String']>;
    readonly image: Maybe<File>;
  };

  type MdxFrontmatterBottomGalleryFilterInput = {
    readonly blogName: Maybe<StringQueryOperatorInput>;
    readonly image: Maybe<FileFilterInput>;
  };

  type MdxFrontmatterBottomGalleryFilterListInput = {
    readonly elemMatch: Maybe<MdxFrontmatterBottomGalleryFilterInput>;
  };

  type MdxFrontmatterFilterInput = {
    readonly title: Maybe<StringQueryOperatorInput>;
    readonly categories: Maybe<StringQueryOperatorInput>;
    readonly date: Maybe<DateQueryOperatorInput>;
    readonly coverImage: Maybe<FileFilterInput>;
    readonly bottomGallery: Maybe<MdxFrontmatterBottomGalleryFilterListInput>;
  };

  type MdxGroupConnection = {
    readonly totalCount: Scalars['Int'];
    readonly edges: ReadonlyArray<MdxEdge>;
    readonly nodes: ReadonlyArray<Mdx>;
    readonly pageInfo: PageInfo;
    readonly field: Scalars['String'];
    readonly fieldValue: Maybe<Scalars['String']>;
  };

  type MdxHeadingMdx = {
    readonly value: Maybe<Scalars['String']>;
    readonly depth: Maybe<Scalars['Int']>;
  };

  type MdxHeadingMdxFilterInput = {
    readonly value: Maybe<StringQueryOperatorInput>;
    readonly depth: Maybe<IntQueryOperatorInput>;
  };

  type MdxHeadingMdxFilterListInput = {
    readonly elemMatch: Maybe<MdxHeadingMdxFilterInput>;
  };

  type MdxSortInput = {
    readonly fields: Maybe<ReadonlyArray<Maybe<MdxFieldsEnum>>>;
    readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
  };

  type MdxWordCount = {
    readonly paragraphs: Maybe<Scalars['Int']>;
    readonly sentences: Maybe<Scalars['Int']>;
    readonly words: Maybe<Scalars['Int']>;
  };

  type MdxWordCountFilterInput = {
    readonly paragraphs: Maybe<IntQueryOperatorInput>;
    readonly sentences: Maybe<IntQueryOperatorInput>;
    readonly words: Maybe<IntQueryOperatorInput>;
  };

  /** Node Interface */
  type Node = {
    readonly id: Scalars['ID'];
    readonly parent: Maybe<Node>;
    readonly children: ReadonlyArray<Node>;
    readonly internal: Internal;
  };

  type NodeFilterInput = {
    readonly id: Maybe<StringQueryOperatorInput>;
    readonly parent: Maybe<NodeFilterInput>;
    readonly children: Maybe<NodeFilterListInput>;
    readonly internal: Maybe<InternalFilterInput>;
  };

  type NodeFilterListInput = {
    readonly elemMatch: Maybe<NodeFilterInput>;
  };

  type PageInfo = {
    readonly currentPage: Scalars['Int'];
    readonly hasPreviousPage: Scalars['Boolean'];
    readonly hasNextPage: Scalars['Boolean'];
    readonly itemCount: Scalars['Int'];
    readonly pageCount: Scalars['Int'];
    readonly perPage: Maybe<Scalars['Int']>;
    readonly totalCount: Scalars['Int'];
  };

  type PNGOptions = {
    readonly quality: Maybe<Scalars['Int']>;
    readonly compressionSpeed: Maybe<Scalars['Int']>;
  };

  type Potrace = {
    readonly turnPolicy: Maybe<PotraceTurnPolicy>;
    readonly turdSize: Maybe<Scalars['Float']>;
    readonly alphaMax: Maybe<Scalars['Float']>;
    readonly optCurve: Maybe<Scalars['Boolean']>;
    readonly optTolerance: Maybe<Scalars['Float']>;
    readonly threshold: Maybe<Scalars['Int']>;
    readonly blackOnWhite: Maybe<Scalars['Boolean']>;
    readonly color: Maybe<Scalars['String']>;
    readonly background: Maybe<Scalars['String']>;
  };

  enum PotraceTurnPolicy {
    TURNPOLICY_BLACK = 'black',
    TURNPOLICY_WHITE = 'white',
    TURNPOLICY_LEFT = 'left',
    TURNPOLICY_RIGHT = 'right',
    TURNPOLICY_MINORITY = 'minority',
    TURNPOLICY_MAJORITY = 'majority',
  }

  type Query = {
    readonly file: Maybe<File>;
    readonly allFile: FileConnection;
    readonly directory: Maybe<Directory>;
    readonly allDirectory: DirectoryConnection;
    readonly site: Maybe<Site>;
    readonly allSite: SiteConnection;
    readonly sitePage: Maybe<SitePage>;
    readonly allSitePage: SitePageConnection;
    readonly imageSharp: Maybe<ImageSharp>;
    readonly allImageSharp: ImageSharpConnection;
    readonly mdx: Maybe<Mdx>;
    readonly allMdx: MdxConnection;
    readonly instaNode: Maybe<InstaNode>;
    readonly allInstaNode: InstaNodeConnection;
    readonly dataJson: Maybe<DataJson>;
    readonly allDataJson: DataJsonConnection;
    readonly siteBuildMetadata: Maybe<SiteBuildMetadata>;
    readonly allSiteBuildMetadata: SiteBuildMetadataConnection;
    readonly sitePlugin: Maybe<SitePlugin>;
    readonly allSitePlugin: SitePluginConnection;
  };

  type Query_fileArgs = {
    sourceInstanceName: Maybe<StringQueryOperatorInput>;
    absolutePath: Maybe<StringQueryOperatorInput>;
    relativePath: Maybe<StringQueryOperatorInput>;
    extension: Maybe<StringQueryOperatorInput>;
    size: Maybe<IntQueryOperatorInput>;
    prettySize: Maybe<StringQueryOperatorInput>;
    modifiedTime: Maybe<DateQueryOperatorInput>;
    accessTime: Maybe<DateQueryOperatorInput>;
    changeTime: Maybe<DateQueryOperatorInput>;
    birthTime: Maybe<DateQueryOperatorInput>;
    root: Maybe<StringQueryOperatorInput>;
    dir: Maybe<StringQueryOperatorInput>;
    base: Maybe<StringQueryOperatorInput>;
    ext: Maybe<StringQueryOperatorInput>;
    name: Maybe<StringQueryOperatorInput>;
    relativeDirectory: Maybe<StringQueryOperatorInput>;
    dev: Maybe<IntQueryOperatorInput>;
    mode: Maybe<IntQueryOperatorInput>;
    nlink: Maybe<IntQueryOperatorInput>;
    uid: Maybe<IntQueryOperatorInput>;
    gid: Maybe<IntQueryOperatorInput>;
    rdev: Maybe<IntQueryOperatorInput>;
    ino: Maybe<FloatQueryOperatorInput>;
    atimeMs: Maybe<FloatQueryOperatorInput>;
    mtimeMs: Maybe<FloatQueryOperatorInput>;
    ctimeMs: Maybe<FloatQueryOperatorInput>;
    atime: Maybe<DateQueryOperatorInput>;
    mtime: Maybe<DateQueryOperatorInput>;
    ctime: Maybe<DateQueryOperatorInput>;
    birthtime: Maybe<DateQueryOperatorInput>;
    birthtimeMs: Maybe<FloatQueryOperatorInput>;
    blksize: Maybe<IntQueryOperatorInput>;
    blocks: Maybe<IntQueryOperatorInput>;
    url: Maybe<StringQueryOperatorInput>;
    publicURL: Maybe<StringQueryOperatorInput>;
    childImageSharp: Maybe<ImageSharpFilterInput>;
    id: Maybe<StringQueryOperatorInput>;
    parent: Maybe<NodeFilterInput>;
    children: Maybe<NodeFilterListInput>;
    internal: Maybe<InternalFilterInput>;
    childDataJson: Maybe<DataJsonFilterInput>;
    childMdx: Maybe<MdxFilterInput>;
  };

  type Query_allFileArgs = {
    filter: Maybe<FileFilterInput>;
    sort: Maybe<FileSortInput>;
    skip: Maybe<Scalars['Int']>;
    limit: Maybe<Scalars['Int']>;
  };

  type Query_directoryArgs = {
    sourceInstanceName: Maybe<StringQueryOperatorInput>;
    absolutePath: Maybe<StringQueryOperatorInput>;
    relativePath: Maybe<StringQueryOperatorInput>;
    extension: Maybe<StringQueryOperatorInput>;
    size: Maybe<IntQueryOperatorInput>;
    prettySize: Maybe<StringQueryOperatorInput>;
    modifiedTime: Maybe<DateQueryOperatorInput>;
    accessTime: Maybe<DateQueryOperatorInput>;
    changeTime: Maybe<DateQueryOperatorInput>;
    birthTime: Maybe<DateQueryOperatorInput>;
    root: Maybe<StringQueryOperatorInput>;
    dir: Maybe<StringQueryOperatorInput>;
    base: Maybe<StringQueryOperatorInput>;
    ext: Maybe<StringQueryOperatorInput>;
    name: Maybe<StringQueryOperatorInput>;
    relativeDirectory: Maybe<StringQueryOperatorInput>;
    dev: Maybe<IntQueryOperatorInput>;
    mode: Maybe<IntQueryOperatorInput>;
    nlink: Maybe<IntQueryOperatorInput>;
    uid: Maybe<IntQueryOperatorInput>;
    gid: Maybe<IntQueryOperatorInput>;
    rdev: Maybe<IntQueryOperatorInput>;
    ino: Maybe<FloatQueryOperatorInput>;
    atimeMs: Maybe<FloatQueryOperatorInput>;
    mtimeMs: Maybe<FloatQueryOperatorInput>;
    ctimeMs: Maybe<FloatQueryOperatorInput>;
    atime: Maybe<DateQueryOperatorInput>;
    mtime: Maybe<DateQueryOperatorInput>;
    ctime: Maybe<DateQueryOperatorInput>;
    birthtime: Maybe<DateQueryOperatorInput>;
    birthtimeMs: Maybe<FloatQueryOperatorInput>;
    blksize: Maybe<IntQueryOperatorInput>;
    blocks: Maybe<IntQueryOperatorInput>;
    id: Maybe<StringQueryOperatorInput>;
    parent: Maybe<NodeFilterInput>;
    children: Maybe<NodeFilterListInput>;
    internal: Maybe<InternalFilterInput>;
  };

  type Query_allDirectoryArgs = {
    filter: Maybe<DirectoryFilterInput>;
    sort: Maybe<DirectorySortInput>;
    skip: Maybe<Scalars['Int']>;
    limit: Maybe<Scalars['Int']>;
  };

  type Query_siteArgs = {
    buildTime: Maybe<DateQueryOperatorInput>;
    siteMetadata: Maybe<SiteSiteMetadataFilterInput>;
    port: Maybe<IntQueryOperatorInput>;
    host: Maybe<StringQueryOperatorInput>;
    polyfill: Maybe<BooleanQueryOperatorInput>;
    pathPrefix: Maybe<StringQueryOperatorInput>;
    id: Maybe<StringQueryOperatorInput>;
    parent: Maybe<NodeFilterInput>;
    children: Maybe<NodeFilterListInput>;
    internal: Maybe<InternalFilterInput>;
  };

  type Query_allSiteArgs = {
    filter: Maybe<SiteFilterInput>;
    sort: Maybe<SiteSortInput>;
    skip: Maybe<Scalars['Int']>;
    limit: Maybe<Scalars['Int']>;
  };

  type Query_sitePageArgs = {
    path: Maybe<StringQueryOperatorInput>;
    component: Maybe<StringQueryOperatorInput>;
    internalComponentName: Maybe<StringQueryOperatorInput>;
    componentChunkName: Maybe<StringQueryOperatorInput>;
    matchPath: Maybe<StringQueryOperatorInput>;
    id: Maybe<StringQueryOperatorInput>;
    parent: Maybe<NodeFilterInput>;
    children: Maybe<NodeFilterListInput>;
    internal: Maybe<InternalFilterInput>;
    isCreatedByStatefulCreatePages: Maybe<BooleanQueryOperatorInput>;
    context: Maybe<SitePageContextFilterInput>;
    pluginCreator: Maybe<SitePluginFilterInput>;
    pluginCreatorId: Maybe<StringQueryOperatorInput>;
    componentPath: Maybe<StringQueryOperatorInput>;
  };

  type Query_allSitePageArgs = {
    filter: Maybe<SitePageFilterInput>;
    sort: Maybe<SitePageSortInput>;
    skip: Maybe<Scalars['Int']>;
    limit: Maybe<Scalars['Int']>;
  };

  type Query_imageSharpArgs = {
    fixed: Maybe<ImageSharpFixedFilterInput>;
    resolutions: Maybe<ImageSharpResolutionsFilterInput>;
    fluid: Maybe<ImageSharpFluidFilterInput>;
    sizes: Maybe<ImageSharpSizesFilterInput>;
    gatsbyImageData: Maybe<JSONQueryOperatorInput>;
    original: Maybe<ImageSharpOriginalFilterInput>;
    resize: Maybe<ImageSharpResizeFilterInput>;
    id: Maybe<StringQueryOperatorInput>;
    parent: Maybe<NodeFilterInput>;
    children: Maybe<NodeFilterListInput>;
    internal: Maybe<InternalFilterInput>;
  };

  type Query_allImageSharpArgs = {
    filter: Maybe<ImageSharpFilterInput>;
    sort: Maybe<ImageSharpSortInput>;
    skip: Maybe<Scalars['Int']>;
    limit: Maybe<Scalars['Int']>;
  };

  type Query_mdxArgs = {
    rawBody: Maybe<StringQueryOperatorInput>;
    fileAbsolutePath: Maybe<StringQueryOperatorInput>;
    frontmatter: Maybe<MdxFrontmatterFilterInput>;
    slug: Maybe<StringQueryOperatorInput>;
    body: Maybe<StringQueryOperatorInput>;
    excerpt: Maybe<StringQueryOperatorInput>;
    headings: Maybe<MdxHeadingMdxFilterListInput>;
    html: Maybe<StringQueryOperatorInput>;
    mdxAST: Maybe<JSONQueryOperatorInput>;
    tableOfContents: Maybe<JSONQueryOperatorInput>;
    timeToRead: Maybe<IntQueryOperatorInput>;
    wordCount: Maybe<MdxWordCountFilterInput>;
    fields: Maybe<MdxFieldsFilterInput>;
    id: Maybe<StringQueryOperatorInput>;
    parent: Maybe<NodeFilterInput>;
    children: Maybe<NodeFilterListInput>;
    internal: Maybe<InternalFilterInput>;
  };

  type Query_allMdxArgs = {
    filter: Maybe<MdxFilterInput>;
    sort: Maybe<MdxSortInput>;
    skip: Maybe<Scalars['Int']>;
    limit: Maybe<Scalars['Int']>;
  };

  type Query_instaNodeArgs = {
    id: Maybe<StringQueryOperatorInput>;
    parent: Maybe<NodeFilterInput>;
    children: Maybe<NodeFilterListInput>;
    internal: Maybe<InternalFilterInput>;
    type: Maybe<StringQueryOperatorInput>;
    username: Maybe<StringQueryOperatorInput>;
    likes: Maybe<IntQueryOperatorInput>;
    caption: Maybe<StringQueryOperatorInput>;
    thumbnails: Maybe<InstaNodeThumbnailsFilterListInput>;
    mediaType: Maybe<StringQueryOperatorInput>;
    preview: Maybe<StringQueryOperatorInput>;
    original: Maybe<StringQueryOperatorInput>;
    timestamp: Maybe<IntQueryOperatorInput>;
    dimensions: Maybe<InstaNodeDimensionsFilterInput>;
    comments: Maybe<IntQueryOperatorInput>;
    localFile: Maybe<FileFilterInput>;
  };

  type Query_allInstaNodeArgs = {
    filter: Maybe<InstaNodeFilterInput>;
    sort: Maybe<InstaNodeSortInput>;
    skip: Maybe<Scalars['Int']>;
    limit: Maybe<Scalars['Int']>;
  };

  type Query_dataJsonArgs = {
    id: Maybe<StringQueryOperatorInput>;
    parent: Maybe<NodeFilterInput>;
    children: Maybe<NodeFilterListInput>;
    internal: Maybe<InternalFilterInput>;
    content: Maybe<DataJsonContentFilterListInput>;
    password: Maybe<StringQueryOperatorInput>;
  };

  type Query_allDataJsonArgs = {
    filter: Maybe<DataJsonFilterInput>;
    sort: Maybe<DataJsonSortInput>;
    skip: Maybe<Scalars['Int']>;
    limit: Maybe<Scalars['Int']>;
  };

  type Query_siteBuildMetadataArgs = {
    id: Maybe<StringQueryOperatorInput>;
    parent: Maybe<NodeFilterInput>;
    children: Maybe<NodeFilterListInput>;
    internal: Maybe<InternalFilterInput>;
    buildTime: Maybe<DateQueryOperatorInput>;
  };

  type Query_allSiteBuildMetadataArgs = {
    filter: Maybe<SiteBuildMetadataFilterInput>;
    sort: Maybe<SiteBuildMetadataSortInput>;
    skip: Maybe<Scalars['Int']>;
    limit: Maybe<Scalars['Int']>;
  };

  type Query_sitePluginArgs = {
    id: Maybe<StringQueryOperatorInput>;
    parent: Maybe<NodeFilterInput>;
    children: Maybe<NodeFilterListInput>;
    internal: Maybe<InternalFilterInput>;
    resolve: Maybe<StringQueryOperatorInput>;
    name: Maybe<StringQueryOperatorInput>;
    version: Maybe<StringQueryOperatorInput>;
    pluginOptions: Maybe<SitePluginPluginOptionsFilterInput>;
    nodeAPIs: Maybe<StringQueryOperatorInput>;
    browserAPIs: Maybe<StringQueryOperatorInput>;
    ssrAPIs: Maybe<StringQueryOperatorInput>;
    pluginFilepath: Maybe<StringQueryOperatorInput>;
    packageJson: Maybe<SitePluginPackageJsonFilterInput>;
  };

  type Query_allSitePluginArgs = {
    filter: Maybe<SitePluginFilterInput>;
    sort: Maybe<SitePluginSortInput>;
    skip: Maybe<Scalars['Int']>;
    limit: Maybe<Scalars['Int']>;
  };

  type Site = Node & {
    readonly buildTime: Maybe<Scalars['Date']>;
    readonly siteMetadata: Maybe<SiteSiteMetadata>;
    readonly port: Maybe<Scalars['Int']>;
    readonly host: Maybe<Scalars['String']>;
    readonly polyfill: Maybe<Scalars['Boolean']>;
    readonly pathPrefix: Maybe<Scalars['String']>;
    readonly id: Scalars['ID'];
    readonly parent: Maybe<Node>;
    readonly children: ReadonlyArray<Node>;
    readonly internal: Internal;
  };

  type Site_buildTimeArgs = {
    formatString: Maybe<Scalars['String']>;
    fromNow: Maybe<Scalars['Boolean']>;
    difference: Maybe<Scalars['String']>;
    locale: Maybe<Scalars['String']>;
  };

  type SiteBuildMetadata = Node & {
    readonly id: Scalars['ID'];
    readonly parent: Maybe<Node>;
    readonly children: ReadonlyArray<Node>;
    readonly internal: Internal;
    readonly buildTime: Maybe<Scalars['Date']>;
  };

  type SiteBuildMetadata_buildTimeArgs = {
    formatString: Maybe<Scalars['String']>;
    fromNow: Maybe<Scalars['Boolean']>;
    difference: Maybe<Scalars['String']>;
    locale: Maybe<Scalars['String']>;
  };

  type SiteBuildMetadataConnection = {
    readonly totalCount: Scalars['Int'];
    readonly edges: ReadonlyArray<SiteBuildMetadataEdge>;
    readonly nodes: ReadonlyArray<SiteBuildMetadata>;
    readonly pageInfo: PageInfo;
    readonly distinct: ReadonlyArray<Scalars['String']>;
    readonly group: ReadonlyArray<SiteBuildMetadataGroupConnection>;
  };

  type SiteBuildMetadataConnection_distinctArgs = {
    field: SiteBuildMetadataFieldsEnum;
  };

  type SiteBuildMetadataConnection_groupArgs = {
    skip: Maybe<Scalars['Int']>;
    limit: Maybe<Scalars['Int']>;
    field: SiteBuildMetadataFieldsEnum;
  };

  type SiteBuildMetadataEdge = {
    readonly next: Maybe<SiteBuildMetadata>;
    readonly node: SiteBuildMetadata;
    readonly previous: Maybe<SiteBuildMetadata>;
  };

  enum SiteBuildMetadataFieldsEnum {
    id = 'id',
    parent___id = 'parent.id',
    parent___parent___id = 'parent.parent.id',
    parent___parent___parent___id = 'parent.parent.parent.id',
    parent___parent___parent___children = 'parent.parent.parent.children',
    parent___parent___children = 'parent.parent.children',
    parent___parent___children___id = 'parent.parent.children.id',
    parent___parent___children___children = 'parent.parent.children.children',
    parent___parent___internal___content = 'parent.parent.internal.content',
    parent___parent___internal___contentDigest = 'parent.parent.internal.contentDigest',
    parent___parent___internal___description = 'parent.parent.internal.description',
    parent___parent___internal___fieldOwners = 'parent.parent.internal.fieldOwners',
    parent___parent___internal___ignoreType = 'parent.parent.internal.ignoreType',
    parent___parent___internal___mediaType = 'parent.parent.internal.mediaType',
    parent___parent___internal___owner = 'parent.parent.internal.owner',
    parent___parent___internal___type = 'parent.parent.internal.type',
    parent___children = 'parent.children',
    parent___children___id = 'parent.children.id',
    parent___children___parent___id = 'parent.children.parent.id',
    parent___children___parent___children = 'parent.children.parent.children',
    parent___children___children = 'parent.children.children',
    parent___children___children___id = 'parent.children.children.id',
    parent___children___children___children = 'parent.children.children.children',
    parent___children___internal___content = 'parent.children.internal.content',
    parent___children___internal___contentDigest = 'parent.children.internal.contentDigest',
    parent___children___internal___description = 'parent.children.internal.description',
    parent___children___internal___fieldOwners = 'parent.children.internal.fieldOwners',
    parent___children___internal___ignoreType = 'parent.children.internal.ignoreType',
    parent___children___internal___mediaType = 'parent.children.internal.mediaType',
    parent___children___internal___owner = 'parent.children.internal.owner',
    parent___children___internal___type = 'parent.children.internal.type',
    parent___internal___content = 'parent.internal.content',
    parent___internal___contentDigest = 'parent.internal.contentDigest',
    parent___internal___description = 'parent.internal.description',
    parent___internal___fieldOwners = 'parent.internal.fieldOwners',
    parent___internal___ignoreType = 'parent.internal.ignoreType',
    parent___internal___mediaType = 'parent.internal.mediaType',
    parent___internal___owner = 'parent.internal.owner',
    parent___internal___type = 'parent.internal.type',
    children = 'children',
    children___id = 'children.id',
    children___parent___id = 'children.parent.id',
    children___parent___parent___id = 'children.parent.parent.id',
    children___parent___parent___children = 'children.parent.parent.children',
    children___parent___children = 'children.parent.children',
    children___parent___children___id = 'children.parent.children.id',
    children___parent___children___children = 'children.parent.children.children',
    children___parent___internal___content = 'children.parent.internal.content',
    children___parent___internal___contentDigest = 'children.parent.internal.contentDigest',
    children___parent___internal___description = 'children.parent.internal.description',
    children___parent___internal___fieldOwners = 'children.parent.internal.fieldOwners',
    children___parent___internal___ignoreType = 'children.parent.internal.ignoreType',
    children___parent___internal___mediaType = 'children.parent.internal.mediaType',
    children___parent___internal___owner = 'children.parent.internal.owner',
    children___parent___internal___type = 'children.parent.internal.type',
    children___children = 'children.children',
    children___children___id = 'children.children.id',
    children___children___parent___id = 'children.children.parent.id',
    children___children___parent___children = 'children.children.parent.children',
    children___children___children = 'children.children.children',
    children___children___children___id = 'children.children.children.id',
    children___children___children___children = 'children.children.children.children',
    children___children___internal___content = 'children.children.internal.content',
    children___children___internal___contentDigest = 'children.children.internal.contentDigest',
    children___children___internal___description = 'children.children.internal.description',
    children___children___internal___fieldOwners = 'children.children.internal.fieldOwners',
    children___children___internal___ignoreType = 'children.children.internal.ignoreType',
    children___children___internal___mediaType = 'children.children.internal.mediaType',
    children___children___internal___owner = 'children.children.internal.owner',
    children___children___internal___type = 'children.children.internal.type',
    children___internal___content = 'children.internal.content',
    children___internal___contentDigest = 'children.internal.contentDigest',
    children___internal___description = 'children.internal.description',
    children___internal___fieldOwners = 'children.internal.fieldOwners',
    children___internal___ignoreType = 'children.internal.ignoreType',
    children___internal___mediaType = 'children.internal.mediaType',
    children___internal___owner = 'children.internal.owner',
    children___internal___type = 'children.internal.type',
    internal___content = 'internal.content',
    internal___contentDigest = 'internal.contentDigest',
    internal___description = 'internal.description',
    internal___fieldOwners = 'internal.fieldOwners',
    internal___ignoreType = 'internal.ignoreType',
    internal___mediaType = 'internal.mediaType',
    internal___owner = 'internal.owner',
    internal___type = 'internal.type',
    buildTime = 'buildTime',
  }

  type SiteBuildMetadataFilterInput = {
    readonly id: Maybe<StringQueryOperatorInput>;
    readonly parent: Maybe<NodeFilterInput>;
    readonly children: Maybe<NodeFilterListInput>;
    readonly internal: Maybe<InternalFilterInput>;
    readonly buildTime: Maybe<DateQueryOperatorInput>;
  };

  type SiteBuildMetadataGroupConnection = {
    readonly totalCount: Scalars['Int'];
    readonly edges: ReadonlyArray<SiteBuildMetadataEdge>;
    readonly nodes: ReadonlyArray<SiteBuildMetadata>;
    readonly pageInfo: PageInfo;
    readonly field: Scalars['String'];
    readonly fieldValue: Maybe<Scalars['String']>;
  };

  type SiteBuildMetadataSortInput = {
    readonly fields: Maybe<ReadonlyArray<Maybe<SiteBuildMetadataFieldsEnum>>>;
    readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
  };

  type SiteConnection = {
    readonly totalCount: Scalars['Int'];
    readonly edges: ReadonlyArray<SiteEdge>;
    readonly nodes: ReadonlyArray<Site>;
    readonly pageInfo: PageInfo;
    readonly distinct: ReadonlyArray<Scalars['String']>;
    readonly group: ReadonlyArray<SiteGroupConnection>;
  };

  type SiteConnection_distinctArgs = {
    field: SiteFieldsEnum;
  };

  type SiteConnection_groupArgs = {
    skip: Maybe<Scalars['Int']>;
    limit: Maybe<Scalars['Int']>;
    field: SiteFieldsEnum;
  };

  type SiteEdge = {
    readonly next: Maybe<Site>;
    readonly node: Site;
    readonly previous: Maybe<Site>;
  };

  enum SiteFieldsEnum {
    buildTime = 'buildTime',
    siteMetadata___title = 'siteMetadata.title',
    siteMetadata___description = 'siteMetadata.description',
    siteMetadata___siteUrl = 'siteMetadata.siteUrl',
    siteMetadata___author = 'siteMetadata.author',
    port = 'port',
    host = 'host',
    polyfill = 'polyfill',
    pathPrefix = 'pathPrefix',
    id = 'id',
    parent___id = 'parent.id',
    parent___parent___id = 'parent.parent.id',
    parent___parent___parent___id = 'parent.parent.parent.id',
    parent___parent___parent___children = 'parent.parent.parent.children',
    parent___parent___children = 'parent.parent.children',
    parent___parent___children___id = 'parent.parent.children.id',
    parent___parent___children___children = 'parent.parent.children.children',
    parent___parent___internal___content = 'parent.parent.internal.content',
    parent___parent___internal___contentDigest = 'parent.parent.internal.contentDigest',
    parent___parent___internal___description = 'parent.parent.internal.description',
    parent___parent___internal___fieldOwners = 'parent.parent.internal.fieldOwners',
    parent___parent___internal___ignoreType = 'parent.parent.internal.ignoreType',
    parent___parent___internal___mediaType = 'parent.parent.internal.mediaType',
    parent___parent___internal___owner = 'parent.parent.internal.owner',
    parent___parent___internal___type = 'parent.parent.internal.type',
    parent___children = 'parent.children',
    parent___children___id = 'parent.children.id',
    parent___children___parent___id = 'parent.children.parent.id',
    parent___children___parent___children = 'parent.children.parent.children',
    parent___children___children = 'parent.children.children',
    parent___children___children___id = 'parent.children.children.id',
    parent___children___children___children = 'parent.children.children.children',
    parent___children___internal___content = 'parent.children.internal.content',
    parent___children___internal___contentDigest = 'parent.children.internal.contentDigest',
    parent___children___internal___description = 'parent.children.internal.description',
    parent___children___internal___fieldOwners = 'parent.children.internal.fieldOwners',
    parent___children___internal___ignoreType = 'parent.children.internal.ignoreType',
    parent___children___internal___mediaType = 'parent.children.internal.mediaType',
    parent___children___internal___owner = 'parent.children.internal.owner',
    parent___children___internal___type = 'parent.children.internal.type',
    parent___internal___content = 'parent.internal.content',
    parent___internal___contentDigest = 'parent.internal.contentDigest',
    parent___internal___description = 'parent.internal.description',
    parent___internal___fieldOwners = 'parent.internal.fieldOwners',
    parent___internal___ignoreType = 'parent.internal.ignoreType',
    parent___internal___mediaType = 'parent.internal.mediaType',
    parent___internal___owner = 'parent.internal.owner',
    parent___internal___type = 'parent.internal.type',
    children = 'children',
    children___id = 'children.id',
    children___parent___id = 'children.parent.id',
    children___parent___parent___id = 'children.parent.parent.id',
    children___parent___parent___children = 'children.parent.parent.children',
    children___parent___children = 'children.parent.children',
    children___parent___children___id = 'children.parent.children.id',
    children___parent___children___children = 'children.parent.children.children',
    children___parent___internal___content = 'children.parent.internal.content',
    children___parent___internal___contentDigest = 'children.parent.internal.contentDigest',
    children___parent___internal___description = 'children.parent.internal.description',
    children___parent___internal___fieldOwners = 'children.parent.internal.fieldOwners',
    children___parent___internal___ignoreType = 'children.parent.internal.ignoreType',
    children___parent___internal___mediaType = 'children.parent.internal.mediaType',
    children___parent___internal___owner = 'children.parent.internal.owner',
    children___parent___internal___type = 'children.parent.internal.type',
    children___children = 'children.children',
    children___children___id = 'children.children.id',
    children___children___parent___id = 'children.children.parent.id',
    children___children___parent___children = 'children.children.parent.children',
    children___children___children = 'children.children.children',
    children___children___children___id = 'children.children.children.id',
    children___children___children___children = 'children.children.children.children',
    children___children___internal___content = 'children.children.internal.content',
    children___children___internal___contentDigest = 'children.children.internal.contentDigest',
    children___children___internal___description = 'children.children.internal.description',
    children___children___internal___fieldOwners = 'children.children.internal.fieldOwners',
    children___children___internal___ignoreType = 'children.children.internal.ignoreType',
    children___children___internal___mediaType = 'children.children.internal.mediaType',
    children___children___internal___owner = 'children.children.internal.owner',
    children___children___internal___type = 'children.children.internal.type',
    children___internal___content = 'children.internal.content',
    children___internal___contentDigest = 'children.internal.contentDigest',
    children___internal___description = 'children.internal.description',
    children___internal___fieldOwners = 'children.internal.fieldOwners',
    children___internal___ignoreType = 'children.internal.ignoreType',
    children___internal___mediaType = 'children.internal.mediaType',
    children___internal___owner = 'children.internal.owner',
    children___internal___type = 'children.internal.type',
    internal___content = 'internal.content',
    internal___contentDigest = 'internal.contentDigest',
    internal___description = 'internal.description',
    internal___fieldOwners = 'internal.fieldOwners',
    internal___ignoreType = 'internal.ignoreType',
    internal___mediaType = 'internal.mediaType',
    internal___owner = 'internal.owner',
    internal___type = 'internal.type',
  }

  type SiteFilterInput = {
    readonly buildTime: Maybe<DateQueryOperatorInput>;
    readonly siteMetadata: Maybe<SiteSiteMetadataFilterInput>;
    readonly port: Maybe<IntQueryOperatorInput>;
    readonly host: Maybe<StringQueryOperatorInput>;
    readonly polyfill: Maybe<BooleanQueryOperatorInput>;
    readonly pathPrefix: Maybe<StringQueryOperatorInput>;
    readonly id: Maybe<StringQueryOperatorInput>;
    readonly parent: Maybe<NodeFilterInput>;
    readonly children: Maybe<NodeFilterListInput>;
    readonly internal: Maybe<InternalFilterInput>;
  };

  type SiteGroupConnection = {
    readonly totalCount: Scalars['Int'];
    readonly edges: ReadonlyArray<SiteEdge>;
    readonly nodes: ReadonlyArray<Site>;
    readonly pageInfo: PageInfo;
    readonly field: Scalars['String'];
    readonly fieldValue: Maybe<Scalars['String']>;
  };

  type SitePage = Node & {
    readonly path: Scalars['String'];
    readonly component: Scalars['String'];
    readonly internalComponentName: Scalars['String'];
    readonly componentChunkName: Scalars['String'];
    readonly matchPath: Maybe<Scalars['String']>;
    readonly id: Scalars['ID'];
    readonly parent: Maybe<Node>;
    readonly children: ReadonlyArray<Node>;
    readonly internal: Internal;
    readonly isCreatedByStatefulCreatePages: Maybe<Scalars['Boolean']>;
    readonly context: Maybe<SitePageContext>;
    readonly pluginCreator: Maybe<SitePlugin>;
    readonly pluginCreatorId: Maybe<Scalars['String']>;
    readonly componentPath: Maybe<Scalars['String']>;
  };

  type SitePageConnection = {
    readonly totalCount: Scalars['Int'];
    readonly edges: ReadonlyArray<SitePageEdge>;
    readonly nodes: ReadonlyArray<SitePage>;
    readonly pageInfo: PageInfo;
    readonly distinct: ReadonlyArray<Scalars['String']>;
    readonly group: ReadonlyArray<SitePageGroupConnection>;
  };

  type SitePageConnection_distinctArgs = {
    field: SitePageFieldsEnum;
  };

  type SitePageConnection_groupArgs = {
    skip: Maybe<Scalars['Int']>;
    limit: Maybe<Scalars['Int']>;
    field: SitePageFieldsEnum;
  };

  type SitePageContext = {
    readonly id: Maybe<Scalars['String']>;
    readonly slug: Maybe<Scalars['String']>;
    readonly blogPath: Maybe<Scalars['String']>;
    readonly previous: Maybe<SitePageContextPrevious>;
    readonly next: Maybe<SitePageContextNext>;
    readonly category: Maybe<Scalars['String']>;
  };

  type SitePageContextFilterInput = {
    readonly id: Maybe<StringQueryOperatorInput>;
    readonly slug: Maybe<StringQueryOperatorInput>;
    readonly blogPath: Maybe<StringQueryOperatorInput>;
    readonly previous: Maybe<SitePageContextPreviousFilterInput>;
    readonly next: Maybe<SitePageContextNextFilterInput>;
    readonly category: Maybe<StringQueryOperatorInput>;
  };

  type SitePageContextNext = {
    readonly id: Maybe<Scalars['String']>;
    readonly fields: Maybe<SitePageContextNextFields>;
    readonly frontmatter: Maybe<SitePageContextNextFrontmatter>;
  };

  type SitePageContextNextFields = {
    readonly blogPath: Maybe<Scalars['String']>;
    readonly slug: Maybe<Scalars['String']>;
  };

  type SitePageContextNextFieldsFilterInput = {
    readonly blogPath: Maybe<StringQueryOperatorInput>;
    readonly slug: Maybe<StringQueryOperatorInput>;
  };

  type SitePageContextNextFilterInput = {
    readonly id: Maybe<StringQueryOperatorInput>;
    readonly fields: Maybe<SitePageContextNextFieldsFilterInput>;
    readonly frontmatter: Maybe<SitePageContextNextFrontmatterFilterInput>;
  };

  type SitePageContextNextFrontmatter = {
    readonly title: Maybe<Scalars['String']>;
    readonly categories: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  };

  type SitePageContextNextFrontmatterFilterInput = {
    readonly title: Maybe<StringQueryOperatorInput>;
    readonly categories: Maybe<StringQueryOperatorInput>;
  };

  type SitePageContextPrevious = {
    readonly id: Maybe<Scalars['String']>;
    readonly fields: Maybe<SitePageContextPreviousFields>;
    readonly frontmatter: Maybe<SitePageContextPreviousFrontmatter>;
  };

  type SitePageContextPreviousFields = {
    readonly blogPath: Maybe<Scalars['String']>;
    readonly slug: Maybe<Scalars['String']>;
  };

  type SitePageContextPreviousFieldsFilterInput = {
    readonly blogPath: Maybe<StringQueryOperatorInput>;
    readonly slug: Maybe<StringQueryOperatorInput>;
  };

  type SitePageContextPreviousFilterInput = {
    readonly id: Maybe<StringQueryOperatorInput>;
    readonly fields: Maybe<SitePageContextPreviousFieldsFilterInput>;
    readonly frontmatter: Maybe<SitePageContextPreviousFrontmatterFilterInput>;
  };

  type SitePageContextPreviousFrontmatter = {
    readonly title: Maybe<Scalars['String']>;
    readonly categories: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  };

  type SitePageContextPreviousFrontmatterFilterInput = {
    readonly title: Maybe<StringQueryOperatorInput>;
    readonly categories: Maybe<StringQueryOperatorInput>;
  };

  type SitePageEdge = {
    readonly next: Maybe<SitePage>;
    readonly node: SitePage;
    readonly previous: Maybe<SitePage>;
  };

  enum SitePageFieldsEnum {
    path = 'path',
    component = 'component',
    internalComponentName = 'internalComponentName',
    componentChunkName = 'componentChunkName',
    matchPath = 'matchPath',
    id = 'id',
    parent___id = 'parent.id',
    parent___parent___id = 'parent.parent.id',
    parent___parent___parent___id = 'parent.parent.parent.id',
    parent___parent___parent___children = 'parent.parent.parent.children',
    parent___parent___children = 'parent.parent.children',
    parent___parent___children___id = 'parent.parent.children.id',
    parent___parent___children___children = 'parent.parent.children.children',
    parent___parent___internal___content = 'parent.parent.internal.content',
    parent___parent___internal___contentDigest = 'parent.parent.internal.contentDigest',
    parent___parent___internal___description = 'parent.parent.internal.description',
    parent___parent___internal___fieldOwners = 'parent.parent.internal.fieldOwners',
    parent___parent___internal___ignoreType = 'parent.parent.internal.ignoreType',
    parent___parent___internal___mediaType = 'parent.parent.internal.mediaType',
    parent___parent___internal___owner = 'parent.parent.internal.owner',
    parent___parent___internal___type = 'parent.parent.internal.type',
    parent___children = 'parent.children',
    parent___children___id = 'parent.children.id',
    parent___children___parent___id = 'parent.children.parent.id',
    parent___children___parent___children = 'parent.children.parent.children',
    parent___children___children = 'parent.children.children',
    parent___children___children___id = 'parent.children.children.id',
    parent___children___children___children = 'parent.children.children.children',
    parent___children___internal___content = 'parent.children.internal.content',
    parent___children___internal___contentDigest = 'parent.children.internal.contentDigest',
    parent___children___internal___description = 'parent.children.internal.description',
    parent___children___internal___fieldOwners = 'parent.children.internal.fieldOwners',
    parent___children___internal___ignoreType = 'parent.children.internal.ignoreType',
    parent___children___internal___mediaType = 'parent.children.internal.mediaType',
    parent___children___internal___owner = 'parent.children.internal.owner',
    parent___children___internal___type = 'parent.children.internal.type',
    parent___internal___content = 'parent.internal.content',
    parent___internal___contentDigest = 'parent.internal.contentDigest',
    parent___internal___description = 'parent.internal.description',
    parent___internal___fieldOwners = 'parent.internal.fieldOwners',
    parent___internal___ignoreType = 'parent.internal.ignoreType',
    parent___internal___mediaType = 'parent.internal.mediaType',
    parent___internal___owner = 'parent.internal.owner',
    parent___internal___type = 'parent.internal.type',
    children = 'children',
    children___id = 'children.id',
    children___parent___id = 'children.parent.id',
    children___parent___parent___id = 'children.parent.parent.id',
    children___parent___parent___children = 'children.parent.parent.children',
    children___parent___children = 'children.parent.children',
    children___parent___children___id = 'children.parent.children.id',
    children___parent___children___children = 'children.parent.children.children',
    children___parent___internal___content = 'children.parent.internal.content',
    children___parent___internal___contentDigest = 'children.parent.internal.contentDigest',
    children___parent___internal___description = 'children.parent.internal.description',
    children___parent___internal___fieldOwners = 'children.parent.internal.fieldOwners',
    children___parent___internal___ignoreType = 'children.parent.internal.ignoreType',
    children___parent___internal___mediaType = 'children.parent.internal.mediaType',
    children___parent___internal___owner = 'children.parent.internal.owner',
    children___parent___internal___type = 'children.parent.internal.type',
    children___children = 'children.children',
    children___children___id = 'children.children.id',
    children___children___parent___id = 'children.children.parent.id',
    children___children___parent___children = 'children.children.parent.children',
    children___children___children = 'children.children.children',
    children___children___children___id = 'children.children.children.id',
    children___children___children___children = 'children.children.children.children',
    children___children___internal___content = 'children.children.internal.content',
    children___children___internal___contentDigest = 'children.children.internal.contentDigest',
    children___children___internal___description = 'children.children.internal.description',
    children___children___internal___fieldOwners = 'children.children.internal.fieldOwners',
    children___children___internal___ignoreType = 'children.children.internal.ignoreType',
    children___children___internal___mediaType = 'children.children.internal.mediaType',
    children___children___internal___owner = 'children.children.internal.owner',
    children___children___internal___type = 'children.children.internal.type',
    children___internal___content = 'children.internal.content',
    children___internal___contentDigest = 'children.internal.contentDigest',
    children___internal___description = 'children.internal.description',
    children___internal___fieldOwners = 'children.internal.fieldOwners',
    children___internal___ignoreType = 'children.internal.ignoreType',
    children___internal___mediaType = 'children.internal.mediaType',
    children___internal___owner = 'children.internal.owner',
    children___internal___type = 'children.internal.type',
    internal___content = 'internal.content',
    internal___contentDigest = 'internal.contentDigest',
    internal___description = 'internal.description',
    internal___fieldOwners = 'internal.fieldOwners',
    internal___ignoreType = 'internal.ignoreType',
    internal___mediaType = 'internal.mediaType',
    internal___owner = 'internal.owner',
    internal___type = 'internal.type',
    isCreatedByStatefulCreatePages = 'isCreatedByStatefulCreatePages',
    context___id = 'context.id',
    context___slug = 'context.slug',
    context___blogPath = 'context.blogPath',
    context___previous___id = 'context.previous.id',
    context___previous___fields___blogPath = 'context.previous.fields.blogPath',
    context___previous___fields___slug = 'context.previous.fields.slug',
    context___previous___frontmatter___title = 'context.previous.frontmatter.title',
    context___previous___frontmatter___categories = 'context.previous.frontmatter.categories',
    context___next___id = 'context.next.id',
    context___next___fields___blogPath = 'context.next.fields.blogPath',
    context___next___fields___slug = 'context.next.fields.slug',
    context___next___frontmatter___title = 'context.next.frontmatter.title',
    context___next___frontmatter___categories = 'context.next.frontmatter.categories',
    context___category = 'context.category',
    pluginCreator___id = 'pluginCreator.id',
    pluginCreator___parent___id = 'pluginCreator.parent.id',
    pluginCreator___parent___parent___id = 'pluginCreator.parent.parent.id',
    pluginCreator___parent___parent___children = 'pluginCreator.parent.parent.children',
    pluginCreator___parent___children = 'pluginCreator.parent.children',
    pluginCreator___parent___children___id = 'pluginCreator.parent.children.id',
    pluginCreator___parent___children___children = 'pluginCreator.parent.children.children',
    pluginCreator___parent___internal___content = 'pluginCreator.parent.internal.content',
    pluginCreator___parent___internal___contentDigest = 'pluginCreator.parent.internal.contentDigest',
    pluginCreator___parent___internal___description = 'pluginCreator.parent.internal.description',
    pluginCreator___parent___internal___fieldOwners = 'pluginCreator.parent.internal.fieldOwners',
    pluginCreator___parent___internal___ignoreType = 'pluginCreator.parent.internal.ignoreType',
    pluginCreator___parent___internal___mediaType = 'pluginCreator.parent.internal.mediaType',
    pluginCreator___parent___internal___owner = 'pluginCreator.parent.internal.owner',
    pluginCreator___parent___internal___type = 'pluginCreator.parent.internal.type',
    pluginCreator___children = 'pluginCreator.children',
    pluginCreator___children___id = 'pluginCreator.children.id',
    pluginCreator___children___parent___id = 'pluginCreator.children.parent.id',
    pluginCreator___children___parent___children = 'pluginCreator.children.parent.children',
    pluginCreator___children___children = 'pluginCreator.children.children',
    pluginCreator___children___children___id = 'pluginCreator.children.children.id',
    pluginCreator___children___children___children = 'pluginCreator.children.children.children',
    pluginCreator___children___internal___content = 'pluginCreator.children.internal.content',
    pluginCreator___children___internal___contentDigest = 'pluginCreator.children.internal.contentDigest',
    pluginCreator___children___internal___description = 'pluginCreator.children.internal.description',
    pluginCreator___children___internal___fieldOwners = 'pluginCreator.children.internal.fieldOwners',
    pluginCreator___children___internal___ignoreType = 'pluginCreator.children.internal.ignoreType',
    pluginCreator___children___internal___mediaType = 'pluginCreator.children.internal.mediaType',
    pluginCreator___children___internal___owner = 'pluginCreator.children.internal.owner',
    pluginCreator___children___internal___type = 'pluginCreator.children.internal.type',
    pluginCreator___internal___content = 'pluginCreator.internal.content',
    pluginCreator___internal___contentDigest = 'pluginCreator.internal.contentDigest',
    pluginCreator___internal___description = 'pluginCreator.internal.description',
    pluginCreator___internal___fieldOwners = 'pluginCreator.internal.fieldOwners',
    pluginCreator___internal___ignoreType = 'pluginCreator.internal.ignoreType',
    pluginCreator___internal___mediaType = 'pluginCreator.internal.mediaType',
    pluginCreator___internal___owner = 'pluginCreator.internal.owner',
    pluginCreator___internal___type = 'pluginCreator.internal.type',
    pluginCreator___resolve = 'pluginCreator.resolve',
    pluginCreator___name = 'pluginCreator.name',
    pluginCreator___version = 'pluginCreator.version',
    pluginCreator___pluginOptions___plugins = 'pluginCreator.pluginOptions.plugins',
    pluginCreator___pluginOptions___plugins___resolve = 'pluginCreator.pluginOptions.plugins.resolve',
    pluginCreator___pluginOptions___plugins___id = 'pluginCreator.pluginOptions.plugins.id',
    pluginCreator___pluginOptions___plugins___name = 'pluginCreator.pluginOptions.plugins.name',
    pluginCreator___pluginOptions___plugins___version = 'pluginCreator.pluginOptions.plugins.version',
    pluginCreator___pluginOptions___plugins___nodeAPIs = 'pluginCreator.pluginOptions.plugins.nodeAPIs',
    pluginCreator___pluginOptions___plugins___browserAPIs = 'pluginCreator.pluginOptions.plugins.browserAPIs',
    pluginCreator___pluginOptions___plugins___pluginFilepath = 'pluginCreator.pluginOptions.plugins.pluginFilepath',
    pluginCreator___pluginOptions___policy = 'pluginCreator.pluginOptions.policy',
    pluginCreator___pluginOptions___policy___userAgent = 'pluginCreator.pluginOptions.policy.userAgent',
    pluginCreator___pluginOptions___policy___allow = 'pluginCreator.pluginOptions.policy.allow',
    pluginCreator___pluginOptions___name = 'pluginCreator.pluginOptions.name',
    pluginCreator___pluginOptions___short_name = 'pluginCreator.pluginOptions.short_name',
    pluginCreator___pluginOptions___start_url = 'pluginCreator.pluginOptions.start_url',
    pluginCreator___pluginOptions___background_color = 'pluginCreator.pluginOptions.background_color',
    pluginCreator___pluginOptions___theme_color = 'pluginCreator.pluginOptions.theme_color',
    pluginCreator___pluginOptions___display = 'pluginCreator.pluginOptions.display',
    pluginCreator___pluginOptions___icon = 'pluginCreator.pluginOptions.icon',
    pluginCreator___pluginOptions___legacy = 'pluginCreator.pluginOptions.legacy',
    pluginCreator___pluginOptions___theme_color_in_head = 'pluginCreator.pluginOptions.theme_color_in_head',
    pluginCreator___pluginOptions___cache_busting_mode = 'pluginCreator.pluginOptions.cache_busting_mode',
    pluginCreator___pluginOptions___crossOrigin = 'pluginCreator.pluginOptions.crossOrigin',
    pluginCreator___pluginOptions___include_favicon = 'pluginCreator.pluginOptions.include_favicon',
    pluginCreator___pluginOptions___cacheDigest = 'pluginCreator.pluginOptions.cacheDigest',
    pluginCreator___pluginOptions___path = 'pluginCreator.pluginOptions.path',
    pluginCreator___pluginOptions___base64Width = 'pluginCreator.pluginOptions.base64Width',
    pluginCreator___pluginOptions___stripMetadata = 'pluginCreator.pluginOptions.stripMetadata',
    pluginCreator___pluginOptions___defaultQuality = 'pluginCreator.pluginOptions.defaultQuality',
    pluginCreator___pluginOptions___failOnError = 'pluginCreator.pluginOptions.failOnError',
    pluginCreator___pluginOptions___extensions = 'pluginCreator.pluginOptions.extensions',
    pluginCreator___pluginOptions___lessBabel = 'pluginCreator.pluginOptions.lessBabel',
    pluginCreator___pluginOptions___mediaTypes = 'pluginCreator.pluginOptions.mediaTypes',
    pluginCreator___pluginOptions___maxWidth = 'pluginCreator.pluginOptions.maxWidth',
    pluginCreator___pluginOptions___linkImagesToOriginal = 'pluginCreator.pluginOptions.linkImagesToOriginal',
    pluginCreator___pluginOptions___showCaptions = 'pluginCreator.pluginOptions.showCaptions',
    pluginCreator___pluginOptions___markdownCaptions = 'pluginCreator.pluginOptions.markdownCaptions',
    pluginCreator___pluginOptions___sizeByPixelDensity = 'pluginCreator.pluginOptions.sizeByPixelDensity',
    pluginCreator___pluginOptions___backgroundColor = 'pluginCreator.pluginOptions.backgroundColor',
    pluginCreator___pluginOptions___quality = 'pluginCreator.pluginOptions.quality',
    pluginCreator___pluginOptions___withWebp = 'pluginCreator.pluginOptions.withWebp',
    pluginCreator___pluginOptions___tracedSVG = 'pluginCreator.pluginOptions.tracedSVG',
    pluginCreator___pluginOptions___loading = 'pluginCreator.pluginOptions.loading',
    pluginCreator___pluginOptions___disableBgImageOnAlpha = 'pluginCreator.pluginOptions.disableBgImageOnAlpha',
    pluginCreator___pluginOptions___disableBgImage = 'pluginCreator.pluginOptions.disableBgImage',
    pluginCreator___pluginOptions___saveButton___round = 'pluginCreator.pluginOptions.saveButton.round',
    pluginCreator___pluginOptions___saveButton___tall = 'pluginCreator.pluginOptions.saveButton.tall',
    pluginCreator___pluginOptions___username = 'pluginCreator.pluginOptions.username',
    pluginCreator___pluginOptions___isTSX = 'pluginCreator.pluginOptions.isTSX',
    pluginCreator___pluginOptions___jsxPragma = 'pluginCreator.pluginOptions.jsxPragma',
    pluginCreator___pluginOptions___allExtensions = 'pluginCreator.pluginOptions.allExtensions',
    pluginCreator___pluginOptions___pathCheck = 'pluginCreator.pluginOptions.pathCheck',
    pluginCreator___nodeAPIs = 'pluginCreator.nodeAPIs',
    pluginCreator___browserAPIs = 'pluginCreator.browserAPIs',
    pluginCreator___ssrAPIs = 'pluginCreator.ssrAPIs',
    pluginCreator___pluginFilepath = 'pluginCreator.pluginFilepath',
    pluginCreator___packageJson___name = 'pluginCreator.packageJson.name',
    pluginCreator___packageJson___description = 'pluginCreator.packageJson.description',
    pluginCreator___packageJson___version = 'pluginCreator.packageJson.version',
    pluginCreator___packageJson___main = 'pluginCreator.packageJson.main',
    pluginCreator___packageJson___license = 'pluginCreator.packageJson.license',
    pluginCreator___packageJson___dependencies = 'pluginCreator.packageJson.dependencies',
    pluginCreator___packageJson___dependencies___name = 'pluginCreator.packageJson.dependencies.name',
    pluginCreator___packageJson___dependencies___version = 'pluginCreator.packageJson.dependencies.version',
    pluginCreator___packageJson___devDependencies = 'pluginCreator.packageJson.devDependencies',
    pluginCreator___packageJson___devDependencies___name = 'pluginCreator.packageJson.devDependencies.name',
    pluginCreator___packageJson___devDependencies___version = 'pluginCreator.packageJson.devDependencies.version',
    pluginCreator___packageJson___peerDependencies = 'pluginCreator.packageJson.peerDependencies',
    pluginCreator___packageJson___peerDependencies___name = 'pluginCreator.packageJson.peerDependencies.name',
    pluginCreator___packageJson___peerDependencies___version = 'pluginCreator.packageJson.peerDependencies.version',
    pluginCreator___packageJson___keywords = 'pluginCreator.packageJson.keywords',
    pluginCreatorId = 'pluginCreatorId',
    componentPath = 'componentPath',
  }

  type SitePageFilterInput = {
    readonly path: Maybe<StringQueryOperatorInput>;
    readonly component: Maybe<StringQueryOperatorInput>;
    readonly internalComponentName: Maybe<StringQueryOperatorInput>;
    readonly componentChunkName: Maybe<StringQueryOperatorInput>;
    readonly matchPath: Maybe<StringQueryOperatorInput>;
    readonly id: Maybe<StringQueryOperatorInput>;
    readonly parent: Maybe<NodeFilterInput>;
    readonly children: Maybe<NodeFilterListInput>;
    readonly internal: Maybe<InternalFilterInput>;
    readonly isCreatedByStatefulCreatePages: Maybe<BooleanQueryOperatorInput>;
    readonly context: Maybe<SitePageContextFilterInput>;
    readonly pluginCreator: Maybe<SitePluginFilterInput>;
    readonly pluginCreatorId: Maybe<StringQueryOperatorInput>;
    readonly componentPath: Maybe<StringQueryOperatorInput>;
  };

  type SitePageGroupConnection = {
    readonly totalCount: Scalars['Int'];
    readonly edges: ReadonlyArray<SitePageEdge>;
    readonly nodes: ReadonlyArray<SitePage>;
    readonly pageInfo: PageInfo;
    readonly field: Scalars['String'];
    readonly fieldValue: Maybe<Scalars['String']>;
  };

  type SitePageSortInput = {
    readonly fields: Maybe<ReadonlyArray<Maybe<SitePageFieldsEnum>>>;
    readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
  };

  type SitePlugin = Node & {
    readonly id: Scalars['ID'];
    readonly parent: Maybe<Node>;
    readonly children: ReadonlyArray<Node>;
    readonly internal: Internal;
    readonly resolve: Maybe<Scalars['String']>;
    readonly name: Maybe<Scalars['String']>;
    readonly version: Maybe<Scalars['String']>;
    readonly pluginOptions: Maybe<SitePluginPluginOptions>;
    readonly nodeAPIs: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
    readonly browserAPIs: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
    readonly ssrAPIs: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
    readonly pluginFilepath: Maybe<Scalars['String']>;
    readonly packageJson: Maybe<SitePluginPackageJson>;
  };

  type SitePluginConnection = {
    readonly totalCount: Scalars['Int'];
    readonly edges: ReadonlyArray<SitePluginEdge>;
    readonly nodes: ReadonlyArray<SitePlugin>;
    readonly pageInfo: PageInfo;
    readonly distinct: ReadonlyArray<Scalars['String']>;
    readonly group: ReadonlyArray<SitePluginGroupConnection>;
  };

  type SitePluginConnection_distinctArgs = {
    field: SitePluginFieldsEnum;
  };

  type SitePluginConnection_groupArgs = {
    skip: Maybe<Scalars['Int']>;
    limit: Maybe<Scalars['Int']>;
    field: SitePluginFieldsEnum;
  };

  type SitePluginEdge = {
    readonly next: Maybe<SitePlugin>;
    readonly node: SitePlugin;
    readonly previous: Maybe<SitePlugin>;
  };

  enum SitePluginFieldsEnum {
    id = 'id',
    parent___id = 'parent.id',
    parent___parent___id = 'parent.parent.id',
    parent___parent___parent___id = 'parent.parent.parent.id',
    parent___parent___parent___children = 'parent.parent.parent.children',
    parent___parent___children = 'parent.parent.children',
    parent___parent___children___id = 'parent.parent.children.id',
    parent___parent___children___children = 'parent.parent.children.children',
    parent___parent___internal___content = 'parent.parent.internal.content',
    parent___parent___internal___contentDigest = 'parent.parent.internal.contentDigest',
    parent___parent___internal___description = 'parent.parent.internal.description',
    parent___parent___internal___fieldOwners = 'parent.parent.internal.fieldOwners',
    parent___parent___internal___ignoreType = 'parent.parent.internal.ignoreType',
    parent___parent___internal___mediaType = 'parent.parent.internal.mediaType',
    parent___parent___internal___owner = 'parent.parent.internal.owner',
    parent___parent___internal___type = 'parent.parent.internal.type',
    parent___children = 'parent.children',
    parent___children___id = 'parent.children.id',
    parent___children___parent___id = 'parent.children.parent.id',
    parent___children___parent___children = 'parent.children.parent.children',
    parent___children___children = 'parent.children.children',
    parent___children___children___id = 'parent.children.children.id',
    parent___children___children___children = 'parent.children.children.children',
    parent___children___internal___content = 'parent.children.internal.content',
    parent___children___internal___contentDigest = 'parent.children.internal.contentDigest',
    parent___children___internal___description = 'parent.children.internal.description',
    parent___children___internal___fieldOwners = 'parent.children.internal.fieldOwners',
    parent___children___internal___ignoreType = 'parent.children.internal.ignoreType',
    parent___children___internal___mediaType = 'parent.children.internal.mediaType',
    parent___children___internal___owner = 'parent.children.internal.owner',
    parent___children___internal___type = 'parent.children.internal.type',
    parent___internal___content = 'parent.internal.content',
    parent___internal___contentDigest = 'parent.internal.contentDigest',
    parent___internal___description = 'parent.internal.description',
    parent___internal___fieldOwners = 'parent.internal.fieldOwners',
    parent___internal___ignoreType = 'parent.internal.ignoreType',
    parent___internal___mediaType = 'parent.internal.mediaType',
    parent___internal___owner = 'parent.internal.owner',
    parent___internal___type = 'parent.internal.type',
    children = 'children',
    children___id = 'children.id',
    children___parent___id = 'children.parent.id',
    children___parent___parent___id = 'children.parent.parent.id',
    children___parent___parent___children = 'children.parent.parent.children',
    children___parent___children = 'children.parent.children',
    children___parent___children___id = 'children.parent.children.id',
    children___parent___children___children = 'children.parent.children.children',
    children___parent___internal___content = 'children.parent.internal.content',
    children___parent___internal___contentDigest = 'children.parent.internal.contentDigest',
    children___parent___internal___description = 'children.parent.internal.description',
    children___parent___internal___fieldOwners = 'children.parent.internal.fieldOwners',
    children___parent___internal___ignoreType = 'children.parent.internal.ignoreType',
    children___parent___internal___mediaType = 'children.parent.internal.mediaType',
    children___parent___internal___owner = 'children.parent.internal.owner',
    children___parent___internal___type = 'children.parent.internal.type',
    children___children = 'children.children',
    children___children___id = 'children.children.id',
    children___children___parent___id = 'children.children.parent.id',
    children___children___parent___children = 'children.children.parent.children',
    children___children___children = 'children.children.children',
    children___children___children___id = 'children.children.children.id',
    children___children___children___children = 'children.children.children.children',
    children___children___internal___content = 'children.children.internal.content',
    children___children___internal___contentDigest = 'children.children.internal.contentDigest',
    children___children___internal___description = 'children.children.internal.description',
    children___children___internal___fieldOwners = 'children.children.internal.fieldOwners',
    children___children___internal___ignoreType = 'children.children.internal.ignoreType',
    children___children___internal___mediaType = 'children.children.internal.mediaType',
    children___children___internal___owner = 'children.children.internal.owner',
    children___children___internal___type = 'children.children.internal.type',
    children___internal___content = 'children.internal.content',
    children___internal___contentDigest = 'children.internal.contentDigest',
    children___internal___description = 'children.internal.description',
    children___internal___fieldOwners = 'children.internal.fieldOwners',
    children___internal___ignoreType = 'children.internal.ignoreType',
    children___internal___mediaType = 'children.internal.mediaType',
    children___internal___owner = 'children.internal.owner',
    children___internal___type = 'children.internal.type',
    internal___content = 'internal.content',
    internal___contentDigest = 'internal.contentDigest',
    internal___description = 'internal.description',
    internal___fieldOwners = 'internal.fieldOwners',
    internal___ignoreType = 'internal.ignoreType',
    internal___mediaType = 'internal.mediaType',
    internal___owner = 'internal.owner',
    internal___type = 'internal.type',
    resolve = 'resolve',
    name = 'name',
    version = 'version',
    pluginOptions___plugins = 'pluginOptions.plugins',
    pluginOptions___plugins___resolve = 'pluginOptions.plugins.resolve',
    pluginOptions___plugins___id = 'pluginOptions.plugins.id',
    pluginOptions___plugins___name = 'pluginOptions.plugins.name',
    pluginOptions___plugins___version = 'pluginOptions.plugins.version',
    pluginOptions___plugins___pluginOptions___maxWidth = 'pluginOptions.plugins.pluginOptions.maxWidth',
    pluginOptions___plugins___pluginOptions___linkImagesToOriginal = 'pluginOptions.plugins.pluginOptions.linkImagesToOriginal',
    pluginOptions___plugins___pluginOptions___showCaptions = 'pluginOptions.plugins.pluginOptions.showCaptions',
    pluginOptions___plugins___pluginOptions___markdownCaptions = 'pluginOptions.plugins.pluginOptions.markdownCaptions',
    pluginOptions___plugins___pluginOptions___sizeByPixelDensity = 'pluginOptions.plugins.pluginOptions.sizeByPixelDensity',
    pluginOptions___plugins___pluginOptions___backgroundColor = 'pluginOptions.plugins.pluginOptions.backgroundColor',
    pluginOptions___plugins___pluginOptions___quality = 'pluginOptions.plugins.pluginOptions.quality',
    pluginOptions___plugins___pluginOptions___withWebp = 'pluginOptions.plugins.pluginOptions.withWebp',
    pluginOptions___plugins___pluginOptions___tracedSVG = 'pluginOptions.plugins.pluginOptions.tracedSVG',
    pluginOptions___plugins___pluginOptions___loading = 'pluginOptions.plugins.pluginOptions.loading',
    pluginOptions___plugins___pluginOptions___disableBgImageOnAlpha = 'pluginOptions.plugins.pluginOptions.disableBgImageOnAlpha',
    pluginOptions___plugins___pluginOptions___disableBgImage = 'pluginOptions.plugins.pluginOptions.disableBgImage',
    pluginOptions___plugins___nodeAPIs = 'pluginOptions.plugins.nodeAPIs',
    pluginOptions___plugins___browserAPIs = 'pluginOptions.plugins.browserAPIs',
    pluginOptions___plugins___pluginFilepath = 'pluginOptions.plugins.pluginFilepath',
    pluginOptions___policy = 'pluginOptions.policy',
    pluginOptions___policy___userAgent = 'pluginOptions.policy.userAgent',
    pluginOptions___policy___allow = 'pluginOptions.policy.allow',
    pluginOptions___name = 'pluginOptions.name',
    pluginOptions___short_name = 'pluginOptions.short_name',
    pluginOptions___start_url = 'pluginOptions.start_url',
    pluginOptions___background_color = 'pluginOptions.background_color',
    pluginOptions___theme_color = 'pluginOptions.theme_color',
    pluginOptions___display = 'pluginOptions.display',
    pluginOptions___icon = 'pluginOptions.icon',
    pluginOptions___legacy = 'pluginOptions.legacy',
    pluginOptions___theme_color_in_head = 'pluginOptions.theme_color_in_head',
    pluginOptions___cache_busting_mode = 'pluginOptions.cache_busting_mode',
    pluginOptions___crossOrigin = 'pluginOptions.crossOrigin',
    pluginOptions___include_favicon = 'pluginOptions.include_favicon',
    pluginOptions___cacheDigest = 'pluginOptions.cacheDigest',
    pluginOptions___path = 'pluginOptions.path',
    pluginOptions___base64Width = 'pluginOptions.base64Width',
    pluginOptions___stripMetadata = 'pluginOptions.stripMetadata',
    pluginOptions___defaultQuality = 'pluginOptions.defaultQuality',
    pluginOptions___failOnError = 'pluginOptions.failOnError',
    pluginOptions___extensions = 'pluginOptions.extensions',
    pluginOptions___lessBabel = 'pluginOptions.lessBabel',
    pluginOptions___mediaTypes = 'pluginOptions.mediaTypes',
    pluginOptions___maxWidth = 'pluginOptions.maxWidth',
    pluginOptions___linkImagesToOriginal = 'pluginOptions.linkImagesToOriginal',
    pluginOptions___showCaptions = 'pluginOptions.showCaptions',
    pluginOptions___markdownCaptions = 'pluginOptions.markdownCaptions',
    pluginOptions___sizeByPixelDensity = 'pluginOptions.sizeByPixelDensity',
    pluginOptions___backgroundColor = 'pluginOptions.backgroundColor',
    pluginOptions___quality = 'pluginOptions.quality',
    pluginOptions___withWebp = 'pluginOptions.withWebp',
    pluginOptions___tracedSVG = 'pluginOptions.tracedSVG',
    pluginOptions___loading = 'pluginOptions.loading',
    pluginOptions___disableBgImageOnAlpha = 'pluginOptions.disableBgImageOnAlpha',
    pluginOptions___disableBgImage = 'pluginOptions.disableBgImage',
    pluginOptions___saveButton___round = 'pluginOptions.saveButton.round',
    pluginOptions___saveButton___tall = 'pluginOptions.saveButton.tall',
    pluginOptions___username = 'pluginOptions.username',
    pluginOptions___isTSX = 'pluginOptions.isTSX',
    pluginOptions___jsxPragma = 'pluginOptions.jsxPragma',
    pluginOptions___allExtensions = 'pluginOptions.allExtensions',
    pluginOptions___pathCheck = 'pluginOptions.pathCheck',
    nodeAPIs = 'nodeAPIs',
    browserAPIs = 'browserAPIs',
    ssrAPIs = 'ssrAPIs',
    pluginFilepath = 'pluginFilepath',
    packageJson___name = 'packageJson.name',
    packageJson___description = 'packageJson.description',
    packageJson___version = 'packageJson.version',
    packageJson___main = 'packageJson.main',
    packageJson___license = 'packageJson.license',
    packageJson___dependencies = 'packageJson.dependencies',
    packageJson___dependencies___name = 'packageJson.dependencies.name',
    packageJson___dependencies___version = 'packageJson.dependencies.version',
    packageJson___devDependencies = 'packageJson.devDependencies',
    packageJson___devDependencies___name = 'packageJson.devDependencies.name',
    packageJson___devDependencies___version = 'packageJson.devDependencies.version',
    packageJson___peerDependencies = 'packageJson.peerDependencies',
    packageJson___peerDependencies___name = 'packageJson.peerDependencies.name',
    packageJson___peerDependencies___version = 'packageJson.peerDependencies.version',
    packageJson___keywords = 'packageJson.keywords',
  }

  type SitePluginFilterInput = {
    readonly id: Maybe<StringQueryOperatorInput>;
    readonly parent: Maybe<NodeFilterInput>;
    readonly children: Maybe<NodeFilterListInput>;
    readonly internal: Maybe<InternalFilterInput>;
    readonly resolve: Maybe<StringQueryOperatorInput>;
    readonly name: Maybe<StringQueryOperatorInput>;
    readonly version: Maybe<StringQueryOperatorInput>;
    readonly pluginOptions: Maybe<SitePluginPluginOptionsFilterInput>;
    readonly nodeAPIs: Maybe<StringQueryOperatorInput>;
    readonly browserAPIs: Maybe<StringQueryOperatorInput>;
    readonly ssrAPIs: Maybe<StringQueryOperatorInput>;
    readonly pluginFilepath: Maybe<StringQueryOperatorInput>;
    readonly packageJson: Maybe<SitePluginPackageJsonFilterInput>;
  };

  type SitePluginGroupConnection = {
    readonly totalCount: Scalars['Int'];
    readonly edges: ReadonlyArray<SitePluginEdge>;
    readonly nodes: ReadonlyArray<SitePlugin>;
    readonly pageInfo: PageInfo;
    readonly field: Scalars['String'];
    readonly fieldValue: Maybe<Scalars['String']>;
  };

  type SitePluginPackageJson = {
    readonly name: Maybe<Scalars['String']>;
    readonly description: Maybe<Scalars['String']>;
    readonly version: Maybe<Scalars['String']>;
    readonly main: Maybe<Scalars['String']>;
    readonly license: Maybe<Scalars['String']>;
    readonly dependencies: Maybe<ReadonlyArray<Maybe<SitePluginPackageJsonDependencies>>>;
    readonly devDependencies: Maybe<ReadonlyArray<Maybe<SitePluginPackageJsonDevDependencies>>>;
    readonly peerDependencies: Maybe<ReadonlyArray<Maybe<SitePluginPackageJsonPeerDependencies>>>;
    readonly keywords: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  };

  type SitePluginPackageJsonDependencies = {
    readonly name: Maybe<Scalars['String']>;
    readonly version: Maybe<Scalars['String']>;
  };

  type SitePluginPackageJsonDependenciesFilterInput = {
    readonly name: Maybe<StringQueryOperatorInput>;
    readonly version: Maybe<StringQueryOperatorInput>;
  };

  type SitePluginPackageJsonDependenciesFilterListInput = {
    readonly elemMatch: Maybe<SitePluginPackageJsonDependenciesFilterInput>;
  };

  type SitePluginPackageJsonDevDependencies = {
    readonly name: Maybe<Scalars['String']>;
    readonly version: Maybe<Scalars['String']>;
  };

  type SitePluginPackageJsonDevDependenciesFilterInput = {
    readonly name: Maybe<StringQueryOperatorInput>;
    readonly version: Maybe<StringQueryOperatorInput>;
  };

  type SitePluginPackageJsonDevDependenciesFilterListInput = {
    readonly elemMatch: Maybe<SitePluginPackageJsonDevDependenciesFilterInput>;
  };

  type SitePluginPackageJsonFilterInput = {
    readonly name: Maybe<StringQueryOperatorInput>;
    readonly description: Maybe<StringQueryOperatorInput>;
    readonly version: Maybe<StringQueryOperatorInput>;
    readonly main: Maybe<StringQueryOperatorInput>;
    readonly license: Maybe<StringQueryOperatorInput>;
    readonly dependencies: Maybe<SitePluginPackageJsonDependenciesFilterListInput>;
    readonly devDependencies: Maybe<SitePluginPackageJsonDevDependenciesFilterListInput>;
    readonly peerDependencies: Maybe<SitePluginPackageJsonPeerDependenciesFilterListInput>;
    readonly keywords: Maybe<StringQueryOperatorInput>;
  };

  type SitePluginPackageJsonPeerDependencies = {
    readonly name: Maybe<Scalars['String']>;
    readonly version: Maybe<Scalars['String']>;
  };

  type SitePluginPackageJsonPeerDependenciesFilterInput = {
    readonly name: Maybe<StringQueryOperatorInput>;
    readonly version: Maybe<StringQueryOperatorInput>;
  };

  type SitePluginPackageJsonPeerDependenciesFilterListInput = {
    readonly elemMatch: Maybe<SitePluginPackageJsonPeerDependenciesFilterInput>;
  };

  type SitePluginPluginOptions = {
    readonly plugins: Maybe<ReadonlyArray<Maybe<SitePluginPluginOptionsPlugins>>>;
    readonly policy: Maybe<ReadonlyArray<Maybe<SitePluginPluginOptionsPolicy>>>;
    readonly name: Maybe<Scalars['String']>;
    readonly short_name: Maybe<Scalars['String']>;
    readonly start_url: Maybe<Scalars['String']>;
    readonly background_color: Maybe<Scalars['String']>;
    readonly theme_color: Maybe<Scalars['String']>;
    readonly display: Maybe<Scalars['String']>;
    readonly icon: Maybe<Scalars['String']>;
    readonly legacy: Maybe<Scalars['Boolean']>;
    readonly theme_color_in_head: Maybe<Scalars['Boolean']>;
    readonly cache_busting_mode: Maybe<Scalars['String']>;
    readonly crossOrigin: Maybe<Scalars['String']>;
    readonly include_favicon: Maybe<Scalars['Boolean']>;
    readonly cacheDigest: Maybe<Scalars['String']>;
    readonly path: Maybe<Scalars['String']>;
    readonly base64Width: Maybe<Scalars['Int']>;
    readonly stripMetadata: Maybe<Scalars['Boolean']>;
    readonly defaultQuality: Maybe<Scalars['Int']>;
    readonly failOnError: Maybe<Scalars['Boolean']>;
    readonly extensions: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
    readonly lessBabel: Maybe<Scalars['Boolean']>;
    readonly mediaTypes: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
    readonly maxWidth: Maybe<Scalars['Int']>;
    readonly linkImagesToOriginal: Maybe<Scalars['Boolean']>;
    readonly showCaptions: Maybe<Scalars['Boolean']>;
    readonly markdownCaptions: Maybe<Scalars['Boolean']>;
    readonly sizeByPixelDensity: Maybe<Scalars['Boolean']>;
    readonly backgroundColor: Maybe<Scalars['String']>;
    readonly quality: Maybe<Scalars['Int']>;
    readonly withWebp: Maybe<Scalars['Boolean']>;
    readonly tracedSVG: Maybe<Scalars['Boolean']>;
    readonly loading: Maybe<Scalars['String']>;
    readonly disableBgImageOnAlpha: Maybe<Scalars['Boolean']>;
    readonly disableBgImage: Maybe<Scalars['Boolean']>;
    readonly saveButton: Maybe<SitePluginPluginOptionsSaveButton>;
    readonly username: Maybe<Scalars['String']>;
    readonly isTSX: Maybe<Scalars['Boolean']>;
    readonly jsxPragma: Maybe<Scalars['String']>;
    readonly allExtensions: Maybe<Scalars['Boolean']>;
    readonly pathCheck: Maybe<Scalars['Boolean']>;
  };

  type SitePluginPluginOptionsFilterInput = {
    readonly plugins: Maybe<SitePluginPluginOptionsPluginsFilterListInput>;
    readonly policy: Maybe<SitePluginPluginOptionsPolicyFilterListInput>;
    readonly name: Maybe<StringQueryOperatorInput>;
    readonly short_name: Maybe<StringQueryOperatorInput>;
    readonly start_url: Maybe<StringQueryOperatorInput>;
    readonly background_color: Maybe<StringQueryOperatorInput>;
    readonly theme_color: Maybe<StringQueryOperatorInput>;
    readonly display: Maybe<StringQueryOperatorInput>;
    readonly icon: Maybe<StringQueryOperatorInput>;
    readonly legacy: Maybe<BooleanQueryOperatorInput>;
    readonly theme_color_in_head: Maybe<BooleanQueryOperatorInput>;
    readonly cache_busting_mode: Maybe<StringQueryOperatorInput>;
    readonly crossOrigin: Maybe<StringQueryOperatorInput>;
    readonly include_favicon: Maybe<BooleanQueryOperatorInput>;
    readonly cacheDigest: Maybe<StringQueryOperatorInput>;
    readonly path: Maybe<StringQueryOperatorInput>;
    readonly base64Width: Maybe<IntQueryOperatorInput>;
    readonly stripMetadata: Maybe<BooleanQueryOperatorInput>;
    readonly defaultQuality: Maybe<IntQueryOperatorInput>;
    readonly failOnError: Maybe<BooleanQueryOperatorInput>;
    readonly extensions: Maybe<StringQueryOperatorInput>;
    readonly lessBabel: Maybe<BooleanQueryOperatorInput>;
    readonly mediaTypes: Maybe<StringQueryOperatorInput>;
    readonly maxWidth: Maybe<IntQueryOperatorInput>;
    readonly linkImagesToOriginal: Maybe<BooleanQueryOperatorInput>;
    readonly showCaptions: Maybe<BooleanQueryOperatorInput>;
    readonly markdownCaptions: Maybe<BooleanQueryOperatorInput>;
    readonly sizeByPixelDensity: Maybe<BooleanQueryOperatorInput>;
    readonly backgroundColor: Maybe<StringQueryOperatorInput>;
    readonly quality: Maybe<IntQueryOperatorInput>;
    readonly withWebp: Maybe<BooleanQueryOperatorInput>;
    readonly tracedSVG: Maybe<BooleanQueryOperatorInput>;
    readonly loading: Maybe<StringQueryOperatorInput>;
    readonly disableBgImageOnAlpha: Maybe<BooleanQueryOperatorInput>;
    readonly disableBgImage: Maybe<BooleanQueryOperatorInput>;
    readonly saveButton: Maybe<SitePluginPluginOptionsSaveButtonFilterInput>;
    readonly username: Maybe<StringQueryOperatorInput>;
    readonly isTSX: Maybe<BooleanQueryOperatorInput>;
    readonly jsxPragma: Maybe<StringQueryOperatorInput>;
    readonly allExtensions: Maybe<BooleanQueryOperatorInput>;
    readonly pathCheck: Maybe<BooleanQueryOperatorInput>;
  };

  type SitePluginPluginOptionsPlugins = {
    readonly resolve: Maybe<Scalars['String']>;
    readonly id: Maybe<Scalars['String']>;
    readonly name: Maybe<Scalars['String']>;
    readonly version: Maybe<Scalars['String']>;
    readonly pluginOptions: Maybe<SitePluginPluginOptionsPluginsPluginOptions>;
    readonly nodeAPIs: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
    readonly browserAPIs: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
    readonly pluginFilepath: Maybe<Scalars['String']>;
  };

  type SitePluginPluginOptionsPluginsFilterInput = {
    readonly resolve: Maybe<StringQueryOperatorInput>;
    readonly id: Maybe<StringQueryOperatorInput>;
    readonly name: Maybe<StringQueryOperatorInput>;
    readonly version: Maybe<StringQueryOperatorInput>;
    readonly pluginOptions: Maybe<SitePluginPluginOptionsPluginsPluginOptionsFilterInput>;
    readonly nodeAPIs: Maybe<StringQueryOperatorInput>;
    readonly browserAPIs: Maybe<StringQueryOperatorInput>;
    readonly pluginFilepath: Maybe<StringQueryOperatorInput>;
  };

  type SitePluginPluginOptionsPluginsFilterListInput = {
    readonly elemMatch: Maybe<SitePluginPluginOptionsPluginsFilterInput>;
  };

  type SitePluginPluginOptionsPluginsPluginOptions = {
    readonly maxWidth: Maybe<Scalars['Int']>;
    readonly linkImagesToOriginal: Maybe<Scalars['Boolean']>;
    readonly showCaptions: Maybe<Scalars['Boolean']>;
    readonly markdownCaptions: Maybe<Scalars['Boolean']>;
    readonly sizeByPixelDensity: Maybe<Scalars['Boolean']>;
    readonly backgroundColor: Maybe<Scalars['String']>;
    readonly quality: Maybe<Scalars['Int']>;
    readonly withWebp: Maybe<Scalars['Boolean']>;
    readonly tracedSVG: Maybe<Scalars['Boolean']>;
    readonly loading: Maybe<Scalars['String']>;
    readonly disableBgImageOnAlpha: Maybe<Scalars['Boolean']>;
    readonly disableBgImage: Maybe<Scalars['Boolean']>;
  };

  type SitePluginPluginOptionsPluginsPluginOptionsFilterInput = {
    readonly maxWidth: Maybe<IntQueryOperatorInput>;
    readonly linkImagesToOriginal: Maybe<BooleanQueryOperatorInput>;
    readonly showCaptions: Maybe<BooleanQueryOperatorInput>;
    readonly markdownCaptions: Maybe<BooleanQueryOperatorInput>;
    readonly sizeByPixelDensity: Maybe<BooleanQueryOperatorInput>;
    readonly backgroundColor: Maybe<StringQueryOperatorInput>;
    readonly quality: Maybe<IntQueryOperatorInput>;
    readonly withWebp: Maybe<BooleanQueryOperatorInput>;
    readonly tracedSVG: Maybe<BooleanQueryOperatorInput>;
    readonly loading: Maybe<StringQueryOperatorInput>;
    readonly disableBgImageOnAlpha: Maybe<BooleanQueryOperatorInput>;
    readonly disableBgImage: Maybe<BooleanQueryOperatorInput>;
  };

  type SitePluginPluginOptionsPolicy = {
    readonly userAgent: Maybe<Scalars['String']>;
    readonly allow: Maybe<Scalars['String']>;
  };

  type SitePluginPluginOptionsPolicyFilterInput = {
    readonly userAgent: Maybe<StringQueryOperatorInput>;
    readonly allow: Maybe<StringQueryOperatorInput>;
  };

  type SitePluginPluginOptionsPolicyFilterListInput = {
    readonly elemMatch: Maybe<SitePluginPluginOptionsPolicyFilterInput>;
  };

  type SitePluginPluginOptionsSaveButton = {
    readonly round: Maybe<Scalars['Boolean']>;
    readonly tall: Maybe<Scalars['Boolean']>;
  };

  type SitePluginPluginOptionsSaveButtonFilterInput = {
    readonly round: Maybe<BooleanQueryOperatorInput>;
    readonly tall: Maybe<BooleanQueryOperatorInput>;
  };

  type SitePluginSortInput = {
    readonly fields: Maybe<ReadonlyArray<Maybe<SitePluginFieldsEnum>>>;
    readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
  };

  type SiteSiteMetadata = {
    readonly title: Maybe<Scalars['String']>;
    readonly description: Maybe<Scalars['String']>;
    readonly siteUrl: Maybe<Scalars['String']>;
    readonly author: Maybe<Scalars['String']>;
  };

  type SiteSiteMetadataFilterInput = {
    readonly title: Maybe<StringQueryOperatorInput>;
    readonly description: Maybe<StringQueryOperatorInput>;
    readonly siteUrl: Maybe<StringQueryOperatorInput>;
    readonly author: Maybe<StringQueryOperatorInput>;
  };

  type SiteSortInput = {
    readonly fields: Maybe<ReadonlyArray<Maybe<SiteFieldsEnum>>>;
    readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
  };

  enum SortOrderEnum {
    ASC = 'ASC',
    DESC = 'DESC',
  }

  type StringQueryOperatorInput = {
    readonly eq: Maybe<Scalars['String']>;
    readonly ne: Maybe<Scalars['String']>;
    readonly in: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
    readonly nin: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
    readonly regex: Maybe<Scalars['String']>;
    readonly glob: Maybe<Scalars['String']>;
  };

  type TransformOptions = {
    readonly grayscale: Maybe<Scalars['Boolean']>;
    readonly duotone: Maybe<DuotoneGradient>;
    readonly rotate: Maybe<Scalars['Int']>;
    readonly trim: Maybe<Scalars['Float']>;
    readonly cropFocus: Maybe<ImageCropFocus>;
    readonly fit: Maybe<ImageFit>;
  };

  type WebPOptions = {
    readonly quality: Maybe<Scalars['Int']>;
  };

  type GatsbyImageSharpFluidFragment = Pick<
    ImageSharpFluid,
    'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'
  >;

  type BlogPostByIdQueryVariables = Exact<{
    id: Scalars['String'];
  }>;

  type BlogPostByIdQuery = {
    readonly site: Maybe<{ readonly siteMetadata: Maybe<Pick<SiteSiteMetadata, 'siteUrl'>> }>;
    readonly mdx: Maybe<
      Pick<Mdx, 'id' | 'body'> & {
        readonly frontmatter: Maybe<
          Pick<MdxFrontmatter, 'title' | 'date' | 'categories'> & {
            readonly coverImage: Maybe<
              Pick<File, 'publicURL'> & {
                readonly childImageSharp: Maybe<{
                  readonly fluid: Maybe<
                    Pick<ImageSharpFluid, 'src'> & GatsbyImageSharpFluidFragment
                  >;
                }>;
              }
            >;
            readonly bottomGallery: Maybe<
              ReadonlyArray<
                Maybe<
                  Pick<MdxFrontmatterBottomGallery, 'blogName'> & {
                    readonly image: Maybe<
                      Pick<File, 'publicURL'> & {
                        readonly childImageSharp: Maybe<{
                          readonly fluid: Maybe<
                            Pick<ImageSharpFluid, 'src'> & GatsbyImageSharpFluidFragment
                          >;
                        }>;
                      }
                    >;
                  }
                >
              >
            >;
          }
        >;
        readonly fields: Maybe<
          Pick<MdxFields, 'slug'> & {
            readonly readingTime: Maybe<Pick<MdxFieldsReadingTime, 'text'>>;
          }
        >;
      }
    >;
  };

  type PageByIdQueryVariables = Exact<{
    id: Scalars['String'];
  }>;

  type PageByIdQuery = {
    readonly mdx: Maybe<
      Pick<Mdx, 'id' | 'body'> & { readonly frontmatter: Maybe<Pick<MdxFrontmatter, 'title'>> }
    >;
  };

  type GatsbyImageSharpFluid_tracedSVGFragment = Pick<
    ImageSharpFluid,
    'tracedSVG' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'
  >;

  type BlogPostsByCategoryQueryVariables = Exact<{
    category: Scalars['String'];
  }>;

  type BlogPostsByCategoryQuery = {
    readonly allMdx: {
      readonly edges: ReadonlyArray<{
        readonly node: Pick<Mdx, 'id' | 'excerpt'> & {
          readonly fields: Maybe<
            Pick<MdxFields, 'slug'> & {
              readonly readingTime: Maybe<Pick<MdxFieldsReadingTime, 'text'>>;
            }
          >;
          readonly frontmatter: Maybe<
            Pick<MdxFrontmatter, 'title' | 'date' | 'categories'> & {
              readonly coverImage: Maybe<{
                readonly childImageSharp: Maybe<{
                  readonly fluid: Maybe<
                    Pick<ImageSharpFluid, 'src'> & GatsbyImageSharpFluid_tracedSVGFragment
                  >;
                }>;
              }>;
            }
          >;
        };
      }>;
    };
  };

  type PagesQueryQueryVariables = Exact<{ [key: string]: never }>;

  type PagesQueryQuery = {
    readonly allSitePage: { readonly nodes: ReadonlyArray<Pick<SitePage, 'path'>> };
  };

  type GetAllPostsQueryVariables = Exact<{ [key: string]: never }>;

  type GetAllPostsQuery = {
    readonly allMdx: {
      readonly edges: ReadonlyArray<{
        readonly node: Pick<Mdx, 'id' | 'excerpt'> & {
          readonly fields: Maybe<
            Pick<MdxFields, 'slug'> & {
              readonly readingTime: Maybe<Pick<MdxFieldsReadingTime, 'text'>>;
            }
          >;
          readonly frontmatter: Maybe<
            Pick<MdxFrontmatter, 'title' | 'date' | 'categories'> & {
              readonly coverImage: Maybe<{
                readonly childImageSharp: Maybe<{
                  readonly fluid: Maybe<
                    Pick<ImageSharpFluid, 'src'> & GatsbyImageSharpFluid_tracedSVGFragment
                  >;
                }>;
              }>;
            }
          >;
        };
      }>;
    };
  };

  type GetInstagramPostsQueryVariables = Exact<{ [key: string]: never }>;

  type GetInstagramPostsQuery = {
    readonly allInstaNode: {
      readonly edges: ReadonlyArray<{
        readonly node: Pick<InstaNode, 'id'> & {
          readonly localFile: Maybe<{
            readonly childImageSharp: Maybe<{
              readonly fixed: Maybe<
                Pick<ImageSharpFixed, 'base64' | 'width' | 'height' | 'src' | 'srcSet'>
              >;
            }>;
          }>;
        };
      }>;
    };
  };

  type SiteTitleQueryQueryVariables = Exact<{ [key: string]: never }>;

  type SiteTitleQueryQuery = {
    readonly site: Maybe<{ readonly siteMetadata: Maybe<Pick<SiteSiteMetadata, 'title'>> }>;
  };

  type SidebarImageQueryVariables = Exact<{ [key: string]: never }>;

  type SidebarImageQuery = {
    readonly file: Maybe<{
      readonly childImageSharp: Maybe<{
        readonly fluid: Maybe<Pick<ImageSharpFluid, 'src'> & GatsbyImageSharpFluidFragment>;
      }>;
    }>;
  };

  type GetRecentPostsQueryVariables = Exact<{ [key: string]: never }>;

  type GetRecentPostsQuery = {
    readonly allMdx: {
      readonly edges: ReadonlyArray<{
        readonly node: Pick<Mdx, 'id' | 'excerpt'> & {
          readonly fields: Maybe<
            Pick<MdxFields, 'slug'> & {
              readonly readingTime: Maybe<Pick<MdxFieldsReadingTime, 'text'>>;
            }
          >;
          readonly frontmatter: Maybe<
            Pick<MdxFrontmatter, 'title' | 'date' | 'categories'> & {
              readonly coverImage: Maybe<{
                readonly childImageSharp: Maybe<{
                  readonly fluid: Maybe<
                    Pick<ImageSharpFluid, 'src'> & GatsbyImageSharpFluid_tracedSVGFragment
                  >;
                }>;
              }>;
            }
          >;
        };
      }>;
    };
  };

  type SeoMetadataQueryVariables = Exact<{ [key: string]: never }>;

  type SeoMetadataQuery = {
    readonly site: Maybe<{
      readonly siteMetadata: Maybe<Pick<SiteSiteMetadata, 'title' | 'description' | 'author'>>;
    }>;
  };
}
