'use client'
import React, { useState } from 'react'
import DrinkPage from '../DrinkPage'

export default function FeaturedPage({
  orderInformationSaved,
  currentPage,
  setCurrentPage,
  currentDrink,
  setCurrentDrink,
}) {
  const [error, setError] = useState('')

  const featuredDrinks = [
    {
      name: 'Seasonal',
      theme: 'autumn',
      drinks: [
        { name: 'CPB Americano' },
        { name: 'CPB Mocha' },
        { name: 'CPB Latte' },
        { name: 'CPB Breve' },
        { name: 'CPB Oat Milk Latte' },
        { name: 'CPB Hot Protein Latte' },
      ],
    },
  ]

  return (
    <DrinkPage
      orderInformationSaved={orderInformationSaved}
      currentPage={currentPage}
      setCurrentPage={setCurrentPage}
      currentDrink={currentDrink}
      setCurrentDrink={setCurrentDrink}
      drinksAndCategories={featuredDrinks}
    />
  )
}
