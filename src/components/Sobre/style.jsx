
import { styled } from 'styled-components'

export const Content = styled.section`
    display: flex;
    justify-content: center;
`

export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex: 1;
    color: white;
    padding: 42px 36px;

    max-width: 1300px;

    img{
        width: 100%;
        max-width: 530px;
        visibility: hidden;
    }

    @media (max-width: 1024px) {
        flex-wrap: wrap;
        padding: 80px 36px;
        gap: 20px;
    }
`

export const Texto = styled.div`
    max-width: 570px;
    display: flex;
    flex-direction: column;
    gap: 20px;

    visibility: hidden;

    h1{
        font-weight: 700;
        font-size: 44px;
    }

    p{
        font-weight: 500;
        line-height: 27px;
    }
`