import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import style from './resetpassword.module.css';

const INITIAL_VALUES = {
	password: '',
	retypePassword: '',
};

const ResetPassword = () => {
	const [values, setValues] = useState({
		password: '',
		retypePassword: '',
	});
	const [showPass, setShowPass] = useState(false);
	const [showRepass, setShowRepass] = useState(false);

	return (
		<div className={style.container}>
			<div className={style.box}>
				<h1>Reset Password</h1>
				<div className={style.form}>
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
					<div className={style.input}>
						<div className={style.showPass}>
							<label htmlFor="retypePassword">Retype Password</label>
							<label
								className={style.labelShow}
								onClick={() => setShowRepass(!showRepass)}
							>
								{showRepass ? 'Hide Password' : 'Show Password'}
							</label>
						</div>
						<input
							type={showRepass ? 'text' : 'password'}
							id="retypePassword"
							value={values.retypePassword}
							onChange={(e) =>
								setValues({ ...values, retypePassword: e.target.value })
							}
						/>
					</div>
				</div>
				<div className={style.second}>
					<p>
						Back to <Link to="/login">Login</Link>
					</p>
				</div>
				<button>Reset Password</button>
			</div>
		</div>
	);
};

export default ResetPassword;
