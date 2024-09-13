'use client'
import React, { useState } from 'react'
import DrinkPage from '../DrinkPage'

export default function BlendedPage({
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

  const blendedDrinks = [
    {
      name: 'Blended Classics*',
      theme: 'water',
      drinks: [
        { name: 'Dutch Freeze' },
        { name: 'Mocha' },
        { name: 'Carburator' },
      ],
    },
    {
      name: 'Blended Dutch Faves',
      theme: 'iceLake',
      drinks: [...dutchFaves, { name: 'Campin Freeze' }],
    },
    {
      name: 'Blended Chais',
      theme: 'midnight',
      drinks: [...dutchChais, { name: 'Blended Strawberry Horchata Chai' }],
    },
  ]

  return (
    <DrinkPage
      orderInformationSaved={orderInformationSaved}
      currentPage={currentPage}
      setCurrentPage={setCurrentPage}
      currentDrink={currentDrink}
      setCurrentDrink={setCurrentDrink}
      drinksAndCategories={blendedDrinks}
    />
  )
}
