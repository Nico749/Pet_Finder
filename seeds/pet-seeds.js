const Pet = require('../models/Pet');

const petData = [
    {
        name: "Mandy",
        species: "Do",
        breed: "Rottweiler",
        age: 10,
        sex: "Male",
        isvaccinated: true,
        ismicrochipped: true,
        isdesexed: true,
    },

];

const seedPets = () => Pet.bulkCreate(petData);

module.exports = seedPets;