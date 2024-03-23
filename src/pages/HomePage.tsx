import BlogList from '../components/Blogs/BlogList';
import Discover from '../components/Discover';

const HomePage = () => {
	return (
		<div className="w-full flex items-start justify-between gap-8 py-8">
			<BlogList />
			<Discover />
		</div>
	);
};

export default HomePage;
