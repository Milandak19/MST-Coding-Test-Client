import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import style from './forgotpassword.module.css';

const INITIAL_VALUES = {
	email: '',
};

const ForgotPassword = () => {
	const [values, setValues] = useState({
		email: '',
	});

	return (
		<div className={style.container}>
			<div className={style.box}>
				<h1>Forgot Password</h1>
				<div className={style.form}>
					<div className={style.input}>
						<label htmlFor="email">Email</label>
						<input
							type="text"
							id="email"
							value={values.email}
							onChange={(e) => setValues({ ...values, email: e.target.value })}
						/>
					</div>
				</div>
				<div className={style.second}>
					<p>
						Back to <Link to="/login">Login</Link>
					</p>
				</div>
				<button>Forgot Password</button>
			</div>
		</div>
	);
};

export default ForgotPassword;
