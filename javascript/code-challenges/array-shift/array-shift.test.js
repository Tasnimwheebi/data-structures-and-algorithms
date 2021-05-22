'use strict';
function insertShiftArray(arr,num){
  let y= arr.length/2;
  let v = Math.ceil(y);
  arr.splice(v,0,num);
  return arr;
}
describe('array-shift',() => {
  it('should add a new item to the middle index of an array',() => {
    let arr1=[2,4,6,-8];
    expect(insertShiftArray(arr1,5)).toStrictEqual([2,4,5,6,-8]);
  });
});