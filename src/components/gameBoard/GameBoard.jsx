/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import "./GameBoard.css"
import ScoreCounter from '../scoreCounter/ScoreCounter'
import Timer from '../timer/Timer'

const GameBoard = ({ gameEnding }) => {
  const [score, setScore] = useState(0);

  const handleTimeIsUp = () => {
    gameEnding(score);
  }

  return (
    <section className='board'>
        <div className='boardContent'>
            <ScoreCounter score={score}/>
            <Timer timeIsUp={handleTimeIsUp}/>
        </div>
    </section>
  )
}

export default GameBoard