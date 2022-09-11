import React from "react";
import './Move.css'

const Move = (props) => {
  const position = props.position;
  const symbol = props.symbol;
  const choosePosition = props.choosePosition;
  const blockMove = props.blockMove || symbol !== ''

  return (
    <div className={`${props.className}`}>
      <button
        key={`b-${position}`}
        value={position}
        className={`move-button ${props.className}`}
        disabled={blockMove}
        onClick={ e => choosePosition(e.target.value) }
      >
        {symbol}
      </button>
    </div>
  );
}

export default Move;