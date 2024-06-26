import { Link } from 'react-router-dom';

const Navbar = () => {
	return (
		<nav className="navbar justify-between py-4 px-0">
			<div className="flex-1">
				<Link to={'/'} className="flex items-center gap-4">
					<img src="/BugheadsLogo.svg" alt="" />
					<h1 className="text-2xl text-neutral font-semibold">Bugheads.</h1>
				</Link>
			</div>
			<label className="input input-bordered  focus-within:outline-transparent flex items-center gap-2 flex-1 rounded-full">
				<svg
					fill="none"
					viewBox="0 0 24 24"
					strokeWidth={1.5}
					stroke="currentColor"
					className="w-6 h-6"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
					/>
				</svg>
				<input type="text" className="grow" placeholder="Search..." />
			</label>
			<span className="flex items-center justify-end gap-2 flex-1">
				<Link to={'/write'}>
					<button className="btn rounded-full">
						Write
						<svg
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth={1.5}
							stroke="currentColor"
							className="w-5 h-5"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
							/>
						</svg>
					</button>
				</Link>
				<Link to={'/my-profile'}>
					<div className="avatar">
						<div className="w-12 rounded-full">
							<img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
						</div>
					</div>
				</Link>
			</span>
		</nav>
	);
};

export default Navbar;
