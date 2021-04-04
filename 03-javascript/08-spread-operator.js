

const stam = { a: 'hello', b: 42 }

// clone new object { a: 'hello', b: 42, d: 'wat'  }
const copyOfStam = { ...stam, d: 'wat' }

// clone new object { a: 'hello', b: 42, d: 'wat', c: true }
const copyOfStam2 = { ...stam, ...copyOfStam, c: true }

const stamArray = [1, "hello", true];

const copyOsStamArray = [ ...stamArray, 10, 20 ]