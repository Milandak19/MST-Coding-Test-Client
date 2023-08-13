import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import style from './register.module.css';

const INITIAL_VALUES = {
	username: '',
	password: '',
	email: '',
	fullname: '',
	photo: null,
};

const Register = () => {
	const [values, setValues] = useState({
		username: '',
		password: '',
		email: '',
		fullname: '',
		photo: '',
	});
	const [showPass, setShowPass] = useState(false);

	return (
		<div className={style.container}>
			<div className={style.box}>
				<h1>Register</h1>
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
						<label htmlFor="email">Email</label>
						<input
							type="text"
							id="email"
							value={values.email}
							onChange={(e) => setValues({ ...values, email: e.target.value })}
						/>
					</div>
					<div className={style.input}>
						<label htmlFor="fullname">Fullname</label>
						<input
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
							value={values.photo}
							onChange={(e) => setValues({ ...values, photo: e.target.value })}
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
						Already have an account? <Link to="/login">Login</Link>
					</p>
				</div>
				<button>Register</button>
			</div>
		</div>
	);
};

export default Register;
