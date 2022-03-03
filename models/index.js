const Pet = require('./Pet');
const User = require('./User');

Pet.hasOne(User, {
  foreignKey: 'user_id',
  // When we delete a User, make sure to also delete the associated Pet
});

Pet.belongsTo(User, {
  foreignKey: 'user_id',
});

User.hasMany(Pet, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE',
});


module.exports = { Pet, User };
