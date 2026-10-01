import '@adonisjs/core/types/http'

type ParamValue = string | number | bigint | boolean

export type ScannedRoutes = {
  ALL: {
    'drive.fs.serve': { paramsTuple: [...ParamValue[]]; params: {'*': ParamValue[]} }
    'home': { paramsTuple?: []; params?: {} }
    'auth.login': { paramsTuple?: []; params?: {} }
    'check.login': { paramsTuple?: []; params?: {} }
    'logout': { paramsTuple?: []; params?: {} }
    'dashboard.index': { paramsTuple?: []; params?: {} }
    'dashboard.projects': { paramsTuple?: []; params?: {} }
    'dashboard.projects.create': { paramsTuple?: []; params?: {} }
    'projects.store': { paramsTuple?: []; params?: {} }
  }
  GET: {
    'drive.fs.serve': { paramsTuple: [...ParamValue[]]; params: {'*': ParamValue[]} }
    'home': { paramsTuple?: []; params?: {} }
    'auth.login': { paramsTuple?: []; params?: {} }
    'dashboard.index': { paramsTuple?: []; params?: {} }
    'dashboard.projects': { paramsTuple?: []; params?: {} }
    'dashboard.projects.create': { paramsTuple?: []; params?: {} }
  }
  HEAD: {
    'drive.fs.serve': { paramsTuple: [...ParamValue[]]; params: {'*': ParamValue[]} }
    'home': { paramsTuple?: []; params?: {} }
    'auth.login': { paramsTuple?: []; params?: {} }
    'dashboard.index': { paramsTuple?: []; params?: {} }
    'dashboard.projects': { paramsTuple?: []; params?: {} }
    'dashboard.projects.create': { paramsTuple?: []; params?: {} }
  }
  POST: {
    'check.login': { paramsTuple?: []; params?: {} }
    'logout': { paramsTuple?: []; params?: {} }
    'projects.store': { paramsTuple?: []; params?: {} }
  }
}
declare module '@adonisjs/core/types/http' {
  export interface RoutesList extends ScannedRoutes {}
}