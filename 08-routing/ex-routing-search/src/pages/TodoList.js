import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import Paper from '@material-ui/core/Paper';
import { useState } from 'react';
import { Button } from '@material-ui/core';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function TodoList() {
	const [todoList, setTodoList] = useState([]);
	const location = useLocation();
	
	const loadList = async (search = '') => {
		const response = await fetch(`http://nztodo.herokuapp.com/api/tasks/?format=json&search=${search}`);
		const todos = await response.json();
		setTodoList(todos);
	}
	
	const deleteTodo = async (todoItem) => {
		await fetch(`http://nztodo.herokuapp.com/api/task/${todoItem.id}?format=json`, {
			method: 'DELETE'
		});
		loadList();
	}
	
	useEffect(
		() => {
			loadList(location.search.split('=')[1]);			
		},
		[
			location.search
		]
	)
	
	return (
		<Paper className="p-4">
			<div className="d-flex justify-content-center mb-4">
				<Button color="primary" variant="contained" onClick={loadList}>
					Load List
				</Button>
			</div>
			
			<ul className="list-group">
				{
					todoList.map(function(singleTodo) {
						return (
							<li className="align-items-center list-group-item d-flex justify-content-between" key={singleTodo.id}>
								{
									singleTodo.title
								}
								<IconButton aria-label="delete" onClick={function() { deleteTodo(singleTodo) } } >
									<DeleteIcon fontSize="small" />
								</IconButton>
							</li>
						)	
					})
				}
			</ul>
		</Paper>		
	)	
}