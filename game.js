// Tableau contenant les couleurs du jeu.
var buttonColours = ["red", "blue", "green", "yellow"];

// Tableau pour stocker la séquence de couleurs dans le jeu
var gamePattern = [];

//Tableau pour stocker les boutons cliqués par le joueur
var userClickedPattern = [];

/**
 * fonction pour mettre le son
 * @param {} name
 */
function playSound(name) {
  var audio = new Audio(`sounds/${name}.mp3`);
  audio.play();
}

/**fonction pour animer la couleur choisie */
function animatePress(currentColor) {
  $(`#${currentColor}`).addClass("pressed");

  setTimeout(function () {
    $(`#${currentColor}`).removeClass("pressed");
  }, 100);
}

/**
 * Fonction pour générer la prochaine couleur dans la séquence
 */
function nextSequence() {
  var randomNumber = Math.floor(Math.random() * 4);

  // Sélectionne une couleur aléatoire du tableau buttonColours en utilisant le nombre aléatoire et Ajoute la couleur aléatoire sélectionnée à la séquence de jeu
  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);

  // Applique l'animation de clignotement (flash)
  var $selectedButton = $("#" + randomChosenColour);
  $selectedButton.fadeOut(50).fadeIn(50).fadeOut(50).fadeIn(50);

  //Mettre le son
  playSound(randomChosenColour);
}

// Vérifie quel bouton a été appuyé: userChosenColour contiendra l'id (le nom de la couleur)
$(".btn").on("click", function () {
  var userChosenColour = $(this).attr("id"); // Récupère l'ID du bouton cliqué

  userClickedPattern.push(userChosenColour); // Ajoute userChosenColour à userClickedPattern

  playSound(userChosenColour);
  animatePress(userChosenColour);
});
