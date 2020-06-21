import React from 'react';
import Activity from "./Activity";
import Char from "../components/Char";
import appStore from "../../store";
import CharSelection from "./UI/CharSelection";
import { observer } from "mobx-react"


const chars = {
    boy: '/boy.png',
    girl: '/girl.png',
};

const GamePlay = () => {
    return (
        <>
            <Activity />
            <Char position={appStore.position} src={`${appStore.currentChar}.png`}/>
        </>
    )
};

export default observer(GamePlay);