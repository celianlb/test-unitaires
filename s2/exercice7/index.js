// Exercice 7: Créer une fonction pour obtenir le dernier jour du mois d'une date donnée
module.exports = function dernierJourDuMois(date) {
    const res = new Date(date);
    res.setMonth(res.getMonth() + 1);
    res.setDate(0);
    return res;
}
