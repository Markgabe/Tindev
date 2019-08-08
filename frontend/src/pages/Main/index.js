import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../../services/api';
import ProfileCard from '../../components/ProfileCard/';

import './styles.css';
import logo from '../../assets/logo.svg';

export default function Main({ match }) {
    const [users, setUsers] = useState([]);

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
                <ProfileCard user={user} handleLike={handleLike} handleDislike={handleDislike} />
                ))}
            </ul>) 
            : (<h1 className="empty">Acabou :(</h1>)}
        </div>
    );
}