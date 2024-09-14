import React from 'react'
import DrinkPage from '../DrinkPage'
import { icedDrinks } from '../../../DrinkLib'

export default function IcedPage() {
  return <DrinkPage drinksAndCategories={icedDrinks} />
}
