import React, {useState} from 'react';
import InputMask from "react-input-mask";
import {gameLogin, getStatus} from "../../api";
import appStore from "../../store";
import './Login.css'
import Input from "../../Game/components/Input";
import SubmitButton from "../../Game/components/SubmitButton";

const Login = (props) => {
    const [value, setValue] = useState('');
    const [code, setCode] = useState('');
    const [hintVisible, setHintVisible] = useState(false);
    const [error, setError] = useState(false);

    const onClick = async (e) => {
        e.preventDefault();
        try {
            await appStore.login(value, code);
        }catch (e) {
            console.log(e)
            setCode('');
            setError(true)
        }
        // await appStore.updateStatus();
        // props.history.push('/game')
    };

    return (
        <div className="Login"
        >
            <form action={null} onSubmit={onClick}>
                <Input
                    mask="+7\ (999) 999-99-99"
                    placeholder="Номер телефона"
                    type="tel"
                    name="phone"
                    pattern="[\+]\d{1}\s[\(]\d{3}[\)]\s\d{3}[\-]\d{2}[\-]\d{2}"
                    minLength="18"
                    required
                    icon="/phoneIcon.png"
                    onChange={(e) => {
                        setValue(e.target.value)
                    }}
                />

                <Input
                    mask="999-999"
                    value={code}
                    placeholder={error?'Неверный код':"Код из смс"}
                    type="code"
                    pattern="{3}[\-]\d{3}"
                    minLength="6"
                    required
                    onChange={(e) => {
                        setCode(e.target.value)
                    }}
                    hint={'код, который пришел вам в смс-сообщении'}
                    icon="/lockIcon.png"
                    error={error}
                    onClick={()=>{setError(false)}}
                >
                    {(inputProps) => <input id="login-code" required {...inputProps}/>}
                </Input>

                <SubmitButton text="Войти"/>
                <div onClick={() => setHintVisible(!hintVisible)} className="Login-help">Помощь</div>
                {hintVisible &&
                <div className="Login-help_hint">Если вам не пришло смс-сообщение с кодом, то свяжитесь с нами.</div>}
            </form>

        </div>
    )
};

export default Login;