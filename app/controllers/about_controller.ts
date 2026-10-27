import type { HttpContext } from '@adonisjs/core/http'
import db from '@adonisjs/lucid/services/db'
import About from '#models/about'
import { aboutParagraphValidator, reorderAboutValidator } from '#validators/about'
import HeroStatus from '#models/hero_status'

export default class AboutController {
  async show({ inertia }: HttpContext) {
    const paragraphs = await About.query().orderBy('order', 'asc')
    const status = await HeroStatus.query().firstOrFail()

    return inertia.render('admin/about', {
      paragraphs,
      status: { isActive: status.isActive, text: status.text },
      heroImageUrl: status.image?.url ?? null,
      heroIsPhotoVisible: status.isPhotoVisible,
    })
  }

  async store({ request, response }: HttpContext) {
    const { content } = await request.validateUsing(aboutParagraphValidator)

    const last = await About.query().orderBy('order', 'desc').first()
    await About.create({ content, order: (last?.order ?? -1) + 1 })

    return response.redirect().back()
  }

  async update({ params, request, response }: HttpContext) {
    const paragraph = await About.findOrFail(params.uuid)
    const { content } = await request.validateUsing(aboutParagraphValidator)

    await paragraph.merge({ content }).save()

    return response.redirect().back()
  }

  async destroy({ params, response }: HttpContext) {
    const paragraph = await About.findOrFail(params.uuid)
    await paragraph.delete()

    return response.redirect().back()
  }

  async reorder({ request, response }: HttpContext) {
    const { uuids } = await request.validateUsing(reorderAboutValidator)

    await db.transaction(async (trx) => {
      await Promise.all(
        uuids.map((uuid, index) =>
          About.query({ client: trx }).where('uuid', uuid).update({ order: index })
        )
      )
    })

    return response.redirect().toRoute('dashboard.about.show')
  }
}
