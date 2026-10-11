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
const ExperiencesController = () => import('#controllers/experiences_controller')
const HomeController = () => import('#controllers/home_controller')
const ProjectsController = () => import('#controllers/projects_controller')
const DashboardController = () => import('#controllers/dashboard_controller')
const AuthController = () => import('#controllers/auth_controller')

router.where('uuid', router.matchers.uuid())
router.get('/', [HomeController, 'index']).as('home')
router.get('/auth/login', [AuthController, 'index']).as('auth.login').use(middleware.guest())
router
  .post('/login', [AuthController, 'check'])
  .as('check.login')
  .use(middleware.guest())
  .use(apiThrottle)
router.post('/logout', [AuthController, 'logout']).as('logout').use(middleware.auth())

router
  .group(() => {
    router.get('/', [DashboardController, 'index']).as('dashboard.index')
    router.get('/projects', [ProjectsController, 'show']).as('dashboard.projects')
    router.get('/projects/create', [ProjectsController, 'create']).as('dashboard.projects.create')
    router.post('/projects/create', [ProjectsController, 'store'])
    router.get('/projects/:uuid/edit', [ProjectsController, 'edit']).as('dashboard.projects.edit')
    router.post('/projects/:uuid/edit', [ProjectsController, 'update'])

    router.delete('/projects/:uuid/delete', [ProjectsController, 'destroy'])

    router.get('/experiences', [ExperiencesController, 'show']).as('dashboard.experiences.show')
    router
      .get('/experience/create', [ExperiencesController, 'create'])
      .as('dashboard.experience.create')
    router.post('/experience/create', [ExperiencesController, 'store'])
    router.put('/experience/reorder', [ExperiencesController, 'reorder'])
    router
      .get('/experience/:uuid/edit', [ExperiencesController, 'edit'])
      .as('dashboard.experience.edit')
    router.post('/experience/:uuid/edit', [ExperiencesController, 'update'])

    router.delete('/experience/:uuid/delete', [ExperiencesController, 'destroy'])
  })
  .use([middleware.auth(), middleware.admin()])
  .prefix('/admin/dashboard')
