function quickSort(arr, comparator) {
    if (arr.length <= 1) {
        return arr;
    }
    var mainComparator = function(val1, val2) {
      return val1 - val2;
    };
    comparator = comparator || mainComparator;
    var pivotValue = arr[0];
    var tail = arr.slice(1);
    return Array.prototype.concat.call(
        quickSort(tail.filter(function(val) {
            return comparator(val, pivotValue) <= 0;
        })),
        pivotValue,
        quickSort(tail.filter(function(val) {
            return comparator(val, pivotValue) > 0;
        })));
}
