import { Request } from "express";
import { User } from "../models/users";
import bcrypt from 'bcrypt';
import jwt from "jsonwebtoken";
import passport from "passport";


const secret = "Our God Reigns";

var LocalStrategy = require("passport-local");

passport.use(new LocalStrategy(async (username: string, password: any, done: any) => {

}));

export default passport;

passport.use(new LocalStrategy(async (username: string, password: any, done: any) => {
    let currentUser = await User.findOne({ where: { username: username } });
    
    if (!currentUser) {
        console.log("incorrect username");
        return done(undefined, false, { message: 'Incorrect Username' });
    }

    if (currentUser.password !== password) {
        console.log("incorrect password");
        return done(undefined, false, { message: 'Incorrect password' });
    }

    return done(undefined, currentUser);
}));

passport.serializeUser<any, any>((user, done: any) => {
    done(undefined, user);
});

passport.deserializeUser<any, any>((user, done) => {
    done(undefined, user);
});

export const hashPassword = async (plainTextPassword: string) => {
    const saltRound = 12;
    const hash = await bcrypt.hash(plainTextPassword, saltRound);
    return hash;
};

export const comparePasswords = async (
    plainTextPassword: string,
    hashPassword: string
) => {
    return await bcrypt.compare(plainTextPassword, hashPassword);
};

export const signUserToken = async (user: User) => {
    let token = jwt.sign({ userId: user.userId }, secret, {
        expiresIn: "1hr",
    });

    return token;
};

export const verifyUser = async (req: Request) => {
    //Get the Authorization header from the request
    const authHeader = req.headers.authorization;

    //If header exists, parse token from Bearer <token>
    if (authHeader) {
        const token = authHeader.split(" ")[1];

        //Verify the token and get the user
        try {
            let decoded:any = await jwt.verify(token, secret);
            return User.findByPk(decoded.userId);
        }catch (err) {
            return null;
        }
    } else {
        return null;
    }
};
