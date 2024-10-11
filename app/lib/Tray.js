import Drink from './Drink'

export default class Tray {
  constructor(drinks = [], total = 0.0) {
    this.drinks = drinks
    this.total = total
    this.currentDrink = 0
  }

  get drinks() {
    return this.drinks
  }

  getDrink(index = 0) {
    return this.drinks[index]
  }

  get total() {
    return this.drinks.reduce((acc, drink) => {
      return acc + drink.price
    })
  }

  set drinks(drinks = []) {
    this.drinks = drinks
  }

  set total(total = 0.0) {
    this.total = total
  }

  get currentDrink() {
    return this.drinks[this.currentDrink]
  }

  set currentDrink(index) {
    this.currentDrink = index
  }

  removeDrink(index) {
    this.drinks.splice(index, 1)
  }

  // new Drink of Drink Class
  addDrink() {
    this.drinks.push(new Drink())
  }
}
