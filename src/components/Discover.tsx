const Discover = () => {
	return (
		<section className="flex-[1] h-full border p-6 rounded-3xl space-y-6 sticky top-8">
			<span className="flex items-center gap-2">
				<svg
					fill="none"
					viewBox="0 0 24 24"
					strokeWidth={1.5}
					stroke="currentColor"
					className="w-8 h-8"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418"
					/>
				</svg>

				<h1 className="text-lg font-medium">Discover</h1>
			</span>
			<main className="space-y-4">
				<h1 className="text-base text-neutral text-opacity-50">Topics</h1>
				<div className="flex flex-wrap gap-2">
					<button className="btn rounded-full font-normal">Technology</button>
					<button className="btn rounded-full font-normal">Art</button>
					<button className="btn rounded-full font-normal">Crypto</button>
					<button className="btn rounded-full font-normal">Humanity</button>
					<button className="btn rounded-full font-normal">Future</button>
					<button className="btn btn-outline rounded-full font-normal btn-block">
						See More
					</button>
				</div>
				<span className="divider" />
				<h1 className="text-base text-neutral text-opacity-50">People</h1>
				<div className="flex flex-col gap-4">
					<span className="flex items-center justify-between">
						<div className="flex items-center gap-4">
							<div className="avatar">
								<div className="w-10 rounded-full">
									<img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
								</div>
							</div>
							<h1 className="text-lg text-neutral font-light">John Doe</h1>
						</div>
					</span>
					<span className="flex items-center justify-between">
						<div className="flex items-center gap-4">
							<div className="avatar">
								<div className="w-10 rounded-full">
									<img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
								</div>
							</div>
							<h1 className="text-lg text-neutral font-light">John Doe</h1>
						</div>
					</span>
					<span className="flex items-center justify-between">
						<div className="flex items-center gap-4">
							<div className="avatar">
								<div className="w-10 rounded-full">
									<img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
								</div>
							</div>
							<h1 className="text-lg text-neutral font-light">John Doe</h1>
						</div>
					</span>
					<span className="flex items-center justify-between">
						<div className="flex items-center gap-4">
							<div className="avatar">
								<div className="w-10 rounded-full">
									<img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
								</div>
							</div>
							<h1 className="text-lg text-neutral font-light">John Doe</h1>
						</div>
					</span>
				</div>
				<span className="divider" />
				<button className="btn btn-block btn-primary rounded-full">
					Subscribe to Newsletter
					<svg viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
						<path d="M3 4a2 2 0 0 0-2 2v1.161l8.441 4.221a1.25 1.25 0 0 0 1.118 0L19 7.162V6a2 2 0 0 0-2-2H3Z" />
						<path d="m19 8.839-7.77 3.885a2.75 2.75 0 0 1-2.46 0L1 8.839V14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8.839Z" />
					</svg>
				</button>
			</main>
		</section>
	);
};

export default Discover;
