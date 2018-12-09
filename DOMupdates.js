const domUpdates = {
  setPlayerNames(playerNames) {
    $('.display-player1-name').text(`Player 1: ${playerNames[0]}`);
    $('.display-player2-name').text(`Player 2: ${playerNames[1]}`);
    $('.display-player3-name').text(`Player 3: ${playerNames[2]}`);
  },

  hideStartScreen() {
    $('.start-screen').hide();
  },

  displayPuzzle(puzzle) {
    let splitAnswer = Array.from(puzzle)
    splitAnswer.forEach((character)=> {
      const chars = $(".board-background").append(`<li class="board-space">${character}</li>`);
    })
  },

  displayCategory(category) {
    $('.curr-category').text(`${category}`);
  },

  displaySpinValue(value) {
    $('.current-spin-value').text(`${value}`);
  },

  displayCurrentPlayerTurn() {
    if ((game.players[0].turn = true)) {
      $(".display-player3-name").removeClass("current-player");
      $(".display-player1-name").addClass("current-player");
    } else if ((game.players[1].turn = true)) {
      $(".display-player1-name").removeClass("current-player");
      $(".display-player2-name").addClass("current-player");
    } else if ((game.players[2].turn = true)) {
      $(".display-player2-name").removeClass("current-player");
      $(".display-player3-name").addClass("current-player");
    }
  }
} 





if (typeof module !== 'undefined') {
  module.exports = domUpdates;
}