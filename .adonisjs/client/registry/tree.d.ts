/* eslint-disable prettier/prettier */
import type { routes } from './index.ts'

export interface ApiDefinition {
  drive: {
    fs: {
      serve: typeof routes['drive.fs.serve']
    }
  }
  home: typeof routes['home']
  auth: {
    login: typeof routes['auth.login']
  }
  check: {
    login: typeof routes['check.login']
  }
  logout: typeof routes['logout']
  dashboard: {
    about: {
      show: typeof routes['dashboard.about.show']
    }
    heroStatus: {
      update: typeof routes['dashboard.hero_status.update']
    }
    heroPhoto: {
      update: typeof routes['dashboard.hero_photo.update']
    }
    projects: typeof routes['dashboard.projects'] & {
      create: typeof routes['dashboard.projects.create']
      edit: typeof routes['dashboard.projects.edit']
    }
    experiences: {
      show: typeof routes['dashboard.experiences.show']
    }
    experience: {
      create: typeof routes['dashboard.experience.create']
      edit: typeof routes['dashboard.experience.edit']
    }
    users: {
      show: typeof routes['dashboard.users.show']
      store: typeof routes['dashboard.users.store']
    }
    user: {
      update: typeof routes['dashboard.user.update']
      destroy: typeof routes['dashboard.user.destroy']
    }
  }
  about: {
    store: typeof routes['about.store']
    update: typeof routes['about.update']
    reorder: typeof routes['about.reorder']
    destroy: typeof routes['about.destroy']
  }
  projects: {
    store: typeof routes['projects.store']
    update: typeof routes['projects.update']
    destroy: typeof routes['projects.destroy']
  }
  experiences: {
    store: typeof routes['experiences.store']
    reorder: typeof routes['experiences.reorder']
    update: typeof routes['experiences.update']
    destroy: typeof routes['experiences.destroy']
  }
  contact: {
    store: typeof routes['contact.store']
  }
}
