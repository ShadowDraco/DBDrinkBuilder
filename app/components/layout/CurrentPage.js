'use client'
import React, { useContext } from 'react'

import CarPage from '../drinkPages/car-page/page'
import FeaturedPage from '../drinkPages/featured-page/page'
import HotPage from '../drinkPages/hot-page/page'
import IcedPage from '../drinkPages/iced-page/page'
import BlendedPage from '../drinkPages/blended-page/page'
import MiscPage from '../drinkPages/misc-page/page'

import { drinkPages } from '../../DrinkLib'

import { PageContext } from '@/app/AppContext'
import AllOptionsPage from '../drinkOptionPages/all-options-page/page'
import MilkOptionsPage from '../drinkOptionPages/milk-options-page/page'
import SweetOptionsPage from '../drinkOptionPages/sweet-options-page/page'
import FlavorOptionsPage from '../drinkOptionPages/flavor-options-page/page'
import ToppingOptionsPage from '../drinkOptionPages/topping-options-page/page'
import FinisherOptionsPage from '../drinkOptionPages/finisher-options-page/page'

export default function CurrentPage() {
  const { currentPage } = useContext(PageContext)
  switch (drinkPages[currentPage]) {
    case 'featured-page':
      return <FeaturedPage />
    case 'hot-page':
      return <HotPage />
    case 'iced-page':
      return <IcedPage />
    case 'blended-page':
      return <BlendedPage />
    case 'misc-page':
      return <MiscPage />
    case 'all-options-page':
      return <AllOptionsPage />
    case 'milk-options-page':
      return <MilkOptionsPage />
    case 'sweet-options-page':
      return <SweetOptionsPage />
    case 'flavor-options-page':
      return <FlavorOptionsPage />
    case 'topping-options-page':
      return <ToppingOptionsPage />
    case 'finisher-options-page':
      return <FinisherOptionsPage />
    default:
      return <CarPage />
  }
}
