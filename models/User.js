// Registered User Database
// Yeah, I need to do something about the password thing for 
// security, but this is a rough starting point

const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class User extends Model {}

User.init(
  {
    name: {
      type: DataTypes.STRING
    },
    phone: {
      type: DataTypes.INTEGER
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
  {
    sequelize,
    timestamps: false,
    underscored: true,
    modelName: 'user'
  }
);

module.exports = User;
