import { Link } from 'react-router-dom';

const Footer = () => {
	return (
		<footer className="w-full py-4">
			<section className="flex items-center justify-between w-full gap-8">
				<main className="flex-[3] flex flex-col gap-2">
					<div className="flex-1">
						<Link to={'/'} className="flex items-center gap-4">
							<img src="/BugheadsLogo.svg" alt="" />
							<h1 className="text-2xl text-neutral font-semibold">Bugheads.</h1>
						</Link>
					</div>
					<p className="text-primary text-base text-opacity-50 text-balance w-3/5">
						Discover, learn, and connect with fellow developers on a journey of
						continuous growth. Share your insights and learnings as we code our
						way through the ever-changing landscape of technology and beyond.
					</p>
				</main>
				<main className="flex-1 flex flex-col gap-2">
					<h1 className="text-primary text-base text-opacity-50">
						Terms & Conditions
					</h1>
					<h1 className="text-primary text-base text-opacity-50">
						Security Policy
					</h1>
					<h1 className="text-primary text-base text-opacity-50">
						support@bugheads.com
					</h1>
				</main>
			</section>
			<span className="divider" />
			<section className="flex items-center justify-center w-full">
				<h1 className="text-primary text-base text-opacity-50">
					Bugheads - All Rights Reserved 2024
				</h1>
			</section>
		</footer>
	);
};

export default Footer;
