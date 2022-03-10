const Pet = require('./Pet');
const User = require('./User');

//user can have many pets
User.hasMany(Pet, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE',
});
//pet has only one user
Pet.belongsTo(User, {
  foreignKey: 'user_id',
});

module.exports = { Pet, User };
