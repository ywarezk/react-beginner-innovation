/**

How to define variable in js

 */
 
// var
var hello = 'world';
var foo;

hello = 10;
foo = true

// let
let lurem = 'ipsum';
let piglet;

// const
const sweetness = 'fluffy belly';

const myArray = [];
myArray.push(1);

// whats the different and when to use what?
// number of assignments, scope

/*
			number of assignments  |  		scope

var    		         infinite				Functional 

let     			 infinite	   |		    {}

const   				1		   |			{}


*/

const someCondition = true

if (someCondition) {
	var somethingInBlock = 'hello';
	let something = 'something';
}

console.log(somethingInBlock);
console.log(something);


function helloWorld() {
	// var message = 'somemessage';
	let message = 'somemessage';
	
	for(let i=0; i<10; i++) {
		let message = true
	}
	
	console.log(message);
	
}

helloWorld();
console.log(somethingInFunction);