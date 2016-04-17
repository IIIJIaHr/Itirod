function range(start, end, step) {
  var res = [];
  var i;
  step = step || 1;
  if (start === undefined || end === undefined) {
    throw new Error("parameters start and end are required");
  }
  if (start < end && step > 0) {
    for (i = start; i <= end; i += step) {
      res.push(i);
    }
  }
  if (start > end && step < 0) {
    for (i = start; i >= end; i += step) {
      res.push(i);
    }
  }

  return res;
}
