// Tableau contenant les couleurs du jeu.
var buttonColours = ["red", "blue", "green", "yellow"];

// Tableau pour stocker la séquence de couleurs dans le jeu
var gamePattern = [];

/**
 * Fonction pour générer la prochaine couleur dans la séquence
 */
const nextSequence = () => {
  var randomNumber = Math.floor(Math.random() * 4);

  // Sélectionne une couleur aléatoire du tableau buttonColours en utilisant le nombre aléatoire et Ajoute la couleur aléatoire sélectionnée à la séquence de jeu
  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);

  // Applique l'animation de clignotement (flash)
  var $selectedButton = $("#" + randomChosenColour);
  $selectedButton.fadeOut(50).fadeIn(50).fadeOut(50).fadeIn(50);

  //Mettre le son
  var audio = new Audio(`sounds/${randomChosenColour}.mp3`);
  audio.play();
};
