import { DateTime } from 'luxon'
import { randomUUID } from 'node:crypto'
import { BaseModel, column, belongsTo, beforeCreate } from '@adonisjs/lucid/orm'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'
import Experience from '#models/experience'

export default class ExperienceStack extends BaseModel {
  @column({ isPrimary: true })
  declare uuid: string

  @column()
  declare experienceUuid: string

  @column()
  declare stackName: string

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @belongsTo(() => Experience, { foreignKey: 'experienceUuid' })
  declare experience: BelongsTo<typeof Experience>

  @beforeCreate()
  static assignUuid(stack: ExperienceStack) {
    stack.uuid = randomUUID()
  }
}
