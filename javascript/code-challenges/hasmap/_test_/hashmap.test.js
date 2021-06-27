const repeatedWord = require('../hashmap.js');
const {expect} = require('@jest/globals');


describe('Function repeatedWord',() => {
  it('should return the frist repeated word in a string',() => {
    let string = 'Once upon a time, there was a brave princess who';
    expect(repeatedWord(string)).toBe('a');
  });
  it('should return the frist repeated word in a string and even if it is capitalized or start with uppercase',() => {
    let string = 'It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair, we had everything before us, we had nothing before us, we were all going direct to Heaven, we were all going direct the other way – in short, the period was so far like the present period, that some of its noisiest authorities insisted on its being received, for good or for evil, in the superlative degree of comparison only...';

    expect(repeatedWord(string)).toBe('it');
  });
  it('should  return the frist repeated word in a string even if it followes by comma',() => {
    let string = 'It was a queer, sultry summer, the summer they electrocuted the Rosenbergs, and I didnt know what I was doing in New York...';
    expect(repeatedWord(string)).toBe('summer');
  });
  it('should throw an error if the user does not enter a value as a string',() => {

    function error(){
      repeatedWord();
    }
    expect(error).toThrow();
  });

});
