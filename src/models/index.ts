import { Sequelize } from "sequelize";
import { RecipeFactory } from "./recipe";

const dbName = 'FoodGrubDb';
const username = 'root';
const password = 'Password1!';

const sequelize = new Sequelize(dbName, username, password, {
    host: '127.0.0.1',
    port: 3306,
    dialect: 'mysql'
});

RecipeFactory(sequelize);

export const db = sequelize;