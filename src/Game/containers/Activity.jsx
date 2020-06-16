import React, {useEffect, useState} from 'react';
import "./Activity.css"
import Bubble from "../components/Bubble";
import appStore from "../../store";
import { observer } from "mobx-react"


const Activity = () => {

    return (
        <div
            className={`Activity ${appStore.position}`}>
            <Bubble position={appStore.position} text={appStore.text}/>
        </div>
    )
};

export default observer(Activity);