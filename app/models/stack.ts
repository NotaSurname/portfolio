import { DateTime } from 'luxon'
import { randomUUID } from 'node:crypto'
import { BaseModel, column, belongsTo, beforeCreate } from '@adonisjs/lucid/orm'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'
import Project from '#models/project'

export default class ProjectStack extends BaseModel {
  @column({ isPrimary: true })
  declare uuid: string

  @column()
  declare projectUuid: string

  @column()
  declare stackName: string

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @belongsTo(() => Project, { foreignKey: 'projectUuid' })
  declare project: BelongsTo<typeof Project>

  @beforeCreate()
  static assignUuid(stack: ProjectStack) {
    stack.uuid = randomUUID()
  }
}
