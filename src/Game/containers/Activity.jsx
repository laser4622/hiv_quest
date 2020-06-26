import React, {useEffect, useState} from 'react';
import "./Activity.css"
import Bubble from "../components/Bubble";
import appStore from "../../store";
import { observer } from "mobx-react"
import Checklist from "./Activities/Checklist";
import TimeChoice from "./Activities/TimeChoice";
import DetailedResponse from "./Activities/DetailedResponse";
import Dialog from "./Activities/Dialog";
import Radio from "./Activities/Radio";
import LetterReading from './Activities/LetterReading'

const Activity = () => {
    const getActivity = () => {
        switch (appStore.activity&&appStore.activity.type) {
            case 'dialog': return <Dialog/>
            case 'radio': return <Radio/>
            case 'checklist': return <Checklist/>
            case 'timechoice': return <TimeChoice/>
            case 'letter': return <DetailedResponse/>
            case 'letterReading': return <LetterReading/>
            case null: return <div
                style={{position:'fixed', width: '100%', height: '100%', background:'transparent', top: 0, left: 0}}
                onClick={()=>appStore.getNextStatus()}> </div>
            default: return ''
        }
    }
    return (
        <div
            className={`Activity ${appStore.position}`}>
            {getActivity()}
        </div>
    )
};

export default observer(Activity);