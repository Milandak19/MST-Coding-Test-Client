import React, { useEffect, useRef, useState } from 'react';
import style from './home.module.css';
import { editPhotoApi, logoutApi, profileApi } from '../../services/api';
import { useNavigate } from 'react-router-dom';
import { useJwt } from 'react-jwt';

const Home = () => {
	const navigate = useNavigate();
	const newPhotoRef = useRef();
	const [profile, setProfile] = useState({});
	const [openNotif, setOpenNotif] = useState(false);
	const [error, setError] = useState(false);
	const [showPhoto, setShowPhoto] = useState(true);
	const [editPhoto, setEditPhoto] = useState(false);
	const { decodedToken } = useJwt(profile.token || 'asd');
	const [newPhoto, setNewPhoto] = useState('');
	const [flag, setFlag] = useState(false);
	useEffect(() => {
		async function fetchData() {
			const response = await profileApi();
			if (response.status === 'failed') {
				navigate('/login');
			} else {
				setProfile(response.user);
			}
		}
		fetchData();
	}, [flag]);

	const submitEditPhoto = async () => {
		const formData = new FormData();
		formData.set('photo', newPhoto);
		const response = await editPhotoApi(formData);
		if (response.status == 'failed') {
			setError(true);
			newPhotoRef.current.value = null;
			setTimeout(() => {
				setError(false);
			}, 4000);
		} else {
			setOpenNotif(true);
			setFlag(!flag);
			setEditPhoto(false);
			setTimeout(() => {
				setOpenNotif(false);
			}, 5000);
		}
	};

	const onLogout = async () => {
		const response = await logoutApi();
		if (response.status === 'success') navigate('/login');
	};

	return (
		<div className={style.container}>
			<div className={style.box}>
				<h1>Home</h1>
				<div className={style.section}>
					<h3>Welcome to MST Coding Test</h3>
					<div className={style.profile}>
						<div className={style.sectionOne}>
							<ul>
								<li>Fullname: {decodedToken?.fullname}</li>
								<li>Email: {decodedToken?.email}</li>
							</ul>
						</div>
						<div className={style.sectionTwo}>
							{!editPhoto ? (
								<img
									src={
										showPhoto
											? decodedToken?.photo ||
											  'https://img.freepik.com/free-icon/user_318-563642.jpg'
											: 'https://img.freepik.com/free-icon/user_318-563642.jpg'
									}
									alt="profile-photo"
								/>
							) : (
								<>
									<input
										type="file"
										onChange={(e) => setNewPhoto(e.target.files.item(0))}
										ref={newPhotoRef}
									/>
									{error && <p>Edit photo error, please check your file.</p>}
								</>
							)}
							<div className={style.lastSection}>
								{!editPhoto ? (
									<span onClick={() => setShowPhoto(!showPhoto)}>
										{showPhoto ? 'Hide Photo' : 'Show Photo'}
									</span>
								) : (
									<span onClick={() => submitEditPhoto()}>Edit</span>
								)}
								<span
									onClick={() => {
										setEditPhoto(!editPhoto);
										newPhotoRef?.current?.value &&
											(newPhotoRef.current.value = null);
									}}
								>
									{editPhoto ? 'Cancel' : 'Edit Photo'}
								</span>
							</div>
						</div>
					</div>
					<span className={style.logout} onClick={() => onLogout()}>
						Logout
					</span>
				</div>
			</div>
			{openNotif && (
				<div className={style.notif}>
					<p>Successfuly edited photo.</p>
				</div>
			)}
		</div>
	);
};

export default Home;
