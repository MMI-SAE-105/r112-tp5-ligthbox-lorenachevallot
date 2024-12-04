// *** LIGHTBOX ***

// Récupère l'élément HTML avec l'ID "lightbox"
const lightBox = document.querySelector("#lightbox");

// Cible l'élément <img> contenu dans l'élément avec l'ID "lightbox"
const image = document.querySelector("#lightbox img");

// Ajoute un écouteur d'événements pour détecter les clics sur tout le doc
document.addEventListener("click", function (e) {

// Vérifie si l'élément cliqué a l'attribut "data-full-img" ou si la lightbox est déjà ouverte
if (e.target.matches("data-full-img") || lightBox.open) {

    // Ferme la lightbox si elle est déjà ouverte
    if (lighBox.open) {
        lightBox.close();
    } else {
        // Sinon, ouvre la lightbox
        lightBox.showModal();
    }