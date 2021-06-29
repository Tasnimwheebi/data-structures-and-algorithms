let { Node,LinkedList,HashTable} = require('.././hashTable/hashTable.js');


function leftJoin(left,right){
  let hash = new HashTable();
  for (let key of Object.keys(left.table)){
    let hashMap1=left.getKey(key);
    let hashMap2 = right.getKey(key);
    hash.add(key, [hashMap1,hashMap2 ]);
  }
  return hash;
}
module.exports = leftJoin ;
