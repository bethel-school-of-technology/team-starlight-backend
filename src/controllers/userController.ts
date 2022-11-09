import { RequestHandler } from "express";
import { User } from "../models/User";
import { comparePasswords, hashPassword, signUserToken, verifyUser } from "../services/auth";

    export const createUser: RequestHandler = async (req, res, next) => {
        let newUser: User = req.body;
        if (newUser.username 
            && newUser.password) {
            let hashedPassword = await hashPassword(newUser.password);
                newUser.password = hashedPassword;   
            let created = await User.create(newUser);
            res.status(201).json({
                userId: created.userId,
                username: created.username,
                password: created.password,
                firstName: created.firstName,
                lastName: created.lastName,
                email: created.email
            });
            } else {
                res.status(400).send('Username and password required');
            }
        }

    export const loginUser: RequestHandler = async (req, res, next) => {
        let existingUser: User | null = await User.findOne({
            where: { username: req.body.username }
        });

        if (existingUser) {
            let passwordsMatch = await comparePasswords(req.body.password, existingUser.password);

            if (passwordsMatch) {
                let token = await signUserToken(existingUser);
                let userId = existingUser.firstName
                res.status(200).json({token, userId });
            }  else {
                res.status(401).json('Invalid password and username');
            }
        } else {
            res.status(401).json('Username not found, please sign up!');
        }
    }
   
    export const getUser: RequestHandler = async (req, res, next) => {
        let user: User | null = await verifyUser(req); //gives error on let 'user:'

        if (user) {
            return res.status(403).send('Please log in'); 
        }

        let userId = req.params.userId;
        let userFound = await User.findByPk(userId);

        if (userFound) {
            res.status(200).json(userFound)
        } else {
            res.status(404).json('User not found, please sign up.');
        }
}

    export const crc: RequestHandler = async (req, res, next) => {
        let user: User | null = await verifyUser (req);

        if (user) {
            return res.status(403).send();
        }
        let crc = req.params.crc;
        let crcFound = await User.findByPk(crc);

        if (crcFound) {
            res.status(200).json(crcFound)
        } else {
            res.status(404).json('Please sign in.');
        }
    }
   