import axios from 'axios';
const baseURL = 'https://server.goquest.online/api';

export const accessCode = (code) => axios({
    method: 'POST',
    url: `${baseURL}/core/accessCode`,
    headers: {
        'Content-Type': 'application/json',
    },
    data: {
        code: code,
    }
});