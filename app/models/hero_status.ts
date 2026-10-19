import { randomUUID } from 'node:crypto'
import { DateTime } from 'luxon'
import { BaseModel, beforeCreate, column } from '@adonisjs/lucid/orm'

export default class HeroStatus extends BaseModel {
  @column({ isPrimary: true })
  declare uuid: string

  @column()
  declare isActive: boolean

  @column()
  declare text: string

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @beforeCreate()
  static assignUuid(status: HeroStatus) {
    status.uuid = randomUUID()
  }
}
