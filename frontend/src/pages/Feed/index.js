import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';
import { Link } from 'react-router-dom';
import api from '../../services/api';
import ProfileCard from '../../components/ProfileCard';

import './styles.css';
import logo from '../../assets/logo.svg';
import itsamatch from '../../assets/itsamatch.png';

export default function Main({ match }) {
    const [users, setUsers] = useState([]);
    const [matched, setMatched] = useState(null);

    useEffect(() => {
        async function loadUsers() {
            const response = await api.get('/user/available', {
                headers: {
                    user: match.params.id
                }
            });

            setUsers(response.data);
        }

        loadUsers();
    }, [match.params.id]);

    useEffect(() => {
        const socket = io('http://localhost:3333', { query: { user: match.params.id }});
        
        socket.on('match', user => setMatched(user));

    }, [match.params.id]);

    async function handleLike(id) {
        await api.post(`user/${id}/like`, null, {
            headers: { user: match.params.id }
        });

        setUsers(users.filter( user => user._id !== id));
    }
    
    async function handleDislike(id) {
        await api.post(`user/${id}/dislike`, null, {
            headers: { user: match.params.id }
        });

        setUsers(users.filter( user => user._id !== id));
    }

    return(
        <div className="main-container">
            <Link to='/'>
                <img src={ logo } alt="Tindev"/>
            </Link>
            { users.length > 0 ? (
            <ul>
                {users.map(user => (
                <ProfileCard 
                key={user._id}
                user={user} 
                handleLike={handleLike} 
                handleDislike={handleDislike} />
                ))}
            </ul>) 
            : (<h1 className="empty">Acabou :(</h1>)}
            {matched && (
                <div className="match-container">
                    <img src={itsamatch} alt=""/>
                    <img className="avatar" src={matched.avatar} alt={matched.name}/>
                    <strong>{matched.name}</strong>
                    <p>{matched.bio}</p>
                    <button type='button' onClick={() => setMatched(null)}>FECHAR</button>
                </div>
            )}
        </div>
    );
}