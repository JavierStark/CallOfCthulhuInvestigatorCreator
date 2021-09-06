const express = require("express");
const ejs = require("ejs");
const bodyParser = require("body-parser");
const { hyphenToCamel } = require("ejs/lib/utils");

const app = express();

let attributes;

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", function (req, res) {
  res.render("firstPart");
});

app.post("/", function (req, res) {
  let sheet = req.body;
  let formatedSheet = {
    basicInfo: {
      name: sheet.name,
      surname: sheet.surname,
      playerName: sheet.plaerName,
      age: sheet.age,
      sex: sheet.sex,
      residence: sheet.residence,
      birthplace: sheet.birthplace,
    },
    characteristics: {
      strength: sheet.strength,
      constitution: sheet.constitution,
      size: sheet.size,
      dexterity: sheet.dexterity,
      appearance: sheet.appearance,
      intelligence: sheet.intelligence,
      power: sheet.power,
      education: sheet.education,
    },
    secondaryAttributes: {
      luck: sheet.luck,
      hp: sheet.hp,
      movement: sheet.movement,
      sanity: sheet.sanity,
      magicPoints: sheet.magicPoints,
      damageBonus: sheet.damageBonus,
      build: sheet.build,
    },
  };
  console.log(formatedSheet);
  attributes = formatedSheet;
  res.redirect("/ageModifiers");
});

app.get("/ageModifiers", function (req, res) {
  let age = Number(attributes.basicInfo.age);
  res.render("ageModifiers", { sheet: attributes });
});

app.listen("3000", function (err) {
  console.log("Server started in port 3000");
});
