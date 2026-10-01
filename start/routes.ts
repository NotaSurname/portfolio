/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
import { middleware } from '#start/kernel'
import { apiThrottle } from '#start/limiter'
const ProjectsController = () => import('#controllers/projects_controller')
const DashboardController = () => import('#controllers/dashboard_controller')
const AuthController = () => import('#controllers/auth_controller')

router.on('/').renderInertia('home', {}).as('home')
router.get('/auth/login', [AuthController, 'index']).as('auth.login').use(middleware.guest())
router.post('/login', [AuthController, 'check']).as('check.login')
router
  .post('/logout', [AuthController, 'logout'])
  .as('logout')
  .use(middleware.auth())
  .use(apiThrottle)

router
  .group(() => {
    router.get('/admin/dashboard', [DashboardController, 'index']).as('dashboard.index')
    router.get('/admin/dashboard/projects', [ProjectsController, 'show']).as('dashboard.projects')
    router
      .get('/admin/dashboard/projects/create', [ProjectsController, 'create'])
      .as('dashboard.projects.create')
    router.post('/admin/dashboard/projects/create', [ProjectsController, 'store'])
  })
  .use([middleware.auth(), middleware.admin()])
