/* eslint-disable no-unused-vars */
import React from 'react'
import "./GameBoard.css"
import ScoreCounter from '../scoreCounter/ScoreCounter'
import Timer from '../timer/Timer'

const GameBoard = () => {
  return (
    <section className='board'>
        <div className='boardContent'>
            <ScoreCounter />
            <Timer />
        </div>
    </section>
  )
}

export default GameBoard