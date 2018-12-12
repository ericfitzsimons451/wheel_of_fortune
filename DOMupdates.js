const domUpdates = {
  ////////////////////Game Start////////////////////
  getPlayerNames() {
    const player1Name = $("#player-1-input").val();
    const player2Name = $("#player-2-input").val();
    const player3Name = $("#player-3-input").val();

    const playerNames = [];
    playerNames.push(player1Name, player2Name, player3Name);
    return playerNames;
  },

  setPlayerNames(playerNames) {
    $(".display-player1-name").text(`${playerNames[0]}`);
    $(".display-player2-name").text(`${playerNames[1]}`);
    $(".display-player3-name").text(`${playerNames[2]}`);
  },

  fireNameAlert() {
    alert("Every player should have a name!");
  },

  hideStartScreen() {
    $(".start-screen").fadeOut(1100);
  },

  ////////////////////Gameplay////////////////////

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

  displayPuzzle(puzzle) {
    let splitAnswer = Array.from(puzzle);
    splitAnswer.forEach(character => {
      if (character === " ") {
        $(".board-background").append(
          `<li class="board-space space">${character}</li>`
        );
      } else if (character === "-" || character === "&" || character === "'") {
        $(".board-background").append(
          `<li class="board-space">${character}</li>`
        );
      } else {
        $(".board-background").append(
          `<li class="board-space hidden">${character}</li>`
        );
      }
    });
  },

  fireVowelAlert(letter) {
    if (
      letter === "a" ||
      letter === "e" ||
      letter === "i" ||
      letter === "o" ||
      letter === "u"
    ) {
      alert("You have to choose a consonant!");
      $(".guess-letter-input").val("");
    }
  },

  displayCategory(category) {
    $(".curr-category").text(`${category}`);
  },

  displaySpinValue(value) {
    if (value === "LOSE A TURN" || value === "BANKRUPT") {
      $(".current-spin-value").text(`${value}`);
      $(".spin-btn").prop("disabled", false);
    } else {
      $(".current-spin-value").text(`$${value}`);
      $(".spin-btn").prop("disabled", true);
    }
  },

  showGuessedLetter(letter) {
    if (
      letter !== "a" &&
      letter !== "e" &&
      letter !== "i" &&
      letter !== "o" &&
      letter !== "u"
    ) {
      $(".guessed-letter-area").append(`<li class="letter-btn">${letter}</li>`);
    }
  },

  updatePuzzleOnDom(letter) {
    if (
      letter !== "a" &&
      letter !== "e" &&
      letter !== "i" &&
      letter !== "o" &&
      letter !== "u"
    ) {
      [...$(".board-space")].forEach(char => {
        if (char.innerText === letter) {
          char.classList.remove("hidden");
        }
      });
    }
  },

  putVowelOnDom(letter) {
    [...$(".board-space")].forEach(char => {
      if (char.innerText === letter) {
        char.classList.remove("hidden");
        $(`.vowel-${letter.toLowerCase()}`).addClass("hide");
      } else {
        $(`.vowel-${letter.toLowerCase()}`).addClass("hide");
      }
    });
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

  updatePlayerRoundScore(score, player) {
    if (player === $(".display-player1-name").text()) {
      $(".player1-score").text(`Score: $${score}`);
    } else if (player === $(".display-player2-name").text()) {
      $(".player2-score").text(`Score: $${score}`);
    } else if (player === $(".display-player3-name").text()) {
      $(".player3-score").text(`Score: $${score}`);
    }
  },

  displaySolvedPuzzle() {
    [...$(".board-space")].forEach(char => {
      char.classList.remove("hidden");
    });
  },

  enableButtons() {
    $(".guess-letter-btn").prop("disabled", false);
    $(".guess-letter-input").prop("disabled", false);
    $(".solve-puzzle-input").prop("disabled", false);
    $(".solve-puzzle-btn").prop("disabled", false);
  },

  ////////////////////Round Change////////////////////
  displayRoundPopUp(player, score) {
    $(".change-round-popup").removeClass("hide");
    $(".winner-info")
      .html(`<h1 class="change-round-popup-title">Congratulations, ${player}!</h1>
      <h2 class="change-round-popup-message">Your New Total Score is $${score}</h2>`);
  },

  hideRoundPopUp() {
    $(".change-round-popup").addClass("hide");
  },

  updateRoundNumber(round) {
    $(".round-counter").text(`Round ${round}`);
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

  resetVowels() {
    $(".vowels").html(`
      <li class="vowel-btn vowel-a">A</li>
      <li class="vowel-btn vowel-e">E</li>
      <li class="vowel-btn vowel-i">I</li>
      <li class="vowel-btn vowel-o">O</li>
      <li class="vowel-btn vowel-u">U</li>
    `);
  },

  clearPuzzle() {
    $(".board-background").html("");
    $(".guessed-letter-area").html("");
  },

  resetRoundScore() {
    $(".player1-score").text(`Score: $ 0`);
    $(".player2-score").text("Score: $ 0");
    $(".player3-score").text("Score: $ 0");
  },

  ////////////////////DOM Packages////////////////////

  forRoundChange(round, puzzle, category) {
    domUpdates.resetRoundScore();
    domUpdates.updateRoundNumber(round);
    domUpdates.clearPuzzle();
    domUpdates.resetVowels();
    domUpdates.displayPuzzle(puzzle);
    domUpdates.displayCategory(category);
  },

  forStartingGame(player, puzzle, category) {
    domUpdates.hideStartScreen();
    domUpdates.displayCurrentPlayerTurn(player);
    domUpdates.displayPuzzle(puzzle);
    domUpdates.displayCategory(category);
  },

  forCorrectSolution(player, score) {
    domUpdates.displaySolvedPuzzle();
    domUpdates.displayTotalScore(player, score);
    domUpdates.displayRoundPopUp(player, score);
  }
};



if (typeof module !== 'undefined') {
  module.exports = domUpdates;
}