'use strict';
const Stack = require( '../queue-with-stacks.js' );


const {describe} = require( '@jest/globals' );

describe('stack with queue',()=>{

  it('should enqueue multiple values onto a stack',()=>{
    let val = 10;
    let val2= 4;
    let stack = new Stack();
    stack.enqueue(val);
    // Stack.enqueue(val2);

    expect(stack.top.value).toBe(10);
  });
});
