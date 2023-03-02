class ParkingSlot {
  slots = []
  constructor(parkingSize) {
    this.slots = new Array(parkingSize).fill(null)
  }

  park(carId) {
    if (this.slots.every((elem) => elem !== null)) {
      return false
    } else {
      const getIndex = this.slots.indexOf(null)
      if (getIndex !== -1) this.slots[getIndex] = carId
      return true
    }

  }


  getSlots() {
    return ("Slots: ", this.slots)
  }

  remove(carId) {
    if (this.slots.find((cardID) => cardID == carId) === undefined) return false
    else {
      this.slots.splice(this.slots.indexOf(carId), 1, null)
      return true
    }
  }
}

let obj = new ParkingSlot(5)
console.log(obj.getSlots())
console.log(obj.park("Car-10"))
console.log(obj.park("Car-20"))
console.log(obj.park("Car-30"))
console.log(obj.park("Car-40"))
console.log(obj.park("Car-50"))
console.log(obj.getSlots())
console.log(obj.remove("Car-50"))
console.log(obj.getSlots())