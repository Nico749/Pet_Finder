// Registered User Database
// Yeah, I need to do something about the password thing for 
// security, but this is a rough starting point

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
    sequelize,
    timestamps: false,
    underscored: true,
    modelName: 'user',
    freezeTableName:true
  }
);

module.exports = User;
