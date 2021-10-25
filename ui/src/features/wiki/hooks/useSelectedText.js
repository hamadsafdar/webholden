import { useEffect, useState } from 'react';

import config from '../../../config';

export default function useSelectedText() {
	const [selected, setSelected] = useState('');
	const [wikiResult, setWikiResult] = useState({});

	useEffect(() => {
		selected.length && fetchResults();
	}, [selected]);

	const onChangeSelection = (range, s, editor) => {
		if (range) {
			setSelected(editor.getText(range.index, range.length));
		} else {
			setSelected('');
		}
	};

	const fetchResults = async () => {
		try {
			const token = localStorage.getItem('token');
			console.log(selected);
			const result = await fetch(config.baseUrl + '/wiki/' + selected, {
				method: 'GET',
				headers: {
					Authorization: 'Bearer ' + token,
					'Content-Type': 'application/json'
				}
			});
			const { status } = result;
			if (status) {
				const json = await result.json();
				setWikiResult(json);
			}
		} catch (error) {}
	};

	return { selected, onChangeSelection, wikiResult };
}
