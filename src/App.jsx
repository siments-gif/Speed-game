import { useState } from 'react'
import './App.css'
import GameBoard from './components/gameBoard/gameBoard'

function App() {
  const [showBoard, setShowBoard] = useState(false)
  return (
    <>
    {showBoard ? (
      <GameBoard />
    ) : (
    <section className='introBoard'>
    <div className='introContent'>
      <h1>Skriv navnet ditt for å starte spillet</h1>
      <input type="text" />
      <button onClick={() => setShowBoard(true)}>Start spill</button>
    </div>
    </section>
  )}  
    </>
  )
}

export default App
