'use strict';
const node = require('.././stacks-and-queues/node.js');
const Stack = require('.././stacks-and-queues/stack.js');
const stackAndQueue = require('.././stacks-and-queues/stacks_and_queues.js');
const queue = require('.././stacks-and-queues/queue.js');
class PseudoQueue {
  constructor(){
    this.stack1=new Stack;
    this.stack2=new Stack;
  }

  enqueue(value){
    this.stack1.push(value);
  }
  dequeue(){
    if (!this.stack1.top){
      throw new Error('Stack 1 is empty');

    }else
    if(this.stack2.top){
      throw new Error ('Stack 2 is empty');

    }
    while (this.stack1.top!==null){

      this.stack2.push(this.stack1.pop());
    }
    return this.stack2.pop();
  }
}
module.exports= PseudoQueue;
