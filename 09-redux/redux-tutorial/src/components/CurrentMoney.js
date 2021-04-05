
import { useSelector } from 'react-redux'

export default function CurrentMoney() {
	// is a hook that allows to read the data from redux
	// using this hook the component will render when the data chage
	const amount = useSelector( (state) => {
		return state.bank.amount
	})
	
	return (
		<h1>{ amount }</h1>
	)
}