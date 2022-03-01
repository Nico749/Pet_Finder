const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Cat extends Model {}

Cat.init(
  {
    breed: {
      type: DataTypes.STRING
    },
    age: {
      type: DataTypes.INTEGER
    },
    sex: {
      type: DataTypes.STRING
    },
    description: {
      type: DataTypes.STRING
    },
       
    isvaccinated: {
      type: DataTypes.BOOLEAN
    },
    ismicrochipped: {
      type: DataTypes.BOOLEAN
    },
    isdesexed: {
      type: DataTypes.BOOLEAN
    },
    isavailable: {
        type: DataTypes.BOOLEAN
    },
  },
  {
    sequelize,
    timestamps: false,
    underscored: true,
    modelName: 'cat'
  }
);

module.exports = Cat;
