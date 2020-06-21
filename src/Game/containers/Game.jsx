import React, {useEffect, useState} from 'react';
import "./Game.css";
import Char from "../components/Char";
import Activity from "../containers/Activity";
import appStore from "../../store";
import {observer} from "mobx-react";
import CharSelection from "./UI/CharSelection";
import FinishScreen from "./UI/FinishScreen";
import Captions from "./UI/Сaptions";


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
                        {/*<CharSelection availableUsers={['girl']} callback={(e)=>console.log(e)}/>*/}

                        {/*<Captions />*/}
                        {/*<FinishScreen finishTime={100} points={0}/>*/}

                        <Activity/>
                        <Char position={appStore.position} src={chars[appStore.isRight?'boy':'girl']}/>

                    </>
                }

            </div>

        </div>

    )
};

export default observer(Game);