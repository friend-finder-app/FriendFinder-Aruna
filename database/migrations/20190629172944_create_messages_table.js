
exports.up = function(knex) {
  return knex.schema.createTable('messages', tbl => {
      tbl.increments()

      tbl
      .string('messages',5000)
  })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('messages')

};
