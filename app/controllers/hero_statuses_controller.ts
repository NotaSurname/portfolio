import type { HttpContext } from '@adonisjs/core/http'
import HeroStatus from '#models/hero_status'
import { updateHeroStatusValidator, updateHeroPhotoValidator } from '#validators/hero_status'
import { attachmentManager } from '@jrmc/adonis-attachment'

export default class HeroStatusController {
  async update({ request, response }: HttpContext) {
    const payload = await request.validateUsing(updateHeroStatusValidator)

    const status = await HeroStatus.query().firstOrFail()
    status.merge(payload)
    await status.save()

    return response.redirect().back()
  }

  async updatePhoto({ request, response }: HttpContext) {
    const { image, isPhotoVisible } = await request.validateUsing(updateHeroPhotoValidator)

    const status = await HeroStatus.query().firstOrFail()
    if (image) status.image = await attachmentManager.createFromFile(image)
    status.isPhotoVisible = isPhotoVisible
    await status.save()

    return response.redirect().back()
  }
}
