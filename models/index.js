const Pet = require('./Pet');
const User = require('./User');

// Define an Pet as having one User to create a foreign key in the `Pet` table
Pet.hasOne(User, {
  foreignKey: 'user_id',
  // When we delete a User, make sure to also delete the associated Pet
  onDelete: 'CASCADE',
});

// We can also define the association starting with Pet
Pet.belongsTo(User, {
  foreignKey: 'user_id',
});

// We package our two models and export them as an object so we can import them together and use their proper names
module.exports = { Pet, User };
