import { BaseModel, beforeCreate, column, hasMany } from '@adonisjs/lucid/orm'
import { DateTime } from 'luxon'
import { randomUUID } from 'node:crypto'
import Stack from '#models/stack'
import type { HasMany } from '@adonisjs/lucid/types/relations'
import { attachment } from '@jrmc/adonis-attachment'
import type { Attachment } from '@jrmc/adonis-attachment/types/attachment'

export type CardSize = 'normal' | 'medium' | 'wide'

export default class Project extends BaseModel {
  @column({ isPrimary: true })
  declare uuid: string

  @column()
  declare title: string

  @column()
  declare description: string

  @column()
  declare explanation: string

  @attachment({ preComputeUrl: true })
  declare image: Attachment

  @column()
  declare projectUrl: string | null

  @column()
  declare githubUrl: string | null

  @column()
  declare cardSize: CardSize

  @column()
  declare order: number

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @beforeCreate()
  static assignUuid(project: Project) {
    project.uuid = randomUUID()
  }

  @hasMany(() => Stack, { foreignKey: 'projectUuid' })
  declare stacks: HasMany<typeof Stack>
}
