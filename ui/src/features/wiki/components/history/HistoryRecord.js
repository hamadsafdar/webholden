import { Button } from '../../../../components';
import './styles.history.css';

export default function HistoryRecord({
	pageId,
	content,
	serial,
	title,
	onActionClick
}) {
	return (
		<tr className="details-row">
			<td>{serial + '. '}</td>
			<td>{pageId}</td>
			<td>{title}</td>
			<td>
				<div style={{ height: 80, overflow: 'auto' }}>{content}</div>
			</td>
			<td>
				<Button
					className="action-button"
					label="Delete"
					onClick={onActionClick}
				/>
			</td>
		</tr>
	);
}
