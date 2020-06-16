import React, {useEffect, useState} from 'react';
import "./Game.css";
import Char from "../components/Char";
import Activity from "../containers/Activity";
import appStore from "../../store";
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
                // onClick={appStore.updateStatus}
            >
                {
                    !updating &&
                    <>
                        <Activity/>
                        <Char position={appStore.position} src={chars[appStore.isRight?'boy':'girl']}/>

                    </>
                }

            </div>

        </div>

    )
};

export default observer(Game);