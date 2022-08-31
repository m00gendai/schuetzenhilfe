import { useState, useEffect } from 'react'
import Component_OptionsMenu from "./Component_OptionsMenu"
import {getTargetPosition, calculateHit, setRandomTargetPosition} from "./coreLogic"

import './App.css'
import "./Component_OptionsMenu.css"

function App() {

  const [currentHit, setCurrentHit] = useState([])
  const [showOptions, setShowOptions] = useState(false)
  const [mode, setMode] = useState("real")

  const toggleOptions = () => {
    setShowOptions(!showOptions)
  }

  useEffect(() => {
    const hitValue = calculateHit(currentHit)
    currentHit.length > 0 ? document.getElementById("hit").innerText = hitValue < 0 ? "0" : hitValue : null
  }, [currentHit])

  useEffect(() =>{
    console.log(mode)
  },[mode])

  return (
    <div id="mainContainer">
      <div id="targetContainer" onClick={(e) =>{
        const targetPosition = getTargetPosition(e, e.target)
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
      <button id="options" onClick={() => toggleOptions()}>Optionen</button>
      {mode == "game" 
      ?
      <button id="randomHit" onClick={() =>{
        const randomHitPosition = setRandomTargetPosition()
        setCurrentHit(randomHitPosition)
      }}>Zufallstreffer</button>
      :
      null}
      {
        showOptions
        ?
        <Component_OptionsMenu exit={toggleOptions} openState={showOptions} modeSelect={mode} setMode={setMode}/>
        :
        null
      }
    </div>
  )
}


export default App
