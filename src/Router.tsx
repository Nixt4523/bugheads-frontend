import { createBrowserRouter } from 'react-router-dom';
import Blog from './components/Blogs/Blog';
import Layout from './Layout';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import ProfilePage from './pages/ProfilePage';
import RegisterPage from './pages/RegisterPage';
import WritePage from './pages/WritePage';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Layout />,
		children: [
			{
				path: '/',
				element: <HomePage />,
			},
			{
				path: '/write',
				element: <WritePage />,
			},
			{
				path: '/:userEmail',
				element: <ProfilePage />,
			},
			{
				path: '/:userEmail/:blog',
				element: <Blog />,
			},
			{
				path: '/my-profile',
				element: <ProfilePage />,
			},
		],
	},
	{
		path: 'login',
		element: <LoginPage />,
	},
	{
		path: 'register',
		element: <RegisterPage />,
	},
]);

export default router;
