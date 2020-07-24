import React, {useEffect, useState} from 'react';
import "./Checklist.css"
import ActivityButton from "../../components/ActivityButton";
import appStore from "../../../store";
import Bubble from "../../components/Bubble";

const Checklist = ({callback }) => {
    const [selected, setSelected] = useState([]);
    useEffect(()=>{
        if(appStore.activity.needSelect===selected.length) {
            appStore.getNextStatus({answer: selected});
        }
    },[selected]);

    const handleSelect = (option) => {
        setSelected((state) => {
            const index = state.findIndex((element)=>element===option);
            const newState = [...state];

            if(index===-1) {
                newState.push(option);
            }else {
                newState.splice(index,1);
            }
            return newState;
        })
    };



    return (
        <div className="Checklist">
            <Bubble position={appStore.position} text={appStore.activity.text}  name={appStore.charName}/>
            {appStore.activity.options.map(option=> (
                <ActivityButton
                onClick={()=>handleSelect(option)}
                selected={selected.findIndex((elem)=>elem === option)!==-1}
                title={option}
                />
            ))}
        </div>
    )
};

export default Checklist;