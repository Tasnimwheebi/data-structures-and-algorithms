'use stict';
const {expect} = require('@jest/globals');

// const {hash}  = require('../hashmap-tree.js');
const hashmap = require('../hashmap-tree.js');

let tree=null;
let tree2 = null;

describe('treeIntersection',()=>{
  beforeAll(()=>{
    let one = new hashmap.Node(1);
    // let two = new hashmap.Node(2);
    let three = new hashmap.Node(3);
    let four = new hashmap.Node(4);
    let five = new hashmap.Node(5);
    // let six = new hashmap.Node(6);
    let seven = new hashmap.Node(7);

    one.left = seven;
    one.right = three;
    three.left = four;
    three.right = five;
    // three.left = six;
    // three.right = seven;

    tree = new hashmap.BinaryTree(one);

    let six = new hashmap.Node(6);
    seven = new hashmap.Node(7);
    let eight = new hashmap.Node(8);
    let nine = new hashmap.Node(9);
    let ten = new hashmap.Node(10);

    six.left = seven;
    six.right = eight;
    seven.left = nine;
    seven.right = ten;
    // three.left = six;
    tree2 = new hashmap.BinaryTree(six);
    // three.right = seven;
  });
  it('Can successfully merge 2 trees and return the mutual nodes',()=>{
    let result = hashmap.treeIntersection(tree,tree2);
    expect(result).toEqual([7]);
  });
  it('should return null if one of the trees is empty',()=>{
    let result = hashmap.treeIntersection(tree);
    expect(result).toBeNull();
  });
  it('should return null if one of the trees is a string',()=>{
    let str = 'tree';
    let result = hashmap.treeIntersection(str);
    expect(result).toBeNull();
  });
});
