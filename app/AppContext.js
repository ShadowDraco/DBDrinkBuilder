import { createContext } from 'react'

import Order from './lib/Order'

export const OrderContext = createContext({
  orders: [new Order()],
  currentOrder: this.orders[0],
  currentTray: this.orders[0].trays[0],
  currentDrink: {},
  drinkSelected: false,
})
export const PageContext = createContext({ currentPage: 0 })
