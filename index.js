let game = new Game();

$('.guess-letter-btn').prop('disabled', true);
$('.guess-letter-input').prop('disabled', true);
$('.solve-puzzle-input').prop('disabled', true);
$('.solve-puzzle-btn').prop('disabled', true);

$('.start-game-btn').on('click', function(e){
  e.preventDefault();
  if ($('#player-1-input').val() === '' || $('#player-2-input').val() === '' || $('#player-3-input').val() === '') {
    domUpdates.fireNameAlert();
  } else {
    let player1 = new Player($('#player-1-input').val());
    let player2 = new Player($('#player-2-input').val());
    let player3 = new Player($('#player-3-input').val());
    let players = [player1, player2, player3]
    for (var i = 0; i < 3; i++) {
      game.players.push(players[i])
    }
    game.startGame();
  }
});

$('.exit-btn').on('click', function() {
  location.reload();
});

$('.spin-btn').on('click', function(e) {
  e.preventDefault();
  domUpdates.enableButtons();
  game.players[0].spinWheel();
})

$('.guess-letter-submit').on('click', function(e) {
  e.preventDefault();
  const letter = $('.guess-letter-input').val();
  // if (letter === 'a' || letter === 'e' || letter === 'i'|| letter === 'o' || letter === 'u' ) {
  //   alert('You have to choose a consonant!')
    $('.guess-letter-input').val('');
  
  const lowerLetter = letter.toLowerCase();
  game.players[0].guessLetter(lowerLetter);
  $('.guess-letter-btn').prop('disabled', true);
  $('.guess-letter-input').val('');
  $(".spin-btn").prop("disabled", false);
})

$('.vowels').on('click', function(e) {
  let myVowel = $(e.target).text().toLowerCase();
  myVowel = myVowel.toLowerCase();
  game.players[0].buyVowel(myVowel)

})


$(".solve-puzzle-btn").on("click", function(e) {
  e.preventDefault();
  const guess = $(".solve-puzzle-input").val();
  const lowerGuess = guess.toLowerCase();
  game.players[0].solvePuzzle(lowerGuess);
  $(".solve-puzzle-btn").prop("disabled", true);
  $('.solve-puzzle-input').val("");
  $(".spin-btn").prop("disabled", false);
});

$('.new-round-btn').on('click', function(event) {
  event.preventDefault();
  if (game.currentRound === 4) {
    game.startBonusRound();
  } else {
    game.changeRounds();
    domUpdates.hideRoundPopUp();
  }
})


