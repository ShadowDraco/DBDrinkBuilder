import Tray from './Tray'

export default class Order {
  constructor(color = 0, car = 0, comment = '') {
    this.color = color
    this.car = car
    this.comment = comment
    this.trays = [new Tray([], 0.0)]
  }
}
