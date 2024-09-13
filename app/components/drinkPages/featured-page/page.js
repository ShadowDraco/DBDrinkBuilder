import React from 'react'
import DrinkPage from '../DrinkPage'
import { featuredDrinks } from '../drinkLib'

export default function FeaturedPage() {
  return <DrinkPage drinksAndCategories={featuredDrinks} />
}
