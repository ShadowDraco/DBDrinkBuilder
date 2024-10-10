export default class Drink {
  constructor(
    options = {
      // final options of the drink
      flavors: {},
      sweetness: {},
      toppings: {},
      espresso: {},
      milk: {},
      temp: {},
      classic: {},
    },
    temp = 6, // basic info for the drink
    size = 1,
    name = '',
    count = 1,
    price = 1.0,
    base = {
      // used to start a drink with base options
      name: '',
      index: 1000,
      milk: '',
      flavors: {},
      sweetness: {},
      toppings: {},
      espresso: {},
      temp: {},
    },
    index = 0 // index in the drink tray
  ) {
    this.options = options
    this.temp = temp
    this.size = size
    this.name = name
    this.milk = milk
    this.count = count
    this.price = price
    this.base = base
    this.index = index
  }
}
