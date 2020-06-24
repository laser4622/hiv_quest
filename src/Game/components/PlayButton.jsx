import React from 'react'
import appStore from "../../store";

import './PlayButton.css'

const PlayButton = ({onClick, children}) => {
    return (
        <span className="PlayButton" onClick={onClick}>
            <span className="PlayButton_text">{children}</span>
        </span>
    )
}

export default PlayButton;