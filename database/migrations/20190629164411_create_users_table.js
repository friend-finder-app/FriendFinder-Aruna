
exports.up = function (knex) {
    return knex.schema.createTable('users', tbl => {
        tbl.increments()

        tbl
            .string('username', 128)
            .notNullable()

        tbl
            .string('password', 128)
            .notNullable()

        tbl
            .string('email', 128)
            .notNullable()
            .unique()

        tbl
            .string('phoneNumber', 10)
            .notNullable()
            .unique()

        tbl
            .string('profilePic', 500)

        tbl
            .string('aboutMe', 500)

        tbl
            .string('interests', 256)

        tbl
            .integer('distance')

        tbl
            .string('address', 300)


    })
};

exports.down = function (knex) {
    return knex.schema.dropTableIfExists('users')
};
