import React from 'react'
import OptionsPage from '../OptionsPage'
import { milkOptions } from '../../../lib/DrinkLib'

export default function MilkOptionsPage() {
  return <OptionsPage optionsAndCategories={milkOptions} />
}
