import React from 'react'
import './SubmitButton.css'

const SubmitButton = ({onClick, text}) => {
    return (
        <button className="SubmitButton" type="submit" onClick={onClick}>{text}</button>
    )
};

export default SubmitButton;