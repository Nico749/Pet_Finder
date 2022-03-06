const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const routes = require('./controllers');
const helmet = require('helmet');  //security library

//const helpers = require('./utils/helpers');


const sequelize = require('./config/connection');

const SequelizeStore = require('connect-session-sequelize')(session.Store);
require('dotenv').config(); //added this so that secret key will be coming in from .env file

const app = express();

const PORT = process.env.PORT || 3007;

app.use(express.static(path.join(__dirname, "public")));

// Set up Handlebars.js engine with custom helpers

const hbs = exphbs.create({  });


const sess = {
  secret: process.env.key, //secret should be coming in from .env file.
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};



app.use(session(sess));
app.use(helmet());  //security library

// Inform Express.js on which template engine to use
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));



// Routes directory
app.use(routes);


sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});
