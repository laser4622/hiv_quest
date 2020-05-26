import axios from 'axios';
const baseURL = 'http://localhost:3000/api';


export const accessCode = (code) => axios({
    method: 'POST',
    url: `${baseURL}/core/accessCode`,
    headers: {
        'Content-Type': 'application/json',
    },
    data:{
        code
    }
});