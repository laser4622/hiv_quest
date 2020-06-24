import React, { useEffect, useState } from 'react';
import './FinishScreen.css'
import appStore from "../../../store";

const FinishScreen = ({}) => {

    const format = (seconds) => {
        let s = (seconds % 60).toString();
        let m = Math.floor(seconds / 60 % 60).toString();
        let h = Math.floor(seconds / 60 / 60 % 60).toString();
        return `${h.padStart(2,'0')} ч.  ${m.padStart(2,'0')} мин. ${s.padStart(2,'0')} сек.`;
    }

    return (
        <div className="FinishScreen">
            <div>Спасибо за уделённое время!</div>
            <div
                style={{position:'fixed', width: '100%', height: '100%', background:'transparent', top: 0, left: 0}}
                onClick={()=>appStore.getNextStatus()}> </div>
            <div className="FinishScreen-image"><img src="/heart.png" alt="heart"/></div>
            <div className="FinishScreen-points">
                Вы набрали
                <div className="FinishScreen-points_amount">{appStore.score} баллов</div>
            </div>
            <div className="FinishScreen-time">
                За
                <div className="FinishScreen-time_amount">{appStore.finishTime!==0&&format(appStore.finishTime)}</div>
            </div>
            <div>Ждем подведения итогов</div>
            <div className="FinishScreen-observe">
                Следите за нами:
                <div className="FinishScreen-observe_vk">
                    <a href="https://vk.com/goquest.online" target="_blank"><img src="/vk.png" alt="vk"/></a>
                </div>
            </div>
        </div>

    )
};

export default FinishScreen;