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
        photourl: "https://www.pupvine.com/wp-content/uploads/2021/03/a-portrait-of-a-adorable-Rottweiler.jpg",
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
        photourl: "https://puppyweightcalculator.com/wp-content/uploads/2021/04/yousef-espanioly-Wgaqx7loF2A-unsplash-2048x2048.jpg",
        user_id:2   
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
        photourl: "https://3.bp.blogspot.com/-mU2Pf55pIa4/T_Qqp3afPUI/AAAAAAAADyA/ms0PwYt_r9w/s1600/Birman+cat+wallpapers+5.jpg",
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
        photourl: "https://www.floppycats.com/wp-content/uploads/2014/09/Dusty-Blue-Bicolor-Ragdoll-Cat.jpg",
        user_id:1
    },

];

const seedPets = () => Pet.bulkCreate(petData);

module.exports = seedPets;
