'use strict';
const Node = require('../tree/node.js');
const {BinaryTree} =require('../tree/tree.js');
function treeIntersection(binaryTree1,binaryTree2){
  let arr=[];
  if(!binaryTree1 || !binaryTree2){
    return null;
  } else {

    let tree1=binaryTree1.preOrder();
    let tree2= binaryTree2.preOrder();
    for (let i = 0; i < tree1.length; i++) {
      if(tree1[i]===tree2[i]){

        arr.push(tree1[i]);

      }

    }
  }
  return arr;
}
// module.exports= {treeIntersection,Node,BinaryTree};
module.exports={BinaryTree:BinaryTree,Node:Node,treeIntersection:treeIntersection};

// const mergeTrees = (t1, t2) => {
//   //when there is null given tree
//   if(!t1 || !t2) return t1 || t2;

//   //both of trees are not null,
//   //we sum the value, and transform t1,
//   //we can also choose t2, and return t2 at the end
//   t1.val += t2.val;

//   //recursively traverse left path
//   t1.left = mergeTrees(t1.left, t2.left);
//   //recursively traverse right path
//   t1.right = mergeTrees(t1.right, t2.right);

//   //return merged tree
//   return t1;


// };
// module.exports = mergeTrees;
