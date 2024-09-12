import React from 'react'
import CarPage from '../pages/car-page/page'
import FeaturedPage from '../pages/featured-page/page'
import HotPage from '../pages/hot-page/page'
import IcedPage from '../pages/iced-page/page'
import BlendedPage from '../pages/blended-page/page'
import MiscPage from '../pages/misc-page/page'

export default function CurrentPage({
  currentPage,
  setOrderInformationSaved,
  setOrderInformation,
}) {
  const pages = [
    'car-page',
    'featured-page',
    'hot-page',
    'iced-page',
    'blended-page',
    'misc-page',
  ]
  switch (pages[currentPage]) {
    case 'car-page':
      return (
        <CarPage
          setOrderInformationSaved={setOrderInformationSaved}
          setOrderInformation={setOrderInformation}
        />
      )
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
      return (
        <CarPage
          setOrderInformationSaved={setOrderInformationSaved}
          setOrderInformation={setOrderInformation}
        />
      )
  }
}
