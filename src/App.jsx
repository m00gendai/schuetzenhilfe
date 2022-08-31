import { useState, useEffect } from 'react'
import {getTargetPosition, calculateHit, setRandomTargetPosition} from "./coreLogic"

import './App.css'

function App() {

  const [currentHit, setCurrentHit] = useState([])

  useEffect(() => {
    const hitValue = calculateHit(currentHit)
    currentHit.length > 0 ? document.getElementById("hit").innerText = hitValue < 0 ? "0" : hitValue : null
  }, [currentHit])

  return (
    <div id="mainContainer">
      <div id="targetContainer" onClick={(e) =>{
        const targetPosition = getTargetPosition(e, e.target)
        console.log(targetPosition)
        setCurrentHit(targetPosition)
      }}>
       { currentHit.length > 0
        ?
        <div id="hit" style={{
          left: `${(currentHit[0]*2)}px`,
          top: `${currentHit[1]*2}px`,
        }}></div>
        :
        null
       }
      </div>
      <button id="randomHit" onClick={() =>{
        const randomHitPosition = setRandomTargetPosition()
        setCurrentHit(randomHitPosition)
      }}>Zufallstreffer</button>
    </div>
  )
}


export default App
