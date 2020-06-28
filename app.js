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

// Setup Socket
const server = require("http").createServer(app);
const io = require("socket.io")(server);

const escape = require('escape-html');

io.on('connection', socket => {

    socket.on('a client wrote this', (data) => {
        // emits to all clients
        io.emit("A client said", { message: escape(data.message) });
    });

});

// Setup Session
const session = require('express-session');

// Copy the config.template.json file and fill out your own secret
const config = require('./config/config.json');

app.use(session({
    secret: config.sessionSecret,
    resave: false,
    saveUninitialized: true
}));

// Setup rate limiter


// Render views
const fs = require('fs');

const navPage = fs.readFileSync('./public/fragments/nav.html', 'utf8');
const footerPage = fs.readFileSync('./public/fragments/footer.html', 'utf8');
const chatPopup = fs.readFileSync('./public/chat/chat.html', 'utf8');

const homePage = fs.readFileSync('./public/home/home.html', 'utf8');

app.get('/', (req, res) => {
    return res.send(navPage + homePage + chatPopup + footerPage);
});

// Import routes
const authRoute = require('./routes/auth.js');
const plantRoute = require('./routes/plants.js');

// Setup routes
app.use(authRoute);
app.use(plantRoute);

const PORT = 3000;

server.listen(PORT, (error) => {
    if (error) {
        console.log(error);
    }
    console.log("Server is running on the port", PORT);
})
