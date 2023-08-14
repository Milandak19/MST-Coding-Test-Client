import React, { useEffect, useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import style from './verifyemail.module.css';
import { verifyEmailApi } from '../../services/api';

const VerifyEmail = () => {
	const [loading, setLoading] = useState(false);
	const params = useParams();
	const navigate = useNavigate();

	useEffect(() => {
		setLoading(true);
		async function fecthData() {
			const user = await verifyEmailApi({ token: params.token });
			if (user.status === 'failed') {
				navigate('/register');
			} else {
				setTimeout(() => {
					navigate('/login');
				}, 5000);
			}
		}
		fecthData();
		setLoading(false);
	}, []);

	return (
		!loading && (
			<div className={style.container}>
				<div className={style.box}>
					<h1>Verify Email</h1>
					<div className={style.section}>
						<h3>
							Congratulation your account has been verified you can login now.
							You will be redirected to login page in 5 seconds...
						</h3>
					</div>
					<button>
						<Link to="/login">Back to Login</Link>
					</button>
				</div>
			</div>
		)
	);
};

export default VerifyEmail;
