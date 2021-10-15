import './styles.button.css';

export default function Button({ onClick, label, classname }) {
	return (
		<button className={classname} onClick={onClick}>
			{label}
		</button>
	);
}
