import React from 'react';
import { Card, Avatar, CardFooter, Buttons } from './styled';

import like from '../../assets/like.svg';
import dislike from '../../assets/dislike.svg';

export default function ProfileCard({ user, handleAction }) {
	return (
		<Card>
			<Avatar src={user.avatar} alt={user.name} />
			<CardFooter>
				<strong>{user.name}</strong>
				<p>{user.bio}</p>
			</CardFooter>

			<Buttons>
				<button onClick={() => handleAction(user._id, 'dislike')}>
					<img src={dislike} alt="dislike" />
				</button>
				<button onClick={() => handleAction(user._id, 'like')}>
					<img src={like} alt="like" />
				</button>
			</Buttons>
		</Card>
	);
}
