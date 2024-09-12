import React from 'react'
import Image from 'next/image'

export default function SelectCar({ selectedCar, setSelectedCar, cars }) {
  const icons = [
    <Image
      key='sedan'
      width='50'
      height='50'
      src='https://img.icons8.com/ffffff/ios/50/sedan.png'
      alt='sedan'
    />,
    <Image
      key='station-wagon'
      width='50'
      height='50'
      src='https://img.icons8.com/ffffff/ios/50/station-wagon.png'
      alt='station-wagon'
      className='m-auto'
    />,
    <Image
      key='pickup'
      width='50'
      height='50'
      src='https://img.icons8.com/ffffff/ios/50/pickup.png'
      alt='pickup'
      className='m-auto'
    />,
    <Image
      key='van'
      width='50'
      height='50'
      src='https://img.icons8.com/ffffff/ios/50/van.png'
      alt='van'
      className='m-auto'
    />,
    <Image
      key='wagon'
      width='96'
      height='96'
      src='https://img.icons8.com/ffffff/external-goofy-line-kerismaker/96/external-Wagon-transportation-obvious-line-kerismaker.png'
      alt='external-Wagon-transportation-obvious-line-kerismaker'
      className='m-auto'
    />,
    <Image
      key='horse'
      width='50'
      height='50'
      src='https://img.icons8.com/ffffff/ios/50/horse.png'
      alt='horse'
    />,
  ]
  return (
    <div className='p-2'>
      <p className='text-gray-400'>Select Vehicle Color</p>
      <div className='grid sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 my-2'>
        {cars.map((car, index) => {
          return (
            <div
              className='border-2 border-black w-fit rounded-md'
              key={`${car}-${index}`}
            >
              {' '}
              <button
                className={`bg-zinc-950 hover:bg-zinc-900 w-24 text-white font-bold py-2 px-4 rounded ${
                  selectedCar == index ? 'bg-zinc-800' : ''
                }`}
                onClick={() => {
                  setSelectedCar(index)
                }}
              >
                <div className=''>
                  {car}
                  {icons[index]}
                </div>
              </button>
            </div>
          )
        })}
      </div>
    </div>
  )
}
