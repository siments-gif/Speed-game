import React, { useState } from 'react'

const HighScoreState = ({ children }) => {
    const [highScore, setHighScore] = useState([]);

    const addHighScore = (name, score) => {
        const newScore = { name, score };
        const updateScore = [...highScore, newScore]
        .sort((a, b) => b.score - a.score)
        .slice(0, 10);
        setHighScore(updateScore);
    }
  return children({ highScore, addHighScore })
}

export default HighScoreState