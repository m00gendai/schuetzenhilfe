import { useState, useEffect } from 'react'
import Component_OptionsMenu from "./Component_OptionsMenu"
import Component_HelpMenu from "./Component_HelpMenu"
import Component_ShowCorrection from "./Component_ShowCorrection"
import Component_MiddleBar from "./Component_MiddleBar"
import {getTargetPosition, calculateHit, setRandomTargetPosition} from "./coreLogic"

import './App.css'
import "./Component_OptionsMenu.css"
import "./Component_HelpMenu.css"
import "./Component_MiddleBar.css"
import "./Component_ShowCorrection.css"

function App() {

  const [currentHit, setCurrentHit] = useState([])
  const [actualHit, setActualHit] = useState(null)
  const [showOptions, setShowOptions] = useState(false)
  const [showHelp, setShowHelp] = useState(false)
  const [mode, setMode] = useState(JSON.parse(localStorage.getItem("sh_mode")) ||"real")
  const [weapon, setWeapon] = useState(JSON.parse(localStorage.getItem("sh_weapon_select")) || "Sturmgewehr 90")
  const [targetImage, setTargetImage] = useState(JSON.parse(localStorage.getItem("sh_target_select")) || "300m_A")
  const [distance, setDistance] = useState(JSON.parse(localStorage.getItem("sh_distance_select")) || 300)
  const [cursorPosition, setCursorPosition] = useState([])
  const [vertical, setVertical] = useState("")
  const [horizontal, setHorizontal] = useState("")
  const [direction, setDirection] = useState(null)
  
  const toggleOptions = () => {
    setShowOptions(!showOptions)
  }

  const toggleHelp = () => {
    setShowHelp(!showHelp)
  }

  useEffect(() =>{
    localStorage.setItem("sh_weapon_select", JSON.stringify(weapon))
  },[weapon])

  useEffect(() =>{
    localStorage.setItem("sh_mode", JSON.stringify(mode))
  },[mode])

  useEffect(() =>{
    localStorage.setItem("sh_target_select", JSON.stringify(targetImage))
  },[targetImage])

  useEffect(() =>{
    localStorage.setItem("sh_distance_select", JSON.stringify(distance))
  },[distance])

  useEffect(() => {
    const hitValue = calculateHit(currentHit)
    if(currentHit.length > 0) {
      document.getElementById("hit").innerText = hitValue < 0 ? "0" : hitValue
      setActualHit(hitValue < 0 ? "0" : hitValue)
      setHorizontal(currentHit[0] < 100 ? "w" : "e")
      setVertical(currentHit[1] < 100 ? "n" : "s")
    }
  }, [currentHit])

  useEffect(() => {
    setDirection(`${vertical}${horizontal}`)
  }, [horizontal, vertical])

  return (
    <div id="mainContainer">
      <div id="targetContainer" 
      style={{
        backgroundImage: `url(${targetImage}.jpg)`
      }} onClick={(e) =>{
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
      <Component_MiddleBar toggleOptions={toggleOptions} hit={actualHit} direction={direction} toggleHelp={toggleHelp}/>
      {mode == "game" 
      ?
      <button id="randomHit" onClick={() =>{
        const randomHitPosition = setRandomTargetPosition()
        setCurrentHit(randomHitPosition)
      }}>Zufallstreffer</button>
      :
      mode == "real"
      ?
      <Component_ShowCorrection hitData={currentHit} weaponSelect={weapon} distanceSelect={distance}/>
      :
      null
      }
      {
        showOptions
        ?
        <Component_OptionsMenu 
          exit={toggleOptions} 
          openState={showOptions} 
          modeSelect={mode} 
          setMode={setMode} 
          weaponSelect={weapon} 
          setWeapon={setWeapon}
          targetSelect={targetImage}
          setTarget={setTargetImage}
          setDistance={setDistance}
          distanceSelect={distance}
        />
        :
        null
      }
      {
        showHelp
        ?
        <Component_HelpMenu 
          exit={toggleHelp}
          openState={showHelp}
        />
        :
        null
      }
    </div>
  )
}


export default App
