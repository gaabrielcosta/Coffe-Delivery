import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'
import imageHome from '../../assets/imageHome.svg'
import { HomeContainer, Option, Row, DivContainer } from './styles'

export default function Intro() {
  return (
    <HomeContainer>
      <div>
        <div>
          <h1>Encontre seu café perfeito para qualquer hora do dia</h1>
          <h2>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </h2>
        </div>
        <DivContainer>
          <Row width={231}>
            <Option>
              <ShoppingCart className="iconshop" size={32} weight="fill" />
              Compra simples e segura
            </Option>
            <Option>
              <Timer className="icontimer" size={32} weight="fill" />
              Entrega rápida e rastreada
            </Option>
          </Row>
          <Row width={294}>
            <Option>
              <Package className="iconpack" size={32} weight="fill" />
              Embalagem mantém o café intacto
            </Option>
            <Option>
              <Coffee className="iconcoffee" size={32} weight="fill" />O café
              fresquinho até você
            </Option>
          </Row>
        </DivContainer>
      </div>
      <span>
        <img src={imageHome} alt="" />
      </span>
    </HomeContainer>
  )
}
