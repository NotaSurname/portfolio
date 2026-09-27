/* eslint-disable prettier/prettier */
import type { routes } from './index.ts'

export interface ApiDefinition {
  home: typeof routes['home']
  auth: {
    login: typeof routes['auth.login']
  }
  check: {
    login: typeof routes['check.login']
  }
  logout: typeof routes['logout']
  projects: {
    index: typeof routes['projects.index']
  }
}
