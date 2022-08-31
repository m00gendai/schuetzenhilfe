import { useState, useEffect } from 'react'
import Component_OptionsMenu from "./Component_OptionsMenu"
import Component_ShowCorrection from "./Component_ShowCorrection"
import {getTargetPosition, calculateHit, setRandomTargetPosition} from "./coreLogic"

import './App.css'
import "./Component_OptionsMenu.css"

function App() {

  const [currentHit, setCurrentHit] = useState([])
  const [showOptions, setShowOptions] = useState(false)
  const [mode, setMode] = useState("real")
  const [weapon, setWeapon] = useState("Sturmgewehr 90");

  const toggleOptions = () => {
    setShowOptions(!showOptions)
  }
  
  useEffect(() =>{
    console.log(weapon)
  },[weapon])

  useEffect(() => {
    const hitValue = calculateHit(currentHit)
    currentHit.length > 0 ? document.getElementById("hit").innerText = hitValue < 0 ? "0" : hitValue : null
  }, [currentHit])

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
      mode == "real"
      ?
      <Component_ShowCorrection hitData={currentHit} weaponSelect={weapon}/>
      :
      null
      }
      {
        showOptions
        ?
        <Component_OptionsMenu exit={toggleOptions} openState={showOptions} modeSelect={mode} setMode={setMode} weaponSelect={weapon} setWeapon={setWeapon}/>
        :
        null
      }
    </div>
  )
}


export default App
