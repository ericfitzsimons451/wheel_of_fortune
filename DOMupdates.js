const domUpdates = {

  setPlayerNames() {
    const player1Name = $('#player-1-input').val();
    const player2Name = $("#player-2-input").val();
    const player3Name = $("#player-3-input").val();

    $('.display-player1-name').text(`Player 1: ${player1Name}`);
    $('.display-player2-name').text(`Player 2: ${player2Name}`);
    $('.display-player3-name').text(`Player 3: ${player3Name}`);

    return [player1Name, player2Name, player3Name]
  }

} 

module.exports = domUpdates;