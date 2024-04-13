import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Sora:wght@100..800&display=swap');


    *{
        margin: 0px;
        padding: 0px;
        box-sizing: border-box;

        font-family: "Sora", sans-serif;
    }

    body{
        width: 100%;
        height: 100vh;

        background-color: ${props => props.theme.brand_color.cor01};

        transition: 0.1s;
    }

`