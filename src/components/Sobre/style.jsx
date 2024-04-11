
import { styled } from 'styled-components'

export const Content = styled.section`
    display: flex;
    justify-content: center;
`

export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    gap: 150px;
    color: white;
    padding: 42px 36px;

    max-width: 1300px;

    img{
        width: 100%;
        max-width: 530px;
    }
`

export const Texto = styled.div`
    width: 570px;
    display: flex;
    flex-direction: column;
    gap: 20px;

    h1{
        font-weight: 700;
        font-size: 44px;
    }

    p{
        font-weight: 500;
        line-height: 27px;
    }
`