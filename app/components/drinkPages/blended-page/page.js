import React from 'react'
import DrinkPage from '../DrinkPage'
import { blendedDrinks } from '../../../DrinkLib'

export default function BlendedPage() {
  return <DrinkPage drinksAndCategories={blendedDrinks} />
}
