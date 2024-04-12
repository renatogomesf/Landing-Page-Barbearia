import ScrollReveal from "scrollreveal";
import { useEffect } from "react";

import { Content, Div, Img, Wrapper, Whats } from "./style";

import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

import Logo from '../../assets/logo.svg'
import Wpp from '../../assets/whatssapp.svg'


export default function Footer() {

    useEffect(()=>{
        ScrollReveal({reset:true})

        ScrollReveal().reveal('.whats', {
            delay: 200,
            distance: '30px',
            origin: 'right',
        })
    })

    return (
        <>
            <Content>
                <Wrapper>
                    <Div>
                        <a href="">
                            <FaInstagram />
                        </a>
                        <a href="">
                            <FaFacebook />
                        </a>
                        <a href="">
                            <FaXTwitter />
                        </a>
                    </Div>
                    
                    <Img>
                        <img src={Logo} alt="logo" />
                    </Img>

                    <p>Copyright© 2023 | Dev Barbearia - Todos os direitos reservados.</p>
                </Wrapper>

                <Whats className="whats">
                    <img src={Wpp} alt="whatsapp" />
                </Whats>
            </Content>
        </>
    )
}