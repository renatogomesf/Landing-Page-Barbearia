import ScrollReveal from 'scrollreveal';
import { useEffect } from 'react';


import { Content, Texto, Wrapper } from './style';


import ImgSobre from '../../assets/imagens.svg'

export default function Sobre() {

    useEffect(()=>{
        ScrollReveal({reset:true})

        var delay = 200

        ScrollReveal().reveal('.corte', {
            delay: delay,
            distance: '30px',
            origin: 'right',
        })

        ScrollReveal().reveal('.texto', {
            delay: delay,
            distance: '50px',
            origin: 'bottom',
        })
    })

    return (
        <>
            <Content>
                <Wrapper>
                    
                    <img className='corte' src={ImgSobre} alt="cortes" />

                    <Texto className='texto'>
                        <h1>SOBRE</h1>

                        <p>Lorem ipsum dolor sit amet consectetur. Ornare eget pellentesque proin risus. Orci proin morbi vestibulum convallis leo vestibulum mus. Non duis augue eros mattis a quis sem sodales.</p>

                        <p>Horário de funcionamento: 09:00 ás 19:00</p>
                    </Texto>

                </Wrapper>
            </Content>
        </>
    )
}