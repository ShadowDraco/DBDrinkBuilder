import Image from 'next/image'

export const carColors = [
  'White',
  'Black',
  'Gray',
  'Silver',
  'Red',
  'Blue',
  'Brown',
  'Green',
  'Gold',
  'Purple',
  'Orange',
  'Custom',
]

export const cars = ['Car', 'SUV', 'Truck', 'Van', 'Wagon', 'Custom']

export const carIcons = [
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
