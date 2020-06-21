import React, {useEffect, useState} from 'react';
import "./CharSelection.css";
import {observer} from "mobx-react";
import CharSelect from "../../components/CharSelect";

const CharSelection = ({callback, availableUsers}) => {

    const [selected, setSelected] = useState('');

    const handlePlay = () => {
        if(selected) callback(selected);
    }

    return (
        <div className="CharSelection">
            <div className="CharSelection-invite">
                <span>Выбери за кого будешь играть</span>
            </div>
            <div className="CharSelection-select">
                <CharSelect
                    accessible={availableUsers}
                    selected={selected}
                    setSelected={setSelected}
                    description="Саша Красковская, здоровый человек"
                    charName="girl"/>
                <CharSelect
                    accessible={availableUsers}
                    selected={selected}
                    setSelected={setSelected}
                    description="Саша Борцов, зараженный человек"
                    charName="boy"/>
                <CharSelect
                    accessible={availableUsers}
                    selected={selected}
                    setSelected={setSelected}
                    description="Вирус СПИД"
                    charName="virus"/>

                <span className="CharSelection-select_play" onClick={handlePlay}>
                    <img src={selected?"/ButtonPlayGreen.png":'ButtonPlayGrey.png'}/>
                    <span className="CharSelection-select_play-text">Играть</span>
                </span>
            </div>
        </div>

    )
};

export default observer(CharSelection);