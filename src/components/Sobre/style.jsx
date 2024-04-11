
import { styled } from 'styled-components'


export const Wrapper = styled.section`
    display: flex;
    align-items: center;
    justify-content: space-around;
    gap: 150px;
    color: white;
    padding: 0px 36px;

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