import React, { useState } from 'react'
import CarPage from '../pages/car-page/page'
import FeaturedPage from '../pages/featured-page/page'
import HotPage from '../pages/hot-page/page'
import IcedPage from '../pages/iced-page/page'
import BlendedPage from '../pages/blended-page/page'
import MiscPage from '../pages/misc-page/page'

export default function CurrentPage({
  setOrderInformation,
  setDrinks,
  setCurrentDrink,
}) {
  const [currentPage, setCurrentPage] = useState(0)
  const [orderInformationSaved, setOrderInformationSaved] = useState(false)

  const pages = [
    'car-page',
    'featured-page',
    'hot-page',
    'iced-page',
    'blended-page',
    'misc-page',
  ]
  switch (pages[currentPage]) {
    case 'featured-page':
      return (
        <FeaturedPage
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          orderInformationSaved={orderInformationSaved}
        />
      )
    case 'hot-page':
      return (
        <HotPage
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          orderInformationSaved={orderInformationSaved}
        />
      )
    case 'iced-page':
      return (
        <IcedPage
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          orderInformationSaved={orderInformationSaved}
        />
      )
    case 'blended-page':
      return (
        <BlendedPage
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          orderInformationSaved={orderInformationSaved}
        />
      )
    case 'misc-page':
      return (
        <MiscPage
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          orderInformationSaved={orderInformationSaved}
        />
      )
    default:
      return (
        <CarPage
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          orderInformationSaved={orderInformationSaved}
          setOrderInformationSaved={setOrderInformationSaved}
          setOrderInformation={setOrderInformation}
        />
      )
  }
}
