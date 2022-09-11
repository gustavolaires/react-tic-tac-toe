import validateWinnerMoves from "./validateWinnerMoves"

const validateWinner = (player1State, player2State, turn) => {
  console.log(player1State, player2State);
  const isPlayer1MovesWinner = validateWinnerMoves(player1State.moves);
  const isPlayer2MovesWinner = validateWinnerMoves(player2State.moves);

  if (isPlayer1MovesWinner !== null) { return [1, isPlayer1MovesWinner]; }
  if (isPlayer2MovesWinner !== null) { return [2, isPlayer2MovesWinner]; }
  if (player1State.moves.length + player2State.moves.length === 9) { return [0, null]; }

  return [null, null];
}

export default validateWinner;