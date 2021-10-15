import { useCallback, useState } from 'react';
import './App.css';
import { Button, Editor, Topbar, Viewer, History } from './components';

function App() {
	const [content, setContent] = useState('');

	const onContentChange = useCallback((value) => {
		setContent(value);
	}, []);

	const resetContent = useCallback(() => {
		setContent('');
	}, []);
	return (
		<div className="App">
			<Topbar />
			<div style={{ display: 'flex', width: '100%' }}>
				<Editor content={content} onChange={onContentChange} />
				<Viewer content={content} />
			</div>
			<Button onClick={resetContent} label="Reset" />
			<History />
		</div>
	);
}

export default App;
