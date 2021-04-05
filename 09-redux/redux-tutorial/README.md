# Redux

## State

snapshot of our data in a current t

```
state0 = {
	user: {
		firstName: null,
		lastName: null,
		email: null',
		token: null
	},
	todo: {
		tasks: []
	}	
}

state1 = {
	user: {
		firstName: 'Yariv',
		lastName: 'Katz',
		email: 'yariv@nerdeez.com',
		token: 'sdfasdf234234sdf'
	},
	todo: {
		tasks: []
	}	
}

state2 = {
	user: {
		firstName: 'Yariv',
		lastName: 'Katz',
		email: 'yariv@nerdeez.com',
		token: 'sdfasdf234234sdf'
	},
	todo: {
		tasks: [ {title: ...}, {...}]
	}	
}
```

the redux state is immutable

const arr = [1,2,3]
arr.push(4)

let myAge = 36
myAge = 42

## Store

the one the guards and holds the state

## Install redux

Installing redux

```
npm install redux @reduxjs/toolkit
```

redux is not specific to react

## react-redux

connect redux to react components

```
npm install react-redux
```

## creating the Store

```
import { configureStore } from @reduxjs/toolkit
```
const store = configureStore({
	// params the defines our store
})

## browser extension: redux dev tools

Install the following browser extension:

https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=en

## To change the data in redux

```
// change the state in redux
store.dispatch(...)
```

the result is a new state object  
clone previous state  
clonse part of state the i want to change  

state0 -> state1

```
state0 = {
	user: {
		firstName: null,
		lastName: null,
		email: null',
		token: null
	},
	todo: {
		tasks: []
	}	
}

state1 = {
	user: {
		firstName: 'Yariv',
		lastName: 'Katz',
		email: 'yariv@nerdeez.com',
		token: 'sdfasdf234234sdf'
	},
	todo: {
		tasks: []
	}	
}

state1 {
	...state0,
	user: {
		firstName: 'Yariv',
		lastName: 'Katz',
		email: 'yariv@nerdeez.com',
		token: 'sdfasdf234234sdf'
	}
}
```

```
store.dispatch( { type: 'DEPOSIT', payload: 10 } )
```

## Action

action describes a change you want to do in the store state.

The action has name
optional payload with additional data that is required to change the state

{ type: 'DEPOSIT', payload: 10 }

## Reducer

reducer will do the actuall change  
action signifies that you want to do a change

## EX.

- install `redux, @reduxjs/toolkit, react-redux`
- create store using `configureStore`

```
state0 = {
	user: {
		token: null
	}
}
```

- create `userReducer`

```
store.dispatch( {type: 'SET_TOKEN', payload: 'sadfsadf'} )
```

```
state1 = {
	user: {
		token: 'sadfsadf'
	}
}
```

- activate the action after the login
- `TodoList` read the token
- when you get a token you query the server

```
fetch('https://academeez-login-ex.herokuapp.com/api/tasks', {
	headers: {
		'Authorization': `Bearer ${token}`
	}
})
.then(
	(response) => {
		return response.json()
	}
)
.then((json) => {
	setTodos(json);
})
```

## Bonus

- @reduxjs/toolkit - create slice of user reducer
