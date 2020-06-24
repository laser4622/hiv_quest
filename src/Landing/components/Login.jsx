import React, {useState} from 'react';
import InputMask from "react-input-mask";
import {gameLogin, getStatus} from "../../api";
import appStore from "../../store";
import './Login.css'
import Input from "../../Game/components/Input";

const Login = (props) => {
    const [value, setValue] = useState('');
    const [code, setCode] = useState('');

    const onClick = async () => {
        await appStore.login(value);
        await appStore.updateStatus()

        props.history.push('/game')
    };

    return (
        <div className="Login"
                     >
                        <span>Войти</span>
                        <form onSubmit={()=>console.log('qwe')}>
                         <Input
                             mask="+7\ (999) 999-99-99"
                             placeholder="Номер телефона"
                             type="tel"
                             name="phone"
                             pattern="[\+]\d{1}\s[\(]\d{3}[\)]\s\d{3}[\-]\d{2}[\-]\d{2}"
                             minLength="18"
                             required
                             icon="/phoneIcon.png"
                             onChange={(e)=>{setValue(e.target.value)}}
                         />

                         <Input
                             mask="999-999"
                             placeholder="Код из смс"
                             type="code"
                             pattern="{3}[\-]\d{3}"
                             minLength="6"
                             required
                             onChange={(e)=>{setValue(e.target.value)}}
                             hint={'код, который пришел вам в смс-сообщении'}
                             icon="/lockIcon.png"
                         >
                             {(inputProps) => <input id="login-code" required {...inputProps}/>}
                         </Input>

                         </form>

                         <button>click</button>

                     </div>
                 )
             };

             export default Login;