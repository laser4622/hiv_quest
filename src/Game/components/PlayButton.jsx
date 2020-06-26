import React from 'react'
import appStore from "../../store";

import './PlayButton.css'

const PlayButton = ({onClick, children, style}) => {
    return (
        <span style={style} className="PlayButton" onClick={onClick}>
            <span className="PlayButton_text">{children}</span>
        </span>
    )
}

export default PlayButton;