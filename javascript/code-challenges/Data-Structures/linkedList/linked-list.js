'use strict';

// access node.js to create new obj
const Node = require('./node.js');

// create class for linkedlist
class LinkedList {
  constructor() {
    this.head = null;
  }

  // 1st scenario method ---> insert node
  insert ( value ) {
    let node = new Node ( value );
    if ( !this.head ){
      this.head = node ;
    }
    else {
      let head = this.head;
      while( head.next ){
        head = head.next;
      }
      head.next = node ;
    }
  }

  // 2nd scenario method ---> includes which check if the node(val) included or not
  includes ( value ) {
    let node = this.head ;
    if ( !node ){
      return false;
    }
    else {
      while ( node.next ){
        if ( value === node.value ){
          return true;
        }
        node = node.next;
      }
      return false;
    }
  }

  // 3rd scenario method ---> toString which return all the values representing in linked list
  toString (){
    let node = this.head ;
    let stringValues = '' ;
    if ( !node ){
      stringValues = 'NULL';
      return stringValues ;
    }
    else {
      while( node ){
        stringValues += `{${node.value}} ->`;
        node = node.next;
      }
      stringValues += 'NULL';
    }
    return stringValues ;
  }
  append(value){
    if(!value){
      throw new Error('You did not insert any value !!!');
    }
    let node = new Node(value);
    if(!this.head){
      this.head = node;
    }
    else {
      let temp = this.head;
      while(temp.next !== null){
        temp = temp.next;
      }
      temp.next = node;
    }
  }
  insertBefore(value, newVal){
    if(!value && newVal){
      throw new Error('You did not insert any value !!!');
    }

    let node = new Node(newVal);

    if(this.head === value){
      node.next = this.head;
      this.head = node;
    }
    else {
      let temp = this.head;
      while(temp.next !== null){

        if(temp.next.value === value){
          node.next = temp.next;
          temp.next = node;
          return;
        }
        temp = temp.next;
      }
      throw new Error('Exception');
    }
  }
  insertAfter(value, newVal){
    if(!value && newVal){
      throw new Error('You did not insert any value !!!');
    }
    let node = new Node(newVal);
    if(this.head === value){
      this.head.next = node;
    } else{
      let temp = this.head;
      while(temp !== null){
        if(temp.value === value){
          node.next = temp.next;
          temp.next = node;
          return;
        }
        temp = temp.next;
      }
      throw new Error('Exception');
    }
  }
  llkthFromEnd(k){
    if(k===null||k<0){
      throw new Error('You did not insert any value or the value is negative !!!');
    }
    let temp = this.head;
    let length = 0;
    while(temp !== null){
      temp = temp.next;
      length++;
    }
    console.log(length);
    if(k>length-1){
      throw new Error('k is greater than length of linkedlist ');
    }
    let distance = length-k-1;
    temp = this.head;
    while(distance !== 0){
      temp = temp.next;
      distance--;
    }
    return temp;
  }

}

// export LinkedList class
module.exports = LinkedList;
