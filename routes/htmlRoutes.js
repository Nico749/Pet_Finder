const fs = require("fs");
const express = require("express");
const router = express.Router();
const path = require("path");

//middleware to read data properly
//app.use(express.json());
//app.use(express.urlencoded({ extended: true }));

//serve static files from public foldern
//app.use(express.static("public"));

//retrieve home page
router.get("/", (req, res) =>
  res.sendFile(path.join(__dirname, "public/index.html"))
);

// retrieve sign-up form
router.get("/sign-up", (req, res) =>
  res.sendFile(path.join(__dirname, "public/signup.html")));

// retrieve add-pets form
router.get("/add-a-pet", (req, res) =>
  res.sendFile(path.join(__dirname, "public/addpet.html"))
);

module.exports = router;
