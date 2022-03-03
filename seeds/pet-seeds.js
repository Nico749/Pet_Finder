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
        user_id:4
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
        user_id:1
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
        user_id:3
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
        user_id:4
    },

];

const seedPets = () => Pet.bulkCreate(petData);

module.exports = seedPets;