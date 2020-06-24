import React, {useState} from 'react'
import appStore from "../../../store";

import './BeginScreen.css'
import PlayButton from "../../components/PlayButton";

const BeginScreen = () => {

    const [currentScreen, setCurrentScreen] = useState(0);

    return (
        <div className="BeginScreen">
            {currentScreen===0&&
            <div>
                <img src="/startback.png" alt="begin"/>
                <span className="BeginScreen_play">
                    <PlayButton onClick={()=>appStore.getNextStatus()}>Играть</PlayButton>
                </span>
                <a className="BeginScreen-rules" onClick={()=>setCurrentScreen(1)}>Правила участия</a>
            </div>}
            {currentScreen===1&&
            <div onClick={()=>setCurrentScreen(0)}>
                <img src="/rules.png" alt="begin"/>
            </div>
            }
        </div>
    )
}

export default BeginScreen;