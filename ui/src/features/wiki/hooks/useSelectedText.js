import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import { wikiActions } from '../ducks';

export default function useSelectedText() {
	const [selected, setSelected] = useState('');
	const dispatch = useDispatch();

	useEffect(() => {
		selected.length && fetchResults();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [selected]);

	const onChangeSelection = (range, s, editor) => {
		if (range) {
			setSelected(editor.getText(range.index, range.length));
		} else {
			setSelected('');
		}
	};

	const fetchResults = () => {
		dispatch(wikiActions.fetchArticle(selected));
	};

	return { selected, onChangeSelection };
}
