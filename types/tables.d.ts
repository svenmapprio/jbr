import type { ColumnType } from "kysely";

export type Generated<T> = T extends ColumnType<infer S, infer I, infer U>
  ? ColumnType<S, I | undefined, U>
  : ColumnType<T, T | undefined, T>;

export type Int8 = ColumnType<string, bigint | number | string, bigint | number | string>;

export type Json = ColumnType<JsonValue, string, string>;

export type JsonArray = JsonValue[];

export type JsonObject = {
  [K in string]?: JsonValue;
};

export type JsonPrimitive = boolean | number | string | null;

export type JsonValue = JsonArray | JsonObject | JsonPrimitive;

export type Numeric = ColumnType<string, number | string, number | string>;

export type Timestamp = ColumnType<Date, Date | string, Date | string>;

export interface AdminPermissions {
  action: string | null;
  actionParameters: Json | null;
  conditions: Json | null;
  createdAt: Timestamp | null;
  createdById: number | null;
  id: Generated<number>;
  properties: Json | null;
  subject: string | null;
  updatedAt: Timestamp | null;
  updatedById: number | null;
}

export interface AdminPermissionsRoleLinks {
  id: Generated<number>;
  permissionId: number | null;
  permissionOrder: number | null;
  roleId: number | null;
}

export interface AdminRoles {
  code: string | null;
  createdAt: Timestamp | null;
  createdById: number | null;
  description: string | null;
  id: Generated<number>;
  name: string | null;
  updatedAt: Timestamp | null;
  updatedById: number | null;
}

export interface AdminUsers {
  blocked: boolean | null;
  createdAt: Timestamp | null;
  createdById: number | null;
  email: string | null;
  firstname: string | null;
  id: Generated<number>;
  isActive: boolean | null;
  lastname: string | null;
  password: string | null;
  preferedLanguage: string | null;
  registrationToken: string | null;
  resetPasswordToken: string | null;
  updatedAt: Timestamp | null;
  updatedById: number | null;
  username: string | null;
}

export interface AdminUsersRolesLinks {
  id: Generated<number>;
  roleId: number | null;
  roleOrder: number | null;
  userId: number | null;
  userOrder: number | null;
}

export interface Files {
  alternativeText: string | null;
  caption: string | null;
  createdAt: Timestamp | null;
  createdById: number | null;
  ext: string | null;
  folderPath: string | null;
  formats: Json | null;
  hash: string | null;
  height: number | null;
  id: Generated<number>;
  mime: string | null;
  name: string | null;
  previewUrl: string | null;
  provider: string | null;
  providerMetadata: Json | null;
  size: Numeric | null;
  updatedAt: Timestamp | null;
  updatedById: number | null;
  url: string | null;
  width: number | null;
}

export interface FilesFolderLinks {
  fileId: number | null;
  fileOrder: number | null;
  folderId: number | null;
  id: Generated<number>;
}

export interface FilesRelatedMorphs {
  field: string | null;
  fileId: number | null;
  id: Generated<number>;
  order: number | null;
  relatedId: number | null;
  relatedType: string | null;
}

export interface I18nLocale {
  code: string | null;
  createdAt: Timestamp | null;
  createdById: number | null;
  id: Generated<number>;
  name: string | null;
  updatedAt: Timestamp | null;
  updatedById: number | null;
}

export interface StrapiApiTokenPermissions {
  action: string | null;
  createdAt: Timestamp | null;
  createdById: number | null;
  id: Generated<number>;
  updatedAt: Timestamp | null;
  updatedById: number | null;
}

export interface StrapiApiTokenPermissionsTokenLinks {
  apiTokenId: number | null;
  apiTokenPermissionId: number | null;
  apiTokenPermissionOrder: number | null;
  id: Generated<number>;
}

export interface StrapiApiTokens {
  accessKey: string | null;
  createdAt: Timestamp | null;
  createdById: number | null;
  description: string | null;
  expiresAt: Timestamp | null;
  id: Generated<number>;
  lastUsedAt: Timestamp | null;
  lifespan: Int8 | null;
  name: string | null;
  type: string | null;
  updatedAt: Timestamp | null;
  updatedById: number | null;
}

export interface StrapiCoreStoreSettings {
  environment: string | null;
  id: Generated<number>;
  key: string | null;
  tag: string | null;
  type: string | null;
  value: string | null;
}

export interface StrapiDatabaseSchema {
  hash: string | null;
  id: Generated<number>;
  schema: Json | null;
  time: Timestamp | null;
}

export interface StrapiMigrations {
  id: Generated<number>;
  name: string | null;
  time: Timestamp | null;
}

export interface StrapiReleaseActions {
  contentType: string | null;
  createdAt: Timestamp | null;
  createdById: number | null;
  id: Generated<number>;
  locale: string | null;
  targetId: number | null;
  targetType: string | null;
  type: string | null;
  updatedAt: Timestamp | null;
  updatedById: number | null;
}

export interface StrapiReleaseActionsReleaseLinks {
  id: Generated<number>;
  releaseActionId: number | null;
  releaseActionOrder: number | null;
  releaseId: number | null;
}

export interface StrapiReleases {
  createdAt: Timestamp | null;
  createdById: number | null;
  id: Generated<number>;
  name: string | null;
  releasedAt: Timestamp | null;
  scheduledAt: Timestamp | null;
  timezone: string | null;
  updatedAt: Timestamp | null;
  updatedById: number | null;
}

export interface StrapiTransferTokenPermissions {
  action: string | null;
  createdAt: Timestamp | null;
  createdById: number | null;
  id: Generated<number>;
  updatedAt: Timestamp | null;
  updatedById: number | null;
}

export interface StrapiTransferTokenPermissionsTokenLinks {
  id: Generated<number>;
  transferTokenId: number | null;
  transferTokenPermissionId: number | null;
  transferTokenPermissionOrder: number | null;
}

export interface StrapiTransferTokens {
  accessKey: string | null;
  createdAt: Timestamp | null;
  createdById: number | null;
  description: string | null;
  expiresAt: Timestamp | null;
  id: Generated<number>;
  lastUsedAt: Timestamp | null;
  lifespan: Int8 | null;
  name: string | null;
  updatedAt: Timestamp | null;
  updatedById: number | null;
}

export interface StrapiWebhooks {
  enabled: boolean | null;
  events: Json | null;
  headers: Json | null;
  id: Generated<number>;
  name: string | null;
  url: string | null;
}

export interface UploadFolders {
  createdAt: Timestamp | null;
  createdById: number | null;
  id: Generated<number>;
  name: string | null;
  path: string | null;
  pathId: number | null;
  updatedAt: Timestamp | null;
  updatedById: number | null;
}

export interface UploadFoldersParentLinks {
  folderId: number | null;
  folderOrder: number | null;
  id: Generated<number>;
  invFolderId: number | null;
}

export interface UpPermissions {
  action: string | null;
  createdAt: Timestamp | null;
  createdById: number | null;
  id: Generated<number>;
  updatedAt: Timestamp | null;
  updatedById: number | null;
}

export interface UpPermissionsRoleLinks {
  id: Generated<number>;
  permissionId: number | null;
  permissionOrder: number | null;
  roleId: number | null;
}

export interface UpRoles {
  createdAt: Timestamp | null;
  createdById: number | null;
  description: string | null;
  id: Generated<number>;
  name: string | null;
  type: string | null;
  updatedAt: Timestamp | null;
  updatedById: number | null;
}

export interface UpUsers {
  blocked: boolean | null;
  confirmationToken: string | null;
  confirmed: boolean | null;
  createdAt: Timestamp | null;
  createdById: number | null;
  email: string | null;
  id: Generated<number>;
  password: string | null;
  provider: string | null;
  resetPasswordToken: string | null;
  updatedAt: Timestamp | null;
  updatedById: number | null;
  username: string | null;
}

export interface UpUsersRoleLinks {
  id: Generated<number>;
  roleId: number | null;
  userId: number | null;
  userOrder: number | null;
}

export interface WorkImages {
  createdAt: Timestamp | null;
  createdById: number | null;
  description: string | null;
  id: Generated<number>;
  publishedAt: Timestamp | null;
  textPosition: string | null;
  updatedAt: Timestamp | null;
  updatedById: number | null;
}

export interface WorkImagesWorkLinks {
  id: Generated<number>;
  workId: number | null;
  workImageId: number | null;
  workImageOrder: number | null;
}

export interface Works {
  createdAt: Timestamp | null;
  createdById: number | null;
  description: string | null;
  id: Generated<number>;
  name: string | null;
  publishedAt: Timestamp | null;
  type: string | null;
  updatedAt: Timestamp | null;
  updatedById: number | null;
}

export interface DB {
  adminPermissions: AdminPermissions;
  adminPermissionsRoleLinks: AdminPermissionsRoleLinks;
  adminRoles: AdminRoles;
  adminUsers: AdminUsers;
  adminUsersRolesLinks: AdminUsersRolesLinks;
  files: Files;
  filesFolderLinks: FilesFolderLinks;
  filesRelatedMorphs: FilesRelatedMorphs;
  i18nLocale: I18nLocale;
  strapiApiTokenPermissions: StrapiApiTokenPermissions;
  strapiApiTokenPermissionsTokenLinks: StrapiApiTokenPermissionsTokenLinks;
  strapiApiTokens: StrapiApiTokens;
  strapiCoreStoreSettings: StrapiCoreStoreSettings;
  strapiDatabaseSchema: StrapiDatabaseSchema;
  strapiMigrations: StrapiMigrations;
  strapiReleaseActions: StrapiReleaseActions;
  strapiReleaseActionsReleaseLinks: StrapiReleaseActionsReleaseLinks;
  strapiReleases: StrapiReleases;
  strapiTransferTokenPermissions: StrapiTransferTokenPermissions;
  strapiTransferTokenPermissionsTokenLinks: StrapiTransferTokenPermissionsTokenLinks;
  strapiTransferTokens: StrapiTransferTokens;
  strapiWebhooks: StrapiWebhooks;
  uploadFolders: UploadFolders;
  uploadFoldersParentLinks: UploadFoldersParentLinks;
  upPermissions: UpPermissions;
  upPermissionsRoleLinks: UpPermissionsRoleLinks;
  upRoles: UpRoles;
  upUsers: UpUsers;
  upUsersRoleLinks: UpUsersRoleLinks;
  workImages: WorkImages;
  workImagesWorkLinks: WorkImagesWorkLinks;
  works: Works;
}
