$('.start-game-btn').on('click', startGame)
let game;
let puzzle;
//Functions for Event Handlers
function startGame(event) {
  event.preventDefault()
  // const player1Name = $('#player-1-input').val();
  // const player2Name = $("#player-2-input").val();
  // const player3Name = $("#player-3-input").val();

  // $('.display-player1-name').text(`Player 1: ${player1Name}`);
  // $('.display-player2-name').text(`Player 2: ${player2Name}`);
  // $('.display-player3-name').text(`Player 3: ${player3Name}`);
  const playerNames = domUpdates.setPlayerNames();
  const playerArr = playerNames.map((name) => {
    return new Player(name)
  })


  $('.start-screen').hide()
  
  // player1 = new Player(playerNames[0])
  // player2 = new Player(playerNames[1]);
  // player3 = new Player(playerNames[2]);
  

  playerArr[0].turn = true;

  game = new Game(playerArr);
  puzzle = game.createPuzzle(data);

}


