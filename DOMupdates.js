const domUpdates = {
  setPlayerNames(playerNames) {
    $('.display-player1-name').text(`${playerNames[0]}`);
    $('.display-player2-name').text(`${playerNames[1]}`);
    $('.display-player3-name').text(`${playerNames[2]}`);
  },

  getPlayerNames() {
    const player1Name = $('#player-1-input').val();
    const player2Name = $('#player-2-input').val();
    const player3Name = $('#player-3-input').val();


    const playerNames = [];
    playerNames.push(player1Name, player2Name, player3Name);
    return playerNames;
  },


  hideStartScreen() {
    $('.start-screen').hide();
  },

  displayPuzzle(puzzle) {
    let splitAnswer = Array.from(puzzle)
    splitAnswer.forEach((character)=> {
      if (character === ' ') {
        $(".board-background").append(`<li class="board-space space">${character}</li>`);
      } else if (character === '-' || character === '&' || character === '\'') {
        $(".board-background").append(`<li class="board-space">${character}</li>`);
      } else {
        $(".board-background").append(`<li class="board-space hidden">${character}</li>`);
      }
    })
  },

  displayCategory(category) {
    $('.curr-category').text(`${category}`);
  },

  displaySpinValue(value) {
    if(value === "LOSE A TURN" || value === 'BANKRUPT') {
      $('.current-spin-value').text(`${value}`);
      $(".spin-btn").prop("disabled", false);
    } else {
      $(".current-spin-value").text(`$${value}`);
      $(".spin-btn").prop("disabled", true);
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
  },

  showGuessedLetter(letter) {
    if (letter !== 'a' && letter !== 'e' && letter !== 'i'&& letter !== 'o' && letter !== 'u' ) {
      $(".guessed-letter-area").append(`<li class="letter-btn">${letter}</li>`);
    }
  },

  updatePuzzleOnDom(letter) {
    [...$('.board-space')].forEach((char) => {
      if (char.innerText === letter) {
        char.classList.remove('hidden')      
      }
    });
  },

  displaySolvedPuzzle() {
    [...$('.board-space')].forEach((char) => {
        char.classList.remove('hidden')
      });
  },

  updatePlayerRoundScore(score, player) {
    if (player === $(".display-player1-name").text()) {
      $(".player1-score").text(`Score: $${score}`);
    } else if (player === $(".display-player2-name").text()) {
      $(".player2-score").text(`Score: $${score}`);
    } else if (player === $(".display-player3-name").text()) {
      $(".player3-score").text(`Score: $${score}`);
    }
  },

  deductVowelCost(player) {
    if (player.name === $(".display-player1-name").text()) {
      $(".player1-score").text(`Score: $${player.roundPoints}`);
    } else if (player.name === $(".display-player2-name").text()) {
      $(".player2-score").text(`Score: $${player.roundPoints}`);
    } else if (player.name === $(".display-player3-name").text()) {
      $(".player3-score").text(`Score: $${player.roundPoints}`);
    }
  },

  

  enableButtons() {
    $('.guess-letter-btn').prop('disabled', false);
    $('.guess-letter-input').prop('disabled', false);
    $('.solve-puzzle-input').prop('disabled', false);
    $('.solve-puzzle-btn').prop('disabled', false);
  }
} 





if (typeof module !== 'undefined') {
  module.exports = domUpdates;
}