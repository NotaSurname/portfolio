import type { HttpContext } from '@adonisjs/core/http'
import { loginValidator } from '#validators/login'
import User from '#models/user'

export default class AuthController {
  async index({ inertia }: HttpContext) {
    return inertia.render('auth/login', {})
  }

  async check({ request, auth, response, session }: HttpContext) {
    const { email, password } = await request.validateUsing(loginValidator)
    try {
      const user = await User.verifyCredentials(email, password)
      await auth.use('web').login(user)
      return response.redirect().toRoute('home')
    } catch {
      session.flash('error', 'Email ou mot de passe invalide')
      return response.redirect().back()
    }
  }

  async logout({ auth, response, request }: HttpContext) {
    await auth.use('web').logout()

    if (request.header('referer', '')?.includes('/admin')) {
      return response.redirect().toRoute('home')
    }

    return response.redirect().toRoute('home')
  }
}
