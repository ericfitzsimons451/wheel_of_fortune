let game = new Game();
$('.start-game-btn').on('click', function(){
  game.startGame();
});

$('.spin-btn').on('click', function() {
  game.players[0].spinWheel();
})

$('.guess-letter-submit').on('click', function() {
  const letter = $('.guess-letter-input').val();
  const lowerLetter = letter.toLowerCase();
  game.checkPlayerGuess(lowerLetter);
})




