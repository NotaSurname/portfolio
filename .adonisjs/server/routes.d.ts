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
    'dashboard.projects.edit': { paramsTuple: [ParamValue]; params: {'uuid': ParamValue} }
    'projects.update': { paramsTuple: [ParamValue]; params: {'uuid': ParamValue} }
    'projects.destroy': { paramsTuple: [ParamValue]; params: {'uuid': ParamValue} }
    'dashboard.experiences.show': { paramsTuple?: []; params?: {} }
    'dashboard.experience.create': { paramsTuple?: []; params?: {} }
    'experiences.store': { paramsTuple?: []; params?: {} }
    'experiences.reorder': { paramsTuple?: []; params?: {} }
    'dashboard.experience.edit': { paramsTuple: [ParamValue]; params: {'uuid': ParamValue} }
    'experiences.update': { paramsTuple: [ParamValue]; params: {'uuid': ParamValue} }
    'experiences.destroy': { paramsTuple: [ParamValue]; params: {'uuid': ParamValue} }
  }
  GET: {
    'drive.fs.serve': { paramsTuple: [...ParamValue[]]; params: {'*': ParamValue[]} }
    'home': { paramsTuple?: []; params?: {} }
    'auth.login': { paramsTuple?: []; params?: {} }
    'dashboard.index': { paramsTuple?: []; params?: {} }
    'dashboard.projects': { paramsTuple?: []; params?: {} }
    'dashboard.projects.create': { paramsTuple?: []; params?: {} }
    'dashboard.projects.edit': { paramsTuple: [ParamValue]; params: {'uuid': ParamValue} }
    'dashboard.experiences.show': { paramsTuple?: []; params?: {} }
    'dashboard.experience.create': { paramsTuple?: []; params?: {} }
    'dashboard.experience.edit': { paramsTuple: [ParamValue]; params: {'uuid': ParamValue} }
  }
  HEAD: {
    'drive.fs.serve': { paramsTuple: [...ParamValue[]]; params: {'*': ParamValue[]} }
    'home': { paramsTuple?: []; params?: {} }
    'auth.login': { paramsTuple?: []; params?: {} }
    'dashboard.index': { paramsTuple?: []; params?: {} }
    'dashboard.projects': { paramsTuple?: []; params?: {} }
    'dashboard.projects.create': { paramsTuple?: []; params?: {} }
    'dashboard.projects.edit': { paramsTuple: [ParamValue]; params: {'uuid': ParamValue} }
    'dashboard.experiences.show': { paramsTuple?: []; params?: {} }
    'dashboard.experience.create': { paramsTuple?: []; params?: {} }
    'dashboard.experience.edit': { paramsTuple: [ParamValue]; params: {'uuid': ParamValue} }
  }
  POST: {
    'check.login': { paramsTuple?: []; params?: {} }
    'logout': { paramsTuple?: []; params?: {} }
    'projects.store': { paramsTuple?: []; params?: {} }
    'projects.update': { paramsTuple: [ParamValue]; params: {'uuid': ParamValue} }
    'experiences.store': { paramsTuple?: []; params?: {} }
    'experiences.update': { paramsTuple: [ParamValue]; params: {'uuid': ParamValue} }
  }
  DELETE: {
    'projects.destroy': { paramsTuple: [ParamValue]; params: {'uuid': ParamValue} }
    'experiences.destroy': { paramsTuple: [ParamValue]; params: {'uuid': ParamValue} }
  }
  PUT: {
    'experiences.reorder': { paramsTuple?: []; params?: {} }
  }
}
declare module '@adonisjs/core/types/http' {
  export interface RoutesList extends ScannedRoutes {}
}