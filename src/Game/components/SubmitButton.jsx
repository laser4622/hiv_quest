import React from 'react'
import './SubmitButton.css'

const SubmitButton = ({text}) => {
    return (
        <button className="SubmitButton" type="submit">{text}</button>
    )
};

export default SubmitButton;