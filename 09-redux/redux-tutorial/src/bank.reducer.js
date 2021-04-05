/**

seperate the reducer to different files according to the sections in the state

 */
 
export default function bankReducer(currentState = {
	amount: -2000
}, action) {
	// need to return the next state
	switch(action.type) {
		case 'DEPOSIT':
			return {
				...currentState,
				amount: currentState.amount + action.payload
			}
		default:
			return currentState
	}
		
	/*
	if (action.type === 'DEPOSIT') {
		return {
			...currentState,
			bank: {
				...currentState.bank,
				amount: currentState.bank.amount + action.payload
			}
		}
	} else {
		return currentState;
	}
	*/	
}