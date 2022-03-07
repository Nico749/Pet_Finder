// Registered User Database
// Yeah, I need to do something about the password thing for 
// security, but this is a rough starting point

const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const bcrypt = require('bcrypt');

class User extends Model {
  checkPassword(loginPw) {
    console.log(`this is the pwd I digit ${loginPw}`)
    console.log(this.password)
    return bcrypt.compareSync(loginPw, this.password);
    
  }
}

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
        len: [9],
      }
    },

    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    phone: {
      type: DataTypes.INTEGER,
      allowNull: true,
  
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
        console.log("before create")
        newUserData.password = await bcrypt.hash(newUserData.password, 10);
        return newUserData;
      },
      beforeUpdate: async (updatedUserData) => {
        console.log("before update")
        updatedUserData.password = await bcrypt.hash(updatedUserData.password, 10);
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
