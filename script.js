// Sélectionner tous les éléments avec la classe 'bouton' et les stocker dans un tableau.
const nombre = [...document.querySelectorAll('.bouton')];

// Créer un tableau contenant les valeurs de l'attribut 'data-key' de chaque élément 'bouton'.
const listeKeycode = nombre.map(nombre => nombre.dataset.key);
// console.log(listeKeycode);

// Sélectionner l'élément avec la classe 'ecran'.
const ecran = document.querySelector('.ecran');

// Ajoutez un écouteur d'événements pour les touches du clavier (keydown).
document.addEventListener('keydown', (e) => {
    // Obtener le code de la touche pressée sous forme de chaîne de caractères.
    const valeur = e.keyCode.toString();
    // console.log(valeur, typeof valeur)

    // Appeler la fonction 'calculer' avec le code de la touche.
    calculer(valeur);
})

// Ajouter un écouteur d'événements pour les clics sur les éléments HTML.
document.addEventListener('click', (e) => {
    // Obtenir la valeur de l'attribut 'data-key' de l'élément cliqué.
    const valeur = e.target.dataset.key;
    // console.log(valeur, typeof valeur)

    // Appeler la fonction 'calculer' avec la valeur obtenue.
    calculer(valeur);
})

// Définition de la fonction 'calculer' qui effectue les opérations en fonction de la touche pressée.
const calculer = (valeur) => {
    if (listeKeycode.includes(valeur)) {
        switch (valeur) {
            case '8':
                // Effacez le contenu de l'écran (touche "C").
                ecran.textContent = "";
                break;
            case '13':
                // Évaluez le contenu de l'écran et affichez le résultat (touche "Entrée").
                const calcul = eval(ecran.textContent);
                ecran.textContent = calcul;
                break;
            default:
                // Ajoutez le contenu de la touche à l'écran.
                const indexKeycode = listeKeycode.indexOf(valeur);
                const touche = nombre[indexKeycode];
                ecran.textContent += touche.innerHTML;
        }
    }
}

// Ajoutez un écouteur d'événements pour les erreurs de calcul et affichez une alerte en cas d'erreur.
window.addEventListener('error', (e) => {
    alert('erreur de calcul :' + e.message);
})
