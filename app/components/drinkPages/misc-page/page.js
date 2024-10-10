import React from 'react'
import DrinkPage from '../DrinkPage'
import { miscDrinks } from '../../../lib/DrinkLib'

export default function MiscPage() {
  return <DrinkPage drinksAndCategories={miscDrinks} />
}
