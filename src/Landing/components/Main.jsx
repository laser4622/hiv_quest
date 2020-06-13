import React from 'react';
import {redirect_url} from "../../variables";

import './Main.css'

const VkRegisterButton = () => {
    const href = `https://oauth.vk.com/authorize?client_id=7484844&display=page&redirect_uri=${redirect_url}&response_type=code&v=5.107`;
    return (
        <a href={href}>
            <button className="main-container__vk-register_button">
                Регистрация через VK
            </button>
        </a>
    )
};

const RegisterButton = () => {
    return (
        <a href={redirect_url}>
            <button className="main-container__register_button">
                Регистрация
            </button>
        </a>
    )
};

const Main = () => {
    return (
        <div className="main-container">
            <div className="main-container__header">
                <div className="main-container__header-content">
                    <div className="main-container__header-invite">
                        <span className="main-container__header-invite_text">
                        Прими участие в <br/> онлайн-квесте
                        </span>
                        <div className="main-container__header-invite_date">
                            с 25 по 28 июня
                        </div>
                        <VkRegisterButton/>
                    </div>
                    <img className="main-container__header-image" src="./vich1.png" alt="vich"/>
                </div>
            </div>
            <div className="main-container__middle-block">
                <div className="main-container__middle-content">
                    <img className="main-container__header-image" src="./vich1.png" alt="vich"/>
                Как уберечься от ВИЧ и СПИДа? <br/>

                Пройди квест и узнай всё об этом
                </div>
            </div>

            <div className="main-container__third-block">
                <div className="main-container__price">
                    <div className="main-container__price_text">
                        Супер-призы<br/>
                        победителям!
                    </div>
                    <div className="row">
                        <div className="main-container__price_block1">
                            <div className="main-container__price_block-text">
                                3 смартфона Xiaomi Redmi 8 3/32!
                            </div>
                            <img className="main-container__price_block-xiaomi" src="./xiaomi.png" alt="Xiaomi Redmi"/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="main-container__price_block2">
                            <div className="main-container__price_block-text">
                                11 призов по 3000 руб!
                            </div>
                            <img className="main-container__price_block-xiaomi" src="./malo.png" alt="Xiaomi Redmi"/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="main-container__price_block3">
                            <div className="main-container__price_block-text">
                                11 призов по 2000 руб!
                            </div>
                            <img className="main-container__price_block-xiaomi" src="./mnogo.png" alt="Xiaomi Redmi"/>
                        </div>
                    </div>

                </div>
            </div>
            <div className="main-container__middle-block">
                <div className="main-container__middle-content">
                    Прохождение всех трёх линий квеста может уберечь тебя от ВИЧ!
                </div>
                <div className="main-container__footer-buttons">
                    <VkRegisterButton/>
                    <RegisterButton/>
                </div>
            </div>
            <div className="main-container__footer-maker">
                Квест проводится Министерством здравоохранения Республики Башкортостан при поддержке Министерства образования. Организатор - Республиканский центр СПИД.
            </div>
        </div>


    );
}

export default Main;
