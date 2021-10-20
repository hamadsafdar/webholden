import './styles.button.css';

export default function Button({ onClick, label, className }) {
	return (
		<button className={className} onClick={onClick}>
			{label}
		</button>
	);
}
