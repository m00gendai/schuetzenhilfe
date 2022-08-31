export function Component_ShowCorrection(props){

     const weaponList = [
        {
            designation: "Sturmgewehr 90",
            windage: "4.5cm pro Klick",
            windageStep: 4.5,
            elevation: "4.5cm pro Klick",
            elevationStep: 4.5
        },
        {
            designation: "Sturmgewehr 57/02",
            windage: "6cm pro Raste",
            windageStep: 6.0,
            elevation: "8cm pro Raste",
            elevationStep: 8.0
        },
    ]

    // coordinate system from 0-200 so step*2 
    console.log(props.weaponSelect)
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
            <table>
                <thead>
                    <tr>
                        <th colSpan="2">{`Korrekturschritte ${props.weaponSelect}`}</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Bei {props.hitData[0] < 100 ? "links" : "rechts"}</td>
                        <td>{Math.abs(windageAdjust)}</td>
                    </tr>
                    <tr>
                        <td>Bei {props.hitData[1] < 100 ? "hoch" : "tief"}</td>
                        <td>{Math.abs(elevationAdust)}</td>
                    </tr>
                </tbody>
                <tfoot>
                    <tr>
                        <td>Seitenkorrektur:</td>
                        <td>{
                            weaponList.map((weapon) => {
                                if(weapon.designation == props.weaponSelect){
                                    return `${weapon.windage}`
                                }
                            })
                        }</td>
                    </tr>
                    <tr>
                        <td>Höhenkorrektur:</td>
                        <td>{
                            weaponList.map((weapon) => {
                                if(weapon.designation == props.weaponSelect){
                                    return `${weapon.elevation}`
                                }
                            })
                        }</td>
                    </tr>
                </tfoot>
            </table>
            :
            <div className="placeholder">
                Auf die Scheibe tippen, um den Treffer festzulegen
                </div>
}
        </div>
    )
}

export default Component_ShowCorrection