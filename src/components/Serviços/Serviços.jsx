import ScrollReveal from 'scrollreveal';
import { useEffect } from 'react';


import { Content, Corte, Imagens, Texto, Wrapper } from "./style";


import Corte01 from '../../assets/corte1.png'
import Corte02 from '../../assets/corte2.png'
import Corte03 from '../../assets/corte3.png'

export default function Serviços() {

    useEffect(()=>{
        ScrollReveal({reset:true})


        ScrollReveal().reveal('.corte1', {
            delay: 200,
            distance: '50px',
            origin: 'bottom',
        })

        ScrollReveal().reveal('.corte2', {
            delay: 600,
            distance: '50px',
            origin: 'bottom',
        })

        ScrollReveal().reveal('.corte3', {
            delay: 900,
            distance: '50px',
            origin: 'bottom',
        })
    })

    return (
        <>
            <Content>
                <Wrapper>
                    <Texto>
                        <h1>SERVIÇOS</h1>
                        <p>Lorem ipsum dolor sit amet consectetur. Ornare eget pellentesque proin risus. Orci proin morbi vestibulum convallis leo vestibulum mus. Non duis augue eros mattis a quis sem sodales.</p>
                    </Texto>

                    <Imagens>
                        <Corte className='corte1'>
                            <img src={Corte01} alt="corte" />
                            <div>
                                <p>Corte cabelo</p>
                                <span>R$ 45,00</span>
                            </div>
                        </Corte>
                        <Corte className='corte2'>
                            <img src={Corte02} alt="corte" />
                            <div>
                                <p>Barba completa</p>
                                <span>R$ 35,00</span>
                            </div>
                        </Corte>
                        <Corte className='corte3'>
                            <img src={Corte03} alt="corte" />
                            <div>
                                <p>Cabelo e barba</p>
                                <span>R$ 70,00</span>
                            </div>
                        </Corte>
                    </Imagens>
                </Wrapper>
            </Content>
        </>
    )
}