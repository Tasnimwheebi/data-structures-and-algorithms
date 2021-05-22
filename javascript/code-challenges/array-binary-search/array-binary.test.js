'use strict';
let arr = [4, 8, 15, 16, 23, 42];
function binarySearch(array, key){
  let start = 0;
  let end = array.length - 1;

  while (start <= end) {
    let middle = Math.floor((start + end) / 2);

    if (array[middle] === key) {
      return middle;

    } else if (array[middle] < key) {
      start = middle + 1;
    } else {
      end = middle - 1;
    }
  }
  return -1;
}
binarySearch(arr,23);

describe('array-binary.js',() => {
  it('should return the index of the input that matched the value inside the array by binary-search method',() => {
    expect(binarySearch([4, 8, 15, 16, 23, 42],15)).toStrictEqual(2);
    expect(binarySearch([4, 8, 15, 16, 23, 42],1)).toStrictEqual(-1);
  });
});
