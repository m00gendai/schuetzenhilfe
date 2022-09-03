import Button from '@mui/material/Button';

export function Component_HelpMenu(props){
    return(
        <div id="helpMenuVeil">
            <div id="helpMenuBody">
                Diese App ist noch in der Entwicklungsphase.
                Momentan stehen nur eingeschränkte Funktionen zur Verfügung.
                Informationen zum Stand der Dinge unter <a href="https://trello.com/b/7QbKeNiE/sch%C3%BCtzenhilfe" target="_blank">Trello</a>
                <Button sx={{margin: "1rem"}} variant="contained" id="exitHelp" onClick={() => props.exit(!props.openState)}>OK</Button>
            </div>
        </div>
    )
}

export default Component_HelpMenu