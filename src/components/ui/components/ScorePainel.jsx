import React from "react";
import './ScorePainel.css'

import InfoBox from "./InfoBox";

const ScorePainel = (props) => {
  return (
    <div className="score-painel-container">
      <InfoBox className={ `border-rounded ${props.gameState.player1.color}` }>
        <div className={`text-left ${props.gameState.player1.color}`}>{ props.gameState.player1.name }</div>
        <div className={`text-center ${props.gameState.player1.color}`}>{ props.gameState.player1.score }</div>
      </InfoBox>

      <div className="score-space"></div>
        
      <InfoBox className={ `border-rounded ${props.gameState.player2.color}` }>
        <span className={`text-left ${props.gameState.player2.color}`}>{ props.gameState.player2.name }</span>
        <span className={`text-center ${props.gameState.player2.color}`}>{ props.gameState.player2.score }</span>
      </InfoBox>
    </div>
  );
}

export default ScorePainel;