import {
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
  Model,
  Sequelize, 
} from "sequelize";
import sequelize from "sequelize/types/sequelize";
import { User } from "./users";

export class Recipe extends Model<
  InferAttributes<Recipe>,
  InferCreationAttributes<Recipe>
> {
  declare savedRecipeId: number
  declare id: number;
  declare title: string;
  declare image: string;
  declare userId: number;
  declare servings: string;
  declare readyInMinutes: string;
}

export function RecipeFactory(sequelize: Sequelize) {
  Recipe.init(
    {
      savedRecipeId: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
        unique: true
    },
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: false,
      },
        title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      image: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      userId: {
        type: DataTypes.INTEGER,
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
    },
    {
      freezeTableName: true,
      tableName: 'Recipes',
      sequelize,
    }
  );

}
