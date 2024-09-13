import React, { useState } from 'react';
import './App.css'
import GameBoard from './components/gameBoard/gameBoard';
import IntroScreen from './components/introScreen/IntroScreen';

function App() {
  const [showBoard, setShowBoard] = useState(false);
  const [playerName, setPlayerName] = useState("");
  const [currentScore, setCurrentScore] = useState(0);
  
  const gameStart = (name) => {
    setPlayerName(name);
    setShowBoard(true)
  };

  const handleGameEnding = (score, addHighScore) => {
    setCurrentScore(score)
    addHighScore(playerName, score);
    setShowBoard(false);
  }
  
  return (
    <>
    <div className='mainApp'>
      {!showBoard ? (
        <>
        <IntroScreen  onStartGame={gameStart}/>
        </>
      ) : (
        <GameBoard gameEnding={(score) => handleGameEnding(score)}/>
      )}
    </div>
    </>
  )
}

export default App
