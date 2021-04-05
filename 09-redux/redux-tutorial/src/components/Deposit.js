import { useDispatch } from 'react-redux';

export default function Deposit() {
	// store.dispatch(...)
	const dispatch = useDispatch();
	
	/**
	 * change the amount in redux -> bank -> amount
	 * add 10 nis to that amount
	 */
	const deposit = () => {
		dispatch( { type: 'DEPOSIT', payload: 10} )
	}
	
	return (
		<button onClick={ deposit }>
			Deposit 10 NIS
		</button>
	)
}