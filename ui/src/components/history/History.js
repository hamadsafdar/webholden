import Record from './HistoryRecord';

import './styles.history.css';
const SAMPLE_DATA = [
	{ _id: '0', pageId: 123, content: 'Hello This is sample data.' },
    { _id: '1', pageId: 123, content: 'Hello This is sample data.' },
    { _id: '2', pageId: 123, content: 'Hello This is sample data.' }
];

export default function History({ data }) {
	return (
		<table>
			<tr>
				<th>#</th>
				<th>Page ID</th>
				<th>Content</th>
				<th>Action</th>
			</tr>
			{SAMPLE_DATA.map((record, index) => (
				<Record
					key={record._id}
					pageId={record.pageId}
					content={record.content}
					serial={index + 1}
				/>
			))}
		</table>
	);
}
