'use strict';
const Node = require('./node.js');
class Queue {
  constructor(){
    this.front= null;
    this.sQueue=0;
  }
  enqueue(val){
    let node = new Node(val);
    if (this.front===null){
      this.front=node;
      this.sQueue+=1;
    }
    let current = this.front;
    while(this.front.next!==null){
      current = current.next;

    }
    current.next = node ;
    this.sQueue+=1;
  }

  dequeue(){
    if (this.front===null){
      throw new Error ('The Queue is empty');
    }else {
      let current=this.front;
      current =this.front.next;
      this.sQueue=this.sQueue-1;
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
