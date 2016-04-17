function Vector(x, y, z) {
  var $length = Math.sqrt(x * x + y * y + z * z);
  this.x = x;
  this.y = y;
  this.z = z;
  Object.defineProperty(this, "length", {
    get: function() {
      return $length;
    },
    configurable: true,
    enumerable: true
  });
}

Vector.prototype.plus = function(v1, v2) {
  return new Vector(v1.x + v2.x, v1.y + v2.y, v1.z + v2.z);
};
Vector.prototype.scalar = function(v1, v2) {
  return v1.x * v2.x + v1.y * v2.y + v1.z * v2.z;
};
Vector.prototype.toString = function() {
  return '(' + this.x + ', ' + this.y + ', ' + this.z + ')';
};
Vector.prototype.valueOf = function() {
  return this.length;
};

var v1 = new Vector(1, 1, 1);
var v2 = new Vector(2, 2, 2);

console.log('lab9 vector:');
console.log(v1.length);
var v3 = v1.plus(v1, v2);