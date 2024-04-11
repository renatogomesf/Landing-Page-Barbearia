
import { styled } from 'styled-components';

export const Content = styled.footer`
    position: relative;
    display: grid;
    justify-content: center;
`

export const Wrapper = styled.div`
    color: white;
    gap: 50px;
    margin: 50px 0px;

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
    }

    @media (max-width: 620px) {
        bottom: 100px;

        img{
            width: 50px;
        }
    }
`