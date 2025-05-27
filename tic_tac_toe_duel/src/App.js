import React from 'react';
import './App.css';
import TicTacToe from './components/TicTacToe/TicTacToe';

function App() {
  return (
    <div className="app">
      <nav className="navbar">
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
            <div className="logo">
              <span className="logo-symbol">*</span> TicTacToe Duel
            </div>
          </div>
        </div>
      </nav>

      <main>
        <div className="container">
          <div className="hero">
            <div className="subtitle">Welcome to</div>
            <h1 className="title">TicTacToe Duel</h1>
            <div className="description">
              Challenge a friend to a game of TicTacToe! Take turns marking spaces in the 3x3 grid.
              Get three in a row horizontally, vertically, or diagonally to win!
            </div>
            
            <TicTacToe />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
