import React, {useEffect, useRef, useState} from 'react';
import "./Bubble.css"

const Bubble = ({position='left', text='kek', name}) => {

    return (
        <div
            className={`Bubble ${position} animated`}>

            {name?<div className="Bubble__name">{name}</div>:''}

            {text}
        </div>
    )
};

export default Bubble;