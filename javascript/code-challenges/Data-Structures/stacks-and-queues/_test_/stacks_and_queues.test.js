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

  it('should successfully empty a stack after multiple pops',() => {
    let val = 10;
    let val2= 4;
    let node = new Stack();

    node.push(val);
    node.push(val2);
    node.pop();
    node.pop();

    expect(node.sNode).toEqual(0);
  });
  it ('should successfully instantiate an empty stack',()=>{
    let val= 4;
    let node = new Stack();
    node.push(val);
    expect(node.top.value).toBe(4);
  });
  it ('should successfully Call pop or peek on empty stack raises exception',()=>{
    let node = new Stack();

    function emptyStack(){
      node.peek();
    }
    expect(emptyStack).toThrow();
  });



  it('should successfully enqueue multiple values into a queue',()=>{
    let val = 10;
    let val2= 4;
    let val3=7;
    let node = new Queue();
    node.enqueue(val);
    node.enqueue(val2);
    node.enqueue(val3);
    expect(node.front.value).toBe(10);

  });
  it('should successfully dequeue out of a queue the expected value',() => {
    let val = 10;
    let val2= 4;
    let node = new Queue();

    node.enqueue(val);
    node.enqueue(val2);
    node.dequeue();
    expect(node.front.value).toBe(4);

  });
  it ('should  successfully peek into a queue, seeing the expected value',()=>{
    let val = 10;
    let node = new Queue();
    node.enqueue(val);
    node.peek();
    expect(node.front.value).toBe(10);
  });
  it('should successfully empty a queue after multiple dequeues',() => {
    let val = 10;
    let val2= 4;
    let node = new Queue();

    node.enqueue(val);
    node.enqueue(val2);
    node.dequeue();
    node.dequeue();
    expect(node.sQueue).toBe(0);
  });
  it ('should successfully instantiate an empty Queue',()=>{
    let val= 4;
    let node = new Queue();
    node.enqueue(val);
    expect(node.front.value).toBe(4);
  });
  it ('should successfully Call pop or peek on empty queue raises exception',()=>{
    let node = new Queue();

    function emptyQueue(){
      node.peek();
    }
    expect(emptyQueue).toThrow();
  });

});
