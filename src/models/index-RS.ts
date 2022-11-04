import { Sequelize } from "sequelize";

const dbName = "FoodGrubDb";
const username = "root";
const password = "Password1!";

const sequelize = new Sequelize(dbName, username, password, {
    host: "localhost",
    port: 3306,
    dialect: "mysql",
});

//pages with (sequelize); at the end

export const db = sequelize;