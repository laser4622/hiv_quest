import React, { useState } from 'react';
import InputMask from 'react-input-mask'
import { accessCode, sendRegisterDataToServer } from "../api";
import './Register.css'
import { redirect_url } from "../variables";

const PhoneNumberInput = (props) => {
    return (
        <InputMask
            mask="+7\ (999) 999-99-99"
            placeholder={props.placeholder}
            name={props.name}
            pattern={props.pattern}
            minLength={props.minLength}
        >
            {(inputProps) => <input required {...inputProps} type="tel" />}
        </InputMask>
    )
}

const Register = (props) => {
    const params = new URLSearchParams(props.location.search);
    const code = params.get('code');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [_id, setId] = useState('');
    const [privacy, setPrivacy] = useState(false);
    const [registerIsEnd, setRegisterIsEnd] = useState(false);
    if (code && !firstName && !lastName) accessCode(code, redirect_url).then((res, err)=> {
        if(res) {
            setFirstName(res.data.firstName);
            setLastName(res.data.lastName);
            setId(res.data._id);
        }
    });

    const sendDataToServer = async (e) => {
        e.preventDefault();
        const form = e.target;

        sendRegisterDataToServer(
            form._id.value,
            form.firstName.value,
            form.lastName.value,
            form.city.value,
            form.school.value,
            form.classroom.value,
            form.phone.value
        )
            .then((res, err)=> {
                if (err) return alert("Ошибка при регистрации");
                setRegisterIsEnd(true);
            })
    }

    if(registerIsEnd) {
        return (
            <div className="register-form-success-end">
                <span className="register-form-success-end-greetings">Поздравляем!</span> <br/><br/> Вы зарегистрировались для прохождения квеста.<br/> <br/>Ждём вас 25 июня! Мы вам напомним.
            </div>
        )
    }

    return (
        <div className="register-form">
            <form onSubmit={(e)=> sendDataToServer(e)}>
                <span className="register-form__data-protect" >Ваши данные надежно защищены</span>
                <input style={{display: 'none'}} defaultValue={_id} name="_id"/>
                <input placeholder="Имя" autoComplete="none" defaultValue={firstName} name="firstName" required/>
                <input placeholder="Фамилия" autoComplete="none" defaultValue={lastName} name="lastName" required/>
                <input placeholder="Город / нас. пункт" autoComplete="none" name="city" required/>
                <input placeholder="Школа" autoComplete="none" name="school" required/>
                <input placeholder="Класс" autoComplete="none" name="classroom" required/>
                <PhoneNumberInput
                    placeholder="Номер телефона"
                    type="tel"
                    name="phone"
                    pattern="[\+]\d{1}\s[\(]\d{3}[\)]\s\d{3}[\-]\d{2}[\-]\d{2}"
                    minLength="18"
                    required
                />

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
