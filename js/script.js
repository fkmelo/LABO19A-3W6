// Cette fonction se lance quand on clique sur le bouton bleu
function genererContenu() {

  // On va chercher la boîte "demo" dans la page et on la range dans la variable demo
  let demo = document.getElementById("demo");

  // On lit le nombre écrit dans la case "Nombre de sections"
  // .value donne du texte, et Number(...) le change en vrai nombre
  let nombre = document.getElementById("qty").value;

  // On lit le texte écrit dans la case "Titre"
  let titre = document.getElementById("titre").value;

  // On lit le texte écrit dans la case "Texte"
  let texte = document.getElementById("contenu").value;

  // On vide la boîte demo (ça efface "Remplacer ce contenu!" et les anciens ajouts)
  demo.innerHTML = "";

  // Boucle : on répète le code ci-dessous une fois par section
  // i commence à 1, on continue tant que i est plus petit ou égal au nombre, et i augmente de 1 à chaque tour
  for (let i = 1; i <= nombre; i++) {

    // On crée un nouveau titre <h2> (pas encore visible dans la page)
    let nouveauTitre = document.createElement("h2");

    // On écrit du texte dans ce titre : le titre de la case + un espace + le numéro (ex. "Titre par défaut 1")
    nouveauTitre.textContent = titre + " " + i;

    // On crée un nouveau paragraphe <p> (pas encore visible non plus)
    let nouveauParagraphe = document.createElement("p");

    // On écrit dans ce paragraphe le texte de la case "Texte"
    nouveauParagraphe.textContent = texte;

    // On place le titre dans la boîte demo : il apparaît à l'écran
    demo.appendChild(nouveauTitre);

    // On place le paragraphe dans la boîte demo, juste après le titre
    demo.appendChild(nouveauParagraphe);

  } // Fin de la boucle : on recommence au début si on n'a pas fini
} // Fin de la fonction
  
function changerStyle() {
  // Obtenir les éléments p qui sont sous le div demo et changer la couleur spécifiée dans l'input
}
  
function changerClassBoutons() {
  // Obtenir les éléments boutons et changer leur className pour celui qui est spécifié dans l'input
}