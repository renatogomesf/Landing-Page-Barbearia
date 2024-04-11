import { Texto, Wrapper } from './style';

import ImgSobre from '../../assets/imagens.svg'

export default function Sobre() {
    return (
        <Wrapper>
            
            <img src={ImgSobre} alt="cortes" />

            <Texto>
                <h1>SOBRE</h1>

                <p>Lorem ipsum dolor sit amet consectetur. Ornare eget pellentesque proin risus. Orci proin morbi vestibulum convallis leo vestibulum mus. Non duis augue eros mattis a quis sem sodales.</p>

                <p>Horário de funcionamento: 09:00 ás 19:00</p>
            </Texto>

        </Wrapper>
    )
}