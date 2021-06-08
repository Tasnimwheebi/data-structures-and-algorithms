'use strict';
class FizzBuzzTree {
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
}

let tree = new FizzBuzzTree();
function fizzBuzzTree (k) {
  if(!k.root) return null;
  let results = k;

  let traverse = node => {
    if (node.value % 15 === 0) {
      node.value = 'FizzBuzz';
    } else if (node.value % 3 === 0) {
      node.value = 'Fizz';
    } else if (node.value % 5 === 0) {
      node.value = 'Buzz';
    } else {
      node.value = node.value.toString();
    }
    if (node.left) traverse(node.left);
    if (node.right) traverse(node.right);
  };

  traverse(results.root);
  return results;

}
fizzBuzzTree(tree);
module.exports=FizzBuzzTree;

