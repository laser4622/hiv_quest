import React from 'react';
import "./Char.css"
const Char = ({position='left', src, name}) => {
    return(
        <img
            src={src}
            style={name==='Вирус'?position==='left'?{right: '13%'}:{left: '13%'}:{}}
            className={`Char ${position}`}>

        </img>
    )
};

export default Char;