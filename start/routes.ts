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
const AuthController = () => import('#controllers/auth_controller')

router.on('/').renderInertia('home', {}).as('home')
router.get('auth/login', [AuthController, 'index']).as('auth.login').use(middleware.guest())
router.post('/login', [AuthController, 'check']).as('check.login')
router
  .post('/logout', [AuthController, 'logout'])
  .as('logout')
  .use(middleware.auth())
  .use(apiThrottle)

router.get('admin/dashboard', [ProjectsController, 'index']).use(middleware.auth())
