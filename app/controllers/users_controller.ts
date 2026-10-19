import type { HttpContext } from '@adonisjs/core/http'
import User from '#models/user'
import { createUserValidator, updateUserValidator } from '#validators/user'

export default class UsersController {
  async index({ inertia, auth }: HttpContext) {
    const users = await User.query().orderBy('createdAt', 'asc')

    return inertia.render('admin/user', {
      currentUserUuid: auth.getUserOrFail().uuid,
      users: users.map((user) => ({
        uuid: user.uuid,
        email: user.email,
        isAdmin: user.isAdmin,
        createdAt: user.createdAt!.toISO(),
        updatedAt: user.updatedAt!.toISO(),
      })),
    })
  }

  async store({ request, response }: HttpContext) {
    const { email, password, isAdmin } = await request.validateUsing(createUserValidator)
    await User.create({ email, password, isAdmin })
    return response.redirect().back()
  }

  async update({ params, request, response, auth, session }: HttpContext) {
    const user = await User.query().where('uuid', params.uuid).firstOrFail()
    const { email, isAdmin, password } = await request.validateUsing(updateUserValidator, {
      meta: { userUuid: user.uuid },
    })

    if (user.uuid === auth.getUserOrFail().uuid && !isAdmin) {
      session.flash('error', 'Tu ne peux pas retirer tes propres droits admin')
      return response.redirect().back()
    }

    user.merge({ email, isAdmin })
    if (password) user.password = password

    await user.save()
    return response.redirect().back()
  }

  async destroy({ params, auth, response, session }: HttpContext) {
    if (params.uuid === auth.getUserOrFail().uuid) {
      session.flash('error', 'Tu ne peux pas supprimer ton propre compte')
      return response.redirect().back()
    }

    const user = await User.query().where('uuid', params.uuid).firstOrFail()
    await user.delete()

    return response.redirect().back()
  }
}
