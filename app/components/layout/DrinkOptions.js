'use client'
import React, { useState, useContext } from 'react'
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid'

import { OrderContext, PageContext } from '@/app/AppContext'

import { drinkOptionTabs } from '@/app/DrinkLib'

export default function DrinkOptionTabs() {
  const {
    setCurrentDrink,
    drinks,
    setDrinks,
    drinkSelected,
    setDrinkSelected,
    setSelectedDrink,
  } = useContext(OrderContext)
  const { currentPage, setCurrentPage, orderInformationSaved } =
    useContext(PageContext)

  const [error, setError] = useState('')

  const changePage = index => {
    console.log(orderInformationSaved, drinkSelected)
    if (orderInformationSaved && drinkSelected) {
      // + 7 skips the normal page types and goes to option page types
      setCurrentPage(index 
        + 7)
      setError('')
    } else {
      setError('Select a drink first!')
    }
  }

  return (
    <ul className='p-2 flex flex-wrap w-full text-md gap-2 font-medium text-center bg-zinc-950 text-gray-300 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400'>
      {drinkOptionTabs.map((tab, index) => {
        return (
          <li className='me-2 flex flex-1' key={`${tab} ${index}`}>
            <button
              aria-current='page'
              onClick={() => {
                changePage(index)
              }}
              className={`bg-transparent text-gray-300 font-semibold hover:text-gray-300 py-2 px-4 hover:bg-zinc-800 rounded 
                  ${currentPage == index + 1 ? 'border border-gray-300' : ''}
              `}
            >
              {tab}
            </button>
          </li>
        )
      })}
      <div className='flex flex-1 justify-end'>
        <p className='text-xs text-red-500'>{error}</p>
      </div>
    </ul>
  )
}
