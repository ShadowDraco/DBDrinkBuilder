export const drinkPages = [
  'car-page',
  'featured-page',
  'hot-page',
  'iced-page',
  'blended-page',
  'misc-page',
]

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
      { name: 'CPB Americano' },
      { name: 'CPB Mocha' },
      { name: 'CPB Latte' },
      { name: 'CPB Breve' },
      { name: 'CPB Oat Milk Latte' },
      { name: 'CPB Hot Protein Latte' },
    ],
  },
]

export const hotDrinks = [
  {
    name: 'Hot Classics*',
    theme: 'lava',
    drinks: [...dutchClassics, { name: 'Hot Protein Latte' }],
  },
  {
    name: 'Hot Dutch Faves',
    theme: 'fire',
    drinks: [
      ...dutchFaves,
      { name: 'Hot Salted Caramel Protein Latte' },
      { name: 'Hot Salted Caramel Protein Mocha' },
      { name: 'Hot Creamy Van Prot Latte' },
    ],
  },
  { name: 'Hot Chais', theme: 'pumpkin', drinks: [...dutchChais] },
]

export const icedDrinks = [
  {
    name: 'Iced Classics*',
    theme: 'ice',
    drinks: [...dutchClassics, { name: 'Iced Protein Latte' }],
  },
  {
    name: 'Iced Dutch Faves',
    theme: 'winter',
    drinks: [
      ...dutchFaves,
      { name: 'Iced Salted Caramel Protein Latte' },
      { name: 'Iced Salted caramel Protein Mocha' },
      { name: 'Iced Creamy Van Prot Latte' },
    ],
  },
  {
    name: 'Iced Chais',
    theme: 'pansy',
    drinks: [...dutchChais, { name: 'Iced Strawberry Horchata Chai' }],
  },
]

export const blendedDrinks = [
  {
    name: 'Blended Classics*',
    theme: 'water',
    drinks: [
      { name: 'Dutch Freeze' },
      { name: 'Mocha' },
      { name: 'Carburator' },
    ],
  },
  {
    name: 'Blended Dutch Faves',
    theme: 'iceLake',
    drinks: [...dutchFaves, { name: 'Campin Freeze' }],
  },
  {
    name: 'Blended Chais',
    theme: 'midnight',
    drinks: [...dutchChais, { name: 'Blended Strawberry Horchata Chai' }],
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
