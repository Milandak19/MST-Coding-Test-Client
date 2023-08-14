import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import style from './login.module.css';
import { loginApi } from '../../services/api';

const INITIAL_VALUES = {
	username: '',
	password: '',
};

const Login = () => {
	const [values, setValues] = useState({
		username: '',
		password: '',
	});
	const [showPass, setShowPass] = useState(false);
	const [error, setError] = useState(false);
	const navigate = useNavigate();

	const onSubmit = async () => {
		const response = await loginApi(values);
		if (response.status === 'failed') {
			setError(true);
			setTimeout(() => {
				setError(false);
			}, 3000);
		} else {
			setValues(INITIAL_VALUES);
			navigate('/');
		}
	};

	const required = Boolean(!values.password || !values.username);

	return (
		<div className={style.container}>
			<div className={style.box}>
				<h1>Login</h1>
				{error && (
					<p>
						Something went wrong, please check your information and try again
					</p>
				)}
				<div className={style.form}>
					<div className={style.input}>
						<label htmlFor="username">Username</label>
						<input
							type="text"
							id="username"
							value={values.username}
							onChange={(e) =>
								setValues({ ...values, username: e.target.value })
							}
						/>
					</div>
					<div className={style.input}>
						<div className={style.showPass}>
							<label htmlFor="password">Password</label>
							<label
								className={style.labelShow}
								onClick={() => setShowPass(!showPass)}
							>
								{showPass ? 'Hide Password' : 'Show Password'}
							</label>
						</div>
						<input
							type={showPass ? 'text' : 'password'}
							id="password"
							value={values.password}
							onChange={(e) =>
								setValues({ ...values, password: e.target.value })
							}
						/>
					</div>
				</div>
				<div className={style.second}>
					<p>
						Don't have an account? <Link to="/register">Register</Link>
					</p>
					<p>
						<Link to="/forgot-password">Forgot Password</Link>
					</p>
				</div>
				<button disabled={required} onClick={onSubmit}>
					Login
				</button>
			</div>
		</div>
	);
};

export default Login;
