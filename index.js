let game = new Game();
$('.guess-letter-btn').prop('disabled', true);
$('.guess-letter-input').prop('disabled', true);
$('.solve-puzzle-input').prop('disabled', true);
$('.solve-puzzle-btn').prop('disabled', true);

$('.start-game-btn').on('click', function(e){
  e.preventDefault();
  game.startGame();
});

$('.spin-btn').on('click', function(e) {
  e.preventDefault();
  domUpdates.enableButtons();
  game.players[0].spinWheel();

})

$('.guess-letter-submit').on('click', function(e) {
  e.preventDefault();
  const letter = $('.guess-letter-input').val();
  const lowerLetter = letter.toLowerCase();
  game.checkPlayerGuess(lowerLetter);
  $('.guess-letter-btn').prop('disabled', true);
  $('.guess-letter-input').val('');
  $(".spin-btn").prop("disabled", false);
})

$(".solve-puzzle-btn").on("click", function(e) {
  e.preventDefault();
  // const guess = $(".solve-puzzle-input").val();
  // const lowerGuess = guess.toLowerCase();
  // game.checkPlayerSolution(lowerGuess);
  // $(".solve-puzzle-btn").prop("disabled", true);
  // $('.solve-puzzle-input').val("");
  // $(".spin-btn").prop("disabled", false);
});


