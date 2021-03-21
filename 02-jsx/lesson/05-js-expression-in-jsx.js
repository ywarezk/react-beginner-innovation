/**


<p style="color: red; background-color: yellow">
</p>

 */
 
function hello() {
	
}
 
const h1 = (
	<h1>
		hello world { Math.random() } { JSON.stringify({hello: 'world'}) }
		
		{ null }
		
		{ undefined }
		
		{ false }
		
		{ true }
		
		{ <span>something</span> }
		
		{
			[
				10,
				'world',
				undefined,
				<span>something</span>
			]
			
		}
	</h1>
)

const button = (
	<button onClick={ hello }>
		click me
	</button>
) 

// what can you place in  {} when it is placed as an attribute???

// when in attribute you place in  {} when the attribute wants to get

function myCssClassCreator() {
	return 'some-css-class';
}

const p =  (
	<p className={ myCssClassCreator() } style={ { color: 'red', backgroundColor: 'yellow'} }>
		design me
	</p>
)

// when the {} between tags what can i place

// number
// string
// falsey - null, undefined, false, "" will display nothing
// true
// jsx
// array all of the above