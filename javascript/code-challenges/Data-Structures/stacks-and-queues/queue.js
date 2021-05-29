'use strict';
const Node = require('./node.js');
class Queue {
  constructor(){
    this.front= null;
  }
  enqueue(val){
    let node = new Node(val);
    if (this.front===null){
      this.front=node;
    }
    let current = this.front;
    while(this.front.next!==null){
      current = current.next;
    }
    current = node ;
  }

  dequeue(){
    if (this.front===null){
      throw new Error ('The Queue is empty');
    }else {
      this.front=null;

      return this.front.next;
    }

  }
  peek(){
    if (this.front===null){
      throw new Error ('The Queue is empty');
    }else
      return this.front;

  }
  isEmpty(){
    if(this.front===null){
      return false ;
    }else{
      return true;
    }
  }
}

module.exports=Queue;
