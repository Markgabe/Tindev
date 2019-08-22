import styled from 'styled-components';

export const Header = styled.div`
    display: flex;
    background-image: linear-gradient(to top right, #FD297B, #FF5864, #FF655B);
    width: 100%;
    height: 70px;
    align-items: center;
    position: fixed;
    top:0;
`;

export const Logo = styled.img`
    margin-left: 40px;
`

export const Match = styled.img`
    margin: 0 30px 0 auto;
    width: 40px;

    &:hover {
        transform: translateY(-5px);
        transition: all 0.2s;
    }
`

//#FD297B    #FF5864     #FF655B