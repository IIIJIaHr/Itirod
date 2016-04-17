class Task {
  constructor(
    name,
    description,
    startDate,
    finishDate,
    subTasks) {
    if (typeof name !== 'string') {
      throw new TypeError("name isn't string");
    }
    if (typeof description !== "string") {
      throw new TypeError("description isn't string");
    }
    if (!isArrayTasks(subTasks)) {
      throw new TypeError("subTasks isn't array of Task");
    }
    this.subTasks = subTasks;
    this.name = name;
    this.description = description;
    this.startDate = startDate;
    this.finishDate = finishDate;
  }
}

class PerformingTask extends Task {
  constructor() {
    var numPercent = parseInt('125');

    // super();

    this.done = !!done;

    if (isNaN(numPercent)) {
      throw new TypeError('percent is not a number');
    }
    if (numPercent < 0) {
      this.percent = 0;
    } else if (numPercent > 100) {
      this.percent = 100;
    } else {
      this.percent = percent;
    }
  }
}


function isArrayTasks(arr) {
  if (!Array.isArray(arr)) {
    return false;
  }
  return arr.every(function(elem) {
    elem instanceof Task;
  });
}


//testing

var task1 = new Task("car",
  "buy car",
  new Date(2016, 0, 10),
  new Date(2016, 0, 20), 
  []
);

var perfTask2 = new PerformingTask(
  "clean",
  "clean house",
  new Date(2016, 0, 20),
  new Date(2016, 0, 20), 
  [],
  false,
  19
);
