import React, {useEffect, useState} from 'react';
import "./Activity.css"
import Bubble from "../components/Bubble";
import appStore from "../../store";
import { observer } from "mobx-react"
import Checklist from "../components/Checklist";


const Activity = () => {

    return (
        <div
            className={`Activity ${appStore.position}`}>
            <Bubble position={appStore.position} text={appStore.text}/>
            <Checklist options={["fed", "dot", "qwe"]}/>

        </div>
    )
};

export default observer(Activity);