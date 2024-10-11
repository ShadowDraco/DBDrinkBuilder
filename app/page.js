'use client'
import React, { useState } from 'react'

import Summary from './components/layout/summary/Summary'
import CurrentPage from './components/layout/CurrentPage'
import { OrderContext, PageContext } from './AppContext'

export default function Home() {
  const [orderInformation, setOrderInformation] = useState({})
  const [drinks, setDrinks] = useState({})
  const [currentDrink, setCurrentDrink] = useState({})
  const [drinkSelected, setDrinkSelected] = useState(false)
  const [currentPage, setCurrentPage] = useState(0)
  const [orderInformationSaved, setOrderInformationSaved] = useState(false)
  const [selectedDrink, setSelectedDrink] = useState(0)

  return (
    <main className='flex min-h-screen'>
      <OrderContext.Provider
        value={{
          orderInformation,
          setOrderInformation,
          drinks,
          setDrinks,
          currentDrink,
          setCurrentDrink,
          drinkSelected,
          setDrinkSelected,
          selectedDrink,
          setSelectedDrink,
        }}
      >
        <PageContext.Provider
          value={{
            currentPage,
            setCurrentPage,
            orderInformationSaved,
            setOrderInformationSaved,
          }}
        >
          <Summary />
          <div className='w-full h-full bg-zinc-950'>
            <CurrentPage />
          </div>
        </PageContext.Provider>
      </OrderContext.Provider>
    </main>
  )
}
