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
const { mongo } = require("mongoose");
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

app.get("/users/logout", (req, res) => {
    req.session.destroy(error => {
        if (error) {
            res.status(500).send(error);
        } else {
            res.send()
        }
    });
});

app.get("/users/check-session", (req, res) => {
    if (req.session.user) {
        res.send({ currentUser: req.session.username });
    } else {
        res.status(401).send();
    }
});

// User API Route
app.post('/users/new', mongoChecker, async (req, res) => {
    const { email, password, username, firstName, lastName } = req.body;

    const user = new User({
        email: email,
        password: password,
        username: username,
        firstName: firstName,
        lastName: lastName
    })

    try {
        // Save the user
        const newUser = await user.save()
        res.send(newUser)
    } catch (error) {
        if (isMongoError(error)) {
            res.status(500).send('Internal server error')
        } else {
            log(error)
            res.status(400).send('Bad Request')
        }
    }
})

app.get('/users', mongoChecker, async (req, res) => {
    try {
        const users = await User.find()
        if (!users) {
            res.send(404).send("No users found")
        }
        res.send(users)
    } catch {
        res.status(500).send("Internal Server Error")
    }
})

app.get('/users/:id', mongoChecker, async (req, res) => {
    try {
        const user = await User.findById(req.params.id)
        if (!user) {
            res.status(404).send("Post not found")
        }
        res.send(user)
    } catch {
        res.status(500).send("Internal Server Error")
    }
})

app.delete('/users/:id', mongoChecker, async (req, res) => {
    try {
        const user = await User.findByIdAndRemove(req.params.id)
        if (!user) {
            res.status(404).send("User not found")
        }
        res.send(user)
    } catch {
        res.status(500).send("Internal Server Error")
    }
})

app.post('/posts/new', mongoChecker, authenticate, async (req, res) => {
    const { title, location, price, preferences, description } = req.body

    const userPost = new UserPost({
        title: title,
        location: location,
        price: price,
        preferences: preferences,
        description: description,
        creator: req.user._id
    })

    try {
        const result = await userPost.save()
        const user = await User.findById(req.user._id)
        user.posts.push(userPost._id)
        user.save()
        res.send(result)
    } catch(error) {
        if (isMongoError(error)) {
            res.status(500).send('Internal server error')
        } else {
            res.status(400).send('Bad Request')
        }
    }
})

app.get('/posts', mongoChecker, async (req, res) => {
    try {
        const posts = await UserPost.find()
        res.send(posts)
    } catch(error) {
        res.status(500).send("Internal Server Error")
    }
})

app.get('/posts/:id', mongoChecker, async (req, res) => {
    try {
        const post = await UserPost.findById(req.params.id)
        if (!post) {
            res.status(404).send("Post not found")
        }
        res.send(post)
    } catch {
        res.status(500).send("Internal Server Error")
    }
})

app.delete('/posts/:id', mongoChecker, async (req, res) => {
    try {
        const post = await UserPost.findByIdAndRemove(req.params.id)
        if (!post) {
            res.status(404).send("Post not found")
        }
        const user = await User.findOne({ _id: post.creator })
        user.posts = user.posts.filter(postIdx => {
            return !postIdx.equals(post._id)
        })
        user.save()
        res.send({ post, user })
    } catch {
        res.status(500).send("Internal Server Error")
    }
})

// Serve the build
// app.use(express.static(path.join(__dirname, "/client/build")));

app.listen(port, () => {
    log(`Listening on port ${port}...`);
});


