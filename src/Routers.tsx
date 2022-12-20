import { Routes, Route } from 'react-router-dom'
import { DefaultLayout } from './layouts/DefaultLayout/index'
import { Checkout } from './pages/Checkout'
import { Home } from './pages/Home'
import { OrderFinished } from './pages/OrderFinished'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/orderfinished" element={<OrderFinished />} />
      </Route>
    </Routes>
  )
}
