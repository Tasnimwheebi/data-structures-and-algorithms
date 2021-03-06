'use stict';
const Node = require('../node.js');
const {BinaryTree ,BinarySearchTree}  = require ('../tree.js');
let tree=null;

describe('binaryTree',()=>{
  beforeAll(()=>{
    let one = new Node(1);
    let two = new Node(2);
    let three = new Node(3);
    let four = new Node(4);
    let five = new Node(5);
    let six = new Node(6);
    let seven = new Node(7);

    one.left = two;
    one.right = three;
    two.left = four;
    two.right = five;
    three.left = six;
    three.right = seven;

    tree = new BinaryTree(one);
  });
  it('should successfully return a collection from a preorder traversal', ()=>{
    expect(tree.preOrder()).toEqual([1,2,4,5,3,6,7]);
  });
  it('should successfully return a collection from a ineorder traversal', ()=>{
    expect(tree.inOrder()).toEqual([4,2,5,1,6,3,7]);
  });
  it('should successfully return a collection from a ineorder traversal', ()=>{
    expect(tree.inOrder()).toEqual([4,2,5,1,6,3,7]);
  });
  it('should successfully instantiate an empty tree', ()=>{

    let tree2 = new BinaryTree();
    expect(tree2.root).toBeNull();
  });
  it('should successfully instantiate a tree with a single root node',()=>{
    let node3 = new Node(6);
    let tree3 = new BinaryTree(node3);
    expect(tree3.root).toBeEqual(6);
  });
  it ('should get the max value in the tree', ()=>{

    expect(tree.findMaximum()).toEqual();
  });
  it('should return an array with an order of each subtree',()=>{
    expect(tree.breadth()).toEqual([1,2,3,4,5,6,7]);
  });
});


