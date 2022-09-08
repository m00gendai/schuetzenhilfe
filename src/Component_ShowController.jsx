import { useState, useEffect } from 'react'
import Slider from '@mui/material/Slider';
import { setRandomTargetPosition, setTargetPosition} from "./coreLogic"

function Component_ShowController(props){

    const [sliderWindageValue, setSliderWindageValue] = useState(0)
    const [sliderElevationValue, setSliderElevationValue] = useState(0)

function valuetextwindage(value) {
    setSliderWindageValue(value)
  return value
}
function valuetextelevation(value) {
    setSliderElevationValue(value)
  return value
}

    return(
    <>
     <h2>{`${props.distance}m ${props.weapon.designation}`} </h2>
        <button id="randomHit" onClick={() =>{
            console.log(1)
        const randomHitPosition = setRandomTargetPosition();
        props.setCurrentHit(randomHitPosition);
        console.log(randomHitPosition);
      
        const position = setTargetPosition(randomHitPosition);
       props.setCursorPosition([position[0], position[1]]);
      }}>Zufallstreffer</button>
      <Slider
        aria-label="Seitenkorrektur"
        defaultValue={0}
        getAriaValueText={valuetextwindage}
        valueLabelDisplay="off"
        step={1}
        marks
        min={-50}
        max={50}
      />
      {`Seitenkorrektur: ${sliderWindageValue == 0 ? "keine" : sliderWindageValue < 0 ? `${Math.abs(sliderWindageValue)} bei links}` : `${sliderWindageValue} bei rechts`}`}
      {`Seitenkorrektur: ${props.weapon.windageStep}cm`}
      {`Seitenkorrektur angepasst: ${props.weapon.windageStep*(props.distance/props.weapon.base)}`}
      <Slider
        aria-label="Höhenkorrektur"
        defaultValue={0}
        getAriaValueText={valuetextelevation}
        valueLabelDisplay="off"
        step={1}
        marks
        min={-50}
        max={50}
      />
      {`Höhenkorrektur: ${sliderElevationValue == 0 ? "keine" : sliderElevationValue < 0 ? `${Math.abs(sliderElevationValue)} bei tief` : `${sliderElevationValue} bei hoch`}`}
      {`Höhenkorrektur: ${props.weapon.elevationStep}cm`}
      {`Höhenkorrektur angepasst: ${props.weapon.elevationStep*(props.distance/props.weapon.base)}`}
      </>
    )
}

export default Component_ShowController