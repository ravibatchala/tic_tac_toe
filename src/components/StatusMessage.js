import React from 'react';

const StatusMessage = ({ winner, current }) => {
  const noMovesLeft = current.board.every(el => el !== null);
  return (
    <div className="status-message">
      {winner && (
        <>
          <span className={winner === 'X' ? 'text-green' : 'text-pink'}>
            {winner} is the <i>WINNER</i>
          </span>
        </>
      )}
      {!winner && !noMovesLeft && (
        <>
          ...{' '}
          <span className={current.isXNext ? 'text-green' : 'text-pink'}>
            {current.isXNext ? 'X' : 'O'}'s
          </span>{' '}
          turn ...
        </>
      )}
      {!winner && noMovesLeft && (
        <>
          <span className="text-green">X</span> and{' '}
          <span className="text-pink">O</span>
        </>
      )}
    </div>
  );
};

export default StatusMessage;
