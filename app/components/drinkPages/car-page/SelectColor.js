import React from 'react'
import { carColors } from '../../../CarInformation'

export default function SelectColor({ selectedColor, setSelectedColor }) {
  return (
    <div className='p-2'>
      <p className='text-gray-400'>Select Vehicle Color</p>
      <div className='grid sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 my-2'>
        {carColors.map((color, index) => {
          const borderColor = `border-${color.toLowerCase()}-5000`

          return (
            <div
              className='border-2 border-black w-fit rounded-md'
              key={`${color}-${index}`}
            >
              <button
                className={`bg-zinc-950 hover:bg-zinc-900 w-24 text-white font-bold py-2 px-4 border-b-4 ${borderColor} rounded ${
                  selectedColor == index ? 'bg-gray-800' : ''
                }`}
                onClick={() => {
                  setSelectedColor(index)
                }}
              >
                {color}
              </button>
            </div>
          )
        })}
      </div>
    </div>
  )
}
