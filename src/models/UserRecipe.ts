import {
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
  Model,
  Sequelize,
} from "sequelize";
import sequelize from "sequelize/types/sequelize";
import { User } from "./users";
import { Recipe } from "./recipe";

export class UserRecipe extends Model<
  InferAttributes<UserRecipe>,
  InferCreationAttributes<UserRecipe>
> {
  declare id: number;
 
}

export function UserRecipeFactory(sequelize: Sequelize) {
    UserRecipe.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        unique: false,
      },
    },
    {
      freezeTableName: true,
      tableName: "UserRecipe",
      sequelize,
    }
  );

  User.belongsToMany(Recipe, {through: UserRecipe});
  Recipe.belongsToMany(User, {through: UserRecipe});

}


