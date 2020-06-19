const { Model } = require('objection');

const Plant = require('./Plant.js');

class User extends Model {
    static tableName = 'users';

    static relationMappings = {
        plants: {
            relation: Model.HasManyRelation,
            modelClass: Plant,
            join: {
                from: 'users.id',
                to: 'plants.userId'
            }

        }
    }

}

module.exports = User;
