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
import BeginScreen from "./UI/BeginScreen";



const Game = () => {
    const [updating, setUpdating] = useState(false);
    useEffect(() => {
        setUpdating(true);
        setTimeout(() => {
            setUpdating(false);
        }, 100);
    }, [appStore.position, appStore.currentChar, appStore.background]);

    useEffect(()=>{
        appStore.updateStatus();
    },[])

    const getContent = () => {
        switch (appStore.currentStep) {
            case 'chooseScreen': return <CharSelection/>
            case 'captions': return <Captions/>
            case 'finish': return <FinishScreen/>
            case 'start': return <BeginScreen/>
            default: return <GamePlay/>
        }
    }

    return (
        <div className="Game">
            <button onClick={()=>appStore.resetGame()}>RESET</button>
            <div
                className="Game__Main"
                style={{backgroundImage: `url('https://api.goquest.online/${appStore.background}')`}}
                // onClick={appStore.updateStatus}
            >
                {appStore.currentStep>0&&<Points/>}
                {
                    !updating && getContent()
                }

            </div>

        </div>

    )
};

export default observer(Game);