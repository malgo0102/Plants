const { Model } = require('objection');

const Category = require('./Category');
const User = require('./User');

class Plant extends Model {
    static tableName = 'plants';

    static relationMappings = {
        category: {
            relation: Model.BelongsToOneRelation,
            modelClass: Category,
            join: {
                from: 'plants.categoryId',
                to: 'categories.id'
            }
        },
        user: {
            relation: Model.ManyToManyRelation,
            modelClass: User,
            join: {
                from: 'plants.id',
                through: {
                    from: "users_plants.plantId",
                    to: "users_plants.userId"
                },
                to: 'users.id'
            }
        }

    }
}

module.exports = Plant;