/* eslint-disable prettier/prettier */
import type { AdonisEndpoint } from '@tuyau/core/types'
import type { Registry } from './schema.d.ts'
import type { ApiDefinition } from './tree.d.ts'

const placeholder: any = {}

const routes = {
  'drive.fs.serve': {
    methods: ["GET","HEAD"],
    pattern: '/uploads/*',
    tokens: [{"old":"/uploads/*","type":0,"val":"uploads","end":""},{"old":"/uploads/*","type":2,"val":"*","end":""}],
    types: placeholder as Registry['drive.fs.serve']['types'],
  },
  'home': {
    methods: ["GET","HEAD"],
    pattern: '/',
    tokens: [{"old":"/","type":0,"val":"/","end":""}],
    types: placeholder as Registry['home']['types'],
  },
  'auth.login': {
    methods: ["GET","HEAD"],
    pattern: '/auth/login',
    tokens: [{"old":"/auth/login","type":0,"val":"auth","end":""},{"old":"/auth/login","type":0,"val":"login","end":""}],
    types: placeholder as Registry['auth.login']['types'],
  },
  'check.login': {
    methods: ["POST"],
    pattern: '/login',
    tokens: [{"old":"/login","type":0,"val":"login","end":""}],
    types: placeholder as Registry['check.login']['types'],
  },
  'logout': {
    methods: ["POST"],
    pattern: '/logout',
    tokens: [{"old":"/logout","type":0,"val":"logout","end":""}],
    types: placeholder as Registry['logout']['types'],
  },
  'dashboard.index': {
    methods: ["GET","HEAD"],
    pattern: '/admin/dashboard',
    tokens: [{"old":"/admin/dashboard","type":0,"val":"admin","end":""},{"old":"/admin/dashboard","type":0,"val":"dashboard","end":""}],
    types: placeholder as Registry['dashboard.index']['types'],
  },
  'dashboard.projects': {
    methods: ["GET","HEAD"],
    pattern: '/admin/dashboard/projects',
    tokens: [{"old":"/admin/dashboard/projects","type":0,"val":"admin","end":""},{"old":"/admin/dashboard/projects","type":0,"val":"dashboard","end":""},{"old":"/admin/dashboard/projects","type":0,"val":"projects","end":""}],
    types: placeholder as Registry['dashboard.projects']['types'],
  },
  'dashboard.projects.create': {
    methods: ["GET","HEAD"],
    pattern: '/admin/dashboard/projects/create',
    tokens: [{"old":"/admin/dashboard/projects/create","type":0,"val":"admin","end":""},{"old":"/admin/dashboard/projects/create","type":0,"val":"dashboard","end":""},{"old":"/admin/dashboard/projects/create","type":0,"val":"projects","end":""},{"old":"/admin/dashboard/projects/create","type":0,"val":"create","end":""}],
    types: placeholder as Registry['dashboard.projects.create']['types'],
  },
  'projects.store': {
    methods: ["POST"],
    pattern: '/admin/dashboard/projects/create',
    tokens: [{"old":"/admin/dashboard/projects/create","type":0,"val":"admin","end":""},{"old":"/admin/dashboard/projects/create","type":0,"val":"dashboard","end":""},{"old":"/admin/dashboard/projects/create","type":0,"val":"projects","end":""},{"old":"/admin/dashboard/projects/create","type":0,"val":"create","end":""}],
    types: placeholder as Registry['projects.store']['types'],
  },
  'dashboard.projects.edit': {
    methods: ["GET","HEAD"],
    pattern: '/admin/dashboard/projects/:uuid/edit',
    tokens: [{"old":"/admin/dashboard/projects/:uuid/edit","type":0,"val":"admin","end":""},{"old":"/admin/dashboard/projects/:uuid/edit","type":0,"val":"dashboard","end":""},{"old":"/admin/dashboard/projects/:uuid/edit","type":0,"val":"projects","end":""},{"old":"/admin/dashboard/projects/:uuid/edit","type":1,"val":"uuid","end":""},{"old":"/admin/dashboard/projects/:uuid/edit","type":0,"val":"edit","end":""}],
    types: placeholder as Registry['dashboard.projects.edit']['types'],
  },
  'projects.update': {
    methods: ["POST"],
    pattern: '/admin/dashboard/projects/:uuid/edit',
    tokens: [{"old":"/admin/dashboard/projects/:uuid/edit","type":0,"val":"admin","end":""},{"old":"/admin/dashboard/projects/:uuid/edit","type":0,"val":"dashboard","end":""},{"old":"/admin/dashboard/projects/:uuid/edit","type":0,"val":"projects","end":""},{"old":"/admin/dashboard/projects/:uuid/edit","type":1,"val":"uuid","end":""},{"old":"/admin/dashboard/projects/:uuid/edit","type":0,"val":"edit","end":""}],
    types: placeholder as Registry['projects.update']['types'],
  },
  'projects.destroy': {
    methods: ["DELETE"],
    pattern: '/admin/dashboard/projects/:uuid/delete',
    tokens: [{"old":"/admin/dashboard/projects/:uuid/delete","type":0,"val":"admin","end":""},{"old":"/admin/dashboard/projects/:uuid/delete","type":0,"val":"dashboard","end":""},{"old":"/admin/dashboard/projects/:uuid/delete","type":0,"val":"projects","end":""},{"old":"/admin/dashboard/projects/:uuid/delete","type":1,"val":"uuid","end":""},{"old":"/admin/dashboard/projects/:uuid/delete","type":0,"val":"delete","end":""}],
    types: placeholder as Registry['projects.destroy']['types'],
  },
  'dashboard.experiences.show': {
    methods: ["GET","HEAD"],
    pattern: '/admin/dashboard/experiences',
    tokens: [{"old":"/admin/dashboard/experiences","type":0,"val":"admin","end":""},{"old":"/admin/dashboard/experiences","type":0,"val":"dashboard","end":""},{"old":"/admin/dashboard/experiences","type":0,"val":"experiences","end":""}],
    types: placeholder as Registry['dashboard.experiences.show']['types'],
  },
  'dashboard.experience.create': {
    methods: ["GET","HEAD"],
    pattern: '/admin/dashboard/experience/create',
    tokens: [{"old":"/admin/dashboard/experience/create","type":0,"val":"admin","end":""},{"old":"/admin/dashboard/experience/create","type":0,"val":"dashboard","end":""},{"old":"/admin/dashboard/experience/create","type":0,"val":"experience","end":""},{"old":"/admin/dashboard/experience/create","type":0,"val":"create","end":""}],
    types: placeholder as Registry['dashboard.experience.create']['types'],
  },
  'experiences.store': {
    methods: ["POST"],
    pattern: '/admin/dashboard/experience/create',
    tokens: [{"old":"/admin/dashboard/experience/create","type":0,"val":"admin","end":""},{"old":"/admin/dashboard/experience/create","type":0,"val":"dashboard","end":""},{"old":"/admin/dashboard/experience/create","type":0,"val":"experience","end":""},{"old":"/admin/dashboard/experience/create","type":0,"val":"create","end":""}],
    types: placeholder as Registry['experiences.store']['types'],
  },
  'experiences.reorder': {
    methods: ["PUT"],
    pattern: '/admin/dashboard/experience/reorder',
    tokens: [{"old":"/admin/dashboard/experience/reorder","type":0,"val":"admin","end":""},{"old":"/admin/dashboard/experience/reorder","type":0,"val":"dashboard","end":""},{"old":"/admin/dashboard/experience/reorder","type":0,"val":"experience","end":""},{"old":"/admin/dashboard/experience/reorder","type":0,"val":"reorder","end":""}],
    types: placeholder as Registry['experiences.reorder']['types'],
  },
  'dashboard.experience.edit': {
    methods: ["GET","HEAD"],
    pattern: '/admin/dashboard/experience/:uuid/edit',
    tokens: [{"old":"/admin/dashboard/experience/:uuid/edit","type":0,"val":"admin","end":""},{"old":"/admin/dashboard/experience/:uuid/edit","type":0,"val":"dashboard","end":""},{"old":"/admin/dashboard/experience/:uuid/edit","type":0,"val":"experience","end":""},{"old":"/admin/dashboard/experience/:uuid/edit","type":1,"val":"uuid","end":""},{"old":"/admin/dashboard/experience/:uuid/edit","type":0,"val":"edit","end":""}],
    types: placeholder as Registry['dashboard.experience.edit']['types'],
  },
  'experiences.update': {
    methods: ["POST"],
    pattern: '/admin/dashboard/experience/:uuid/edit',
    tokens: [{"old":"/admin/dashboard/experience/:uuid/edit","type":0,"val":"admin","end":""},{"old":"/admin/dashboard/experience/:uuid/edit","type":0,"val":"dashboard","end":""},{"old":"/admin/dashboard/experience/:uuid/edit","type":0,"val":"experience","end":""},{"old":"/admin/dashboard/experience/:uuid/edit","type":1,"val":"uuid","end":""},{"old":"/admin/dashboard/experience/:uuid/edit","type":0,"val":"edit","end":""}],
    types: placeholder as Registry['experiences.update']['types'],
  },
  'experiences.destroy': {
    methods: ["DELETE"],
    pattern: '/admin/dashboard/experience/:uuid/delete',
    tokens: [{"old":"/admin/dashboard/experience/:uuid/delete","type":0,"val":"admin","end":""},{"old":"/admin/dashboard/experience/:uuid/delete","type":0,"val":"dashboard","end":""},{"old":"/admin/dashboard/experience/:uuid/delete","type":0,"val":"experience","end":""},{"old":"/admin/dashboard/experience/:uuid/delete","type":1,"val":"uuid","end":""},{"old":"/admin/dashboard/experience/:uuid/delete","type":0,"val":"delete","end":""}],
    types: placeholder as Registry['experiences.destroy']['types'],
  },
} as const satisfies Record<string, AdonisEndpoint>

export { routes }

export const registry = {
  routes,
  $tree: {} as ApiDefinition,
}

declare module '@tuyau/core/types' {
  export interface UserRegistry {
    routes: typeof routes
    $tree: ApiDefinition
  }
}
