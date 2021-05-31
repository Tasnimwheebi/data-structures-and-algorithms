'use strict';
const Animal = require('../fifo-animal-shelter.js');


const {describe} = require( '@jest/globals' );
let animal = new Animal();
describe ('animalShelter',()=>{
  it ('should add cat or dog value to the Queue',()=>{
    let animal1 = 'cat';
    let animal2 = 'dog';
    animal.enqueue(animal1);
    animal.enqueue(animal2);
    animal.enqueue('');
    expect(animal.enqueue(animal1)).toBe({animal:'cat'});
    expect(animal.enqueue('')).toBe(null);

  });
});
