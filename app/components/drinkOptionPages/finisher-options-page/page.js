import React from 'react'
import OptionsPage from '../OptionsPage'
import { toppingOptions } from '../../../DrinkLib'
//TODO Add finisher Options
export default function FinisherOptionsPage() {
  return <OptionsPage optionsAndCategories={toppingOptions} />
}
