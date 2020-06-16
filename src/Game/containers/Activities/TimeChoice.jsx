import React, {useEffect, useState, useRef} from 'react';
import "./TimeChoice.css"
import ActivityButton from "../../components/ActivityButton";

const TimeChoice = ({ options, timeToAnswerInSeconds, defaultAnswer, callback }) => {
    const intervalRef = useRef();

    const [time, setTime] = useState(timeToAnswerInSeconds);

    useEffect(()=>{
        setTimeout(() => {
            intervalRef.current = setInterval(()=>{
                setTime((state)=>{
                    return state-1
                });
            }, 1000)
        }, 3100)
        return () =>{
            clearInterval(intervalRef.current)
        }
    }, [])

    useEffect(()=>{
        if(time === 0) {
            callback(defaultAnswer)
        }
    },[time])

    return (
        <div key="timeChoice" className="Checklist">
            {options.map((option, index)=> (
                <ActivityButton
                    key={index}
                    onClick={()=>callback(option)}
                    title={option}
                />
            ))}
            <div><span className="TimeChoice__timer">{time}</span> </div>
        </div>
    )
};

export default TimeChoice;