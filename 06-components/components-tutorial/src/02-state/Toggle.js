/**

hello world
button

pressing the button will toggle the hello world text


 */
 
import { useState } from 'react';
 
export default function Toggle() {
	// render function
	// will be called many times
	
	// [true, (newValue) => {}]
	/*
	const stateArray = useState(true);
	const isVisible = stateArray[0];
	const setIsVisible = stateArray[1];
	*/
	const [ isVisible, setIsVisible ] = useState(true);
	
	const anotherStateArray = useState([])
	
	
	const toggleText = () => {
		setIsVisible(!isVisible);
	}
	
	return (
		<div>
			{
				isVisible && (
					<h1>
						Hello world - Toggle me
					</h1>
				) 
			}
			<button onClick={toggleText} >
				Toggle hello world
			</button>
		</div>
	)
}