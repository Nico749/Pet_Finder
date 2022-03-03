// Registered User Database

const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class User extends Model { }

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },

    email: {
      type: DataTypes.STRING,
      unique: true,
      validate: {
        isEmail: true,
      },
    },

    password: {
      type: DataTypes.STRING,
      validate: {
        len: [17],
      }
    },

    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    phone: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: true,
    },

    Suburb: {
      type: DataTypes.STRING
    },

    isphonecontact: {
      type: DataTypes.BOOLEAN
    },

    isemailcontact: {
      type: DataTypes.BOOLEAN
    },
  },
  {
    hooks: {
      beforeCreate: async (newUserData) => {
        newUserData.email = await newUserData.email.toLowerCase();
        return newUserData;
      },
      beforeUpdate: async (updatedUserData) => {
        updatedUserData.email = await updatedUserData.email.toLowerCase();
        return updatedUserData;
      },
    },
    sequelize,
    timestamps: false,
    underscored: true,
    modelName: 'user',
    freezeTableName:true
  }
);

module.exports = User;
