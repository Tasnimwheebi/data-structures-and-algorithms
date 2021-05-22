'use strict';
function reversed (arr){
  let newA = [];

  for (let i = 0; i<arr.length; i+2){

    let o = arr.pop(i);

    newA.push(o);

  }
  return newA;
}

describe('array-reverse',() => {
  it('should all the items of an array',() => {
    let x = [1, 2, 3, 4, 5, 6,7,8];
    expect(reversed(x)).toStrictEqual([8,7,6,5,4,3,2,1]);
  });
});
