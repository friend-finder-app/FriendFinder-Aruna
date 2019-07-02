
exports.up = function (knex) {
    return knex.schema.createTable('matches', tbl => {
        tbl.increments()

        tbl
            .integer('user_id')
            .notNullable()
            .unsigned()
            .references('id')
            .inTable('users')
            .onDelete('RESTRICT')
            .onUpdate('CASCADE')

        tbl
            .boolean('isInterested')
            .notNullable()

        tbl
            .integer('match_id')
            .notNullable()

    })

};

exports.down = function (knex) {
    return knex.schema.dropTableIfExists('matches')

};
