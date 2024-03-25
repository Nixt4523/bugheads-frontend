import BlogList from './Blogs/BlogList';

type Props = {
	activeTab: number;
	setActiveTab: (tab: number) => void;
};

const ProfileBlogTabs = ({ activeTab, setActiveTab }: Props) => {
	return (
		<section>
			<div role="tablist" className="tabs tabs-bordered">
				<input
					type="radio"
					name="my_tabs_1"
					role="tab"
					className="tab"
					aria-label="Blogs"
					checked={activeTab === 1}
					onClick={() => setActiveTab(1)}
				/>
				<div role="tabpanel" className="tab-content py-8">
					<BlogList />
				</div>
				<input
					type="radio"
					name="my_tabs_1"
					role="tab"
					className="tab"
					aria-label="Liked"
					checked={activeTab === 2}
					onClick={() => setActiveTab(2)}
				/>
				<div role="tabpanel" className="tab-content py-8">
					<BlogList />
				</div>
				<input
					type="radio"
					name="my_tabs_1"
					role="tab"
					className="tab"
					aria-label="Bookmarked"
					checked={activeTab === 3}
					onClick={() => setActiveTab(3)}
				/>
				<div role="tabpanel" className="tab-content py-8">
					<BlogList />
				</div>
			</div>
		</section>
	);
};

export default ProfileBlogTabs;
