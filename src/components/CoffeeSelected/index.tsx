import { Trash } from 'phosphor-react'
import { Title, Card } from './styles'
import Expresso from '../../assets/Coffee/Expresso.svg'
import Latte from '../../assets/Coffee/Latte.svg'

export function CoffeeSelected() {
  return (
    <div>
      <Title>
        <span>Cafés selecionados</span>
      </Title>

      <Card>
        <div className="title1">
          <img src={Expresso} alt="" />
          <div className="title2">
            <h3>Expresso Tradicional</h3>
            <div className="title3">
              <input type="number" />
              <button className="remove">
                <Trash className="thash" size={16} />
                REMOVER
              </button>
            </div>
          </div>
          <div>
            <span>R$ 9,90</span>
          </div>
        </div>
        <div className="divider"></div>
        <div className="title1">
          <img src={Latte} alt="" />
          <div className="title2">
            <h3>Latte</h3>
            <div className="title3">
              <input type="number" />
              <button className="remove">
                <Trash className="thash" size={16} />
                REMOVER
              </button>
            </div>
          </div>
          <div>
            <span>R$ 19,80</span>
          </div>
        </div>
        <div className="divider"></div>
        <div className="prices">
          <div className="itens">
            <span className="totalitens">Total de itens</span>
            <span className="price">R$ 9,90</span>
          </div>
          <div className="itens">
            <span className="totalitens">Entrega</span>
            <span className="price">R$ 3,50</span>
          </div>
          <div className="itens">
            <span className="total">TOTAL</span>
            <span className="total">R$ 33,20</span>
          </div>
        </div>
        <div>
          <button className="confirm">CONFIRMAR PEDIDO</button>
        </div>
      </Card>
    </div>
  )
}
