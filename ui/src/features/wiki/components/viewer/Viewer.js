import ReactQuill from 'react-quill';

import './styles.viewer.css';
import 'react-quill/dist/quill.bubble.css';

export default function Viewer({ content, onChangeSelection }) {
	return (
		<div className="viewer-container">
			<div className="title">Preview</div>
			<ReactQuill
				className="viewer"
				value={content || ''}
				readOnly
				theme="bubble"
				placeholder="Preview"
				onChangeSelection={onChangeSelection}
			/>
		</div>
	);
}
