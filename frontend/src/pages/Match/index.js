import React from 'react';

import './styles.css';
import logo from '../../assets/logoWhite.svg';

import { Link } from 'react-router-dom';

import {
	Header,
	Logo,
	Container,
	Side,
	Chat,
	DevBar,
	Profile,
	TextArea,
} from './components';

export default function Match({ match }) {
	return (
		<div>
			<Container>
				<Header>
					<Link to="/">
						<Logo src={logo} alt="Tindev" />
					</Link>
				</Header>
				<Side>
					<DevBar>
						<img
							src="https://avatars1.githubusercontent.com/u/32678240?v=4"
							alt="Patty"
						/>
						<div>
							<h5>Patty</h5>
							<h6>Full stack developper</h6>
						</div>
					</DevBar>
					<DevBar />
					<DevBar />
					<DevBar />
					<DevBar />
					<DevBar />
					<DevBar />
					<DevBar />
					<DevBar />
				</Side>
				<Chat>
					<div>
						<h5>Oi, tudo bem?</h5>
					</div>
					<div>
						<h6>Tudo, e contigo?</h6>
					</div>
					<TextArea>
						<input type="text" placeholder="Diga algo" />
						<button>Enviar</button>
					</TextArea>
				</Chat>
				<Profile>
					<img
						src="https://avatars1.githubusercontent.com/u/32678240?v=4"
						alt="Patty"
					/>
					<div>
						<h5>Patty</h5>
						<h6>Full stack developper</h6>
					</div>
				</Profile>
			</Container>
		</div>
	);
}
