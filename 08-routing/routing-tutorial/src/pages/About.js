/* 
/about  => About
*/

import { useLocation } from 'react-router-dom';

export default function About() {
	const location = useLocation();
	
	return (
		<h1>
			Welcome to the about page {location.search}
		</h1>
	)
}