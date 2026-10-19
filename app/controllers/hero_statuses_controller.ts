import type { HttpContext } from '@adonisjs/core/http'
import HeroStatus from '#models/hero_status'
import { updateHeroStatusValidator } from '#validators/hero_status'

export default class HeroStatusController {
  async update({ request, response }: HttpContext) {
    const payload = await request.validateUsing(updateHeroStatusValidator)

    const status = await HeroStatus.query().firstOrFail()
    status.merge(payload)
    await status.save()

    return response.redirect().back()
  }
}
