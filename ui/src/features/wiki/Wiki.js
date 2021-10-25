import { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { Button, Topbar } from '../../components';
import { Editor, Viewer, ResultView, History } from './components';
import { useEditor, useSelectedText } from './hooks';

import './styles.wiki.css';

export default function Wiki() {
	const { content, onChange, reset } = useEditor();
	const { onChangeSelection, selected } = useSelectedText();
	const [showHistory, setShowHistory] = useState(false);
	const history = useHistory();

	useEffect(() => {
		!localStorage.getItem('token') && history.push('/');
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<div className="wiki-container">
			<Topbar title="Wiki Search" />
			<>
				<div className="editor-viewer">
					<Editor content={content} onChange={onChange} />
					<Viewer
						content={content}
						onChangeSelection={onChangeSelection}
					/>
				</div>
				<Button
					className="reset-btn"
					label="Reset"
					onClick={reset}
					disabled={content?.length}
				/>
			</>

			<div className="result">
				{selected && <ResultView phrase={selected} />}
			</div>
			<div>
				<Button
					className="history-btn"
					label={showHistory ? 'Hide History' : 'Show History'}
					onClick={() => setShowHistory((prev) => !prev)}
				/>
				{showHistory && <History />}
			</div>
		</div>
	);
}
