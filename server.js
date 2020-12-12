"use strict";

// read the environment variable (will be 'production' in production mode)
const log = console.log;

const env = process.env.NODE_ENV

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
const { Admin } = require("./models/admin")
const { UserPost } = require("./models/userPost");

// multipart middleware: allows you to access uploaded file from req.file
const multipart = require('connect-multiparty');
const multipartMiddleware = multipart();

const cloudinary = require('cloudinary');
cloudinary.config({
    cloud_name: 'amigo',
    api_key: '572949329481838',
    api_secret: 'nmIMlXq84VbW6psJ6BuuYkOZXdM'
})

// body-parser: middleware for parsing HTTP JSON body into a usable object
const bodyParser = require("body-parser");
app.use(bodyParser.json());

// cors
const cors = require('cors')
if (env !== 'production') { app.use(cors()) }

// express-session for managing user sessions
const session = require("express-session");
// to store session information on the database in production
const MongoStore = require('connect-mongo')(session)
const { mongo } = require("mongoose");
const { networkInterfaces } = require("os");
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

const authenticateAdmin = async (req, res, next) => {
    if (req.session.user) {
        try {
            const admin = await Admin.findById(req.session.user)
            if (!admin) {
                res.status(401).send("Unauthorized")
            } else {
                req.user = admin
                next()
            }
        } catch {
            res.status(401).send("Unauthorized")
        }
    } else {
        res.status(401).send("Unauthorized")
    }
}

const authenticateUserOrAdmin = async (req, res, next) => {
    if (req.session.user) {
        try {
            const admin = await Admin.findById(req.session.user)
            if (!admin) {
                const user = await User.findById(req.session.user)
                if (!user) {
                    res.status(401).send("Unauthorized")
                } else {
                    req.user = user
                    next()
                }
            } else {
                req.user = admin
                next()
            }
        } catch {
            res.status(401).send("Unauthorized")
        }
    } else {
        res.status(401).send("Unauthorized")
    }
}

const authenticateUserProfileOrAdmin = async (req, res, next) => {
    if (req.session.user) {
        try {
            const admin = await Admin.findById(req.session.user)
            if (!admin) {
                const user = await User.findById(req.params.id)
                if (!user || !user._id.equals(req.session.user)) {
                    res.status(401).send("Unauthorized")
                } else {
                    req.user = user
                    next()
                }
            } else {
                req.user = admin
                next()
            }
        } catch {
            res.status(401).send("Unauthorized")
        }
    } else {
        res.status(401).send("Unauthorized")
    }
}

const authenticateCreatorOrAdmin = async (req, res, next) => {
    if (req.session.user) {
        try {
            const admin = await Admin.findById(req.session.user)
            if (!admin) {
                const user = await User.findById(req.session.user)
                if (!user) {
                    res.status(401).send("Unauthorized")
                    return;
                }
                const post = await UserPost.findById(req.params.id)
                if (!post) {
                    res.status(404).send("Resource not found")
                    return;
                }
                if (post.creator.equals(req.session.user)) {
                    req.user = user
                    next()
                } else {
                    res.status(401).send("Unauthorized")
                }
            } else {
                req.user = admin
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
            expires: 18000000,
            httpOnly: true
        },
        // store the sessions on the database in production
        store: env === 'production' ? new MongoStore({ mongooseConnection: mongoose.connection }) : null
    })
);

app.post("/api/users/login", async (req, res) => {
    const { username, password } = req.body;
    try {
        if (username === 'admin') {
            const user = await Admin.findByUserPassword(username, password);
            if (!user) {
                res.status(404).send('Admin does not exist')
                return;
            }
            req.session.user = user._id;
            req.session.username = user.username;
            res.send({ currentUser: user.username });
            return;
        }
        const user = await User.findByUserPassword(username, password);
        if (!user) {
            res.status(404).send('User does not exist')
            return;
        }
        req.session.user = user._id;
        req.session.username = user.username;
        res.send({ currentUser: user.username });
    } catch(error) {
        if (isMongoError(error)) {
            res.status(500).send('Internal server error')
        } else {
            res.status(400).send('Bad Request. Could not login user.')
        }
    }
});

app.get("/api/users/logout", (req, res) => {
    req.session.destroy(error => {
        if (error) {
            res.status(500).send(error);
        } else {
            res.send()
        }
    });
});

app.get("/api/users/check-session", (req, res) => {
    if (req.session.user) {
        res.send({ currentUser: req.session.username, currentUserId: req.session.user });
    } else {
        res.status(401).send();
    }
});

app.post('/api/create-admin', mongoChecker, async (req, res) => {
    try {
        const admin = new Admin({
            username: 'admin',
            password: 'admin'
        })
        const newAdmin = await admin.save()
        res.send(newAdmin)
    } catch(error) {
        if (isMongoError(error)) {
            res.status(500).send('Internal server error')
        } else {
            res.status(400).send('Bad Request')
        }
    }
})

// User API Route
app.post('/api/users/new', mongoChecker, multipartMiddleware, async (req, res) => {
    const { email, password, username, firstName, lastName } = req.body;

    if (username === 'admin') {
        res.status(400).send('Bad Request. Cannot create account as admin.')
        return;
    }

    cloudinary.uploader.upload(
        req.files.image.path, // req.files contains uploaded files
        async function (result) {
            try {
                const user = new User({
                    email: email,
                    password: password,
                    username: username,
                    firstName: firstName,
                    lastName: lastName,
                    image_id: result.public_id,
                    image_url: result.url,
                    created_at: new Date()
                })
                const newUser = await user.save()
                res.send(newUser)
            } catch (error) {
                if (isMongoError(error)) {
                    res.status(500).send('Internal server error')
                } else {
                    res.status(400).send('Bad Request')
                }
            }
        }
    );
})

app.get('/api/users', mongoChecker, async (req, res) => {
    try {
        const users = await User.find()
        if (!users) {
            res.send(404).send("No users found")
            return;
        }
        res.send(users)
    } catch {
        res.status(500).send("Internal Server Error")
    }
})

app.get('/api/users/:id', mongoChecker, async (req, res) => {
    try {
        const user = await User.findById(req.params.id)
        if (!user) {
            res.status(404).send("Post not found")
            return;
        }
        res.send(user)
    } catch {
        res.status(500).send("Internal Server Error")
    }
})

app.put('/api/users/:id', mongoChecker, authenticateUserProfileOrAdmin, async (req, res) => {
    const { email, username, firstName, lastName } = req.body;
    try {
        const updatedUser = await User.findOneAndUpdate({ _id: req.params.id }, {$set: {
            email: email,
            username: username,
            firstName: firstName,
            lastName: lastName
        }}, { returnOriginal: false })
        res.send(updatedUser)
    } catch (error) {
        if (isMongoError(error)) {
            res.status(500).send('Internal server error')
        } else {
            res.status(400).send('Bad Request')
        }
    }
})

app.put('/api/users/:id/password', mongoChecker, authenticateUserProfileOrAdmin, async (req, res) => {
    const { password } = req.body;
    try {
        const user = await User.findOne({ _id: req.params.id })
        user.password = password
        const updatedUser = await user.save()
        res.send(updatedUser)
    } catch (error) {
        if (isMongoError(error)) {
            res.status(500).send('Internal server error')
        } else {
            res.status(400).send('Bad Request')
        }
    }
})

app.put('/api/users/:id/img', mongoChecker, authenticateUserProfileOrAdmin, multipartMiddleware, async (req, res) => {
    try {
        cloudinary.uploader.upload(
            req.files.image.path, // req.files contains uploaded files
            async function (result) {
                const user = await User.findOne({ _id: req.params.id })
                cloudinary.uploader.destroy(user.image_id)
                const updatedUser = await User.findOneAndUpdate({ _id: req.params.id }, {$set: {
                    image_id: result.public_id,
                    image_url: result.url,
                }}, { returnOriginal: false })
                res.send(updatedUser)
            }
        );
    } catch (error) {
        if (isMongoError(error)) {
            res.status(500).send('Internal server error')
        } else {
            res.status(400).send('Bad Request')
        }
    }
})

app.post('/api/users/:id/report', mongoChecker, authenticateUserOrAdmin, async (req, res) => {
    try {
        const user = await User.findById(req.params.id)
        if (!user) {
            res.status(404).send("User not found")
            return;
        }
        user.flagged = true
        user.save()
        res.send(user)
    } catch(error) {
        if (isMongoError(error)) {
            res.status(500).send('Internal server error')
        } else {
            res.status(400).send('Bad Request')
        }
    }
})

app.delete('/api/users/:id', mongoChecker, authenticateAdmin, async (req, res) => {
    try {
        // remove user
        const user = await User.findByIdAndRemove(req.params.id)
        if (!user) {
            res.status(404).send("User not found")
            return;
        }
        // remove user posts
        user.posts.forEach(async (post) => {
            const removedPost = await UserPost.findByIdAndRemove(post._id)
            cloudinary.uploader.destroy(removedPost.image_id)
        })
        // remove user profile photo from the cloud
        cloudinary.uploader.destroy(user.image_id)
        res.status(200).send(user)
    } catch {
        res.status(500).send("Internal Server Error")
    }
})

app.post('/api/posts/new', mongoChecker, authenticate, multipartMiddleware, async (req, res) => {
    const { title, location, price, preferences, description } = req.body
    const locationToGeo = {
        'Toronto': [43.660910, -79.395569], 
        'Waterloo': [43.465941, -80.524641],
        'London': [42.982776, -81.244502],
        'Vancouver': [49.240009, -123.134548],
        'Ottawa': [45.415819, -75.702794],
        'Montreal': [45.499695, -73.593487],
        'Mississauga': [43.559449, -79.633928],
        'Scarborough': [43.770763, -79.212965]
    }

    cloudinary.uploader.upload(
        req.files.image.path, // req.files contains uploaded files
        async function (result) {
            try {
                const userPost = new UserPost({
                    title: title,
                    location: location,
                    geo: locationToGeo[location],
                    price: price,
                    preferences: preferences,
                    description: description,
                    creator: req.user._id,
                    image_id: result.public_id,
                    image_url: result.url,
                    created_at: new Date()
                })
            
                const userPostSaved = await userPost.save()
                const user = await User.findById(req.user._id)
                user.posts.push(userPost._id)
                user.save()
                res.send(userPostSaved)
            } catch (error) {
                if (isMongoError(error)) {
                    res.status(500).send('Internal server error')
                } else {
                    res.status(400).send('Bad Request')
                }
            }
        }
    );
})

app.get('/api/posts', mongoChecker, async (req, res) => {
    try {
        const posts = await UserPost.find()
        res.send(posts)
    } catch(error) {
        res.status(500).send("Internal Server Error")
    }
})

app.get('/api/posts/:id', mongoChecker, async (req, res) => {
    try {
        const post = await UserPost.findById(req.params.id)
        if (!post) {
            res.status(404).send("Post not found")
            return;
        }
        res.send(post)
    } catch {
        res.status(500).send("Internal Server Error")
    }
})

app.put('/api/posts/:id', mongoChecker, authenticateCreatorOrAdmin, async (req, res) => {
    const { title, location, price, preferences, description } = req.body
    const locationToGeo = {
        'Toronto': [43.660910, -79.395569], 
        'Waterloo': [43.465941, -80.524641],
        'London': [42.982776, -81.244502],
        'Vancouver': [49.240009, -123.134548],
        'Ottawa': [45.415819, -75.702794],
        'Montreal': [45.499695, -73.593487],
        'Mississauga': [43.559449, -79.633928],
        'Scarborough': [43.770763, -79.212965]
    }
    try {
        const updatedUserPost = await UserPost.findOneAndUpdate({ _id: req.params.id }, {$set: {
            title: title,
            location: location,
            geo: locationToGeo[location],
            price: price,
            preferences: preferences,
            description: description
        }}, { returnOriginal: false })
        res.send(updatedUserPost)
    } catch (error) {
        if (isMongoError(error)) {
            res.status(500).send('Internal server error')
        } else {
            res.status(400).send('Bad Request')
        }
    }
})

app.put('/api/posts/:id/img', mongoChecker, authenticateCreatorOrAdmin, multipartMiddleware, async (req, res) => {
    cloudinary.uploader.upload(
        req.files.image.path, // req.files contains uploaded files
        async function (result) {
            try {
                const userPost = await UserPost.findOne({ _id: req.params.id })
                cloudinary.uploader.destroy(userPost.image_id)
                const updatedUserPost = await UserPost.findOneAndUpdate({ _id: req.params.id }, {$set: {
                    image_id: result.public_id,
                    image_url: result.url,
                }}, { returnOriginal: false })
                res.send(updatedUserPost)
            } catch (error) {
                if (isMongoError(error)) {
                    res.status(500).send('Internal server error')
                } else {
                    res.status(400).send('Bad Request')
                }
            }
        }
    );
})

app.post('/api/posts/:id/report', mongoChecker, authenticateUserOrAdmin, async (req, res) => {
    try {
        const post = await UserPost.findById(req.params.id)
        if (!post) {
            res.status(404).send("Post not found")
            return;
        }
        post.flagged = true
        post.save()
        res.send(post)
    } catch(error) {
        if (isMongoError(error)) {
            res.status(500).send('Internal server error')
        } else {
            res.status(400).send('Bad Request')
        }
    }
})

app.delete('/api/posts/:id', mongoChecker, authenticateCreatorOrAdmin, async (req, res) => {
    try {
        // remove post
        const post = await UserPost.findByIdAndRemove(req.params.id)
        if (!post) {
            res.status(404).send("Post not found")
            return;
        }
        // remove posts from creator posts list
        const user = await User.findOne({ _id: post.creator })
        user.posts = user.posts.filter(postIdx => {
            return !postIdx.equals(post._id)
        })
        // remove post image from the cloud
        cloudinary.uploader.destroy(post.image_id)
        user.save()
        res.send({ post, user })
    } catch {
        res.status(500).send("Internal Server Error")
    }
})

// Serve the build
app.use(express.static(path.join(__dirname, "/client/build")));

// All routes other than above will go to index.html
app.get("*", (req, res) => {
    // check for page routes that we expect in the frontend to provide correct status code.
    const goodPageRoutes = ["/", "/login", "/posts",
            "/userdashboard", "/admindashboard", "/makepost",
            "/editpost/", "/edituser/", "/post/", "/user/", "/finder"];

    if (!goodPageRoutes.includes(req.url)) {
        // if url not in expected page routes, set status to 404.
        res.status(404);
    }

    // send index.html
    res.sendFile(path.join(__dirname, "/client/build/index.html"));
});

app.listen(port, () => {
    log(`Listening on port ${port}...`);
});


