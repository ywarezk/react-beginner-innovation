
function Header() {
	return (
		<header className="header">
			<img src="piglet.png" height="100" />
			<nav className="">
				<ul className="navbar-nav me-auto mb-2 mb-lg-0">
					<li className="nav-item">
						<a className="nav-link active" href="/">Home</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="/about">About</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="/todo">Todo List</a>
					</li>
				</ul>
			</nav>
		</header>
	)
}

function Login() {
	const isLoading = false;
	
	const handleSubmit = async (event) => {
		event.preventDefault();
		const response = await fetch(
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
		const data = await response.json();
		console.log(data);
		
	}
	
	return (
		<form onSubmit={handleSubmit}>
			<div className="mb-3">
				<label className="form-label">Email address</label>
				<input type="email" className="form-control" />	
			</div>
			<div className="mb-3">
				<label>Password</label>
				<input type="password" className="form-control" />
			</div>
			<button 
				disabled={isLoading}
				type="submit" 
				className="btn btn-primary"
			>Submit</button>
			{
				isLoading && <h1>Loading...</h1>
			}
		</form>
	)
}

function Footer() {
	return (
		<footer className="footer">
			<div className="container">
				<ul className="bd-footer-links ps-0 mb-3">
					<li className="d-inline-block">
						<a href="https://www.youtube.com/user/ywarezk">
							My youtube channel
						</a>
					</li>
					<li className="d-inline-block ml-3">
						<a href="https://www.youtube.com/watch?v=bVPMCmTN__Q&list=PLnHa2cF4cNDtfkYKO6v069GUPYrJtijwc">
							React playlist
						</a>
					</li>
				</ul>
				<p className="mb-0">Designed and built with all the love in the world by the <a href="https://il.linkedin.com/in/yariv-katz">Yariv Katz</a></p>
			</div>
		</footer>
	)
}

function TodoList() {
	const todoList = [
		{"id":9870,"title":"title","description":"desc","group":"45","when":"2019-09-07T18:27:32.960000Z"},
		{"id":9874,"title":"title","description":"desc","group":"45","when":"2019-09-07T18:27:32.960000Z"},
		{"id":9910,"title":"new","description":"yuval_azani7","group":"45","when":"2019-09-21T12:30:35.620000Z"},
		{"id":9914,"title":"new","description":"yuval_azani7","group":"45","when":"2019-09-21T12:30:35.620000Z"},
		{"id":9916,"title":"title","description":null,"group":"1","when":"2019-09-07T18:27:32.960000Z"},
		{"id":10119,"title":"title:0.38468893136429116","description":"description:0.8604495392622051","group":"group:test","when":"2020-12-02T20:57:10.292000Z"},
		{"id":9802,"title":"vsdvg sgg","description":"description 0.28810915079174815","group":"33","when":"2019-09-21T12:30:27.860000Z"},
		{"id":9917,"title":"my titl","description":"this is test of description","group":"test","when":"2020-01-20T18:23:10.267000Z"}
	]
	
	const deleteTodo = (todoItem) => {
		console.log(`Deleting the item ${todoItem.title}`);
	}
	
	return (
		<ul className="list-group">
			{
				todoList.map(function(singleTodo) {
					return (
						<li className="align-items-center list-group-item d-flex justify-content-between" key={singleTodo.id}>
							{
								singleTodo.title
							}
							<button className="btn btn-danger" onClick={function() { deleteTodo(singleTodo) } }>
								Delete
							</button>
						</li>
					)	
				})
			}
		</ul>
	)	
}

function App() {
	return (
		<div className="wrapper">
			<Header />
			
			<div className="container">
				<div className="row justify-content-center">
					<div className="col-4">
						<Login />
					</div>
				</div>
				
				<div className="row justify-content-center">
					<div className="col-4">
						<TodoList />
					</div>
				</div>
			</div>	
			
			<Footer />		
		</div>		
	)
}

ReactDOM.render(
	<App />,
	document.getElementById('container')
)


 
 