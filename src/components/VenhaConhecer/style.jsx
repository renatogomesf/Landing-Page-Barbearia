
import { styled } from 'styled-components';

export const Content = styled.section`
    background-color: white;
`

export const Wrapper = styled.div`
    h1{
        color: ${props => props.theme.brand_color.cor01};
        font-weight: 700;
        font-size: 34px;
        text-align: center;
        padding-top: 100px;
        padding-bottom: 60px;
    }
`
