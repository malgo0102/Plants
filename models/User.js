const { Model } = require('objection');

const Plant = require('./Plant.js');

class User extends Model {
    static tableName = 'users';

    static relationMappings = {
        plant: {
            relation: Model.ManyToManyRelation,
            modelClass: Plant,
            join: {
                from: 'users.id',
                through: {
                    from: "users_plants.userId",
                    to: "users_plants.plantId"
                },
                to: 'plants.id'
            }
        }
    }

}

module.exports = User;

