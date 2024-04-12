import { styled } from 'styled-components'
import HeroImg from '../../assets/heroimg.jpg'


export const Content = styled.section`
    background-image: linear-gradient(#06121E, rgba(6, 18, 30, 0.8), rgba(6, 18, 30, 0.8), #06121E), url(${HeroImg});
    background-size: cover;
    background-repeat: no-repeat;
    height: 815px;
    display: flex;
    justify-content: center;
`



export const Wrapper = styled.div`
    width: 100%;
    max-width: 1300px;

    img{
        visibility: hidden;
    }
`



export const Top = styled.header`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    padding: 42px 36px;

    .btn{
        visibility: hidden;
    }

    @media (max-width: 620px) {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 50px;

        .btn{
            display: none;
        }
    }
`



export const Div = styled.div`
    font-size: 32px;
    display: flex;
    gap: 15px;
    visibility: hidden;

    a{
        color: white;
        transition: all 0.5s;

        &:hover{
            transform: translateY(-8px) scale(1.1);
            transition: all 0.5s;
            color: ${props => props.theme.auxiliary_color.cor03};
        }
    }


`



export const ButtonHeader = styled.button`
    color: ${props => props.theme.neutral_color.cor04};
    background-color: transparent;
    border: 1.4px solid white;
    border-radius: 4px;
    width: 167px;
    height: 38px;
    font-weight: 600;
    font-size: 16px;
    cursor: pointer;
    transition: 0.5s;

    &:hover{
        border: 1px solid ${props => props.theme.auxiliary_color.cor03};
        background-color: ${props => props.theme.auxiliary_color.cor03};
        transition: 0.5s;
    }

    @media (max-width: 620px) {
        display: none;
    }

`



export const Sobre = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 50px;
    padding: 0px 15px;
    color: white;
    text-align: center;

    visibility: hidden;

    h1{
        max-width: 873px;
        font-weight: 700;
        font-size: 48px;
        line-height: 72px;
        margin-bottom: 20px;
        word-wrap: break-word;
    }

    p{
        font-weight: 500;
        font-size: 18px;
    }

    @media (max-width: 620px) {
        h1{
            max-width: 456px;
            font-size: 30px;
        }

        p{
            font-weight: 500;
            font-size: 16px;
        }
    }
`



export const ButtonSobre = styled.button`
    color: ${props => props.theme.neutral_color.cor04};
    background-color: ${props => props.theme.auxiliary_color.cor01};
    border: none;
    width: 292px;
    height: 66px;
    margin-top: 36px;
    cursor: pointer;
    font-weight: 700;
    font-size: 24px;
    transition: 0.5s;

    &:hover{
        transform: scale(1.1);
        transition: 0.5s;
    }

    @media (max-width: 620px) {
        width: 193px;
        height: 48px;
        font-size: 16px;
    }
`