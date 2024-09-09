/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react'

const Timer = ({ timeIsUp }) => {
    const [time, setTime] = useState(60);

    useEffect(() => {
        if(time > 0){
            const timerId = setInterval(() => {
                setTime(prevTime => prevTime - 1)
            }, 1000);
            return () => clearInterval(timerId)
        } else {
            timeIsUp();
        }
    }, [time, timeIsUp])
  return (
    <div>
        <h2>Tid gjenstår: {time} sekunder</h2>
    </div>
  )
}

export default Timer