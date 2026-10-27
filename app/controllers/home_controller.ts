import type { HttpContext } from '@adonisjs/core/http'
import Project from '#models/project'
import Experience from '#models/experience'
import About from '#models/about'
import HeroStatus from '#models/hero_status'

export default class HomeController {
  async index({ inertia }: HttpContext) {
    const projects = await Project.query().preload('stacks').orderBy('order', 'asc')
    const experiences = await Experience.query().preload('stacks').orderBy('order', 'asc')
    const paragraphs = await About.query().orderBy('order', 'asc')
    const heroStatus = await HeroStatus.query().first()

    return inertia.render('home', {
      projects,
      experiences,
      paragraphs,
      heroStatus: heroStatus?.isActive && heroStatus.text ? { text: heroStatus.text } : null,
      heroImageUrl: heroStatus?.isPhotoVisible ? (heroStatus.image?.url ?? null) : null,
    })
  }
}
