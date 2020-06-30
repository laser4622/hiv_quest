import React, {useEffect, useState, useRef} from 'react';
import "./TimeChoice.css"
import ActivityButton from "../../components/ActivityButton";
import appStore from "../../../store";
import Bubble from "../../components/Bubble";

const TimeChoice = () => {
    const intervalRef = useRef();

    const [time, setTime] = useState(appStore.activity.time);

    useEffect(()=>{
        setTimeout(() => {
            intervalRef.current = setInterval(()=>{
                setTime((state)=>{
                    return state-1
                });
            }, 1000)
        }, 1100)
        return () =>{
            clearInterval(intervalRef.current)
        }
    }, [])

    useEffect(()=>{
        if(time === -1) {
            appStore.getNextStatus({answer: appStore.activity.default })
            clearInterval(intervalRef.current)
        }
    },[time])

    return (
        <div key="timeChoice" className="TimeChoice">
            <Bubble position={appStore.position} text={appStore.activity.text}  name={appStore.charName}/>
            {appStore.activity.options.map((option, index)=> (
                <ActivityButton
                    key={index}
                    onClick={()=>{clearInterval(intervalRef.current);appStore.getNextStatus({answer: option })}}
                    title={option}
                />
            ))}
            <span className="TimeChoice-timer_border">
                <div style={{width: `${Math.floor(time/appStore.activity.time*100)}%`}}>
                </div>
            </span>
        </div>
    )
};

export default TimeChoice;