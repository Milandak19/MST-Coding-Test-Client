import React from 'react';
import style from './home.module.css';

const Home = () => {
	return (
		<div className={style.container}>
			<div className={style.box}>
				<h1>Home</h1>
				<div className={style.section}>
					<h3>Welcome to MST Coding Test</h3>
					<div className={style.profile}>
						<div className={style.sectionOne}>
							<ul>
								<li>Fullname: Fullname</li>
								<li>Email: Email</li>
							</ul>
						</div>
						<div className={style.sectionTwo}>
							<img
								src="https://img.freepik.com/free-icon/user_318-563642.jpg"
								alt="profile-photo"
							/>
							<div className={style.lastSection}>
								<span>Show Photo</span>
								<span>Edit Photo</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;
