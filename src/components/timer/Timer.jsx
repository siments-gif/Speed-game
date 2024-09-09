import React, { useState, useEffect } from 'react'

const Timer = () => {
    const [time, setTime] = useState(60);

    useEffect(() => {
        if(time > 0){
            const timerId = setInterval(() => {
                setTime(prevTime => prevTime - 1)
            }, 1000);
            return () => clearInterval(timerId)
        }
    }, [time])
  return (
    <div>
        <h2>Tid gjenstår: {time} sekunder</h2>
    </div>
  )
}

export default Timer