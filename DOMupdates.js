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
    console.log('domUpdates', puzzle)
    //after start game
    let splitAnswer = Array.from(puzzle)
    splitAnswer.forEach((character)=> {
      const chars = $(".board-background").append(`<li class="board-space">${character}</li>`);
    })
  },

  displayCategory(category) {
    $('.curr-category').text(`${category}`)
  }
} 




if (typeof module !== 'undefined') {
  module.exports = domUpdates;
}