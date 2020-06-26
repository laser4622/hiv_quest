import React from 'react';
import './Input.css';
import InputMask from "react-input-mask";

const Input = (params) => {
    const {icon, hint, error} = params;


    return (
        <div className="Input">
            {icon&&<img className="Input__icon" src={icon}/>}

            <InputMask

                style={error?{
                    border: '1px solid red',
                }:{}}
                {...params}
            >
                {(inputProps) => <input
                    id="login-tel"
                    required
                    {...inputProps}
                    type="tel"/>}
            </InputMask>


            {hint&& [<img className="Input__hint_icon" src={'/questionSign.png'}/>,<div className="Input__hint_text">{hint}</div>] }


        </div>
    )
};

export default Input;