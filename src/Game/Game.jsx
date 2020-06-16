import React, {useEffect, useState} from 'react';
import "./Game.css";
import InputMask from "react-input-mask";
import {gameLogin, getStatus} from "../api";
import Char from "./components/Char";
import Bubble from "./components/Bubble";
import Activity from "./containers/Activity";
import appStore from "../store";
import {observer} from "mobx-react";


const chars = {
    boy: '/boy.png',
    girl: '/girl.png',
};

const Game = () => {
    const [updating, setUpdating] = useState(false);
    useEffect(() => {
        setUpdating(true);
        setTimeout(() => {
            setUpdating(false);
        }, 100);
    }, [appStore.position]);


    return (
        <div className="Game">

            <div
                className="Game__Main"
                onClick={appStore.updateStatus}
            >
                {
                    !updating &&
                    <>
                        <Char position={appStore.position} src={chars[appStore.isRight?'boy':'girl']}/>
                        <Activity/>
                    </>
                }

            </div>

        </div>

    )
};

export default observer(Game);