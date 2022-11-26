import { Sequelize } from "sequelize";
import { MessageFactory, AssociateUserMessage } from "./message";
import { RecipeFactory } from "./recipe";
import { UserFactory } from "./users";

const dbName = 'FoodGrubDb';
const username = 'root';
const password = 'Password1!';

const sequelize = new Sequelize(dbName, username, password, {
    host: 'localhost',
    port: 3306,
    dialect: 'mysql'
});

RecipeFactory(sequelize);
UserFactory(sequelize);
MessageFactory(sequelize);
AssociateUserMessage();

export const db = sequelize;