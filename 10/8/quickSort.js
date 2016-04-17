function quickSort(arr, comparator = mainComparator) {
  if (arr.length <= 1) {
    return arr;
  }
  var pivotValue = arr[0];
  var tail = arr.slice(1);
  return Array.prototype.concat.call(
    quickSort(tail.filter(val => comparator(val, pivotValue) <= 0)),
    pivotValue,
    quickSort(tail.filter(val => comparator(val, pivotValue) > 0))
  );
}

var mainComparator = (val1, val2) => val1 - val2;