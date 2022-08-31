export function Component_OptionsMenu(props){
    return(
        <div id="optionsMenuVeil">
            <div id="optionsMenuBody">
                <button id="exitOptions" onClick={() => props.exit(!props.openState)}>OK</button>
                <button id="modeReal" onClick={() => props.setMode("real")}>Ernst</button>
                <button id="modeGame" onClick={() => props.setMode("game")}>Spiel</button>
            </div>
        </div>
    )
}

export default Component_OptionsMenu