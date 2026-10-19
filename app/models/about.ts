import { randomUUID } from 'node:crypto'
import { DateTime } from 'luxon'
import { BaseModel, beforeCreate, column } from '@adonisjs/lucid/orm'

export default class About extends BaseModel {
  static table = 'about'

  @column({ isPrimary: true })
  declare uuid: string

  @column()
  declare content: string

  @column()
  declare order: number

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @beforeCreate()
  static assignUuid(about: About) {
    about.uuid = randomUUID()
  }
}
