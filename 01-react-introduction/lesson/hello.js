

/*

// will return the dom element of the div
const container = document.getElementById('container')

// new h1 element with text
const h1 = document.createElement('h1');
h1.innerText = 'hello world from javascript';

// connect h1 to the dom
container.appendChild(h1);

*/


// lets create the same hello world with react

// <h1>hello from react</h1>

/*
	<h1>
		<span>
			<u>			
				hello from react with underline
			</u>
		</span>
	</h1>
*/
/*
const h1 = React.createElement(
	'h1',
	undefined,
	React.createElement(
		'span',
		undefined,
		React.createElement(
			'u',
			undefined,
			'hello from react with underline'
		)
	)
)
*/

/*
const h1 = (
	<h1>
		<span>
			<u>			
				hello from react with underline with html like syntax
			</u>
		</span>
	</h1>
)
*/

// user interface
// React 
// UI from the page we want to create
function HelloWorld() {
	return (
		<h1>
			<span>
				<u>			
					hello from react with function
				</u>
			</span>
		</h1>
	)
}


function Login() {
	return (
		<form>
			
		</form>
	)
}


/*
function Header() {
	return (
		<header>
			...
		</header>
	)
}
*/

// components tree

function App() {
	return (
		<div>
			<HelloWorld />
			<HelloWorld />
			<Login />
		</div>
	)
}

ReactDOM.render(
	// React.createElement(HelloWorld)
	<App />,
	document.getElementById('container')
);

