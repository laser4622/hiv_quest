import React from 'react';
import "./Char.css"
const Char = ({position='left', src}) => {
    return(
        <img
            src={src}
            // style={{backgroundImage: '/bortsov.png'}}
            className={`Char ${position}`}>

            {/*<img src={'/bortsov.png'}/>*/}

        </img>
    )
};

export default Char;