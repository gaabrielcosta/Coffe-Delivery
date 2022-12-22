import { ShoppingCart } from 'phosphor-react'
import { Buy, Card, Specs } from './styles'
import Coffee from '../../types/Coffee'

type Props = {
  coffee: Coffee
}

export function CoffeeCard({ coffee }: Props) {
  return (
    <Card>
      <div>
        <Specs>
          <img src={coffee.img} alt="" />
          <div className="tags">
            {coffee.tag.map((tag) => (
              <span className="tag" key={tag}>
                {tag}
              </span>
            ))}
          </div>
          <span className="title">{coffee.title}</span>
          <span className="description">{coffee.description}</span>
        </Specs>
        <Buy>
          <div className="test">
            <div className="price">
              <span>R$</span>
              <span>{coffee.price}</span>
            </div>
            <div className="actions">
              <input type="number" min="1" max="9" />
              <button>
                <ShoppingCart size={24} weight="fill" />
              </button>
            </div>
          </div>
        </Buy>
      </div>
    </Card>
  )
}
