import type { HttpContext } from '@adonisjs/core/http'
import { experienceValidator } from '#validators/experience'
import Experience from '#models/experience'
import db from '@adonisjs/lucid/services/db'
import { reorderExperiencesValidator } from '#validators/reorder'

export default class ExperiencesController {
  async show({ inertia }: HttpContext) {
    const experiences = await Experience.query().preload('stacks').orderBy('order', 'asc')
    return inertia.render('admin/experience', { experiences })
  }

  async create({ inertia }: HttpContext) {
    return inertia.render('admin/form/experience_form', {})
  }

  async store({ response, request }: HttpContext) {
    const { stacks, ...data } = await request.validateUsing(experienceValidator)

    await db.transaction(async (trx) => {
      const last = await Experience.query({ client: trx }).orderBy('order', 'desc').first()
      const experience = await Experience.create(
        { ...data, order: (last?.order ?? -1) + 1 },
        { client: trx }
      )
      await experience.related('stacks').createMany(stacks.map((stackName) => ({ stackName })))
    })

    return response.redirect().toRoute('dashboard.experiences.show')
  }

  async reorder({ request, response }: HttpContext) {
    const { uuids } = await request.validateUsing(reorderExperiencesValidator)

    await db.transaction(async (trx) => {
      await Promise.all(
        uuids.map((uuid, index) =>
          Experience.query({ client: trx }).where('uuid', uuid).update({ order: index })
        )
      )

      return response.redirect().toRoute('dashboard.experiences.show')
    })
  }

  async destroy({ response, params }: HttpContext) {
    const experience = await Experience.query().where('uuid', params.uuid).firstOrFail()

    await experience.delete()

    return response.redirect().back()
  }

  async edit({ inertia, params }: HttpContext) {
    const experience = await Experience.query()
      .where('uuid', params.uuid)
      .preload('stacks')
      .firstOrFail()
    return inertia.render('admin/form/experience_form', {
      experience: experience.serialize() as never,
    })
  }

  async update({ request, response, params }: HttpContext) {
    const experience = await Experience.findOrFail(params.uuid)
    const { stacks, ...data } = await request.validateUsing(experienceValidator)

    await db.transaction(async (trx) => {
      experience.useTransaction(trx)
      experience.merge(data)

      await experience.save()
      await experience.related('stacks').query().delete()
      await experience.related('stacks').createMany(stacks.map((stackName) => ({ stackName })))
    })

    return response.redirect().toRoute('dashboard.experiences.show')
  }
}
