import React, { useState } from 'react';
import './Login.css';
import logo from '../assets/logo.svg';

import api from '../config/api';

export default function Login({ history }){
    const [user, setUser] = useState('');

    async function handleSubmit(e) {
        e.preventDefault();

        const response = await api.post('/user/new', { user });
        const { _id } = response.data;
        history.push(`/dev/${_id}`);
    }

    return(
        <div className="login-container">
            <form onSubmit={handleSubmit}>
                <img src={logo} alt='Tindev' />
                <input 
                    placeholder="Digite seu usuário do github"
                    value={user}
                    onChange={e => setUser(e.target.value)}
                />
                <button type="submit">Enviar</button>
            </form>
            
        </div>
    );
}