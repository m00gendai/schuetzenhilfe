import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { weaponList } from "./weaponList.js"

export function Component_ShowCorrection(props){

    // coordinate system from 0-200 so step*2 
    let stepsWindage
    let stepsElevation 
    weaponList.forEach(weapon => {
        if(weapon.designation == props.weaponSelect){
            stepsWindage = weapon.windageStep*2
            stepsElevation = weapon.elevationStep*2
        }
    })
   
    const windageAdjust = Math.round((100-props.hitData[0])/stepsWindage)
    const elevationAdust = Math.round((100-props.hitData[1])/stepsElevation)

    return(
        <div id="correctionContainer">
            {
            props.hitData.length > 0 
            ?
            <>
            <h2>{`Korrekturschritte ${props.weaponSelect}`}</h2>
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
                <div id="correctionDetailsInfos">
                    <div className="correctionDetailsInfo">
                        <span>Seitenkorrektur:</span>
                        <span>{
                            weaponList.map((weapon) => {
                                if(weapon.designation == props.weaponSelect){
                                    return `${weapon.windage}`
                                }
                            })
                        }</span>
                    </div>
                    <div className="correctionDetailsInfo">
                        <span>Höhenkorrektur:</span>
                        <span>{
                            weaponList.map((weapon) => {
                                if(weapon.designation == props.weaponSelect){
                                    return `${weapon.elevation}`
                                }
                            })
                        }</span>
                    </div>
                </div>
            </div>
            </>
            :
            <div className="placeholder">
                Auf die Scheibe tippen, um den Treffer festzulegen
                </div>
}
        </div>
    )
}

export default Component_ShowCorrection