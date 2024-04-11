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
`

export const Top = styled.header`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    padding: 42px 36px;

    @media (max-width: 620px) {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 50px;
    }
`

export const Div = styled.div`
    color: white;
    font-size: 32px;

    display: flex;
    gap: 15px;
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

    color: white;
    text-align: center;
    line-height: 72px;

    h1{
        max-width: 873px;
        font-weight: 700;
        font-size: 48px;
    }

    p{
        font-weight: 500;
        font-size: 18px;
    }

    @media (max-width: 620px) {
        h1{
            max-width: 456px;
            font-size: 34px;
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

    font-weight: 700;
    font-size: 24px;

    @media (max-width: 620px) {
        width: 193px;
        height: 48px;

        font-size: 16px;
    }
`