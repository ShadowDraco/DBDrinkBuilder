'use client'
import React, { useState } from 'react'
import DrinkPage from '../DrinkPage'

export default function MiscPage({
  orderInformationSaved,
  currentPage,
  setCurrentPage,
  currentDrink,
  setCurrentDrink,
  dutchFaves,
  dutchClassics,
}) {
  const [error, setError] = useState('')

  const miscDrinks = [
    {
      name: 'Straws',
      theme: 'pomegranate',
      drinks: [
        { name: 'Kids Straw' },
        { name: 'Straw' },
        { name: 'Boba Straw' },
      ],
    },
    {
      name: 'Baked Goods',
      theme: 'custom',
      drinks: [
        { name: 'Choc Chip Muffin Top' },
        { name: 'Granola Bar' },
        { name: 'Lemon Poppyseed Muffin Top' },
        { name: 'Orange Cran Muffin Top' },
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
      drinksAndCategories={miscDrinks}
    />
  )
}
