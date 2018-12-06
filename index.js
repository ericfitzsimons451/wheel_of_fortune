$('.start-game-btn').on('click', startGame)
let player1;
let player2;
let player3;
let game;
let puzzle;
//Functions for Event Handlers
function startGame(event) {
  event.preventDefault()
  const player1Name = $('#player-1-input').val();
  const player2Name = $("#player-2-input").val();
  const player3Name = $("#player-3-input").val();

  $('.display-player1-name').text(`Player 1: ${player1Name}`); 
  $('.display-player2-name').text(`Player 2: ${player2Name}`); 
  $('.display-player3-name').text(`Player 3: ${player3Name}`);

  $('.start-screen').hide()

  player1 = new Player(player1Name)
  player2 = new Player(player2Name)
  player3 = new Player(player3Name)

  player1.turn = true;

  game = new Game([player1, player2, player3]);
  puzzle = game.createPuzzle(data);
  console.log(puzzle[3])

}


