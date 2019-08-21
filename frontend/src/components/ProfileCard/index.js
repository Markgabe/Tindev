import React from 'react';

import './styles.css';

import like from '../../assets/like.svg';
import dislike from '../../assets/dislike.svg';

export default function ProfileCard({ user, handleAction }) {

    return(

        <li className="card">
            <img src={user.avatar} alt={user.name} className="avatar-image"/>
            <footer>
                <strong>{user.name}</strong>
                <p>{user.bio}</p>
            </footer>

            <div className="buttons">
                <button onClick={() => handleAction(user._id, 'dislike')}>
                    <img src={ dislike } alt="dislike"/>
                </button>
                <button onClick={() => handleAction(user._id, 'like')}>
                    <img src={ like } alt="like"/>
                </button>
            </div>
        </li>

    );

}