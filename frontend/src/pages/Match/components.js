import styled from 'styled-components';

export const Header = styled.header`
	display: flex;
	background-image: linear-gradient(to top right, #fd297b, #ff5864, #ff655b);
	width: 100%;
	align-items: center;
	grid-area: header;
`;

export const Logo = styled.img`
	margin-left: 40px;
	width: 80px;
	transition: all 0.35s;

	&:hover {
		transform: scale(1.25, 1.25);
	}
`;

export const Container = styled.div`
	display: grid;
	grid-template-columns: 1fr 2fr 1fr;
	grid-template-rows: 10vh 90vh;
	grid-template-areas:
		'header header header'
		'side main profile';
`;

export const Side = styled.aside`
	grid-area: side;
`;

export const Chat = styled.div`
	grid-area: main;
	border-width: 0px 1px;
	border-style: solid;
	border-color: #aaa;
	padding: 20px 70px;

	div {
		h5 {
			background-color: #4a8bed;
			border-radius: 20px;
			padding: 10px 20px;
			display: inline-block;
			font-size: 1em;
			font-weight: 5;
			color: white;
		}
	}
	div {
		display: flex;
		h6 {
			background-color: #cbcdd1;
			border-radius: 20px;
			padding: 10px 20px;
			display: inline-block;
			font-size: 1em;
			margin-left: auto;
			font-weight: 5;
		}
	}
`;

export const Profile = styled.div`
	grid-area: profile;

	img {
		max-width: 25vw;
	}

	h5 {
		font-size: 1.4em;
		margin-left: 10px;
		font-weight: 4;
	}

	h6 {
		margin-left: 10px;
		color: #555555;
	}
`;

export const DevBar = styled.div`
	display: flex;
	width: 100%;
	background-color: rgba(0, 0, 0, 0);
	height: 10vh;
	transition: all 0.4s;

	&:hover {
		background-color: rgba(0, 0, 0, 0.1);
	}

	img {
		flex: 1;
		border-radius: 50%;
		height: 10vh;
		padding: 2px 4px;
	}

	div {
		flex: 9;
		align-self: center;
		margin-left: 10px;
		h5 {
			font-size: 1.3em;
			font-family: 'Arial Narrow', Arial, sans-serif;
			font-weight: 5;
		}
		h6 {
			font-size: 0.8em;
			font-family: 'Arial Narrow', Arial, sans-serif;
			font-weight: 5;
			color: #999999;
		}
	}
`;

export const TextArea = styled.div`
	display: flex;
	bottom: 0;
	left: 26vw;
	position: absolute;
	margin-bottom: 10px;
	width: 48vw;
	input {
		flex: 5;
		border-style: solid;
		border-width: 1px;
		border-color: #888;
		border-radius: 10px;
		box-shadow: none;
		height: 5vh;
		margin-right: 5px;

		&::placeholder {
			padding-left: 10px;
		}
	}
	button {
		flex: 1;
		border-radius: 15px;
		border-style: solid;
		border-width: 1px;
		border-color: #888;
		box-shadow: none;
		background-color: #4a8bed;
		color: white;
		font-weight: bold;
		font-size: 0.85em;
	}
`;
