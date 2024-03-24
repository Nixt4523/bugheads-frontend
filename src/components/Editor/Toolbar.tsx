import { type Editor } from '@tiptap/react';
type Props = {
	editor: Editor | null;
};

const Toolbar = ({ editor }: Props) => {
	if (!editor) {
		return null;
	}

	return (
		<div className="flex items-center gap-2 p-4 rounded-xl shadow-xl bg-white border font-monospace flex-wrap">
			<button
				data-tip="Bold"
				type="button"
				onClick={() => editor.chain().focus().toggleBold().run()}
				disabled={!editor.can().chain().focus().toggleBold().run()}
				className={
					editor.isActive('bold')
						? 'btn btn-sm btn-square btn-primary rounded-md font-bold'
						: 'btn btn-sm btn-square btn-ghost  rounded-md font-normal tooltip'
				}
			>
				B
			</button>
			<button
				data-tip="Italic"
				type="button"
				onClick={() => editor.chain().focus().toggleItalic().run()}
				disabled={!editor.can().chain().focus().toggleItalic().run()}
				className={
					editor.isActive('italic')
						? 'btn btn-sm btn-square btn-primary rounded-md italic'
						: 'btn btn-sm btn-square btn-ghost  rounded-md font-normal tooltip'
				}
			>
				I
			</button>
			<button
				data-tip="Strike"
				type="button"
				onClick={() => editor.chain().focus().toggleStrike().run()}
				disabled={!editor.can().chain().focus().toggleStrike().run()}
				className={
					editor.isActive('strike')
						? 'btn btn-sm btn-square btn-primary rounded-md line-through'
						: 'btn btn-sm btn-square btn-ghost  rounded-md font-normal tooltip'
				}
			>
				S
			</button>
			<button
				data-tip="Heading"
				type="button"
				onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
				className={
					editor.isActive('heading', { level: 1 })
						? 'btn btn-sm btn-square btn-primary rounded-md'
						: 'btn btn-sm btn-square btn-ghost  rounded-md font-normal tooltip'
				}
			>
				H
			</button>
			<button
				data-tip="Paragraph"
				type="button"
				onClick={() => editor.chain().focus().setParagraph().run()}
				className={
					editor.isActive('paragraph')
						? 'btn btn-sm btn-square btn-primary rounded-md'
						: 'btn btn-sm btn-square btn-ghost  rounded-md font-normal tooltip'
				}
			>
				P
			</button>
			<button
				data-tip="Unordered List"
				type="button"
				onClick={() => editor.chain().focus().toggleBulletList().run()}
				className={
					editor.isActive('bulletList')
						? 'btn btn-sm btn-square btn-primary rounded-md'
						: 'btn btn-sm btn-square btn-ghost  rounded-md font-normal tooltip'
				}
			>
				Ul
			</button>
			<button
				data-tip="Ordered List"
				type="button"
				onClick={() => editor.chain().focus().toggleOrderedList().run()}
				className={
					editor.isActive('orderedList')
						? 'btn btn-sm btn-square btn-primary rounded-md'
						: 'btn btn-sm btn-square btn-ghost  rounded-md font-normal tooltip'
				}
			>
				Ol
			</button>
			<button
				data-tip="Code Block"
				type="button"
				onClick={() => editor.chain().focus().toggleCodeBlock().run()}
				className={
					editor.isActive('codeBlock')
						? 'btn btn-sm btn-square btn-primary rounded-md'
						: 'btn btn-sm btn-square btn-ghost  rounded-md font-normal tooltip'
				}
			>
				{'{ }'}
			</button>
			<button
				data-tip="Inline Code"
				type="button"
				onClick={() => editor.chain().focus().toggleCode().run()}
				className={
					editor.isActive('code')
						? 'btn btn-sm btn-square btn-primary rounded-md'
						: 'btn btn-sm btn-square btn-ghost  rounded-md font-normal tooltip'
				}
			>
				{';'}
			</button>
			<button
				data-tip="Quote"
				type="button"
				onClick={() => editor.chain().focus().toggleBlockquote().run()}
				className={
					editor.isActive('blockquote')
						? 'btn btn-sm btn-square btn-primary rounded-md'
						: 'btn btn-sm btn-square btn-ghost  rounded-md font-normal tooltip'
				}
			>
				{'"  "'}
			</button>
			<button
				data-tip="Horizontal Rule"
				onClick={() => editor.chain().focus().setHorizontalRule().run()}
				className="btn btn-sm btn-square btn-ghost  rounded-md font-normal tooltip"
			>
				Hr
			</button>
			<button
				data-tip="Horizontal Break"
				onClick={() => editor.chain().focus().setHardBreak().run()}
				className="btn btn-sm btn-square btn-ghost  rounded-md font-normal tooltip"
			>
				Br
			</button>
		</div>
	);
};

export default Toolbar;
