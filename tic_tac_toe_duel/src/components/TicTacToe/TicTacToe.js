import React, { useState } from 'react';
import './TicTacToe.css';

// PUBLIC_INTERFACE
const TicTacToe = () => {
  // Initialize empty board and game state
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);
  const [gameStatus, setGameStatus] = useState('playing'); // 'playing', 'draw', or 'won'

  /**
   * Checks if there's a winner based on the current board state
   * @param {Array} squares - Current board state
   * @returns {string|null} Winner ('X' or 'O') or null if no winner
   */
  const calculateWinner = (squares) => {
    const winningLines = [
      [0, 1, 2], // Top row
      [3, 4, 5], // Middle row
      [6, 7, 8], // Bottom row
      [0, 3, 6], // Left column
      [1, 4, 7], // Middle column
      [2, 5, 8], // Right column
      [0, 4, 8], // Diagonal
      [2, 4, 6], // Diagonal
    ];

    for (const [a, b, c] of winningLines) {
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  };

  /**
   * Handles a player's move
   * @param {number} index - Board position index (0-8)
   */
  const handleClick = (index) => {
    // Return if the game is over or square is already filled
    if (gameStatus !== 'playing' || board[index]) {
      return;
    }

    const newBoard = board.slice();
    newBoard[index] = isXNext ? 'X' : 'O';
    setBoard(newBoard);

    const winner = calculateWinner(newBoard);
    if (winner) {
      setGameStatus('won');
    } else if (!newBoard.includes(null)) {
      setGameStatus('draw');
    } else {
      setIsXNext(!isXNext);
    }
  };

  /**
   * Resets the game to initial state
   */
  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setIsXNext(true);
    setGameStatus('playing');
  };

  // Determine game status message
  const statusMessage = gameStatus === 'won' 
    ? `Winner: ${isXNext ? 'O' : 'X'}`
    : gameStatus === 'draw'
    ? 'Game Draw!'
    : `Next player: ${isXNext ? 'X' : 'O'}`;

  return (
    <div className="tictactoe">
      <div className="game-status">{statusMessage}</div>
      
      <div className="board">
        {board.map((square, index) => (
          <button
            key={index}
            className="square"
            onClick={() => handleClick(index)}
          >
            {square}
          </button>
        ))}
      </div>

      <button 
        className="reset-button btn"
        onClick={resetGame}
      >
        Reset Game
      </button>
    </div>
  );
};

export default TicTacToe;
