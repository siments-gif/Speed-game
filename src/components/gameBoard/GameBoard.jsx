/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import "./GameBoard.css"
import ScoreCounter from '../scoreCounter/ScoreCounter'
import Timer from '../timer/Timer'

const GameBoard = ({ gameEnding }) => {
  return (
    <section className='board'>
        <div className='boardContent'>
            <ScoreCounter />
            <Timer timeIsUp={() => gameEnding()}/>
        </div>
    </section>
  )
}

export default GameBoard