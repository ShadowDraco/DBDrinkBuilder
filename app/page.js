'use client'
import React, { useState } from 'react'
import Summary from './components/layout/summary/Summary'
import CurrentPage from './components/layout/CurrentPage'

export default function Home() {
  const [orderInformation, setOrderInformation] = useState({})
  const [drinks, setDrinks] = useState({})
  const [currentDrink, setCurrentDrink] = useState()

  return (
    <main className='flex min-h-screen'>
      <Summary
        orderInformation={orderInformation}
        drinks={drinks}
        currentDrink={currentDrink}
        setCurrentDrink={setCurrentDrink}
      />
      <div className='w-full h-full bg-zinc-950'>
        <CurrentPage
          setOrderInformation={setOrderInformation}
          currentDrink={currentDrink}
          setDrinks={setDrinks}
          setCurrentDrink={setCurrentDrink}
        />
      </div>
    </main>
  )
}
