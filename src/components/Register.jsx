import React, {useEffect, useRef, useState} from 'react';
import InputMask from 'react-input-mask'
import {accessCode, sendRegisterDataToServer} from "../api";
import './Register.css'
import {redirect_url} from "../variables";

const PhoneNumberInput = (props) => {
    return (
        <InputMask
            onChange={props.changeProp}
            ref={props.myRef}
            mask="+7\ (999) 999-99-99"
            placeholder={props.placeholder}
            name={props.name}
            pattern={props.pattern}
            minLength={props.minLength}
        >
            {(inputProps) => <input id="tel" required {...inputProps} type="tel"/>}
        </InputMask>
    )
};

const Register = (props) => {
    const phoneNumberInput = useRef();
    const formElement = useRef();
    const [privacy, setPrivacy] = useState(false);
    const [registerIsEnd, setRegisterIsEnd] = useState(false);
    const [registerVKError, setRegisterVKError] = useState(false);
    const [registerError, setRegisterError] = useState("");

    useEffect( () => {
        const params = new URLSearchParams(props.location.search);
        const code = params.get('code');
        if (code)
            accessCode(code, redirect_url).then((res) => {
                if (res) {
                    formElement.current.firstName.value = res.data.firstName;
                    formElement.current.lastName.value = res.data.lastName;
                    formElement.current._id.value = res.data._id;
                }
            }).catch(err => {
                if (err.response) {
                    if(err.response.status === 403) {
                        setRegisterVKError(true);
                    }
                }
            });

    }, []);

    const sendDataToServer = (e) => {
        e.preventDefault();
        const form = new FormData(e.target);
        const data = {};
        form.forEach((value, key) => {
            data[key] = value
        });
        sendRegisterDataToServer(data).then(res => {
            setRegisterIsEnd(true);
        }).catch(err => {
            if (err.response) {
                if(err.response.status === 403) {
                    setRegisterError("Пользователь с таким номером телефона уже зарегистрирован.");
                    formElement.current.phone.value = '+7 (___) ___-__-__';
                    phoneNumberInput.current.value = '+7 (___) ___-__-__';
                }
            }
        });
    };

    if(registerVKError) {
        return (
            <div className="register-form-success-end">
                Пользователь с таким аккаунтом ВКонтакте уже зарегистрирован. <span className="register-form_error-vk_home" onClick={()=>props.history.push('/')}>На главную</span>
            </div>
        )
    }

    return (registerIsEnd ?
            <div className="register-form-success-end">
                <span className="register-form-success-end-greetings">Поздравляем!</span> <br/><br/> Вы
                успешно зарегистрированы.<br/> <br/>Ждём вас 1 июля! Мы обязательно напомним вам о начале квеста.
            </div> :
            <div className="register-form">
                <form onSubmit={(e) => sendDataToServer(e)} ref={formElement}>
                    <span className="register-form__data-protect">Ваши данные надежно защищены</span>
                    <input style={{display: 'none'}} name="_id"/>
                    <input placeholder="Имя" autoComplete="none" name="firstName" required/>
                    <input placeholder="Фамилия" autoComplete="none" name="lastName" required/>
                    <input placeholder="Город / нас. пункт" autoComplete="none" name="city" required/>
                    <input placeholder="Школа" autoComplete="none" name="school" required/>
                    <input placeholder="Класс" autoComplete="none" name="classroom" required/>
                    <PhoneNumberInput
                        changeProp={()=>setRegisterError('')}
                        myRef={phoneNumberInput}
                        placeholder="Номер телефона"
                        type="tel"
                        name="phone"
                        pattern="[\+]\d{1}\s[\(]\d{3}[\)]\s\d{3}[\-]\d{2}[\-]\d{2}"
                        minLength="18"
                        required
                    />
                    <InputMask
                        mask="999-999"
                        placeholder="Код пароль"
                        name="code"
                        pattern="\d{3}[\-]\d{3}"
                        minLength="7"
                    >
                        {(inputProps) => <input id="tel" required {...inputProps}/>}
                    </InputMask>



                    <span className="register-form_error-phone">
                            {registerError}
                    </span>

                    <input onChange={() => setPrivacy(!privacy)} type="checkbox" name="fruit"/>
                    <text className="register-form_policy_accept-text">Согласен на обработку и хранение персональных
                        данных <br/></text>
                    <button disabled={!privacy} type="submit">
                        Регистрация
                    </button>
                </form>
                <div className="register-form__data_warning">
                    <span className="register-form__data_warning-attention">Будьте внимательны!</span>
                    <br/>
                    <br/>
                    Если вы укажете некорректные данные при регистрации, в случае победы не сможете получить приз.
                    <br/>
                    <br/>
                    Мы пришлём вам всего 1 СМС - если вы займёте призовое
                    место. После окончания квеста все ваши данные будут уничтожены.
                    <br/>
                    <br/>
                    Квест будет доступен на этой странице с 1 по 5 июля. Доступ будет предоставлен после ввода номера телефона и пароля, пожалуйста не забудте его.

                </div>
            </div>
    );
}

export default Register;
