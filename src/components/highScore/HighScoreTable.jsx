/* eslint-disable react/prop-types */
import React from 'react'
import "./highScore.css"

const HighScoreTable = ({ highScores = [] }) => {
  return (
    <div className='highScoreTable'>
      <h2>Lederbrett</h2>
      <ul>
        {highScores.length === 0 ? (
          <li>Ingen på lederbrett enda</li>  
        ) : (
          highScores.map((score, index) => (
          <li key={index}>{score.name} : {score.score}</li>
        ))
        )}
      </ul>
    </div>
  )
}

export default HighScoreTable