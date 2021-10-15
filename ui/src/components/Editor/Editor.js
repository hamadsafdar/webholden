import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import './styles.editor.css';

export default function Editor({ onChange, content }) {
	return (
		<ReactQuill
			className="editor"
			onChange={onChange}
			value={content || ''}
			theme="snow"
		/>
	);
}
