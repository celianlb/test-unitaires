// Exercice 2: Créer une fonction pour formater une date en "jj/mm/aaaa" (og: yyyy-mm-dd)
module.exports = function formatDate(date) {
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear().toString();
    return `${day}/${month}/${year}`;
}
