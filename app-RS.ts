import express, { NextFunction, Request, Response } from "express";
import morgan from "morgan";
import { db } from "./src/models/index-RS";


const { Sequelize } = require("sequelize");
const cors = require("cors");

const app = express();

app.use(morgan('dev'));

app.use(express.json());
app.use(express.urlencoded({ extended:true}));

app.use("/main", );
app.use("/recipes", );
app.use("/myrecipes", );
app.use("/aboutus", );


app.use((req:Request, res: Response, next: NextFunction) => {
    res.status(404).end();
});

db.sync().then(() => {
    console.log("connected to database");
});

app.listen(3000);