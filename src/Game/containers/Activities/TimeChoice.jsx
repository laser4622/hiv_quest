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
            clearInterval(intervalRef.current)
        }
    },[time])

    return (
        <div key="timeChoice" className="TimeChoice">
            {options.map((option, index)=> (
                <ActivityButton
                    key={index}
                    onClick={()=>{clearInterval(intervalRef.current);callback(option)}}
                    title={option}
                />
            ))}
            <span className="TimeChoice-timer_border">
                <div style={{borderRadius: '4px', background: "#123123", height: '8px', width: `${Math.floor(time/timeToAnswerInSeconds*100)}%`}}>
                </div>
            </span>
        </div>
    )
};

export default TimeChoice;