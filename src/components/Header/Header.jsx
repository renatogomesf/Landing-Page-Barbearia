import ScrollReveal from "scrollreveal";
import { useEffect } from "react";

import { Wrapper, Top, Div, ButtonHeader, Sobre, ButtonSobre, Content } from "./Style";


import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

import Logo from '../../assets/logo.svg'

export default function Header() {

    useEffect(()=>{
        ScrollReveal({reset:true})

        var delay = 300

        ScrollReveal().reveal('.redes', {
            delay: delay,
            distance: '50px',
            origin: 'left',
        })

        ScrollReveal().reveal('.logo', {
            delay: delay,
            rotate: {x:90},
        })

        ScrollReveal().reveal('.btn', {
            delay: delay,
            distance: '50px',
            origin: 'right',
        })

        ScrollReveal().reveal('.sobre', {
            delay: delay,
            distance: '50px',
            origin: 'bottom',
        })
    })

    return (
        <>
            <Content>
                <Wrapper>
                    <Top>
                        <Div className="redes">
                            <FaInstagram />
                            <FaFacebook />
                            <FaXTwitter />
                        </Div>

                        <img className="logo" src={Logo} alt="logo" />

                        <ButtonHeader className="btn">Agendar horário</ButtonHeader>
                    </Top>

                    <Sobre className="sobre">
                        <h1>ESTILO É UM REFLEXO DA SUA ATITUDE E SUA PERSONALIDADE.</h1>
                        <p>Horário de funcionamento: 09:00 ás 19:00</p>

                        <ButtonSobre>Agendar horário</ButtonSobre>
                    </Sobre>
                </Wrapper>
            </Content>
        </>
    )
}