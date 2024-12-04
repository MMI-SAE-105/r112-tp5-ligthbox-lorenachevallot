// *** LIGHTBOX ***

// Récupère l'élément HTML avec l'ID "lightbox"
const lightBox = document.querySelector("#lightbox");

// Cible l'élément <img> contenu dans l'élément avec l'ID "lightbox"
const image = document.querySelector("#lightbox img");

// Ajoute un écouteur d'événements pour détecter les clics sur tout le doc
document.addEventListener("click", function (e) {