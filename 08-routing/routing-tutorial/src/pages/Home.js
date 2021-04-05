/* 
/  => Home
*/

import { useHistory } from 'react-router-dom';

export default function Home() {
	const history = useHistory()
	
	
	/**
	 * we want to navigate the user to the about page
	 */
	const navigateToAbout = () => {
		history.push('/about?hello=world&foo=bar');
	}
	
	return (
		<div>
			<h1>
				Welcome to the home page
			</h1>
			<button onClick={ navigateToAbout }>
				Move to the about page
			</button>
		</div>
		
	)
}