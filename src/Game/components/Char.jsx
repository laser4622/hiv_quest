import React from 'react';
import "./Char.css"

const chars={
    boy:'/boy.png',
    girl:'/girl.png',
};

const Char = ({right=false}) => {
    return (
        <img
            src={chars[right?'boy':'girl']}
            // style={{backgroundImage: '/boy.png'}}
            className={`Char ${right?'right':'left'}`}>

            {/*<img src={'/boy.png'}/>*/}

        </img>
    )
};

export default Char;