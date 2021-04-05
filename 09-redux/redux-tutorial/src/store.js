/**
 * creating our redux store
 */
 
import { configureStore } from '@reduxjs/toolkit';
import bankReducer from './bank.reducer';



const store = configureStore({
	reducer: {
		bank: bankReducer
	},
	
	/*
	function(currentState, action) {
		// need to return the next state
		
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
		
	},
	*/
	
	// State 0
	/*
	preloadedState: {
		bank: {
			amount: -2000	
		}
	}
	*/
});

export default store;