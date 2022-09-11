import React from "react";
import './GameLayout.css'

import Board from "../game/Board";
import ScorePainel from "./components/ScorePainel";
import TurnPainel from "./components/TurnPainel";
import GameButtons from "./components/GameButtons";

const GameLayout = (props) => {
  const gameState = props.gameState;
  const updateGameState = props.updateGameStateCallback

  return (
    <div className="game-layout-container">
      <div className="game-layout-element">
        <ScorePainel gameState={gameState} />
      </div>
      <div className="game-layout-element">
        <TurnPainel gameState={gameState} />
      </div>
      <div className="game-layout-element">
        <Board gameState={gameState} updateGameStateCallback={updateGameState}/>
      </div>
      <div className="game-layout-element">
        <GameButtons gameState={gameState} updateGameStateCallback={updateGameState}/>
      </div>
    </div>
  );
}

export default GameLayout;