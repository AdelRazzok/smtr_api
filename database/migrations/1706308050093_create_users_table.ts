import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'users'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table.string('username').notNullable().unique()
      table.string('email', 255).notNullable().unique()
      table.string('avatar_url')
      table.string('password').notNullable()
      table.string('access_token').notNullable()
      table.string('refresh_token').notNullable()
      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
