const Pet = require('../models/Pet');

const petData = [
    {
        name: "Mandy",
        species: "Dog",
        breed: "Rottweiler",
        age: 10,
        sex: "Female",
        isvaccinated: true,
        ismicrochipped: true,
        isdesexed: true,
    },
    {
        name: "Koko",
        species: "Dog",
        breed: "Boxer",
        age: 5,
        sex: "Male",
        isvaccinated: true,
        ismicrochipped: true,
        isdesexed: false,
    },
    {
        name: "Luna",
        species: "Cat",
        breed: "Birman",
        age: 8,
        sex: "Female",
        isvaccinated: false,
        ismicrochipped: true,
        isdesexed: false,
    },
    {
        name: "Boots",
        species: "Cat",
        breed: "Ragdoll",
        age: 6,
        sex: "Male",
        isvaccinated: true,
        ismicrochipped: false,
        isdesexed: true,
    },

];

const seedPets = () => Pet.bulkCreate(petData);

module.exports = seedPets;