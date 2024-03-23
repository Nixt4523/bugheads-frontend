const BlogCard = () => {
	return (
		<section className="space-y-4 flex items-center gap-12">
			<main className="space-y-6">
				<span className="flex items-center gap-4">
					<div className="avatar">
						<div className="w-10 rounded-full">
							<img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
						</div>
					</div>
					<div className="flex items-center gap-2">
						<h1 className="text-xl text-neutral font-normal hover:underline cursor-pointer underline-offset-4">
							John Doe
						</h1>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							fill="currentColor"
							className="w-6 h-6"
						>
							<path
								fillRule="evenodd"
								d="M8.603 3.799A4.49 4.49 0 0 1 12 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 0 1 3.498 1.307 4.491 4.491 0 0 1 1.307 3.497A4.49 4.49 0 0 1 21.75 12a4.49 4.49 0 0 1-1.549 3.397 4.491 4.491 0 0 1-1.307 3.497 4.491 4.491 0 0 1-3.497 1.307A4.49 4.49 0 0 1 12 21.75a4.49 4.49 0 0 1-3.397-1.549 4.49 4.49 0 0 1-3.498-1.306 4.491 4.491 0 0 1-1.307-3.498A4.49 4.49 0 0 1 2.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 0 1 1.307-3.497 4.49 4.49 0 0 1 3.497-1.307Zm7.007 6.387a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
								clipRule="evenodd"
							/>
						</svg>
					</div>
					<p className="font-light text-neutral text-opacity-50">
						- Posted on March 16, 2024
					</p>
				</span>
				<div className="space-y-2">
					<h1 className="text-3xl text-neutral font-medium hover:underline underline-offset-4 cursor-pointer">
						Top 5 NodeJs Frameworks in 2024
					</h1>
					<p className="text-lg text-neutral text-balance text-opacity-50 line-clamp-3">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam at
						in laudantium cumque non fugit rem, id dolores? Sit soluta sed esse
						sunt consectetur dignissimos, ipsum vel minima deleniti inventore.
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt ea
						ipsa incidunt ducimus atque nulla ratione laboriosam iste distinctio
						numquam ex expedita, sapiente, dolore vel laborum sequi ad.
						Corporis, natus?
					</p>
				</div>
				<div className="flex items-center justify-between">
					<div className="flex items-center gap-4">
						<span className="badge badge-md bg-yellow-50 text-yellow-500 flex items-center gap-2">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 24 24"
								fill="currentColor"
								className="w-6 h-6 text-yellow-300"
							>
								<path
									fillRule="evenodd"
									d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
									clipRule="evenodd"
								/>
							</svg>
							Featured
						</span>
						<span className="badge badge-md badge-ghost flex items-center gap-2">
							10 min read
						</span>
					</div>
					<div className="flex items-center gap-2">
						<button className="btn btn-ghost bg-pink-50 hover:bg-pink-100 btn-md btn-square rounded-md">
							<svg
								viewBox="0 0 24 24"
								fill="currentColor"
								className="w-6 h-6 text-pink-700"
							>
								<path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
							</svg>
						</button>
						<button className="btn btn-ghost bg-blue-50 hover:bg-blue-100 btn-md btn-square rounded-md">
							<svg
								viewBox="0 0 24 24"
								fill="currentColor"
								className="w-6 h-6 text-blue-700"
							>
								<path
									fillRule="evenodd"
									d="M6.32 2.577a49.255 49.255 0 0 1 11.36 0c1.497.174 2.57 1.46 2.57 2.93V21a.75.75 0 0 1-1.085.67L12 18.089l-7.165 3.583A.75.75 0 0 1 3.75 21V5.507c0-1.47 1.073-2.756 2.57-2.93Z"
									clipRule="evenodd"
								/>
							</svg>
						</button>
					</div>
				</div>
			</main>
			<img
				className="w-56 rounded-md"
				src="https://images.unsplash.com/photo-1548504778-b14db6c34b04?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
				alt=""
			/>
		</section>
	);
};

export default BlogCard;
