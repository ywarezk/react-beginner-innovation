/* 
/question/234567  => Home
*/

import { useParams } from 'react-router-dom';

export default function Question() {
	// {questionId: "12345678"}
	const params = useParams()
	
	return (
		<div>
			<h1>
				You are in question: {params.questionId}
			</h1>
			
		</div>
		
	)
}