/* eslint-disable react/prop-types */
import React, {useState, useEffect} from 'react'
import "./highScore.css"

const HighScoreTable = ({ returnToIntro }) => {
  const [highScore, setHighScore] = useState([]);

  useEffect(() => {
    const savedScores = JSON.parse(localStorage.getItem("highscores")) || [];
    setHighScore(savedScores)
  }, [])
  
  return (
    <div className='highScoreTable'>
      <h2>Lederbrett</h2>
      <ul>
        {highScore.length === 0 ? (
          <h3>Ingen på lederbrettet</h3>
        ) : (
          <table>
            <thead>
              <tr>
                <th>Top</th>
                <th>Navn</th>
                <th>Poeng</th>
              </tr>
            </thead>
            <tbody>
              {highScore.map((score, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{score.name}</td>
                  <td>{score.score}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </ul>
      <button onClick={returnToIntro}>Start på nytt</button>
    </div>
  )
}

export default HighScoreTable