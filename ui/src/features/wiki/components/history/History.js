import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { wikiActions } from '../../ducks';
import Record from './HistoryRecord';

import './styles.history.css';

export default function History() {
	const { history } = useSelector((state) => state.wiki);
	console.warn(history);
	const dispatch = useDispatch();

	const deleteRecord = (id) => {
		dispatch(wikiActions.deleteRecord(id));
	};

	useEffect(() => {
		dispatch(wikiActions.fetchHistory());
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<table>
			<tr>
				<th>#</th>
				<th>Page ID</th>
				<th>Title</th>
				<th>Content</th>
				<th>Action</th>
			</tr>
			{history.map((record, index) => (
				<Record
					key={record._id}
					pageId={record.pageId}
					content={record.details}
					serial={index + 1}
					title={record.title}
					onActionClick={() => deleteRecord(record._id)}
				/>
			))}
		</table>
	);
}
