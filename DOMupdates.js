const domUpdates = {
  setPlayerNames(playerNames) {
    $('.display-player1-name').text(`${playerNames[0]}`);
    $('.display-player2-name').text(`${playerNames[1]}`);
    $('.display-player3-name').text(`${playerNames[2]}`);
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
    if(value === "LOSE A TURN" || value === 'BANKRUPT') {
      $('.current-spin-value').text(`${value}`);
    } else {
      $(".current-spin-value").text(`$${value}`);
    }
  },

  displayCurrentPlayerTurn() {

    if (game.players[0].name === $(".display-player1-name").text()) {
      $(".display-player3-name").removeClass("current-player");
      $(".display-player1-name").addClass("current-player");
    } else if (game.players[0].name === $(".display-player2-name").text()) {
      $(".display-player1-name").removeClass("current-player");
      $(".display-player2-name").addClass("current-player");
    } else if (game.players[0].name === $(".display-player3-name").text()) {
      $(".display-player2-name").removeClass("current-player");
      $(".display-player3-name").addClass("current-player");
    }
  }
} 





if (typeof module !== 'undefined') {
  module.exports = domUpdates;
}