import React from 'react'
import OptionsPage from '../OptionsPage'
import { flavorOptions } from '../../../DrinkLib'

export default function FlavorOptionsPage() {
  return <OptionsPage optionsAndCategories={flavorOptions} />
}
