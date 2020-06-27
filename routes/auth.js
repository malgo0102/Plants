const router = require('express').Router();

const User = require("../models/User.js");

const bcrypt = require('bcrypt');
const saltRounds = 12;

const fs = require('fs');

// Render views
const navPage = fs.readFileSync('./public/fragments/nav.html', 'utf8');
const footerPage = fs.readFileSync('./public/fragments/footer.html', 'utf8');
const chatPopup = fs.readFileSync('./public/chat/chat.html', 'utf8');

const loginPage = fs.readFileSync('./public/login/login.html', 'utf8');
const signupPage = fs.readFileSync('./public/signup/signup.html', 'utf8');

router.get('/login', (req, res) => {
    return res.send(navPage + loginPage + chatPopup + footerPage);
});

router.get('/signup', (req, res) => {
    return res.send(navPage + signupPage + chatPopup + footerPage);
});

router.post('/login', (req, res) => {
    // Get the data from the request
    const { username, password } = req.body;
    //console.log("Username is: " + username + " and password: " + password);
    // Validate the data 
    if (username && password) {
        // Check if user exists and get their password
        try {
            User.query().where('username', username).select('username', 'password').then(foundUser => {
                //console.log(foundUser[0].password);
                if (foundUser.length < 1) {
                    return res.status(400).send({ response: "User not found" });
                } else {
                    bcrypt.compare(password, foundUser[0].password).then((result) => {
                        console.log("post login - your password:", password)

                        if (result) {
                            // Send a response based on the comparison handle session
                            req.session.loggedin = true;
                            req.session.username = username;
                            return res.redirect('/');
                        } else {
                            return res.status(400).send(
                                { response: "Password does not match" });
                        }
                    });
                }
            });
        } catch (error) {
            return res.status(500).send({ response: "Something went wrong with the DB" });
        }
    } else {
        return res.status(400).send({ response: "Username or password missing" });
    }
});

router.post('/signup', (req, res) => {
    const { username, password } = req.body;
    console.log("router post signup")
    if (username && password) {
        // password validation
        if (password.length < 8) {
            return res.status(400).send({ response: "Password must be 8 characters or longer" });
        } else {
            try {
                User.query().select('username').where('username', username).then(foundUser => {
                    if (foundUser.length > 0) {
                        return res.status(400).send({ response: "User already exists" });
                    } else {
                        bcrypt.hash(password, saltRounds).then(hashedPassword => {
                            User.query().insert({
                                username,
                                password: hashedPassword
                            }).then(createdUser => {
                                //return res.send({ response: `The user ${createdUser.username} was created` });
                                return res.redirect('/login');
                            });
                        });
                    }
                });
            } catch (error) {
                return res.status(500).send({ response: "Something went wrong with the DB" });
            }
        }
    } else {
        return res.status(400).send({ response: "username or password missing" });
    }
});

router.get('/logout', (req, res) => {
    if (req.session) {
        req.session.destroy(err => {
            if (err) {
                return next(err);
            } else {
                return res.redirect('/');
            }
        });
    }
});

module.exports = router;