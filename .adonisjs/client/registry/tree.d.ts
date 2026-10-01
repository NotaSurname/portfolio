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
    }
  }
  projects: {
    store: typeof routes['projects.store']
  }
}
