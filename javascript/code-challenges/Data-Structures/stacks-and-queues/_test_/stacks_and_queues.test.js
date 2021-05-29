'use strict';
const Node = require( '../node.js' );
const Stack = require('../stack.js');
const Queue = require('../queue.js');

const {describe} = require( '@jest/globals' );

describe('stack',()=>{

  it('should push multiple values onto a stack',()=>{
    let val = 10;
    let val2= 4;
    let val3=7;
    let node = new Stack();
    node.push(val);
    node.push(val2);
    node.push(val3);
    expect(node.top.value).toBe(7);
  });
  it('should push a new node to the stack',()=>{
    let val = 10;
    let node = new Stack();
    node.push(val);
    expect(node.top.value).toBe(10);
  });

});

describe('queue',()=>{
  it('should push a new node to the queue',()=>{
    let val = 10;
    let node = new Queue();
    node.enqueue(val);
    expect(node.front.value).toBe(10);
  });

  it('should successfully pop off the stack',() => {
    let val = 10;
    let val2= 4;
    let node = new Stack();

    node.push(val);
    node.push(val2);
    node.pop();
    expect(node.top.value).toBe(10);
  });

  it('sohuld successfully empty a stack after multiple pops',() => {
    let val = 10;
    let val2= 4;
    let node = new Stack();

    node.push(val);
    node.push(val2);
    node.pop();
    node.pop();

    expect(node.top.value).toBeNull();
  });
});
