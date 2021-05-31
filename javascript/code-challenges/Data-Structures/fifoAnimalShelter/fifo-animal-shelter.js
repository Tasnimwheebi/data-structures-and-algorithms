'use strict';

const Queue = require('../stacks-and-queues/queue');


class AnimalShelter{
  constructor(){
    this.cat=new Queue();
    this.dog=new Queue();
  }
  enqueue(animal){
    if (animal!== 'cat' && animal!=='dog'){
      return null;
    } else if (animal === 'cat'){
      this.cat.enqueue(animal);
    }else if (animal === 'dog'){
      this.dog.enqueue(animal);
    }
  }
  dequeue(pref){
    if (pref !== 'cat' && pref !=='dog'){
      return null;
    } else if (pref === 'cat'){
      return this.cat.enqueue();
    }else if (pref === 'dog'){
      return this.dog.enqueue();
    }
  }


}
module.exports= AnimalShelter;
