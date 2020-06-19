exports.seed = function(knex) {
    
    return knex('categories').insert([
        { id: 1, category: 'Vines and climbers' },
        { id: 2, category: 'Small and medium plants' },
        { id: 3, category: 'Large and tall plants' },
        { id: 4, category: 'Flowering houseplants' },
        { id: 5, category: 'Foliage plants' },
    ]);

};
