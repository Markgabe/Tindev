import styled from 'styled-components';

export const Container = styled.div`
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	background-image: linear-gradient(to top right, #fd297b, #ff5864, #ff655b);
`;

export const LoginForm = styled.form`
	width: 100%;
	max-width: 300px;
	display: flex;
	flex-direction: column;
`;

export const Logo = styled.img`
	transition: all 1s;
	margin-bottom: 40px;

	&:hover {
		transform: scale(1.7, 1.7);
	}
`;

export const FormInput = styled.input`
	margin-top: 20px;
	border: 1px solid #ddd;
	border-radius: 7px;
	height: 48px;
	padding: 0 20px;
	font-size: 16px;
	color: #666;

	&::placeholder {
		color: #999;
		text-align: center;
	}
`;

export const Submit = styled.button`
	margin-top: 10px;
	border: 1px solid #ffffff;
	border-radius: 7px;
	height: 48px;
	font-size: 16px;
	background: transparent;
	font-weight: bold;
	color: #fff;
	cursor: pointer;
	transition: all 0.4s;

	&:hover {
		background-color: rgb(255, 255, 255);
		color: #ff5864;
	}
`;
