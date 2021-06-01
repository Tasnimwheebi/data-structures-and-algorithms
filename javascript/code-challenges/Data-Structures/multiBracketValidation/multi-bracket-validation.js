'use strict';
const Stack = require('.././stacks-and-queues/stack.js');

// class MultiBracketValidation {
//   constructor(){
//     this.brackets = new Stack();
//   }
//   multiBracketValidation(input){
//     while (input === '{'|| input=== '(' || input === '['){
//       this.brackets.push(input);
//     }
//     while (input==='}' || input === ')' || input === ']'){
//       if (input === '}' && this.brackets.top === '{'){
//         this.brackets.pop();
//         return true ;
//       } else if (input === ')' && this.brackets.top === '('){
//         this.brackets.pop();
//         return true ;
//       } else if (input === ']' && this.brackets.top === '['){
//         this.brackets.pop();
//         return true;
//       } else return false ;
//     }
//   }
// }

function multiBracketValidation(input){
  const brackets = new Stack();
  for (let i = 0 ; i<input.length ; i++){
    while (input){
      if (input[i] === '{'|| input[i]=== '(' || input[i] === '['){
        brackets.push(input);

        if (input[i] === '}' && input.includes('{')){
          input[i].pop();
        }
        else if (input[i] === ']' && input.includes('[')){
          input[i].pop();
        } else if(input[i] === ')' && input.includes('(')){
          input[i].pop();
        }
        return true;

      } else {
        return false;
      }

    }
  }
}
module.exports = multiBracketValidation;
