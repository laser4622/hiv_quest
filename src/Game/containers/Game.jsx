import React, {useEffect, useState} from 'react';
import "./Game.css";
import Char from "../components/Char";
import Activity from "../containers/Activity";
import appStore from "../../store";
import {observer} from "mobx-react";
import CharSelection from "./UI/CharSelection";


const chars = {
    boy: '/boy.png',
    girl: '/girl.png',
};

const Game = () => {
    const [updating, setUpdating] = useState(false);
    useEffect(() => {
        setUpdating(true);
        setTimeout(() => {
            setUpdating(false);
        }, 100);
    }, [appStore.position]);


    return (
        <div className="Game">

            <div
                className="Game__Main"
                // onClick={appStore.updateStatus}
            >
                {
                    !updating &&
                    <>
                        <CharSelection accessible={['boy']} callback={(e)=>console.log(e)}/>

                    </>
                }

            </div>

        </div>

    )
};

export default observer(Game);