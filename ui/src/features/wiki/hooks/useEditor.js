import { useCallback, useState } from 'react';

export default function useEditor() {
	const [content, setContent] = useState('');
	const onChange = (value) => {
		setContent(value);
	};

	const reset = useCallback(() => {
		setContent('');
	}, []);

	return { content, onChange, reset };
}
