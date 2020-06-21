import axios from 'axios';
import appStore from "./store";
// export const baseURL = 'https://api.goquest.online/api';
export const baseURL = 'http://172.20.10.3:8080/api';

export const accessCode = (code, redirectURL) => axios({
    method: 'POST',
    url: `${baseURL}/core/accessCode`,
    headers: {
        'Content-Type': 'application/json',
    },
    data: {
        code,
        redirectURL
    }
});

export const sendRegisterDataToServer = (data) => axios({
    method: 'POST',
    url: `${baseURL}/core/register`,
    headers: {
        'Content-Type': 'application/json',
    },
    data
});


export const gameLogin = (data) => axios({
    method: 'POST',
    url: `${baseURL}/game/login`,
    headers: {
        'Content-Type': 'application/json',
    },
    data
});

export const getStatus = () => axios({
    method: 'GET',
    url: `${baseURL}/game/status`,
    headers: {
        'Content-Type': 'application/json',
        'authorization': `Barer ${appStore.token}`
    }
});
