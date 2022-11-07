import { Sequelize } from "sequelize";
import { randomSearchFactory } from "./randomSearch-RS";
import { UserFactory } from "./User-RS";
import { userRecipeFactory } from "./userRecipes-RS";

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