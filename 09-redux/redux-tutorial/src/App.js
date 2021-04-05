import logo from './logo.svg';
import './App.css';
import Deposit from './components/Deposit';
import CurrentMoney from './components/CurrentMoney';

function App() {
  return (
    <div className="App">
      <Deposit />
	  
	  <CurrentMoney />
    </div>
  );
}

export default App;
