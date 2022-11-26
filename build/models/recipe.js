"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RecipeFactory = exports.Recipe = void 0;
const sequelize_1 = require("sequelize");
class Recipe extends sequelize_1.Model {
}
exports.Recipe = Recipe;
function RecipeFactory(sequelize) {
    Recipe.init({
        recipeId: {
            type: sequelize_1.DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false,
            unique: true
        },
        recipe: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false,
        },
    }, {
        freezeTableName: true,
        tableName: 'items',
        sequelize
    });
}
exports.RecipeFactory = RecipeFactory;
