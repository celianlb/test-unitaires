// Exercice 4: Créer une fonction pour ajouter un nombre de jours à une date
module.exports = function ajouterJours(date, days) {
    const res = new Date(date);
    res.setDate(res.getDate() + days);
    return res;
}
