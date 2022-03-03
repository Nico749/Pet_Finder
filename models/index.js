const Pet = require('./Pet');
const User = require('./User');

User.hasMany(Pet, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE',
});

// Pet.hasOne(User, {
//   foreignKey: 'user_id',
//   // When we delete a User, make sure to also delete the associated Pet
// });

Pet.belongsTo(User, {
  foreignKey: 'user_id',
});




module.exports = { Pet, User };
