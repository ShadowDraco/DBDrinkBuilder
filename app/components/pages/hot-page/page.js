'use client'
import React, { useState } from 'react'
import DrinkPage from '../DrinkPage'

export default function FeaturedPage({
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

  const hotDrinks = [
    {
      name: 'Hot Classics*',
      theme: 'lava',
      drinks: [...dutchClassics, { name: 'Hot Protein Latte' }],
    },
    {
      name: 'Hot Dutch Faves',
      theme: 'fire',
      drinks: [
        ...dutchFaves,
        { name: 'Hot Salted Caramel Protein Latte' },
        { name: 'Hot Salted Caramel Protein Mocha' },
        { name: 'Hot Creamy Van Prot Latte' },
      ],
    },
    { name: 'Hot Chais', theme: 'pumpkin', drinks: [...dutchChais] },
  ]

  return (
    <DrinkPage
      orderInformationSaved={orderInformationSaved}
      currentPage={currentPage}
      setCurrentPage={setCurrentPage}
      currentDrink={currentDrink}
      setCurrentDrink={setCurrentDrink}
      drinksAndCategories={hotDrinks}
    />
  )
}
