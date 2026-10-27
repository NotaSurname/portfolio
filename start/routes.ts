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
const UsersController = () => import('#controllers/users_controller')
const HeroStatusController = () => import('#controllers/hero_statuses_controller')
const AboutController = () => import('#controllers/about_controller')
const ContactController = () => import('#controllers/contact_controller')
const ExperiencesController = () => import('#controllers/experiences_controller')
const HomeController = () => import('#controllers/home_controller')
const ProjectsController = () => import('#controllers/projects_controller')
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
    router.get('/about', [AboutController, 'show']).as('dashboard.about.show')

    router.post('/hero-status', [HeroStatusController, 'update']).as('dashboard.hero_status.update')
    router
      .post('/hero-photo', [HeroStatusController, 'updatePhoto'])
      .as('dashboard.hero_photo.update')
    router.post('/about-paragraph/create', [AboutController, 'store'])
    router.post('/about-paragraph/:uuid/edit', [AboutController, 'update'])
    router.put('/about-paragraph/reorder', [AboutController, 'reorder'])
    router.delete('/about-paragraph/:uuid/delete', [AboutController, 'destroy'])

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

    router.get('/users', [UsersController, 'index']).as('dashboard.users.show')
    router.post('/user/create', [UsersController, 'store']).as('dashboard.users.store')
    router.post('/user/:uuid/edit', [UsersController, 'update']).as('dashboard.user.update')
    router.delete('/user/:uuid/delete', [UsersController, 'destroy']).as('dashboard.user.destroy')
  })
  .use([middleware.auth(), middleware.admin()])
  .prefix('/admin/dashboard')

router.post('/contact', [ContactController, 'store']).use(apiThrottle)
