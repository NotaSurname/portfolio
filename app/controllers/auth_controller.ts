import type { HttpContext } from '@adonisjs/core/http'
import { loginValidator } from '#validators/login'
import User from '#models/user'
import limiter from '@adonisjs/limiter/services/main'

export default class AuthController {
  async index({ inertia }: HttpContext) {
    return inertia.render('auth/login', {})
  }

  async check({ request, auth, response, session }: HttpContext) {
    const { email, password } = await request.validateUsing(loginValidator)

    const loginLimiter = limiter.use({
      requests: 5,
      duration: '1 min',
    })

    const key = `login_${request.ip()}_${email}`

    try {
      const [error, user] = await loginLimiter.penalize(key, () => {
        return User.verifyCredentials(email, password)
      })

      if (error) {
        session.flash(
          'error',
          `Trop de tentatives. Réessaie dans ${error.response.availableIn} secondes`
        )
        return response.redirect().back()
      }

      await auth.use('web').login(user)
      return response.redirect().toRoute('home')
    } catch {
      session.flash('error', 'Email ou mot de passe incorrect')
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
