import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';
import { Link } from 'react-router-dom';
import api from '../../services/api';

import ProfileCard from '../../components/ProfileCard';
import ItsAMatch from '../../components/ItsAMatch';

import { Header, Logo, Match } from './components';

import './styles.css';
import logo from '../../assets/logoWhite.svg';
import matchIcon from '../../assets/chat-white.png';


export default function Main({ match }) {
    const [users, setUsers] = useState([]);
    const [matched, setMatched] = useState(null);

    useEffect(() => {
        api.get('/user/available', {
            headers: {
                user: match.params.id
            }
        }).then(response => setUsers(response.data));

        const socket = io('http://localhost:3333', { query: { user: match.params.id }});   
        socket.on('match', user => setMatched(user));

    }, [match.params.id]);

    async function handleAction(id, action) {
        await api.post(`user/${id}/${action}`, null, {
            headers: { user: match.params.id }
        });

        setUsers(users.filter( user => user._id !== id));
    }

    return(
        <div class="main-page">
            <Header>
                <Link to='/'>
                    <Logo src={ logo } alt="Tindev"/>
                </Link>
                <Match src={ matchIcon } alt="Matches"/>
            </Header>
            <div className="main-container">
                { users.length > 0 ? (
                    <ul>
                        {users.map(user => (
                        <ProfileCard 
                        key={user._id}
                        user={user} 
                        handleAction={handleAction}
                        />))}
                    </ul>) 
                    : (<h1 className="empty">Acabou :(</h1>)}
                {matched && <ItsAMatch user={matched} setUser={setMatched}/>}
            </div>
        </div>
    );
}