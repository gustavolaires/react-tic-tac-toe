import { useState } from 'react';
import './TicTacToe.css';

import GameLayout from './components/ui/GameLayout';

const initialStates = {
  player1: {
    name: 'player 1 as ad dfa fasdf dfasdf adf d adf adf',
    symbol: 'x',
    moves: [],
    color: 'blue',
    score: 0
  },
  player2: {
    name: 'player 2 adf ad fad fd fasdf adf asd fadf asdf',
    symbol: 'o',
    moves: [],
    color: 'red',
    score: 0
  },
  started: false,
  firstPlayer: 1,
  turn: 1,
  winner: null,
  winnerMoves: null
}

const TicTacToe = () => {
  const [state, setState] = useState(initialStates);

  console.log(state);

  const updateStateCallback = (newState) => {
    setState(newState);
  }

  return (
    <div className='game-container'>
      <GameLayout gameState={state} updateGameStateCallback={updateStateCallback}/>
    </div>
  );
}

export default TicTacToe;
