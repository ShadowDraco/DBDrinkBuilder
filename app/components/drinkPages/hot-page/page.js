import React from 'react'
import DrinkPage from '../DrinkPage'
import { hotDrinks } from '../../../DrinkLib'

export default function HotPage() {
  return <DrinkPage drinksAndCategories={hotDrinks} />
}
