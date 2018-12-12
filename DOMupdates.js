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

  typedVowelAlert(letter) {
    if (letter === 'a' || letter === 'e' || letter === 'i'|| letter === 'o' || letter === 'u' ) {
    alert('You have to choose a consonant!')
    $('.guess-letter-input').val('');
    }
  },

  hideStartScreen() {
    $('.start-screen').fadeOut(1500);
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

  playerNamesAlert() {
    alert('Every player should have a name!')
  },

  displayRoundPopUp() {
    $('.change-round-popup').removeClass('hide')
  },

  hideRoundPopUp() {
    $('.change-round-popup').addClass('hide')
  },

  updateRoundNumber(round) {
    $('.round-counter').text(`Round ${round}`)
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

  displayTotalScore(player, score) {
      if (player.name === $(".display-player1-name").text()) {
        $(".player1-total-score").text(`Total Score: $${score}`);
      } else if (player.name === $(".display-player2-name").text()) {
        $(".player2-total-score").text(`Total Score: $${score}`);
      } else if (player.name === $(".display-player3-name").text()) {
        $(".player3-total-score").text(`Total Score: $${score}`);
      }
},

  displayCurrentPlayerTurn(player) {
    if (player.name === $(".display-player1-name").text()) {
      $(".display-player3-name").removeClass("current-player");
      $(".display-player1-name").addClass("current-player");
    } else if (player.name === $(".display-player2-name").text()) {
      $(".display-player1-name").removeClass("current-player");
      $(".display-player2-name").addClass("current-player");
    } else if (player.name === $(".display-player3-name").text()) {
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
    if (letter !== 'a' && letter !== 'e' && letter !== 'i'&& letter !== 'o' && letter !== 'u' ) {
    [...$('.board-space')].forEach((char) => {
      if (char.innerText === letter) {
        char.classList.remove('hidden')      
      }
    })
    };
  },

  putVowelOnDom(letter) {
    [...$('.board-space')].forEach((char) => {
      if (char.innerText === letter) {
        char.classList.remove('hidden');
      $(`.vowel-${letter.toLowerCase()}`).addClass('hide')
      } else {
        $(`.vowel-${letter.toLowerCase()}`).addClass('hide')
      }
    });
  },

  resetVowels() {
    $(".vowels").html(`
      <li class="vowel-btn vowel-a">A</li>
      <li class="vowel-btn vowel-e">E</li>
      <li class="vowel-btn vowel-i">I</li>
      <li class="vowel-btn vowel-o">O</li>
      <li class="vowel-btn vowel-u">U</li>
    `);
  },

  displaySolvedPuzzle() {
    [...$('.board-space')].forEach((char) => {
        char.classList.remove('hidden')
      });
  },

  clearPuzzle() {
    $('.board-background').html('')
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

  resetRoundScore() {
      $(".player1-score").text(`Score: $ 0`);
      $(".player2-score").text('Score: $ 0');
      $(".player3-score").text('Score: $ 0');
  },

  deductMoney(player) {
    if (player.name === $(".display-player1-name").text()) {
      $(".player1-score").text(`Score: $${player.roundPoints}`);
    } else if (player.name === $(".display-player2-name").text()) {
      $(".player2-score").text(`Score: $${player.roundPoints}`);
    } else if (player.name === $(".display-player3-name").text()) {
      $(".player3-score").text(`Score: $${player.roundPoints}`);
    }
  },

  forRoundChange(round, puzzle, category) {
    domUpdates.resetRoundScore();
    domUpdates.updateRoundNumber(round);
    domUpdates.clearPuzzle();
    domUpdates.resetVowels(); 
    domUpdates.displayPuzzle(puzzle);
    domUpdates.displayCategory(category);
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