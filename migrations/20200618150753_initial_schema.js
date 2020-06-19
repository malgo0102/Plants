
exports.up = function(knex) {
    return knex.schema
    .createTable('users', table => {
        table.increments('id'),
        table.string('username').unique().notNullable(),
        table.string('password').notNullable(),

        table.dateTime('updated_at').defaultTo(knex.raw('NULL ON UPDATE CURRENT_TIMESTAMP')),
        table.timestamp('created_at').defaultTo(knex.fn.now())
    })
    .createTable('categories', table => {
        table.increments('id'),
        table.string('category').unique().notNullable()
    })
    .createTable('plants', table => {
        table.increments('id'),
        table.string('name').unique().notNullable(),
        table.string('nickname'),
        table.string('watering'),
        table.string('humidity'),
        table.string('fertalizing'),
        table.string('temperature'),
        table.string('lighting'),
        table.string('soil'),
        table.string('pruning'),
        table.string('picture'),
        table.integer('category_id').unsigned().notNullable(),
        table.foreign('category_id').references('categories.id'),
        table.integer('user_id').unsigned(),
        table.foreign('user_id').references('users.id')
    })

};

exports.down = function(knex) {
    return knex.schema
        .dropTableIfExists('plants')
        .dropTableIfExists('categories')
        .dropTableIfExists('users');
  
};
