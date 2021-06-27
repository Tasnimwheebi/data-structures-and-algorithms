'use strict';
function repeatedWord(string){
  if(!string){
    throw new Error('you have to input a string');
  }
  let str2 = string.toLowerCase().replace(/,/g,' ');
  const arr=str2.split(/\W+/g);
  let result = arr.find((str,index) => {
    let slicedString = arr.slice(0,index);
    if(slicedString.includes(str)){
      return arr;
    }
  });
  return result;
}
module.exports=repeatedWord;
