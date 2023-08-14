import Login from './Login';
import Home from './Home';
import Register from './Register';
import ForgotPassword from './ForgotPassword';
import ResetPassword from './ResetPassword';
import VerifyEmail from './VerifyEmail';

const pagesData = [
	{
		path: '',
		element: <Home />,
		title: 'home',
	},
	{
		path: 'login',
		element: <Login />,
		title: 'login',
	},
	{
		path: 'register',
		element: <Register />,
		title: 'register',
	},
	{
		path: 'forgot-password',
		element: <ForgotPassword />,
		title: 'forgot-password',
	},
	{
		path: 'reset-password/:token',
		element: <ResetPassword />,
		title: 'reset-password',
	},
	{
		path: 'verify-email/:token',
		element: <VerifyEmail />,
		title: 'verify-email',
	},
];

export default pagesData;
