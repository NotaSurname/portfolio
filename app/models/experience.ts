import { BaseModel, beforeCreate, column, hasMany } from '@adonisjs/lucid/orm'
import { DateTime } from 'luxon'
import { randomUUID } from 'node:crypto'
import ExperienceStack from '#models/experience_stack'
import { type HasMany } from '@adonisjs/lucid/types/relations'

export default class Experience extends BaseModel {
  @column({ isPrimary: true })
  declare uuid: string

  @column()
  declare role: string

  @column()
  declare company: string

  @column()
  declare location: string

  @column()
  declare period: string

  @column()
  declare description: string

  @column()
  declare order: number

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @beforeCreate()
  static assignUuid(experience: Experience) {
    experience.uuid = randomUUID()
  }

  @hasMany(() => ExperienceStack, { foreignKey: 'experienceUuid' })
  declare stacks: HasMany<typeof ExperienceStack>
}
