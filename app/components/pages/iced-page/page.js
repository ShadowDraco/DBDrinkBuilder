'use client'
import React, { useState } from 'react'
import DrinkPage from '../DrinkPage'

export default function IcedPage({
  orderInformationSaved,
  currentPage,
  setCurrentPage,
  currentDrink,
  setCurrentDrink,
  dutchFaves,
  dutchClassics,
  dutchChais,
}) {
  const [error, setError] = useState('')

  const icedDrinks = [
    {
      name: 'Iced Classics*',
      theme: 'ice',
      drinks: [...dutchClassics, { name: 'Iced Protein Latte' }],
    },
    {
      name: 'Iced Dutch Faves',
      theme: 'winter',
      drinks: [
        ...dutchFaves,
        { name: 'Iced Salted Caramel Protein Latte' },
        { name: 'Iced Salted caramel Protein Mocha' },
        { name: 'Iced Creamy Van Prot Latte' },
      ],
    },
    {
      name: 'Iced Chais',
      theme: 'pansy',
      drinks: [...dutchChais, { name: 'Iced Strawberry Horchata Chai' }],
    },
  ]

  return (
    <DrinkPage
      orderInformationSaved={orderInformationSaved}
      currentPage={currentPage}
      setCurrentPage={setCurrentPage}
      currentDrink={currentDrink}
      setCurrentDrink={setCurrentDrink}
      drinksAndCategories={icedDrinks}
    />
  )
}
