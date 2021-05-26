'use strict';
const {expect} = require('@jest/globals');
const LinkedList=require('../linkedList/linked-list.js');
const zipLists=require('./ll-zip.js');
describe( 'linked-lists-zip' ,()=>{
  // if it's create new linked list
  it( 'should create new linked list',()=>{
    //arrange
    let ll1 = new LinkedList ();
    let ll2 = new LinkedList ();
    ll1.insert( 10 );
    ll1.insert( 1 );
    ll2.insert( 3 );
    ll2.insert( 8 );
    //act
    let x = zipLists ( ll1,ll2 );
    //assert
    expect(x.toString()).toEqual( '{10} ->{3} ->{1} ->{8} ->NULL' );
  } );
  it( 'should create new linked list',()=>{
    //arrange
    let ll1 = new LinkedList ();
    let ll2 = new LinkedList ();
    ll1.insert( 9 );
    ll1.insert( 1 );
    ll2.insert( 6 );
    ll2.insert( 5 );
    ll2.insert( 7 );
    //act
    let x = zipLists ( ll1,ll2 );
    //assert
    expect(x.toString()).toEqual( '{9} ->{6} ->{1} ->{5} ->{7} ->NULL' );
  } );
  it( 'should create new linked list',()=>{
    //arrange
    let ll1 = new LinkedList ();
    let ll2 = new LinkedList ();
    ll1.insert( 8 );
    ll1.insert( 1 );
    ll1.insert( 6 );
    ll2.insert( 5 );
    ll2.insert( 7 );
    //act
    let x = zipLists ( ll1,ll2 );
    //assert
    expect(x.toString()).toEqual( '{8} ->{5} ->{1} ->{7} ->{6} ->NULL');
  } );
  it( 'should throw an error with empty linked list',()=>{
    //arrange
    let ll1 = new LinkedList ();
    let ll2 = new LinkedList ();
    //act
    function x(){
      zipLists ( ll1,ll2 );
    }
    //assert
    expect(x).toThrow('please input linked list');
  } );
});