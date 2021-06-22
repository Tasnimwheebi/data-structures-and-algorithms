const quickSort = require('../quick-sort.js');
const {expect} = require('@jest/globals');
describe(' function mergeSort',() => {
  it('should sort an array',() => {

    let array = [8,4,23,42,16,15];
    let right=array.length-1;
    let left=0;
    let result = quickSort(array,left,right);
    expect(result).toEqual([4,8,15,16,23,42]);
  });
  it('should throw an error ',() => {
    let array = '2';
    let right=array.length-1;
    let left=0;
    let result = quickSort(array,left,right);
    expect(result).toBeNull;
  });
  it('should return the same array if the length of the array is 1',() => {
    let array = [4];
    let right=array.length-1;
    let left=0;
    let result = quickSort(array);
    expect(result).toEqual(array,left,right);

  });
});
