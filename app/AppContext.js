import { createContext } from 'react'
import { emptyDrink, emptyOrderInformation } from './lib/DrinkLib'
export const OrderContext = createContext({
  currentDrink: emptyDrink,
  OrderInformation: emptyOrderInformation,
  drinks: [],
  drinkSelected: false,
})
export const PageContext = createContext({ currentPage: 0 })
