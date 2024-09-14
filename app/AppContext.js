import { createContext } from 'react'

export const OrderContext = createContext({
  currentDrink: {
    flavors: {},
    sweet: {},
    toppings: {},
    temp: 0,
    size: 1,
    name: '',
    base: { name: '', index: 1000 },
    index: 0,
  },
  OrderInformation: { color: 0, car: 0, comment: '' },
  drinks: [],
  drinkSelected: false,
})
export const PageContext = createContext({ currentPage: 0 })
