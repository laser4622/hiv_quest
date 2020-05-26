import React, { useState } from 'react';
import { accessCode, baseURL } from "../api";
import './Register.css'
import { redirect_url } from "../variables";

const Register = (props) => {
    const params = new URLSearchParams(props.location.search);
    const code = params.get('code');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [_id, setId] = useState('');
    if (code && !firstName && !lastName) accessCode(code, redirect_url).then((res, err)=> {
        if(res) {
            setFirstName(res.data.firstName);
            setLastName(res.data.lastName);
            setId(res.data._id);
            console.log(res);
        }
    });
    return (
        <div className="register-form">
            <form method="POST" action={baseURL + '/core/register'}>
                <label style={{display: 'none'}}>vkID <input defaultValue={_id} name="_id"/></label><br/>
                <label>Имя <input defaultValue={firstName} name="firstName" required/></label><br/>
                <label>Фамилия <input defaultValue={lastName} name="lastName" required/></label><br/>
                <label>Город <input name="city" required/></label><br/>
                <label>Школа <input name="school" required/></label><br/>
                <label>Класс <input name="classroom" required/></label><br/>
                <label>Телефон <input name="phone" required/></label><br/>
                <button type="submit">
                    Отправить
                </button>
            </form>
        </div>
    );
}

export default Register;
