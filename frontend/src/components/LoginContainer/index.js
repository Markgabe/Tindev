import React from 'react';
import './styles.css';

import logo from '../../assets/logoWhite.svg';

export default function LoginContainer({ handleSubmit, username, setUsername }) {

    return (

        <
        div className = "login-container" >
        <
        form onSubmit = { handleSubmit } >
        <
        img src = { logo }
        alt = 'Tindev' / >
        <
        input placeholder = "Digite seu usuário do github"
        value = { username }
        onChange = { e => setUsername(e.target.value) }
        /> <
        button type = "submit" > Enviar < /button> <
        /form> <
        /div>

    );

}