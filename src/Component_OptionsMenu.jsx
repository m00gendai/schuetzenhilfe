import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export function Component_OptionsMenu(props){

    const weaponChoice = (event) => {
        props.setWeapon(event.target.value);
    }

    return(
        <div id="optionsMenuVeil">
            <div id="optionsMenuBody">
                <button id="exitOptions" onClick={() => props.exit(!props.openState)}>OK</button>
                <button id="modeReal" onClick={() => props.setMode("real")}>Ernst</button>
                <button id="modeGame" onClick={() => props.setMode("game")}>Spiel</button>
                <FormControl fullWidth>
        <InputLabel id="selectWeapon-label">Waffe/Diopter</InputLabel>
        <Select
          labelId="selectWeapon-label"
          id="selectWeapon"
          value={props.weaponSelect}
          label="Waffe/Diopter"
          onChange={weaponChoice}
        >
          <MenuItem value={"Sturmgewehr 90"}>Sturmgewehr 90</MenuItem>
          <MenuItem value={"Sturmgewehr 57/02"}>Sturmgewehr 57/02</MenuItem>
        </Select>
      </FormControl>
            </div>
        </div>
    )
}

export default Component_OptionsMenu