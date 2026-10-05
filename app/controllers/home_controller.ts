import type { HttpContext } from '@adonisjs/core/http'
import Project from '#models/project'

export default class HomeController {
  async index({ inertia }: HttpContext) {
    const projects = await Project.query().preload('stacks').orderBy('order', 'asc')

    return inertia.render('home', { projects })
  }
}
