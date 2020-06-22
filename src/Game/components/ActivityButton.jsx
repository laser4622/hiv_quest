import React from 'react';
import "./ActivityButton.css"

const ActivityButton = ({onClick, title, selected}) => {
    return (
        <div
            onClick={onClick}
            style={{transition: '0.5s'}}
            className={`ActivityButton ${selected?'selected':''}`}>
            {title}
        </div>
    )
};

export default ActivityButton;