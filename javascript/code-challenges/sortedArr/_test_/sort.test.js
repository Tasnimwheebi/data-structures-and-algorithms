'use strict';
const { expect } = require('@jest/globals');
const insertionSort = require('../sort.js');

describe('sorted array function', () => {

  it('should return an a sorted array ', () => {
    let arr =[8,4,23,42,16,15];


    expect(insertionSort(arr)).toEqual([ 4, 8, 15, 16, 23, 42 ]);
  });

});
