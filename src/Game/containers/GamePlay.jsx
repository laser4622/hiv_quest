import React from 'react';
import Activity from "./Activity";
import Char from "../components/Char";
import appStore from "../../store";


const chars = {
    boy: '/boy.png',
    girl: '/girl.png',
};

const GamePlay = () => {
    return (
        <div className="GamePlay">

            <Activity/>
            <Char position={appStore.position} src={chars[appStore.isRight?'boy':'girl']}/>

        </div>
    )
};

export default GamePlay;