import PropTypes from 'prop-types';

import './styles.input.css';

export default function Input(props) {
	const { name, label, placeholder, secure, value, onChange } = props;
	return (
		<div className="input-container">
			<div>{label}</div>
			<input
				name={name}
				type={secure ? 'password' : 'text'}
				value={value}
				onChange={onChange}
				placeholder={placeholder}
			/>
		</div>
	);
}

Input.propTypes = {
	label: PropTypes.string,
	secure: PropTypes.bool,
	placeholder: PropTypes.string,
	value: PropTypes.string,
	onChange: PropTypes.func,
	name: PropTypes.string
};

Input.defaultProps = {
	label: 'Example',
	placeholder: 'Text',
	secure: false
};
