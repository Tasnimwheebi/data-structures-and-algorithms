'use strict';
function insertShiftArray(arr,num){
  let y= arr.length/2;
  let v = Math.ceil(y);
  arr.splice(v,0,num);
  return arr;
}