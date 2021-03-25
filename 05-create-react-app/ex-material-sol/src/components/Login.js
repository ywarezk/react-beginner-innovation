import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import Typography from '@material-ui/core/Typography';



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
		<Paper className="p-4">
			<form onSubmit={handleSubmit}>
				<Typography className="text-center" variant="h5">Login</Typography>
				<div className="form-group">
					<TextField 
						className="w-100" 
						name="email" 
						type="email" 
						label="Enter your email" 
					/>
				</div>
				<div className="form-group">
					<TextField 
						className="w-100"
						name="password" 
						type="password" 
						label="Enter your password" 
					/>
				</div>
				<Button
					variant="contained"
					color="primary"
					disabled={isLoading}
					type="submit"
				>
					Submit
				</Button>
				{
					isLoading && <CircularProgress size={24} />
				}
			</form>
		</Paper>
		
	)
}
