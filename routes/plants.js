const router = require('express').Router();

const Plant = require('../models/Plant.js');

const fs = require('fs');

// Render views
const navPage = fs.readFileSync('./public/fragments/nav.html', 'utf8');
const footerPage = fs.readFileSync('./public/fragments/footer.html', 'utf8');
const chatPopup = fs.readFileSync('./public/chat/chat.html', 'utf8');

const plantsPage = fs.readFileSync('./public/plants/plants.html', 'utf8');
const plantPage = fs.readFileSync('./public/plant/plant.html', 'utf8');

router.get('/plants', (req, res) => {
    return res.send(navPage + plantsPage + chatPopup + footerPage);
});

router.get('/plants/data', async (req, res) => {
    try {
        const plants = await Plant.query().select('plants.*', 'categories.category').join('categories', 'plants.category_id', '=', 'categories.id');
        return res.send({ response: plants });
    } catch (error) {
        return res.send({ response: "Error in database" + error });
    }
});

router.get('/plant/:id', (req, res) => {
    return res.send(navPage + plantPage + chatPopup + footerPage);
});

router.get('/plant/data/:id', async (req, res) => {
    try {
        const plant = await Plant.query().select('plants.*').where('id', req.params.id);
        return res.send({ response: plant });
    } catch (error) {
        return res.send({ response: "Error in database " + error });
    }
});

module.exports = router;