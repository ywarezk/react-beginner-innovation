import piglet from './piglet.png';

export default function Header() {
	return (
		<header className="navbar bg-light d-flex justify-content-between">
			<img alt="piglet is making a booboo" src={piglet} height="100" />
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