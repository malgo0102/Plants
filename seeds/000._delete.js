exports.seed = function(knex) {

    return knex('users_plants').del()
    .then(function() {
        return knex('categories').del();
    })
    .then(function() {
        return knex('plants').del(); 
    })
    .then(function () {
        return knex('users').del();
    })

};

