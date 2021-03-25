
// { name: "yariv", age: 36 }
export function Hello( { 
	name = 'Pigletshvilly', 
	age 
} ) {
	return (
		<div>
			<h1>
			Hello {name}
			</h1>
			<p>My age is: {age}</p>
		</div>
		
	)
}