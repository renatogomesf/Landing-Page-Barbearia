import { Content, Div, Img, Wrapper, Whats } from "./style";

import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

import Logo from '../../assets/logo.svg'
import Wpp from '../../assets/whatssapp.svg'


export default function Footer() {
    return (
        <>
            <Content>
                <Wrapper>
                    <Div>
                        <FaInstagram />
                        <FaFacebook />
                        <FaXTwitter />
                    </Div>
                    
                    <Img>
                        <img src={Logo} alt="logo" />
                    </Img>

                    <p>Copyright© 2023 | Dev Barbearia - Todos os direitos reservados.</p>
                </Wrapper>

                <Whats>
                    <img src={Wpp} alt="" />
                </Whats>
            </Content>
        </>
    )
}