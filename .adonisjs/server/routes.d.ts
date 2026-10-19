import '@adonisjs/core/types/http'

type ParamValue = string | number | bigint | boolean

export type ScannedRoutes = {
  ALL: {
    'drive.fs.serve': { paramsTuple: [...ParamValue[]]; params: {'*': ParamValue[]} }
    'home': { paramsTuple?: []; params?: {} }
    'auth.login': { paramsTuple?: []; params?: {} }
    'check.login': { paramsTuple?: []; params?: {} }
    'logout': { paramsTuple?: []; params?: {} }
    'dashboard.about.show': { paramsTuple?: []; params?: {} }
    'dashboard.hero_status.update': { paramsTuple?: []; params?: {} }
    'about.store': { paramsTuple?: []; params?: {} }
    'about.update': { paramsTuple: [ParamValue]; params: {'uuid': ParamValue} }
    'about.reorder': { paramsTuple?: []; params?: {} }
    'about.destroy': { paramsTuple: [ParamValue]; params: {'uuid': ParamValue} }
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
    'dashboard.users.show': { paramsTuple?: []; params?: {} }
    'dashboard.users.store': { paramsTuple?: []; params?: {} }
    'dashboard.user.update': { paramsTuple: [ParamValue]; params: {'uuid': ParamValue} }
    'dashboard.user.destroy': { paramsTuple: [ParamValue]; params: {'uuid': ParamValue} }
    'contact.store': { paramsTuple?: []; params?: {} }
  }
  GET: {
    'drive.fs.serve': { paramsTuple: [...ParamValue[]]; params: {'*': ParamValue[]} }
    'home': { paramsTuple?: []; params?: {} }
    'auth.login': { paramsTuple?: []; params?: {} }
    'dashboard.about.show': { paramsTuple?: []; params?: {} }
    'dashboard.projects': { paramsTuple?: []; params?: {} }
    'dashboard.projects.create': { paramsTuple?: []; params?: {} }
    'dashboard.projects.edit': { paramsTuple: [ParamValue]; params: {'uuid': ParamValue} }
    'dashboard.experiences.show': { paramsTuple?: []; params?: {} }
    'dashboard.experience.create': { paramsTuple?: []; params?: {} }
    'dashboard.experience.edit': { paramsTuple: [ParamValue]; params: {'uuid': ParamValue} }
    'dashboard.users.show': { paramsTuple?: []; params?: {} }
  }
  HEAD: {
    'drive.fs.serve': { paramsTuple: [...ParamValue[]]; params: {'*': ParamValue[]} }
    'home': { paramsTuple?: []; params?: {} }
    'auth.login': { paramsTuple?: []; params?: {} }
    'dashboard.about.show': { paramsTuple?: []; params?: {} }
    'dashboard.projects': { paramsTuple?: []; params?: {} }
    'dashboard.projects.create': { paramsTuple?: []; params?: {} }
    'dashboard.projects.edit': { paramsTuple: [ParamValue]; params: {'uuid': ParamValue} }
    'dashboard.experiences.show': { paramsTuple?: []; params?: {} }
    'dashboard.experience.create': { paramsTuple?: []; params?: {} }
    'dashboard.experience.edit': { paramsTuple: [ParamValue]; params: {'uuid': ParamValue} }
    'dashboard.users.show': { paramsTuple?: []; params?: {} }
  }
  POST: {
    'check.login': { paramsTuple?: []; params?: {} }
    'logout': { paramsTuple?: []; params?: {} }
    'dashboard.hero_status.update': { paramsTuple?: []; params?: {} }
    'about.store': { paramsTuple?: []; params?: {} }
    'about.update': { paramsTuple: [ParamValue]; params: {'uuid': ParamValue} }
    'projects.store': { paramsTuple?: []; params?: {} }
    'projects.update': { paramsTuple: [ParamValue]; params: {'uuid': ParamValue} }
    'experiences.store': { paramsTuple?: []; params?: {} }
    'experiences.update': { paramsTuple: [ParamValue]; params: {'uuid': ParamValue} }
    'dashboard.users.store': { paramsTuple?: []; params?: {} }
    'dashboard.user.update': { paramsTuple: [ParamValue]; params: {'uuid': ParamValue} }
    'contact.store': { paramsTuple?: []; params?: {} }
  }
  PUT: {
    'about.reorder': { paramsTuple?: []; params?: {} }
    'experiences.reorder': { paramsTuple?: []; params?: {} }
  }
  DELETE: {
    'about.destroy': { paramsTuple: [ParamValue]; params: {'uuid': ParamValue} }
    'projects.destroy': { paramsTuple: [ParamValue]; params: {'uuid': ParamValue} }
    'experiences.destroy': { paramsTuple: [ParamValue]; params: {'uuid': ParamValue} }
    'dashboard.user.destroy': { paramsTuple: [ParamValue]; params: {'uuid': ParamValue} }
  }
}
declare module '@adonisjs/core/types/http' {
  export interface RoutesList extends ScannedRoutes {}
}