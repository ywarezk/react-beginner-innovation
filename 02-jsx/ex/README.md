# Login/Todo Excercise

Continue the app you started in the  `01-react-introduction/ex`

## TodoList

Add a component that displays a todo list.  
That component should have a hard coded array (you can take several items from here: `http://nztodo.herokuapp.com/api/tasks/?format=json`)

Display those items in an unordered list `ul-li` using `map` to iterate on that array.

Each element of the list should have a button

The button should be connected to a click event

When clicking the button you should write to the console which item you want to delete.

## Login

Connect a submit event to the login form.

When submitting the form send the following ajax request

```
fetch(
	'https://academeez-login-ex.herokuapp.com/api/users/login',
	{
		method: 'POST',
		body: JSON.stringify({
			email: 'yariv@nerdeez.com',
			password: '12345678'
		}),
		headers: {
			'Content-Type': 'application/json'
		}
	}
)
```

Print to the console the response json you are getting from the server.

In the Login component add a boolean variable

```
const isLoading = true
```

If this variable is true the submit button should be disabled and a loading text should appear.

If the `isLoading` is false the button should be enabled and the loading text should disappear.



