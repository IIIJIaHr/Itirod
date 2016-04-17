function rangeIterator(start, end, step = 1) {
  if (start === undefined || end === undefined) {
    throw new Error("parameters start and end are required");
  }
  let condition;
  if (start < end && step >= 0) {
    condition = (curr, end) => curr <= end;
  }
  if (start > end && step <= 0) {
    condition = (curr, end) => curr >= end;
  }
  return {
    start,
    end,
    step,
    [Symbol.iterator]() {
      return this;
    },
    next() {
      if (this.current === undefined) {
        this.current = start;
      }
      if (condition(this.current, end)) {
        let res = {
          done: false,
          value: this.current,
        }
        this.current += step;
        return res;
      } else {
        delete this.current;
        return {
          done: true,
        }
      }
    }
  }
}

var iter = rangeIterator(1,10);

for(elem of iter){
  console.log(elem);
}