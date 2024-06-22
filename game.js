/**
 * Tableau contenant les couleurs du jeu.
 * @type {string[]}
 */
var buttonColours = ["red", "blue", "green", "yellow"];

/**
 * Tableau pour stocker la séquence de couleurs dans le jeu.
 * @type {string[]}
 */
var gamePattern = [];

/**
 * Tableau pour stocker les boutons cliqués par le joueur.
 * @type {string[]}
 */
var userClickedPattern = [];

/**
 * Niveau actuel du jeu.
 * @type {number}
 */
var level = 0;

/**
 * Indicateur si le jeu a démarré ou non.
 * @type {boolean}
 */
var started = true;

/**
 * Fonction pour jouer un son à partir d'un fichier audio.
 * @param {string} name - Le nom du fichier audio à jouer.
 */
function playSound(name) {
  var audio = new Audio(`sounds/${name}.mp3`);
  audio.play();
}

/**
 * Fonction pour animer la couleur choisie par l'utilisateur.
 * @param {string} currentColor - La couleur actuelle choisie par l'utilisateur.
 */
function animatePress(currentColor) {
  $(`#${currentColor}`).addClass("pressed");

  setTimeout(function () {
    $(`#${currentColor}`).removeClass("pressed");
  }, 100);
}

/**
 * Fonction pour générer la prochaine couleur dans la séquence du jeu.
 */
function nextSequence() {
  var randomNumber = Math.floor(Math.random() * 4);

  // Sélectionne une couleur aléatoire et l'ajoute à la séquence de jeu
  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);

  // Applique l'animation de clignotement (flash) au bouton sélectionné
  var $selectedButton = $("#" + randomChosenColour);
  $selectedButton.fadeOut(50).fadeIn(50).fadeOut(50).fadeIn(50);

  // Joue le son correspondant à la couleur choisie
  playSound(randomChosenColour);

  // Incrémente le niveau et met à jour le titre
  level += 1;
  $("h1").text("Level " + level);
}

// Gère le clic sur les boutons colorés par l'utilisateur
$(".btn").on("click", function () {
  var userChosenColour = $(this).attr("id"); // Récupère l'ID du bouton cliqué

  userClickedPattern.push(userChosenColour); // Ajoute userChosenColour à userClickedPattern

  playSound(userChosenColour);
  animatePress(userChosenColour);
  checkAnswer(userClickedPattern.length - 1);
});

// Détecte quand une touche du clavier est pressée au début du jeu
$(document).keydown(function (event) {
  if (started) {
    $("h1").text("Level " + level);
    nextSequence();
    started = false;
  }
});

/**
 * Vérifie si la réponse de l'utilisateur est correcte.
 * @param {number} currentLevel - L'index de la dernière réponse de l'utilisateur.
 */
function checkAnswer(currentLevel) {
  if (userClickedPattern[currentLevel] == gamePattern[currentLevel]) {
    if (userClickedPattern.length === gamePattern.length) {
      setTimeout(function () {
        nextSequence();
      }, 1000);
      userClickedPattern = [];
      console.log("success");
    }
  } else {
    playSound("wrong");
    $("body").addClass("game-over");

    setTimeout(function () {
      $("body").removeClass("game-over");
    }, 200);

    $("h1").text("Game Over, Press Any Key To Restart");
    startOver();
  }
}

/**
 * Réinitialise les variables pour recommencer le jeu.
 */
function startOver() {
  level = 0;
  started = true;
  gamePattern = [];
  userClickedPattern = [];
}
