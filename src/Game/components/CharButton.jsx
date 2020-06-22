import React from 'react';
import "./CharButton.css"

const CharButton = ({accessible, setSelected, charName, description, selected}) => {

    const charIsAccessible = accessible==="available"

    const handleSelect = () => {
        if (selected === charName) {
            setSelected('');
        } else if (charIsAccessible) {
            setSelected(charName);
        }
    }

    return (
        <div
            className={`CharButton ${!charIsAccessible?'accessible':''} ${selected === charName ?'selected':''} ${charName}`}
            onClick={handleSelect}
        >
            {/*<img src={`${charName}Icon.png`} alt={charName}/>*/}

            <span>{description}</span>

            {accessible==="locked" &&
            <div className="CharButton__lock">
                <img className="CharSelection-select__lock-image" src="/lock.png" alt="lock"/>
            </div>
            }

            {accessible==="finished" &&
            <div className="CharButton__lock">
                <img className="CharSelection-select__lock-image" src="/finished.png" alt="galochka"/>
            </div>
            }
        </div>
    )
};

export default CharButton;