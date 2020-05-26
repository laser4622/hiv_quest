import React from 'react';
import {accessCode} from "../api";

const Register = (props) => {
    const params = new URLSearchParams(props.location.search);
    const code = params.get('code');
    console.log(code);
    if (code) accessCode(code);
    return (
        <div className="App">
            register page
        </div>
    );
}

export default Register;
