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
  

// Cette fonction se lance quand on clique sur le bouton du 2e formulaire
function changerStyle() {
 
   // On va chercher la boîte "demo" (c'est là que nos paragraphes ont été générés)
  let demo = document.getElementById("demo");

  // On lit la couleur écrite dans la case "Couleur" (ici c'est red)
  let couleur = document.getElementById("couleur").value

    // On prend seulement les <p> qui sont dans demo (pas ceux du reste de la page)
  let paragraphes = demo.getElementsByTagName("p")

  // Boucle : on répète une fois pour chaque paragraphe trouvé
  // i commence à 0 (le premier de la liste) et on s'arrête quand i atteint le nombre de paragraphes
  for (let i = 0; i < paragraphes.length; i++){

    // On change la couleur du texte du paragraphe numéro i
    paragraphes[i].style.color = couleur;
  }
}
  

// Cette fonction se lance quand on clique sur le bouton du 3e formulaire
function changerClassBoutons() {
  
  // On lit les classes écrites dans la case "Class" (ex. "btn btn-warning")
  let nouvelleClasse = document.getElementById("btnClass").value

  // On prend tous les <button> de la page
  let boutons = document.getElementsByTagName("button");

  // Boucle : on répète une fois pour chaque bouton trouvé
  // i commence à 0 (le premier bouton) et on s'arrête quand i atteint le nombre de boutons
  for (let i = 0; i < boutons.length; i++){

    // On remplace toutes les classes du bouton numéro i par celles de la case
    boutons[i].className = nouvelleClasse;
  }
}