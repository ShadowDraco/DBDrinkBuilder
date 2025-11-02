export const drinkPages = [
  'car-page',
  'featured-page',
  'hot-page',
  'iced-page',
  'blended-page',
  'misc-page',
  'all-options-page',
  'milk-options-page',
  'sweet-options-page',
  'flavor-options-page',
  'topping-options-page',
  'finisher-options-page',
]

export const drinkOptionTabs = [
  'All',
  'Milk',
  'Sweet',
  'Flavors',
  'Toppings',
  'Finishers',
]
export const drinkTypeTabs = ['Featured', 'Hot*', 'Iced*', 'Blended*', 'MISC.']
export const drinkSizeTabs = ['Small', 'Medium', 'Large', '8oz', 'Kids', '32oz']
export const abbDrinkSizes = ['Sm', 'Md', 'Lg', '8oz', 'Kd', '32oz']
export const milkTypes = [
  'Nonfat Milk',
  'Almond Milk',
  'Coconut Milk',
  'Oat Milk',
  '2% Milk',
  'Chocolate Milk',
  'Ice Cream',
  'KickMe Milk',
  'Protein Milk',
  'Sweet Cream',
]

export const drinkTemps = [
  'Hot',
  'Iced',
  'Blended',
  'Not So Hot',
  'Extra Hot',
  'Cold Pour',
]

export const emptyOrderInformation = { color: 0, car: 0, comment: '' }

export const emptyDrink = {
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
  index: 0,
}

export const dutchClassics = [
  { name: 'Americano' },
  { name: 'Mocha', milk: 6 },
  { name: 'Latte', milk: 5 },
  { name: 'Breve', milk: 8 },
  { name: 'Oat Milk Latte', milk: 4 },
]

export const dutchFaves = [
  { name: 'Kicker', milk: 8 },
  { name: 'Caramelizer', milk: 6 },
  { name: 'Annihilator', milk: 8 },
  { name: 'Golden Eagle', milk: 8 },
  { name: 'Cocomo', milk: 6 },
  { name: '911', milk: 8 },
  { name: 'Double Torture', milk: 6 },
  { name: 'White Mocha', milk: 6 },
  { name: 'Vanilla Latte', milk: 5 },
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
    drinks: [...dutchClassics, { name: 'Hot Protein Latte', temp: 0, milk: 5 }],
  },
  {
    name: 'Hot Dutch Faves',
    theme: 'fire',
    temp: 0,
    drinks: [
      ...dutchFaves,
      { name: 'Hot Salted Caramel Protein Latte', temp: 0, milk: 5 },
      { name: 'Hot Salted Caramel Protein Mocha', temp: 0, milk: 6 },
      { name: 'Hot Creamy Van Prot Latte', temp: 0, milk: 5 },
    ],
  },
  { name: 'Hot Chais', theme: 'pumpkin', temp: 0, drinks: [...dutchChais] },
]

export const icedDrinks = [
  {
    name: 'Iced Classics*',
    theme: 'ice',
    temp: 1,
    drinks: [
      ...dutchClassics,
      { name: 'Iced Protein Latte', temp: 1, milk: 5 },
    ],
  },
  {
    name: 'Iced Dutch Faves',
    theme: 'winter',
    temp: 1,
    drinks: [
      ...dutchFaves,
      { name: 'Iced Salted Caramel Protein Latte', temp: 1, milk: 5 },
      { name: 'Iced Salted caramel Protein Mocha', temp: 1, milk: 6 },
      { name: 'Iced Creamy Van Prot Latte', temp: 1, milk: 5 },
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
      { name: 'Mocha', milk: 6 },
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

export const tempOptions = {
  name: 'Temperature',
  theme: 'lava',
  onlyOne: true,
  options: [
    { name: 'Hot', count: 0, incremental: false, optionType: 'temp' },
    { name: 'Iced', count: 0, incremental: false, optionType: 'temp' },
    { name: 'Blended', count: 0, incremental: false, optionType: 'temp' },
    { name: 'Warm', count: 0, incremental: false, optionType: 'temp' },
    { name: 'Extra Hot', count: 0, incremental: false, optionType: 'temp' },
  ],
}

export const classicOptions = [
  {
    name: 'Classic Common',
    theme: 'lava',
    onlyOne: false,
    options: [
      {
        name: 'Sugar Free',
        count: 0,
        incremental: false,
        optionType: 'classic',
      },
      { name: 'Skinny', count: 0, incremental: false, optionType: 'temp' },
      {
        name: 'Ice',
        count: 0,
        incremental: false,
        modifier: true,
        optionType: 'temp',
      },
      { name: 'Cold Pour', count: 0, incremental: false, optionType: 'temp' },
    ],
  },
]

export const espressoOptions = [
  {
    name: 'Espresso Modifiers',
    theme: 'pink',
    onlyOne: true,
    options: [
      { name: 'Decaf', count: 0, incremental: false, optionType: 'espresso' },
      {
        name: 'Half Caf',
        count: 0,
        incremental: false,
        optionType: 'espresso',
      },
      {
        name: 'White Coffee',
        count: 0,
        incremental: false,
        optionType: 'espresso',
      },
      {
        name: 'Cubano Shot',
        count: 0,
        incremental: false,
        optionType: 'espresso',
      },
      {
        name: 'Fireball Shot',
        count: 0,
        incremental: false,
        optionType: 'espresso',
      },
      {
        name: 'Regular Coffee',
        count: 0,
        incremental: false,
        optionType: 'espresso',
      },
      {
        name: 'Shot Charge',
        count: 0,
        incremental: true,
        optionType: 'espresso',
      },
      {
        name: 'Extra Shot',
        count: 0,
        incremental: true,
        optionType: 'espresso',
      },
      {
        name: 'Single Shot',
        count: 0,
        incremental: true,
        optionType: 'espresso',
      },
      {
        name: 'Domino Shot',
        count: 0,
        incremental: false,
        optionType: 'espresso',
      },
    ],
  },
]

export const milkOptions = [
  {
    name: 'Alternative Milks',
    theme: 'water',
    onlyOne: true,
    options: [
      {
        name: 'Nonfat',
        count: 0,
        incremental: false,
        optionType: 'milk',
        index: 0,
      },
      {
        name: 'Almond Milk',
        count: 0,
        incremental: false,
        optionType: 'milk',
        index: 1,
      },
      {
        name: 'Coconut Milk',
        count: 0,
        incremental: false,
        optionType: 'milk',
        index: 2,
      },
      {
        name: 'Oat Milk',
        count: 0,
        incremental: false,
        optionType: 'milk',
        index: 3,
      },
      {
        name: '2%',
        count: 0,
        incremental: false,
        optionType: 'milk',
        index: 4,
      },
      {
        name: 'Choc Milk',
        count: 0,
        incremental: false,
        optionType: 'milk',
        index: 5,
      },
      {
        name: 'Ice Cream',
        count: 0,
        incremental: false,
        optionType: 'milk',
        index: 6,
      },
      {
        name: 'KickMe Milk',
        count: 0,
        incremental: false,
        optionType: 'milk',
        index: 7,
      },
      {
        name: 'Protein Milk',
        count: 0,
        incremental: false,
        optionType: 'milk',
        index: 8,
      },
      {
        name: 'Sweet Cream',
        count: 0,
        incremental: false,
        optionType: 'milk',
        index: 9,
      },
    ],
  },
]

export const sweetOptions = [
  {
    name: 'Sweetness',
    theme: 'pink',
    onlyOne: true,
    options: [
      {
        name: 'Extra Sweet',
        count: 0,
        incremental: true,
        optionType: 'sweetness',
      },
      {
        name: '1/4 Sweet',
        count: 0,
        incremental: false,
        optionType: 'sweetness',
      },
      {
        name: '1/2 Sweet',
        count: 0,
        incremental: false,
        optionType: 'sweetness',
      },
      {
        name: '3/4 Sweet',
        count: 0,
        incremental: false,
        optionType: 'sweetness',
      },
    ],
  },
  {
    name: 'Sweeteners',
    theme: 'purple',
    options: [
      {
        name: 'Sugar Packet',
        count: 0,
        incremental: true,
        optionType: 'sweetness',
      },
      {
        name: 'Cane Sugar',
        count: 0,
        incremental: true,
        optionType: 'sweetness',
      },
      { name: 'Splenda', count: 0, incremental: true, optionType: 'sweetness' },
      {
        name: 'Equal Packet',
        count: 0,
        incremental: true,
        disabled: true,
        optionType: 'sweetness',
      },
      {
        name: 'Sweet N Low',
        count: 0,
        incremental: true,
        disabled: true,
        optionType: 'sweetness',
      },
      { name: 'Stevia', count: 0, incremental: true, optionType: 'sweetness' },
      { name: 'Honey', count: 0, incremental: false, optionType: 'sweetness' },
    ],
  },
]

export const flavorOptions = [
  {
    name: 'Non Fruit Flavors',
    theme: 'water',
    onlyOne: false,
    options: [
      {
        name: 'Irish Cream',
        count: 0,
        incremental: false,
        optionType: 'flavors',
      },
      { name: 'Vanilla', count: 0, incremental: false, optionType: 'flavors' },
      { name: 'Choc Mac', count: 0, incremental: false, optionType: 'flavors' },
      { name: 'Hazelnut', count: 0, incremental: false, optionType: 'flavors' },
      { name: 'Caramel', count: 0, incremental: false, optionType: 'flavors' },
      {
        name: 'White Choc',
        count: 0,
        incremental: false,
        optionType: 'flavors',
      },
      {
        name: 'Dark Choc',
        count: 0,
        incremental: false,
        optionType: 'flavors',
      },
      {
        name: 'Salted Caramel',
        count: 0,
        incremental: false,
        optionType: 'flavors',
      },
      {
        name: 'Peppermint',
        count: 0,
        incremental: false,
        disabled: true,
        optionType: 'flavors',
      },
      { name: 'Cinn', count: 0, incremental: false, optionType: 'flavors' },
      {
        name: 'Creme de Menthe',
        count: 0,
        incremental: false,
        optionType: 'flavors',
      },
      { name: 'Pumpkin', count: 0, incremental: false, optionType: 'flavors' },
      {
        name: 'Elder flower',
        count: 0,
        incremental: false,
        disabled: true,
        optionType: 'flavors',
      },
      {
        name: 'Choc Chip',
        count: 0,
        incremental: false,
        disabled: true,
        optionType: 'flavors',
      },
      {
        name: 'Cupcake',
        count: 0,
        incremental: false,
        disabled: true,
        optionType: 'flavors',
      },
      {
        name: 'Dutch Luv',
        count: 0,
        incremental: false,
        optionType: 'flavors',
      },
      {
        name: 'Cookie Butter',
        count: 0,
        incremental: false,
        optionType: 'flavors',
      },
    ],
  },
  {
    name: 'Sugar Free Flavors',
    theme: 'pumpkin',
    onlyOne: false,
    options: [
      {
        name: 'SF Irish Cream',
        count: 0,
        incremental: false,
        optionType: 'flavors',
      },
      {
        name: 'SF Vanilla',
        count: 0,
        incremental: false,
        optionType: 'flavors',
      },
      {
        name: 'SF Choc Mac',
        count: 0,
        incremental: false,
        optionType: 'flavors',
      },
      {
        name: 'SF Coconut',
        count: 0,
        incremental: false,
        optionType: 'flavors',
      },
      {
        name: 'SF Hazelnut',
        count: 0,
        incremental: false,
        optionType: 'flavors',
      },
      {
        name: 'SF Caramel',
        count: 0,
        incremental: false,
        optionType: 'flavors',
      },
      {
        name: 'SF White Choc',
        count: 0,
        incremental: false,
        optionType: 'flavors',
      },
      {
        name: 'SF Dark Choc',
        count: 0,
        incremental: false,
        optionType: 'flavors',
      },
      { name: 'SF Straw', count: 0, incremental: false, optionType: 'flavors' },
      {
        name: 'SF Red Raz',
        count: 0,
        incremental: false,
        optionType: 'flavors',
      },
      {
        name: 'SF Peppermint',
        count: 0,
        incremental: false,
        disabled: true,
        optionType: 'flavors',
      },
      { name: 'SF Peach', count: 0, incremental: false, optionType: 'flavors' },
      {
        name: 'SF Pumpkin',
        count: 0,
        incremental: false,
        optionType: 'flavors',
      },
      {
        name: 'SF Salted Caramel',
        count: 0,
        incremental: false,
        optionType: 'flavors',
      },
    ],
  },
]

export const toppingOptions = [
  {
    name: 'Floats',
    theme: 'plant',
    onlyOne: false,
    options: [
      {
        name: 'Strawberry Float',
        count: 0,
        incremental: false,
        optionType: 'toppings',
      },
      {
        name: 'Mango Float',
        count: 0,
        incremental: false,
        optionType: 'toppings',
      },
      {
        name: 'Pom Float',
        count: 0,
        incremental: false,
        optionType: 'toppings',
      },
      {
        name: 'Blue Raspberry Float',
        count: 0,
        incremental: false,
        optionType: 'toppings',
      },
      {
        name: 'Blackberry Float',
        count: 0,
        incremental: false,
        optionType: 'toppings',
      },
      {
        name: 'Watermelon Float',
        count: 0,
        incremental: false,
        optionType: 'toppings',
      },
      {
        name: 'Raspberry Float',
        count: 0,
        incremental: false,
        optionType: 'toppings',
      },
      {
        name: 'Coconut Float',
        count: 0,
        incremental: false,
        optionType: 'toppings',
      },
      {
        name: 'Peach Float',
        count: 0,
        incremental: false,
        optionType: 'toppings',
      },
      {
        name: 'Unicorn Blood Float',
        count: 0,
        incremental: false,
        optionType: 'toppings',
      },
      {
        name: 'Custom Float',
        count: 0,
        incremental: false,
        optionType: 'toppings',
      },
      {
        name: 'Caramel Apple Float',
        count: 0,
        incremental: false,
        optionType: 'toppings',
      },
    ],
  },
  {
    name: 'LTO Toppings',
    theme: 'lime',
    onlyOne: false,
    options: [
      {
        name: 'LTO Salted Caramel',
        count: 0,
        incremental: false,
        optionType: 'toppings',
      },
      {
        name: 'Cookie Dough',
        count: 0,
        incremental: false,
        disabled: true,
        optionType: 'toppings',
      },
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
  pink: {
    buttonClassName: 'bg-pink-500 hover:bg-pink-600',
  },
  purple: {
    buttonClassName: 'bg-purple-600 hover:bg-purple-700',
  },
  pansy: {
    buttonClassName:
      'hover:from-purple-600 hover:to-gray-300 ease bg-gradient-to-br from-purple-500 to-gray-300',
  },
  plant: {
    buttonClassName:
      'hover:from-green-600 hover:to-green-950 ease bg-gradient-to-br from-green-400 to-cyan-800',
  },
  lime: {
    buttonClassName:
      'hover:from-green-500 hover:to-green-700 ease bg-gradient-to-br from-green-400 to-green-700',
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
