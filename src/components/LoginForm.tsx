import { Link } from 'react-router-dom';

const LoginForm = () => {
	return (
		<section className="container font-poppins h-full flex items-center justify-center">
			<main className="flex flex-col items-center gap-4 w-1/3">
				<Link to={'/'} className="flex flex-col items-center gap-6 my-4">
					<img src="/BugheadsLogo.svg" alt="Bugheads" className="scale-150" />
					<h1 className="text-4xl text-neutral font-semibold">Bugheads.</h1>
				</Link>
				<label className="input input-bordered focus-within:input-primary rounded-full flex items-center gap-2 w-full">
					<svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
						<path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
						<path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
					</svg>
					<input type="text" className="grow" placeholder="Email" />
				</label>
				<label className="input input-bordered focus-within:input-primary rounded-full flex items-center gap-2 w-full">
					<svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
						<path
							fillRule="evenodd"
							d="M15.75 1.5a6.75 6.75 0 0 0-6.651 7.906c.067.39-.032.717-.221.906l-6.5 6.499a3 3 0 0 0-.878 2.121v2.818c0 .414.336.75.75.75H6a.75.75 0 0 0 .75-.75v-1.5h1.5A.75.75 0 0 0 9 19.5V18h1.5a.75.75 0 0 0 .53-.22l2.658-2.658c.19-.189.517-.288.906-.22A6.75 6.75 0 1 0 15.75 1.5Zm0 3a.75.75 0 0 0 0 1.5A2.25 2.25 0 0 1 18 8.25a.75.75 0 0 0 1.5 0 3.75 3.75 0 0 0-3.75-3.75Z"
							clipRule="evenodd"
						/>
					</svg>
					<input type="password" className="grow" placeholder="Password" />
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 20 20"
						fill="currentColor"
						className="w-5 h-5"
					>
						<path d="M10 12.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
						<path
							fillRule="evenodd"
							d="M.664 10.59a1.651 1.651 0 0 1 0-1.186A10.004 10.004 0 0 1 10 3c4.257 0 7.893 2.66 9.336 6.41.147.381.146.804 0 1.186A10.004 10.004 0 0 1 10 17c-4.257 0-7.893-2.66-9.336-6.41ZM14 10a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z"
							clipRule="evenodd"
						/>
					</svg>
				</label>
				<a href="" className="link self-start link-primary text-sm">
					Forgot Password?
				</a>
				<button className="btn btn-block rounded-full btn-primary">
					Sign In
				</button>
				<Link to={'/register'} className="link self-start link-primary text-sm">
					New to Bugheads? Register!
				</Link>
			</main>
		</section>
	);
};

export default LoginForm;
