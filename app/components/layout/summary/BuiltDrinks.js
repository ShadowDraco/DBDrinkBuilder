import React, { useContext, useState } from 'react'
import { OrderContext } from '@/app/AppContext'
import { abbDrinkSizes, drinkTemps } from '../../../DrinkLib'

export default function BuiltDrinks() {
  const {
    drinks,
    setCurrentDrink,
    drinkSelected,
    setDrinkSelected,
    selectedDrink,
    setSelectedDrink,
  } = useContext(OrderContext)

  return (
    <div
      className={`p-2 flex flex-col flex-1 gap-3 justify-between pb-5 h-full ${
        !drinkSelected && 'border-2 border-gray-500'
      }`}
      onClick={() => {
        setDrinkSelected(false)
      }}
    >
      <div className='flex flex-col gap-3'>
        {drinks.length > 0 &&
          drinks.map((drink, index) => {
            return (
              <div
                onClick={event => {
                  setSelectedDrink(index)
                  setCurrentDrink(prevDrink => drinks[index])
                  setDrinkSelected(true)
                  event.stopPropagation()
                }}
                key={`drink-${index}`}
                className={`bg-blue-500 text-white px-1 ${
                  selectedDrink == index ? 'border-2 border-white' : ''
                }`}
              >
                {abbDrinkSizes[drink.size]} {drinkTemps[drink.temp]}{' '}
                {drink.name}
              </div>
            )
          })}
      </div>
      <p className='text-xs text-wrap text-balance'>
        Tap in this area ^^ to start a new drink.
      </p>
    </div>
  )
}
