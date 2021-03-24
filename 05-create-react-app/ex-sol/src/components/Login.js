export default function Login() {
	const isLoading = false;
	
	const handleSubmit = async (event) => {
		event.preventDefault();
		const response = await fetch(
			'https://academeez-login-ex.herokuapp.com/api/users/login',
			{
				method: 'POST',
				body: JSON.stringify({
					email: 'yariv@nerdeez.com',
					password: '12345678'
				}),
				headers: {
					'Content-Type': 'application/json'
				}
			}
		)
		const data = await response.json();
		console.log(data);
		
	}
	
	return (
		<form onSubmit={handleSubmit}>
			<div className="mb-3">
				<label className="form-label">Email address</label>
				<input type="email" className="form-control" />	
			</div>
			<div className="mb-3">
				<label>Password</label>
				<input type="password" className="form-control" />
			</div>
			<button 
				disabled={isLoading}
				type="submit" 
				className="btn btn-primary"
			>Submit</button>
			{
				isLoading && <h1>Loading...</h1>
			}
		</form>
	)
}
