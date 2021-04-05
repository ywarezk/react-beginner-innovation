
/*
{
	type: 'SET_TOKEN',
	payload: 'safdasdf234234'
}

*/

export function setToken(newToken) {
	return {
		type: 'SET_TOKEN',
		payload: newToken
	}
}