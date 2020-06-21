import React, { useEffect, useState } from 'react';
import './FinishScreen.css'

const FinishScreen = ({ finishTime, points }) => {
    return (
        <div className="FinishScreen">
            <div>Спасибо за уделённое время!</div>
            <div className="FinishScreen-image"><img src="/heart.png" alt="heart"/></div>
            <div className="FinishScreen-points">
                Вы набрали
                <div className="FinishScreen-points_amount">{points} баллов</div>
            </div>
            <div className="FinishScreen-time">
                За
                <div className="FinishScreen-time_amount">{finishTime}</div>
            </div>
            <div>Ждем подведения итогов</div>
            <div className="FinishScreen-observe">
                Следите за нами:
                <div className="FinishScreen-observe_vk">
                    <img src="/vk.png" alt="vk"/>
                </div>
            </div>
        </div>

    )
};

export default FinishScreen;