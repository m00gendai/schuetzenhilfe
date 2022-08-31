import { useState } from 'react'
import {getTargetPosition} from "./coreLogic"

import './App.css'

function App() {
  return (
    <div id="mainContainer">
      <div id="targetContainer" onClick={(e) =>{
        getTargetPosition(e, e.target)
      }}>
      </div>
    </div>
  )
}


export default App
