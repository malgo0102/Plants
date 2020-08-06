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
// event listener
    // setInterval(() => {
    //     io.emit("A server said", {message: "5 seconds just passed"})
    // }, 5000);
    socket.on('a client wrote this', (data) => {
        // emits to all clients
        console.log(data)
        io.emit("A client said", { message: escape(data.message), username: data.username });
    });
});

// Setup Session
const session = require('express-session');
//session: set odf data that is maintained on the server for a client with cookies

// Copy the config.template.json file and fill out your own secret
const config = require('./config/config.json');

app.use(session({
    secret: config.sessionSecret,
    resave: false,
    saveUninitialized: true
}));

// Setup rate limiter
const rateLimit = require('express-rate-limit');

const limiter = rateLimit({
    windowMs: 10 * 60 * 1000, // 10 minutes
    max: 5, // limit each IP to 5 requests per windowMs
});

app.use('/login', limiter);
app.use('/signup', limiter);


// Render views
const fs = require('fs');

// utf8 - unicode character set for decoding the file
//synch: program stops, reads the file and continues
const navPage = fs.readFileSync('./public/fragments/nav.html', 'utf8');
const footerPage = fs.readFileSync('./public/fragments/footer.html', 'utf8');
const chatPopup = fs.readFileSync('./public/chat/chat.html', 'utf8');

const homePage = fs.readFileSync('./public/home/home.html', 'utf8');

app.get('/', (req, res) => {
    return res.send(navPage + homePage + chatPopup + footerPage);
});

app.get('/session', (req, res) =>{
    //make sure its a new memory object, copy the session to make sure i can override the message
    let mysession = JSON.parse(JSON.stringify(req.session));
    req.session.errormessage = "";
    return res.send({ response: mysession});
});

// Import routes
const authRoute = require('./routes/auth.js');
const plantsRoute = require('./routes/plants.js');
const usersRoute = require('./routes/users.js');

// Setup routes
app.use(authRoute);
app.use(plantsRoute);
app.use(usersRoute);

// Start server
const PORT = 3000;

server.listen(PORT, (error) => {
    if (error) {
        console.log(error);
    }
    console.log("Server is running on the port", PORT);
})
