'use client'
import React, { useState, useContext } from 'react'
import PageTabs from '../layout/DrinkTypes'
import DrinkSizes from '../layout/DrinkSizes'
import { drinkBuilderThemes } from '../../lib/DrinkLib'
import { OrderContext, PageContext } from '@/app/AppContext'
import DrinkOptions from '../layout/DrinkOptions'

export default function DrinkPage({ drinksAndCategories }) {
  const {
    drinks,
    setDrinks,
    currentDrink,
    setCurrentDrink,
    drinkSelected,
    setDrinkSelected,
    setSelectedDrink,
  } = useContext(OrderContext)

  const { orderInformationSaved } = useContext(PageContext)

  const [error, setError] = useState('')
  const [currentBase, setCurrentBase] = useState(currentDrink.base)

  const updateCurrentDrink = (drink, category, index) => {
    let newDrink = currentDrink
    newDrink.name = drink.name
    newDrink.milk = category.milk || drink.milk || ''
    newDrink.base = { name: drink.name, milk: drink.milk || '', index: index }
    if (drink.temp != undefined) {
      newDrink.temp = drink.temp
    } else if (category.temp != undefined) {
      newDrink.temp = category.temp
    } else {
      newDrink.temp = 6
    }
    setCurrentDrink(newDrink)

    const newDrinks = drinks
    newDrinks[newDrink.index] = newDrink
    setDrinks([...newDrinks])
  }

  const createNewDrink = (drink, category, index) => {
    const newCurrentDrink = {
      options: {
        flavors: {},
        sweetness: {},
        toppings: {},
        espresso: {},
        milk: {},
        temp: {},
        classic: {},
      },
      temp: 6,
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
        espresso: {},
        temp: {},
      },
      index: drinks.length,
    } //! ^ Make sure index = drinks.length

    newCurrentDrink.name = drink.name
    newCurrentDrink.milk = category.milk || drink.milk || ''
    newCurrentDrink.base = {
      name: drink.name,
      milk: drink.milk || '',
      index: index,
    }
    if (drink.temp != undefined) {
      newCurrentDrink.temp = drink.temp
    } else if (category.temp != undefined) {
      newCurrentDrink.temp = category.temp
    } else {
      newCurrentDrink.temp = 6
    }

    setCurrentDrink(newCurrentDrink)
    setDrinkSelected(true)
    setDrinks([...drinks, newCurrentDrink])
    setSelectedDrink(drinks.length)
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
                                console.log(
                                  orderInformationSaved,
                                  drinkSelected
                                )
                                if (
                                  orderInformationSaved &&
                                  drinkSelected == false
                                ) {
                                  createNewDrink(drink, category, index)
                                } else {
                                  updateCurrentDrink(drink, category, index)
                                  setCurrentBase({ name: category.name, index })
                                }
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
