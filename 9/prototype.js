// function inherit_B(Child, Parent)
// {
//     Child.prototype = Object.create(Parent.prototype);
//     Child.prototype.constructor = Child;
//     var objParent = new Parent();
    
//     for (var prop in objParent) Child.prototype[prop] = objParent[prop];
// }

function inherit_B(Child, Parent)
{
    var F = function () { };
    F.prototype = Parent.prototype;
    var f = new F();
    
    for (var prop in Child.prototype) f[prop] = Child.prototype[prop];
    Child.prototype = f;
    Child.prototype.super = Parent.prototype;
}

function Man(name) { this.name = name }
Man.prototype = {
  constructor: Man,
  THOUGHTS: "wanna beer!",
  say: function() {
    console.log("My name is " + this.name + " and i think:'" + this.THOUGHTS + "'")
  }
}

function Gentleman(name, prefered_beverage) {
  // Man.call(this, name);
  this.prefered_beverage = prefered_beverage;
}
Gentleman.prototype = { constructor: Gentleman, THOUGHTS: "it's teatime!" }
inherit_B(Gentleman, Man)

function Programmer(name, prefered_lang) {
  // Gentleman.call(this, name, "Cofee");
  this.prefered_lang = prefered_lang;
}
Programmer.prototype = {
  constructor: Programmer,
  THOUGHTS: "runtime error 138? wanna debug XD!"
}
inherit_B(Programmer, Gentleman)

var man = new Man("Jack");
var gentleman = new Gentleman("John", "Orange pekoe");
var programmer = new Programmer("James", "C++");

man.say();
gentleman.say();
programmer.say();
