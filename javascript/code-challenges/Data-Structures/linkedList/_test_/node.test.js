'use strict';

const Node = require('.././node.js');

describe('node class',()=>{
  it('should create new node object',()=>{
    ///// arrange //////
    let value = 17;
    ///// act ////////
    let node = new Node(value);
    ///// assert /////
    expect(node.value).toEqual(17);
    expect(node.next).toEqual(null);

  });
});
