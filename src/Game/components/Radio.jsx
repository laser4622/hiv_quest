import React, { useState } from 'react';
import "./Radio.css"

const Radio = ({ options, callback }) => {
    return (
            <div className="radio">
                {options.map(option=> (
                    <div onClick={()=>callback(option)} className="radio-button">
                        {option}
                    </div>
                ))}
            </div>
    )
};

export default Radio;