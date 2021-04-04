import './App.css';
import { Hello } from './01-component-props/Hello';
import Toggle from './02-state/Toggle';
import Counter from './03-lifecycle/Counter';

function App() {
  return (
    <div className="App">
		<h1>React components tutorial</h1>
		
		<h2> Props </h2>
		
		<Hello 
			name="Yariv" 
			age={36} />
		
		<Hello 
			name="Pigletshvily Chaitovsky" 
			/>
		
		<Hello />
		
		<h2>
			State
		</h2>
		
		<Toggle />
		
		<h2>
			Component lifecycle
		</h2>
		
		<Counter />
    </div>
  );
}

export default App;
