import { createContext } from 'react'

export const OrderContext = createContext({
  currentDrink: {
    flavors: {},
    sweetness: {},
    toppings: {},
    temp: 0,
    size: 1,
    name: '',
    milk: '',
    base: {
      name: '',
      index: 1000,
      milk: '',
      flavors: {},
      sweetness: {},
      toppings: {},
      temp: {},
    },
    index: 0,
  },
  OrderInformation: { color: 0, car: 0, comment: '' },
  drinks: [],
  drinkSelected: false,
})
export const PageContext = createContext({ currentPage: 0 })
