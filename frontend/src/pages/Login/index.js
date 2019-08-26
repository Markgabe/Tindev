import React, { useState } from 'react';
import './styles.css';

import LoginContainer from '../../components/LoginContainer';

import api from '../../services/api';

export default function Login({ history }) {
	const [user, setUser] = useState('');

	async function handleSubmit(e) {
		e.preventDefault();

		const response = await api.post('/user/new', { user });
		const { _id } = response.data;
		history.push(`/dev/${_id}`);
	}

	return (
		<LoginContainer
			handleSubmit={handleSubmit}
			username={user}
			setUsername={setUser}
		/>
	);
}
