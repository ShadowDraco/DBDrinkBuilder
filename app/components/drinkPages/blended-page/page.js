import React from 'react'
import DrinkPage from '../DrinkPage'
import { blendedDrinks } from '../drinkLib'

export default function BlendedPage() {
  return <DrinkPage drinksAndCategories={blendedDrinks} />
}
