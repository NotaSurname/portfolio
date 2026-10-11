import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'experience_stacks'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.uuid('uuid').primary()
      table
        .uuid('experience_uuid')
        .notNullable()
        .references('uuid')
        .inTable('experiences')
        .onDelete('CASCADE')
      table.string('stack_name').notNullable()

      table.timestamp('created_at').notNullable()
      table.timestamp('updated_at').notNullable()

      table.unique(['experience_uuid', 'stack_name'])
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
