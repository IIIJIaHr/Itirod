class Vector {
  constructor(x, y, z) {
    this.x = x;
    this.y = y;
    this.z = z;
  }
  get length(){
    return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
  }
  static plus(v1, v2) {
    return new Vector(v1.x + v2.x, v1.y + v2.y, v1.z + v2.z);
  }
  static scalar(v1, v2) {
    return v1.x * v2.x + v1.y * v2.y + v1.z * v2.z;
  }
  toString() {
    return `(${this.x}, ${this.y}, ${this.z})`;
  }

  valueOf() {
    return this.length;
  }
}

//testing

var v1 = new Vector(1, 1, 1);
var v2 = new Vector(2, 2, 2);

console.log('lab9 vector: ');
console.log(v1.length);
console.log(Vector.plus(v1, v2));
console.log(v1.toString());
