import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'projects'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.uuid('uuid').primary()
      table.string('title', 255).notNullable()
      table.string('description').notNullable()
      table.text('explanation').notNullable()
      table.jsonb('image').notNullable()
      table.string('project_url', 2000)
      table.string('github_url', 2000)
      table.string('card_size').notNullable().defaultTo('normal')
      table.integer('order').notNullable().defaultTo(0)

      table.timestamp('created_at').notNullable()
      table.timestamp('updated_at').notNullable()
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
