import React from 'react';
import "./CharButton.css"

const CharButton = ({accessible, setSelected, charName, description, selected}) => {

    const handleSelect = () => {
        if (selected === charName) {
            setSelected('');
        } else if (accessible.findIndex(elem => elem === charName) !== -1 && selected !== charName) {
            setSelected(charName);
        }
    }

    const charIsAccessible = accessible.findIndex(e => e === charName) === -1;

    return (
        <div
            className={`CharButton ${charIsAccessible?'accessible':''} ${selected === charName ?'selected':''} ${charName}`}
            onClick={handleSelect}
        >
            {/*<img src={`${charName}Icon.png`} alt={charName}/>*/}

            <span>{description}</span>

            {charIsAccessible &&
            <div className="CharButton__lock">
                <img className="CharSelection-select__lock-image" src="/lock.png" alt="lock"/>
            </div>
            }
        </div>
    )
};

export default CharButton;