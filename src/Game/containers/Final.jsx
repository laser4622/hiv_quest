import React from 'react';

const Final = () => {
    return (
        <div className="Game">
            <div
                className="Game__Main"
                style={{backgroundImage: 'url("/final.png")'}}
            >
                <p className="finalText">
                    Спасибо всем! Ждем вас на следующий квест.<br/>
                    <a href="https://vk.com/goquest.online" target="_blank">Вступайте в группу в ВК</a>, чтобы узнать, когда он начнется
                </p>
            </div>
        </div>

    )
};

export default Final;