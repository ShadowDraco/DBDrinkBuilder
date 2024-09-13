import React from 'react'
import DrinkPage from '../DrinkPage'
import { hotDrinks } from '../drinkLib'

export default function FeaturedPage() {
  return <DrinkPage drinksAndCategories={hotDrinks} />
}
