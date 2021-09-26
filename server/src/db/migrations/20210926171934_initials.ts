import { Knex } from "knex";
import { chatroom, messages, users } from "../constants/tableNames";
import {v4 as uuid} from 'uuid'


export async function up(knex: Knex): Promise<void> {
    await Promise.all([
        knex.schema.createTable(users, (table) => {
            table.increments('id').primary();
            table.uuid('user_id').defaultTo(uuid());
            table.string('username').unique().notNullable();
            table.string('email', 155).notNullable();
            table.string('password').notNullable();
            table.string('avatar').notNullable();
            table.date('created_at').notNullable().defaultTo(knex.fn.now())
            table.date('updated_at').nullable()
        }),
        knex.schema.createTable(chatroom, (table) => {
            table.increments('id').primary();
            table.uuid('room_id').defaultTo(uuid()).unique();
            table.string('title').notNullable();
            table.integer('owner')
            .references('id')
            .inTable(users)
            .unsigned()
            .notNullable();
            table.timestamp('created_at').defaultTo(knex.fn.now()).notNullable()
        }),
        knex.schema.createTable(messages, (table) => {
            table.increments('id').primary();
            table.uuid('message_id').defaultTo(uuid()).unique();
            table.string('content').notNullable()
            table.integer('at_chat')
            .references('id')
            .inTable(chatroom)
            .unsigned()
            .notNullable()
            table.timestamp('created_at').defaultTo(knex.fn.now())
        })
    ])
}


export async function down(knex: Knex): Promise<void> {
    await Promise.all([
        users,
        chatroom,
        messages
    ].map((tablename) => knex.schema.dropTableIfExists(tablename)))
}

