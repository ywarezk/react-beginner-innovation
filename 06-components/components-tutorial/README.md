## EX.

### Login

- `useState` to create boolean variable `isLoading`
- when `isLoading` is true to place a spinner, and submit button should be disabled
- set the `isLoading` to true when the form is submit and set it to false when the server response is returned

### TodoList

- delete the hard coded list
- add a button in the todo list - `load list`
- load all the todo items from the server `http://nztodo.herokuapp.com/api/tasks/?format=json`
- save all the data in the state `const [todo, setTodo] = useState([])`
- iterate on the list with map to display the list in the component
- implement the delete of an element from the list. refetch all the list again to update the changes

```
fetch('https://nztodo.herokuapp.com/api/task/:id?format=json', {
	method: 'DELETE'
})
```
### Bonus

Try and make the queries using the [react-query](https://react-query.tanstack.com/)  library.


## EX.

Install react developer tools:

https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en

- remove the load list button
- use the `useEffect` to fetch the list when the component is born