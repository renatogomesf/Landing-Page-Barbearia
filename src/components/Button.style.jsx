import styled from 'styled-components'

export const Button = styled.button`
    background-color: ${props => props.theme.colors.primary};
    color: white;
    cursor: pointer;
    width: 100px;
    height: 80px;
    border: 2px solid red;
`