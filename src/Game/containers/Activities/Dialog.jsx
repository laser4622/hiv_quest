import React, {useEffect, useState} from 'react';
import { observer } from "mobx-react"
import appStore from "../../../store";
import Bubble from "../../components/Bubble";


const Dialog = () => {
    return (
        <div>
            <Bubble position={appStore.position} text={appStore.activity.text} name={appStore.charName}/>
            <div
                style={{position:'fixed', width: '100%', height: '100%', background:'transparent', top: 0, left: 0, cursor: 'pointer'}}
                onClick={()=>appStore.getNextStatus()}> </div>
        </div>
    )
};

export default observer(Dialog);