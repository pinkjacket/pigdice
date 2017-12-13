var playerArray = [];

var Player = function(player) {
  this.totalScore = 0;
  this.roundScore = 0;
  this.name = player;
}

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive
}

var enterPlayer = function() {}

$(document).ready(function(){
  $("form#players").submit(function(event){
    event.preventDefault();
    var namePlayer1 = $("input#name1").val();
    var namePlayer2 = $("input#name2").val();
    var player1 = new Player(namePlayer1);
    var player2 = new Player(namePlayer2);
    playerArray.push(player1, player2);
  })
  $("form#roll").submit(function(event){
    event.preventDefault();
    var roll = getRandomIntInclusive(1, 6);
    alert(roll);
  })
  $("form#hold").submit(function(event){
    event.preventDefault();
  })
})
