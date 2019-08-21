import React from 'react';

import './styles.css';
import itsamatch from '../../assets/itsamatch.png';

export default function ItsAMatch({ user: matched, setUser: setMatched }) {
    return(  
        <div className="match-container">
            <img src={itsamatch} alt=""/>
            <img className="avatar" src={matched.avatar} alt={matched.name}/>
            <strong>{matched.name}</strong>
            <p>{matched.bio}</p>
            <button type='button' onClick={() => setMatched(null)}>FECHAR</button>
        </div>
    );
}