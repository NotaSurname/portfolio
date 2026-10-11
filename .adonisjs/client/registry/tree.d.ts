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
    index: typeof routes['dashboard.index']
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
}
