import React, { useState } from 'react';
import "./Radio.css"
import ActivityButton from "../../components/ActivityButton";
import appStore from "../../../store";
import {getNext} from "../../../api";
import Bubble from "../../components/Bubble";

const Radio = () => {
    return (
            <div className="Radio">
                <Bubble position={appStore.position} text={appStore.activity.text}/>
                {appStore.activity.options.map(option=> (
                    <ActivityButton onClick={()=>appStore.getNextStatus({answer: option})} title={option}/>
                ))}
            </div>
    )
};

export default Radio;