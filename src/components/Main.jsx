import React from 'react';
import { redirect_url } from "../variables";

const Main = () => {
    const href = `https://oauth.vk.com/authorize?client_id=7484844&display=page&redirect_uri=${redirect_url}&response_type=code&v=5.107`;
    return (
        <div className="App">
            <a href={href}>
                <button>
                    Регистрация через вконтакте
                </button>
            </a>
        </div>
    );
}

export default Main;
