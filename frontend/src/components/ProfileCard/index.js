import React from 'react';

import './styles.css';

import like from '../../assets/like.svg';
import dislike from '../../assets/dislike.svg';

export default function ProfileCard({ user, handleLike, handleDislike }) {

    return(

        <li className="card">
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

    );

}