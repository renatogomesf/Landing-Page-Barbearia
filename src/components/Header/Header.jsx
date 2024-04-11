
import { Wrapper, Top, Div, ButtonHeader, Sobre, ButtonSobre } from "./Style";


import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

import Logo from '../../assets/logo.svg'

export default function Header() {
    return (
        <>
            <Wrapper>
                <Top>
                    <Div>
                        <FaInstagram />
                        <FaFacebook />
                        <FaXTwitter />
                    </Div>

                    <img src={Logo} alt="logo" />

                    <ButtonHeader>Agendar horário</ButtonHeader>
                </Top>

                <Sobre>
                    <h1>ESTILO É UM REFLEXO DA SUA ATITUDE E SUA PERSONALIDADE.</h1>
                    <p>Horário de funcionamento: 09:00 ás 19:00</p>

                    <ButtonSobre>Agendar horário</ButtonSobre>

                </Sobre>
            </Wrapper>
        </>
    )
}