import { Button } from '../button';

export default function HistoryRecord({ pageId, content, serial }) {
	return (
		<tr>
			<td>{serial + '. '}</td>
			<td>{pageId}</td>
			<td>{content}</td>
			<td>
				<Button
					classname="action-button"
					label="Delete"
					onClick={() => {}}
				/>
			</td>
		</tr>
	);
}
