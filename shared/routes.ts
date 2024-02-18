import {} from "@/types/returnTypes";
import { Selectable, Transaction } from "kysely";
import { Account, DB, User } from "./tables";

export type RouteInfo<
  Args extends object | void = object,
  Returns extends unknown = void
> = {
  args: Args;
  returns: Returns;
};

export interface UserRouteInfo<
  Args extends object | undefined,
  Returns extends unknown
> extends RouteInfo<Args, Returns> {
  args: Args;
}

export type ActionRoutes = { [k in string]: RouteInfo<any, any> };
export type ActionRouteGuards = { [k in string]: RouteInfo<any, any> };

export type Actions = "get" | "put" | "delete";

export type Routes = {
  [k in Actions]: ActionRoutes;
};

export type RouteHandler<T extends RouteInfo<any, any>, Extra> = (
  args: Extra extends void
    ? T["args"]
    : T["args"] extends void
    ? Extra
    : T["args"] & Extra
) => Promise<T["returns"]>;
export type RouteHandlerGuard<T extends RouteInfo<any, any>, Extra> = (
  args: Extra extends void ? T["args"] : T["args"] & Extra
) => Promise<void>;

export type RouteHandlerObject<AR extends ActionRoutes, Extra> = {
  [H in keyof AR]: RouteHandler<AR[H], Extra>;
};

export type RouteHandlerGuardObject<AR extends ActionRouteGuards, Extra> = {
  [H in keyof AR]?: RouteHandlerGuard<AR[H], Extra>;
};

export type RouteHandlers<
  R extends Routes,
  Extra extends object | void = void
> = {
  [A in Actions]: RouteHandlerObject<
    R[A],
    {
      trx: Transaction<DB>;
    }
  >;
};

export type RouteGuards<R extends Routes> = {
  [A in Actions]: RouteHandlerGuardObject<
    R[A],
    {
      trx: Transaction<DB>;
      headers: Record<string, string>;
    }
  >;
};

export interface PublicRoutes extends Routes {
  get: {};
  put: {};
  delete: {};
}
