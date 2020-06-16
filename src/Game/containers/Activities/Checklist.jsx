import React, {useState} from 'react';
import "./Radio.css"
import ActivityButton from "../../components/ActivityButton";

const Checklist = ({ options, needSelect, callback }) => {

    const [selected, setSelected] = useState([]);

    const handleSelect = (option) => {
        setSelected((state) => {
            const index = state.findIndex((element)=>element===option);

            console.log(index)

            if(index===-1) {
                state.push(option);
            }else {
                state.splice(index,1);
            }

            return [...state]
        })
    };

    if(needSelect===selected.length) {
        callback(selected);
    }

    return (
        <div className="radio">
            {options.map(option=> (
                <ActivityButton
                onClick={()=>handleSelect(option)}
                selected={selected.findIndex((elem)=>elem === option)!==-1}
                className="radio-button"
                title={option}
                />
            ))}
            {/*<button onClick={()=>console.log(selected)}>qwe</button>*/}
        </div>
    )
};

export default Checklist;