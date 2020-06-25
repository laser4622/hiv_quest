import axios from 'axios';
import appStore from "./store";
export const baseURL = 'http://192.168.0.249:8080/api';

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



export const getNext = (data) => axios({
    method: 'POST',
    url: `${baseURL}/game/next`,
    headers: {
        'Content-Type': 'application/json',
        'authorization': `Barer ${appStore.token}`
    },
    data
});



export const getReset = () => axios({
    method: 'POST',
    url: `${baseURL}/game/reset`,
    headers: {
        'Content-Type': 'application/json',
        'authorization': `Barer ${appStore.token}`
    }
});

export const chooseChar = (data) => axios({
    method: 'POST',
    url: `${baseURL}/game/chooseChar`,
    headers: {
        'Content-Type': 'application/json',
        'authorization': `Barer ${appStore.token}`
    },
    data
});
