import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Main.css';

import api from '../config/api';

import logo from '../assets/logo.svg';
import like from '../assets/like.svg';
import dislike from '../assets/dislike.svg';

export default function Main({ match, history }) {
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
                <li key={user._id}>
                    <img src={user.avatar} alt={user.name}/>
                    <footer>
                        <strong>{user.name}</strong>
                        <p>{user.bio}</p>
                    </footer>

                    <div className="buttons">
                        <button onClick={() => handleDislike(user._id)}>
                            <img src={ dislike } alt="dislike"/>
                        </button>
                        <button onClick={() => handleLike(user._id)}>
                            <img src={ like } alt="like"/>
                        </button>
                    </div>
                </li>
                ))}
            </ul>) : 
            (
                <h1 className="empty">Acabou :(</h1>
            )
            }
        </div>
    );
}