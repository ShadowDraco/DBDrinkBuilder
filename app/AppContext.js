import { createContext } from 'react'
import OrderInformation from './components/drinkPages/car-page/OrderInformation'

export const OrderContext = createContext({
  currentDrink: {
    flavors: {},
    sweet: {},
    toppings: {},
    temp: 0,
    size: 1,
    name: '',
  },
  OrderInformation: { color: 0, car: 0, comment: '' },
})
export const PageContext = createContext({ currentPage: 0 })
