import { Outlet } from 'react-router-dom';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

const Layout = () => {
	return (
		<div className="container font-poppins scroll-smooth">
			<Navbar />
			<Outlet />
			<Footer />
		</div>
	);
};

export default Layout;
