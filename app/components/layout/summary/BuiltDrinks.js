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
        setCurrentDrink({})
      }}
    >
      <div className='flex flex-col gap-3'>
        {drinks.length > 0 &&
          drinks.map((drink, index) => {
            const drinkSize = abbDrinkSizes[drink.size]
            const drinkTemp = drinkTemps[drink.temp]
            const hasMilk = drink.base.milk != '' || drink.milk != ''
            const hasBase =
              drink?.base?.name != '' && drink?.base?.index != 1000

            return (
              <div
                key={`drink-${index}`}
                onClick={event => {
                  setSelectedDrink(index)
                  setCurrentDrink(prevDrink => drinks[index])
                  setDrinkSelected(true)
                  event.stopPropagation()
                }}
              >
                <div
                  className={`bg-blue-500 text-white px-1 mb-2 ${
                    selectedDrink == index ? 'border-2 border-white' : ''
                  }`}
                >
                  {hasMilk || hasBase ? drinkSize : ''}{' '}
                  {hasMilk && !hasBase ? drink.milk : ''}
                  {hasMilk || hasBase ? drinkTemp : ''} {drink.name}
                </div>
                <div className='bg-zinc-1000'>
                  {Object.values(drink.options).map((optionValue, i) => {
                    return Object.values(optionValue).map((option, j) => {
                      return (
                        <div key={`${option.name}-${i}-${j}`}>
                          {option.count} {option.name}
                        </div>
                      )
                    })
                  })}
                </div>
              </div>
            )
          })}
      </div>
      {drinkSelected && (
        <p className='text-xs text-wrap text-balance'>
          Tap in this area ^^ to start a new drink.
        </p>
      )}
    </div>
  )
}
