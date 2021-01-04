var gameState = 0;
var playerCount, database, form, player, game;
var allPlayers;
var distance = 0;

function setup() {
  createCanvas(800,400);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}

function draw() {
    if(playerCount===4){
      game.update(1);
    }
    if(gameState===1){
      clear();
      game.play();
    }
}