import type { HttpContext } from '@adonisjs/core/http'
import type { NextFn } from '@adonisjs/core/types/http'

export default class AdminMiddleware {
  async handle({ auth, response }: HttpContext, next: NextFn) {
    /**
     * Middleware logic goes here (before the next call)
     */
    if (auth.user!.isAdmin) {
      return response.redirect().toRoute('auth.login')
    }

    /**
     * Call next method in the pipeline and return its output
     */
    return await next()
  }
}
