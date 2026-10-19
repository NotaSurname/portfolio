import { BaseSeeder } from '@adonisjs/lucid/seeders'
import HeroStatus from '#models/hero_status'

export default class extends BaseSeeder {
  async run() {
    const existing = await HeroStatus.query().first()
    if (existing) return

    await HeroStatus.create({ isActive: false, text: 'Disponible' })
  }
}
