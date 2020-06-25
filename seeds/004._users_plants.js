exports.seed = function(knex) {
    return knex("users").select().then(users => {
        return knex("plants").select().then(plants => {
            return knex("users_plants").insert([
                { user_id: users.find(user => user.username == 'admin').id, plant_id: plants.find(plant => plant.name == 'Haworthia Pentagona').id },
                { user_id: users.find(user => user.username == 'admin').id, plant_id: plants.find(plant => plant.name == 'Monstera Deliciosa').id },
                { user_id: users.find(user => user.username == 'admin').id, plant_id: plants.find(plant => plant.name == 'Coffea arabica').id },
                { user_id: users.find(user => user.username == 'admin').id, plant_id: plants.find(plant => plant.name == 'Phalaenopsis').id },
                { user_id: users.find(user => user.username == 'admin').id, plant_id: plants.find(plant => plant.name == 'Peperomia').id },
                { user_id: users.find(user => user.username == 'user1').id, plant_id: plants.find(plant => plant.name == 'Haworthia Pentagona').id },
                { user_id: users.find(user => user.username == 'user1').id, plant_id: plants.find(plant => plant.name == 'Monstera Deliciosa').id },
            ]);
        });
    });
};