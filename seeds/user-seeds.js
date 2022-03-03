const User = require('../models/User');

const userData = [
    {
        name: "Joe Kalston",
        email: "joekalston@yahoo.com",
        phone: "123456",
        Suburb: "Port Melbourne",
        isphonecontact: true,
        isemailcontact: true,
        password: "password1"
    },
    {
        name: "Jane Doe",
        email: "janedoe@fakemail.com",
        phone: "12345679",
        Suburb: "Carton",
        isphonecontact: true,
        isemailcontact: true,
        password: "password2"
    },
    {
        name: "Kenneth Sy",
        email: "kensy@gmail.com",
        phone: "987654321",
        Suburb: "Coburg",
        isphonecontact: true,
        isemailcontact: true,
        password: "password3"
    },
    {
        name: "Ken Do",
        email: "kendo@gmail.com",
        phone: "987612345",
        Suburb: "Dandenong",
        isphonecontact: true,
        isemailcontact: true,
        password: "password4"
    },
    {
        name: "Kenneth Wok",
        email: "kenwok@yahoomail.com",
        phone: "147852369",
        Suburb: "Point Cook",
        isphonecontact: true,
        isemailcontact: true,
        password: "password5"
    },
   
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;