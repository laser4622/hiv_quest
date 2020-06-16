import React, {useEffect, useState} from 'react';
import "./Activity.css"
import Bubble from "../components/Bubble";
import appStore from "../../store";
import { observer } from "mobx-react"
import Checklist from "./Activities/Checklist";
import TimeChoice from "./Activities/TimeChoice";


const Activity = () => {

    return (
        <div
            className={`Activity ${appStore.position}`}>

            <Bubble position={appStore.position} text={appStore.text}/>

            <TimeChoice
                options={["Хорошо", "Нормально", "Ужасно"]}
                callback={(opt)=>console.log(opt)}
                timeToAnswerInSeconds={5}
                defaultAnswer="Хорошо"
            />

        </div>
    )
};

export default observer(Activity);