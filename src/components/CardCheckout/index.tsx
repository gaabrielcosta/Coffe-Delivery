import { Checkout } from './styles'
import DeliveryInfo from '../DeliveryInfo'
import { CoffeeSelected } from '../CoffeeSelected'

export function CardCheckout() {
  return (
    <Checkout>
      <DeliveryInfo />
      <CoffeeSelected />
    </Checkout>
  )
}
