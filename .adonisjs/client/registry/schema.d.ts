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
  'dashboard.about.show': {
    methods: ["GET","HEAD"]
    pattern: '/admin/dashboard/about'
    types: {
      body: {}
      paramsTuple: []
      params: {}
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/about_controller').default['show']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/about_controller').default['show']>>>
    }
  }
  'dashboard.hero_status.update': {
    methods: ["POST"]
    pattern: '/admin/dashboard/hero-status'
    types: {
      body: ExtractBody<InferInput<(typeof import('#validators/hero_status').updateHeroStatusValidator)>>
      paramsTuple: []
      params: {}
      query: ExtractQuery<InferInput<(typeof import('#validators/hero_status').updateHeroStatusValidator)>>
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/hero_statuses_controller').default['update']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/hero_statuses_controller').default['update']>>> | { status: 422; response: { errors: SimpleError[] } }
    }
  }
  'about.store': {
    methods: ["POST"]
    pattern: '/admin/dashboard/about-paragraph/create'
    types: {
      body: ExtractBody<InferInput<(typeof import('#validators/about').aboutParagraphValidator)>>
      paramsTuple: []
      params: {}
      query: ExtractQuery<InferInput<(typeof import('#validators/about').aboutParagraphValidator)>>
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/about_controller').default['store']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/about_controller').default['store']>>> | { status: 422; response: { errors: SimpleError[] } }
    }
  }
  'about.update': {
    methods: ["POST"]
    pattern: '/admin/dashboard/about-paragraph/:uuid/edit'
    types: {
      body: ExtractBody<InferInput<(typeof import('#validators/about').aboutParagraphValidator)>>
      paramsTuple: [ParamValue]
      params: { uuid: ParamValue }
      query: ExtractQuery<InferInput<(typeof import('#validators/about').aboutParagraphValidator)>>
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/about_controller').default['update']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/about_controller').default['update']>>> | { status: 422; response: { errors: SimpleError[] } }
    }
  }
  'about.reorder': {
    methods: ["PUT"]
    pattern: '/admin/dashboard/about-paragraph/reorder'
    types: {
      body: ExtractBody<InferInput<(typeof import('#validators/about').reorderAboutValidator)>>
      paramsTuple: []
      params: {}
      query: ExtractQuery<InferInput<(typeof import('#validators/about').reorderAboutValidator)>>
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/about_controller').default['reorder']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/about_controller').default['reorder']>>> | { status: 422; response: { errors: SimpleError[] } }
    }
  }
  'about.destroy': {
    methods: ["DELETE"]
    pattern: '/admin/dashboard/about-paragraph/:uuid/delete'
    types: {
      body: {}
      paramsTuple: [ParamValue]
      params: { uuid: ParamValue }
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/about_controller').default['destroy']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/about_controller').default['destroy']>>>
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
  'dashboard.users.show': {
    methods: ["GET","HEAD"]
    pattern: '/admin/dashboard/users'
    types: {
      body: {}
      paramsTuple: []
      params: {}
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/users_controller').default['index']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/users_controller').default['index']>>>
    }
  }
  'dashboard.users.store': {
    methods: ["POST"]
    pattern: '/admin/dashboard/user/create'
    types: {
      body: ExtractBody<InferInput<(typeof import('#validators/user').createUserValidator)>>
      paramsTuple: []
      params: {}
      query: ExtractQuery<InferInput<(typeof import('#validators/user').createUserValidator)>>
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/users_controller').default['store']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/users_controller').default['store']>>> | { status: 422; response: { errors: SimpleError[] } }
    }
  }
  'dashboard.user.update': {
    methods: ["POST"]
    pattern: '/admin/dashboard/user/:uuid/edit'
    types: {
      body: ExtractBody<InferInput<(typeof import('#validators/user').updateUserValidator)>>
      paramsTuple: [ParamValue]
      params: { uuid: ParamValue }
      query: ExtractQuery<InferInput<(typeof import('#validators/user').updateUserValidator)>>
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/users_controller').default['update']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/users_controller').default['update']>>> | { status: 422; response: { errors: SimpleError[] } }
    }
  }
  'dashboard.user.destroy': {
    methods: ["DELETE"]
    pattern: '/admin/dashboard/user/:uuid/delete'
    types: {
      body: {}
      paramsTuple: [ParamValue]
      params: { uuid: ParamValue }
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/users_controller').default['destroy']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/users_controller').default['destroy']>>>
    }
  }
  'contact.store': {
    methods: ["POST"]
    pattern: '/contact'
    types: {
      body: ExtractBody<InferInput<(typeof import('#validators/contact').contactValidator)>>
      paramsTuple: []
      params: {}
      query: ExtractQuery<InferInput<(typeof import('#validators/contact').contactValidator)>>
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/contact_controller').default['store']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/contact_controller').default['store']>>> | { status: 422; response: { errors: SimpleError[] } }
    }
  }
}
