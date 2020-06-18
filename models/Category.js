const { Model } = require('objection');

const Plant = require('./Plant.js');

class Category extends Model {
    static tableName = 'categories';

    static relationMappings = {
        plants: {
            relation: Model.HasManyRelation,
            modelClass: Elective,
            join: {
                from: 'categories.id',
                to: 'plants.categoryId'
            }
        }
    }
}

module.exports = Category;