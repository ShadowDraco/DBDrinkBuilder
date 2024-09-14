'use client'
import React, { useState, useContext } from 'react'
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid'

import { OrderContext, PageContext } from '@/app/AppContext'

export default function PageTabs() {
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

  const pages = ['Featured', 'Hot*', 'Iced*', 'Blended*', 'MISC.']
  const [error, setError] = useState('')

  const changePage = index => {
    if (orderInformationSaved && drinkSelected == false) {
      const newCurrentDrink = {
        flavors: {},
        sweet: {},
        toppings: {},
        temp: 5,
        size: 1,
        name: '',
        base: { name: '', index: 1000 },
        index: drinks.length,
      }
      setCurrentDrink(newCurrentDrink)
      setDrinkSelected(true)
      setDrinks([...drinks, newCurrentDrink])
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
      {pages.map((page, index) => {
        return (
          <li className='me-2 flex flex-1' key={`${page} ${index}`}>
            <button
              aria-current='page'
              onClick={() => {
                changePage(index)
              }}
              className={`bg-transparent text-gray-300 font-semibold hover:text-gray-300 py-2 px-4 hover:bg-zinc-800 rounded 
                  ${currentPage == index + 1 ? 'border border-gray-300' : ''}
              `}
            >
              {page}
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
