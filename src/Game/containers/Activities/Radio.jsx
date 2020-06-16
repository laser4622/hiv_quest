import React, { useState } from 'react';
import "./Radio.css"
import ActivityButton from "../../components/ActivityButton";

const Radio = ({ options, callback }) => {
    return (
            <div className="radio">
                {options.map(option=> (
                    <ActivityButton onClick={()=>callback(option)} title={option}/>
                ))}
            </div>
    )
};

export default Radio;