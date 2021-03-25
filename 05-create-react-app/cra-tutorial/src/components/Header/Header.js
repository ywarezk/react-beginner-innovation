import piglet from './piglet.png';
import './Header.css';

export default function Header() {
	return (
		<header className="header">
			<img src={piglet} height="200" />
			<h1>
				Hello header
			</h1>
			<button>
				Hello
			</button>
		</header>
	)
}