import React from "react";
import "./Board.css";

import validateWinner from "../../lib/validateWinner";
import Move from "./Move";

const positions = [
  ['1', '2', '3'],
  ['4', '5', '6'],
  ['7', '8', '9']
]

const positions_classes = {
  '1': "border-right border-bottom",
  '2': "border-right border-bottom",
  '3': "border-bottom",
  '4': "border-right border-bottom",
  '5': "border-right border-bottom",
  '6': "border-bottom",
  '7': "border-right",
  '8': "border-right",
  '9': "",
}

const Board = (props) => {
  const gameState = props.gameState;
  const updateGameState = props.updateGameStateCallback;

  const choosePosition = (position) => {
    const player1State = gameState.player1;
    const player2State = gameState.player2;

    let nextPlayer = null;

    if (gameState.turn === 1) {
      nextPlayer = 2;
      player1State.moves.push(position);
    } else {
      nextPlayer = 1;
      player2State.moves.push(position);
    }

    const [winner, winnerMoves] = validateWinner(player1State, player2State, gameState.turn);

    if (winner !== null && winner !== 0) {
      winner === 1 ? player1State.score += 1 : player2State.score += 1
    } 

    const newGameState = {
      ...gameState,
      player1: player1State,
      player2: player2State,
      turn: nextPlayer,
      winner: winner,
      winnerMoves: winnerMoves
    };

    updateGameState(newGameState);
  }

  const chosenByPlayer1 = (position) => {
    if ( gameState.player1.moves.includes(position) ) { return gameState.player1.symbol; }

    return null;
  }

  const chosenByPlayer2 = (position) => {
    if ( gameState.player2.moves.includes(position) ) { return gameState.player2.symbol; }

    return null;
  }

  const getSymbol = (position) => {
    return chosenByPlayer1(position) || chosenByPlayer2(position) || '';
  }

  return (
    <div className="board-container">
      {
        positions.map((rows, index) => {
          return (
            <div key={`r-${index}`} className="board-row" >
              {
                rows.map( position => {
                  return (
                    <Move
                      className={positions_classes[position]}
                      choosePosition={choosePosition}
                      position={position} symbol={getSymbol(position)}
                      blockMove={gameState.winner !== null}
                    />
                  );
                })
              }
            </div>
          );
        })
      }
    </div>
  );
}

export default Board;

/*
    <>
      <table>
        <tbody>
          {
            positions.map((rowOfPositions, index) => {
              return (
                <tr key={`row-${index}`} >
                  {
                    rowOfPositions.map( position => {
                      return (
                        <td key={`pos-${position}`} className={positions_classes[position]}>
                          <Move choosePosition={choosePosition} position={position} symbol={getSymbol(position)} blockMove={gameState.winner !== null} />
                        </td>
                      );
                    })
                  }
                </tr>
              );
            })
          }
        </tbody>
      </table>
    </>
*/