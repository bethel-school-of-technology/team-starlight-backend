import { Sequelize } from "sequelize";
import { RecipeFactory } from "./recipe";
import { UserFactory } from "./users";


const dbName = 'FoodGrubDb';
const username = 'root';
const password = 'Password1!';

const sequelize = new Sequelize(dbName, username, password, {
    host: '127.0.0.1', //change to local host on PC
    port: 3306,
    dialect: 'mysql'
});

UserFactory(sequelize);
RecipeFactory(sequelize);





export const db = sequelize;