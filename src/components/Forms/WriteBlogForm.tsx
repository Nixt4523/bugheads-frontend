import * as LR from '@uploadcare/blocks';
import TipTap from '../Editor/TipTap';

LR.registerBlocks(LR);

const WriteBlogForm = () => {
	return (
		<form action="" className="w-3/4 flex flex-col gap-4">
			<div className="w-full relative group">
				<img
					src="/TempBackground.png"
					alt="BlogThumbnail"
					className="aspect-[21/9] rounded-lg"
				/>
				<div className="hidden absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ">
					<lr-config
						ctx-name="my-uploader"
						pubkey="06a68e13b39bc88c9057"
						maxLocalFileSizeBytes={5000000}
						multiple={false}
						imgOnly={true}
						sourceList="local, url"
						useCloudImageEditor={false}
					/>
					<lr-file-uploader-regular
						css-src="https://cdn.jsdelivr.net/npm/@uploadcare/blocks@0.35.2/web/lr-file-uploader-regular.min.css"
						ctx-name="my-uploader"
						class="my-config"
					/>
				</div>
			</div>
			<input
				type="text"
				className="input input-lg text-4xl font-medium input-ghost w-full focus:outline-none focus:ring-0 focus:border-transparent placeholder:text-black"
				placeholder="Title"
			/>
			<div className="w-full min-h-[100vh] overflow-y-scroll hide-scrollbar rounded-xl p-4">
				<TipTap />
			</div>
			<button type="button" className="btn btn-block btn-primary rounded-full">
				Publish
			</button>
		</form>
	);
};

export default WriteBlogForm;
