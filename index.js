const express = require("express");
const app = express();
const addition = require("./s1/exercice1");
const soustraction = require("./s1/exercice2");
const multiplication = require("./s1/exercice3");
const division = require("./s1/exercice4");
const factorielle = require("./s1/exercice5");
const estPairOuImpair = require("./s1/exercice6");
const celsiusEnFahrenheit = require("./s1/exercice7");
const aireCercle = require("./s1/exercice8");
const estPalindrome = require("./s1/exercice9");
const pgcd = require("./s1/exercice10");

const dateIlYADixAns = require("./s2/exercice1");
const formatDate = require("./s2/exercice2");
const differenceEnJours = require("./s2/exercice3");
const ajouterJours = require("./s2/exercice4");
const estAnneeBissextile = require("./s2/exercice5");
const premierJourDuMois = require("./s2/exercice6");
const dernierJourDuMois = require("./s2/exercice7");
const formaterDuree = require("./s2/exercice8");
const chevauchementDates = require("./s2/exercice9");
const calculerAge = require("./s2/exercice10");

const PORT = 3000;

app.use(express.json());

app.get("/", (req, res) => {
  return res.json([{ id: 1, name: "John Doe" }]);
});

app.post("/:param", (req, res) => {
  return res.json([{ error: false, num: req.params.param }]);
});

app.post("/s1/exercice1", (req, res) => {
  const n1 = req.body.n1;
  const n2 = req.body.n2;

  if (n1 == null || n2 == null) {
    return res.json([{ reponse: "Veuillez entrer un nombre valide" }]);
  }
  if (!n1) {
    return res.json([{ reponse: "Veuillez entrer un nombre valide" }]);
  }
  if (!n2) {
    return res.json([{ reponse: "Veuillez entrer un nombre valide" }]);
  }

  let a = addition(n1, n2);
  return res.json([{ reponse: a }]);
});

app.post("/s1/exercice2", (req, res) => {
  const n1 = req.body.n1;
  const n2 = req.body.n2;
  if (n1 == null || n2 == null) {
    return res.json([{ reponse: "Veuillez entrer un nombre valide" }]);
  }
  if (!n1) {
    return res.json([{ reponse: "Veuillez entrer un nombre valide" }]);
  }
  if (!n2) {
    return res.json([{ reponse: "Veuillez entrer un nombre valide" }]);
  }
  let a = soustraction(n1, n2);
  return res.json([{ reponse: a }]);
});

app.post("/s1/exercice3", (req, res) => {
  const n1 = req.body.n1;
  const n2 = req.body.n2;
  if (n1 == null || n2 == null) {
    return res.json([{ reponse: "Veuillez entrer un nombre valide" }]);
  }
  if (!n1) {
    return res.json([{ reponse: "Veuillez entrer un nombre valide" }]);
  }
  if (!n2) {
    return res.json([{ reponse: "Veuillez entrer un nombre valide" }]);
  }
  let a = multiplication(n1, n2);
  return res.json([{ reponse: a }]);
});

app.post("/s1/exercice4", (req, res) => {
  const n1 = req.body.n1;
  const n2 = req.body.n2;
  if (n1 == null || n2 == null) {
    return res.json([{ reponse: "Veuillez entrer un nombre valide" }]);
  }
  if (!n1) {
    return res.json([{ reponse: "Veuillez entrer un nombre valide" }]);
  }
  if (!n2) {
    return res.json([{ reponse: "Veuillez entrer un nombre valide" }]);
  }
  if (n2 == 0) {
    return res.json([{ reponse: "La division par 0 n'est pas possible" }]);
  }
  let a = division(n1, n2);
  return res.json([{ reponse: a }]);
});

app.post("/s1/exercice5", (req, res) => {
  const n1 = req.body.n1;
  if (n1 == null) {
    return res.json([{ reponse: "Veuillez entrer un nombre valide" }]);
  }
  if (n1 < 0) {
    return res.json([{ reponse: "Veuillez entrer un nombre positif" }]);
  }
  let a = factorielle(n1);
  return res.json([{ reponse: a }]);
});

app.post("/s1/exercice6", (req, res) => {
  const n1 = req.body.n1;
  if (n1 == null) {
    return res.json([{ reponse: "Veuillez entrer un nombre valide" }]);
  }
  let a = estPairOuImpair(n1);
  return res.json([{ reponse: a }]);
});

app.post("/s1/exercice7", (req, res) => {
  const n1 = req.body.n1;
  if (n1 == null) {
    return res.json([{ reponse: "Veuillez entrer un nombre valide" }]);
  }
  let a = celsiusEnFahrenheit(n1);
  return res.json([{ reponse: a }]);
});

app.post("/s1/exercice8", (req, res) => {
  const n1 = req.body.n1;
  if (n1 == null) {
    return res.json([{ reponse: "Veuillez entrer un nombre valide" }]);
  }
  let a = aireCercle(n1);
  return res.json([{ reponse: a }]);
});

app.post("/s1/exercice9", (req, res) => {
  const n1 = req.body.n1;
  if (n1 == null) {
    return res.json([{ reponse: "Veuillez entrer un nombre valide" }]);
  }
  let a = estPalindrome(n1);
  return res.json([{ reponse: a }]);
});

app.post("/s1/exercice10", (req, res) => {
  const n1 = req.body.n1;
  const n2 = req.body.n2;
  if (n1 == null || n2 == null) {
    return res.json([{ reponse: "Veuillez entrer un nombre valide" }]);
  }
  if (n1 == null) {
    return res.json([{ reponse: "Veuillez entrer un nombre valide" }]);
  }
  if (n2 == null) {
    return res.json([{ reponse: "Veuillez entrer un nombre valide" }]);
  }
  let a = pgcd(n1, n2);
  return res.json([{ reponse: a }]);
});

app.post("/s2/exercice1", (req, res) => {
  const date = dateIlYADixAns();
  return res.json([{ reponse: date }]);
});

app.post("/s2/exercice2", (req, res) => {
  const date = new Date(req.body.date);

  if (isNaN(date.getTime())) {
    return res
      .status(400)
      .json({ reponse: "Veuillez entrer une date valide." });
  }

  const formatedDate = formatDate(date);
  return res.json([{ reponse: formatedDate }]);
});

app.post("/s2/exercice3", (req, res) => {
  const date1 = new Date(req.body.date1);
  const date2 = new Date(req.body.date2);
  if (isNaN(date1.getTime()) || isNaN(date2.getTime())) {
    return res
      .status(400)
      .json({ reponse: "Veuillez entrer des dates valides." });
  }

  const days = differenceEnJours(date1, date2);
  return res.json([{ reponse: days }]);
});

app.post("/s2/exercice4", (req, res) => {
  const date = new Date(req.body.date);
  const days = req.body.days;
  if (days === 0 || days === null || days === undefined) {
    return res
      .status(400)
      .json({ reponse: "Veuillez entrer un nombre de jours valide." });
  }
  if (days < 0) {
    return res
      .status(400)
      .json({ reponse: "Veuillez entrer un nombre de jours positif." });
  }
  if (isNaN(days)) {
    return res
      .status(400)
      .json({ reponse: "Veuillez entrer un nombre de jours valide." });
  }
  if (isNaN(date.getTime())) {
    return res
      .status(400)
      .json({ reponse: "Veuillez entrer une date valide." });
  }
  const dateRes = ajouterJours(date, days);
  return res.json([{ reponse: dateRes }]);
});

app.post("/s2/exercice5", (req, res) => {
  const year = req.body.annee;
  if (year === null || year === undefined) {
    return res
      .status(400)
      .json({ reponse: "Veuillez entrer une année valide." });
  }
  if (year < 0) {
    return res
      .status(400)
      .json({ reponse: "Veuillez entrer une année valide." });
  }
  if (isNaN(year)) {
    return res
      .status(400)
      .json({ reponse: "Veuillez entrer une année valide." });
  }
  const estBissextile = estAnneeBissextile(year);
  return res.json([{ reponse: estBissextile }]);
});

app.post("/s2/exercice6", (req, res) => {
  const date = new Date(req.body.date);
  if (isNaN(date.getTime())) {
    return res
      .status(400)
      .json({ reponse: "Veuillez entrer une date valide." });
  }
  const dateRes = premierJourDuMois(date);
  return res.json([{ reponse: dateRes }]);
});

app.post("/s2/exercice7", (req, res) => {
  const date = new Date(req.body.date);
  if (isNaN(date.getTime())) {
    return res
      .status(400)
      .json({ reponse: "Veuillez entrer une date valide." });
  }
  const dateRes = dernierJourDuMois(date);
  return res.json([{ reponse: dateRes }]);
});

app.post("/s2/exercice8", (req, res) => {
  const heures = req.body.heures;
  const minutes = req.body.minutes;
  if (heures === null || minutes === null) {
    return res
      .status(400)
      .json({ reponse: "Veuillez entrer une durée valide." });
  }
  if (heures < 0 || minutes < 0) {
    return res
      .status(400)
      .json({ reponse: "Veuillez entrer une durée valide." });
  }
  if (isNaN(heures) || isNaN(minutes)) {
    return res
      .status(400)
      .json({ reponse: "Veuillez entrer une durée valide." });
  }
  const duree = formaterDuree(heures, minutes);
  return res.json([{ reponse: duree }]);
});

app.post("/s2/exercice9", (req, res) => {
  const debut1 = new Date(req.body.debut1);
  const fin1 = new Date(req.body.fin1);
  const debut2 = new Date(req.body.debut2);
  const fin2 = new Date(req.body.fin2);
  if (
    isNaN(debut1.getTime()) ||
    isNaN(fin1.getTime()) ||
    isNaN(debut2.getTime()) ||
    isNaN(fin2.getTime())
  ) {
    return res
      .status(400)
      .json({ reponse: "Veuillez entrer des dates valides." });
  }
  const chevauchement = chevauchementDates(debut1, fin1, debut2, fin2);
  return res.json([{ reponse: chevauchement }]);
});

app.post("/s2/exercice10", (req, res) => {
  const date = new Date(req.body.date);
  if (isNaN(date.getTime())) {
    return res
      .status(400)
      .json({ reponse: "Veuillez entrer une date valide." });
  }
  const age = calculerAge(date);
  return res.json([{ reponse: age }]);
});

app.listen(PORT, () => {
  console.log(`Serveur démarré sur http://localhost:${PORT}`);
});

module.exports = app;
