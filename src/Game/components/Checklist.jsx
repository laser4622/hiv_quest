import React, {useState} from 'react';
import "./Checklist.css"

const Checklist = ({ options, needSelect, callback }) => {

    const [selected, setSelected] = useState([]);

    const handleSelect = (option) => {
        setSelected((state) => {
            const index = state.findIndex((element)=>element===option);

            if(index===-1) {
                state.push(option)
                return state
            }else {
                return state.filter((element)=>element!==option);
            }
        })
    }

    if(needSelect===selected.length) {
        callback(selected);
    }

    return (
        <div className="radio">
            {options.map(option=> (
                <div
                    onClick={()=>handleSelect(option)}
                    style={{background: selected.findIndex((elem)=>elem===option)!==-1?'#e3e3e3':'white'}}
                    className="radio-button">
                    {option}
                </div>
            ))}
            <button onClick={()=>console.log(selected)}>qwe</button>
        </div>
    )
};

export default Checklist;