import { DataTypes, InferAttributes, InferCreationAttributes, Model, Sequelize } from "sequelize/types";

export class randomSearch extends Model<InferAttributes<randomSearch>, InferCreationAttributes<randomSearch>>{
    declare limitLicense: boolean;
    declare tags: string;
    declare number: number
}

export function randomSearchFactory (sequelize: Sequelize) {
    randomSearch.init({
        limitLicense: {
            type: DataTypes.BOOLEAN,
            autoIncrement: false,
            primaryKey: true,
            allowNull: false
        },
        tags: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true 
        },
        number: {
            type: DataTypes.NUMBER,
            allowNull: false,
            unique: true
        },
    },{
        tableName: 'randomSearch',
        freezeTableName: true,
        sequelize
    });
}