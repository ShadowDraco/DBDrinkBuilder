import React from 'react'
import DrinkPage from '../DrinkPage'
import { icedDrinks } from '../../../lib/DrinkLib'

export default function IcedPage() {
  return <DrinkPage drinksAndCategories={icedDrinks} />
}
