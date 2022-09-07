import { useState, useEffect } from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { weaponList } from "./weaponList.js"

export function Component_ShowCorrection(props){

    // coordinate system from 0-200 so step*2 
    let stepsWindage
    let stepsElevation 
    let stepWindageInfo
    let stepElevationInfo
    let baseDistance
    
    weaponList.forEach(weapon => {
        if(weapon.designation == props.weaponSelect){
            stepsWindage = weapon.windageStep*2
            stepsElevation = weapon.elevationStep*2
            stepWindageInfo = weapon.windage
            stepElevationInfo = weapon.elevation
            baseDistance = weapon.base
        }
    })
   let baseDistanceFactor = props.distanceSelect/baseDistance
    const windageAdjust = Math.round(((100-props.hitData[0])/stepsWindage/baseDistanceFactor))
    const elevationAdust = Math.round(((100-props.hitData[1])/stepsElevation/baseDistanceFactor))

    return(
        <div id="correctionContainer">
                           <h2>{`${props.distanceSelect}m`} {props.weaponSelect}</h2>
            {

            props.hitData.length > 0 
            ?
            <div id="correctionDetails">
 
                <div id="correctionDetailsSteps">
                    <Card className="correctionDetailsStep">
                        <span>Bei {props.hitData[0] < 100 ? "links" : "rechts"}</span>
                        <span>{Math.abs(windageAdjust)}</span>
                    </Card>
                    <Card className="correctionDetailsStep">
                        <span>Bei {props.hitData[1] < 100 ? "hoch" : "tief"}</span>
                        <span>{Math.abs(elevationAdust)}</span>
                    </Card>
                </div>
                <span>Seitenkorrektur: {`${((stepsWindage/2)*baseDistanceFactor).toFixed(2)}cm pro Raste`}</span>
                <span>Höhenkorrektur: {`${((stepsElevation/2)*baseDistanceFactor).toFixed(2)}cm pro Raste`}</span>
            </div>
            :
            <div className="placeholder">
                Auf die Scheibe tippen, um den Treffer festzulegen
                </div>
}
        </div>
    )
}

export default Component_ShowCorrection