import React from 'react'
import DrinkPage from '../DrinkPage'
import { miscDrinks } from '../drinkLib'

export default function MiscPage() {
  return <DrinkPage drinksAndCategories={miscDrinks} />
}
