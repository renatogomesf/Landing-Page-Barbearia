
import { styled } from 'styled-components';

export const Content = styled.footer`
    display: grid;
    justify-content: center;
    position: relative;
`

export const Wrapper = styled.div`
    color: white;
    gap: 40px;
    margin: 50px 0px;

    a{
        color: white;
        transition: all 0.5s;

        &:hover{
            transform: translateY(-8px) scale(1.1);
            transition: all 0.5s;
            color: ${props => props.theme.auxiliary_color.cor03};
        }
    }

    p{
        padding: 0px 36px;
        text-align: center;
    }
`

export const Div = styled.div`
    display: grid;
    justify-content: center;
    color: white;
    font-size: 32px;
    display: flex;
    gap: 15px;
`

export const Img = styled.div`
    display: grid;
    justify-content: center;
    margin: 50px 0px;
`

export const Whats = styled.div`
    position: absolute;
    right: 30px;
    bottom: 30px;

    img{
        width: 73px;
        transition: 0.5s;
        cursor: pointer;

        &:hover{
            transform: scale(1.1);
        }
    }

    @media (max-width: 620px) {
        bottom: 100px;

        img{
            width: 50px;
        }
    }
`