import type { HttpContext } from '@adonisjs/core/http'
import { createProjectValidator, updateProjectValidator } from '#validators/project'
import Project from '#models/project'
import db from '@adonisjs/lucid/services/db'
import { attachmentManager } from '@jrmc/adonis-attachment'

export default class ProjectsController {
  async show({ inertia }: HttpContext) {
    const projects = await Project.query().preload('stacks').orderBy('order', 'asc')
    return inertia.render('admin/projects', { projects })
  }

  async create({ inertia }: HttpContext) {
    return inertia.render('admin/form/project_form', {})
  }

  async store({ request, response }: HttpContext) {
    const { image, stacks, ...data } = await request.validateUsing(createProjectValidator)

    const lastProject = await Project.query().orderBy('order', 'desc').first()
    const order = (lastProject?.order ?? -1) + 1

    await db.transaction(async (trx) => {
      const project = await Project.create(
        {
          ...data,
          image: await attachmentManager.createFromFile(image),
          order,
        },
        { client: trx }
      )
      await project.related('stacks').createMany(stacks.map((stackName) => ({ stackName })))
    })

    return response.redirect().toRoute('dashboard.projects')
  }

  async destroy({ response, params }: HttpContext) {
    const project = await Project.query().where('uuid', params.uuid).firstOrFail()

    await project.delete()

    return response.redirect().back()
  }

  async edit({ inertia, params }: HttpContext) {
    const project = await Project.query().where('uuid', params.uuid).preload('stacks').firstOrFail()
    return inertia.render('admin/form/project_form', {
      project: project.serialize() as never,
    })
  }

  async update({ params, request, response }: HttpContext) {
    const project = await Project.findOrFail(params.uuid)
    const { stacks, image, ...data } = await request.validateUsing(updateProjectValidator)

    await db.transaction(async (trx) => {
      project.useTransaction(trx)
      project.merge(data)
      if (image) project.image = await attachmentManager.createFromFile(image)
      await project.save()

      await project.related('stacks').query().delete()
      await project.related('stacks').createMany(stacks.map((stackName: string) => ({ stackName })))
    })

    return response.redirect().toRoute('dashboard.projects')
  }
}
