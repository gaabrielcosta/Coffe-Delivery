import coffeeLogo from '../../assets/coffeeLogo.svg'
import { HeaderContainer } from './styles'
import { MapPin, ShoppingCart } from 'phosphor-react'

export function Header() {
  return (
    <HeaderContainer>
      <span>
        <img src={coffeeLogo} alt="" />
      </span>
      <nav>
        <a href="">
          <MapPin className="iconmap" size={24} weight="fill" />
          São Paulo - SP
        </a>
        <a href="">
          <ShoppingCart size={24} weight="fill" />
        </a>
      </nav>
    </HeaderContainer>
  )
}
