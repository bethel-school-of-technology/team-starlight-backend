import { DataTypes, InferAttributes, InferCreationAttributes, Model, Sequelize } from "sequelize";

export class Recipe extends Model<InferAttributes<Recipe>, InferCreationAttributes<Recipe>>{
    declare recipeId: number;
    declare recipe: string;
    
    
}

export function RecipeFactory(sequelize: Sequelize) {
    Recipe.init({
        recipeId: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false,
            unique: true
        },
        recipe: {
            type: DataTypes.STRING,
            allowNull: false,
            
        },
       
        
    }, {
        freezeTableName: true,
        tableName: 'items',
        sequelize
    });
}