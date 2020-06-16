import React, {useEffect, useState} from 'react';
import "./Checklist.css"
import ActivityButton from "../../components/ActivityButton";

const Checklist = ({ options, needSelect, callback }) => {
    const [selected, setSelected] = useState([]);
    useEffect(()=>{
        if(needSelect===selected.length) {
            callback(selected);
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
            {options.map(option=> (
                <ActivityButton
                onClick={()=>handleSelect(option)}
                selected={selected.findIndex((elem)=>elem === option)!==-1}
                title={option}
                />
            ))}
            {/*<button onClick={()=>console.log(selected)}>qwe</button>*/}
        </div>
    )
};

export default Checklist;