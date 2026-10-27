import { randomUUID } from 'node:crypto'
import { DateTime } from 'luxon'
import { BaseModel, beforeCreate, column } from '@adonisjs/lucid/orm'
import { attachment } from '@jrmc/adonis-attachment'
import type { Attachment } from '@jrmc/adonis-attachment/types/attachment'

export default class HeroStatus extends BaseModel {
  @column({ isPrimary: true })
  declare uuid: string

  @column()
  declare isActive: boolean

  @column()
  declare text: string

  @attachment({ preComputeUrl: true })
  declare image: Attachment | null

  @column()
  declare isPhotoVisible: boolean

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @beforeCreate()
  static assignUuid(status: HeroStatus) {
    status.uuid = randomUUID()
  }
}
