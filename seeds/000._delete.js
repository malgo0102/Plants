exports.seed = function(knex) {

    return knex('plants').del()
    .then(function() {
        return knex('categories').del();
    })
    .then(function() {
        return knex('plants').del();
    })

};
