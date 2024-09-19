import { useState } from 'react';
import './App.css'
import GameBoard from './components/gameBoard/gameBoard';
import IntroScreen from './components/introScreen/IntroScreen';
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

  const handleGameEnding = (score) => {
    const savedScores = JSON.parse(localStorage.getItem("highscores")) || [];
    const newScore = { name: playerName, score };
    const updateScore = [...savedScores, newScore]
      .sort((a, b) => b.score - a.score)
      .slice(0, 5);
    localStorage.setItem("highscores", JSON.stringify(updateScore))

    setShowBoard(false);
    setGameEnd(true);
  }

  const handleReturn = () => {
    setPlayerName("");
    setGameEnd(false);
    setShowBoard(false);
  }
  
  return (
        <div className='mainApp'>
          {/* Spillet starter */}
          {!showBoard && !gameEnd && (
            <IntroScreen onStartGame={gameStart}/>
          )}

          {/* Spillet foregår */}
          {showBoard && !gameEnd && (
            <GameBoard gameEnding={handleGameEnding}/>
          )}

          {/* Spillet avsluttes */}
          {!showBoard && gameEnd && (
             <HighScoreTable returnToIntro={handleReturn}/>
          )}
        </div>
  )
}

export default App
