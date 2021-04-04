/**

3..2..1..

 */

import { useState, useEffect } from "react"

/*

setInterval(() => { ... }, 1000)

*/
 
export default function Counter({ destroyCb }) {
	var [ currentCountdown, setCurrentCountdown ] = useState(3);
	
	useEffect(
		() => {
			// this will run on birth
			const intervalId = setInterval(() => {
				
				// this is called every second
				setCurrentCountdown((updatedCountdown) => {
					/*
					if (updatedCountdown === 0) {
						destroyCb(false);
					}
					*/
					
					return updatedCountdown - 1;
				});	 
				
			}, 1000);
			
			
			return () => {
				clearInterval(intervalId);
			}
			
			/*
			return function() {
				clearInterval(intervalId);
			}
			*/
		},
		[] // equal initiation/birth of the component
	)
	
	/*
	// not the correct place 
	setInterval(() => {
		setCurrentCountdown(currentCountdown - 1);	 
	}, 1000);
	*/
	
	// call this function when maybe i need to destroy the component
	// ngOnInit - when component is born
	// ngDoCheck - when component is updated run login
	// onDestroy - when the component needs to clean what it opened
	useEffect(
		
		// this function will be called when the currentCountdown is changed
		() => {
			
			if (currentCountdown === 0) {
				destroyCb(false);
			}
			
		},
		[ currentCountdown ]
	)
	
	const handleClick = () => {
		setCurrentCountdown(currentCountdown - 1);
	}
	 
	return (
		<div>
			<h1>
			{ currentCountdown }
			</h1>
			<button onClick={handleClick}>
				reduce countdown
			</button>
		</div>
		
	)
 }