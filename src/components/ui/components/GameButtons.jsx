import React from "react";
import './GameButtons.css'

const GameButtons = (props) => {
  const gameState = props.gameState;
  const updateGameState = props.updateGameStateCallback

  const giveUp = () => {
    const gameWinner = gameState.turn === 1 ? 2 : 1;
    const nextFirstPlayer = gameWinner === 1 ? 2 : 1;
    const player1State = gameState.player1;
    const player2State = gameState.player2;

    gameWinner === 1 ? player1State.score += 1 : player2State.score += 1

    const newGameState = {
      ...gameState,
      player1: player1State,
      player2: player2State,
      turn: nextFirstPlayer,
      winner: gameWinner, 
    }

    updateGameState(newGameState);
  }

  const playAgain = () => {
    const player1State = gameState.player1;
    const player2State = gameState.player2;
    const nextFirstPlayer = gameState.firstPlayer === 1 ? 2 : 1;

    const newGameState = {
      ...gameState,
      player1: {
        ...player1State,
        moves: []
      },
      player2: {
        ...player2State,
        moves: []
      },
      started: false,
      firstPlayer: nextFirstPlayer,
      turn: nextFirstPlayer,
      winner: null
    }

    updateGameState(newGameState);
  }

  const backToMenu = () => {
    const player1State = gameState.player1;
    const player2State = gameState.player2;
    const nextFirstPlayer = gameState.firstPlayer === 1 ? 2 : 1;

    const newGameState = {
      ...gameState,
      player1: {
        ...player1State,
        moves: []
      },
      player2: {
        ...player2State,
        moves: []
      },
      started: false,
      firstPlayer: nextFirstPlayer,
      turn: nextFirstPlayer,
      winner: null
    }

    updateGameState(newGameState);
  }

  return (
    <div className="game-buttons-container">
      {
        props.gameState.winner === null ?
          <button className="game-button give-up" onClick={e => giveUp()}>Desistir</button> :
          <button className="game-button play-again" onClick={e => playAgain()}>Jogar Novamente</button>
      }

      <button className="game-button back-to-menu" onClick={e => backToMenu()}>Menu inicial</button>
    </div>
  );
}

export default GameButtons;

