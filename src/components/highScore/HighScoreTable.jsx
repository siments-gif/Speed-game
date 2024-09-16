/* eslint-disable react/prop-types */
import React, {useState, useEffect} from 'react'
import "./highScore.css"

const HighScoreTable = () => {
  const [highScore, setHighScore] = useState([]);

  useEffect(() => {
    const savedScores = JSON.parse(localStorage.getItem("highscores")) || [];
    setHighScore(savedScores)
  }, [])

  console.log('High Scores:', highScore);
  return (
    <div className='highScoreTable'>
      <h2>Lederbrett</h2>
      <ul>
        {highScore.length === 0 ? (
          <li>Ingen på lederbrett enda</li>
        ) : (
          highScore.map((score, index) => (
          <li key={index}>{score.name} : {score.score}</li>
        ))
        )}
      </ul>
    </div>
  )
}

export default HighScoreTable