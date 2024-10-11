'use client'
import React, { useState } from 'react'

import Summary from './components/layout/summary/Summary'
import CurrentPage from './components/layout/CurrentPage'

import Order from './lib/Order'
import { OrderContext, PageContext } from './AppContext'

export default function Home() {
  const [orders, setOrders] = useState([new Order()])
  const [currentOrder, setCurrentOrder] = useState(0)
  const [currentTray, setCurrentTray] = useState(currentOrder.currentTray)
  const [currentDrink, setCurrentDrink] = useState(
    currentOrder.currentTray.currentDrink
  )
  const [currentPage, setCurrentPage] = useState(0)
  const [drinkSelected, setDrinkSelected] = useState(false)
  const [selectedDrink, setSelectedDrink] = useState(0)

  return (
    <main className='flex min-h-screen'>
      <OrderContext.Provider
        value={{
          orders,
          setOrders,
          currentOrder,
          setCurrentOrder,
          currentTray,
          setCurrentTray,
          currentDrink,
          setCurrentDrink,
          drinkSelected,
          setDrinkSelected,
          selectedDrink,
          setSelectedDrink,
        }}
      >
        <Summary />
        <div className='w-full h-full bg-zinc-950'>
          <PageContext.Provider
            value={{
              currentPage,
              setCurrentPage,
              currentOrder,
              setCurrentOrder,
            }}
          >
            <CurrentPage />
          </PageContext.Provider>
        </div>
      </OrderContext.Provider>
    </main>
  )
}
