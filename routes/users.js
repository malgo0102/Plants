const router = require('express').Router();

const User = require('../models/User.js');

const fs = require('fs');

// Render views
const navPage = fs.readFileSync('./public/fragments/nav.html', 'utf8');
const footerPage = fs.readFileSync('./public/fragments/footer.html', 'utf8');
const chatPopup = fs.readFileSync('./public/chat/chat.html', 'utf8');

const userPage = fs.readFileSync('./public/user/user.html', 'utf8');

router.get('/user', async (req, res) => {
    return res.redirect('/user/' + req.session.userid);
});

router.get('/user/:id', async (req, res) => {
    if (req.session.loggedin) {
        return res.send(navPage + userPage + chatPopup + footerPage);
    } else {
        req.session.errormessage = "Please login to view user page!";
        return res.redirect('/login');
    }
    
});

router.get('/user/data/:id', async (req, res) => {
        if (req.session.loggedin) {
            const userWithPlants = await User.query().select('username').where('users.id', req.params.id).withGraphFetched('plants');
            return res.send({ response: userWithPlants[0] });
        } else {
            req.session.errormessage = "Please login to view user page!";
            return res.redirect('/login');
        }

});

module.exports = router;
