export const drinkPages = [
  'car-page',
  'featured-page',
  'hot-page',
  'iced-page',
  'blended-page',
  'misc-page',
]

export const drinkSizes = ['Small', 'Medium', 'Large', '8oz', 'Kids', '32oz']
export const abbDrinkSizes = ['Sm', 'Md', 'Lg', '8oz', 'Kd', '32oz']
export const drinkTemps = ['Hot', 'Iced', 'Blended', 'Warm', 'Extra Hot', '']

export const emptyDrink = {
  flavors: {},
  sweet: {},
  toppings: {},
  temp: 5,
  size: 1,
  name: '',
  base: { name: '', index: 1000 },
  index: 0,
}

export const dutchClassics = [
  { name: 'Americano' },
  { name: 'Mocha' },
  { name: 'Latte' },
  { name: 'Breve' },
  { name: 'Oat Milk Latte' },
]

export const dutchFaves = [
  { name: 'Kicker' },
  { name: 'Caramelizer' },
  { name: 'Annihilator' },
  { name: 'Golden Eagle' },
  { name: 'Cocomo' },
  { name: '911' },
  { name: 'Double Torture' },
  { name: 'White Mocha' },
  { name: 'Vanilla Latte' },
]

export const dutchChais = [
  { name: 'Chai' },
  { name: 'Golden Eagle Chai' },
  { name: 'Christmas Morning Chai' },
  { name: 'Horchata Chai' },
  { name: 'White Zombie Chai' },
]

export const featuredDrinks = [
  {
    name: 'Seasonal',
    theme: 'autumn',
    drinks: [
      { name: 'CPB Americano', temp: 1 },
      { name: 'CPB Mocha', temp: 1 },
      { name: 'CPB Latte', temp: 1 },
      { name: 'CPB Breve', temp: 1 },
      { name: 'CPB Oat Milk Latte', temp: 1 },
      { name: 'CPB Hot Protein Latte', temp: 1 },
    ],
  },
]

export const hotDrinks = [
  {
    name: 'Hot Classics*',
    theme: 'lava',
    temp: 0,
    drinks: [...dutchClassics, { name: 'Hot Protein Latte', temp: 0 }],
  },
  {
    name: 'Hot Dutch Faves',
    theme: 'fire',
    temp: 0,
    drinks: [
      ...dutchFaves,
      { name: 'Hot Salted Caramel Protein Latte', temp: 0 },
      { name: 'Hot Salted Caramel Protein Mocha', temp: 0 },
      { name: 'Hot Creamy Van Prot Latte', temp: 0 },
    ],
  },
  { name: 'Hot Chais', theme: 'pumpkin', temp: 0, drinks: [...dutchChais] },
]

export const icedDrinks = [
  {
    name: 'Iced Classics*',
    theme: 'ice',
    temp: 1,
    drinks: [...dutchClassics, { name: 'Iced Protein Latte', temp: 1 }],
  },
  {
    name: 'Iced Dutch Faves',
    theme: 'winter',
    temp: 1,
    drinks: [
      ...dutchFaves,
      { name: 'Iced Salted Caramel Protein Latte', temp: 1 },
      { name: 'Iced Salted caramel Protein Mocha', temp: 1 },
      { name: 'Iced Creamy Van Prot Latte', temp: 1 },
    ],
  },
  {
    name: 'Iced Chais',
    theme: 'pansy',
    temp: 1,
    drinks: [...dutchChais, { name: 'Iced Strawberry Horchata Chai', temp: 1 }],
  },
]

export const blendedDrinks = [
  {
    name: 'Blended Classics*',
    theme: 'water',
    temp: 2,
    drinks: [
      { name: 'Dutch Freeze', temp: 2 },
      { name: 'Mocha' },
      { name: 'Carburator' },
    ],
  },
  {
    name: 'Blended Dutch Faves',
    theme: 'iceLake',
    temp: 2,
    drinks: [...dutchFaves, { name: 'Campin Freeze', temp: 2 }],
  },
  {
    name: 'Blended Chais',
    theme: 'midnight',
    drinks: [
      ...dutchChais,
      { name: 'Blended Strawberry Horchata Chai', temp: 2 },
    ],
  },
]

export const miscDrinks = [
  {
    name: 'Straws',
    theme: 'pomegranate',
    drinks: [{ name: 'Kids Straw' }, { name: 'Straw' }, { name: 'Boba Straw' }],
  },
  {
    name: 'Baked Goods',
    theme: 'custom',
    drinks: [
      { name: 'Choc Chip Muffin Top' },
      { name: 'Granola Bar' },
      { name: 'Lemon Poppyseed Muffin Top' },
      { name: 'Orange Cran Muffin Top' },
    ],
  },
]

export const drinkBuilderThemes = {
  lava: {
    buttonClassName: 'bg-red-600 hover:bg-red-700',
  },
  fire: {
    buttonClassName:
      'hover:from-red-600 hover:to-orange-600 ease bg-gradient-to-b from-red-600 to-orange-500',
  },
  water: {
    buttonClassName: 'bg-blue-700 hover:bg-blue-800',
  },
  ice: {
    buttonClassName:
      'hover:from-blue-600 hover:to-cyan-600 ease bg-gradient-to-br from-blue-500 to-cyan-500',
  },
  iceLake: {
    buttonClassName:
      'hover:from-cyan-300 hover:to-blue-700 ease bg-gradient-to-br from-cyan-300 to-blue-900',
  },
  winter: {
    buttonClassName:
      'hover:from-cyan-600 hover:to-gray-300 ease bg-gradient-to-br from-cyan-500 to-gray-300',
  },
  pansy: {
    buttonClassName:
      'hover:from-purple-600 hover:to-gray-300 ease bg-gradient-to-br from-purple-500 to-gray-300',
  },
  midnight: {
    buttonClassName:
      'hover:from-purple-400 hover:to-purple-800 ease bg-gradient-to-b from-purple-300 to-purple-950',
  },
  autumn: {
    buttonClassName:
      'hover:from-yellow-600 hover:to-orange-600 ease bg-gradient-to-br from-yellow-500 to-orange-500',
  },
  pumpkin: {
    buttonClassName: 'bg-orange-600 hover:bg-orange-700',
  },
  pomegranate: {
    buttonClassName:
      'hover:from-pink-600 hover:to-green-600 ease bg-gradient-to-br from-pink-500 to-green-500 from-25% to-60%',
  },
  custom: {
    buttonClassName:
      'hover:from-cyan-600 hover:via-blue-900 hover:to-purple-950 ease bg-gradient-to-br from-cyan-500 to-pink-600 via-blue-900 from-40% to-60%',
  },
}
