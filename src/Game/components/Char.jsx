import React from 'react';
import "./Char.css"
const Char = ({position='left', src}) => {
    return(
        <img
            src={src}
            // style={{backgroundImage: '/boy.png'}}
            className={`Char ${position}`}>

            {/*<img src={'/boy.png'}/>*/}

        </img>
    )
};

export default Char;