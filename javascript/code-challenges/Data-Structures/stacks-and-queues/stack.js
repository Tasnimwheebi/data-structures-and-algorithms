'use strict';
const Node = require('./node');
class Stack {
  constructor(){
    this.top=null;
    this.sNode=0;
  }
  push(val){
    let node = new Node(val);
    if(this.top===null){
      this.top=node;
      this.sNode+=1;

    } else {
      let current = this.top;
      this.top = node;
      this.top.next = current;
      this.sNode = this.sNode+1;
    }

  }
  pop(){
    if(this.top === null){
      throw new Error('the stack is empty!!');
    }
    else {
      this.top = this.top.next;
      this.sNode = this.sNode-1;
      return this;
    }
  }
  peek(){
    if(this.top===null){
      throw new Error ('The stack is empty');
    }else {
      return this.top;
    }
  }
  isEmpty(){
    if(this.top===null){
      return false ;
    }else{
      return true;
    }
  }
}
module.exports=Stack;
