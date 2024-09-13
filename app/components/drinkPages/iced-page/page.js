import React from 'react'
import DrinkPage from '../DrinkPage'
import { icedDrinks } from '../drinkLib'

export default function IcedPage() {
  return <DrinkPage drinksAndCategories={icedDrinks} />
}
