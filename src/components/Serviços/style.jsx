import { styled } from 'styled-components';


export const Content = styled.section`
    display: flex;
    justify-content: center;

    background-color: white;
`

export const Wrapper = styled.div`
    display: grid;
    justify-content: center;

    max-width: 1300px;
    padding: 42px 36px;
`

export const Texto = styled.div`
    text-align: center;
    display: grid;
    justify-content: center;

    h1{
        color: ${props => props.theme.brand_color.cor01};
        margin-top: 40px;
        font-weight: 700;
        font-size: 44px;
    }
    
    p{
        color: ${props => props.theme.neutral_color.cor03};
        margin: 40px 0px;
        font-weight: 500;
        font-size: 18px;
        line-height: 27px;
        width: 836px;
    }
`

export const Imagens = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
`

export const Corte1 = styled.div`
    box-shadow: 4px 6px 14px rgba(0, 0, 0, 0.15);
    border-radius: 16px;

    img{
        width: 100%;
        max-width: 313px;
    }

    div{
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0px 15px;
        height: 76px;

        p{
            font-weight: 700;
            font-size: 18px;
        }

        span{
            padding: 10px 20px;
            border-radius: 8px;
            font-weight: 700;
            font-size: 14px;
            color: white;
            background-color: ${props => props.theme.auxiliary_color.cor01};
        }
    }
`

export const Corte2 = styled.div`
    box-shadow: 4px 6px 14px rgba(0, 0, 0, 0.15);
    border-radius: 16px;

    img{
        width: 100%;
        max-width: 313px;
    }

    div{
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0px 15px;
        height: 76px;

        p{
            font-weight: 700;
            font-size: 18px;
        }

        span{
            padding: 10px 20px;
            border-radius: 8px;
            font-weight: 700;
            font-size: 14px;
            color: white;
            background-color: ${props => props.theme.auxiliary_color.cor01};
        }
    }
`

export const Corte3 = styled.div`
    box-shadow: 4px 6px 14px rgba(0, 0, 0, 0.15);
    border-radius: 16px;

    img{
        width: 100%;
        max-width: 313px;
    }

    div{
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0px 15px;
        height: 76px;

        p{
            font-weight: 700;
            font-size: 18px;
        }

        span{
            padding: 10px 20px;
            border-radius: 8px;
            font-weight: 700;
            font-size: 14px;
            color: white;
            background-color: ${props => props.theme.auxiliary_color.cor01};
        }
    }
`

