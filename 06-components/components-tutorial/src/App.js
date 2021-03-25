import './App.css';
import { Hello } from './01-component-props/Hello';
import Toggle from './02-state/Toggle';

function App() {
  return (
    <div className="App">
		<h1>React components tutorial</h1>
		
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
    </div>
  );
}

export default App;
