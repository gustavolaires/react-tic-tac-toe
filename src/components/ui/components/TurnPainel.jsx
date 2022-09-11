import React from "react";

import InfoBox from "./InfoBox";

const TurnPainel = (props) => {
  const getCurrentPlayerName = () => {
    if(props.gameState.turn === 1) { return props.gameState.player1.symbol; }

    return props.gameState.player2.symbol;
  }

  const getCurrentPlayerColor = () => {
    if(props.gameState.turn === 1) { return props.gameState.player1.color; }

    return props.gameState.player2.color;
  }

  const getWinner = () => {
    if(props.gameState.winner === 1) { return props.gameState.player1.symbol; }
    
    return props.gameState.player2.symbol;
  }

  const getWinnerColor = () => {
    if(props.gameState.winner === 1) { return props.gameState.player1.color; }
    
    return props.gameState.player2.color;
  }

  const getTurnPainelContent = () => {
    switch (props.gameState.winner) {
      case null:
        return (
          <InfoBox>
            <div className="text-center">
              Vez de: <span className={`player-tag border-rounded text-center ${getCurrentPlayerColor()}`}>{getCurrentPlayerName()}</span>
            </div>
          </InfoBox>
        );
      case 0:
        return (
          <InfoBox className={"red-and-blue"}>
            <div className="text-center">Empate</div>
          </InfoBox>
        );
      default:
        return (
          <InfoBox className={`border-rounded ${getWinnerColor()}`}>
            <div className="text-center">{getWinner()} venceu!</div>
          </InfoBox>
        );
    }
  }

  return (
    <>
      { getTurnPainelContent() }
    </>
  );
}

export default TurnPainel;