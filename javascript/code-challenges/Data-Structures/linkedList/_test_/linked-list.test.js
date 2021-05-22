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
} );
