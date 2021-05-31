'use strict';
const node = require('.././stacks-and-queues/node.js');
const Stack = require('.././stacks-and-queues/stack.js');
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
      throw new Error('There is no stack');

    }
    while(this.stack1){
    //   let x = this.stack1.push();
      let y=  this.stack2.push(this.stack1);
      let x = this.stack1.pop();
      return x ;
    }
  }
}

module.exports=PseudoQueue;
