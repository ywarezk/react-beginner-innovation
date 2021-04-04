import { useState } from 'react';

// save in react state the input from the user

/**
 controlled form
 
 the form state is determined by react state and not by the browser
 
 */

export default function Name() {
	const [ inputValue, setInputValue ] = useState('some initial value');
	const [error, setError] = useState(null);
	
	const handleSubmit = (event) => {
		event.preventDefault();
		
		if (!inputValue) {
			setError('this field is required');
		} else {
			setError(null);
		}
	}
	
	const handleChange = ( event ) => {
		setInputValue(event.target.value);
	}
	
	return (
		<form onSubmit={handleSubmit}>
			<input 
				onChange={ handleChange }
				value={ inputValue }	
				name="your-name" 
				type="text" 
				placeholder="Enter your name" />
			
			{
				error && (
					<div className="error">
						{error}
					</div>		
				)
			}	
			
			
			<button>
				Submit
			</button>
		</form>
	)
	
}