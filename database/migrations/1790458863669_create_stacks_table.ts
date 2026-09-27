import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'stacks'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.uuid('uuid').primary()
      table
        .uuid('project_uuid')
        .notNullable()
        .references('uuid')
        .inTable('projects')
        .onDelete('CASCADE')
      table.string('stack_name').notNullable().unique()

      table.timestamp('created_at').notNullable()
      table.timestamp('updated_at').notNullable()

      table.unique(['project_uuid', 'stack_name'])
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
