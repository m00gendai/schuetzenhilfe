import SettingsIcon from '@mui/icons-material/Settings';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';

export function Component_MiddleBar(props){
    return(
        <div id="middleBar">
            <button className="middleBar_button" id="options" onClick={() => props.toggleOptions()}>
                <SettingsIcon />
            </button>
            <div id="detailedHit"></div>
            <button className="middleBar_button" id="help" onClick={() => console.log("halp!")}>
                <HelpOutlineIcon />
            </button>
        </div>
    )
}

export default Component_MiddleBar