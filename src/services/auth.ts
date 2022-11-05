import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { User } from "../models/User-RS";
import { Request } from "express";


const secret = "Where the Eats Meet";

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
    let token = jwt.sign({ userId: user.userId}, secret, {
        expiresIn: "1hr",
    });

    return token;
};

export const verifyUser = async(req: Request) => {
    //Get the Authorization header from the request
    const authHeader = req.headers.authorization;

    //If header exists, parse token from `Bearer <token>`
    if (authHeader) {
        const token = authHeader.split(" ")[1];

    //Verify the token and get the user
    try {
        let decoded: any = await jwt.verify(token, secret);
        return User.findByPk(decoded.userId);
    } catch (err) {
        return null;
    }
    };
}