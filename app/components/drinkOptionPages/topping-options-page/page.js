import React from 'react'
import OptionsPage from '../OptionsPage'
import { toppingOptions } from '../../../lib/DrinkLib'

export default function ToppingOptionsPage() {
  return <OptionsPage optionsAndCategories={toppingOptions} />
}
