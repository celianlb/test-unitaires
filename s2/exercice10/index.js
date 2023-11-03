// Exercice 10: Créer une fonction pour calculer l'âge à partir de la date de naissance
module.exports = function calculerAge(dateNaissance) {
    const dateNaissanceFormatee = new Date(dateNaissance);
    const dateActuelle = new Date();
    const age = dateActuelle.getFullYear() - dateNaissanceFormatee.getFullYear();
    const mois = dateActuelle.getMonth() - dateNaissanceFormatee.getMonth();
    const jours = dateActuelle.getDate() - dateNaissanceFormatee.getDate();
    return mois < 0 || (mois === 0 && jours < 0) ? age - 1 : age;
}