/* eslint-disable react/prop-types */
import React from 'react'

const HighScoreTable = ({ highScores }) => {
  return (
    <div className='highScoreTable'>
      <h2>Lederbrett</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Score</th>
          </tr>
        </thead>
        <tbody>
          {highScores.map((scoreEntry, index) => (
            <tr key={index}>
              <td>{scoreEntry.name}</td>
              <td>{scoreEntry.score}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default HighScoreTable