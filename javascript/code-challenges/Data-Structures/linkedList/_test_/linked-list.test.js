'use strict';

// require Node class
const Node = require( '../node.js' );
// require Linked list class
const LinkedList = require( '../linked-list.js' );
// require jest
const {describe} = require( '@jest/globals' );



// testing
describe ( 'LinkedList', ()=>{

  //1st scenario: test when the linked list is empty will return null
  it( 'should return empty linked list (null)',()=>{
    //////arrange//////
    let linkedList = new LinkedList() ;
    //////assert//////
    expect( linkedList.head ).toBeNull();
  } );


  //2nd scenario: test inserted node into linked list
  it( 'should insert new node', ()=>{
    //////arrange//////
    let val = 10 ;
    let linkedList = new LinkedList ( val );
    //////act//////
    linkedList.insert( val );
    //////assert//////
    expect( linkedList.head.value ).toBe( 10 );
  } );


  //3rd scenario: test if the head property will properly point to the first node in the linked list
  it( 'The head property should will properly point to the first node',()=>{
  } );


  //4th scenario: test if we can insert multiple nodes
  it( 'should insert multiple node into linked list',()=>{
    //////arrange//////
    let linkedList = new LinkedList ();
    let val = 7;
    let val2 = 9 ;
    let val3 = 18 ;
    let val4 = 27 ;
    //////act//////
    linkedList.insert( val );
    linkedList.insert( val2 );
    linkedList.insert( val3 );
    linkedList.insert( val4 );
    //////assert//////
    expect( linkedList.includes(val2) ).toBeTruthy();
  } );


  //5th scenario: test when finding included value will return true
  it( 'should return true when finding the value', ()=>{
    //arrange
    let linkedList = new LinkedList ();
    linkedList.insert( 10 );
    linkedList.insert( 20 );
    //act
    let test = linkedList.includes( 10 );
    //assert
    expect( test ).toBeTruthy();
  } );

  //6th scenario: test when we did't find the value will return false
  it( 'should return false when searching for not exist value', ()=>{
    //////arrange//////
    let val = 10 ;
    let linkedList= new LinkedList ( val );
    //////act//////
    //////assert//////
    expect( linkedList.includes( val ) ).toBeFalsy();
  } );


  //7th scenario: test if it's return all values in linked list
  it( 'should return all values in linked list', ()=>{
    /////arrange
    let linkedList = new LinkedList ();
    linkedList.insert( 'a' );
    linkedList.insert( 'b' );
    linkedList.insert( 'c' );
    //act
    let test = linkedList.toString();
    //assert
    expect( test ).toEqual( '{a} ->{b} ->{c} ->NULL' );
  } );


  // it('should successfully add a node to the end of the linked list',() => {
  //   let linkedList = new LinkedList();
  //   let lastVlaue = 10;
  //   linkedList.append(lastVlaue);
  //   expect(linkedList.head.next.value).toEqual(lastVlaue);
  // });
  // it('should successfully add multiple nodes to the end of a linked list',() => {
  //   let linkedList = new LinkedList();
  //   let lastValue = 10;
  //   let lastValue1 = 11;
  //   linkedList.append(lastValue);
  //   linkedList.append(lastValue1);
  //   expect(linkedList.head.next.value).toEqual(lastValue1);
  // });
  // it('should successfully insert a node before a node located i the middle of a linked list',() => {
  //   let linkedList = new LinkedList();
  //   linkedList.insert(1);
  //   linkedList.insert(2);
  //   linkedList.insert(3);
  //   linkedList.insert(4);
  //   linkedList.insertBefore(3,5);
  //   expect(linkedList.head.next.value).toEqual(5);
  // });
  // it('should successfully insert a node before the first node of a linked list',() => {
  //   let linkedList = new LinkedList();
  //   linkedList.insert(6);
  //   linkedList.insertBefore(6,7);
  //   expect(linkedList.head.value).toEqual(7);
  // });
  // it('should successfully insert after a node in the middle of the linked list',() => {
  //   let linkedList = new LinkedList();
  //   linkedList.insert(1);
  //   linkedList.insert(2);
  //   linkedList.insert(3);
  //   linkedList.insertAfter(2,4);
  //   expect(linkedList.head.next.value).toEqual(4);
  // });


  it('should successfully add a node to the end of the linked list',() => {
    let ll = new LinkedList();
    ll.insert(1);
    let lastVlaue = 10;
    ll.append(lastVlaue);
    expect(ll.head.next.value).toEqual(lastVlaue);
  });
  it('should successfully add multiple nodes to the end of a linked list',() => {
    let ll = new LinkedList();
    ll.insert(1);
    let lastValue = 10;
    let lastValue1 = 11;
    ll.append(lastValue);
    ll.append(lastValue1);
    expect(ll.head.next.next.value).toEqual(lastValue1);
  });
  it('should successfully insert a node before a node located i the middle of a linked list',() => {
    let ll = new LinkedList();
    ll.insert(1);
    ll.insert(2);
    ll.insert(3);
    ll.insert(4);
    ll.insertBefore(3,5);
    expect(ll.head.next.value).toEqual(5);
  });
  it('should successfully insert a node before the first node of a linked list',() => {
    let ll = new LinkedList();
    ll.insert(6);
    ll.insertBefore(6,7);
    expect(ll.head.value).toEqual(7);
  });
  it('should successfully insert after a node in the middle of the linked list',() => {
    let ll = new LinkedList();
    ll.insert(1);
    ll.insert(2);
    ll.insert(3);
    ll.insertAfter(2,4);
    expect(ll.head.next.next.value).toEqual(4);
  });
  it('should successfully insert a node after the last node of the linked list',() => {
    let ll = new LinkedList();
    ll.insert(1);
    ll.insert(2);
    ll.insertAfter(1,3);
    expect(ll.head.next.next.value).toEqual(3);
  });

} );

it('should return not found when k is greater than length of linkedlist',() => {
  let ll = new LinkedList();
  ll.insert(1);
  ll.insert(2);
  ll.insert(3);
  function notFound(){
    ll.llkthFromEnd(4);
  }
  expect(notFound).toThrow();
});
it('should return false if the k equal to length of the linkedlist ',() => {
  let ll = new LinkedList();
  ll.insert(1);
  ll.insert(2);
  ll.insert(3);
  ll.insert(4);
  function notFound(){
    ll.llkthFromEnd(4);
  }
  expect(notFound).toThrow();
});
it('should return error when the k is not a positive integer',() => {
  let ll = new LinkedList();
  ll.insert(1);
  ll.insert(2);
  ll.insert(3);
  function notFound(){
    let x = ll.llkthFromEnd(-1);
    console.log('negative',x);
  }
  expect(notFound).toThrow();
});
it('should test if the length of the linkedlist is 1',() => {
  let ll = new LinkedList();
  ll.insert(1);
  let value = ll.llkthFromEnd(0);
  expect(value.value).toEqual(1);
});
it('should return the value except the end or the begining',() => {
  let ll = new LinkedList();
  ll.insert(1);
  ll.insert(2);
  ll.insert(3);
  ll.insert(4);
  let value =  ll.llkthFromEnd(2);
  expect(value.value).toEqual(3);
});
