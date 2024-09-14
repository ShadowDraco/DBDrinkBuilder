import React from 'react'
import DrinkPage from '../DrinkPage'
import { miscDrinks } from '../../../DrinkLib'

export default function MiscPage() {
  return <DrinkPage drinksAndCategories={miscDrinks} />
}
