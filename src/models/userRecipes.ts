import { DataTypes, InferAttributes, InferCreationAttributes, Model, Sequelize } from "sequelize/types";
import { User } from "./User";

export class userRecipe extends Model<InferAttributes<userRecipe>, InferCreationAttributes<userRecipe>>{
    declare query: string;
    declare cuisine: string;
    declare diet: string;
    declare includeIngredients: string;
    declare instructionsRequired: boolean;
    declare addRecipeInformation: boolean;
    declare titleMatch: string;
    declare maxReadyTime: number
}

export function userRecipeFactory (sequelize: Sequelize) {
    userRecipe.init({
        query: {
            type: DataTypes.STRING,
            autoIncrement: false,
            primaryKey: true,
            allowNull: false
        },
        cuisine: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true 
        },
        diet: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        includeIngredients: {
            type: DataTypes.STRING,
            allowNull: false
        },
        instructionsRequired: {
            type: DataTypes.BOOLEAN,
            allowNull: false 
        },
        addRecipeInformation: {
            type: DataTypes.BOOLEAN,
            allowNull:  false 
        },
        titleMatch: {
            type: DataTypes.STRING,
            allowNull: false 
        },
        maxReadyTime: {
            type: DataTypes.NUMBER,
            allowNull: false
        },
    },{
        tableName: 'userRecipe',
        freezeTableName: true,
        sequelize
    });
}