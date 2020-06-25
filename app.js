const express = require('express');
const app = express();

app.use(express.json());
app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));

// Setup Objection and Knex

const { Model } = require('objection');
const Knex = require('knex');
const knexfile = require('./knexfile.js');

const knex = Knex(knexfile.development);

Model.knex(knex);

// Setup socket

// Setup session

// Setup rate limiter

// Import routes

// Setup routes

// Render views
const fs = require('fs');

const navPage = fs.readFileSync('./public/fragments/nav.html', 'utf8');
const footerPage = fs.readFileSync('./public/fragments/footer.html', 'utf8');

const homePage = fs.readFileSync('./public/home/home.html', 'utf8');

app.get('/', (req, res) => {
    return res.send(navPage + homePage + footerPage);
});


const PORT = 3000;

app.listen(PORT, (error) => {
    if (error) {
        console.log(error);
    }
    console.log("Server is running on the port", PORT);
})
