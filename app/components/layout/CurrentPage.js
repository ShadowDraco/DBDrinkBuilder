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
  currentDrink,
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

  const dutchClassics = [
    { name: 'Americano' },
    { name: 'Mocha' },
    { name: 'Latte' },
    { name: 'Breve' },
    { name: 'Oat Milk Latte' },
  ]

  const dutchFaves = [
    { name: 'Kicker' },
    { name: 'Caramelizer' },
    { name: 'Annihilator' },
    { name: 'Golden Eagle' },
    { name: 'Cocomo' },
    { name: '911' },
    { name: 'Double Torture' },
    { name: 'White Mocha' },
    { name: "Vanilla Latte"}
  ]

  const dutchChais = [
    { name: 'Chai' },
    { name: 'Golden Eagle Chai' },
    { name: 'Christmas Morning Chai' },
    { name: 'Horchata Chai' },
    { name: 'White Zombie Chai' },
  ]
  switch (pages[currentPage]) {
    case 'featured-page':
      return (
        <FeaturedPage
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          orderInformationSaved={orderInformationSaved}
          currentDrink={currentDrink}
          setCurrentDrink={setCurrentDrink}
          dutchFaves={dutchFaves}
          dutchClassics={dutchClassics}
          dutchChais={dutchChais}
        />
      )
    case 'hot-page':
      return (
        <HotPage
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          orderInformationSaved={orderInformationSaved}
          dutchFaves={dutchFaves}
          dutchClassics={dutchClassics}
          dutchChais={dutchChais}
        />
      )
    case 'iced-page':
      return (
        <IcedPage
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          orderInformationSaved={orderInformationSaved}
          dutchFaves={dutchFaves}
          dutchClassics={dutchClassics}
          dutchChais={dutchChais}
        />
      )
    case 'blended-page':
      return (
        <BlendedPage
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          orderInformationSaved={orderInformationSaved}
          dutchFaves={dutchFaves}
          dutchClassics={dutchClassics}
          dutchChais={dutchChais}
        />
      )
    case 'misc-page':
      return (
        <MiscPage
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          orderInformationSaved={orderInformationSaved}
          dutchFaves={dutchFaves}
          dutchClassics={dutchClassics}
          dutchChais={dutchChais}
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
          setCurrentDrink={setCurrentDrink}
          dutchChais={dutchChais}
        />
      )
  }
}
