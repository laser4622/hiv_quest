import React, {useEffect, useState} from 'react';
import "./Game.css";
import Char from "../components/Char";
import Activity from "../containers/Activity";
import appStore from "../../store";
import {observer} from "mobx-react";
import CharSelection from "./UI/CharSelection";
import FinishScreen from "./UI/FinishScreen";
import Captions from "./UI/Сaptions";
import GamePlay from "./GamePlay";
import Points from "../components/Points";



const Game = () => {
    const [updating, setUpdating] = useState(false);
    useEffect(() => {
        setUpdating(true);
        setTimeout(() => {
            setUpdating(false);
        }, 100);
    }, [appStore.position, appStore.currentChar]);

    useEffect(()=>{
        appStore.updateStatus();
    },[])

    const getContent = () => {
        switch (appStore.currentStep) {
            case '0': return <CharSelection/>
            default: return <GamePlay/>
        }
    }

    return (
        <div className="Game">
            <button onClick={()=>appStore.resetGame()}>RESET</button>
            <div
                className="Game__Main"
                style={{backgroundImage: `url('/${appStore.background}')`}}
                // onClick={appStore.updateStatus}
            >
                {appStore.currentStep!=='0'&&<Points/>}
                {
                    !updating && getContent()
                }

            </div>

        </div>

    )
};

export default observer(Game);