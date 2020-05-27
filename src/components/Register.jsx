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
    const [privacy, setPrivacy] = useState(false);
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
                <span className="register-form__data-protect" >Ваши данные надежно защищены</span>
                <input style={{display: 'none'}} defaultValue={_id} name="_id"/>
                <input placeholder="Имя" autoComplete="none" defaultValue={firstName} name="firstName" required/>
                <input placeholder="Фамилия" autoComplete="none" defaultValue={lastName} name="lastName" required/>
                <input placeholder="Город" autoComplete="none" name="city" required/>
                <input placeholder="Школа" autoComplete="none" name="school" required/>
                <input placeholder="Класс" autoComplete="none" name="classroom" required/>
                <input placeholder="Номер телефона" autoComplete="none" name="phone" required/>

                <input onChange={()=>setPrivacy(!privacy)} type="checkbox" name="fruit"/> <text className="register-form_policy_accept-text">Согласен с обрабокой и хранением персональных данных <br/></text>

                <button disabled={!privacy} type="submit">
                    Регистрация
                </button>
            </form>
            <div className="register-form__data_warning">
                <span className="register-form__data_warning-attention">Будьте внимательны!</span>
                <br/>
                <br/>
                При регистрации с некорректными данными, вы не сможете получить приз.
                <br/>
                <br/>
                Мы пришлём вам всего 2 СМС. Первую - о том, что квест начался, вторую - если вы займёте призовое место. После окончания квеста все данные будут уничтожены.

            </div>
        </div>
    );
}

export default Register;
