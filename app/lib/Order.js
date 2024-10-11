import Tray from './Tray'

export default class Order {
  constructor(color = 0, car = 0, comment = '') {
    this.color = color
    this.car = car
    this.comment = comment
    this.informationSaved = false
    this.trays = [new Tray([], 0.0)]
    this.currentTray = 0
  }

  saveInformation() {
    if (this.color != null && this.car != null && this.comment != null) {
      this.informationSaved = true
    }
  }

  informationSaved() {
    return this.informationSaved
  }

  get currentTray() {
    return this.trays[currentTray]
  }

  set currentTray(index) {
    this.currentTray = index
  }

  set color(index) {
    this.color = index
  }

  set car(index) {
    this.car = index
  }

  set comment(comment) {
    this.comment = comment
  }

  addTray() {
    this.trays.push(new Tray([], 0.0))
  }
}
