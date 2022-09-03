import SettingsIcon from '@mui/icons-material/Settings';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import NorthWestIcon from '@mui/icons-material/NorthWest';
import NorthEastIcon from '@mui/icons-material/NorthEast';
import SouthWestIcon from '@mui/icons-material/SouthWest';
import SouthEastIcon from '@mui/icons-material/SouthEast';

export function Component_MiddleBar(props){
    return(
        <div id="middleBar">
            <button className="middleBar_button" id="options" onClick={() => props.toggleOptions()}>
                <SettingsIcon />
            </button>
            <div id="detailedHit">
                <div id="detailedHit_10">{Math.ceil(props.hit/10)}</div>
                <div id="detailedHit_100">{props.hit}</div>
                {
                props.direction == "nw" ? <NorthWestIcon /> : 
                props.direction == "ne" ? <NorthEastIcon /> :
                props.direction == "sw" ? <SouthWestIcon /> :
                <SouthEastIcon />
                }
            </div>
            <button className="middleBar_button" id="help" onClick={() => console.log("halp!")}>
                <HelpOutlineIcon />
            </button>
        </div>
    )
}

export default Component_MiddleBar