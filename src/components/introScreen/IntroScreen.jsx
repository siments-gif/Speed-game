import React, { useState } from 'react'
import "./introScreen.css"
import HighScoreTable from '../highScore/highScoreTable';

const IntroScreen = ({ onStartGame }) => {
  const [playerName, setPlayerName] = useState("");
  
  const handleGameStart = () => {
    if(playerName.trim()) {
        onStartGame(playerName);
    } else {
        alert("Skriv inn navnet ditt for å starte spillet")
    }
  };
  
  return (
    <section className='introBoard'>
    <div className='introContent'>
      <h1>Skriv navnet ditt for å starte spillet</h1>
      <input 
        type="text"
        placeholder='Simen Skogen'
        value={playerName}
        onChange={(e) => setPlayerName(e.target.value)}
      />
      <button onClick={handleGameStart}>Start spill</button>
    </div>
    </section>
  )
}

export default IntroScreen