import { useState, useEffect } from 'react'
import Component_OptionsMenu from "./Component_OptionsMenu"
import Component_ShowCorrection from "./Component_ShowCorrection"
import Component_MiddleBar from "./Component_MiddleBar"
import {getTargetPosition, calculateHit, setRandomTargetPosition} from "./coreLogic"

import './App.css'
import "./Component_OptionsMenu.css"
import "./Component_MiddleBar.css"

function App() {

  const [currentHit, setCurrentHit] = useState([])
  const [showOptions, setShowOptions] = useState(false)
  const [mode, setMode] = useState(JSON.parse(localStorage.getItem("sh_mode")) ||"real")
  const [weapon, setWeapon] = useState(JSON.parse(localStorage.getItem("sh_weapon_select")) || "Sturmgewehr 90")
  const [cursorPosition, setCursorPosition] = useState([])

  const toggleOptions = () => {
    setShowOptions(!showOptions)
  }

  useEffect(() =>{
    localStorage.setItem("sh_weapon_select", JSON.stringify(weapon))
  },[weapon])

  useEffect(() =>{
    localStorage.setItem("sh_mode", JSON.stringify(mode))
  },[mode])

  useEffect(() => {
    const hitValue = calculateHit(currentHit)
    currentHit.length > 0 ? document.getElementById("hit").innerText = hitValue < 0 ? "0" : hitValue : null
  }, [currentHit])

  return (
    <div id="mainContainer">
      <div id="targetContainer" onClick={(e) =>{
        setCursorPosition([e.nativeEvent.clientX, e.nativeEvent.clientY])
        const targetPosition = getTargetPosition(e, e.target)
        setCurrentHit(targetPosition)
      }}>
       { currentHit.length > 0
        ?
        <div id="hit" style={{
          left: `${(cursorPosition[0])}px`,
          top: `${cursorPosition[1]}px`,
        }}></div>
        :
        null
       }
      </div>
      <Component_MiddleBar toggleOptions={toggleOptions} />
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
