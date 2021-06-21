'use strict';
// let arr=[5,7,3,9,10];
function merge(left, right){
  let mergeArr =[];
  while (left.length && right.length){

    if (left[0] <= right[0]){
      mergeArr.push(left.shift());

    }
    else{
      mergeArr.push(right.shift());

    }

  }
  while (left.length){
    mergeArr.push(left.shift());
  }

  while(right.length){
    mergeArr.push(right.shift());
  }


  return mergeArr;
}

function mergeSort(array){
  if (array.length > 1){
    let mid =Math.floor(array.length/2);
    let left = array.slice(0,mid);
    let right = array.slice(mid,array.length);
    // sort the left side
    const leftMerge= mergeSort(left);
    // sort the right side
    const rightMerge= mergeSort(right);
    // merge the sorted left and right sides together
    return merge(leftMerge, rightMerge);
  }
  else if(array.length<2){
    return array;
  }
  return array;


}
module.exports = mergeSort,merge;
