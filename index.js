let game = new Game();
$('.start-game-btn').on('click', function(){
  game.startGame();
});

// function getPlayerNames(){
//   const player1Name = $('#player-1-input').val();
//   const player2Name = $('#player-2-input').val();
//   const player3Name = $('#player-3-input').val();


//   const playerNames = [];
//   playerNames.push(player1Name, player2Name, player3Name);
//   return playerNames;
// }





$('.spin-btn').on('click', function() {
  game.players[0].spinWheel();
})



// let puzzle;
// //Functions for Event Handlers
// function startGame(event) {
//   event.preventDefault()


//   // const player1Name = $('#player-1-input').val();
//   // const player2Name = $("#player-2-input").val();
//   // const player3Name = $("#player-3-input").val();

//   // $('.display-player1-name').text(`Player 1: ${player1Name}`);
//   // $('.display-player2-name').text(`Player 2: ${player2Name}`);
//   // $('.display-player3-name').text(`Player 3: ${player3Name}`);
//   // const playerNames = domUpdates.setPlayerNames();
//   // const playerArr = playerNames.map((name) => {
//   //   return new Player(name)
//   })


 
  


//   // game = new Game(playerArr);
//   puzzle = game.createPuzzle(data);

// }


