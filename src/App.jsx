import React, { useState } from 'react';
import './App.css'
import GameBoard from './components/gameBoard/gameBoard';
import IntroScreen from './components/introScreen/IntroScreen';
import HighScoreState from './components/highScore/highScoreState';
import HighScoreTable from './components/highScore/highScoreTable';

function App() {
  const [showBoard, setShowBoard] = useState(false);
  const [playerName, setPlayerName] = useState("");
  const [gameEnd, setGameEnd] = useState(false)
  
  const gameStart = (name) => {
    setPlayerName(name);
    setShowBoard(true);
    setGameEnd(false);
  };

  const handleGameEnding = (score, addHighScore) => {
    addHighScore(playerName, score);
    setShowBoard(false);
    setGameEnd(true);
  }
  
  return (
    <HighScoreState>
      {({ highScores = [], addHighScore }) => (
        <div className='mainApp'>
          {/* Spillet starter */}
          {!showBoard && !gameEnd && (
            <IntroScreen onStartGame={gameStart}/>
          )}

          {/* Spillet foregår */}
          {showBoard && !gameEnd && (
            <GameBoard gameEnding={(score) => handleGameEnding(score, addHighScore)}/>
          )}

          {/* Spillet avsluttes */}
          {!showBoard && gameEnd && (
             <HighScoreTable highScores={highScores}/>
          )}
        </div>
      )}
    </HighScoreState>
  );
}

export default App
