const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Pet extends Model {}

Pet.init(
  {
   
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    species: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    breed: {
      type: DataTypes.STRING,
      allowNull: false,
     },
    age: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },

    sex: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
    },
    // photourl: {
    //   type: DataTypes.STRING,
    //   allowNull:true
    // },

       
    // isvaccinated: {
    //   type: DataTypes.BOOLEAN
    // },
    // ismicrochipped: {
    //   type: DataTypes.BOOLEAN
    // },
    // isdesexed: {
    //   type: DataTypes.BOOLEAN
    // },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id',
      },
    },
  },
  {
    // Link to database connection
    sequelize,
    // Set to false to remove `created_at` and `updated_at` fields
    timestamps: false,
    underscored: true,
    modelName: 'pet'
  }
);

module.exports = Pet;
