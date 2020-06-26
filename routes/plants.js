const router = require('express').Router();

const Plant = require('../models/Plant.js');

router.get('/plants/data', async (req, res) => {
    try {
        const plants = await Plant.query().select('plants.*', 'categories.category').join('categories', 'plants.category_id', '=', 'categories.id');
        return res.send({ response: plants });
    } catch (error) {
        return res.send({ response: "Error in database" + error });
    }
});

module.exports = router;