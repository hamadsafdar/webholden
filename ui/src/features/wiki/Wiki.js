import { Button, Topbar } from '../../components';
import { Editor, Viewer } from './components';
import { useEditor, useSelectedText } from './hooks';

import './styles.wiki.css';

export default function Wiki() {
	const { content, onChange, reset } = useEditor();
	const { selected, onChangeSelection } = useSelectedText();
	return (
		<div className="wiki-container">
			<Topbar title="Wiki Search" />
			<div className="editor-viewer">
				<Editor content={content} onChange={onChange} />
				<Viewer
					content={content}
					onChangeSelection={onChangeSelection}
				/>
			</div>
			<div>
				<Button
					className="reset-btn"
					label="Reset"
					onClick={reset}
					disabled={content?.length}
				/>
			</div>
			<div className="result"></div>
		</div>
	);
}
