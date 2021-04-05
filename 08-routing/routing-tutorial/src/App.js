import './App.css';
import { Route, Switch, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Error404 from './pages/Error404';
import Question from './pages/Question';

function App() {
  return (
    <div className="App">
	
		<nav>
			<ul>
				<li>
					<Link to="/">
						Home
					</Link>
				</li>
				<li>
					<Link to="/about">
						About page
					</Link>
				</li>
				
				<li>
					<Link to="/question/12345678">
						Some question page
					</Link>
				</li>
			</ul>
		</nav>
      
	  	<Switch>
	  
			<Route path="/" exact>
				<Home />
			</Route>
			
			{/* /about/foo/bar */}
			<Route path="/about" exact >
				<About />
			</Route>
			
			<Route path="/question/:questionId">
				<Question />
			</Route>
			
			<Route>
				<Error404 />
			</Route>
	  
	  	</Switch>
	  
	  
    </div>
  );
}

export default App;
