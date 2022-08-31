import { useState, useEffect } from 'react'
import {getTargetPosition, calculateHit, setRandomTargetPosition} from "./coreLogic"

import './App.css'

function App() {

  const [currentHit, setCurrentHit] = useState([])

  useEffect(() => {
    const hitValue = calculateHit(currentHit)
    console.log(hitValue)
  }, [currentHit])

  return (
    <div id="mainContainer">
      <div id="targetContainer" onClick={(e) =>{
        setCurrentHit(getTargetPosition(e, e.target))
      }}>
      </div>
      <button id="randomHit" onClick={() =>{
        const randomHitPosition = setRandomTargetPosition()
        setCurrentHit(randomHitPosition)
      }}>Zufallstreffer</button>
    </div>
  )
}


export default App
