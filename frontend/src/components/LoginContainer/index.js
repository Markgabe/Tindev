import React from 'react';

import { Container, LoginForm, Logo, FormInput, Submit } from './styled';

import logo from '../../assets/logoWhite.svg';

export default function LoginContainer({
	handleSubmit,
	username,
	setUsername,
}) {
	return (
		<Container>
			<LoginForm onSubmit={handleSubmit}>
				<Logo src={logo} alt="Tindev" />
				<FormInput
					placeholder="Digite seu usuário do github"
					value={username}
					onChange={(e) => setUsername(e.target.value)}
				/>
				<Submit type="submit"> Enviar </Submit>
			</LoginForm>
		</Container>
	);
}
