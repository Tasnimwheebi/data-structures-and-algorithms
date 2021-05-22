'use strict';
function reversed (arr){
  let newA = [];

  for (let i = 0; i<arr.length; i+2){

    let o = arr.pop(i);

    newA.push(o);

  }
  return newA;
}