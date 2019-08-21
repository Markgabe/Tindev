import React from 'react';

import './styles.css';
import logo from '../../assets/logo.svg';

export default function Match({ match }) {
    return(
        <div className="match-page-container">
            <img src={logo} alt="Tindev"/>
            <h1>{match.params.id}</h1>
        </div>
    );
}