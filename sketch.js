var canvas,backgroundImg,playerCount,database,form,player,game;
var gameState = 0;
var allPlayers;
var distance = 0;
function setup(){
  database = firebase.database();
  console.log(database);
  createCanvas(500,500);
  game = new Game();
  game.getState();
  game.start();
}

function draw(){
  if(playerCount===4){
    game.update(1);
  }
  if(gameState===1){
    clear();
    game.play
  }
}
