import React, { useState } from 'react';
import './App.css'
import GameBoard from './components/gameBoard/gameBoard';
import IntroScreen from './components/introScreen/IntroScreen';
import HighScoreState from './components/highScore/highScoreState';
import HighScoreTable from './components/highScore/highScoreTable';

function App() {
  const [showBoard, setShowBoard] = useState(false);
  const [playerName, setPlayerName] = useState("");
  
  const gameStart = (name) => {
    setPlayerName(name);
    setShowBoard(true)
  };

  const handleGameEnding = (score, addHighScore) => {
    addHighScore(playerName, score);
    setShowBoard(false);
  }
  
  return (
    <HighScoreState>
      {({ highScores, addHighScore }) => (
        <div className='mainApp'>
          {!showBoard ? (
            <>
            <IntroScreen  onStartGame={gameStart}/>
            {Array.isArray(highScores) && highScores.length > 0 && <HighScoreTable highScores={highScores}/>}
            </>
          ) : (
            <GameBoard gameEnding={(score) => handleGameEnding(score, addHighScore)}/>
          )}
        </div>
      )}
    </HighScoreState>
  );
}

export default App
