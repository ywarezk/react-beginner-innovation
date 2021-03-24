

// string
const stam = 42;

let myString = 'hello';
myString = "hello world";
myString = `
	hello world
	something ${Math.random()}
	foo bar ${stam}
	lurem ipsum
`

// array

const myArray = [];
myArray.push(1);
myArray.push('hello');
myArray.push(true);

// object

const myObj = {};
myObj['hello'] = 'world';
myObj['foo'] = true;

console.log(myObj['hello'])
console.log(myObj.foo);


