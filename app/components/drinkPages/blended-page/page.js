import React from 'react'
import DrinkPage from '../DrinkPage'
import { blendedDrinks } from '../../../lib/DrinkLib'

export default function BlendedPage() {
  return <DrinkPage drinksAndCategories={blendedDrinks} />
}
