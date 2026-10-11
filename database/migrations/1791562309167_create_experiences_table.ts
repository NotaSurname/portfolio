import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'experiences'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.uuid('uuid').primary()
      table.string('role').notNullable()
      table.string('company').notNullable()
      table.string('location').notNullable()
      table.string('period').notNullable()
      table.text('description').notNullable()
      table.integer('order').notNullable().defaultTo(0)

      table.timestamp('created_at').notNullable()
      table.timestamp('updated_at').notNullable()
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
