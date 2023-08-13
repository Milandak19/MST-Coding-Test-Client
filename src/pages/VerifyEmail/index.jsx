import React from 'react';
import { Link } from 'react-router-dom';
import style from './verifyemail.module.css';

const VerifyEmail = () => {
	return (
		<div className={style.container}>
			<div className={style.box}>
				<h1>Verify Email</h1>
				<div className={style.section}>
					<h3>
						Congratulation your account has been verified you can login now.
					</h3>
				</div>
				<button>
					<Link to="/login">Back to Login</Link>
				</button>
			</div>
		</div>
	);
};

export default VerifyEmail;
