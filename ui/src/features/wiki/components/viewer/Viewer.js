import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.bubble.css';

export default function Viewer({ content, onChangeSelection }) {
	return (
		<ReactQuill
			className="viewer"
			value={content || ''}
			readOnly
			theme="bubble"
			onChangeSelection={onChangeSelection}
		/>
	);
}
