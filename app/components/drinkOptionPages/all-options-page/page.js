import React from 'react'
import OptionsPage from '../OptionsPage'
import { classicOptions, espressoOptions, milkOptions, sweetOptions, flavorOptions, toppingOptions } from '../../../DrinkLib'

export default function AllOptionsPage() {
  return <OptionsPage optionsAndCategories={[...classicOptions, ...espressoOptions, ...milkOptions, ...sweetOptions, ...flavorOptions, ...toppingOptions]} />
}
