import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import style from './forgotpassword.module.css';
import { forgotPassApi } from '../../services/api';

const INITIAL_VALUES = {
	email: '',
};

const ForgotPassword = () => {
	const [values, setValues] = useState({
		email: '',
	});
	const [openNotif, setOpenNotif] = useState(false);
	const [error, setError] = useState(false);

	const onFogotPass = async () => {
		const response = await forgotPassApi(values);
		if (response.status === 'failed') {
			setError(true);
			setTimeout(() => {
				setError(false);
			}, 3000);
		} else {
			setValues(INITIAL_VALUES);
			setOpenNotif(true);
			setTimeout(() => {
				setOpenNotif(false);
			}, 4000);
		}
	};

	const required = Boolean(!values.email);

	return (
		<div className={style.container}>
			<div className={style.box}>
				<h1>Forgot Password</h1>
				{error && (
					<p>
						Something went wrong, please check your information and try again
					</p>
				)}
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
				<button onClick={() => onFogotPass()} disabled={required}>
					Forgot Password
				</button>
			</div>
			{openNotif && (
				<div className={style.notif}>
					<p>
						Successfuly, we have sent an reset password link to your email.
						Please check your email.
					</p>
				</div>
			)}
		</div>
	);
};

export default ForgotPassword;
