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

  function sum(...args) {
    return args.reduce((first, second) => first + second);
  }


  function wrapperTwo(func, type) {
    return function(...args) {
      if (args.some(argument => typeof argument !== type)) {
        throw new TypeError("Arguments must to be " + type);
      }
      return func(...args);
    };
  }

  //testing
  console.log('lab7 decorators: ');
  console.log(wrapperOne(one)(8));
  console.log(wrapperTwo(sum, 'number')(1, 2, 31));
