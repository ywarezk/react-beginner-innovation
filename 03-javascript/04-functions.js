

function hello(name = 'Sweetness', age) {
	console.log('hello ' + name);
}

hello('Pigletshvily Chaitovski', 8); // hello pigletshvily...
hello(undefined, 3); // hello sweetness fluffy belly

const myHello = function() {
	console.log('hello world');
}

myHello()

const yetAnotherFunction = (meaningOfLife = 42) => {
	console.log('hello world ' + meaningOfLife);
}

yetAnotherFunction(32);
