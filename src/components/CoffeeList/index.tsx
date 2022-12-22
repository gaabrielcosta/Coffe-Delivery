import { CoffeeContainer } from './styles'
import { CoffeeCard } from '../CoffeeCard/index'
import Coffee from '../../types/Coffee'
import Expresso from '../../assets/Coffee/Expresso.svg'
import ExpressoAmericano from '../../assets/Coffee/ExpressoAmericano.svg'
import ExpressoCremoso from '../../assets/Coffee/ExpressoCremoso.svg'
import CaféGelado from '../../assets/Coffee/CaféGelado.svg'
import CaféComLeite from '../../assets/Coffee/CaféComLeite.svg'
import Latte from '../../assets/Coffee/Latte.svg'
import Capuccino from '../../assets/Coffee/Capuccino.svg'
import Mochaccino from '../../assets/Coffee/Mochaccino.svg'
import ChocolateQuante from '../../assets/Coffee/ChocolateQuente.svg'
import Cubano from '../../assets/Coffee/Cubano.svg'
import Havaiano from '../../assets/Coffee/Havaiano.svg'
import Árabe from '../../assets/Coffee/Árabe.svg'
import Irlandês from '../../assets/Coffee/Irlandês.svg'
import Macchiato from '../../assets/Coffee/Macchiato.svg'

export function CoffeeList() {
  const coffeeList = [
    {
      img: Expresso,
      tag: ['Tradicional'],
      title: 'Expresso Tradicional',
      description: 'O tradicional café feito com água quente e grãos moídos',
      price: '9,90',
    } as Coffee,
    {
      img: ExpressoAmericano,
      tag: ['Tradicional'],
      title: 'Expresso Americano',
      description: 'Expresso diluído, menos intenso que o tradicional',
      price: '9,90',
    } as Coffee,
    {
      img: ExpressoCremoso,
      tag: ['Tradicional'],
      title: 'Expresso Cremoso',
      description: 'Café expresso tradicional com espuma cremosa',
      price: '9,90',
    } as Coffee,
    {
      img: CaféGelado,
      tag: ['Tradicional', 'Gelado'],
      title: 'Expresso Gelado',
      description: 'Bebida preparada com café expresso e cubos de gelo',
      price: '9,90',
    } as Coffee,
    {
      img: CaféComLeite,
      tag: ['Tradicional', 'Com Leite'],
      title: 'Café com Leite',
      description: 'Meio a meio de expresso tradicional com leite vaporizado',
      price: '9,90',
    } as Coffee,
    {
      img: Latte,
      tag: ['Tradicional', 'Com Leite'],
      title: 'Latte',
      description:
        'Uma dose de café expresso com o dobro de leite e espuma cremosa',
      price: '9,90',
    } as Coffee,
    {
      img: Capuccino,
      tag: ['Tradicional', 'Com Leite'],
      title: 'Capuccino',
      description:
        'Bebida com canela feita de doses iguais de café, leite e espuma',
      price: '9,90',
    } as Coffee,
    {
      img: Macchiato,
      tag: ['Tradicional', 'Com Leite'],
      title: 'CapuccinoCapuccino',
      description:
        'Café expresso misturado com um pouco de leite quente e espuma',
      price: '9,90',
    } as Coffee,
    {
      img: Mochaccino,
      tag: ['Tradicional', 'Com Leite'],
      title: 'Mochaccino',
      description: 'Café expresso com calda de chocolate, pouco leite e espuma',
      price: '9,90',
    } as Coffee,
    {
      img: ChocolateQuante,
      tag: ['Especial', 'Com Leite'],
      title: 'Chocolate Quante',
      description:
        'Bebida feita com chocolate dissolvido no leite quente e café',
      price: '9,90',
    } as Coffee,
    {
      img: Cubano,
      tag: ['Especial', 'Alcoólico', 'Com Leite'],
      title: 'Cubano',
      description:
        'Drink gelado de café expresso com rum, creme de leite e hortelã',
      price: '9,90',
    } as Coffee,
    {
      img: Havaiano,
      tag: ['Especial'],
      title: 'Havaiano',
      description: 'Bebida adocicada preparada com café e leite de coco',
      price: '9,90',
    } as Coffee,
    {
      img: Árabe,
      tag: ['Especial'],
      title: 'Árabe',
      description: 'Bebida preparada com grãos de café árabe e especiarias',
      price: '9,90',
    } as Coffee,
    {
      img: Irlandês,
      tag: ['Especial', 'Alcoólico'],
      title: 'Irlandês',
      description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
      price: '9,90',
    } as Coffee,
  ]
  return (
    <>
      <CoffeeContainer>
        <div>
          <h2>Nossos cafés</h2>
        </div>
        <div className="coffeeList">
          {coffeeList.map((coffee) => (
            <CoffeeCard coffee={coffee} key={coffee.title} />
          ))}
        </div>
      </CoffeeContainer>
    </>
  )
}
