import { Request } from "express";
import { User } from "../models/users";
import jwt from "jsonwebtoken";

const secret = "Our God Reigns";

export const signUserToken = async (user: User) => {
    let token = jwt.sign(
        { userId: user.userId },
        secret,
        { expiresIn: '1hr '}
    );
    return token;
}

export const verifyUser = async (req: Request) => {
    // Get the Authorization header from the request
    const authHeader = req.headers.authorization;

    // If header exists, parse token from `Bearer <token>`
    if (authHeader) {
        const token = authHeader.split(' ')[1];

        // Verify the token and get the user
        try {
            let decoded: any = await jwt.verify(token, secret);
            return User.findByPk(decoded.userId);
        }
        catch (err) {
            return null;
        }
    }
    else {
        return null;
    }
}