import React from 'react'
import { carIcons, cars } from './CarInformation'

export default function SelectCar({ selectedCar, setSelectedCar }) {
  return (
    <div className='p-2'>
      <p className='text-gray-400'>Select Vehicle Type</p>
      <div className='grid sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 my-2'>
        {cars.map((car, index) => {
          return (
            <div
              className={`border-2 border-black w-fit rounded-md bg-zinc-950 hover:bg-zinc-900 ${
                selectedCar == index ? 'bg-gray-800' : ''
              }`}
              key={`${car}-${index}`}
            >
              {' '}
              <button
                className={` w-24 text-white font-bold py-2 px-4 rounded`}
                onClick={() => {
                  setSelectedCar(index)
                }}
              >
                <div className=''>
                  {car}
                  {carIcons[index]}
                </div>
              </button>
            </div>
          )
        })}
      </div>
    </div>
  )
}
