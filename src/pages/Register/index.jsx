import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import style from './register.module.css';
import PasswordStrength from '../../components/PasswordStrength';
import { registerApi } from '../../services/api';

const INITIAL_VALUES = {
	username: '',
	password: '',
	email: '',
	fullname: '',
	photoVal: '',
};

const Register = () => {
	const refPhoto = useRef(null);
	const [values, setValues] = useState({
		username: '',
		password: '',
		email: '',
		fullname: '',
		photoVal: '',
	});
	const [photo, setPhoto] = useState(null);
	const [showPass, setShowPass] = useState(false);
	const [error, setError] = useState(false);
	const [openNotif, setOpenNotif] = useState(false);
	const [isStrong, initRobustPassword] = useState(null);
	const initPwdInput = async (childData) => {
		initRobustPassword(childData);
	};

	const onSubmit = async () => {
		const formData = new FormData();
		formData.set('username', values.username);
		formData.set('email', values.email);
		formData.set('fullname', values.fullname);
		formData.set('password', values.password);
		formData.set('photo', photo);
		const response = await registerApi(formData);
		if (response.status === 'failed') {
			setError(true);
			setTimeout(() => {
				setError(false);
			}, 3000);
		} else {
			refPhoto.current.value = null;
			setValues(INITIAL_VALUES);
			setOpenNotif(true);
			setTimeout(() => {
				setOpenNotif(false);
			}, 4000);
		}
	};

	const required = Boolean(
		!values.email ||
			!values.fullname ||
			!values.password ||
			!values.username ||
			isStrong !== 'strong'
	);
	return (
		<div className={style.container}>
			<div className={style.box}>
				<h1>Register</h1>
				{error && (
					<p>
						Something went wrong, please check your information and try again
					</p>
				)}
				<div className={style.form}>
					<div className={style.input}>
						<label htmlFor="username">Username</label>
						<input
							required
							type="text"
							id="username"
							value={values.username}
							onChange={(e) =>
								setValues({ ...values, username: e.target.value })
							}
						/>
					</div>
					<div className={style.input}>
						<label htmlFor="email">Email</label>
						<input
							required
							type="text"
							id="email"
							value={values.email}
							onChange={(e) => setValues({ ...values, email: e.target.value })}
						/>
					</div>
					<div className={style.input}>
						<label htmlFor="fullname">Fullname</label>
						<input
							required
							type="text"
							id="fullname"
							value={values.fullname}
							onChange={(e) =>
								setValues({ ...values, fullname: e.target.value })
							}
						/>
					</div>
					<div className={style.input}>
						<label htmlFor="photo">Photo</label>
						<input
							type="file"
							id="photo"
							value={values.photoVal}
							ref={refPhoto}
							onChange={(e) => {
								setValues({
									...values,
									photoVal: e.target.value,
								});
								setPhoto(e.target.files.item(0));
							}}
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
							required
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
				</div>
				<div className={style.second}>
					<p>
						Already have an account? <Link to="/login">Login</Link>
					</p>
				</div>
				<button onClick={onSubmit} disabled={required}>
					Register
				</button>
			</div>
			{openNotif && (
				<div className={style.notif}>
					<p>
						Successfuly registered, we have sent an verification link to your
						email. Please check your email.
					</p>
				</div>
			)}
		</div>
	);
};

export default Register;
