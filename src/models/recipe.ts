import { DataTypes, InferAttributes, InferCreationAttributes, Model, Sequelize } from "sequelize";

export class Recipe extends Model<InferAttributes<Recipe>, InferCreationAttributes<Recipe>>{
    declare id: number;
    declare title: string;
    declare image: string;
    declare servings: string;
    declare readyInMinutes: string;
}

export function RecipeFactory(sequelize: Sequelize) {
    Recipe.init({
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            unique: true,
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
            
        },
        image: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        servings: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        readyInMinutes: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        
    }, {
        freezeTableName: true,
        tableName: 'items',
        sequelize
    });
}