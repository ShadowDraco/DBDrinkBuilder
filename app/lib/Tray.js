export default class Tray {
  constructor(drinks = [], total = 0.0) {
    this.drinks = drinks
    this.total = total
  }

  get drinks() {
    return this.drinks
  }

  get total() {
    return this.drinks.reduce((acc, drink) => {
      return acc + drink.price
    })
  }

  removeDrink(index) {
    this.drinks.splice(index, 1)
  }

  // new Drink of Drink Class
  addDrink(drink) {
    this.drinks.push(drink)
  }
}
