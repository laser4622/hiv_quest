import React, {useEffect, useState} from 'react';
import "./Activity.css"
import Bubble from "../components/Bubble";
import appStore from "../../store";
import { observer } from "mobx-react"
import Checklist from "./Activities/Checklist";
import TimeChoice from "./Activities/TimeChoice";
import DetailedResponse from "./Activities/DetailedResponse";


const Activity = () => {

    return (
        <div
            className={`Activity ${appStore.position}`}>

            <Bubble position={appStore.position} text={appStore.text}/>

            <TimeChoice
                callback={(opt)=>console.log(opt)}
                options={['fed','dot','qwe', 'asd']} timeToAnswerInSeconds={60} defaultAnswer="fed"
            />

        </div>
    )
};

export default observer(Activity);