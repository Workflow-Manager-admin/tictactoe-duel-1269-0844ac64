import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import TicTacToe from './components/TicTacToe/TicTacToe';
import SnakeGame from './components/SnakeGame/SnakeGame';

function App() {
  return (
    <Router>
      <div className="app">
        <nav className="navbar">
          <div className="container">
            <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', alignItems: 'center' }}>
              <div className="logo">
                <span className="logo-symbol">*</span> Game Center
              </div>
              <div className="nav-links">
                <Link to="/" className="nav-link">TicTacToe</Link>
                <Link to="/snake" className="nav-link">Snake</Link>
              </div>
            </div>
          </div>
        </nav>

        <main>
          <div className="container">
            <Routes>
              <Route path="/" element={
                <div className="hero">
                  <div className="subtitle">Welcome to</div>
                  <h1 className="title">TicTacToe Duel</h1>
                  <div className="description">
                    Challenge a friend to a game of TicTacToe! Take turns marking spaces in the 3x3 grid.
                    Get three in a row horizontally, vertically, or diagonally to win!
                  </div>
                  <TicTacToe />
                </div>
              } />
              <Route path="/snake" element={
                <div className="hero">
                  <div className="subtitle">Welcome to</div>
                  <h1 className="title">Snake Game</h1>
                  <div className="description">
                    Control the snake using arrow keys. Eat the food to grow longer, but don't hit the walls or yourself!
                  </div>
                  <SnakeGame />
                </div>
              } />
            </Routes>
          </div>
        </main>
      </div>
    </Router>
  );
}

export default App;
