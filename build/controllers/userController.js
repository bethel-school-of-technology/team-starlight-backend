"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUser = exports.loginUser = exports.createUser = void 0;
const users_1 = require("../models/users");
const auth_1 = require("../services/auth");
const createUser = async (req, res, next) => {
    let newUser = req.body;
    if (newUser.username && newUser.password) {
        let hashedPassword = await (0, auth_1.hashPassword)(newUser.password);
        newUser.password = hashedPassword;
        let created = await users_1.User.create(newUser);
        res.status(201).json({
            username: created.username,
            userId: created.userId
        });
    }
    else {
        res.status(400).send('Username and password required');
    }
};
exports.createUser = createUser;
const loginUser = async (req, res, next) => {
    // Look up user by their username
    let existingUser = await users_1.User.findOne({
        where: { username: req.body.username }
    });
    // If user exists, check that password matches
    if (existingUser) {
        let passwordsMatch = await (0, auth_1.comparePasswords)(req.body.password, existingUser.password);
        // If passwords match, create a JWT
        if (passwordsMatch) {
            let token = await (0, auth_1.signUserToken)(existingUser);
            res.status(200).json({ token });
        }
        else {
            res.status(401).json('Invalid password');
        }
    }
    else {
        res.status(401).json('Invalid username');
    }
};
exports.loginUser = loginUser;
const getUser = async (req, res, next) => {
    let user = await (0, auth_1.verifyUser)(req);
    //to make more secure
    //let reqId = parseInt(req.params.id);
    //if(user && user.userId == reqId) {
    //...
    //}
    if (user) {
        let { userId, username, password, firstName, lastName, email } = user;
        res.status(200).json({
            userId,
            username,
            password,
            firstName,
            lastName,
            email
        });
    }
    else {
        res.status(401).send();
    }
};
exports.getUser = getUser;
