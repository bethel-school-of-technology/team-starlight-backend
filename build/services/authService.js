"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyUser = exports.signUserToken = void 0;
const users_1 = require("../models/users");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const secret = "Our God Reigns";
const signUserToken = async (user) => {
    let token = jsonwebtoken_1.default.sign({ userId: user.userId }, secret, { expiresIn: '1hr ' });
    return token;
};
exports.signUserToken = signUserToken;
const verifyUser = async (req) => {
    // Get the Authorization header from the request
    const authHeader = req.headers.authorization;
    // If header exists, parse token from `Bearer <token>`
    if (authHeader) {
        const token = authHeader.split(' ')[1];
        // Verify the token and get the user
        try {
            let decoded = await jsonwebtoken_1.default.verify(token, secret);
            return users_1.User.findByPk(decoded.userId);
        }
        catch (err) {
            return null;
        }
    }
    else {
        return null;
    }
};
exports.verifyUser = verifyUser;
