import BlogList from '../components/Blogs/BlogList';
import Discover from '../components/Discover';

const HomePage = () => {
	return (
		<section className="w-full flex items-start justify-between gap-8 py-8">
			<BlogList />
			<Discover />
		</section>
	);
};

export default HomePage;
