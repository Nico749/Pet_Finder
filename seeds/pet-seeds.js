const Pet = require('../models/Pet');

const petData = [
    
    {
        name: "Luna",
        species: "Cat",
        breed: "Birman",
        age: 8,
        description:"lovely cat",
        sex: "Female",
        // isvaccinated: false,
        // ismicrochipped: true,
        // isdesexed: false,
         //photourl: "https://3.bp.blogspot.com/-mU2Pf55pIa4/T_Qqp3afPUI/AAAAAAAADyA/ms0PwYt_r9w/s1600/Birman+cat+wallpapers+5.jpg",
        user_id:3
    },
    {
        name: "Boots",
        species: "Cat",
        breed: "Ragdoll",
        age: 6,
        description:"it is a beautiful cat",
         sex: "Male",
        // isvaccinated: true,
        // ismicrochipped: false,
        // isdesexed: true,
       //photourl: "https://www.floppycats.com/wp-content/uploads/2014/09/Dusty-Blue-Bicolor-Ragdoll-Cat.jpg",
        user_id:1
    },

];

const seedPets = () => Pet.bulkCreate(petData);

module.exports = seedPets;
