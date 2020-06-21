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

const Activity = () => {
    const getActivity = () => {
        switch (appStore.activity&&appStore.activity.type) {
            case 'dialog': return <Dialog/>
            case 'radio': return <Radio/>
            case 'checklist': return <Checklist/>
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