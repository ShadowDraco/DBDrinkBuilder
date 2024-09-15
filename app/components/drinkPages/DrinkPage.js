'use client'
import React, { useState, useContext } from 'react'
import PageTabs from '../layout/DrinkTypes'
import DrinkSizes from '../layout/DrinkSizes'
import { drinkBuilderThemes } from '../../DrinkLib'
import { OrderContext } from '@/app/AppContext'
import DrinkOptions from '../layout/DrinkOptions'

export default function DrinkPage({ drinksAndCategories }) {
  const { drinks, setDrinks, currentDrink, setCurrentDrink } =
    useContext(OrderContext)
  const [error, setError] = useState('')
  const [currentBase, setCurrentBase] = useState(currentDrink.base)

  const updateCurrentDrink = (drink, category, index) => {
    let newDrink = currentDrink
    newDrink.name = drink.name
    newDrink.base = { name: category.name, index }

    if (drink.temp != undefined) {
      newDrink.temp = drink.temp
    } else if (category.temp != undefined) {
      newDrink.temp = category.temp
    } else {
      newDrink.temp = 5
    }

    // TODO - add default sweet, flavor, toppings, etc
    setCurrentDrink(newDrink)

    const newDrinks = drinks
    newDrinks[newDrink.index] = newDrink
    setDrinks([...newDrinks])
  }
  return (
    <div className='bg-zinc-950 p-2 min-h-screen w-full'>
      <div className=''>
        <PageTabs />

        <div className='flex'>
          <div className='w-full bg-zinc-950'>
            <DrinkSizes />

            <div className='p-2'>
              {drinksAndCategories.map((category, index) => {
                return (
                  <div key={`${category.name}-${index}`} className='my-5'>
                    <p>{category.name}</p>
                    <div className='grid sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 my-2'>
                      {category.drinks.map((drink, index) => {
                        return (
                          <div key={`${drink}-${index}`} className=''>
                            <button
                              onClick={() => {
                                updateCurrentDrink(drink, category, index)
                                setCurrentBase({ name: category.name, index })
                              }}
                              className={`px-2 py-4 text-md font-semibold w-full h-full text-center text-white transition duration-300 rounded-lg ${
                                drinkBuilderThemes[category.theme]
                                  .buttonClassName
                              } ${
                                currentBase.name == category.name &&
                                currentBase.index == index
                                  ? 'border-2 border-white'
                                  : ''
                              } `}
                            >
                              {drink.name}
                            </button>
                          </div>
                        )
                      })}
                    </div>
                  </div>
                )
              })}
            </div>
            <DrinkOptions />
          </div>
        </div>
      </div>
    </div>
  )
}
