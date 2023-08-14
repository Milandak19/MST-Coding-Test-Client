import axios from 'axios';
import { useJwt } from 'react-jwt';

export const registerApi = async (data) => {
	const res = await fetch('http://localhost:8080/api/auth/signup', {
		method: 'POST',
		body: data,
	});
	const user = await res.json();
	if (res.status === 200) {
		return { status: 'success', message: user };
	} else {
		return { status: 'failed', message: user };
	}
};

export const loginApi = async (data) => {
	try {
		const res = await axios.post(
			'http://localhost:8080/api/auth/signin',
			JSON.stringify(data),
			{
				withCredentials: true,
				headers: {
					'Content-Type': 'application/json',
					Accept: 'application/json',
				},
			}
		);
		const user = await res.data;
		if (res.status === 200) {
			return { status: 'success', message: user };
		} else {
			return { status: 'failed', message: user };
		}
	} catch (error) {
		return { status: 'failed', message: error };
	}
};

export const verifyEmailApi = async (data) => {
	const res = await fetch('http://localhost:8080/api/auth/verify-email', {
		method: 'POST',
		body: JSON.stringify(data),
		headers: {
			'Content-Type': 'application/json',
		},
	});
	const user = await res.json();
	if (res.status === 200) {
		return { status: 'success', message: user };
	} else {
		return { status: 'failed', message: user };
	}
};

export const profileApi = async () => {
	try {
		const res = await axios.get('http://localhost:8080/api/auth/profile', {
			withCredentials: true,
		});
		const user = await res.data;
		if (res.status === 200) {
			return {
				status: 'success',
				user: user,
			};
		} else {
			return { status: 'failed', message: user };
		}
	} catch (error) {
		return { status: 'failed', message: error };
	}
};

export const editPhotoApi = async (data) => {
	const res = await axios.patch(
		'http://localhost:8080/api/auth/reupload-photo',
		data,
		{
			withCredentials: true,
		}
	);
	const user = await res.data;
	if (res.status === 200) {
		return { status: 'success', message: user };
	} else {
		return { status: 'failed', message: user };
	}
};

export const logoutApi = async () => {
	const res = await axios.post(
		'http://localhost:8080/api/auth/signout',
		{},
		{ withCredentials: true }
	);
	const user = await res.data;
	if (res.status === 200) {
		return { status: 'success', message: user };
	} else {
		return { status: 'failed', message: user };
	}
};

export const forgotPassApi = async (data) => {
	const res = await fetch('http://localhost:8080/api/auth/forgot-password', {
		method: 'POST',
		body: JSON.stringify(data),
		headers: {
			'Content-Type': 'application/json',
		},
	});
	const user = await res.json();
	if (res.status === 200) {
		return { status: 'success', message: user };
	} else {
		return { status: 'failed', message: user };
	}
};

export const verifyTokenApi = async (data) => {
	const res = await fetch('http://localhost:8080/api/auth/verify-token', {
		method: 'POST',
		body: JSON.stringify(data),
		headers: {
			'Content-Type': 'application/json',
		},
	});
	const user = await res.json();
	if (res.status === 200) {
		return { status: 'success', message: user };
	} else {
		return { status: 'failed', message: user };
	}
};

export const resetPassApi = async (data) => {
	const res = await fetch('http://localhost:8080/api/auth/reset-password', {
		method: 'POST',
		body: JSON.stringify(data),
		headers: {
			'Content-Type': 'application/json',
		},
	});
	const user = await res.json();
	if (res.status === 200) {
		return { status: 'success', message: user };
	} else {
		return { status: 'failed', message: user };
	}
};
