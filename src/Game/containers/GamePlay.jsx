import React from 'react';
import Activity from "./Activity";
import Char from "../components/Char";
import appStore from "../../store";
import CharSelection from "./UI/CharSelection";
import { observer } from "mobx-react"


const chars = {
    boy: '/bortsov.png',
    girl: '/kraskovskaya_neutral.png',
};

const GamePlay = () => {
    return (
        <>
            <Activity />
            {appStore.currentChar !== 'nobody'&&<Char position={appStore.position} src={`${appStore.currentChar}_${appStore.emotion}.png`}/>}
        </>
    )
};

export default observer(GamePlay);