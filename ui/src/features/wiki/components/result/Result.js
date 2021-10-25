import { useSelector } from 'react-redux';
import './styles.result.css';

export default function ResutView({ phrase }) {
	const { searchedArticle } = useSelector((state) => state.wiki);
	return (
		<div className="result-viewer">
			<div className="title">
				<h1>{searchedArticle.title}</h1>
			</div>
			<div className="details">{searchedArticle.details}</div>
		</div>
	);
}
