
function Header() {
	return (
		<header className="navbar bg-light d-flex justify-content-between">
			<img src="piglet.png" height="100" />
			<nav className="navbar navbar-expand-lg navbar-light">
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
		<footer className="bd-footer p-3 p-md-5 mt-5 bg-light text-center text-sm-start">
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

function App() {
	return (
		<div className="h-100 d-flex flex-column justify-content-between">
			<Header />
			
			<div className="container">
				<div className="row justify-content-center">
					<div className="col-4">
						<Login />
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


 
 