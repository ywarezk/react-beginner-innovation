/**

10..9..8..

 */

import { useState, useEffect } from "react"

/*

setInterval(() => { ... }, 1000)

*/
 
export default function Counter() {
	var [ currentCountdown, setCurrentCountdown ] = useState(10);
	
	useEffect(
		() => {
			// this will run on birth
			setInterval(() => {
				
				// this is called every second
				setCurrentCountdown((updatedCountdown) => {
					return updatedCountdown - 1;
				});	 
				
			}, 1000);
		},
		[] // equal initiation/birth of the component
	)
	
	/*
	// not the correct place 
	setInterval(() => {
		setCurrentCountdown(currentCountdown - 1);	 
	}, 1000);
	*/
	 
	 return (
		 <h1>
		 	{ currentCountdown }
		 </h1>
	 )
 }