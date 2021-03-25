/**
 * 
 
 Destructuring
 */

const myStateArray = [true, () => null];


// quicly declare variables that get a certain element from the array
const [ isVisible, setIsVisible ] = myStateArray

const myPropsObj = { name: "yariv", age: 36 }

// destructuing from object
const { name, age } = myPropsObj;