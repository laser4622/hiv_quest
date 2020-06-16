import React, {useEffect, useRef, useState} from 'react';
import "./Bubble.css"

const Bubble = ({position='left', text='kek'}) => {
    return (
        <div
            className={`Bubble ${position} animated`}>
            {text}
        </div>
    )
};

export default Bubble;