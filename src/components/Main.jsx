import React from 'react';
import { redirect_url } from "../variables";

import './Main.css'

const VkRegisterButton = () => {
    const href = `https://oauth.vk.com/authorize?client_id=7484844&display=page&redirect_uri=${redirect_url}&response_type=code&v=5.107`;
    return (
        <a href={href}>
            <button className="main-container__register_button">
                Регистрация через VK
            </button>
        </a>
    )
}

const Main = () => {
    return (
        <div className="main-container">
            <div className="main-container__header">
                <div className="main-container__header-image">
                    <img src="./vich.png" alt="vich"/>
                </div>
                <div className="main-container__header-invite">
                    Прими участие в <br/> онлайн-квесте
                    <div className="main-container__header-invite_date">
                        28 июня
                    </div>
                    <VkRegisterButton/>
                </div>
            </div>
            <div className="main-container__middle-block">
                Как уберечься от ВИЧ и СПИДа? <br/>

                Пройди квест и узнай всё об этом
            </div>
        </div>
    );
}

export default Main;
