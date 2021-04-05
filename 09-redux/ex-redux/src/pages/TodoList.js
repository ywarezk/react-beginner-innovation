import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import Paper from '@material-ui/core/Paper';
import { useState } from 'react';
import { Button } from '@material-ui/core';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function TodoList() {
	const [todoList, setTodoList] = useState([]);
	const location = useLocation();
	const token = useSelector((state) => {
		return state.user.token
	})
	
	const loadList = async (search = '') => {
		const response = await fetch(
			`https://academeez-login-ex.herokuapp.com/api/tasks?format=json&search=${search}`,
			{
				headers: {
					'Authorization': `Bearer ${token}`
				}
			}
		);
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
			if (!token) return;
			loadList(location.search.split('=')[1]);			
		},
		[
			location.search,
			token
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
								<div>
									<h1>
										{
											singleTodo.title
										}
									</h1>
									<p>
										{
											singleTodo.description
										}
									</p>
								</div>
								
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