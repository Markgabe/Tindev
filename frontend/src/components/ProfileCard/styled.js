import styled from 'styled-components';

export const Card = styled.li`
	display: flex;
	flex-direction: column;
`;

export const Avatar = styled.img`
	max-width: 100%;
`;

export const CardFooter = styled.footer`
	flex: 1;
	background: #fff;
	border: 1px solid #eee;
	padding: 15px 20px;
	text-align: left;
	border-radius: 0 0 5px 5px;

	footer {
		font-size: 16px;
		color: #333;
	}

	p {
		font-size: 14px;
		line-height: 20px;
		color: #999;
		margin-top: 5px;
	}
`;

export const Buttons = styled.div`
	margin-top: 10px;
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	grid-gap: 10px;

	button:enabled {
		background: rgb(255, 255, 255);
	}

	button {
		height: 50px;
		box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.05);
		border: 0;
		border-radius: 4px;
		cursor: pointer;

		&:hover {
			img {
				transform: translateY(-5px);
				transition: all 0.2s;
			}
		}
	}
`;
