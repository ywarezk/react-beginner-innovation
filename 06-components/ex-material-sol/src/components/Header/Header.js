import piglet from './piglet.png';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Avatar from '@material-ui/core/Avatar';

export default function Header() {
	return (
		<AppBar position="static">
        	<Toolbar className="d-flex justify-content-between">
				<Avatar alt="piglet is making a booboo" src={piglet} />
				<nav className="navbar navbar-expand-lg navbar-light">
					<ul className="navbar-nav me-auto mb-2 mb-lg-0">
						<li className="nav-item">
							<a className="nav-link active text-white" href="/">Home</a>
						</li>
						<li className="nav-item">
							<a className="nav-link text-white" href="/about">About</a>
						</li>
						<li className="nav-item">
							<a className="nav-link text-white" href="/todo">Todo List</a>
						</li>
					</ul>
				</nav>
			</Toolbar>
		</AppBar>
		
	)
}