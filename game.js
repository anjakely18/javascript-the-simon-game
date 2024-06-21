// Tableau contenant les couleurs du jeu.
const buttonColours = ["red", "blue", "green", "yellow"];
// Tableau pour stocker la séquence de couleurs dans le jeu
let gamePattern = [];

/**
 * Fonction pour générer la prochaine couleur dans la séquence
 */
const nextSequence = () => {
  // Génère un nombre aléatoire entre 0 et 3 (inclus)
  let randomNumber = Math.floor(Math.random() * 3);

  // Sélectionne une couleur aléatoire du tableau buttonColours en utilisant le nombre aléatoire
  const randomChosenColour = buttonColours[randomNumber];

  // Ajoute la couleur aléatoire sélectionnée à la séquence de jeu
  gamePattern.push(randomChosenColour);
};
