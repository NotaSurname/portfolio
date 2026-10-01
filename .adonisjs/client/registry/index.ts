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
