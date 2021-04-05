

/**
 * 
 {
	 user: {
		 token: 
	 }
 }
 
 * @param {*} state 
 * @param {*} action 
 */
export default function userReducer(state = {
	token: null
}, action) {
	
	switch(action.type) {
		case 'SET_TOKEN': 
			return {
				...state,
				token: action.payload
			}
		default:
			return state;
	}
	
}