// Add your Circle class here

class Circle {
  constructor(radius) {
    this.radius = radius
  }

  get diameter() {
    return this.radius * 2
  }

  get circumference() {
    return this.radius * 2 * Math.PI
  }

  get area() {
    //2piR^2
    return (this.radius ** 2) * Math.PI
  }

  set diameter(x) {
    this.radius = x / 2
  }

  set circumference(x) {
    this.radius = x / 2 / Math.PI
  }

  set area(x) {
    this.radius = Math.sqrt(x) / Math.PI
  }
}
