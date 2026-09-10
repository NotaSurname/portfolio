import { BaseSeeder } from '@adonisjs/lucid/seeders'
import User from '#models/user'

export default class extends BaseSeeder {
  async run() {
    await User.createMany([
      {
        email: 'test@test.com',
        password: 'password',
        isAdmin: true,
      },
      {
        email: 'aze@test.com',
        password: 'password',
        isAdmin: false,
      },
    ])
  }
}
