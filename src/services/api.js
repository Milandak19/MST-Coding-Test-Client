const register = async (data) => {
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

const login = async (data) => {
	const res = await fetch('http://localhost:8080/api/auth/signin', {
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
