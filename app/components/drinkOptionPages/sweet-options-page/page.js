import React from 'react'
import OptionsPage from '../OptionsPage'
import { sweetOptions } from '../../../lib/DrinkLib'

export default function SweetOptionsPage() {
  return <OptionsPage optionsAndCategories={sweetOptions} />
}
