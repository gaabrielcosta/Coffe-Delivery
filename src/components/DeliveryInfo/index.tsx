import {
  MapPinLine,
  CurrencyDollar,
  CreditCard,
  Bank,
  Money,
} from 'phosphor-react'
import { Title, Card, Payment } from './styles'

export default function DeliveryInfo() {
  return (
    <div>
      <Title>
        <span>Complete seu pedido</span>
      </Title>
      <Card>
        <div className="SubTitle">
          <MapPinLine className="iconmap" size={24} />
          <div>
            <h2>Endereço de Entrega</h2>
            <h3>Informe o endereço onde deseja receber seu pedido</h3>
          </div>
        </div>
        <div>
          <form method="get" action=".">
            <label>
              <input
                name="cep"
                type="text"
                id="cep"
                className="cep"
                value=""
                placeholder="CEP"
              />
            </label>
            <br />

            <label>
              <input
                name="rua"
                type="text"
                id="rua"
                className="rua"
                placeholder="Rua"
              />
            </label>
            <br />
            <label className="inputtest">
              <input
                name="numero"
                type="text"
                id="numero"
                className="number"
                placeholder="Número"
              />
              <input
                name="complemento"
                type="text"
                id="complemento"
                className="complemento"
                placeholder="Complemento"
              />
            </label>
            <br />
            <label className="inputtest">
              <input
                name="bairro"
                type="text"
                id="bairro"
                className="bairro"
                placeholder="Bairro"
              />
              <input
                name="cidade"
                type="text"
                id="cidade"
                className="cidade"
                placeholder="Cidade"
              />
              <input
                name="uf"
                type="text"
                id="uf"
                className="uf"
                placeholder="UF"
              />
            </label>
            <br />
          </form>
        </div>
      </Card>
      <Payment>
        <div className="PayTitle">
          <CurrencyDollar className="iconpay" size={24} />
          <div>
            <h2>Pagamento</h2>
            <h3>
              O pagamento é feito na entrega. Escolha a forma que deseja pagar
            </h3>
          </div>
        </div>
        <div className="buttons">
          <button>
            <CreditCard className="iconcredit" size={16} />
            Cartão de Crédito
          </button>
          <button>
            <Bank className="iconbank" size={16} />
            Cartão de Débito
          </button>
          <button>
            <Money className="iconmoney" size={16} />
            Dinheiro
          </button>
        </div>
      </Payment>
    </div>
  )
}
