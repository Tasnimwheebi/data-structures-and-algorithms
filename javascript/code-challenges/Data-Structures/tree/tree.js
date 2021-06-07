'use strict';

class BinaryTree {
  constructor(root=null){
    this.root=root;
  }
  preOrder(){
    let arr=[];
    let traverse = (node)=>{
      arr.push(node.value);
      if(node.left) traverse (node.left);
      if(node.right) traverse (node.right);

    };
    traverse(this.root);
    return arr;
  }
  inOrder(){
    let arr=[];
    let traverse = (node)=>{
      if(node.left) traverse (node.left);
      arr.push(node.value);
      if(node.right) traverse (node.right);

    };
    traverse(this.root);
    return arr;
  }
  postOrder(){
    let arr=[];
    let traverse = (node)=>{
      if(node.left) traverse (node.left);
      if(node.right) traverse (node.right);
      arr.push(node.value);

    };
    traverse(this.root);
    return arr;
  }
  findMaximum(){
    // let newNode = new Node(value);
    if (this.root !== null && this.root.left ===null && this.root.right === null){

      return this.root.value;
    } else if (this.root.left !== null && this.root.left < this.root.right){
      // this.root.left = newNode;
      return this.right.value;
      // return this.root.right;
    } else if (this.root.right === null && this.root.right <this.root.left){
      // this.root.right = newNode;

      return this.left.value;

      // return (this.root.right);
    }
  }
  breadth(){
    let arr = [];
    if (this.root !== null){
      arr.push(this.root);
    }
    let x=  arr.shift();
    arr.push(x.value);
    let traverse = (node)=>{

      while(arr.length > 0){

        if(x.node !==null) {
          arr.push(x.node);
        }
        if(x.node.right !==null){

          arr.push(x.node.right);
        }
      }
    };
    traverse(this.root.left);
    return arr;
  }

}


class BinarySearchTree {
  constructor(root=null){
    this.root=root;
  }

  add(value){
    let newNode = new Node(value);
    if(this.root ===null){

      this.root = newNode;
    }
    if(value>this.root.value && this.root.right===null){
      let traverse = (node)=>{
        node.right = newNode ;
      };
      traverse(this.root.right);
    }
    if(value<this.root.value && this.root.left===null){
      let traverse = (node)=>{
        node.left = newNode ;
      };
      traverse(this.root.left);
    }
  }
  contains( value ){
    let node = new Node ( value );
    if ( this.root === node.value || this.root.left === node.value || this.root.right === node.value ){
      return true;
    }
    else {
      return false;
    }
  }


}
module.exports = {BinaryTree ,BinarySearchTree} ;
