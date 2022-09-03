import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Chip from '@mui/material/Chip';
import { weaponList } from "./weaponList.js"

export function Component_OptionsMenu(props){

    const weaponChoice = (event) => {
        props.setWeapon(event.target.value);
    }

    return(
        <div id="optionsMenuVeil">
            <div id="optionsMenuBody">
                <h2>Optionen</h2>
                <Divider sx={{width: "100%"}}>
                    Modus
                </Divider>
                <Button sx={{margin: "1rem"}} variant="contained" id="modeReal" onClick={() => props.setMode("real")}>Ernst</Button>
                <Button disabled sx={{margin: "1rem"}} variant="contained" id="modeGame" onClick={() => props.setMode("game")}>Spiel</Button>
                <Divider sx={{width: "100%"}}>
                        Waffe/Diopter
                    </Divider>
                <FormControl sx={{margin: "1rem"}} fullWidth>
                    <InputLabel id="selectWeapon-label">Waffe/Diopter</InputLabel>
                    <Select
                        labelId="selectWeapon-label"
                        id="selectWeapon"
                        value={props.weaponSelect}
                        label="Waffe/Diopter"
                        onChange={weaponChoice}
                    >
                        {
                        weaponList.sort(function(a,b){
                            return a.designation > b.designation ? 1 : -1
                        }).map((weapon, index) => {
                            return <MenuItem key={index} value={weapon.designation}>{weapon.designation}</MenuItem>
                        })
                        }
                        
                    </Select>
                </FormControl>
                <Button sx={{margin: "1rem"}} variant="contained" id="exitOptions" onClick={() => props.exit(!props.openState)}>OK</Button>
            </div>
        </div>
    )
}

export default Component_OptionsMenu