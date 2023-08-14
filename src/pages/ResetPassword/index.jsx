import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import style from './resetpassword.module.css';
import PasswordStrength from '../../components/PasswordStrength';
import { resetPassApi, verifyTokenApi } from '../../services/api';

const INITIAL_VALUES = {
	password: '',
	retypePassword: '',
};

const ResetPassword = () => {
	const params = useParams();
	const navigate = useNavigate();
	const [values, setValues] = useState({
		password: '',
		retypePassword: '',
	});
	const [showPass, setShowPass] = useState(false);
	const [showRepass, setShowRepass] = useState(false);
	const [error, setError] = useState(false);
	const [openNotif, setOpenNotif] = useState(false);
	const [isStrong, initRobustPassword] = useState(null);
	const initPwdInput = async (childData) => {
		initRobustPassword(childData);
	};

	useEffect(() => {
		async function verifyToken() {
			const verToken = await verifyTokenApi({ token: params.token });
			if (verToken.status === 'failed') return navigate('/login');
		}
		verifyToken();
	}, []);

	const onResetPass = async () => {
		const response = await resetPassApi({
			password: values.password,
			token: params.token,
		});
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
				navigate('/login');
			}, 4000);
		}
	};

	const required = Boolean(
		!values.password ||
			!values.retypePassword ||
			isStrong !== 'strong' ||
			values.password !== values.retypePassword
	);

	return (
		<div className={style.container}>
			<div className={style.box}>
				<h1>Reset Password</h1>
				{error && (
					<p>
						Something went wrong, please check your information and try again
					</p>
				)}
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
						<PasswordStrength
							password={values.password}
							actions={initPwdInput}
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
						<PasswordStrength
							password={values.retypePassword}
							actions={initPwdInput}
						/>
					</div>
				</div>
				<div className={style.second}>
					<p>
						Back to <Link to="/login">Login</Link>
					</p>
				</div>
				<button onClick={() => onResetPass()} disabled={required}>
					Reset Password
				</button>
			</div>
			{openNotif && (
				<div className={style.notif}>
					<p>
						Reset password successfuly, you will be redirected to login page.
					</p>
				</div>
			)}
		</div>
	);
};

export default ResetPassword;
