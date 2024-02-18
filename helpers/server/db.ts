import pg from "pg";
import { CamelCasePlugin, Kysely, PostgresDialect } from "kysely";
import { type DB } from "~/types/tables";
import fs from "fs";

const dbPool = new pg.Pool({
  connectionString: process.env.DATABASE_URL,
  min: 1,
  max: 7,
  ssl: false,
});

export const db = new Kysely<DB>({
  dialect: new PostgresDialect({
    pool: dbPool,
  }),
  plugins: [new CamelCasePlugin()],
});

export enum ErrorCode {
  ResourceNotFound,
  PathNotFound,
  HandlerNotFound,
  DomainNotFound,
  UserSessionInvalid,
  ResourcePermissions,
}

const Errors: { [k in ErrorCode]: string } = {
  [ErrorCode.ResourceNotFound]: "Resource not found",
  [ErrorCode.PathNotFound]: "Path not found",
  [ErrorCode.HandlerNotFound]: "Handler not found",
  [ErrorCode.DomainNotFound]: "Domain not found",
  [ErrorCode.UserSessionInvalid]: "User session not found",
  [ErrorCode.ResourcePermissions]:
    "User missing permissions for the requested resource",
};

export class ApiError extends Error {
  public message: string;
  public statusCode: number;
  constructor(public errorCode: ErrorCode) {
    super();

    switch (errorCode) {
      case ErrorCode.ResourceNotFound:
      case ErrorCode.PathNotFound:
      case ErrorCode.HandlerNotFound:
      case ErrorCode.DomainNotFound:
        this.statusCode = 404;
        break;

      case ErrorCode.UserSessionInvalid:
        this.statusCode = 401;
        break;
      case ErrorCode.ResourcePermissions:
        this.statusCode = 403;
        break;

      default:
        this.statusCode = 500;
    }

    this.message =
      Errors[errorCode] ??
      "An unknown server error has occured, and the dev team has been automatically notified";
  }
}
