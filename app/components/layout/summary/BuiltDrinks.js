import React, { useContext } from 'react'
import { OrderContext } from '@/app/AppContext'
export default function BuiltDrinks() {
  const { drinks, currentDrink, setCurrentDrink } = useContext(OrderContext)

  return <div className='p-2 flex flex-col gap-3'>drinks here</div>
}
