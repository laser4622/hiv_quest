import React from 'react';

const CharSelect = ({accessible, setSelected, charName, description, selected}) => {

    const handleSelect = () =>  {
        if(selected===charName) {
            setSelected('');
        }else if(accessible.findIndex(elem=>elem===charName)!==-1 && selected!==charName) {
            setSelected(charName);
        }
    }

    const charIsAccessible = accessible.findIndex(e=>e===charName)===-1;

    return (
        <div
            style={
                charIsAccessible?{background:"#122131", color:'#909090', borderColor: '#697379'}:
                selected===charName ?
                    {background: 'white', color: "black", borderColor: '#194472' }:{}}
            onClick={handleSelect}
        >
            <img src={`${charName}Icon.png`} alt={charName}/>
            <span>{description}</span>
            {charIsAccessible&&
            <div className="CharSelection-select__lock">
                <img className="CharSelection-select__lock-image" src="/lock.png" alt="lock"/>
            </div>
            }
        </div>
    )
};

export default CharSelect;