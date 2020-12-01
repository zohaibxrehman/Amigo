"use strict";
const log = console.log;

const express = require("express");
// starting the express server
const app = express();
const port = process.env.PORT || 5000;
const path = require('path')

// mongoose and mongo connection
const { mongoose } = require("./db/mongoose");
mongoose.set('useFindAndModify', false);

// to validate object IDs
const { ObjectID } = require("mongodb");
const { User } = require("./models/user");
const { UserPost } = require("./models/userPost");

// body-parser: middleware for parsing HTTP JSON body into a usable object
const bodyParser = require("body-parser");
app.use(bodyParser.json());

// express-session for managing user sessions
const session = require("express-session");
app.use(bodyParser.urlencoded({ extended: true }));

function isMongoError(error) { // checks for first error returned by promise rejection if Mongo database suddently disconnects
    return typeof error === 'object' && error !== null && error.name === "MongoNetworkError"
}

// middleware for mongo connection error for routes that need it
const mongoChecker = (req, res, next) => {
    // check mongoose connection established.
    if (mongoose.connection.readyState != 1) {
        log('Issue with mongoose connection')
        res.status(500).send('Internal server error')
        return;
    } else {
        next()  
    }   
}

// Middleware for authentication of resources
const authenticate = async (req, res, next) => {
    if (req.session.user) {
        try {
            const user = await User.findById(req.session.user)
            if (!user) {
                res.status(401).send("Unauthorized")
            } else {
                req.user = user
                next()
            }
        } catch {
            res.status(401).send("Unauthorized")
        }
    } else {
        res.status(401).send("Unauthorized")
    }
}

/*** Session handling **************************************/
// Create a session and session cookie
app.use(
    session({
        secret: "our hardcoded secret",
        resave: false,
        saveUninitialized: false,
        cookie: {
            expires: 60000,
            httpOnly: true
        }
    })
);

// A route to login and create a session
app.post("/users/login", async (req, res) => {
    const { username, password } = req.body;

    try {
        const user = await User.findByUserPassword(username, password);
        req.session.user = user._id;
        req.session.username = user.username;
        res.send({ currentUser: user.username });
    } catch {
        res.status(400).send()
    }
});


// Serve the build
// app.use(express.static(path.join(__dirname, "/client/build")));

app.listen(port, () => {
    log(`Listening on port ${port}...`);
});


