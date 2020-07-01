const router = require('express').Router();

const User = require('../models/User.js');

const fs = require('fs');

// Render views
const navPage = fs.readFileSync('./public/fragments/nav.html', 'utf8');
const footerPage = fs.readFileSync('./public/fragments/footer.html', 'utf8');
const chatPopup = fs.readFileSync('./public/chat/chat.html', 'utf8');

const userPage = fs.readFileSync('./public/user/user.html', 'utf8');

router.get('/user', async (req, res) => {
    return res.send(navPage + userPage + chatPopup + footerPage);
});

router.get('/users/data/:id', async (req, res) => {
        if (req.session.loggedin) {
            //res.send('Welcome back, ' + req.session.username + '!');
            const userWithPlants = await User.query().select('username').withGraphFetched('plants').where('id', req.params.id);

            return res.send(userWithPlants);
            
        } else {
            res.send('Please login to view this page!');
        }
        res.end();
});

router.get('/users/data', async (req, res) => {
    if (req.session.loggedin) {
        //res.send('Welcome back, ' + req.session.username + '!');
        const allUserWithPlants = await User.query().select('username').withGraphFetched('plants');

        return res.send(allUsersWithPlants);
        
    } else {
        res.send('Please login to view this page!');
    }
    res.end();
});

router.get('/setsessionvalue', (req, res) => {
    req.session.payingAttention = true;
    return res.send({ response: "OK" });
});

router.get('/getsessionvalue', (req, res) => {
    return res.send({ response: req.session.payingAttention });
});

module.exports = router;
