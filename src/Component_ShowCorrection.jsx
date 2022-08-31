export function Component_ShowCorrection(props){

    const steps = 9 // Stgw90 test, 4.5cm step, coordinate system from 0-200 so step*2 
    const windageAdjust = Math.round((100-props.hitData[0])/steps)
    const elevationAdust = Math.round((100-props.hitData[1])/steps)

    return(
        <div id="correctionContainer">
            <table>
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
            </table>
        </div>
    )
}

export default Component_ShowCorrection