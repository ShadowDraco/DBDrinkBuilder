'use client'
import React, { useState } from 'react'

export default function DrinkSizes({ currentDrink, setCurrentDrink }) {
  const sizes = ['Small', 'Medium', 'Large', '8oz', 'Kids', '32oz']
  const [error, setError] = useState('')

  const updateCurrentDrink = index => {
    const newDrink = currentDrink
    newDrink.size = index
    setCurrentDrink(newDrink)
  }

  return (
    <ul className='p-2 flex flex-wrap w-full text-md gap-2 font-medium text-center bg-zinc-950 text-gray-300 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400'>
      {sizes.map((size, index) => {
        return (
          <li className='me-2 flex flex-1' key={`${size} ${index}`}>
            <button
              aria-current='page'
              onClick={() => {
                updateCurrentDrink(index)
              }}
              className={`bg-transparent text-gray-300 font-semibold hover:text-gray-300 py-2 px-4 hover:bg-zinc-800 rounded 
                  ${currentDrink?.size == index ? 'border border-gray-300' : ''}
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
