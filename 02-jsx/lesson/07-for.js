


const someVar = 'hello';
// someVar = 'foo';
let someVar2;
someVar2 = 'foo';
someVar2 = 10;
var someVar3;

function PigletFriends() {
	const friends = [
		{id: 1, name: 'Sweetness' },
		{id: 2, name: 'Marshmelo' },
		{id: 3, name: 'Rainbow' }	
	]
	
	function createPigletFriends() {
		// [<li>...]
		
		/*
		const result = [];
		for (const friend of friends) {
			result.push(
				<li>{ friend.name }</li>
			)
		}
		return result;
		*/
		
		const result = friends.map(function(singleFriend) {
			return (
				<li>
					{singleFriend.name}
				</li>
			)
		})
		
	}
	
	return (
		<ul>
			{
				[
					<li> Sweetness </li>,
					<li> Marshmelo </li>,
					<li> Rainbow </li>		
				]		
			}
			
			{
				createPigletFriends()
			}
			
			{
				friends.map(function(singleFriend, index) {
					return (
						<li key={singleFriend.id}>
							{singleFriend.name}
						</li>
					)
				})
			}
			
			<li> Sweetness </li>
			<li> Marshmelo </li>
			<li> Rainbow </li>	
		</ul>
	)
	
	
}