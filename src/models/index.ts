import { Sequelize } from "sequelize";
import { randomSearchFactory } from "./randomSearch";
import { UserFactory } from "./User";
import { userRecipeFactory } from "./userRecipes";

const dbName = "FoodGrubDb";
const username = "root";
const password = "Password1!";

const sequelize = new Sequelize(dbName, username, password, {
    host: "localhost",
    port: 3306,
    dialect: "mysql",
});

//pages with (sequelize); at the end

UserFactory(sequelize);
userRecipeFactory(sequelize);
randomSearchFactory(sequelize);

export const db = sequelize;