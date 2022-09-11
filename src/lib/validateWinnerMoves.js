const winnerConditions = [
  ['1', '2', '3'],
  ['4', '5', '6'],
  ['7', '8', '9'],
  ['1', '4', '7'],
  ['2', '5', '8'],
  ['3', '6', '9'],
  ['1', '5', '9'],
  ['3', '5', '7']
];

const validateWinnerMoves = (moves) => {
  let winnerMoves = null

  winnerConditions.every(condition => {
    if ( moves.includes(condition[0]) && moves.includes(condition[1]) && moves.includes(condition[2]) ) {
      winnerMoves = condition;
      return false;
    }
    
    return true;
  });

  return winnerMoves;
}

export default validateWinnerMoves;