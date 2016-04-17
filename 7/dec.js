  function one(x) {
    return x;
  }

  function wrapperOne(func) {
    return function(arg) {
      if (typeof(arg) === 'number') {
        return func(arg);
      }
    };
  }

  function sum() {
    return Array.prototype.reduce.call(arguments, function(first, second) {
      return first + second;
    }, 0);
  }


  function wrapperTwo(func, type) {
    return function() {
      if (Array.prototype.some.call(arguments, function(argument) {
          return typeof argument !== type;
        })) {
        throw new TypeError("Arguments must to be " + type);
      }
      return func.apply(null, arguments);
    };
  }

  console.log('lab7 decorators');
  console.log(wrapperOne(one)(8));
  console.log(wrapperTwo(sum, 'number')(1, 2, 1));
