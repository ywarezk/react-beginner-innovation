import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import Typography from '@material-ui/core/Typography';
import { useState } from 'react';

function validateEmail(email) 
{
        var re = /\S+@\S+\.\S+/;
        return re.test(email);
}

export default function Login() {
	const [isLoading, setIsLoading] = useState(false);
	
	const [ values, setValues ] = useState({
		email: '',
		password: ''
	})
	
	const [errors, setErrors] = useState({
		email: null,
		password: null
	})
	
	const handleSubmit = async (event) => {
		
		event.preventDefault();
		
		// validate the input
		let isValid = true;
		let newErrors = { email: null, password: null};
		if (!values.email) {
			isValid = false;
			newErrors = {
				...newErrors,
				email: 'This field is required'
			}
		}
		
		if (!values.password) {
			isValid = false;
			newErrors = {
				...newErrors,
				password: 'This field is required'
			}
		}
		if (values.password.length < 5) {
			isValid = false;
			newErrors = {
				...newErrors,
				password: 'Minimal length of 5 characters'
			}
		}
		if (!validateEmail(values.email)) {
			isValid = false;			
			newErrors = {
				...newErrors,
				email: 'Invalid email'
			}
		}
		
		setErrors(newErrors);
		if (!isValid) {
			return;
		};
		
		setIsLoading(true);
		const response = await fetch(
			'https://academeez-login-ex.herokuapp.com/api/users/login',
			{
				method: 'POST',
				body: JSON.stringify(values),
				headers: {
					'Content-Type': 'application/json'
				}
			}
		)
		const data = await response.json();
		console.log(data);
		setIsLoading(false);
	}
	
	const handleChange = ( event ) => {
		setValues({
			...values,
			[event.target.name]: event.target.value
		})
	}
	
	return (
		<Paper className="p-4">
			<form noValidate onSubmit={handleSubmit}>
				<Typography className="text-center" variant="h5">Login</Typography>
				<div className="form-group">
					<TextField
						error={errors.email}
						value={ values.email } 
						onChange={ handleChange }
						className="w-100" 
						name="email" 
						type="email" 
						label={errors.email ? 'Error' : "Enter your email"} 
						helperText={errors.email}
					/>
				</div>
				<div className="form-group">
					<TextField 
						error={errors.password}
						value={ values.password }
						onChange={ handleChange }
						className="w-100"
						name="password" 
						type="password" 
						label={errors.password ? 'Error' : "Enter your password"} 
						helperText={errors.password}
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
