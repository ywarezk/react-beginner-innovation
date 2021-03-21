
function calculateGreeting() {
	// const isConnected = localStorage.getItem('token') != null ? 'Piglet' : 'Guest';
	
	const isConnected2 = localStorage.getItem('token') != null ? 'Piglet' : null;
	
	if (localStorage.getItem('token') != null) {
		return 'Piglet'
	} else {
		return 'Guest'
	}
}

const header = (
	<header>
		<h1>hello { calculateGreeting() }</h1>
	</header>
)

const header = (
	<header>
		<h1 style={ localStorage.getItem('token') != null ? {color: 'green'} : { color: 'red'} }>hello 
		{ 
			/*
			
			not in our school
			
			if (localStorage.getItem('token') != null) {
				return 'Piglet'
			} else {
				return 'Guest'
			}
			
			*/
			
			localStorage.getItem('token') != null ? 'Piglet' : 'Guest'
		}
		
		{
			localStorage.getItem('token') != null ? 'Piglet' : null
		}
		
		{
			localStorage.getItem('token') != null && 'Piglet'
		}
		
		{
			localStorage.getItem('token') != null ? null : 'Guest'
		}
		
		{
			localStorage.getItem('token') != null || 'Guest'
		}
		
		</h1>
	</header>
)

