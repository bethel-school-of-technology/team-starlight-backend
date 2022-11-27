"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AssociateUserMessage = exports.MessageFactory = exports.Message = void 0;
const sequelize_1 = require("sequelize");
const users_1 = require("./users");
class Message extends sequelize_1.Model {
}
exports.Message = Message;
function MessageFactory(sequelize) {
    Message.init({
        messageId: {
            type: sequelize_1.DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        message: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        userId: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: false
        },
        createdAt: {
            type: sequelize_1.DataTypes.DATE,
            allowNull: false,
            defaultValue: sequelize_1.DataTypes.NOW,
        },
        updatedAt: {
            type: sequelize_1.DataTypes.DATE,
            allowNull: false,
            defaultValue: sequelize_1.DataTypes.NOW,
        }
    }, {
        freezeTableName: true,
        tableName: 'messages',
        sequelize
    });
}
exports.MessageFactory = MessageFactory;
function AssociateUserMessage() {
    users_1.User.hasMany(Message, { foreignKey: 'userId' });
    Message.belongsTo(users_1.User, { foreignKey: 'userId' });
}
exports.AssociateUserMessage = AssociateUserMessage;
