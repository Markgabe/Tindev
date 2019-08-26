import styled from 'styled-components';

export const Header = styled.div`
	display: flex;
	background-image: linear-gradient(to top right, #fd297b, #ff5864, #ff655b);
	width: 100%;
	height: 70px;
	align-items: center;
	position: fixed;
	top: 0;
`;

export const Logo = styled.img`
	margin-left: 40px;
	width: 80px;
	transition: all 0.35s;

	&:hover {
		transform: scale(1.25, 1.25);
	}
`;

export const Match = styled.img`
	margin: 0 30px 0 auto;
	width: 40px;
	transition: all 0.35s;

	&:hover {
		transform: translateY(-5px);
	}
`;
