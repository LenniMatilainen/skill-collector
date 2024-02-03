import Sfias from "./Sfias/Sfias"
import InfoSelect from "./InfoSelect/InfoSelect";
import { useState, useEffect } from "react";

export default function Selectors(props) {
    const [clicked, setClicked] = useState(false)
    const [doubleClicked, setDoubleClicked] = useState(false)
    const [selecting, setSelecting] = useState(false);
    
    const cancelSelecting = () => {
        setSelecting(false)
        setDoubleClicked(false)
    }

    useEffect(() => {
        function handleKeyDown(event) {
          if (event.key === 'Escape') {
            cancelSelecting()
          }
        }
    
        document.addEventListener('keydown', handleKeyDown);
    
        return () => {
          document.removeEventListener('keydown', handleKeyDown);
        };
    }, []);

    useEffect(() => {
        if (doubleClicked !== false) {
            setSelecting(true)
        }
        else {
        }
    }, [doubleClicked]);

    const handleClick = (InfoSelect) => {
        setClicked(InfoSelect)
    }

    const handleDoubleClick = (selected) => {
        setDoubleClicked(selected)
    }
    return (
        <div id="selectors">
            <Sfias
            disable={doubleClicked}
            handleDoubleClick={handleDoubleClick}
            handleClick={handleClick}
            skillPool={props.skillPool}
            Selecting={selecting}
            />
            <InfoSelect
            pushNewSkill={props.pushNewSkill}
            RemoveSkill={props.RemoveSkill}
            skillPool={props.skillPool}
            cancelSelecting={cancelSelecting}
            selecting={selecting}
            selected={doubleClicked}
            info={clicked}
            handleClick={handleClick}
            />
        </div>
    );
}

