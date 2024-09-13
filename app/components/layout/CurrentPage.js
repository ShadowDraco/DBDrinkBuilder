'use client'
import React, { useContext } from 'react'

import CarPage from '../drinkPages/car-page/page'
import FeaturedPage from '../drinkPages/featured-page/page'
import HotPage from '../drinkPages/hot-page/page'
import IcedPage from '../drinkPages/iced-page/page'
import BlendedPage from '../drinkPages/blended-page/page'
import MiscPage from '../drinkPages/misc-page/page'

import { drinkPages } from '../drinkPages/drinkLib'

import { PageContext } from '@/app/AppContext'

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
    default:
      return <CarPage />
  }
}
