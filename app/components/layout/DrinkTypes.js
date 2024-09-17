'use client'
import React, { useState, useContext } from 'react'
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid'

import { OrderContext, PageContext } from '@/app/AppContext'

import { drinkTypeTabs } from '@/app/DrinkLib'

export default function DrinkPageTabs() {
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

  const changeType = index => {
    if (orderInformationSaved && drinkSelected == false) {
      const newCurrentDrink = {
        flavors: {},
        sweetness: {},
        toppings: {},
        temp: 0,
        size: 1,
        name: '',
        milk: '',
        base: {
          name: '',
          index: 1000,
          milk: '',
          flavors: {},
          sweetness: {},
          toppings: {},
          temp: {},
        },
        index: 0,
      }
      setCurrentDrink(newCurrentDrink)
      setDrinkSelected(true)
      setDrinks([...drinks, newCurrentDrink])
      // +1 skips the car info page
      setCurrentPage(index + 1)
      setSelectedDrink(drinks.length)
    } else if (orderInformationSaved) {
      setCurrentPage(index + 1)
      setError('')
    } else {
      setError('Save Order Info first!')
    }
  }

  return (
    <ul className='p-2 flex flex-wrap w-full text-md gap-2 font-medium text-center bg-zinc-950 text-gray-300 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400'>
      {drinkTypeTabs.map((type, index) => {
        return (
          <li className='me-2 flex flex-1' key={`${type} ${index}`}>
            <button
              aria-current='page'
              onClick={() => {
                changeType(index)
              }}
              className={`bg-transparent text-gray-300 font-semibold hover:text-gray-300 py-2 px-4 hover:bg-zinc-800 rounded 
                  ${currentPage == index + 1 ? 'border border-gray-300' : ''}
              `}
            >
              {type}
            </button>
          </li>
        )
      })}
      <div className='flex flex-1 justify-end'>
        <p className='text-xs text-red-500'>{error}</p>
        <button>
          <MagnifyingGlassIcon className='size-8 text-gray-300 m-auto' />
        </button>
      </div>
    </ul>
  )
}
