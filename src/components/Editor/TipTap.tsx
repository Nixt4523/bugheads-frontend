import Heading from '@tiptap/extension-heading';
import { BubbleMenu, EditorContent, useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Toolbar from './Toolbar';

type Props = {
	content: string;
	editable: boolean;
};

const TipTap = ({ content, editable }: Props) => {
	const editor = useEditor({
		extensions: [
			StarterKit.configure({
				paragraph: {
					HTMLAttributes: {
						class: 'font-light',
					},
				},
				bold: {
					HTMLAttributes: {
						class: 'font-bold',
					},
				},
				bulletList: {
					keepMarks: true,
					HTMLAttributes: {
						class: 'list-disc pl-4',
					},
				},
				orderedList: {
					keepMarks: true,
					HTMLAttributes: {
						class: 'list-decimal pl-4',
					},
				},
				code: {
					HTMLAttributes: {
						class:
							'bg-primary text-primary-content rounded-md p-2 font-monospace',
					},
				},
				codeBlock: {
					HTMLAttributes: {
						class:
							'bg-primary text-primary-content rounded-md p-2 font-monospace',
					},
				},
				blockquote: {
					HTMLAttributes: {
						class: 'pl-8 border-l-4 border-black',
					},
				},
				horizontalRule: {
					HTMLAttributes: {
						class: 'bg-base-300 h-1',
					},
				},
			}),
			Heading.configure({
				HTMLAttributes: {
					class: 'text-3xl font-medium',
					levels: [1],
				},
			}),
		],
		content: content,
		editorProps: {
			attributes: {
				class:
					'input input-lg w-full p-0 focus:outline-none focus:ring-0 focus:border-transparent',
			},
		},
		onUpdate({ editor }) {
			console.log(editor.getHTML());
		},
	});

	if (!editor) {
		return null;
	}

	if (!editable) {
		editor.setEditable(false);
	}

	return (
		<section>
			<BubbleMenu editor={editor}>
				<Toolbar editor={editor} />
			</BubbleMenu>
			<EditorContent editor={editor} />
		</section>
	);
};

export default TipTap;
