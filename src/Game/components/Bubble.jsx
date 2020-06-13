import React, {useEffect, useRef, useState} from 'react';
import "./Bubble.css"

const Bubble = ({right=false}) => {
    const ref = useRef();

    const [display,setDisplay] = useState('');
    const [position,setPosition] = useState(right?'right':'left');

    useEffect(()=>{
        setDisplay('none');
        setTimeout(()=>{
            setPosition(right?'right':'left');
        },50);
        setTimeout(()=>{
            setDisplay('');
        },100);
    },[right]);


    return (
        <div
            ref={ref}
            style={{display:display}}
            className={`Bubble ${position} animated`}>
            asdasdklasd  asdasdklasd
            asdasdklasd
            asdasdklasdasdasdklasd
            asdasdklasd
        </div>
    )
};

export default Bubble;