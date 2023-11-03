// Exercice 1: Crée une fonction pour Obtenir la date d'aujourd'hui il y a 10 ans, avec en paramètre la date d'aujourd'hui
module.exports = function dateIlYADixAns() {
  let dateActuelle = new Date();
  let datePassee = new Date(
    dateActuelle.setFullYear(dateActuelle.getFullYear() - 10)
  );
  return datePassee.toISOString().split("T")[0];
};
