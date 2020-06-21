import React, {useEffect, useState} from 'react';
import { observer } from "mobx-react"
import appStore from "../../../store";
import Bubble from "../../components/Bubble";


const Dialog = () => {
    return (
        <div>
            <Bubble position={appStore.position} text={appStore.activity.text}/>
            <div
                style={{position:'fixed', width: '100%', height: '100%', background:'transparent', top: 0, left: 0}}
                onClick={()=>appStore.getNextStatus()}> </div>
        </div>
    )
};

export default observer(Dialog);