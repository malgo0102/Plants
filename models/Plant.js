const { Model } = require('objection');

const User = require('./User');

class Plant extends Model {
    static tableName = 'plants';

    static relationMappings = {
        user: {
            relation: Model.BelongsToOneRelation,
            modelClass: User,
            join: {
                from: 'plants.userId',
                to: 'users.id'
            }

        }
    }
}

module.exports = Plant;