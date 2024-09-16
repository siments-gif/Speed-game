/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import "./GameBoard.css"
import Figures from "../gameFigures/Figures"
import ScoreCounter from '../scoreCounter/ScoreCounter'
import Timer from '../timer/Timer'

const GameBoard = ({ gameEnding }) => {
  const [score, setScore] = useState(0);

  const handleTimeIsUp = () => {
    gameEnding(score);
  }

  const handleFigureScore = (isPositive) => {
    if(isPositive) {
      setScore((prevScore) => prevScore + 100);
    } else {
      setScore((prevScore) => prevScore - 50);
    }
  };

  return (
    <section className='board'>
        <div className='boardContent'>
            <ScoreCounter score={score}/>
            <Figures onFigureClick={handleFigureScore}/>
            <Timer timeIsUp={handleTimeIsUp}/>
        </div>
    </section>
  )
}

export default GameBoard