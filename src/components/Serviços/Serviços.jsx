import { Content, Corte, Imagens, Texto, Wrapper } from "./style";

import Corte01 from '../../assets/corte1.png'
import Corte02 from '../../assets/corte2.png'
import Corte03 from '../../assets/corte3.png'

export default function Serviços() {
    return (
        <>
            <Content>
                <Wrapper>
                    <Texto>
                        <h1>SERVIÇOS</h1>
                        <p>Lorem ipsum dolor sit amet consectetur. Ornare eget pellentesque proin risus. Orci proin morbi vestibulum convallis leo vestibulum mus. Non duis augue eros mattis a quis sem sodales.</p>
                    </Texto>

                    <Imagens>
                        <Corte>
                            <img src={Corte01} alt="corte" />
                            <div>
                                <p>Corte cabelo</p>
                                <span>R$ 45,00</span>
                            </div>
                        </Corte>
                        <Corte>
                            <img src={Corte02} alt="corte" />
                            <div>
                                <p>Barba completa</p>
                                <span>R$ 35,00</span>
                            </div>
                        </Corte>
                        <Corte>
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