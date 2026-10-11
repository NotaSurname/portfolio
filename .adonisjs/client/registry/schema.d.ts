/* eslint-disable prettier/prettier */
/// <reference path="../manifest.d.ts" />

import type { ExtractBody, ExtractErrorResponse, ExtractQuery, ExtractQueryForGet, ExtractResponse } from '@tuyau/core/types'
import type { InferInput, SimpleError } from '@vinejs/vine/types'

export type ParamValue = string | number | bigint | boolean

export interface Registry {
  'drive.fs.serve': {
    methods: ["GET","HEAD"]
    pattern: '/uploads/*'
    types: {
      body: {}
      paramsTuple: [ParamValue]
      params: { '*': ParamValue[] }
      query: {}
      response: unknown
      errorResponse: unknown
    }
  }
  'home': {
    methods: ["GET","HEAD"]
    pattern: '/'
    types: {
      body: {}
      paramsTuple: []
      params: {}
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/home_controller').default['index']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/home_controller').default['index']>>>
    }
  }
  'auth.login': {
    methods: ["GET","HEAD"]
    pattern: '/auth/login'
    types: {
      body: {}
      paramsTuple: []
      params: {}
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/auth_controller').default['index']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/auth_controller').default['index']>>>
    }
  }
  'check.login': {
    methods: ["POST"]
    pattern: '/login'
    types: {
      body: ExtractBody<InferInput<(typeof import('#validators/login').loginValidator)>>
      paramsTuple: []
      params: {}
      query: ExtractQuery<InferInput<(typeof import('#validators/login').loginValidator)>>
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/auth_controller').default['check']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/auth_controller').default['check']>>> | { status: 422; response: { errors: SimpleError[] } }
    }
  }
  'logout': {
    methods: ["POST"]
    pattern: '/logout'
    types: {
      body: {}
      paramsTuple: []
      params: {}
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/auth_controller').default['logout']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/auth_controller').default['logout']>>>
    }
  }
  'dashboard.index': {
    methods: ["GET","HEAD"]
    pattern: '/admin/dashboard'
    types: {
      body: {}
      paramsTuple: []
      params: {}
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/dashboard_controller').default['index']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/dashboard_controller').default['index']>>>
    }
  }
  'dashboard.projects': {
    methods: ["GET","HEAD"]
    pattern: '/admin/dashboard/projects'
    types: {
      body: {}
      paramsTuple: []
      params: {}
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/projects_controller').default['show']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/projects_controller').default['show']>>>
    }
  }
  'dashboard.projects.create': {
    methods: ["GET","HEAD"]
    pattern: '/admin/dashboard/projects/create'
    types: {
      body: {}
      paramsTuple: []
      params: {}
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/projects_controller').default['create']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/projects_controller').default['create']>>>
    }
  }
  'projects.store': {
    methods: ["POST"]
    pattern: '/admin/dashboard/projects/create'
    types: {
      body: ExtractBody<InferInput<(typeof import('#validators/project').createProjectValidator)>>
      paramsTuple: []
      params: {}
      query: ExtractQuery<InferInput<(typeof import('#validators/project').createProjectValidator)>>
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/projects_controller').default['store']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/projects_controller').default['store']>>> | { status: 422; response: { errors: SimpleError[] } }
    }
  }
  'dashboard.projects.edit': {
    methods: ["GET","HEAD"]
    pattern: '/admin/dashboard/projects/:uuid/edit'
    types: {
      body: {}
      paramsTuple: [ParamValue]
      params: { uuid: ParamValue }
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/projects_controller').default['edit']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/projects_controller').default['edit']>>>
    }
  }
  'projects.update': {
    methods: ["POST"]
    pattern: '/admin/dashboard/projects/:uuid/edit'
    types: {
      body: ExtractBody<InferInput<(typeof import('#validators/project').updateProjectValidator)>>
      paramsTuple: [ParamValue]
      params: { uuid: ParamValue }
      query: ExtractQuery<InferInput<(typeof import('#validators/project').updateProjectValidator)>>
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/projects_controller').default['update']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/projects_controller').default['update']>>> | { status: 422; response: { errors: SimpleError[] } }
    }
  }
  'projects.destroy': {
    methods: ["DELETE"]
    pattern: '/admin/dashboard/projects/:uuid/delete'
    types: {
      body: {}
      paramsTuple: [ParamValue]
      params: { uuid: ParamValue }
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/projects_controller').default['destroy']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/projects_controller').default['destroy']>>>
    }
  }
  'dashboard.experiences.show': {
    methods: ["GET","HEAD"]
    pattern: '/admin/dashboard/experiences'
    types: {
      body: {}
      paramsTuple: []
      params: {}
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/experiences_controller').default['show']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/experiences_controller').default['show']>>>
    }
  }
  'dashboard.experience.create': {
    methods: ["GET","HEAD"]
    pattern: '/admin/dashboard/experience/create'
    types: {
      body: {}
      paramsTuple: []
      params: {}
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/experiences_controller').default['create']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/experiences_controller').default['create']>>>
    }
  }
  'experiences.store': {
    methods: ["POST"]
    pattern: '/admin/dashboard/experience/create'
    types: {
      body: ExtractBody<InferInput<(typeof import('#validators/experience').experienceValidator)>>
      paramsTuple: []
      params: {}
      query: ExtractQuery<InferInput<(typeof import('#validators/experience').experienceValidator)>>
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/experiences_controller').default['store']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/experiences_controller').default['store']>>> | { status: 422; response: { errors: SimpleError[] } }
    }
  }
  'experiences.reorder': {
    methods: ["PUT"]
    pattern: '/admin/dashboard/experience/reorder'
    types: {
      body: ExtractBody<InferInput<(typeof import('#validators/reorder').reorderExperiencesValidator)>>
      paramsTuple: []
      params: {}
      query: ExtractQuery<InferInput<(typeof import('#validators/reorder').reorderExperiencesValidator)>>
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/experiences_controller').default['reorder']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/experiences_controller').default['reorder']>>> | { status: 422; response: { errors: SimpleError[] } }
    }
  }
  'dashboard.experience.edit': {
    methods: ["GET","HEAD"]
    pattern: '/admin/dashboard/experience/:uuid/edit'
    types: {
      body: {}
      paramsTuple: [ParamValue]
      params: { uuid: ParamValue }
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/experiences_controller').default['edit']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/experiences_controller').default['edit']>>>
    }
  }
  'experiences.update': {
    methods: ["POST"]
    pattern: '/admin/dashboard/experience/:uuid/edit'
    types: {
      body: ExtractBody<InferInput<(typeof import('#validators/experience').experienceValidator)>>
      paramsTuple: [ParamValue]
      params: { uuid: ParamValue }
      query: ExtractQuery<InferInput<(typeof import('#validators/experience').experienceValidator)>>
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/experiences_controller').default['update']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/experiences_controller').default['update']>>> | { status: 422; response: { errors: SimpleError[] } }
    }
  }
  'experiences.destroy': {
    methods: ["DELETE"]
    pattern: '/admin/dashboard/experience/:uuid/delete'
    types: {
      body: {}
      paramsTuple: [ParamValue]
      params: { uuid: ParamValue }
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/experiences_controller').default['destroy']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/experiences_controller').default['destroy']>>>
    }
  }
}
