function Task(
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
  this.test = 1;
}

function PerformingTask(
  name,
  description,
  startDate,
  finishDate,
  subTasks,
  done,
  percent) {
  var numPercent = +percent;

  // Task.apply(this, arguments);

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

function isArrayTasks(arr) {
  if (!Array.isArray(arr)) {
    return false;
  }
  return arr.every(function(elem) {
    elem instanceof Task;
  });
}


PerformingTask.prototype = Object.create(Task.prototype);
PerformingTask.prototype.constructor = PerformingTask;


//testing

var task1 = new Task("car",
  "buy car",
  new Date(10, 0, 2016),
  new Date(20, 0, 2016),
  []
);

var perf1 = new PerformingTask("car",
  "buy car",
  new Date(10, 0, 2016),
  new Date(20, 0, 2016),
  [], 1, 1);

console.log('lab9 task:');
console.log(task1);