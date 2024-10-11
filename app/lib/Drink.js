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

  changeTemp(temp = 6) {
    this.temp = temp
  }

  changeSize(size = 1) {
    this.size = size
  }

  changeName(name = '') {
    this.name = name
  }

  changeCount(count = 1) {
    this.count = count
  }

  addPrice(amount = 0.0) {
    this.price += amount
  }

  changePrice(price = 0.0) {
    this.price = price
  }

  changeBase(base = {}) {
    this.base = base
  }
}
