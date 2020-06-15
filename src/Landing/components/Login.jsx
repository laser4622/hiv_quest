import React, {useState} from 'react';
import InputMask from "react-input-mask";
import {gameLogin, getStatus} from "../../api";
import appStore from "../../store";

const Login = () => {
    const [value, setValue] = useState();

    const onClick = async () => {
        await appStore.login(value);
        await appStore.updateStatus()
        // console.log(token)
        // await getStatus(token)
    };

    return (
        <div className="Game">

            <InputMask
                mask="+7\ (999) 999-99-99"
                placeholder="Номер телефона"
                type="tel"
                name="phone"
                pattern="[\+]\d{1}\s[\(]\d{3}[\)]\s\d{3}[\-]\d{2}[\-]\d{2}"
                minLength="18"
                required
                onChange={(e)=>{setValue(e.target.value)}}
            >
                {/*{(inputProps) => <input id="tel" required {...inputProps} type="tel"/>}*/}
            </InputMask>


            <button onClick={onClick}>click</button>

        </div>
    )
};

export default Login;