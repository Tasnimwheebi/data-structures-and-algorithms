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
  add(){

  }
  contains (){

  }
}
module.exports = BinaryTree ;
