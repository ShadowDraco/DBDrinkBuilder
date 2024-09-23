'use client'
import React, { useState, useContext } from 'react'
import { OrderContext } from '@/app/AppContext'
import { drinkSizeTabs } from '../../DrinkLib'

export default function DrinkSizes() {
  const { drinks, setDrinks, currentDrink, setCurrentDrink, drinkSelected } =
    useContext(OrderContext)

  const [error, setError] = useState('')
  const [currentSize, setCurrentSize] = useState(currentDrink.size)

  const updateCurrentDrink = index => {
    const newDrink = currentDrink
    newDrink.size = index
    setCurrentDrink(newDrink)

    const newDrinks = drinks
    newDrinks[newDrink.index] = newDrink
    setDrinks([...newDrinks])
  }

  return (
    <ul className='p-2 flex flex-wrap w-full text-md gap-2 font-medium text-center bg-zinc-950 text-gray-300 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400'>
      {drinkSizeTabs.map((size, index) => {
        return (
          <li className='me-2 flex flex-1' key={`${size}-${index}`}>
            <button
              aria-current='page'
              onClick={() => {
                updateCurrentDrink(index)
                if (drinkSelected) {
                  setCurrentSize(index)
                  setError('')
                } else {
                  setError('Select a drink first')
                }
              }}
              className={`bg-transparent text-gray-300 font-semibold hover:text-gray-300 py-2 px-4 hover:bg-zinc-800 rounded 
                  ${currentSize == index ? 'border border-gray-300' : ''}
              `}
            >
              {size}
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
//{`border-2 border-black w-fit rounded-md bg-zinc-950 hover:bg-zinc-900 ${selectedCar == index ? 'bg-gray-800' : '' }`}
//{`bg-transparent text-gray-300 font-semibold hover:text-gray-300 py-2 px-4 hover:bg-zinc-800 rounded ${currentDrink.size == index ? 'border border-gray-300' : ''}`}
