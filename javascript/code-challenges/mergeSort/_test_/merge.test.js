const mergeSort = require('../merge.js');
const {expect} = require('@jest/globals');
describe(' function mergeSort',() => {
  it('should merge and sort an array',() => {
    let arr = [4, 3, 1, 2];
    let result = mergeSort(arr);
    expect(result).toEqual([1, 2, 3, 4]);
  });

  it('should throw an error ',() => {
    let arr = '2';
    let result = mergeSort(arr);
    expect(result).toBeNull;
  });
  it('should return the same array if the length of the array is 1',() => {
    let arr = [4];
    let result = mergeSort(arr);
    expect(result).toEqual(arr);

  });
});

